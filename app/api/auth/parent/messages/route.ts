import { NextRequest, NextResponse } from "next/server";
import { DB, VerifyUser } from "@/app/api/essentials";

interface ChatMessageBody {
  Tid: string;        // Target Teacher ID
  Content: string;    // Message content
}

export async function POST(req: NextRequest) {
  try {
    const user = await VerifyUser(req);
    if (user instanceof Response) return user;

    if (user.role !== "Parent") {
      return NextResponse.json({ 
        message: "Only Parents can send messages" 
      }, { status: 403 });
    }

    const body: ChatMessageBody = await req.json();

    if (!body.Tid || !body.Content?.trim()) {
      return NextResponse.json({ 
        error: "Missing Teacher ID or empty message" 
      }, { status: 400 });
    }

    const teacher = await DB.teacher.findUnique({
      where: { Tid: body.Tid }
    });

    if (!teacher) {
      return NextResponse.json({ 
        error: "Teacher not found" 
      }, { status: 404 });
    }

    await DB.$transaction(async (tx) => {
      await tx.chatMessages.create({
        data: {
          Pid: user.id,      
          Tid: body.Tid,     
          Content: body.Content,
          Date: new Date(),
          Sender:'Parent'
        }
      });
    });

    return NextResponse.json({ 
      message: "Message sent successfully",
    }, { status: 201 });

  } catch (error) {
    console.error("Chat send error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to send message" }, 
      { status: 500 }
    );
  }
}
