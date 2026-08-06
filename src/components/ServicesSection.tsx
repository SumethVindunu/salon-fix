"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Scissors,
  Palette,
  Sparkles,
  Crown,
  Heart,
  Droplets,
  Wind,
  Star,
} from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Hair Cutting",
    description:
      "Expert precision cuts for men, women, and children. From classic styles to modern trends, our stylists craft the perfect look for you.",
    price: "From Rs. 500",
    popular: true,
    image: "https://images.pexels.com/photos/37533244/pexels-photo-37533244.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
  },
  {
    icon: Palette,
    title: "Hair Coloring",
    description:
      "Full color, highlights, balayage, ombre, and more. We use premium products for vibrant, long-lasting color that protects your hair.",
    price: "From Rs. 2,000",
    popular: false,
    image: "https://images.pexels.com/photos/3993462/pexels-photo-3993462.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
  },
  {
    icon: Sparkles,
    title: "Hair Treatments",
    description:
      "Deep conditioning, keratin treatments, protein therapies, and scalp treatments to restore and rejuvenate your hair.",
    price: "From Rs. 1,500",
    popular: false,
    image: "https://images.pexels.com/photos/3993451/pexels-photo-3993451.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
  },
  {
    icon: Crown,
    title: "Bridal Packages",
    description:
      "Complete bridal makeover packages including hair styling, makeup, and pre-wedding beauty treatments for your special day.",
    price: "From Rs. 15,000",
    popular: true,
    image: "https://images.pexels.com/photos/23349912/pexels-photo-23349912.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
  },
  {
    icon: Heart,
    title: "Facial & Skincare",
    description:
      "Professional facials, skin treatments, and personalized skincare routines using premium products for glowing, healthy skin.",
    price: "From Rs. 1,000",
    popular: false,
    image: "https://images.pexels.com/photos/3993454/pexels-photo-3993454.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
  },
  {
    icon: Droplets,
    title: "Hair Wash & Blow Dry",
    description:
      "Luxurious hair wash with premium shampoos, deep conditioning, and professional blow-dry styling for the perfect finish.",
    price: "From Rs. 400",
    popular: false,
    image: "https://images.pexels.com/photos/7755460/pexels-photo-7755460.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
  },
  {
    icon: Wind,
    title: "Hair Straightening",
    description:
      "Professional permanent and temporary straightening services using the latest techniques and premium products.",
    price: "From Rs. 3,000",
    popular: false,
    image: "https://images.pexels.com/photos/7195803/pexels-photo-7195803.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
  },
  {
    icon: Star,
    title: "Beard Grooming",
    description:
      "Expert beard trimming, shaping, and hot towel shaves. Keep your beard looking sharp and well-maintained.",
    price: "From Rs. 300",
    popular: false,
    image: "https://images.pexels.com/photos/5970247/pexels-photo-5970247.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-salon-cream">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="gold" className="mb-4">
            <Sparkles className="w-3 h-3 mr-1" />
            Our Services
          </Badge>
          <h2
            className="text-4xl md:text-5xl font-bold text-stone-900 mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            What We <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-stone-500 max-w-2xl mx-auto text-lg">
            From classic cuts to the latest trends, our expert team delivers
            exceptional results with premium products and personalized attention.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="group overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border-0 bg-white"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {service.popular && (
                    <Badge className="absolute top-3 right-3 bg-amber-500">
                      Popular
                    </Badge>
                  )}
                  <div className="absolute bottom-3 left-3">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold text-stone-900 mb-2 group-hover:text-amber-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-stone-500 mb-3 line-clamp-2">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-amber-600 font-semibold text-sm">
                      {service.price}
                    </span>
                    <a
                      href="#booking"
                      className="text-xs text-stone-400 hover:text-amber-600 transition-colors font-medium uppercase tracking-wider"
                    >
                      Book Now →
                    </a>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
