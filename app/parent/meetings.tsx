"use client"

import axios from "axios";
import { useEffect, useState } from "react";

export default function Meetings() {
  const [dater,setD]=useState("");
  const [timer,setT]=useState("");
  const [content,setcontent]=useState("")
  const [teacher,setTeach]=useState("")
  console.log(dater,timer,content);
  const [list,setList]=useState([{}]);

  useEffect(()=>{
    async function Load() {
          axios.get('http://localhost:3000/api/auth/parent/list').then((data)=>{
            if(data.status===200){
              console.log(data.data)  
              setList(data.data)

            }
          }).catch((err)=>{
            console.log("Error occured");
          });
      }
      Load()
  },[])


  async function HandleSubmit(e){
    const data={
      date:(dater+' '+timer),
      content:content,
      teacher:teacher
    }
    axios.post('http://localhost:3000/api/auth/parent/meeting',data

    ).then((res)=>{
            if(res.status===200){
              console.log("Output:",res.data)  
            }
          }).catch((err)=>{
            console.log("Error occured",err);
          });

    
    

  }

  return (
    <div className="text-2xl font-['Inter'] relative font-semibold w-xl bg-gradient-to-b from-slate-500/50 m-12 p-5 rounded-lg flex flex-col justify-center items-center ">
      <p className="w-full text-center">Request Meeting</p>

      <div className="overflow-scroll w-full mt-4">
        <div className="flex flex-col gap-4 p-4">

          {/* Time */}
          <div className="flex flex-col text-base">
            <label className="mb-1">Select Time</label>
            <input
              type="time"
              className="p-2 rounded-md bg-white/10 backdrop-blur border border-white/30"
              onChange={(e)=>{
                setT(e.target.value)
              }}
            />
          </div>
          {/* Time */}
          <div className="flex flex-col text-base">
            <label className="mb-1">Select Date</label>
            <input
              type="date"
              className="p-2 rounded-md bg-white/10 backdrop-blur border border-white/30"
              onChange={(e)=>{
                setD(e.target.value)
              }}
            />
          </div>
            
           {/* Teacher Dropdown */}
<div className="flex flex-col text-base">
  <label className="mb-1">Select Teacher</label>
  <select
    className="p-2 rounded-md bg-white/10 backdrop-blur border border-white/30"
    onChange={(e) => setTeach(e.target.value)}
  >
    <option className="bg-white/0 text-black" value="">-- Choose Teacher --</option>
    {
      list.map((item,index)=>{
        return <option key={index} className="bg-white/0 text-black" value={item.Teacher||"Not found"}>{item.Teacher||"Not found"}</option>
      })
    }
    {/* <option className="bg-white/0 text-black" value="TID001">Nitin Sharma</option>
    <option className="bg-white/0 text-black" value="TID002">Rajat Ramteke</option>
    <option className="bg-white/0 text-black" value="TID003">Sneha Kapoor</option>
    <option className="bg-white/0 text-black" value="TID004">Arjun Patel</option> */}
  </select>
</div>


          {/* Subject */}
          <div className="flex flex-col text-base">
            <label className="mb-1">Subject</label>
            <textarea
              rows="4"
              placeholder="Write the subject..."
              className="p-2 rounded-md bg-white/10 backdrop-blur border border-white/30"
              onChange={(e)=>{
              setcontent(e.target.value)
            }}
            ></textarea>
          </div>

          {/* Submit */}
          <button
            className="mt-2 p-2 bg-gradient-to-r from-amber-600 to-amber-400 hover:to-amber-700 text-white rounded-md"
            onClick={HandleSubmit}
          >
            Submit Request
          </button>

        </div>
      </div>
    </div>
  );
}
