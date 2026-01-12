"use client";
import { useState, useEffect } from "react";

interface Student {
  Pid: string;
  StudentName: string;
}

export default function AttendancePage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [attendance, setAttendance] = useState<Record<string, boolean>>({});
  const [issuedFor, setIssuedFor] = useState<string>("");
  const [className,setClass]=useState("");
  const [loading, setLoading] = useState(true);

  // Fetch student list on mount
  useEffect(() => {
    fetch("/api/auth/teacher/attendance/list", { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        setStudents(data.Parent || []);
        setIssuedFor(data.id || ""); 
        setClass(data.Name || "");

        
        const initialAttendance: Record<string, boolean> = {};
        data.Parent.forEach((s: Student) => (initialAttendance[s.Pid] = false));
        setAttendance(initialAttendance);
        setLoading(false);
      });
  }, []);

  const handleToggle = (pid: string) => {
    setAttendance((prev) => ({ ...prev, [pid]: !prev[pid] }));
  };

  const handleSubmit = async () => {
    const list = students.map((s) => ({
      ParentId: s.Pid,
      isPresent: attendance[s.Pid],
    }));

    const response = await fetch("/api/auth/teacher/attendance", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ list, IssuedFor: issuedFor }),
    });

    if (response.ok) alert("Attendance submitted successfully!");
    else alert("Failed to submit attendance");
  };

  if (loading) return <p>Loading class list...</p>;

  return (
    <div className="p-6  delay-500 duration-600 animate-fade">
      <h1 className="text-2xl font-bold mb-4">Mark Attendance</h1>
      <h2 className="text-xl font-semibold mb-4">{className}</h2>
      
      <table className="w-full  border  ">
        <thead>
          <tr className="bg-gray-100/25  ">
            <th className="border  p-2">Student Name</th>
            <th className="border  p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.Pid}>
              <td className="border p-2">{student.StudentName}</td>
              <td className="border p-2 text-center">
                <input
                  type="checkbox"
                  checked={attendance[student.Pid]}
                  onChange={() => handleToggle(student.Pid)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      

      <div className="flex w-full">
      <button 
        onClick={handleSubmit}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded place-self-center"
      >
        Submit Attendance
      </button>
      </div>
    </div>
  );
}
