import { DB, VerifyUser } from "@/app/api/essentials"
import { NextRequest } from "next/server";



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
        const studentSubject=await DB.parent.findMany({
            where:{
                Pid: (reqB.StudentId),
                Class:{
                    Subjects:{
                        some:{
                            TeacherId:User.id
                        }
                    }
                }
            },
            select:{
                Class:{
                    select:{
                        Subjects:{
                            select:{
                                Name:true
                            }
                        }
                    }
                }
            }
        })

        return Response.json(studentSubject.map(value=> {return {subject:value.Class.Subjects}}))

    } catch {
        return Response.json({
            message:"Database error"
        })
    }
    
}