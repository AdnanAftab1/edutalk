import { NextRequest, NextResponse } from "next/server";
import { DB, VerifyUser } from "@/app/api/essentials";

export async function GET(req: NextRequest) {
  const user = await VerifyUser(req);
  if (user instanceof Response) return user;

  if (user.role !== "Admin") {
    return NextResponse.json({ message: "Role is incorrect" }, { status: 403 });
  }

  
  try {
    const cls = await DB.class.findMany({
      select: {
        Name: true,
        Teacher:{
            select:{
                TeacherName:true
            }
        },
        Parent: { select: { StudentName: true, Pid: true } },
      },
    });

    return NextResponse.json(cls, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: "Database error" }, { status: 500 });
  }
}
