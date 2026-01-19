"use client";

import { useState, useEffect } from "react";

type ParentActivity = {
  student: string;
  parent: string;
  class?: string;
  metrics: {
    meets: number;
    messages: number;
    atten: number;
    totalInteractions: number;
    avgMonthlyActivity: number;
    frequencyLabel: string;
    totalWeightage: number;
    activityLevel: string;
  };
};

export default function ParentActivityPage() {
  const [studentID, setStudentID] = useState("");
  const [activity, setActivity] = useState<ParentActivity | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const checkActivity = async () => {
    if (!studentID) {
      setError("Please enter a Student ID");
      return;
    }

    setLoading(true);
    setError("");
    
    try {
      const response = await fetch("/api/auth/admin/ptescore", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ studentID }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch activity data");
      }

      const data = await response.json();
      setActivity(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-transparent ">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4">
            Parent Activity Monitor
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Check parent engagement metrics (Meetings, Messages, Attendance) over the last 6 months
          </p>
        </div>

        {/* Input Form */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-end max-w-md mx-auto">
            <div className="flex-1">
              <label className="block text-sm text-gray-300 mb-2 font-medium">
                Student ID
              </label>
              <input
                type="text"
                placeholder="parent-uuid-123"
                value={studentID}
                onChange={(e) => setStudentID(e.target.value)}
                className="w-full p-3 rounded-xl bg-white/20 border border-white/30 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 transition-all text-white placeholder-gray-400"
                disabled={loading}
              />
            </div>
            <button
              onClick={checkActivity}
              disabled={!studentID || loading}
              className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 whitespace-nowrap"
            >
              {loading ? "Checking..." : "Check Activity"}
            </button>
          </div>

          {error && (
            <div className="mt-4 p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-200 text-center">
              {error}
            </div>
          )}
        </div>

        {/* Results */}
        {activity && (
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Student Info */}
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30">
                <h3 className="text-2xl font-bold text-white mb-2">{activity.student}</h3>
                <p className="text-emerald-300 font-semibold text-lg">{activity.parent}</p>
                {activity.class && (
                  <p className="text-gray-300 mt-1">{activity.class}</p>
                )}
              </div>

              {/* Activity Level */}
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-gradient-500/20 border border-gradient-500/30">
                <div className="inline-flex items-center gap-2 text-3xl font-bold mb-2">
                  <span className="text-4xl">{activity.metrics.activityLevel.split(" ")[0]}</span>
                  <span className="text-xl">{activity.metrics.activityLevel.split(" ").slice(1).join(" ")}</span>
                </div>
                <div className="text-2xl font-mono text-emerald-400">
                  {activity.metrics.totalWeightage}/100
                </div>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-white/10 border border-white/20 text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">
                  {activity.metrics.meets}
                </div>
                <div className="text-gray-300">Meetings</div>
              </div>
              <div className="p-6 rounded-xl bg-white/10 border border-white/20 text-center">
                <div className="text-3xl font-bold text-teal-400 mb-2">
                  {activity.metrics.messages}
                </div>
                <div className="text-gray-300">Messages</div>
              </div>
              <div className="p-6 rounded-xl bg-white/10 border border-white/20 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  {activity.metrics.atten}
                </div>
                <div className="text-gray-300">Attendance Marks</div>
              </div>
            </div>

            {/* Summary Stats */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                    {/* <div>
                    <div className="text-2xl font-bold text-white">
                        {activity.metrics.totalInteractions}
                    </div>
                    <div className="text-gray-400">Total Interactions</div>
                    </div> */}
                {/* <div>
                  <div className="text-2xl font-bold text-emerald-400">
                    {activity.metrics.avgMonthlyActivity}/month
                  </div>
                  <div className="text-gray-400">{activity.metrics.frequencyLabel} Activity</div>
                </div> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
