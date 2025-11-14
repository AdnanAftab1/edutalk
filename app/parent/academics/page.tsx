'use client'
import  Link from "next/link";
import { AcademicTable } from "./record";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white ">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#F97316] opacity-10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-orange-700 opacity-15 rounded-full blur-[80px]"></div>
          <div className="absolute top-20 right-1/4 w-[250px] h-[250px] bg-orange-400 opacity-10 rounded-full blur-[70px]"></div>

      <Navbar selected={'academics'}/>
      <main>
        <div className="flex justify-center items-center w-full ">
        <AcademicTable/>

        </div>
      </main>
    </div>
  );
}



interface SelectedProps{
  selected:'messages'|'attendance'|'academics'|'None'
}


export function Navbar({selected}:SelectedProps) {
  const router=useRouter();
  async function HandleLogout(){
    console.log("Logout Clicked");
     axios.post('http://localhost:3000/api/logout').then((data)=>{
            if(data.status===200){
                router.push('/');
            }
          }).catch((err)=>{
            console.log("Error occured",err);
          });
  }
  
  return (
    <nav className="bg-black bg-opacity-90 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                Edutalk
              </span>
            </Link>
          </div>
          
        </div>
        
        <div className="w-full flex justify-center items-center gap-x-10 ">
          <Link href={'/parent/attendance'} className={cn("font-['Inter'] text-lg hover:text-amber-600 duration-200",selected==='attendance'?'text-amber-600':'')}> Attendance</Link> 
          <Link href={'/parent/academics'} className={cn("font-['Inter'] text-lg hover:text-amber-600 duration-200",selected==='academics'?'text-amber-600':'')}> Academics</Link>
          <Link href={'/parent/messages'} className={cn("font-['Inter'] text-lg hover:text-amber-600 duration-200",selected==='messages'?'text-amber-600':'')}> Messages</Link>
        </div>
        <div className="w-min p-3 font-bold text-xl font-['Inter'] bg-gradient-to-r from-red-600 to-red-900  bg-clip-text text-transparent cursor-pointer" onClick={HandleLogout}>Logout</div>
      </div>
    </nav>
  );
  
};



