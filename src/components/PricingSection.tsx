"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, Check, Crown } from "lucide-react";

const pricingCategories = [
  {
    title: "Hair Cutting",
    icon: "✂️",
    featured: false,
    services: [
      { name: "Men's Haircut", price: "Rs. 500" },
      { name: "Women's Haircut", price: "Rs. 800" },
      { name: "Children's Haircut", price: "Rs. 350" },
      { name: "Layer Cut", price: "Rs. 1,000" },
      { name: "Buzz Cut / Fade", price: "Rs. 400" },
      { name: "Fringe / Bangs Trim", price: "Rs. 250" },
    ],
  },
  {
    title: "Hair Coloring",
    icon: "🎨",
    featured: true,
    services: [
      { name: "Full Color", price: "Rs. 2,000" },
      { name: "Highlights", price: "Rs. 3,000" },
      { name: "Balayage", price: "Rs. 4,500" },
      { name: "Ombre", price: "Rs. 4,000" },
      { name: "Root Touch-up", price: "Rs. 1,500" },
      { name: "Fashion Colors", price: "Rs. 5,000" },
    ],
  },
  {
    title: "Treatments",
    icon: "💆",
    featured: false,
    services: [
      { name: "Keratin Treatment", price: "Rs. 5,000" },
      { name: "Deep Conditioning", price: "Rs. 1,500" },
      { name: "Hair Spa", price: "Rs. 2,000" },
      { name: "Protein Treatment", price: "Rs. 2,500" },
      { name: "Scalp Treatment", price: "Rs. 1,200" },
      { name: "Anti-Dandruff Treatment", price: "Rs. 1,000" },
    ],
  },
  {
    title: "Bridal Packages",
    icon: "👑",
    featured: false,
    services: [
      { name: "Bridal Makeup", price: "Rs. 15,000" },
      { name: "Bridal Hair Styling", price: "Rs. 8,000" },
      { name: "Full Bridal Package", price: "Rs. 25,000" },
      { name: "Pre-Wedding Facial", price: "Rs. 3,000" },
      { name: "Mehendi", price: "Rs. 5,000" },
      { name: "Groom Package", price: "Rs. 5,000" },
    ],
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-salon-cream">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="gold" className="mb-4">
            <Sparkles className="w-3 h-3 mr-1" />
            Pricing
          </Badge>
          <h2
            className="text-4xl md:text-5xl font-bold text-stone-900 mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Our <span className="text-gradient">Price List</span>
          </h2>
          <p className="text-stone-500 max-w-2xl mx-auto text-lg">
            Transparent pricing with no hidden charges. Premium services at
            affordable rates.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingCategories.map((category) => (
            <Card
              key={category.title}
              className={`group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden ${
                category.featured
                  ? "border-amber-400 ring-2 ring-amber-200 relative"
                  : "border-stone-200"
              }`}
            >
              {category.featured && (
                <div className="absolute top-0 right-0">
                  <div className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg flex items-center gap-1">
                    <Crown className="w-3 h-3" />
                    Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-2">{category.icon}</div>
                <CardTitle className="text-xl" style={{ fontFamily: "var(--font-serif)" }}>
                  {category.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  {category.services.map((service) => (
                    <div
                      key={service.name}
                      className="flex items-center justify-between py-2 border-b border-stone-100 last:border-0 group/item hover:bg-amber-50 -mx-2 px-2 rounded transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span className="text-sm text-stone-700">
                          {service.name}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-amber-700 whitespace-nowrap">
                        {service.price}
                      </span>
                    </div>
                  ))}
                </div>

                <a href="#booking" className="block mt-6">
                  <Button
                    variant={category.featured ? "default" : "outline"}
                    className="w-full rounded-full"
                    size="sm"
                  >
                    Book Now
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-stone-400 text-sm mt-8">
          * Prices may vary based on hair length and complexity. Contact us for a personalized quote.
        </p>
      </div>
    </section>
  );
}
