import { DB, VerifyUser, Prisma } from "@/app/api/essentials";
import { NextRequest, NextResponse } from "next/server";

type Body = {
  list: { ParentId: string; isPresent: boolean }[];
  IssuedFor: string; 
  date: string;      
};

export async function POST(req: NextRequest) {
  const user = await VerifyUser(req);
  if (user instanceof Response) return user;

  if (user.role !== "Teacher") {
    return NextResponse.json({ message: "Role is incorrect" }, { status: 403 });
  }

  try {
        const classList=await DB.class.findUnique({
            where:{
                ClassTeacherId:user.id
            },
            select:{
                Parent:{
                    select:{
                        StudentName:true,
                        Pid:true
                    }
                },
                id:true,
                Name:true
            }
        })

    if (!classList) {
      return NextResponse.json({ message: "Class not found for teacher" }, { status: 404 });
    }


    return NextResponse.json(classList, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Backend error" }, { status: 500 });
  }
}
