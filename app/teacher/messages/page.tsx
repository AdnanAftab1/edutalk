"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type Subject = { Sid: string; Name: string };

type StudentPeer = {
  Pid: string;
  Name: string;
  Subjects: Subject[];
};

type ApiMessage = {
  MessageId: string;
  Content: string;
  Sender: "Teacher" | "Parent" | string;
  Date: string;
};

type Message = {
  MessageId: string;
  text: string;
  isSender: boolean; 
  timestamp: string;
};

export default function ChatInterface() {
  const [students, setStudents] = useState<StudentPeer[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<StudentPeer | null>(null);

  const [loadingStudents, setLoadingStudents] = useState(true);
  const [loadingMessages, setLoadingMessages] = useState(false);

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const selectedSubtitle = useMemo(() => {
    if (!selectedStudent) return "";
    const subjects = selectedStudent.Subjects?.map((s) => s.Name).filter(Boolean) ?? [];
    return subjects.length ? subjects.join(" • ") : "No subjects";
  }, [selectedStudent]);

  const mapMessages = (data: ApiMessage[]): Message[] =>
    data.map((m) => ({
      MessageId: m.MessageId,
      text: m.Content,
      isSender: m.Sender === "Teacher",
      timestamp: new Date(m.Date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }));

  useEffect(() => {
    async function loadStudents() {
      try {
        const res = await fetch("/api/auth/teacher/students/subjects");
        const data = await res.json();

        if (res.ok && Array.isArray(data)) {
          setStudents(data);
          if (data.length > 0) setSelectedStudent(data[0]);
        } else {
          setStudents([]);
        }
      } catch (e) {
        console.error("Failed to load students:", e);
        setStudents([]);
      } finally {
        setLoadingStudents(false);
      }
    }
    loadStudents();
  }, []);

  useEffect(() => {
    if (!selectedStudent) return;

    async function loadMessages() {
      setLoadingMessages(true);
      try {
        const res = await fetch(`/api/auth/teacher/messages/view?Pid=${selectedStudent?.Pid}`);
        const data = await res.json();

        if (res.ok && Array.isArray(data)) setMessages(mapMessages(data));
        else setMessages([]);
      } catch (e) {
        console.error("Failed to load messages:", e);
        setMessages([]);
      } finally {
        setLoadingMessages(false);
      }
    }

    loadMessages();
  }, [selectedStudent]);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loadingMessages]);

  const handleSend = useCallback(async () => {
    if (!input.trim() || !selectedStudent || sending) return;

    const text = input.trim();
    const tempId = `temp-${Date.now()}`;

    setMessages((prev) => [
      ...prev,
      {
        MessageId: tempId,
        text,
        isSender: true,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);

    setInput("");
    setSending(true);

    try {
      const res = await fetch("/api/auth/teacher/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Pid: selectedStudent.Pid, Content: text }),
      });

      if (!res.ok) throw new Error("Failed to send message");

      const viewRes = await fetch(`/api/auth/teacher/messages/view?Pid=${selectedStudent.Pid}`);
      const viewData = await viewRes.json();

      if (viewRes.ok && Array.isArray(viewData)) setMessages(mapMessages(viewData));
      else {
        setMessages((prev) => prev.filter((m) => m.MessageId !== tempId));
      }
    } catch (e) {
      console.error("Send error:", e);
      setMessages((prev) => prev.filter((m) => m.MessageId !== tempId));
      setInput(text);
    } finally {
      setSending(false);
    }
  }, [input, selectedStudent, sending]);

  const inputClass =
    "w-full border border-gray-800 rounded-lg p-3 bg-zinc-950 text-white " +
    "focus:border-white focus:ring-1 focus:ring-white outline-none transition " +
    "placeholder:text-gray-500 resize-none disabled:opacity-60";

  return (
    <div className="w-full max-w-5xl mx-auto border border-gray-800 rounded-xl bg-black shadow-2xl overflow-hidden flex h-[80vh]">
      <aside className="w-1/3 border-r border-gray-800 bg-zinc-950/40 flex flex-col">
        <div className="p-5 border-b border-gray-800">
          <h2 className="text-lg font-bold text-white">Teacher Inbox</h2>
          <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Select a student</p>
        </div>

        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {loadingStudents ? (
            <div className="p-4 text-sm text-gray-500 text-center">Loading students...</div>
          ) : students.length === 0 ? (
            <div className="p-4 text-sm text-gray-500 text-center">No students found.</div>
          ) : (
            students.map((s) => {
              const active = selectedStudent?.Pid === s.Pid;
              const subtitle = (s.Subjects ?? []).map((x) => x.Name).filter(Boolean).join(" • ");

              return (
                <button
                  key={s.Pid}
                  onClick={() => setSelectedStudent(s)}
                  className={
                    "w-full text-left p-3 rounded-lg transition border " +
                    (active
                      ? "bg-zinc-800/60 border-gray-700"
                      : "bg-transparent border-transparent hover:bg-zinc-900/60 hover:border-gray-800")
                  }
                >
                  <div className="font-semibold text-sm text-white">{s.Name}</div>
                  <div className="text-xs text-gray-400 line-clamp-1">{subtitle || "No subjects"}</div>
                </button>
              );
            })
          )}
        </div>
      </aside>

      <section className="flex-1 flex flex-col bg-black">
        {selectedStudent ? (
          <>
            <header className="p-5 border-b border-gray-800 bg-black/80 backdrop-blur-md flex justify-between items-center">
              <div>
                <h1 className="text-xl font-bold text-white">{selectedStudent.Name}</h1>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1 font-semibold">
                  {selectedSubtitle}
                </p>
              </div>
            </header>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {loadingMessages ? (
                <div className="flex items-center justify-center h-32 text-gray-500">Loading messages...</div>
              ) : messages.length === 0 ? (
                <div className="flex items-center justify-center h-32 text-gray-500">
                  No messages yet. Start the conversation!
                </div>
              ) : (
                messages.map((m) => (
                  <ChatBubble key={m.MessageId} text={m.text} isSender={m.isSender} timestamp={m.timestamp} />
                ))
              )}
              <div ref={messagesEndRef} />
            </div>

            <footer className="p-4 border-t border-gray-800 bg-black">
              <div className="flex items-end gap-3">
                <textarea
                  className={`${inputClass} min-h-[50px] max-h-[120px]`}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={`Message ${selectedStudent.Name}...`}
                  rows={1}
                  disabled={sending}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                />

                <button
                  onClick={handleSend}
                  disabled={!input.trim() || sending}
                  className="h-[50px] px-6 rounded-lg font-bold transition
                             bg-white text-black hover:bg-gray-200 active:scale-[0.98]
                             disabled:bg-zinc-900 disabled:text-gray-600 disabled:cursor-not-allowed"
                >
                  {sending ? "Sending..." : "Send"}
                </button>
              </div>
            </footer>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">Select a student to start chatting</div>
        )}
      </section>
    </div>
  );
}

function ChatBubble({ text, isSender, timestamp }: { text: string; isSender: boolean; timestamp: string }) {
  return isSender ? (
    <div className="flex w-full justify-end">
      <div className="max-w-[80%] p-3 rounded-lg rounded-tr-none bg-orange-600/25 border border-orange-500/50 text-sm">
        <div className="text-white">{text}</div>
        <div className="text-xs text-orange-300 mt-1 opacity-80">{timestamp}</div>
      </div>
    </div>
  ) : (
    <div className="flex w-full justify-start">
      <div className="max-w-[80%] p-3 rounded-lg rounded-tl-none bg-blue-700/25 border border-blue-600/40 text-sm">
        <div className="text-white">{text}</div>
        <div className="text-xs text-blue-300 mt-1 opacity-80">{timestamp}</div>
      </div>
    </div>
  );
}
