import { DB, VerifyUser } from "@/app/api/essentials"
import { NextRequest } from "next/server";

export async function GET(req:NextRequest){
    
    const User=await VerifyUser(req);

    if (User instanceof Response) return User;
    const res=await DB.$transaction(async (ts)=>{
        const classe=await ts.parent.findUnique({
            where:{Pid:User.id},
        })
        const Teacher=await ts.subject.findMany({
            where:{
                ClassId:classe?.ClassId
            },
            select:{
                TeacherId:true,
                Name:true,
                Teacher:{
                    select:{
                        Tid:true,
                        User:{
                            select:{
                                name:true
                            }
                        }
                    }
                }
            }
        })

        return Teacher.map((item)=>{
            return {
                Tid:item.TeacherId,
                Teacher:item.Teacher.User.name,
                Subject:item.Name
             }
        });

    })
    
    

    return Response.json(res)
}