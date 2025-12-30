import { DB, VerifyUser } from "@/app/api/essentials"
import { NextRequest } from "next/server";

export async function GET(req:NextRequest){
    try{
    const User=await VerifyUser(req);
    
    if (User instanceof Response) return User;
    if(User.role!='Teacher'){
         return Response.json({
            message:"Role is incorrect"
        }) 
    }

    const meeting=await DB.meeting_Request.findMany({
        where:{
            TeacherId:User.id
        }
    });

    return Response.json(meeting,{status:200})
}catch(err){
    console.log(err)
    return Response.json({
        error:err
    },{status:400})
}
}