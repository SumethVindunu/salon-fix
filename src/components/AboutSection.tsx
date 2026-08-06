"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  Users,
  Clock,
  ThumbsUp,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "Expert Stylists",
    description: "Our team of certified professionals stays up-to-date with the latest trends and techniques.",
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "Personalized consultations ensure every client gets exactly the look they desire.",
  },
  {
    icon: Clock,
    title: "Convenient Hours",
    description: "Open Monday through Saturday, 9 AM to 8 PM, to fit your busy schedule.",
  },
  {
    icon: ThumbsUp,
    title: "Premium Products",
    description: "We exclusively use top-quality, salon-grade products for the best results.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/about-salon.jpg"
                alt="Salon Fix Team"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 border border-stone-100">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center">
                  <Award className="w-7 h-7 text-amber-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-stone-900" style={{ fontFamily: "var(--font-serif)" }}>
                    10+
                  </div>
                  <div className="text-sm text-stone-500">Years of Excellence</div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-100 rounded-2xl -z-10" />
          </div>

          {/* Content Side */}
          <div>
            <Badge variant="gold" className="mb-4">
              <Sparkles className="w-3 h-3 mr-1" />
              About Us
            </Badge>

            <h2
              className="text-4xl md:text-5xl font-bold text-stone-900 mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Matara&apos;s Most Trusted{" "}
              <span className="text-gradient">Beauty Destination</span>
            </h2>

            <p className="text-stone-600 text-lg mb-6 leading-relaxed">
              Located at 98 Elawella Road in the heart of Matara, Salon Fix has been
              the go-to destination for hair and beauty services for over a decade.
              Our passionate team of stylists combines creativity with expertise to
              deliver stunning results every time.
            </p>

            <p className="text-stone-500 mb-8 leading-relaxed">
              Whether you&apos;re looking for a fresh haircut, a bold new color, or a
              complete bridal makeover, we&apos;re here to make you look and feel
              your absolute best. We believe that great hair changes everything, and
              we&apos;re committed to helping you find your perfect style.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-amber-50 transition-colors group"
                  >
                    <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-amber-200 transition-colors">
                      <Icon className="w-4 h-4 text-amber-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-stone-900 text-sm">
                        {item.title}
                      </h4>
                      <p className="text-xs text-stone-500 mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a href="#booking">
              <Button size="lg" className="rounded-full group">
                Book Your Visit
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
