import { DB, VerifyUser } from "@/app/api/essentials"
import { NextRequest } from "next/server";

//Not Tested

export async function POST(req:NextRequest){
    
    const User=await VerifyUser(req);
    
    if (User instanceof Response) return User;

    if(User.role!='Teacher'){
         return Response.json({
            message:"Role is incorrect"
        }) 
    }
    const reqB=await req.json();
    console.log(reqB);
    try {
        await DB.academics.create({
            data:{
                Pid:reqB.Pid,
                SubjectID:reqB.Sid,
                ExamName:reqB.ExamName,
                Grade:reqB.grade,
            }
        })

        return Response.json({
            message:"All good"
        })

    } catch {
        return Response.json({
            message:"Database error"
        })
    }
    
}