import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you ship live aquatic plants?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We ship live aquatic plants nationwide. All plants are carefully packed in insulated, water-retaining packaging to ensure they arrive healthy. We offer free 2-day shipping on orders over $100."
      }
    },
    {
      "@type": "Question",
      "name": "What is your live arrival guarantee?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Shore Aquatic guarantees live arrival on all plant orders. If your plants arrive in poor condition, contact us within 24 hours of delivery with a photo and we will make it right with a replacement or store credit."
      }
    },
    {
      "@type": "Question",
      "name": "How do you pack aquatic plants for shipping?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Plants are packed in sealed, moisture-retaining bags with oxygen, then placed in insulated boxes with heat or cold packs as needed depending on season and destination. Orders ship Monday–Wednesday to avoid weekend delays."
      }
    },
    {
      "@type": "Question",
      "name": "What types of aquatic plants do you sell?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We carry over 1,043 species including freshwater aquarium plants (bunch plants, Echinodorus, Anubias, Cryptocoryne, Vallisneria), water garden plants (hardy and tropical water lilies, lotus, marginal plants), and specialty tissue culture varieties. All plants are sourced from Florida Aquatic Nurseries."
      }
    },
    {
      "@type": "Question",
      "name": "Do you sell water lilies and pond plants?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We have an extensive water garden collection including hardy water lilies, tropical water lilies (day and night blooming), lotus in multiple colors, and marginal pond plants. Many are available year-round with seasonal varieties available for backorder."
      }
    },
    {
      "@type": "Question",
      "name": "Where are you located and where do you ship from?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Shore Aquatic is based in Fort Lauderdale, Florida. We source our plants directly from Florida Aquatic Nurseries and ship nationwide from South Florida. Our warm climate allows us to grow and maintain a wide variety of tropical and subtropical aquatic species."
      }
    },
    {
      "@type": "Question",
      "name": "How often is availability updated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our inventory availability is updated weekly based on current stock from our nursery supplier. Products marked Available are in stock, Backorder items have an expected arrival date, and Out of Season items will return at the next growing season."
      }
    },
    {
      "@type": "Question",
      "name": "What payment methods do you accept?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We accept all major credit cards, Shop Pay, Apple Pay, and Google Pay through our secure Shopify checkout."
      }
    }
  ]
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-ocean-950 text-slate-200 font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
