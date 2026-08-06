"use client";

import { Badge } from "@/components/ui/badge";
import { Sparkles, ZoomIn } from "lucide-react";
import { useState } from "react";

const galleryImages = [
  {
    src: "https://images.pexels.com/photos/7195803/pexels-photo-7195803.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
    alt: "Modern Salon Interior",
    category: "Interior",
  },
  {
    src: "https://images.pexels.com/photos/7195799/pexels-photo-7195799.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
    alt: "Backwash Station",
    category: "Interior",
  },
  {
    src: "https://images.pexels.com/photos/37533244/pexels-photo-37533244.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
    alt: "Professional Haircut",
    category: "Haircut",
  },
  {
    src: "https://images.pexels.com/photos/7750124/pexels-photo-7750124.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
    alt: "Elegant Styling Area",
    category: "Interior",
  },
  {
    src: "https://images.pexels.com/photos/13138585/pexels-photo-13138585.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
    alt: "Barber at Work",
    category: "Haircut",
  },
  {
    src: "https://images.pexels.com/photos/3993451/pexels-photo-3993451.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
    alt: "Hair Treatment",
    category: "Treatment",
  },
  {
    src: "https://images.pexels.com/photos/7195812/pexels-photo-7195812.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
    alt: "Salon Products",
    category: "Interior",
  },
  {
    src: "https://images.pexels.com/photos/7697712/pexels-photo-7697712.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
    alt: "Professional Tools",
    category: "Tools",
  },
];

const categories = ["All", "Interior", "Haircut", "Treatment", "Tools"];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-stone-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="gold" className="mb-4">
            <Sparkles className="w-3 h-3 mr-1" />
            Gallery
          </Badge>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Our <span className="text-gradient">Work</span>
          </h2>
          <p className="text-stone-400 max-w-2xl mx-auto text-lg">
            Take a look at our salon, our team in action, and the stunning
            transformations we create every day.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-amber-600 text-white shadow-lg shadow-amber-600/30"
                  : "bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={image.alt}
              className={`relative rounded-xl overflow-hidden cursor-pointer group ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover transition-all duration-700 group-hover:scale-110 ${
                  index === 0 ? "h-full min-h-[300px] md:min-h-[500px]" : "h-48 md:h-56"
                }`}
              />
              <div
                className={`absolute inset-0 bg-black/60 flex flex-col items-center justify-center transition-all duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <ZoomIn className="w-8 h-8 text-white mb-2" />
                <span className="text-white font-medium text-sm">
                  {image.alt}
                </span>
                <span className="text-amber-400 text-xs mt-1">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
