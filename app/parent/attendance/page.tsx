"use client"
import  Link from "next/link";
import { CalendarDemo } from "./CalendarComp";
import { ChartRadialStacked } from "./chart";
import { useEffect, useState } from "react";
import axios from "axios";
import { Navbar } from "../academics/page";

interface Attendance{
    present: Date[];
    absent: Date[];
}

export default function Home() {
  const present=[
    new Date(2025, 10, 1),
    new Date(2025, 10, 9),
    new Date(2025, 10, 10)
  ];
  const absent=[
    new Date(2025, 10, 19),
    new Date(2025, 10, 30)
  ];

  const [attendance,setAttence]=useState<Attendance>();

  useEffect(()=>{
    async function Load() {
           axios.get('http://localhost:3000/api/auth/parent/attendance').then((data)=>{
            if(data.status===200){
              const op:Attendance=data.data
              const res={
                present:op.present.map((item)=>{
                  return new Date(item)
                }),
                absent:op.absent.map((item)=>{
                  return new Date(item)
                })
              }
              console.log(op);  
              console.log(res)
              setAttence(res);

            }
          }).catch((err)=>{
            console.log("Error occured",err);
          });
      }
      Load()
  },[])
  return (
    <div className="min-h-screen bg-black text-white ">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#F97316] opacity-10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-orange-700 opacity-15 rounded-full blur-[80px]"></div>
          <div className="absolute top-20 right-1/4 w-[250px] h-[250px] bg-orange-400 opacity-10 rounded-full blur-[70px]"></div>

      <Navbar selected={'attendance'}/>
      <main>
        <div className="flex justify-center items-center w-full ">
          <CalendarDemo present={attendance?.present||present} absent={attendance?.absent||absent}/>
          <ChartRadialStacked present={attendance?.present.length||0} absent={attendance?.absent.length||0}/>
        </div>
      </main>
    </div>
  );
}
