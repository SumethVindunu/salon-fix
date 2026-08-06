import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { appointments } from "@/db/schema";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, preferredDate, preferredTime, message } = body;

    if (!name || !email || !phone || !service || !preferredDate || !preferredTime) {
      return NextResponse.json(
        { error: "Please fill in all required fields" },
        { status: 400 }
      );
    }

    const result = await db.insert(appointments).values({
      name,
      email,
      phone,
      service,
      preferredDate,
      preferredTime,
      message: message || null,
    }).returning();

    return NextResponse.json(
      { success: true, appointment: result[0] },
      { status: 201 }
    );
  } catch (error) {
    console.error("Appointment creation error:", error);
    return NextResponse.json(
      { error: "Failed to create appointment. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const allAppointments = await db.select().from(appointments).orderBy(appointments.createdAt);
    return NextResponse.json({ appointments: allAppointments });
  } catch (error) {
    console.error("Fetch appointments error:", error);
    return NextResponse.json(
      { error: "Failed to fetch appointments" },
      { status: 500 }
    );
  }
}
