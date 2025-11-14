import { cookies } from "next/headers";
import { Prisma,PrismaClient } from "../../../appi/generated/prisma";
import * as jwt from 'jsonwebtoken';
import { DB } from "../essentials";


export async function POST(req:Request){
   try{ 
    console.log("Logout API Hit")
    const cooked=await cookies();
    const a=cooked.has("token");
    if(!a){     
        return Response.json({
            message:"Token not found..."
        })
    }
    const token=jwt.verify(cooked.get('token')?.value || "Not found","secretkey");
    cooked.delete("token");
    return Response.json({message:"Logout Successfull",token:token,},{status:200})    

    }catch(err){
        console.log("Error in Api:",err);
        return Response.json({message:"Logout Not Successfull"},{status:200})
    }
}