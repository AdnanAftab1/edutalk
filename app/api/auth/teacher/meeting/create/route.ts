import { DB, VerifyUser } from "@/app/api/essentials"
import { NextRequest } from "next/server";

export async function POST(req:NextRequest){
    try{
    const User=await VerifyUser(req);
    
    if (User instanceof Response) return User;
    if(User.role!='Teacher'){
         return Response.json({
            message:"Role is incorrect"
        }) 
    }
    const data:{
    date: string;
    content: string;
    teacher: string;
    studentID:string; 
    }=await req.json();

    const res=await DB.$transaction(async (ts)=>{
        
        return await ts.meeting_Request.create({
            data:{
                ParentId:data.studentID,
                date:new Date(data.date),
                content:data.content,
                TeacherId:User.id || "Something Not Right"
            }
        }).catch((err)=>{
            console.log("last DB error",err)
        })
    })


    return Response.json({id:res.id},{status:200})
}catch(err){
    console.log(err)
    return Response.json({
        error:err
    },{status:400})
}
}