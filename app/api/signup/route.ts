import { cookies } from "next/headers";
import * as jwt from 'jsonwebtoken';
import { DB } from "../essentials";


export async function POST(req:Request){

   try{ console.log("Login API Hit")
    const {name,password}=await req.json();
    if(!name || !password){
        return Response.json({message:"Invalid credentials"},{status:200});
    }
    const User=await DB.user.create({
        data:{name,password}
    }).catch((err:Error)=>{
        console.log("Error in 1st DB Call",err);
    }) 
    
    console.log("Created User:",User);

    if(!User){
        return Response.json({message:"User Already Exists"},{status:200});
    }
    
    const token=jwt.sign(User.id,"secretkey");

    (await cookies()).set("token",token,{
        httpOnly:true,
        secure:true,
        path:"/",
        maxAge:60*60*24*2
    })
    return Response.json({message:"SignUp Successful",token:token},{status:200})
}catch(err){
        console.log("Error in Api:");
        return Response.json({message:"SignUp Not Successfull"},{status:200})
    }
}