"use client";

import { useEffect, useState, useMemo } from "react";

type Subject = { Sid: string; Name: string };
type Student = { Pid: string; Name: string; Subjects: Subject[] };

export default function IssueResultPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [studentId, setStudentId] = useState("");
  const [subjectId, setSubjectId] = useState("");
  const [examName, setExamName] = useState("");
  const [grade, setGrade] = useState("");

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [msg, setMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/auth/teacher/students/subjects");
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Failed to load");
        setStudents(Array.isArray(data) ? data : data.students || []);
      } catch (err: any) {
        setMsg({ type: "error", text: err.message });
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const availableSubjects = useMemo(() => {
    const s = students.find((st) => st.Pid === studentId);
    return s ? s.Subjects : [];
  }, [students, studentId]);

  useEffect(() => {
    setSubjectId("");
  }, [studentId]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMsg(null);
    if (!studentId || !subjectId || !examName || !grade) return setMsg({ type: "error", text: "Fill all fields" });

    setSubmitting(true);
    try {
      const res = await fetch("/api/auth/teacher/students/academics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Pid: studentId, Sid: subjectId, ExamName: examName, Grade: grade }),
      });
      if (!res.ok) throw new Error("Failed to issue result");
      setMsg({ type: "success", text: "Result issued!" });
      setExamName(""); setGrade(""); setSubjectId("");
    } catch (err: any) {
      setMsg({ type: "error", text: err.message });
    } finally {
      setSubmitting(false);
    }
  }

  // FORCE POINTER EVENTS AND Z-INDEX
  const inputClass = "relative z-20 w-full border border-gray-700 rounded-lg p-3 bg-zinc-900 text-white focus:border-white focus:ring-1 focus:ring-white outline-none disabled:opacity-30 disabled:cursor-not-allowed transition-all pointer-events-auto cursor-text";

  return (
    // relative z-10 ensures this entire block is on top of any layout background
    <div className="relative z-10 max-w-xl mx-auto p-8 mt-10 border border-gray-800 rounded-xl bg-black text-white shadow-2xl pointer-events-auto   delay-500 duration-600 animate-fade">
      <h1 className="text-2xl font-bold mb-6 text-white border-b border-gray-800 pb-4">Issue Result</h1>
      
      {msg && (
        <div className={`p-3 mb-6 text-sm rounded-md font-medium ${msg.type === "error" ? "bg-red-900/30 text-red-400 border border-red-900/50" : "bg-green-900/30 text-green-400 border border-green-900/50"}`}>
          {msg.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-400 uppercase tracking-wider">Student</label>
          <select
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            disabled={loading}
            // Using cursor-pointer for selects
            className={inputClass.replace("cursor-text", "cursor-pointer")}
          >
            <option value="" className="bg-black text-gray-500">{loading ? "Fetching students..." : "Choose a student"}</option>
            {students.map((s) => (
              <option key={s.Pid} value={s.Pid} className="bg-zinc-900 text-white">{s.Name}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-400 uppercase tracking-wider">Subject</label>
          <select
            value={subjectId}
            onChange={(e) => setSubjectId(e.target.value)}
            disabled={!studentId || loading}
            className={inputClass.replace("cursor-text", "cursor-pointer")}
          >
            <option value="" className="bg-black text-gray-500">Select Subject</option>
            {availableSubjects.map((sub) => (
              <option key={sub.Sid} value={sub.Sid} className="bg-zinc-900 text-white">{sub.Name}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-400 uppercase tracking-wider">Exam Name</label>
            <input 
              value={examName} 
              onChange={e => setExamName(e.target.value)} 
              disabled={!subjectId}
              className={inputClass} 
              placeholder="e.g. Midterm"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-400 uppercase tracking-wider">Grade/Score</label>
            <input 
              value={grade} 
              onChange={e => setGrade(e.target.value)} 
              disabled={!subjectId}
              className={inputClass} 
              placeholder="e.g. A"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={submitting || !studentId || !subjectId || !examName || !grade}
          className="relative z-30 w-full bg-white text-black font-bold py-4 px-4 rounded-lg hover:bg-gray-200 active:scale-[0.98] disabled:bg-gray-800 disabled:text-gray-500 transition-all shadow-lg shadow-white/5 cursor-pointer pointer-events-auto"
        >
          {submitting ? "Processing..." : "Issue Result"}
        </button>
      </form>
    </div>
  );
}
