"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  Send,
  CheckCircle,
  Loader2,
  Navigation,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["98 Elawella Rd", "Matara 81000", "Sri Lanka"],
    action: {
      label: "Get Directions",
      href: "https://maps.app.goo.gl/GL2avKSVpN4CZcPq8",
    },
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["071 248 8888"],
    action: {
      label: "Call Now",
      href: "tel:0712488888",
    },
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@salonfix.lk"],
    action: {
      label: "Send Email",
      href: "mailto:info@salonfix.lk",
    },
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sunday: Closed"],
    action: null,
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 bg-salon-cream">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="gold" className="mb-4">
            <Sparkles className="w-3 h-3 mr-1" />
            Contact Us
          </Badge>
          <h2
            className="text-4xl md:text-5xl font-bold text-stone-900 mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-stone-500 max-w-2xl mx-auto text-lg">
            Have questions or want to book a custom service? We&apos;d love to hear
            from you. Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-4">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <Card
                  key={info.title}
                  className="group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-stone-100"
                >
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-amber-200 transition-colors">
                      <Icon className="w-5 h-5 text-amber-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-stone-900 mb-1">
                        {info.title}
                      </h4>
                      {info.details.map((detail) => (
                        <p key={detail} className="text-sm text-stone-500">
                          {detail}
                        </p>
                      ))}
                      {info.action && (
                        <a
                          href={info.action.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-amber-600 hover:text-amber-700 mt-2 font-medium"
                        >
                          {info.action.label}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Map Card */}
            <Card className="overflow-hidden border-stone-100">
              <div className="relative h-48">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.4!2d80.532134!3d5.960439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae13ee3c6b779d7%3A0x1e6e8b8a01557fe6!2sSalon%20Fix!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Salon Fix Location"
                />
              </div>
              <CardContent className="p-3">
                <a
                  href="https://maps.app.goo.gl/GL2avKSVpN4CZcPq8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="w-full rounded-full">
                    <Navigation className="w-4 h-4 mr-2" />
                    Open in Google Maps
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-stone-100">
              <CardContent className="p-8">
                {status === "success" ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3
                      className="text-2xl font-bold text-stone-900 mb-2"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      Message Sent!
                    </h3>
                    <p className="text-stone-500 mb-6">
                      Thank you for reaching out. We&apos;ll get back to you within 24
                      hours.
                    </p>
                    <Button
                      variant="outline"
                      className="rounded-full"
                      onClick={() => setStatus("idle")}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3
                      className="text-2xl font-bold text-stone-900 mb-6"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      Send us a Message
                    </h3>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-stone-700">
                          Full Name *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-stone-700">
                          Email *
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-stone-700">
                          Phone
                        </label>
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="071 XXX XXXX"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-stone-700">
                          Subject *
                        </label>
                        <Input
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="How can we help?"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-stone-700">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                        required
                      />
                    </div>

                    {status === "error" && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-600 text-sm">
                        Something went wrong. Please try again or call us directly.
                      </div>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      className="rounded-full"
                      disabled={status === "loading"}
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
