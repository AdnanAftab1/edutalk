import { VerifyUser,DB } from "@/app/api/essentials";
import { NextResponse, NextRequest } from "next/server";


export async function GET(req: NextRequest) {
  const user = await VerifyUser(req);
  if (user instanceof Response) return user;
  
  if (user.role !== "Parent") return NextResponse.json({ error: "Parent only" }, { status: 403 });
  
  const url = new URL(req.url);
  const Tid = url.searchParams.get('Tid');
  
  const messages = await DB.chatMessages.findMany({
    where: {
      AND: [{ Pid: user.id }, { Tid:Tid||"" }]
    },
    orderBy: { Date: 'asc' },
    include: { Parent: { select: { ParentName: true } }, Teacher: { select: { TeacherName: true }} }
  }).catch((err)=>{
    return NextResponse.json({error:"Error in DB call..."},{status:500})
  });
  
  return NextResponse.json(messages);
}
