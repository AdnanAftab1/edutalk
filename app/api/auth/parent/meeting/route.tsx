import { DB, VerifyUser } from "@/app/api/essentials"
import { NextRequest } from "next/server";

export async function POST(req:NextRequest){
    try{
    const User=await VerifyUser(req);

    if (User instanceof Response) return User;
    const data:{
    date: string;
    content: string;
    teacher: string;
    }=await req.json();

    const res=await DB.$transaction(async (ts)=>{
        const Teacher=await ts.teacher.findUnique({
            where:{
                TeacherName:data.teacher
            }
        }).catch((err)=>{
            console.log("first DB error",err)
        })

        return await ts.meeting_Request.create({
            data:{
                SenderId:User.id,
                date:new Date(data.date),
                content:data.content,
                TeacherId:Teacher?.Tid ||"Something Not Right"
                
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