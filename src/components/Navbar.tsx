"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Phone,
  MapPin,
  Clock,
  Scissors,
  Globe,
  Heart,
} from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-stone-900 text-white py-2 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
              <Phone className="w-3.5 h-3.5" />
              071 248 8888
            </span>
            <span className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
              <MapPin className="w-3.5 h-3.5" />
              98 Elawella Rd, Matara 81000
            </span>
            <span className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
              <Clock className="w-3.5 h-3.5" />
              Mon - Sat: 9:00 AM - 8:00 PM
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/admin"
              className="hover:text-amber-400 transition-colors"
              aria-label="Admin Panel"
            >
              <Globe className="w-4 h-4" />
            </Link>
            {/* <a href="#" className="hover:text-amber-400 transition-colors" aria-label="Follow us">
              <Heart className="w-4 h-4" />
            </a> */}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
            : "bg-transparent py-4"
        }`}
        style={{ top: isScrolled ? 0 : undefined }}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center group-hover:bg-amber-700 transition-all duration-300 group-hover:rotate-12">
                <Scissors className="w-5 h-5 text-white" />
              </div>
            </div>
            <div>
              <span
                className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                  isScrolled ? "text-stone-900" : "text-white"
                }`}
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Salon Fix
              </span>
              <p
                className={`text-[10px] uppercase tracking-[0.2em] -mt-1 transition-colors duration-300 ${
                  isScrolled ? "text-amber-600" : "text-amber-400"
                }`}
              >
                Hair & Beauty
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 hover:bg-amber-50 hover:text-amber-700 relative group ${
                  isScrolled ? "text-stone-700" : "text-white/90"
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-3/4 rounded-full" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:0712488888">
              <Button variant="default" size="default" className="rounded-full">
                <Phone className="w-4 h-4 mr-2" />
                Book Now
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden p-2 rounded-md transition-colors ${
              isScrolled ? "text-stone-900" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="px-4 py-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-stone-700 hover:bg-amber-50 hover:text-amber-700 rounded-lg transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <a href="tel:0712488888" className="block">
                <Button variant="default" size="lg" className="w-full rounded-full">
                  <Phone className="w-4 h-4 mr-2" />
                  Book Now - 071 248 8888
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
