import { DB, VerifyUser } from "@/app/api/essentials";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const user = await VerifyUser(req);
  if (user instanceof Response) return user;

  if (user.role !== "Teacher") {
    return NextResponse.json({ message: "Role is incorrect" }, { status: 403 });
  }

  // const reqB: { StudentId?: string } = await req.json();
  // if (!reqB.StudentId) {
  //   return NextResponse.json({ message: "StudentId is required" }, { status: 400 });
  // }

  try {
    const student = await DB.parent.findMany({
      where: {
        // optional guard: ensure teacher actually teaches something in that class
        Class: {
          Subjects: {
            some: { TeacherId: user.id },
          },
        },
      },
      select: {
        StudentName:true,
        Pid:true,
        Class: {
          select: {
            Subjects: {
              where: { TeacherId: user.id }, // only teacher's subjects
              select: { Name: true, Sid: true },
            },
          },
        },
      },
    });
    if (!student) {
      return NextResponse.json(
        { message: "No students found for you..." },
        { status: 404 }
      );
    }

    return NextResponse.json(
        student.map((item)=>{
          return {Name:item.StudentName,Pid:item.Pid,Subjects:item.Class.Subjects}
        })
      ,
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Database error" }, { status: 500 });
  }
}
