import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://shoreaquatic.com"),
  title: {
    default: "Shore Aquatic | Premium Aquatic Plants & Livestock – Fort Lauderdale, FL",
    template: "%s | Shore Aquatic",
  },
  description: "South Florida's premier source for hand-curated freshwater aquatic plants, water garden lilies, and live livestock. 1,043 species. Free 2-day shipping on orders over $100. Fort Lauderdale, FL.",
  keywords: ["aquatic plants", "freshwater plants", "water garden plants", "aquarium plants", "florida aquatic nursery", "aquarium livestock", "water lilies", "lotus plants", "Fort Lauderdale aquarium", "buy aquatic plants online", "tropical water lilies", "hardy water lilies", "marginal plants"],
  authors: [{ name: "Shore Aquatic", url: "https://shoreaquatic.com" }],
  creator: "Shore Aquatic",
  publisher: "Shore Aquatic",
  alternates: {
    canonical: "https://shoreaquatic.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shoreaquatic.com",
    siteName: "Shore Aquatic",
    title: "Shore Aquatic | Premium Aquatic Plants & Livestock",
    description: "South Florida's premier source for hand-curated freshwater aquatic plants, water garden lilies, and live livestock. 1,043 species. Free 2-day shipping over $100.",
    images: [{ url: "/logo.png", width: 283, height: 178, alt: "Shore Aquatic – Get Planted" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shore Aquatic | Premium Aquatic Plants & Livestock",
    description: "South Florida's premier aquatic plant source. 1,043 species. Free 2-day shipping over $100.",
    images: ["/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://shoreaquatic.com",
  "name": "Shore Aquatic",
  "description": "South Florida's premier source for hand-curated freshwater aquatic plants, water garden lilies, and aquarium livestock.",
  "url": "https://shoreaquatic.com",
  "logo": "https://shoreaquatic.com/logo.png",
  "image": "https://shoreaquatic.com/logo.png",
  "telephone": "+1-954-253-9275",
  "email": "shoreaquatic@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Fort Lauderdale",
    "addressRegion": "FL",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 26.1224,
    "longitude": -80.1373
  },
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Aquatic Plants & Livestock",
    "numberOfItems": 1043
  },
  "priceRange": "$$",
  "sameAs": []
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://images.squarespace-cdn.com" />
        <link rel="dns-prefetch" href="https://images.squarespace-cdn.com" />
        <link rel="preconnect" href="https://shoreaquatic-com.myshopify.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-ocean-950 text-slate-200 font-sans">
        <GoogleAnalytics />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
