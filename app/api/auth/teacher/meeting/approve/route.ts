import { NextRequest, NextResponse } from "next/server";
import { DB, VerifyUser } from "@/app/api/essentials";
import { sendEmail } from "../../../admin/requests/mailSender";

export async function POST(req: NextRequest) {
  try {
    // 1. Authenticate Teacher
    const user = await VerifyUser(req);
    if (user instanceof Response) return user;
    
    if (user.role !== "Teacher") {
      return NextResponse.json({ 
        message: "Access denied - Teacher role required" 
      }, { status: 403 });
    }

    // 2. Parse request body
    const reqB = await req.json() as { approved: boolean; meetID: string };
    
    if (!reqB.meetID || typeof reqB.approved !== 'boolean') {
      return NextResponse.json({ 
        error: "Missing meetID or approved status" 
      }, { status: 400 });
    }

    // 3. Transaction: Update status + Send email
    const result = await DB.$transaction(async (tx) => {
      // Find meeting request
      const meeting = await tx.meeting_Request.findUnique({
        where: { id: reqB.meetID,TeacherId:user.id },
        select:{
            date:true,
            Sender:{
                select:{
                    ParentName:true,
                    User:{
                        select:{
                            email:true,
                        }
                    }
                }
            }
        }
      });

      if (!meeting) {
        throw new Error("Meeting request not found");
      }

      // Update meeting status (don't delete - update status instead)
      await tx.meeting_Request.update({
        where: { id: reqB.meetID },
        data: { 
          MeetStatus: reqB.approved ? "Approved" : "Rejected" 
        }
      });

      return { meeting, parentEmail: meeting.Sender.User.email };
    });

    // 4. Send notification email
    const action = reqB.approved ? "approved" : "rejected";
    const statusEmoji = reqB.approved ? "✅" : "❌";
    
    await sendEmail({
      to: result.parentEmail || "",
      subject: `${statusEmoji} Meeting ${action.charAt(0).toUpperCase() + action.slice(1)} - Edutalk`,
      name: result.meeting.Sender.ParentName || "Parent",
      message: reqB.approved 
        ? `Your meeting request on ${new Date(result.meeting.date).toLocaleString()} has been **approved** by teacher ${user.name}. Please prepare for the meeting.`
        : `Your meeting request on ${new Date(result.meeting.date).toLocaleString()} has been **${action}**. Please contact the teacher if you have questions.`
    });

    return NextResponse.json({ 
      message: `Meeting ${action} successfully. Email sent to parent.` 
    }, { status: 200 });

  } catch (error: any) {
    console.error("Meeting approval error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to process meeting request" }, 
      { status: 500 }
    );
  }
}
