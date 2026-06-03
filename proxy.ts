import { NextRequest, NextResponse } from "next/server";

// Optimistic cookie-presence check for portal routes.
// The real auth verification still happens in the protected layout
// (src/app/wholesale/portal/layout.tsx) — this proxy just bounces
// obvious unauthenticated requests early to avoid rendering work.
const COOKIE_NAME = "shore_wholesale_session";

export function proxy(req: NextRequest) {
  const hasCookie = req.cookies.has(COOKIE_NAME);
  if (!hasCookie) {
    return NextResponse.redirect(new URL("/wholesale", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/wholesale/portal/:path*", "/api/wholesale/download/:path*"],
};
