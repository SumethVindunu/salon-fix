"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Amaya Perera",
    role: "Regular Client",
    rating: 5,
    comment:
      "Salon Fix is absolutely the best salon in Matara! The stylists are incredibly talented and always know exactly what I want. I've been coming here for years and never been disappointed.",
    avatar: "AP",
  },
  {
    name: "Kavindu Silva",
    role: "Groom Package",
    rating: 5,
    comment:
      "Got the groom package for my wedding and it was amazing! The team was so professional and made me look my best on my special day. Highly recommend their bridal and groom services.",
    avatar: "KS",
  },
  {
    name: "Nishadi Fernando",
    role: "Hair Coloring Client",
    rating: 5,
    comment:
      "The balayage they did on my hair was absolutely stunning! Everyone keeps asking where I got it done. The quality of products they use is top-notch and my hair feels amazing.",
    avatar: "NF",
  },
  {
    name: "Rashmi Jayawardena",
    role: "Bridal Client",
    rating: 5,
    comment:
      "My bridal makeover was beyond perfect! The team at Salon Fix understood my vision and executed it flawlessly. I felt like a queen on my wedding day. Thank you Salon Fix!",
    avatar: "RJ",
  },
  {
    name: "Dineth Bandara",
    role: "Regular Client",
    rating: 5,
    comment:
      "Best barber experience in Matara! Clean, professional, and affordable. The fade they give is always on point. Great atmosphere too - the whole salon is super modern and comfortable.",
    avatar: "DB",
  },
  {
    name: "Sachini Ratnayake",
    role: "Hair Treatment Client",
    rating: 5,
    comment:
      "After years of heat damage, the keratin treatment at Salon Fix completely transformed my hair. It's so smooth and healthy now. The staff was very knowledgeable and caring.",
    avatar: "SR",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="gold" className="mb-4">
            <Sparkles className="w-3 h-3 mr-1" />
            Testimonials
          </Badge>
          <h2
            className="text-4xl md:text-5xl font-bold text-stone-900 mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            What Our Clients <span className="text-gradient">Say</span>
          </h2>
          <p className="text-stone-500 max-w-2xl mx-auto text-lg">
            Don&apos;t just take our word for it — hear from our happy clients who
            keep coming back for more.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border-stone-100"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-amber-200 mb-4" />

                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-stone-600 text-sm leading-relaxed mb-6">
                  &quot;{testimonial.comment}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-900 text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-stone-400">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Google Rating */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-stone-50 rounded-full px-6 py-3 border border-stone-200">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <span className="text-stone-600 font-medium">
              5.0 Rating on Google
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
