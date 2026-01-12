"use client";

import { useEffect, useState, useRef } from "react";

// Types
type ClassListItem = {
  id: string;
  Name: string;
};

type ParentInfo = {
  Pid: string;
  StudentName: string;
};

type ClassData = {
  Name: string;
  Parent: ParentInfo[];
};

type Message = {
  text: string;
  isSender: boolean; // true = Teacher, false = Parent
};

export default function TeacherChatPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Ambience - Blue tint for Teacher side */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600 opacity-10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <main className="relative z-10 p-4 md:p-6 flex justify-center items-center min-h-[calc(100vh-80px)]">
        <TeacherChatInterface />
      </main>
    </div>
  );
}

function TeacherChatInterface() {
  // Class selection state
  const [classes, setClasses] = useState<ClassListItem[]>([]);
  const [selectedClassId, setSelectedClassId] = useState("");
  const [classData, setClassData] = useState<ClassData | null>(null);
  const [selectedStudent, setSelectedStudent] = useState<ParentInfo | null>(null);
  const [loadingClasses, setLoadingClasses] = useState(true);
  const [loadingStudents, setLoadingStudents] = useState(false);

  // Chat State
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello, I wanted to discuss the recent assignment.", isSender: false },
    { text: "Sure, let's go over the details.", isSender: true },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // STEP 1: Fetch teacher's classes on mount
  useEffect(() => {
    async function fetchClasses() {
      try {
        // You'll need to create this API endpoint to return teacher's assigned classes
        const res = await fetch('/api/auth/teacher/classes');
        const data = await res.json();
        
        if (res.ok && Array.isArray(data)) {
          setClasses(data);
          if (data.length > 0) {
            setSelectedClassId(data[0].id); // Auto-select first class
          }
        }
      } catch (err) {
        console.error("Failed to load classes:", err);
      } finally {
        setLoadingClasses(false);
      }
    }
    fetchClasses();
  }, []);

  // STEP 2: Fetch class details when class is selected
  useEffect(() => {
    if (!selectedClassId) return;
    
    async function loadClassData() {
      setLoadingStudents(true);
      try {
        const res = await fetch(`/api/auth/teacher/classes/classdetails?classid=${selectedClassId}`);
        const data = await res.json();
        
        if (res.ok && data.Parent) {
          setClassData(data);
          if (data.Parent.length > 0) {
            setSelectedStudent(data.Parent[0]);
          }
        } else {
          console.error("Failed to load class details", data);
        }
      } catch (err) {
        console.error("Error occurred:", err);
      } finally {
        setLoadingStudents(false);
      }
    }
    
    loadClassData();
  }, [selectedClassId]);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleSend() {
    if (input.trim() === "") return;
    setMessages((prev) => [...prev, { text: input, isSender: true }]);
    setInput("");
  }

  const inputClass = "relative z-20 w-full border border-gray-700 rounded-lg p-3 bg-zinc-900 text-white focus:border-white focus:ring-1 focus:ring-white outline-none transition-all placeholder-gray-500 resize-none";

  return (
    <div className="relative z-10 w-full max-w-5xl mx-auto border border-gray-800 rounded-xl bg-black shadow-2xl overflow-hidden flex h-[80vh] animate-fade">
      
      {/* LEFT SIDEBAR: TWO-LEVEL - Classes → Students */}
      <div className="w-1/3 border-r border-gray-800 flex flex-col bg-zinc-950/50">
        
        {/* Class Selection */}
        <div className="p-5 border-b border-gray-800">
          <h2 className="text-lg font-bold text-white mb-3">My Classes</h2>
          <div className="space-y-2 max-h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800">
            {loadingClasses ? (
              <div className="text-sm text-gray-500">Loading classes...</div>
            ) : classes.length === 0 ? (
              <div className="text-sm text-gray-500">No classes assigned</div>
            ) : (
              classes.map((cls) => (
                <button
                  key={cls.id}
                  onClick={() => setSelectedClassId(cls.id)}
                  className={`w-full text-left p-3 rounded-lg transition-all flex items-center gap-3 ${
                    selectedClassId === cls.id 
                      ? "bg-blue-900/50 border border-blue-700 text-white shadow-sm" 
                      : "hover:bg-zinc-900 border border-transparent text-gray-300"
                  }`}
                >
                  <div className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <span className="font-semibold text-sm block truncate">{cls.Name}</span>
                  </div>
                </button>
              ))
            )}
          </div>
        </div>

        {/* Student List (shows when class selected) */}
        {selectedClassId && (
          <div className="flex-1 flex flex-col border-t border-gray-800 overflow-hidden">
            <div className="p-4 border-b border-gray-800 bg-black/50">
              <h3 className="font-bold text-sm text-white truncate">{classData?.Name}</h3>
              <p className="text-xs text-gray-500 mt-1">{classData?.Parent?.length || 0} Students</p>
            </div>
            
            <div className="flex-1 overflow-y-auto p-2 space-y-1 scrollbar-thin scrollbar-thumb-gray-800">
              {loadingStudents ? (
                <div className="p-4 text-sm text-gray-500 text-center">Loading students...</div>
              ) : classData?.Parent?.length === 0 ? (
                <div className="p-4 text-sm text-gray-500 text-center">No students found</div>
              ) : (
                classData?.Parent.map((p) => (
                  <button
                    key={p.Pid}
                    onClick={() => setSelectedStudent(p)}
                    className={`w-full text-left p-3 rounded-lg transition-all flex flex-col gap-1 ${
                      selectedStudent?.Pid === p.Pid 
                        ? "bg-zinc-800 border border-gray-700 shadow-sm" 
                        : "hover:bg-zinc-900 border border-transparent"
                    }`}
                  >
                    <span className="font-semibold text-sm text-white truncate">{p.StudentName}</span>
                    <span className="text-xs text-gray-400">Parent ID: {p.Pid.substring(0, 8)}...</span>
                  </button>
                ))
              )}
            </div>
          </div>
        )}
      </div>

      {/* RIGHT MAIN: CHAT AREA */}
      <div className="flex-1 flex flex-col bg-black relative">
        {selectedStudent ? (
          <>
            {/* Header */}
            <div className="p-5 border-b border-gray-800 bg-black/80 backdrop-blur-md z-30 flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-white">T</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white truncate">{selectedStudent.StudentName}</h1>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mt-1">
                  Parent Chat
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-gray-800">
              {messages.map((msg, index) => (
                <Chatbubble key={index} text={msg.text} isSender={msg.isSender} />
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-800 bg-black z-30">
              <div className="relative flex items-end gap-3">
                <textarea
                  className={`${inputClass} min-h-[50px] max-h-[120px]`}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={`Message parent of ${selectedStudent.StudentName}...`}
                  rows={1}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="h-[50px] px-6 bg-white text-black font-bold rounded-lg hover:bg-gray-200 active:scale-[0.98] disabled:bg-gray-800 disabled:text-gray-600 transition-all flex items-center justify-center shrink-0"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
                    <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Z" />
                  </svg>
                </button>
              </div>
            </div>
          </>
        ) : selectedClassId ? (
          <div className="flex-1 flex items-center justify-center text-gray-500 flex-col gap-4 p-8">
            <div className="w-16 h-16 rounded-full bg-zinc-900 border border-gray-800 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32" fill="currentColor">
                <path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/>
              </svg>
            </div>
            <p className="text-center">Select a student to start chatting</p>
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            Select a class to begin
          </div>
        )}
      </div>
    </div>
  );
}

function Chatbubble({ text, isSender }: { text: string; isSender: boolean }) {
  if (isSender) {
    // TEACHER (SENDER) -> BLUE
    return (
      <div className="flex w-full justify-end animate-fade-left">
        <div className="max-w-[80%] p-3 rounded-lg rounded-tr-none bg-blue-700 text-white font-medium border border-blue-600 shadow-md text-sm">
          {text}
        </div>
      </div>
    );
  } else {
    // PARENT (RECEIVER) -> ORANGE
    return (
      <div className="flex w-full justify-start animate-fade-right">
        <div className="max-w-[80%] p-3 rounded-lg rounded-tl-none bg-orange-600 text-white font-medium border border-orange-500 shadow-md text-sm">
          {text}
        </div>
      </div>
    );
  }
}
