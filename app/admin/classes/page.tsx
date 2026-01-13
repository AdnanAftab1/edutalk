"use client";

import { useEffect, useState } from "react";

// Types matching your API response structure
type Student = {
  StudentName: string;
  Pid: string;
};

type Teacher = {
  TeacherName: string;
};

type ClassData = {
  Name: string;
  Teacher:Teacher;
  Parent: Student[];
};

export default function AdminClassesPage() {
  const [classes, setClasses] = useState<ClassData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchClasses() {
      try {
        const res = await fetch("/api/auth/admin/classList"); // Adjust path if needed
        const data = await res.json();
        console.log(data)

        if (res.ok) {
          setClasses(data);
        } else {
          setError(data.message || "Failed to load classes");
        }
      } catch (err) {
        setError("Network error occurred");
      } finally {
        setLoading(false);
      }
    }

    fetchClasses();
  }, []);

  return (
    <div className="relative z-10 max-w-7xl mx-auto p-8 mt-10">
      <div className="flex items-center justify-between mb-8 border-b border-gray-800 pb-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Classes Overview</h1>
          <p className="text-gray-400 mt-1">Manage all active classes and student enrollments</p>
        </div>
        <div className="bg-emerald-900/30 border border-emerald-900/50 px-4 py-2 rounded-lg text-emerald-400 font-medium">
          Total Classes: {classes.length}
        </div>
      </div>

      {error && (
        <div className="p-4 mb-8 bg-red-900/30 border border-red-900/50 text-red-400 rounded-lg">
          {error}
        </div>
      )}

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-64 rounded-xl bg-zinc-900/50 border border-gray-800 animate-pulse" />
          ))}
        </div>
      ) : classes.length === 0 ? (
        <div className="text-center py-20 text-gray-500 border-2 border-dashed border-gray-800 rounded-2xl">
          <h3 className="text-xl font-semibold mb-2">No Classes Found</h3>
          <p>Create a class to get started</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((cls, index) => (
            <ClassCard key={index} classData={cls} />
          ))}
        </div>
      )}
    </div>
  );
}

function ClassCard({ classData }: { classData: ClassData }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const studentCount = classData.Parent.length;

  return (
    <div className="group bg-zinc-900/40 backdrop-blur-sm border border-gray-800 hover:border-emerald-700/50 hover:shadow-lg hover:shadow-emerald-900/20 transition-all duration-300 rounded-xl overflow-hidden flex flex-col h-full">
      {/* Header */}
      <div className="p-6 border-b border-gray-800/50 bg-gradient-to-r from-transparent to-zinc-900/50">
        <div className="flex justify-between items-start mb-2">
          <div className="w-12 h-12 bg-emerald-900/20 border border-emerald-500/30 rounded-lg flex items-center justify-center text-emerald-400 font-bold text-lg">
            {classData.Name.substring(0, 2).toUpperCase()}
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-zinc-800 text-gray-400 border border-gray-700">
            {studentCount} Students
          </span>
        </div>
        <h3 className="text-xl font-bold text-white truncate">{classData.Name}</h3>
        <h3 className="text-xl font-bold text-white truncate">{classData.Teacher.TeacherName}</h3>


      </div>

      {/* Content Preview */}
      <div className="p-6 flex-1">
        <div className="space-y-3">
          {classData.Parent.slice(0, 3).map((student) => (
            <div key={student.Pid} className="flex items-center gap-3 text-sm text-gray-300">
              <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
              <span className="truncate">{student.StudentName}</span>
            </div>
          ))}
          
          {studentCount === 0 && (
            <div className="text-sm text-gray-500 italic py-2">No students enrolled yet</div>
          )}
          
          {studentCount > 3 && (
            <div className="text-xs text-gray-500 pl-5 pt-1">
              + {studentCount - 3} more students
            </div>
          )}
        </div>
      </div>

      {/* Footer / Action */}
      <div className="p-4 bg-zinc-950/30 border-t border-gray-800/50">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full py-2.5 px-4 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-medium transition-colors flex items-center justify-center gap-2 group-hover:bg-emerald-600 group-hover:text-white"
        >
          {isExpanded ? "Hide Details" : "View Full List"}
          <svg 
            className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {isExpanded && (
        <div className="border-t border-gray-800 bg-zinc-950/80 p-4 animate-in slide-in-from-top-2 duration-200 ">
          <div className="max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 pr-2 space-y-2">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 sticky top-0 bg-zinc-950/95 py-1 z-10">
              Enrolled Students
            </h4>
            {classData.Parent.map((student) => (
              <div 
                key={student.Pid} 
                className="flex justify-between items-center p-2 rounded hover:bg-zinc-800/50 group/item transition-colors"
              >
                <span className="text-sm text-gray-300 group-hover/item:text-white">
                  {student.StudentName}
                </span>
                <span className="text-xs text-gray-600 font-mono group-hover/item:text-gray-500">
                  ID: {student.Pid}...
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
