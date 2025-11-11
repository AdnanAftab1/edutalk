import { PrismaClient,Prisma } from "../../appi/generated/prisma";
import { NextResponse, NextRequest } from "next/server";
import * as jwt from "jsonwebtoken";

const DB =new PrismaClient();



 async function VerifyUser(req: NextRequest) {
  console.log("Auth Middleware Hit");

  const token = req.cookies.get("token")?.value;

  if (!token) {
    console.log("No token found");
    return NextResponse.json(
      { message: "Unauthorized Access" },
      { status: 401 }
    );
  }
    console.log("Token",token);


  try {
    const data =  jwt.verify(token,"secretkey");
    console.log("Decoded Data:", data);
    const user= await DB.user.findUnique({
      where:{id:data as string}
    })
    console.log("User from DB:" ,user)
    if(!user){
      return NextResponse.json({
        message:"User Not Found..."
      })
    }
    if(user.status==='Unverified'){
      return NextResponse.json({
        message:"User Not Verfied..."
      })
    }

    if(user.status==='Rejected'){
      return NextResponse.json({
        message:"Rejected Application..."
      })    
    }   


    console.log("\n\n\n\n\n\n\n User authenticated as", user.role);

    return user.id;
  } catch (err) {
    console.log("Invalid token:",err);
    return NextResponse.json(
      { message: "Invalid Token" },
      { status: 403 }
    );
  }
}





export {VerifyUser,DB,Prisma};