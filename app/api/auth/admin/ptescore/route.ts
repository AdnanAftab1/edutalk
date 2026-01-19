import { NextRequest, NextResponse } from "next/server";
import { DB, VerifyUser } from "@/app/api/essentials";

interface ActivityRequestBody {
  studentID: string;
}

export async function POST(req: NextRequest) {
  try {
    const termDate = new Date();
    termDate.setMonth(termDate.getMonth() - 6); // Fixed: 6 months ago
    const user = await VerifyUser(req);
    if (user instanceof Response) return user;

    if (user.role !== "Admin" && user.role !== "Teacher") {
      return NextResponse.json({ 
        message: "Unauthorized: Admin or Teacher access required" 
      }, { status: 403 });
    }

    const body: ActivityRequestBody = await req.json();

    if (!body.studentID) {
      return NextResponse.json({ error: "Missing studentID" }, { status: 400 });
    }

    const parent = await DB.parent.findUnique({
      where: { Pid: body.studentID },
      include: {
        Class: true 
      }
    });

    if (!parent) {
      return NextResponse.json({ 
        message: "No registered parent found for this student",
        frequency: 0,
        totalActions: 0
      }, { status: 200 });
    }

    const [meets, messages, atten] = await Promise.all([
      DB.meeting_Request.count({
        where: {
          ParentId: parent.Pid,
          date: { gt: termDate }
        }
      }),
      DB.chatMessages.count({
        where: {
          Pid: parent.Pid,
          Date: { gt: termDate } 
        }
      }),
      DB.attendance.count({
        where: {
          ParentId: parent.Pid,
          date: { gt: termDate }
        }
      })
    ]);

    console.log(meets,atten,messages)

    const totalWeightage = calculateWeightage({ meets, messages, atten });
    const totalInteractions = meets + messages + atten;
    const avgMonthlyActivity = (totalInteractions / 6).toFixed(1);

    return NextResponse.json({ 
      student: parent.StudentName,
      parent: parent.ParentName,
      class: parent.Class?.Name,
      metrics: {    
        meets,
        messages,
        atten,
        totalInteractions,
        avgMonthlyActivity: parseFloat(avgMonthlyActivity),
        frequencyLabel: getFrequencyLabel(parseFloat(avgMonthlyActivity)),
        totalWeightage,
        activityLevel: getActivityLevel(totalWeightage)
      }
    }, { status: 200 });

  } catch (error: any) { 
    console.error("Activity computation error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to compute activity" }, 
      { status: 500 }
    );
  }
}


function calculateWeightage(activities: { meets: number; messages: number; atten: number }): number {

  
  const meetWeight = 0.5;
  const messageWeight = 0.3;
  const attendanceWeight = 0.2;
  
  const normalizedMeets = Math.min(activities.meets * 10, 100);     
  const normalizedMessages = Math.min(activities.messages * 5, 100); 
  const normalizedAtten = Math.min(activities.atten * 3, 100);      
  
  const weightedScore = (
    (normalizedMeets * meetWeight) +
    (normalizedMessages * messageWeight) + 
    (normalizedAtten * attendanceWeight)
  );
  
  return Math.round(weightedScore * 10) / 10;
}

function getActivityLevel(weightage: number): string {
  if (weightage >= 70) return "🟢 Very Active";
  if (weightage >= 50) return "🟡 Active"; 
  if (weightage >= 30) return "🟠 Moderate";
  if (weightage >= 10) return "🔴 Low";
  return "⚫ Inactive";
}

function getFrequencyLabel(avgActivity: number): string {
  if (avgActivity >= 5) return "High";
  if (avgActivity >= 2) return "Moderate";
  if (avgActivity > 0) return "Low";
  return "None";
}
