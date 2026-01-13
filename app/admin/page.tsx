"use client";

import { useEffect, useState } from "react";

type UnverifiedUser = {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  role: string;
  AuthFile: string;
  createdAt: string;
};

type ParentDetails = {
  studentName: string;
  classId: string;
};

export default function VerifyRequests() {
  const [users, setUsers] = useState<UnverifiedUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState<{ [key: string]: boolean }>({});
  const [msg, setMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [parentDetails, setParentDetails] = useState<{ [key: string]: ParentDetails }>({});

  // FETCH UNVERIFIED USERS
  useEffect(() => {
    async function fetchUnverified() {
      try {
        const res = await fetch("/api/auth/admin/requests/view");
        const data = await res.json();
        
        if (res.ok) {
          setUsers(data);
        } else {
          setMsg({ type: "error", text: data.message || "Failed to load requests" });
        }
      } catch (err: any) {
        setMsg({ type: "error", text: err.message || "Network error" });
      } finally {
        setLoading(false);
      }
    }
    fetchUnverified();
  }, []);

  // APPROVE/REJECT USER - Updated to match your API
  async function handleAction(userId: string, status: "Successfull" | "Rejected", role: string) {
    setSubmitting((prev) => ({ ...prev, [userId]: true }));
    setMsg(null);

    // Prepare request body matching your API interface
    const requestBody: any = {
      id: userId,
      role,
      status
    };

    // For Parent approval, add required StudentName & ClassId
    if (role === "Parent" && status === "Successfull") {
      const details = parentDetails[userId];
      if (!details?.studentName || !details?.classId) {
        setMsg({ type: "error", text: "Please fill Student Name and Class ID for Parent approval" });
        setSubmitting((prev) => ({ ...prev, [userId]: false }));
        return;
      }
      requestBody.Parent = {
        StudentName: details.studentName,
        ClassId: details.classId
      };
    }

    try {
      const res = await fetch("/api/auth/admin/requests/approve", { // Updated endpoint
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      const data = await res.json();
      
      if (res.ok) {
        setMsg({ type: "success", text: data.message });
        setUsers((prev) => prev.filter((user) => user.id !== userId));
        // Clear parent details
        setParentDetails((prev) => {
          const newDetails = { ...prev };
          delete newDetails[userId];
          return newDetails;
        });
      } else {
        setMsg({ type: "error", text: data.error || "Action failed" });
      }
    } catch (err: any) {
      setMsg({ type: "error", text: err.message || "Network error" });
    } finally {
      setSubmitting((prev) => ({ ...prev, [userId]: false }));
    }
  }

  const updateParentDetails = (userId: string, field: keyof ParentDetails, value: string) => {
    setParentDetails(prev => ({
      ...prev,
      [userId]: {
        ...(prev[userId] || {} as ParentDetails),
        [field]: value
      }
    }));
  };

  return (
    <div className="relative z-10 max-w-5xl mx-auto p-8 mt-10 border border-gray-800 rounded-xl bg-black text-white shadow-2xl pointer-events-auto animate-fade">
      
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-white border-b border-gray-800 pb-2">
          Verify Registrations ({users.length})
        </h1>
        <button 
          onClick={() => window.location.reload()} 
          className="px-4 py-2 bg-emerald-900/50 text-emerald-400 border border-emerald-900/50 rounded-lg hover:bg-emerald-900/70 text-sm font-medium"
        >
          Refresh
        </button>
      </div>

      {msg && (
        <div className={`p-4 mb-8 text-sm rounded-lg font-medium ${
          msg.type === "error" 
            ? "bg-red-900/30 text-red-400 border border-red-900/50" 
            : "bg-emerald-900/30 text-emerald-400 border border-emerald-900/50"
        }`}>
          {msg.text}
        </div>
      )}

      {loading ? (
        <div className="flex items-center justify-center py-20 text-gray-500">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-emerald-400 mr-4"></div>
          <span className="text-lg">Loading verification requests...</span>
        </div>
      ) : users.length === 0 ? (
        <div className="text-center py-20 text-gray-500 border-2 border-dashed border-gray-800 rounded-2xl p-12">
          <div className="w-24 h-24 mx-auto rounded-full bg-emerald-900/30 border-2 border-emerald-900/50 flex items-center justify-center mb-6">
            <svg className="w-12 h-12 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3">No Pending Requests</h3>
          <p className="text-lg">All registrations are verified</p>
        </div>
      ) : (
        <div className="grid gap-6 max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800 pr-2">
          {users.map((user) => (
            <div 
              key={user.id}
              className="group bg-zinc-900/50 border border-gray-800 rounded-xl p-6 hover:border-emerald-700/50 hover:shadow-emerald-500/10 transition-all hover:shadow-xl"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-6 pb-4 border-b border-gray-800">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-900/50 border-2 border-emerald-900/50 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-emerald-400">
                      {user.role === "Parent" ? "P" : user.role === "Teacher" ? "T" : "A"}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{user.name}</h3>
                    <p className="text-sm text-gray-400">{user.role}</p>
                  </div>
                </div>
                <span className="text-xs px-3 py-1 rounded-full font-medium bg-emerald-900/50 text-emerald-400 border border-emerald-900/50">
                  {new Date(user.createdAt).toLocaleDateString()}
                </span>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2 text-sm">
                  <span className="text-gray-500">Email</span>
                  <p className="font-semibold text-white">{user.email}</p>
                </div>
                <div className="space-y-2 text-sm">
                  <span className="text-gray-500">Phone</span>
                  <p className="font-semibold text-white">{user.phoneNumber || "N/A"}</p>
                </div>
              </div>

              {/* PARENT-SPECIFIC FIELDS (Only show for approval) */}
              {user.role === "Parent" && (
                <div className="mb-6 p-4 bg-emerald-900/20 border-2 border-emerald-900/50 rounded-xl">
                  <h4 className="text-sm font-semibold text-emerald-400 mb-3 uppercase tracking-wider">
                    Parent Details (Required for Approval)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-gray-400 mb-1">Student Name</label>
                      <input
                        type="text"
                        placeholder="Enter student name"
                        className="w-full bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-2 rounded-lg text-white placeholder-gray-400 focus:border-emerald-400 focus:outline-none"
                        value={parentDetails[user.id]?.studentName || ""}
                        onChange={(e) => updateParentDetails(user.id, "studentName", e.target.value)}
                        disabled={submitting[user.id]}
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 mb-1">Class ID</label>
                      <input
                        type="text"
                        placeholder="Enter class ID (e.g., class-uuid)"
                        className="w-full bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-2 rounded-lg text-white placeholder-gray-400 focus:border-emerald-400 focus:outline-none"
                        value={parentDetails[user.id]?.classId || ""}
                        onChange={(e) => updateParentDetails(user.id, "classId", e.target.value)}
                        disabled={submitting[user.id]}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Auth File */}
              {user.AuthFile && (
                <div className="mb-6 p-4 bg-zinc-800/50 border border-gray-700 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Authorization Document</span>
                    <a 
                      href={user.AuthFile} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 text-sm font-medium underline"
                    >
                      View File →
                    </a>
                  </div>
                  <p className="text-xs text-gray-500 truncate max-w-full">{user.AuthFile}</p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4 pt-6 border-t border-gray-800">
                <button
                  onClick={() => handleAction(user.id, "Rejected", user.role as string)}
                  disabled={submitting[user.id]}
                  className="flex-1 bg-red-900/50 text-red-400 border border-red-900/50 font-semibold py-4 px-6 rounded-lg hover:bg-red-900/70 hover:border-red-900/70 transition-all disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg"
                >
                  {submitting[user.id] ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-red-400"></div>
                      Rejecting...
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 0l-6.849 6.849m0 0l-6.849-6.849m6.849 6.849L5.636 5.636" />
                      </svg>
                      Reject
                    </>
                  )}
                </button>
                
                <button
                  onClick={() => handleAction(user.id, "Successfull", user.role as string)}
                  disabled={submitting[user.id]}
                  className="flex-1 bg-emerald-900/50 text-emerald-400 border border-emerald-900/50 font-semibold py-4 px-6 rounded-lg hover:bg-emerald-900/70 hover:border-emerald-900/70 transition-all disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                >
                  {submitting[user.id] ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-emerald-400"></div>
                      Approving...
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Approve & Activate
                    </>
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
