import Link from "next/link";
import { BOGO_SALE } from "@/lib/promotions";

// Slim site-wide sale bar. Shown only while a promotion is active (toggle in
// src/lib/promotions.ts). Sits above the navbar.
export default function AnnouncementBar() {
  if (!BOGO_SALE.active) return null;
  return (
    <Link
      href={BOGO_SALE.href}
      className="block bg-gradient-to-r from-emerald-600 via-emerald-500 to-yellow-500 text-center text-white text-xs sm:text-sm font-semibold py-2 px-4 hover:opacity-95 transition-opacity"
    >
      🌿 Buy One, Get One FREE on select plants — no code needed. Shop the sale →
    </Link>
  );
}
