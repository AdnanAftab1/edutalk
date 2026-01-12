import { DB, Prisma, VerifyUser } from "@/app/api/essentials";
import { PrismaClient } from "@/appi/generated/prisma";
import { NextRequest, NextResponse } from "next/server";
import { date, z } from "zod";

const BodySchema = z.object({
  Pid: z.string().min(1),        
  Sid: z.string().min(1),        
  ExamName: z.string().min(1),
  Grade: z.string().min(1),
});

export async function POST(req: NextRequest) {
  const user = await VerifyUser(req);
  if (user instanceof Response) return user;

  if (user.role !== "Teacher") {
    return NextResponse.json({ message: "Role is incorrect" }, { status: 403 });
  } 

  const parsed = BodySchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ message: "Invalid body" }, { status: 400 });
  }

  const { Pid, Sid, ExamName, Grade } = parsed.data;

  try {
    const subject = await DB.subject.findFirst({
      where: { Sid, TeacherId: user.id },
      select: { Sid: true },
    });

    if (!subject) {
      return NextResponse.json(
        { message: "Subject not assigned to this teacher" },
        { status: 403 }
      );
    }

    const studentOk = await DB.parent.findFirst({
      where: {
        Pid,
        Class: {
          Subjects: { some: { TeacherId: user.id } },
        },
      },
      select: { Pid: true, StudentName: true },
    });

    if (!studentOk) {
      return NextResponse.json(
        { message: "Student not found or not in your class" },
        { status: 404 }
      );
    }
    const today=(new Date());
    const created = await DB.academics.create({
      data: {
        Pid,
        SubjectID: Sid,
        ExamName,
        Grade,
        TeacherID: user.id,
        Date:today
      },
      select: { id: true }, // adjust to your PK field
    });

    return NextResponse.json(
      { message: "Inserted", id: created.id },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Database error" }, { status: 500 });
  }
}
