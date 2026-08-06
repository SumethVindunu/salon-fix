"use client";

import { Scissors, MapPin, Phone, Mail, Clock, Heart, ArrowUp } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About Us" },
  { href: "#gallery", label: "Gallery" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#booking", label: "Book Online" },
  { href: "#contact", label: "Contact" },
];

const services = [
  "Hair Cutting",
  "Hair Coloring",
  "Hair Treatments",
  "Bridal Packages",
  "Facial & Skincare",
  "Beard Grooming",
  "Hair Straightening",
  "Blow Dry & Styling",
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-stone-950 text-white">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3
              className="text-2xl md:text-3xl font-bold text-white mb-2"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Ready for a New Look?
            </h3>
            <p className="text-amber-100">
              Book your appointment today and let our experts transform your style.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="tel:0712488888"
              className="inline-flex items-center gap-2 bg-white text-amber-700 px-6 py-3 rounded-full font-semibold hover:bg-amber-50 transition-colors hover:shadow-lg"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <a
              href="#booking"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-amber-700 transition-colors"
            >
              <Scissors className="w-4 h-4" />
              Book Online
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
                <Scissors className="w-5 h-5 text-white" />
              </div>
              <div>
                <span
                  className="text-xl font-bold tracking-tight"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Salon Fix
                </span>
                <p className="text-[10px] uppercase tracking-[0.2em] text-amber-400 -mt-1">
                  Hair & Beauty
                </p>
              </div>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              Matara&apos;s premium hair and beauty salon. Where style meets perfection.
              Experience the difference with our expert team and premium products.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-stone-400 text-sm">
                <MapPin className="w-4 h-4 text-amber-500" />
                Matara, Sri Lanka
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: "var(--font-serif)" }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-stone-400 hover:text-amber-400 transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-amber-500 transition-all duration-300 rounded" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: "var(--font-serif)" }}>
              Our Services
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-stone-400 hover:text-amber-400 transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-amber-500 transition-all duration-300 rounded" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: "var(--font-serif)" }}>
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                <div className="text-sm text-stone-400">
                  <p>98 Elawella Rd</p>
                  <p>Matara 81000</p>
                  <p>Sri Lanka</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a
                  href="tel:0712488888"
                  className="text-sm text-stone-400 hover:text-amber-400 transition-colors"
                >
                  071 248 8888
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a
                  href="mailto:info@salonfix.lk"
                  className="text-sm text-stone-400 hover:text-amber-400 transition-colors"
                >
                  info@salonfix.lk
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                <div className="text-sm text-stone-400">
                  <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-stone-800" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-stone-500">
            © {new Date().getFullYear()} Salon Fix. All rights reserved. Made with{" "}
            <Heart className="w-3 h-3 inline text-red-500 fill-red-500" /> in Matara
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-stone-400 hover:text-amber-400 transition-colors text-sm group"
          >
            Back to Top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
