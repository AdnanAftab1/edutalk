import { VerifyUser, DB } from "@/app/api/essentials";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const user = await VerifyUser(req);
  if (user instanceof Response) return user;
  
  if (user.role !== "Teacher") {
    return NextResponse.json({ error: "Teacher only" }, { status: 403 });
  }
  
  const url = new URL(req.url);
  const Pid = url.searchParams.get('Pid');
  
  if (!Pid) {
    return NextResponse.json({ error: "Parent ID required" }, { status: 400 });
  }
  
  const messages = await DB.chatMessages.findMany({
    where: {
      AND: [{ Tid: user.id }, { Pid }] 
    },
    orderBy: { Date: 'asc' },
    include: { 
      Parent: { select: { ParentName: true, StudentName: true } }, 
      Teacher: { select: { TeacherName: true } } 
    }
  });
  
  return NextResponse.json(messages);
}
