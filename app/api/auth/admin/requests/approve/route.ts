import { NextRequest, NextResponse } from "next/server";
import { DB, VerifyUser } from "@/app/api/essentials";
import { sendEmail } from "../mailSender"; // Your minimal email function

interface VerifyRequestBody {
  id: string;
  role: "Parent" | "Teacher" | "Admin";
  status: "Successfull" | "Rejected";
  Parent?: { StudentName: string, ClassId: string }
}

export async function POST(req: NextRequest) {
  try {
    const user = await VerifyUser(req);
    if (user instanceof Response) return user;
    
    if (user.role !== "Admin") {
      return NextResponse.json({ 
        message: "Role is incorrect - Admin access only" 
      }, { status: 403 });
    }

    const reqB: VerifyRequestBody = await req.json();

    if (!reqB.id || !reqB.role || !reqB.status) {
      return NextResponse.json({ error: "Missing id, role, or status" }, { status: 400 });
    }

    // Get target user email BEFORE transaction
    const targetUser = await DB.user.findUnique({
      where: { id: reqB.id },
      select: { id: true, name: true, email: true, role: true }
    });

    if (!targetUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    await DB.$transaction(async (ts) => {
      const userInTx = await ts.user.findUnique({
        where: { id: reqB.id }
      });

      if (!userInTx || userInTx.status !== "Unverified" || userInTx.role !== reqB.role) {
        throw new Error("User not found or already processed");
      }

      // 1. Update User status FIRST
      await ts.user.update({
        where: { id: reqB.id },
        data: { status: reqB.status }
      });

      // 2. CREATE RESPECTIVE PROFILE (ONLY ON SUCCESSFULL)
      if (reqB.status === "Successfull") {
        if (reqB.role === "Teacher") {
          await ts.teacher.create({
            data: {
              Tid: reqB.id,
              TeacherName: targetUser.name,
            }
          });

        } else if (reqB.role === "Parent") {
          const findit = await ts.class.findUnique({
            where: { Name: reqB.Parent?.ClassId } // ClassName lookup
          });
          
          if (!findit) {
            throw new Error(`Class "${reqB.Parent?.ClassId}" not found`);
          }

          await ts.parent.create({
            data: {
              Pid: reqB.id,
              StudentName: reqB.Parent!.StudentName,
              ClassId: findit.id,
              ParentName: targetUser.name
            }
          });

        } else if (reqB.role === "Admin") {
          await ts.admin.create({
            data: {
              id: reqB.id,
              UserId: reqB.id,
            }
          });
        }
      }
    });

    // 3. SEND EMAIL NOTIFICATION
    const action = reqB.status === "Successfull" ? "approved" : "rejected";
    
    console.log("\n\n\Email:   ",targetUser.email);
    // Success Email
    if (reqB.status === "Successfull") {
      await sendEmail({
        to: targetUser.email,
        subject: '✅ Account Verified - Welcome to Edutalk!',
        name: targetUser.name,
        message: `Congratulations ${targetUser.name}! Your ${reqB.role} account has been successfully verified and activated. You can now login to Edutalk.`,
      });
    } 
    // Rejection Email
    else {
      await sendEmail({
        to: targetUser.email,
        subject: '❌ Account Verification Failed',
        name: targetUser.name,
        message: `Hi ${targetUser.name}, your ${reqB.role.toLowerCase()} registration was reviewed but unfortunately ${action}. Please contact support@edutalk.com if you have questions.`,
      });
    }

    return NextResponse.json({ 
      message: `${reqB.role} user ${action} successfully` 
    }, { status: 200 });

  } catch (error: any) { 
    console.error("Verification error:", error);
    return NextResponse.json(
      { error: error.message || "Verification failed" }, 
      { status: 500 }
    );
  }
}
