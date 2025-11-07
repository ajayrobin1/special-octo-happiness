"use server"
import { connectDB } from "@/lib/mongodb";
import Admin from "@/models/Admin";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    await connectDB();

    const existing = await Admin.findOne({ email });
    if (existing)
      return Response.json({ error: "Admin already exists" }, { status: 400 });

    const hashed = await bcrypt.hash(password, 10);
    await Admin.create({ name, email, password: hashed });

    return Response.json({ message: "Admin registered successfully" }, { status: 201 });
  } catch (error) {
    console.log(error)
    return Response.json({ error: error.message }, { status: 500 });
  }
}