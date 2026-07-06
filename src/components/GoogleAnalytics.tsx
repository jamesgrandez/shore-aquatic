"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

// Set NEXT_PUBLIC_GA_MEASUREMENT_ID (e.g. "G-XXXXXXXXXX") in Vercel env to enable.
// Use the SAME Measurement ID as the GA4 web data stream so the catalog site and
// Shopify checkout report into one property (fixes the Direct/Unassigned bloat).
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

// App-Router SPA navigations don't reload the page, so we send a page_view on
// each route change ourselves.
function RouteChangeTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    if (!GA_ID || typeof window.gtag !== "function") return;
    const qs = searchParams?.toString();
    const url = pathname + (qs ? `?${qs}` : "");
    window.gtag("event", "page_view", {
      page_path: url,
      page_location: window.location.origin + url,
    });
  }, [pathname, searchParams]);
  return null;
}

export default function GoogleAnalytics() {
  if (!GA_ID) return null;
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { send_page_view: true });
        `}
      </Script>
      <Suspense fallback={null}>
        <RouteChangeTracker />
      </Suspense>
    </>
  );
}
