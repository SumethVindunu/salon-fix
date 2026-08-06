"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Scissors, Star, MapPin, ChevronDown, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Salon Fix Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl animate-float delay-300" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-24 pb-16 text-center">
        <div className="animate-fade-in-up">
          <Badge variant="gold" className="mb-6 text-sm px-4 py-1.5 gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Premium Hair & Beauty Salon
          </Badge>
        </div>

        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in-up delay-100"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Welcome to{" "}
          <span className="text-gradient">Salon Fix</span>
        </h1>

        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-4 animate-fade-in-up delay-200">
          Where style meets perfection. Experience premium hair styling, coloring,
          and beauty treatments in the heart of Matara.
        </p>

        <div className="flex items-center justify-center gap-2 text-amber-400 mb-8 animate-fade-in-up delay-300">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">98 Elawella Rd, Matara 81000</span>
          <span className="text-white/40 mx-2">|</span>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-white/60 text-sm ml-1">5.0</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-400">
          <a href="#booking">
            <Button size="xl" className="rounded-full group">
              <Scissors className="w-5 h-5 mr-2 group-hover:rotate-45 transition-transform duration-300" />
              Book Appointment
            </Button>
          </a>
          <a href="#services">
            <Button variant="outline" size="xl" className="rounded-full border-white/30 text-white hover:bg-white hover:text-stone-900">
              Explore Services
            </Button>
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 max-w-lg mx-auto mt-16 gap-8 animate-fade-in-up delay-500">
          {[
            { value: "10+", label: "Years Experience" },
            { value: "5K+", label: "Happy Clients" },
            { value: "20+", label: "Expert Stylists" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-400" style={{ fontFamily: "var(--font-serif)" }}>
                {stat.value}
              </div>
              <div className="text-xs text-white/60 uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#services" className="text-white/50 hover:text-white transition-colors">
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}
