import { DB, VerifyUser } from "@/app/api/essentials"
import { NextRequest } from "next/server";

export async function GET(req:NextRequest){
    
    const User=await VerifyUser(req);
    
    if (User instanceof Response) return User;
    try {
        const announcements=await DB.annoucements.findMany();

    const ann=announcements.map((item)=>{
        return {
            title:item.Title,
            date:`${item.Date.getDate()}-${item.Date.getMonth()}-${item.Date.getFullYear()}`,
            content:item.Text
        }
    })

    return Response.json(ann)
    } catch {
        return Response.json({
            message:"Database error"
        })
    }
    
}