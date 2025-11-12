import { NextResponse } from "next/server";
import mongoose from "mongoose";
import User from "@/models/User"; // your Mongoose model

// MongoDB connection
const MONGO_URI = process.env.MONGODB_URI;
if (!mongoose.connection.readyState) mongoose.connect(MONGO_URI);

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page")) || 1;
  const limit = parseInt(searchParams.get("limit")) || 10;

  const skip = (page - 1) * limit;

  try {
    const [users, total] = await Promise.all([
      User.find().skip(skip).limit(limit),
      User.countDocuments()
    ]);

    return NextResponse.json({
      data: users,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalUsers: total
    });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}