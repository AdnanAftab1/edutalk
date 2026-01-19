import { NextRequest, NextResponse } from "next/server";
import { DB, VerifyUser } from "@/app/api/essentials";

interface ChatMessageBody {
  Pid: string;       
  Content: string;    
}

export async function POST(req: NextRequest) {
  try {
    const user = await VerifyUser(req);
    if (user instanceof Response) return user;

    if (user.role !== "Teacher") {
      return NextResponse.json({ 
        message: "Only Teachers can send messages" 
      }, { status: 403 });
    }

    const body: ChatMessageBody = await req.json();

    if (!body.Pid || !body.Content?.trim()) {
      return NextResponse.json({ 
        error: "Missing Parent ID or empty message" 
      }, { status: 400 });
    }

    const parent = await DB.parent.findUnique({
      where: { Pid: body.Pid }
    });

    if (!parent) {
      return NextResponse.json({ 
        error: "Parent not found" 
      }, { status: 404 });
    }

    await DB.$transaction(async (tx) => {
      await tx.chatMessages.create({
        data: {
          Pid: body.Pid,     
          Tid: user.id,      
          Content: body.Content.trim(),
          Date: new Date(),
          Sender:'Teacher'
        }
      });
    });

    return NextResponse.json({ 
      message: "Message sent successfully",
      MessageId: "auto-generated-uuid"
    }, { status: 201 });

  } catch (error: any) {
    console.error("Chat send error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to send message" }, 
      { status: 500 }
    );
  }
}
