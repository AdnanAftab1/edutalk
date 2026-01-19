'use client';

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import axios from "axios";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-transparent text-white ">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500 opacity-30 rounded-full blur-[100px] pointer-events-none -z-20" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-emerald-700 opacity-35 rounded-full blur-[80px] pointer-events-none z-10" />
      <div className="absolute top-20 right-1/4 w-[250px] h-[250px] bg-emerald-400 opacity-30 rounded-full blur-[70px] pointer-events-none -z-40" />

      <AdminNavbar />
      {children}
    </div>
  );
}

function AdminNavbar() {
  const router = useRouter();
  const selected = usePathname();
  console.log(selected);
  
  const [adminName, setAdminName] = useState<string>("...");

  useEffect(() => {
    let cancelled = false;

    async function loadName() {
      try {
        const res = await fetch("/api/auth/teacher/basic", { method: "GET" });
        if (!res.ok) return;
        const data: { name: string } = await res.json();
        if (!cancelled) setAdminName(data.name);
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
    <nav className="bg-black bg-opacity-90 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800 shadow-emerald-600/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-3xl font-bold bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
                Edutalk
              </span>
              <span className="ml-2 text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded font-medium">
                Admin
              </span>
            </Link>
          </div>
        </div>

        <div className="w-full flex justify-center items-center gap-x-10">
          <Link
            href={'/admin/classes'}
            className={cn("font-['Inter'] text-lg hover:text-emerald-500 duration-200", selected === '/admin/users' ? 'text-emerald-500' : '')}
          >
            Classes
          </Link>
          <Link
            href={'/admin/'}
            className={cn("font-['Inter'] text-lg hover:text-emerald-500 duration-200", selected === '/admin/teachers' ? 'text-emerald-500' : '')}
          >
            Verify Registration
          </Link>


          <Link
            href={'/admin/ptescore'}
            className={cn("font-['Inter'] text-lg hover:text-emerald-500 duration-200", selected === '/admin/ptescore' ? 'text-emerald-500' : '')}
          >
            PTE Score
          </Link>
{/* 
          <Link
            href={'/admin/classes'}
            className={cn("font-['Inter'] text-lg hover:text-emerald-500 duration-200", selected === '/admin/classes' ? 'text-emerald-500' : '')}
          >
            Classes
          </Link>

          <Link
            href={'/admin/verify'}
            className={cn("font-['Inter'] text-lg hover:text-emerald-500 duration-200", selected === '/admin/verify' ? 'text-emerald-500' : '')}
          >
            Verify Requests
          </Link>

          <Link
            href={'/admin/analytics'}
            className={cn("font-['Inter'] text-lg hover:text-emerald-500 duration-200", selected === '/admin/analytics' ? 'text-emerald-500' : '')}
          >
            Analytics
          </Link>

          <Link
            href={'/admin/settings'}
            className={cn("font-['Inter'] text-lg hover:text-emerald-500 duration-200", selected === '/admin/settings' ? 'text-emerald-500' : '')}
          >
            Settings
          </Link> */}
        </div>

        {/* Right side: show admin name (click to logout) */}
        <button
          type="button"
          onClick={HandleLogout}
          className="w-min p-3 font-bold text-lg font-['Inter'] bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent cursor-pointer whitespace-nowrap"
          title="Logout"
        >
          {adminName}
        </button>
      </div>
    </nav>
  );
}
