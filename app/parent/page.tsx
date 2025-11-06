import  Link from "next/link";
import Announcements from "./anouncements";
import Meetings from './meetings'
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white ">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#F97316] opacity-10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-orange-700 opacity-15 rounded-full blur-[80px]"></div>
          <div className="absolute top-20 right-1/4 w-[250px] h-[250px] bg-orange-400 opacity-10 rounded-full blur-[70px]"></div>

      <Navbar />
      <main>
        <div className="flex flex-wrap">
          <Announcements/>
          <Meetings/>
        </div>
      </main>
    </div>
  );
}






const Navbar = () => {
  
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
          <p className="font-['Inter'] text-lg hover:text-amber-600 duration-200">View Attendance</p>
          <p className="font-['Inter'] text-lg hover:text-amber-600 duration-200">View Academimcs</p>
          <p className="font-['Inter'] text-lg hover:text-amber-600 duration-200">View Messages</p>
        </div>
      </div>
     
    </nav>
  );
};

