'use client';

import { useEffect, useMemo, useState } from "react";

type SubjectClassInfo = {
  Name: string;             
  ClassName: string;
  NumberOfStudents: number;
  ClassId: string;
};

type Student = { StudentName: string; Pid: string };

type ClassStudentsResponse = {
  Name: string;
  Parent: Student[];
};

export default function StudentsPage() {
  const [subjectInfos, setSubjectInfos] = useState<SubjectClassInfo[]>([]);
  const [studentsByClassId, setStudentsByClassId] = useState<Record<string, Student[]>>({});
  const [loading, setLoading] = useState(true);

  const classes = useMemo(() => {
    const map = new Map<string, { classId: string; className: string; subjects: string[]; expectedCount?: number }>();

    for (const row of subjectInfos) {
      const existing = map.get(row.ClassId);
      if (!existing) {
        map.set(row.ClassId, {
          classId: row.ClassId,
          className: row.ClassName,
          subjects: [row.Name],
          expectedCount: row.NumberOfStudents,
        });
      } else {
        existing.subjects.push(row.Name);
        existing.expectedCount = row.NumberOfStudents;
      }
    }

    return Array.from(map.values());
  }, [subjectInfos]);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);

        const sRes = await fetch("/api/auth/teacher/classes", { method: "GET" });
        if (!sRes.ok) throw new Error("Failed to fetch subjects");
        const sData: SubjectClassInfo[] = await sRes.json();

        if (cancelled) return;
        setSubjectInfos(sData);

        const uniqueClassIds = Array.from(new Set(sData.map(x => x.ClassId)));

        const results = await Promise.all(
          uniqueClassIds.map(async (classId) => {
            const r = await fetch(`/api/auth/teacher/classes/classdetails?classid=${classId}`, { method: "GET" });
            if (!r.ok) throw new Error(`Failed to fetch students for class ${classId}`);
            const data: ClassStudentsResponse = await r.json();
            return { classId, students: data.Parent };
          })
        );

        if (cancelled) return;

        const dict: Record<string, Student[]> = {};
        for (const row of results) dict[row.classId] = row.students;

        setStudentsByClassId(dict);
      } catch (e) {
        console.log(e);
        setSubjectInfos([]);
        setStudentsByClassId({});
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return (
      <main className="relative z-10 container mx-auto px-4 py-8 text-gray-300">
        Loading students...
      </main>
    );
  }

  return (
    <main className="relative z-10 container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 text-white">Students</h1>
      <p className="text-gray-400 mb-6">Grouped by class and the subjects you teach.</p>

      <div className="space-y-6">
        {classes.map((c) => {
          const students = studentsByClassId[c.classId] ?? [];
          return (
            <section key={c.classId} className="border border-gray-800 rounded-lg p-4 bg-black/40">
              <div className="flex flex-col gap-1 mb-4">
                <div className="text-xl font-semibold text-white">{c.className}</div>
                <div className="text-sm text-gray-400">
                  Subjects: {c.subjects.join(", ")}
                </div>
                <div className="text-sm text-gray-400">
                  Students: {students.length}{typeof c.expectedCount === "number" ? ` / ${c.expectedCount}` : ""}
                </div>
              </div>

              {students.length === 0 ? (
                <div className="text-gray-500">No students found.</div>
              ) : (
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {students.map((s) => (
                    <li key={s.Pid} className="border border-gray-800 rounded p-3 text-white">
                      {s.StudentName}
                      <div className="text-xs text-gray-500">{s.Pid}</div>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          );
        })}
      </div>
    </main>
  );
}
