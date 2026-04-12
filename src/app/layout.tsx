import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shore Aquatic | Premium Aquatic Plants & Livestock",
  description:
    "South Florida's premier destination for hand-curated freshwater and saltwater aquatic plants, livestock, and dry goods. Quality you can trust.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-ocean-950 text-slate-200 font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
