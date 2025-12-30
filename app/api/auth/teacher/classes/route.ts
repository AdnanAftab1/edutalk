import { DB, VerifyUser } from "@/app/api/essentials"
import { NextRequest } from "next/server";


export async function GET(req:NextRequest){
    
    const User=await VerifyUser(req);
    
    if (User instanceof Response) return User;

    if(User.role!='Teacher'){
         return Response.json({
            message:"Role is incorrect"
        }) 
    }

    try {
        const classInfos=await DB.subject.findMany({
            where:{
                TeacherId:User.id
            },
            select:{
                Class:{
                    select:{
                        Name:true,
                        _count:{
                            select:{
                                Parent:true
                            }
                        }
                    }
                },
                Name:true,
                ClassId:true
            }
        })

        return Response.json(classInfos.map(value=>{return {Name:value.Name,ClassName:value.Class.Name,NumberOfStudents:value.Class._count.Parent,ClassId:value.ClassId}}));
    } catch {
        return Response.json({
            message:"Database error"
        })
    }
    
}