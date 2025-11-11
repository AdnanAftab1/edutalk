import { cookies } from "next/headers";
import * as jwt from 'jsonwebtoken';
import { DB } from "../essentials";



export async function POST(req:Request){

   try{ 
    console.log("Login API Hit")
    const {username,password}=await req.json();
    const cooked=await cookies();
    console.log(req.body)

    if(!username || !password){
        return Response.json({message:"Invalid credentials"},{status:400});
    }
    

    const User=await DB.user.findUnique({
        where:{name:username,password}
    }).catch((err:Error)=>{
        console.log("Error in 1st DB Call",err);
        return Response.json({message:"Error in 1st DB Call"},{status:400});
    })


    if(!User){
        return Response.json({message:"User Not Found..."},{status:400});
    }
    
    const token=jwt.sign(User.id,"secretkey");

    cooked.set("token",token,{
        httpOnly:true,  
        secure:true,  
        path:"/",
        maxAge:60*60*24*2
    })
    const prevToken=cooked.get("token");

    if(prevToken){
        return Response.json({message:"Already logged in",token:prevToken.value},{status:200});
    }
    // return Response.redirect(new URL('/parent',req.url));
    return Response.json({message:"Login Successful",token:token},{status:200})
    }
    catch(err){ 
        console.log("Error in Api:");
        console.log(err);
        return Response.json({message:"Login Not Successfull",},{status:400})
    }
}