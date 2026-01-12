"use client";

import { useEffect, useState, useRef } from "react";
import { Navbar } from "../academics/page"; 

// Type definitions based on your API response
type Teacher = {
  Tid: string;
  Teacher: string;
  Subject: string;
};

type Message = {
  text: string;
  isSender: boolean; // true = Parent, false = Teacher
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#F97316] opacity-10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <Navbar selected={'messages'} />
      
      <main className="relative z-10 p-4 md:p-6 flex justify-center items-center min-h-[calc(100vh-80px)]">
        <ChatInterface />
      </main>
    </div>
  );
}

function ChatInterface() {
  // State for Teachers List
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
  const [loading, setLoading] = useState(true);

  // State for Chat
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello, could you help me with my son's grades?", isSender: true },
    { text: "Certainly! What seems to be the issue?", isSender: false },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // FETCH API
  useEffect(() => {
    async function loadTeachers() {
      try {
        // Using relative path is better than localhost for deployment
        const res = await fetch('/api/auth/parent/list');
        const data = await res.json();
        
        if (res.ok && Array.isArray(data)) {
          setTeachers(data);
          if (data.length > 0) setSelectedTeacher(data[0]); // Select first by default
        } else {
          console.error("Failed to load teachers", data);
        }
      } catch (err) {
        console.error("Error occurred:", err);
      } finally {
        setLoading(false);
      }
    }
    loadTeachers();
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleSend() {
    if (input.trim() === "") return;
    setMessages((prev) => [...prev, { text: input, isSender: true }]);
    setInput("");
  }

  // SHARED STYLES (BB1)
  const inputClass = "relative z-20 w-full border border-gray-700 rounded-lg p-3 bg-zinc-900 text-white focus:border-white focus:ring-1 focus:ring-white outline-none transition-all placeholder-gray-500 resize-none";

  return (
    <div className="relative z-10 w-full max-w-5xl mx-auto border border-gray-800 rounded-xl bg-black shadow-2xl overflow-hidden flex h-[80vh] animate-fade">
      
      {/* LEFT SIDEBAR: TEACHER LIST */}
      <div className="w-1/3 border-r border-gray-800 flex flex-col bg-zinc-950/50">
        <div className="p-5 border-b border-gray-800">
          <h2 className="text-lg font-bold text-white">Messages</h2>
          <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Select a Teacher</p>
        </div>
        
        <div className="flex-1 overflow-y-auto p-2 space-y-1 scrollbar-thin scrollbar-thumb-gray-800">
          {loading ? (
             <div className="p-4 text-sm text-gray-500 text-center">Loading teachers...</div>
          ) : teachers.length === 0 ? (
             <div className="p-4 text-sm text-gray-500 text-center">No teachers found.</div>
          ) : (
            teachers.map((t) => (
              <button
                key={t.Tid}
                onClick={() => setSelectedTeacher(t)}
                className={`w-full text-left p-3 rounded-lg transition-all flex flex-col gap-1 ${
                  selectedTeacher?.Tid === t.Tid 
                    ? "bg-zinc-800 border border-gray-700 shadow-sm" 
                    : "hover:bg-zinc-900 border border-transparent"
                }`}
              >
                <span className="font-semibold text-sm text-white">{t.Teacher}</span>
                <span className="text-xs text-gray-400">{t.Subject}</span>
              </button>
            ))
          )}
        </div>
      </div>

      {/* RIGHT MAIN: CHAT AREA */}
      <div className="flex-1 flex flex-col bg-black relative">
        {selectedTeacher ? (
          <>
            {/* Header */}
            <div className="p-5 border-b border-gray-800 bg-black/80 backdrop-blur-md z-30 flex justify-between items-center">
              <div>
                <h1 className="text-xl font-bold text-white">{selectedTeacher.Teacher}</h1>
                <div className="flex items-center gap-2 mt-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                    {selectedTeacher.Subject} Teacher
                  </p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-gray-800">
              {messages.map((msg, index) => (
                <Chatbubble
                  key={index}
                  text={msg.text}
                  isSender={msg.isSender}
                />
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
                  placeholder={`Message ${selectedTeacher.Teacher}...`}
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
                  className="h-[50px] px-6 bg-white text-black font-bold rounded-lg hover:bg-gray-200 active:scale-[0.98] disabled:bg-gray-800 disabled:text-gray-600 transition-all flex items-center justify-center shrink-0 cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
                    <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Z" />
                  </svg>
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500 flex-col gap-4">
             <div className="w-16 h-16 rounded-full bg-zinc-900 border border-gray-800 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32" fill="currentColor">
                    <path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/>
                </svg>
             </div>
             <p>Select a teacher to start chatting</p>
          </div>
        )}
      </div>
    </div>
  );
}

function Chatbubble({ text, isSender }: { text: string; isSender: boolean }) {
  if (isSender) {
    // PARENT (SENDER) -> ORANGE
    return (
      <div className="flex w-full justify-end animate-fade-left">
        <div className="max-w-[80%] p-3 rounded-lg rounded-tr-none bg-orange-600/30 text-white font-medium border border-orange-500/60 shadow-md text-sm">
          {text}
        </div>
      </div>
    );
  } else {
    // TEACHER (RECEIVER) -> BLUE
    return (
      <div className="flex w-full justify-start animate-fade-right">
        <div className="max-w-[80%] p-3 rounded-lg rounded-tl-none bg-blue-700/30 text-white font-medium border border-blue-600/50 shadow-md text-sm">
          {text}
        </div>
      </div>
    );
  }
}
