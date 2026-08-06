import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { appointments } from "@/db/schema";
import { eq } from "drizzle-orm";

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

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json(
        { error: "Appointment id and status are required" },
        { status: 400 }
      );
    }

    const updated = await db
      .update(appointments)
      .set({ status })
      .where(eq(appointments.id, Number(id)))
      .returning();

    if (updated.length === 0) {
      return NextResponse.json(
        { error: "Appointment not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, appointment: updated[0] });
  } catch (error) {
    console.error("Appointment update error:", error);
    return NextResponse.json(
      { error: "Failed to update appointment. Please try again." },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json(
        { error: "Appointment id is required" },
        { status: 400 }
      );
    }

    const deleted = await db
      .delete(appointments)
      .where(eq(appointments.id, Number(id)))
      .returning();

    if (deleted.length === 0) {
      return NextResponse.json(
        { error: "Appointment not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, deleted: deleted[0] });
  } catch (error) {
    console.error("Appointment delete error:", error);
    return NextResponse.json(
      { error: "Failed to delete appointment. Please try again." },
      { status: 500 }
    );
  }
}
