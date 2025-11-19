'use client'


import Link from "next/link";
import TeacherMeetingRequests from './meeting-requests'
import Create_Announcements from "./announcements";
import UpcomingClasses from "./upcoming-classes";

export default function TeacherHome() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Blue gradient background for teacher theme */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#3B82F6] opacity-10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-blue-700 opacity-15 rounded-full blur-[80px]"></div>
      <div className="absolute top-20 right-1/4 w-[250px] h-[250px] bg-blue-400 opacity-10 rounded-full blur-[70px]"></div>

      <TeacherNavbar selected={'None'} />
      
      <main className="relative z-10">
        <div className="container mx-auto px-4 py-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome, Teacher</h1>
            <p className="text-gray-400">Manage your classes, students, and announcements</p>
          </div>

          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Create Announcements Table - Front Page
            <Create_Announcements/>
            
            <TeacherMeetingRequests/>
            
            <UpcomingClasses/> 
            */}
          </div>
        </div>
      </main>
    </div>
  );
}



import { useRouter } from "next/navigation";
import axios from "axios";
import { cn } from "@/lib/utils"; // assuming you have this utility

interface SelectedProps {
  selected: 'messages' | 'attendance' | 'academics' | 'students' | 'classes' | 'None'
}

export function TeacherNavbar({ selected }: SelectedProps) {
  const router = useRouter();
  
  async function HandleLogout() {
    console.log("Logout Clicked");
    axios.post('http://localhost:3000/api/logout')
      .then((data) => {
        if (data.status === 200) {
          router.push('/');
        }
      })
      .catch((err) => {
        console.log("Error occurred", err);
      });
  }
  
  return (
    <nav className="bg-black bg-opacity-90 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
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
            href={'/teacher/classes'} 
            className={cn(
              "font-['Inter'] text-lg hover:text-blue-500 duration-200",
              selected === 'classes' ? 'text-blue-500' : ''
            )}
          > 
            Classes
          </Link>
          
          <Link 
            href={'/teacher/students'} 
            className={cn(
              "font-['Inter'] text-lg hover:text-blue-500 duration-200",
              selected === 'students' ? 'text-blue-500' : ''
            )}
          > 
            Students
          </Link>
          
          <Link 
            href={'/teacher/attendance'} 
            className={cn(
              "font-['Inter'] text-lg hover:text-blue-500 duration-200",
              selected === 'attendance' ? 'text-blue-500' : ''
            )}
          > 
            Attendance
          </Link>
          
          <Link 
            href={'/teacher/academics'} 
            className={cn(
              "font-['Inter'] text-lg hover:text-blue-500 duration-200",
              selected === 'academics' ? 'text-blue-500' : ''
            )}
          > 
            Academics
          </Link>
          
          <Link 
            href={'/teacher/messages'} 
            className={cn(
              "font-['Inter'] text-lg hover:text-blue-500 duration-200",
              selected === 'messages' ? 'text-blue-500' : ''
            )}
          > 
            Messages
          </Link>
        </div>
        
        <div 
          className="w-min p-3 font-bold text-xl font-['Inter'] bg-gradient-to-r from-red-600 to-red-900 bg-clip-text text-transparent cursor-pointer whitespace-nowrap" 
          onClick={HandleLogout}
        >
          Logout
        </div>
      </div>
    </nav>
  );
}
