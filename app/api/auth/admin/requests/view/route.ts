import { NextRequest, NextResponse } from "next/server";
import { DB, VerifyUser } from "@/app/api/essentials";

export async function GET(req: NextRequest) {
  try {
    const user = await VerifyUser(req);
    if (user instanceof Response) return user;
    
    if (user.role !== "Admin") {
      return NextResponse.json({ 
        message: "Role is incorrect - Admin access only" 
      }, { status: 403 });
    }

    const unverifiedUsers = await DB.user.findMany({
      where: {
        status: "Unverified"
      },
      select: {
        id: true,
        name: true,
        email: true,
        phoneNumber: true,
        role: true,
        AuthFile: true,
      },
    });

    return NextResponse.json(unverifiedUsers, { status: 200 });

  } catch (error) {
    console.error("Error fetching unverified users:", error);
    return NextResponse.json(
      { error: "Failed to fetch unverified registrations" }, 
      { status: 500 }
    );
  }
}
