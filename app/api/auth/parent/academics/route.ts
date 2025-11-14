import { DB, VerifyUser } from "@/app/api/essentials"
import { NextRequest } from "next/server";

export type AcademicRecord = {
  subject: string
  class: string
  teacher: string
  grade: string
  date: string
  semester: string
  exam: string
  ReportLink?:string

}

export async function GET(req:NextRequest){
    
    const User=await VerifyUser(req);
    
    if (User instanceof Response) return User;
    try {
        const data=await DB.academics.findMany({
            where:{
                Pid:User.id
            },
            select:{
                Date:true,
                ExamName:true,
                Grade:true,
                ReportLink:true,
                Subject:{
                    
                    select:{
                        Name:true,
                        Teacher:{
                            select:{
                                TeacherName:true
                            }
                        },
                        Class:{
                            select:{
                                Name:true
                            }
                        }
                    }
                }

            }
        });

    const final=data.map((item):AcademicRecord=>{
        return {
            
            semester:"Final",
            date:item.Date.toLocaleDateString(),
            grade:item.Grade,
            teacher:item.Subject.Teacher.TeacherName,
            class:item.Subject.Class.Name,
            subject:item.Subject.Name,
            exam:item.ExamName,

        }
    })

    return Response.json(final)
    } catch {
        return Response.json({
            message:"Database error"
        })
    }
    
}