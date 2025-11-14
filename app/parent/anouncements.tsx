"use client"
import { Dialog,DialogContent,DialogTrigger,DialogTitle } from "@radix-ui/react-dialog";
import axios from "axios";
import { useEffect, useState } from "react";

interface Anns{
    title: string;
    date: string;
    content: string;
} 

export default function View_Announcements(){
    const [Announcemetns,setAnnoucements] =useState<Anns[]>([]);
    useEffect( ()=>{
      async function Load() {
          axios.get('http://localhost:3000/api/auth/parent/announcements').then((data)=>{
            if(data.status===200){
                setAnnoucements(data.data)
            }
          }).catch((err)=>{
            console.log("Error occured");
          });
      }
      Load()

    },[])

    return (
        <div className="text-2xl font-['Inter'] relative  font-semibold w-2xl bg-gradient-to-b from-slate-500/50 m-12 p-5 rounded-lg flex flex-col justify-center items-center max-h-96 ">
            <p>Announcements</p>
             <div className="overflow-scroll w-full">
            {
                Announcemetns.map((an,index)=>{
                    return (
                            <Dialog key={index}>
                    <DialogTrigger asChild>
                            <div  className="w-full flex hover:bg-slate-500      items-center justify-between rounded-lg duration-200">
                            <p className="text-sm text-start font-['Inter'] font-semibold m-2">{an.title}</p>
                            <p className="text-sm opacity-80 m-2">{an.date}</p>
                            </div>
                            </DialogTrigger>
                            <DialogContent className="w-96 fixed backdrop-blur-2xl bg-slate-800/20 top-20 p-4 rounded-lg border-2 border-slate-500/50">
                                <DialogTitle className="text-2xl font-semibold mb-4 text-center">
                                        {an.title}
                                    </DialogTitle>
                                <p className="text-lg ">{an.content}</p>
                                </DialogContent>     
                                </Dialog>                       
                    )
                })
            }
            </div>
            
        </div>
    )
}