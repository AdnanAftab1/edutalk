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
    const reqB:{approved:boolean,meetID:string}=await req.json();

     //Incomplete the idea is to send emails......
    if(reqB.approved){
        //Send mail saying its approved
    }else{
        //Send mail saying it rejected
    }


    await DB.meeting_Request.delete({
            where:{
                id:reqB.meetID
            }
        });
    
    return Response.json({
        message:"Message is sent..."
    },{status:200})
}catch(err){
    console.log(err)
    return Response.json({
        error:err
    },{status:400})
}
}