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
    const reqB: Body = await req.json();

    if (!reqB.IssuedFor || !reqB.date || !Array.isArray(reqB.list) || reqB.list.length === 0) {
      return NextResponse.json({ message: "Invalid payload" }, { status: 400 });
    }

    const attendanceDate = new Date(reqB.date);
    if (Number.isNaN(attendanceDate.getTime())) {
      return NextResponse.json({ message: "Invalid date" }, { status: 400 });
    }

    const found = await DB.class.findFirst({
      where: { ClassTeacherId: user.id },
      select: {
        id: true,
        _count: { select: { Parent: true } },
      },
    });

    if (!found) {
      return NextResponse.json({ message: "Class not found for teacher" }, { status: 404 });
    }

    if (found.id !== reqB.IssuedFor) {
      return NextResponse.json({ message: "You are not the class teacher" }, { status: 403 });
    }

    if (found._count.Parent !== reqB.list.length) {
      return NextResponse.json(
        { message: "Attendance list count does not match class strength" },
        { status: 400 }
      );
    }

    const finaldata: Prisma.AttendanceCreateManyInput[] = reqB.list.map((x) => ({
      ParentId: x.ParentId,
      isPresent: x.isPresent,
      Issue_For: reqB.IssuedFor,  
      date: attendanceDate,       
    }));

    await DB.attendance.createMany({ data: finaldata });

    return NextResponse.json({ message: "Attendance given" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Database error" }, { status: 500 });
  }
}
