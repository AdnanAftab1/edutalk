import { DB, VerifyUser } from "@/app/api/essentials"
import { NextRequest } from "next/server";

export async function GET(req:NextRequest){
    
    const User=await VerifyUser(req);
    
    if (User instanceof Response) return User;
    
    if(User.role!='Parent'){
         return Response.json({
            message:"Role is incorrect"
        }) 
    }
    try {
        const classID=await DB.parent.findFirst({
            where:{
                Pid: User.id
            },
            select:{
                ClassId:true
            }
        })
        const announcements=await DB.annoucements.findMany({
            where:{
                OR:[
                    {
                        ClassID:classID?.ClassId
                    },
                    {
                        ClassID:null
                    }
                ]
            }
        });

        const ann=announcements.map((item)=>{
            return {
                title:item.Title,
                date:`${item.Date.getDate()}-${item.Date.getMonth()+1}-${item.Date.getFullYear()}`,
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