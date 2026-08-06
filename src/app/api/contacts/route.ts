import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { contacts } from "@/db/schema";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields" },
        { status: 400 }
      );
    }

    const result = await db.insert(contacts).values({
      name,
      email,
      phone: phone || null,
      subject,
      message,
    }).returning();

    return NextResponse.json(
      { success: true, contact: result[0] },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact creation error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
