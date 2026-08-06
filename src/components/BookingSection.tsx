"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  Scissors,
  CheckCircle,
  Loader2,
} from "lucide-react";

const serviceOptions = [
  "Men's Haircut",
  "Women's Haircut",
  "Children's Haircut",
  "Hair Coloring",
  "Highlights / Balayage",
  "Keratin Treatment",
  "Hair Spa",
  "Bridal Package",
  "Groom Package",
  "Facial & Skincare",
  "Beard Grooming",
  "Hair Straightening",
  "Blow Dry & Styling",
  "Other",
];

const timeSlots = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
];

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        preferredDate: "",
        preferredTime: "",
        message: "",
      });
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="booking" className="py-24 bg-stone-900 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="gold" className="mb-4">
            <Sparkles className="w-3 h-3 mr-1" />
            Book Online
          </Badge>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Book Your <span className="text-gradient">Appointment</span>
          </h2>
          <p className="text-stone-400 max-w-2xl mx-auto text-lg">
            Reserve your spot today. Fill in the form below and we&apos;ll
            confirm your appointment within 30 minutes.
          </p>
        </div>

        <Card className="border-stone-700 bg-stone-800/50 backdrop-blur-sm">
          <CardContent className="p-8">
            {status === "success" ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3
                  className="text-2xl font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Booking Confirmed!
                </h3>
                <p className="text-stone-400 mb-6">
                  Thank you for booking with Salon Fix. We&apos;ll contact you shortly
                  to confirm your appointment.
                </p>
                <Button
                  variant="outline"
                  className="rounded-full border-stone-600 text-white hover:bg-stone-700"
                  onClick={() => setStatus("idle")}
                >
                  Book Another Appointment
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-stone-300 flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="bg-stone-700/50 border-stone-600 text-white placeholder:text-stone-500 focus:ring-amber-500"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-stone-300 flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email Address *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="bg-stone-700/50 border-stone-600 text-white placeholder:text-stone-500 focus:ring-amber-500"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-stone-300 flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Phone Number *
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="071 XXX XXXX"
                      required
                      className="bg-stone-700/50 border-stone-600 text-white placeholder:text-stone-500 focus:ring-amber-500"
                    />
                  </div>

                  {/* Service */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-stone-300 flex items-center gap-2">
                      <Scissors className="w-4 h-4" />
                      Service *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="flex h-10 w-full rounded-md border border-stone-600 bg-stone-700/50 px-3 py-2 text-sm text-white ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 transition-all duration-200"
                    >
                      <option value="" className="text-stone-900">Select a service</option>
                      {serviceOptions.map((service) => (
                        <option key={service} value={service} className="text-stone-900">
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-stone-300 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Preferred Date *
                    </label>
                    <Input
                      name="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      required
                      className="bg-stone-700/50 border-stone-600 text-white focus:ring-amber-500"
                    />
                  </div>

                  {/* Time */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-stone-300 flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Preferred Time *
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      required
                      className="flex h-10 w-full rounded-md border border-stone-600 bg-stone-700/50 px-3 py-2 text-sm text-white ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 transition-all duration-200"
                    >
                      <option value="" className="text-stone-900">Select a time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time} className="text-stone-900">
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-stone-300">
                    Additional Notes (Optional)
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any special requests or preferences..."
                    rows={3}
                    className="bg-stone-700/50 border-stone-600 text-white placeholder:text-stone-500 focus:ring-amber-500"
                  />
                </div>

                {/* Error Message */}
                {status === "error" && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-red-400 text-sm">
                    {errorMessage}
                  </div>
                )}

                {/* Submit */}
                <Button
                  type="submit"
                  size="xl"
                  className="w-full rounded-full"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Booking...
                    </>
                  ) : (
                    <>
                      <Calendar className="w-5 h-5 mr-2" />
                      Confirm Booking
                    </>
                  )}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
