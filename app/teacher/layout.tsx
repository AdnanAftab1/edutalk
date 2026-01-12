'use client';

import React, { useEffect, useState } from "react";
import { useRouter,useParams, usePathname } from "next/navigation";
import axios from "axios";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface SelectedProps {
  selected: 'messages' | 'attendance' | 'academics' | 'meetings' | 'students' | 'classes' | 'None';
}

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-transparent text-white ">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#3B82F6] opacity-30 rounded-full blur-[100px] pointer-events-none -z-20" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-violet-700 opacity-35 rounded-full blur-[80px] pointer-events-none z-10" />
      <div className="absolute top-20 right-1/4 w-[250px] h-[250px] bg-blue-400 opacity-30 rounded-full blur-[70px] pointer-events-none -z-40" />

      <TeacherNavbar />
      {children}
    </div>
  );
}

function TeacherNavbar() {
  const router = useRouter();
  const selected=usePathname();
  console.log(selected)
  
  const [teacherName, setTeacherName] = useState<string>("...");

  useEffect(() => {
    let cancelled = false;

    async function loadName() {
      try {
        // relative URL so it works on Vercel/production too
        const res = await fetch("/api/auth/teacher/basic", { method: "GET" });
        if (!res.ok) return;
        const data: { name: string } = await res.json();
        if (!cancelled) setTeacherName(data.name);
      } catch (err) {
        console.log(err);
      }
    }

    loadName();
    return () => {
      cancelled = true;
    };
  }, []);

  async function HandleLogout() {
    try {
      const res = await axios.post("/api/logout");
      if (res.status === 200) router.push("/");
    } catch (err) {
      console.log("Error occurred", err);
    }
  }

  return (
    <nav className="bg-black bg-opacity-90 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800 shadow-cyan-600/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                Edutalk
              </span>
              <span className="ml-2 text-xs bg-blue-500/20 text-blue-500 px-2 py-1 rounded font-medium">
                Teacher
              </span>
            </Link>
          </div>
        </div>

        <div className="w-full flex justify-center items-center gap-x-10">
          <Link
            href={'/teacher'}
            className={cn("font-['Inter'] text-lg hover:text-blue-500 duration-200", selected === '/teacher' ? 'text-blue-500' : '')}
          >
            Students
          </Link>

          <Link
            href={'/teacher/meeting'}
            className={cn("font-['Inter'] text-lg hover:text-blue-500 duration-200", selected === '/teacher/meeting' ? 'text-blue-500' : '')}
          >
            Meetings
          </Link>

          <Link
            href={'/teacher/announcements'}
            className={cn("font-['Inter'] text-lg hover:text-blue-500 duration-200", selected === '/teacher/announcements' ? 'text-blue-500' : '')}
          >
            Announcements
          </Link>

          <Link
            href={'/teacher/attendance'}
            className={cn("font-['Inter'] text-lg hover:text-blue-500 duration-200", selected === '/teacher/attendance' ? 'text-blue-500' : '')}
          >
            Attendance
          </Link>

          <Link
            href={'/teacher/academics'}
            className={cn("font-['Inter'] text-lg hover:text-blue-500 duration-200", selected === '/teacher/academics' ? 'text-blue-500' : '')}
          >
            Academics
          </Link>

          <Link
            href={'/teacher/messages'}
            className={cn("font-['Inter'] text-lg hover:text-blue-500 duration-200", selected === 'messages' ? 'text-blue-500' : '')}
          >
            Messages
          </Link>
        </div>

        {/* Right side: show teacher name (click to logout) */}
        <button
          type="button"
          onClick={HandleLogout}
          className="w-min p-3 font-bold text-lg font-['Inter'] bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent cursor-pointer whitespace-nowrap"
          title="Logout"
        >
          {teacherName}
        </button>
      </div>
    </nav>
  );
}
