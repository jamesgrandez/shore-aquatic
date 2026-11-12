/** FAQ content, shared by /faq and /shipping-returns. */
export type FaqItem = { q: string; a: string };
export type FaqSection = { title: string; items: FaqItem[] };

export const faqSections: FaqSection[] = [
  {
    title: "Shipping & Delivery",
    items: [
      {
        q: "Do you ship live aquatic plants?",
        a: "Yes — we ship live aquatic plants nationwide from Fort Lauderdale, Florida. Every order is hand-packed in insulated, moisture-retaining packaging so plants arrive healthy and hydrated.",
      },
      {
        q: "How fast is shipping?",
        a: "Orders placed by 12pm ET typically ship within 1 business day. We offer free 2-day shipping on orders over $100. Faster options are available at checkout.",
      },
      {
        q: "When do orders ship?",
        a: "We ship Monday through Wednesday to avoid plants sitting in warehouses over the weekend. Orders placed Thursday through Sunday ship the following Monday.",
      },
      {
        q: "How do you pack aquatic plants for shipping?",
        a: "Plants are wrapped in moisture-retaining media, sealed in poly bags, and placed in insulated boxes with heat packs (cold months) or cool packs (hot months) based on your destination's weather forecast at the time of shipping.",
      },
      {
        q: "Do you ship internationally?",
        a: "Not at this time. We currently ship within the continental United States only. Aquatic plants are tightly regulated at international borders and we focus on ensuring the best possible experience for domestic customers.",
      },
      {
        q: "Do you offer free shipping?",
        a: "Yes — every order over $100 ships free via 2-day delivery within the continental US.",
      },
    ],
  },
  {
    title: "Live Arrival Guarantee & Returns",
    items: [
      {
        q: "What is your live arrival guarantee?",
        a: "Every plant order is covered by our Live Arrival Guarantee. If any plant arrives damaged or in poor condition, contact us within 24 hours of delivery with a photo and we'll issue a replacement or store credit — no questions asked.",
      },
      {
        q: "What counts as 'damaged on arrival'?",
        a: "Mushy, fully melted, or broken-apart plants are covered. Normal transit stress — slightly yellowed leaves, a few bruised stems, or a plant that looks travel-tired — is not considered damage. Most aquatic plants bounce back within 1–2 weeks once planted and acclimated.",
      },
      {
        q: "My plant is melting — is that normal?",
        a: "Yes, 'melting' is a common and temporary response when aquatic plants are moved between environments (emersed-to-submersed, different lighting, different water chemistry). Trim damaged leaves and leave the rhizome or crown intact — new growth usually appears within 2–3 weeks.",
      },
      {
        q: "Can I return plants if I change my mind?",
        a: "Because aquatic plants are perishable and livestock are living animals, we cannot accept returns for buyer's remorse. If something is wrong with your order, please reach out — we'll work with you to make it right.",
      },
    ],
  },
  {
    title: "Plants & Care",
    items: [
      {
        q: "What types of aquatic plants do you sell?",
        a: "Over 1,043 species across three categories: freshwater aquarium plants (Anubias, Cryptocoryne, Echinodorus, Vallisneria, bunch plants, tissue culture, and more), water garden plants (hardy and tropical water lilies, lotus, marginal pond plants), and specialty varieties sourced from Florida Aquatic Nurseries.",
      },
      {
        q: "Do you sell water lilies and pond plants?",
        a: "Yes — our water garden collection includes hardy water lilies, tropical water lilies (day-blooming and night-blooming), lotus in multiple colors, and a wide variety of marginal and bog plants. Many are available year-round, with seasonal varieties on backorder during their off-season.",
      },
      {
        q: "Are your plants grown here or imported?",
        a: "All plants are sourced directly from Florida Aquatic Nurseries, one of the largest and oldest aquatic plant growers in North America. Plants are grown in Florida — not imported — which means they acclimate quickly to home tanks and are free of the pests common to overseas shipments.",
      },
      {
        q: "Do you sell tissue culture plants?",
        a: "Yes. Tissue culture (TC) plants arrive in sterile sealed cups — pest-free, algae-free, and snail-free. They're ideal for quarantine tanks, shrimp tanks, and fresh scapes. Look for the TC label on product pages.",
      },
      {
        q: "How do I prepare new plants for my aquarium?",
        a: "Rinse plants under cool dechlorinated water to remove any shipping media. Trim any damaged leaves. For rhizome plants (Anubias, Java Fern, Bucephalandra), attach to hardscape rather than burying the rhizome. For stem plants, plant individually an inch apart. Full care guides for 162+ species are available on our Care Guides page.",
      },
      {
        q: "Can you help me choose plants for my setup?",
        a: "Absolutely — email us at shoreaquatic@gmail.com or call (954) 253-9275 with your tank size, lighting, CO2 availability, and fish/shrimp stocking, and we'll recommend a plant list suited to your setup.",
      },
    ],
  },
  {
    title: "Orders, Availability & Payment",
    items: [
      {
        q: "How often is availability updated?",
        a: "Inventory is updated weekly from our nursery supplier. 'Available' means in stock. 'Backorder' means the plant has an expected arrival date — usually within 2–4 weeks. 'Out of Season' plants will return during their next growing season.",
      },
      {
        q: "What does 'Backorder' mean?",
        a: "Backorder items are currently out of stock but confirmed to be restocked on a near-term schedule. You can place an order for backorder items — we'll hold the order and ship everything together once the backordered plant arrives, or ship in-stock items first if you prefer.",
      },
      {
        q: "What payment methods do you accept?",
        a: "All major credit and debit cards, Shop Pay, Apple Pay, and Google Pay — all processed securely through Shopify at checkout. We do not store card data on our site.",
      },
      {
        q: "Can I modify or cancel my order after placing it?",
        a: "If your order hasn't shipped, yes — contact us ASAP at shoreaquatic@gmail.com with your order number. Once a package is handed to the carrier, changes are no longer possible.",
      },
    ],
  },
  {
    title: "Location & Contact",
    items: [
      {
        q: "Where are you located and where do you ship from?",
        a: "Shore Aquatic is based in Fort Lauderdale, Florida. All plants ship from South Florida, which means fast transit times to the entire Eastern and Central US and consistently warm conditions for our tropical varieties.",
      },
      {
        q: "Do you have a physical store?",
        a: "We operate as an online-first retailer and do not currently have a walk-in storefront. All orders are placed through the website and shipped directly to you.",
      },
      {
        q: "How can I contact you?",
        a: "Email shoreaquatic@gmail.com or call (954) 253-9275. We respond to emails within one business day. For pre-order care questions, the quickest route is usually email with photos of your tank attached.",
      },
    ],
  },
];
