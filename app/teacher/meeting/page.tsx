"use client";

import { useEffect, useState } from "react";

type MeetingRequest = {
  id: string;
  Sender: {
    ParentName: string;
  };
  content: string;
  date: string;
};

export default function TeacherMeetingRequests() {
  const [requests, setRequests] = useState<MeetingRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState<{ [key: string]: boolean }>({});
  const [msg, setMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // FETCH REQUESTS
  useEffect(() => {
    async function fetchRequests() {
      try {
        const res = await fetch("/api/auth/teacher/meeting/view");
        const data = await res.json();
        
        if (res.ok) {
          setRequests(data);
        } else {
          setMsg({ type: "error", text: data.message || "Failed to load requests" });
        }
      } catch (err: any) {
        setMsg({ type: "error", text: err.message || "Network error" });
      } finally {
        setLoading(false);
      }
    }
    fetchRequests();
  }, []);

  // NEW: CREATE MEETING REQUEST (Matches your API exactly)
  const [showForm, setShowForm] = useState(true);
  const [formData, setFormData] = useState({
    date: "",
    content: "",
    teacher: "",
    studentID: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function handleCreateMeeting() {
    if (!formData.date || !formData.content || !formData.studentID) {
      setMsg({ type: "error", text: "Please fill all fields" });
      return;
    }

    setSubmitting({ true: true });
    setMsg(null);

    try {
      const res = await fetch("/api/auth/teacher/meeting/create", { // Your API endpoint
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date: formData.date,
          content: formData.content,
          teacher: formData.teacher,
          studentID: formData.studentID
        }),
      });

      const data = await res.json();
      
      if (res.ok) {
        setMsg({ type: "success", text: "Meeting request created successfully!" });
        setFormData({ date: "", content: "", teacher: "", studentID: "" });
        setShowForm(false);
        // Refresh requests
        window.location.reload();
      } else {
        setMsg({ type: "error", text: data.error || "Failed to create meeting" });
      }
    } catch (err: any) {
      setMsg({ type: "error", text: err.message || "Network error" });
    } finally {
      setSubmitting({ true: false });
    }
  }

  // HANDLE APPROVE/REJECT (Updated for your API)
  async function handleAction(requestId: string, approved: boolean) {
    setSubmitting((prev) => ({ ...prev, [requestId]: true }));
    setMsg(null);

    try {
      const res = await fetch("/api/auth/teacher/meeting/approve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          approved, 
          meetID: requestId 
        }),
      });

      const data = await res.json();
      
      if (res.ok) {
        setMsg({ type: "success", text: data.message });
        setRequests((prev) => prev.filter((req) => req.id !== requestId));
      } else {
        setMsg({ type: "error", text: data.message || "Action failed" });
      }
    } catch (err: any) {
      setMsg({ type: "error", text: err.message || "Network error" });
    } finally {
      setSubmitting((prev) => ({ ...prev, [requestId]: false }));
    }
  }

  const inputClass = "relative z-20 border border-gray-700 rounded-lg p-3 bg-zinc-900 text-white focus:border-white focus:ring-1 focus:ring-white outline-none disabled:opacity-30 disabled:cursor-not-allowed transition-all pointer-events-auto cursor-pointer";

  return (
    <div className="relative z-10 max-w-2xl mx-auto p-8 mt-10 border border-gray-800 rounded-xl bg-black text-white shadow-2xl pointer-events-auto animate-fade">
      
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-white border-b border-gray-800 pb-2">
          Meeting Requests ({requests.length})
        </h1>
        
        {/* CREATE NEW MEETING BUTTON */}
        <button 
          onClick={() => setShowForm(!showForm)}
          className="px-6 py-2 bg-blue-900/50 text-blue-400 border border-blue-900/50 rounded-lg hover:bg-blue-900/70 font-medium transition-all"
        >
          {showForm ? "Cancel" : "+ New Meeting"}
        </button>
      </div>

      {/* CREATE MEETING FORM */}
      {showForm && (
        <div className="mb-8 p-6 bg-zinc-900/50 border border-zinc-700 rounded-xl">
          <h3 className="text-lg font-semibold mb-4 text-white">Schedule New Meeting</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Date & Time</label>
              <input
                type="date"
                name="date"
                className={inputClass}
                value={formData.date}
                onChange={handleInputChange}
                disabled={submitting.true}
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Student ID</label>
              <input
                type="text"
                name="studentID"
                placeholder="Parent/Student ID"
                className={inputClass}
                value={formData.studentID}
                onChange={handleInputChange}
                disabled={submitting.true}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Message</label>
            <textarea
              name="content"
              rows={4}
              placeholder="Meeting purpose..."
              className={`${inputClass} resize-none`}
              value={formData.content}
              onChange={handleInputChange}
              disabled={submitting.true}
            />
          </div>

          <div className="flex gap-3 mt-6">
            <button
              onClick={handleCreateMeeting}
              disabled={submitting.true || !formData.date || !formData.content || !formData.studentID}
              className="flex-1 bg-emerald-900/50 text-emerald-400 border border-emerald-900/50 font-semibold py-3 px-6 rounded-lg hover:bg-emerald-900/70 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {
                submitting.true ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-emerald-400"></div>
                  Creating...
                </>
              ) :
               (
                "Create Meeting"
              )}
            </button>
          </div>
        </div>
      )}

      {msg && (
        <div className={`p-4 mb-6 text-sm rounded-lg font-medium ${
          msg.type === "error" 
            ? "bg-red-900/30 text-red-400 border border-red-900/50" 
            : "bg-green-900/30 text-green-400 border border-green-900/50"
        }`}>
          {msg.text}
        </div>
      )}

      {loading ? (
        <div className="flex items-center justify-center py-12 text-gray-500">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
          <span className="ml-3">Loading requests...</span>
        </div>
      ) : requests.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          <div className="w-20 h-20 mx-auto rounded-full bg-zinc-900 border-2 border-dashed border-gray-700 flex items-center justify-center mb-4">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">No Meeting Requests</h3>
          <p className="text-sm">Use "New Meeting" to schedule or wait for parent requests</p>
        </div>
      ) : (
        <div className="space-y-4 max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800">
          {requests.map((request) => (
            <div 
              key={request.id}
              className="group bg-zinc-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all hover:shadow-xl"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">  
                  <h3 className="text-lg font-bold text-white mb-1">
                    Meeting Request from {request.Sender.ParentName}
                  </h3>
                  <p className="text-sm text-gray-400 mb-2">
                    Preferred DateTime: {new Date(request.date).toLocaleString()}
                  </p>
                </div>
                <span className="text-xs px-3 py-1 rounded-full font-medium bg-blue-900/50 text-blue-400 border border-blue-900/50">
                  Pending
                </span>
              </div>

              {/* Request Content */}
              <div className="mb-6 p-4 bg-black/30 border border-gray-800 rounded-lg">
                <span className="text-gray-500 block mb-3 font-semibold uppercase tracking-wider text-xs">
                  Message
                </span>
                <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">
                  {request.content}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t border-gray-800">
                <button
                  onClick={() => handleAction(request.id, false)}
                  disabled={submitting[request.id]}
                  className="flex-1 bg-red-900/50 text-red-400 border border-red-900/50 font-semibold py-3 px-6 rounded-lg hover:bg-red-900/70 hover:border-red-900/70 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {submitting[request.id] ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-red-400"></div>
                      Rejecting...
                    </>
                  ) : (
                    "Reject"
                  )}
                </button>
                
                <button
                  onClick={() => handleAction(request.id, true)}
                  disabled={submitting[request.id]}
                  className="flex-1 bg-green-900/50 text-green-400 border border-green-900/50 font-semibold py-3 px-6 rounded-lg hover:bg-green-900/70 hover:border-green-900/70 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {submitting[request.id] ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-green-400"></div>
                      Approving...
                    </>
                  ) : (
                    "Approve & Notify"
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
