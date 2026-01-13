import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import { DB } from "@/app/api/essentials";
export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;
    const file = formData.get("authorizationFile") as File;
    const phoneNumber = formData.get("phoneNumber") as string;
    const role = formData.get("role") as string;
    
    // Validation
    if (!name?.trim() || !email?.trim() || !password || !confirmPassword || !file) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    if (password !== confirmPassword) {
      return NextResponse.json({ error: "Passwords don't match" }, { status: 400 });
    }

    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: "File too large (5MB max)" }, { status: 400 });
    }

    // Check if user already exists
    const existingUser = await DB.user.findUnique({
      where: { name } // name is unique in your schema
    });

    if (existingUser) {
      return NextResponse.json({ error: "User with this name already exists" }, { status: 409 });
    }

    // Handle file upload
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filename = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, "")}`;
    const filepath = path.join(process.cwd(), "public/uploads", filename);
    
    await writeFile(filepath, buffer);
    const authFileUrl = `/uploads/${filename}`;

    
    const newUser = await DB.user.create({
      data: {
        name: name.trim(),
        email: email.trim(),
        password: password,
        phoneNumber: phoneNumber, 
        AuthFile: authFileUrl, 
        role: role as "Parent"|"Teacher"|"Admin", 
        status: "Unverified" 
      }
    });

    return NextResponse.json({ 
      message: "Registration successful! Awaiting admin approval.",
      userId: newUser.id 
    });

  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json({ 
      error: "Registration failed. Please try again." 
    }, { status: 500 });
  }
}
