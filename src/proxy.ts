import { NextRequest, NextResponse } from "next/server";
import legacyProducts from "@/lib/legacyProductRedirects.json";

// Optimistic cookie-presence check for portal routes.
// The real auth verification still happens in the protected layout
// (src/app/wholesale/portal/layout.tsx) — this proxy just bounces
// obvious unauthenticated requests early to avoid rendering work.
const COOKIE_NAME = "shore_wholesale_session";

// Old Shopify product handle → site product id. Generated from the Shopify
// catalog by matching handle/title (see legacyProductRedirects.json).
const LEGACY_PRODUCTS = legacyProducts as Record<string, string>;

const CANONICAL_ORIGIN = "https://shoreaquatic.com";

function gone(): NextResponse {
  return new NextResponse(
    "<!doctype html><title>410 Gone</title><p>This page has been permanently removed. " +
      '<a href="https://shoreaquatic.com/shop">Browse the shop</a>.</p>',
    { status: 410, headers: { "content-type": "text/html; charset=utf-8", "x-robots-tag": "noindex" } }
  );
}

/** Redirect to the canonical host in production, same origin elsewhere (local/preview). */
function permanent(req: NextRequest, path: string): NextResponse {
  const host = (req.headers.get("x-forwarded-host") ?? req.headers.get("host") ?? "").split(":")[0];
  const onProdHost = host.endsWith("shoreaquatic.com");
  const url = new URL(path, onProdHost ? CANONICAL_ORIGIN : req.nextUrl.origin);
  return NextResponse.redirect(url, 308);
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Legacy Shopify product URLs: exact product, or 410 when it no longer exists.
  if (pathname.startsWith("/products/")) {
    const handle = decodeURIComponent(pathname.slice("/products/".length)).replace(/\/+$/, "").toLowerCase();
    const id = LEGACY_PRODUCTS[handle];
    return id ? permanent(req, `/shop/${id}`) : gone();
  }

  // Shopify's Shop Pay login leftovers (/services/login_with_shop/authorize?…).
  if (pathname.startsWith("/services/") || pathname === "/services") {
    return gone();
  }

  // Wholesale portal gate.
  if (!req.cookies.has(COOKIE_NAME)) {
    return NextResponse.redirect(new URL("/wholesale", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/wholesale/portal/:path*",
    "/api/wholesale/download/:path*",
    "/products/:path*",
    "/services/:path*",
  ],
};
