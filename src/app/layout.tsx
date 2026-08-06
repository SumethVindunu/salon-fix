import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Salon Fix | Premium Hair & Beauty Salon in Matara",
  description:
    "Salon Fix - Your premium hair and beauty destination at 98 Elawella Rd, Matara 81000. Expert styling, cutting, coloring, and beauty treatments. Book your appointment today!",
  keywords: "salon, hair salon, beauty salon, matara, sri lanka, haircut, styling, coloring",
  openGraph: {
    title: "Salon Fix | Premium Hair & Beauty Salon in Matara",
    description: "Your premium hair and beauty destination in Matara. Expert styling, cutting, coloring, and beauty treatments.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-stone-900 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
