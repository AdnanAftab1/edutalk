import  Link from "next/link";
import Chatbox from "./chatbox";
import { Navbar } from "../academics/page";


export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white ">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#F97316] opacity-10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-orange-700 opacity-15 rounded-full blur-[80px]"></div>
          <div className="absolute top-20 right-1/4 w-[250px] h-[250px] bg-orange-400 opacity-10 rounded-full blur-[70px]"></div>

      <Navbar selected={'messages'} />
      <main>
        <div className="flex justify-center items-center w-full ">
          <Chatbox/>
        </div>
      </main>
    </div>
  );
}




