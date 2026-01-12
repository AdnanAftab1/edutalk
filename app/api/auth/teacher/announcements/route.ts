import { DB, VerifyUser, Prisma } from "@/app/api/essentials";
import { NextRequest, NextResponse } from "next/server";

type Body = {
  Title:string,
  Text:string,   
};

export async function POST(req: NextRequest) {
  const user = await VerifyUser(req);
  if (user instanceof Response) return user;

    try{
        const reqBody:Body=await req.json();

        await DB.annoucements.create({
            data:{
                Teacher:{
                    connect:{
                        Tid:user.id
                    }
                },
                Text:reqBody.Text,
                Title:reqBody.Title,
                Date:new Date()
            }
        })
         
  
        return NextResponse.json({ message: "Announcement given" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Database error" }, { status: 500 });
  }
}
