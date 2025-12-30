import { DB, VerifyUser, Prisma } from "@/app/api/essentials";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const user = await VerifyUser(req);
  if (user instanceof Response) return user;

  if (user.role !== "Parent") {
    return NextResponse.json({ message: "Role is incorrect" }, { status: 403 });
  }

  try {
    const reqB: Body = await req.json();
    

    return NextResponse.json({ name:user.name }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Database error" }, { status: 500 });
  }
}
