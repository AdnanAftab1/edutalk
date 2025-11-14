import { DB, VerifyUser } from "@/app/api/essentials"
import { NextRequest } from "next/server";

export async function GET(req:NextRequest){
    
    const User=await VerifyUser(req);

    if (User instanceof Response) return User;
    

    const res=await DB.attendance.findMany({
        where:{
            ParentId:User.id
        }
    })
    
    const output = {
  present: res
    .filter((item) => item.isPresent)
    .map((item) => item.date),

  absent: res
    .filter((item) => !item.isPresent)
    .map((item) => item.date),
};

    return Response.json(output)
} 