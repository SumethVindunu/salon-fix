"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CalendarCheck,
  CheckCircle2,
  Hourglass,
  LogOut,
  RefreshCw,
  RotateCcw,
  Scissors,
  Trash2,
} from "lucide-react";

interface Appointment {
  id: number;
  name: string;
  email: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message: string | null;
  status: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updatingId, setUpdatingId] = useState<number | null>(null);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      sessionStorage.getItem("salon-fix-admin") !== "authenticated"
    ) {
      router.replace("/admin");
    }
  }, [router]);

  const loadAppointments = () => {
    fetch("/api/appointments")
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to fetch appointments");
        return data.appointments as Appointment[];
      })
      .then((items) => {
        setAppointments(items);
        setLoading(false);
      })
      .catch((err) => {
        setError(err instanceof Error ? err.message : "Failed to fetch appointments");
        setLoading(false);
      });
  };

  useEffect(() => {
    loadAppointments();
  }, []);

  const updateStatus = async (id: number, status: string) => {
    setUpdatingId(id);
    setError("");
    try {
      const res = await fetch("/api/appointments", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to update status");
      setAppointments((prev) =>
        prev.map((a) => (a.id === id ? { ...a, status } : a))
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update status");
    } finally {
      setUpdatingId(null);
    }
  };

  const deleteAppointment = async (id: number) => {
    const appointment = appointments.find((a) => a.id === id);
    const confirmed = window.confirm(
      `Delete the appointment for ${appointment?.name ?? "this customer"}? This cannot be undone.`
    );
    if (!confirmed) return;

    setDeletingId(id);
    setError("");
    try {
      const res = await fetch("/api/appointments", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to delete appointment");
      setAppointments((prev) => prev.filter((a) => a.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete appointment");
    } finally {
      setDeletingId(null);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("salon-fix-admin");
    router.replace("/admin");
  };

  const pendingCount = appointments.filter((a) => a.status !== "completed").length;

  return (
    <main className="min-h-screen bg-stone-100">
      <header className="bg-stone-900 text-white sticky top-0 z-40 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
              <Scissors className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold" style={{ fontFamily: "var(--font-serif)" }}>
                Salon Fix Admin
              </h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-amber-400 -mt-0.5">
                Appointment Manager
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setError("");
                loadAppointments();
              }}
              className="text-white hover:bg-stone-800 hover:text-amber-400"
            >
              <RefreshCw className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="text-white hover:bg-stone-800 hover:text-red-400"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-2xl font-bold text-stone-900" style={{ fontFamily: "var(--font-serif)" }}>
              Appointments
            </h2>
          </div>
          <Link href="/">
            <Button variant="outline" className="rounded-full">
              View Website
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 max-w-lg mb-8">
          <div className="bg-white rounded-2xl border border-stone-200 shadow-md p-6 text-center">
            <div className="mx-auto w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center mb-3">
              <CalendarCheck className="w-5 h-5 text-amber-600" />
            </div>
            <p className="text-5xl font-bold text-stone-900 leading-none">{appointments.length}</p>
            <p className="text-sm font-semibold text-stone-500 uppercase tracking-[0.15em] mt-2">
              Total Appointments
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-amber-300 shadow-md p-6 text-center">
            <div className="mx-auto w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center mb-3">
              <Hourglass className="w-5 h-5 text-amber-600" />
            </div>
            <p className="text-5xl font-bold text-amber-600 leading-none">{pendingCount}</p>
            <p className="text-sm font-semibold text-stone-500 uppercase tracking-[0.15em] mt-2">
              Pending
            </p>
          </div>
        </div>

        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
            {error}
          </div>
        )}

        {loading ? (
          <div className="bg-white rounded-xl border border-stone-200 p-12 text-center text-stone-500 shadow-sm">
            Loading appointments...
          </div>
        ) : appointments.length === 0 ? (
          <div className="bg-white rounded-xl border border-stone-200 p-12 text-center shadow-sm">
            <CalendarCheck className="w-10 h-10 text-stone-300 mx-auto mb-3" />
            <p className="text-stone-600 font-medium">No appointments yet</p>
            <p className="text-sm text-stone-500 mt-1">
              Bookings will appear here once customers reserve a slot.
            </p>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {appointments.map((appointment) => (
              <div
                key={appointment.id}
                className={`bg-white rounded-xl border shadow-sm p-5 transition-all duration-300 ${
                  appointment.status === "completed"
                    ? "border-emerald-300"
                    : "border-stone-200 hover:shadow-md"
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="font-semibold text-stone-900">{appointment.name}</h3>
                    <p className="text-xs text-stone-500">{appointment.service}</p>
                  </div>
                  <Badge
                    variant={appointment.status === "completed" ? "gold" : "default"}
                    className={
                      appointment.status === "completed"
                        ? "bg-emerald-100 text-emerald-700"
                        : ""
                    }
                  >
                    {appointment.status === "completed" ? "Completed" : "Pending"}
                  </Badge>
                </div>

                <div className="text-sm space-y-1.5 text-stone-700 mb-4">
                  <p className="flex items-center gap-2">
                    <CalendarCheck className="w-4 h-4 text-amber-600 shrink-0" />
                    {appointment.preferredDate} · {appointment.preferredTime}
                  </p>
                  <p className="truncate">Phone: {appointment.phone}</p>
                  <p className="truncate">Email: {appointment.email}</p>
                  {appointment.message && (
                    <p className="text-xs text-stone-500 line-clamp-2">{appointment.message}</p>
                  )}
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center gap-2">
                  {appointment.status === "completed" ? (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 rounded-full"
                      onClick={() => updateStatus(appointment.id, "pending")}
                      disabled={updatingId === appointment.id || deletingId === appointment.id}
                    >
                      <RotateCcw className="w-3.5 h-3.5 mr-1.5" />
                      {updatingId === appointment.id ? "Updating..." : "Mark as Pending"}
                    </Button>
                  ) : (
                    <Button
                      variant="default"
                      size="sm"
                      className="flex-1 rounded-full"
                      onClick={() => updateStatus(appointment.id, "completed")}
                      disabled={updatingId === appointment.id || deletingId === appointment.id}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
                      {updatingId === appointment.id ? "Updating..." : "Mark as Completed"}
                    </Button>
                  )}
                  <Button
                    variant="destructive"
                    size="sm"
                    className="rounded-full px-3"
                    onClick={() => deleteAppointment(appointment.id)}
                    disabled={updatingId === appointment.id || deletingId === appointment.id}
                    aria-label={`Delete appointment for ${appointment.name}`}
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    {deletingId === appointment.id ? "Deleting..." : ""}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
