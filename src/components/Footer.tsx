import Link from "next/link";

const shopLinks = [
  { href: "/shop?category=Plants", label: "Plants" },
  { href: "/shop?category=Water Garden", label: "Water Garden" },
  { href: "/shop?category=Saltwater", label: "Saltwater" },
  { href: "/shop?category=Livestock", label: "Livestock" },
  { href: "/shop?category=Dry Goods", label: "Dry Goods" },
];

const infoLinks = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/care-guides", label: "Care Guides" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
  { href: "/image-credits", label: "Photo Credits" },
];

export default function Footer() {
  return (
    <footer className="bg-ocean-950 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo + Tagline */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <svg
                width="28"
                height="28"
                viewBox="0 0 32 32"
                fill="none"
                aria-hidden
              >
                <defs>
                  <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="32" y2="32">
                    <stop stopColor="#67E8F9" />
                    <stop offset="1" stopColor="#06B6D4" />
                  </linearGradient>
                </defs>
                <path
                  d="M4 18 C8 12,14 12,16 16 C18 20,24 20,28 14"
                  stroke="url(#footerLogoGrad)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M4 22 C8 16,14 16,16 20 C18 24,24 24,28 18"
                  stroke="url(#footerLogoGrad)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.5"
                />
              </svg>
              <div className="flex items-baseline gap-1">
                <span className="text-base font-bold text-white">Shore</span>
                <span className="text-base font-light text-aqua-400">
                  Aquatic
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-slate-500 leading-relaxed">
              South Florida&apos;s premium destination for aquatic plants,
              livestock, and equipment. Quality you can trust.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Shop
            </h3>
            <ul className="mt-4 space-y-2.5">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-aqua-400 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Info
            </h3>
            <ul className="mt-4 space-y-2.5">
              {infoLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-aqua-400 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Legal
            </h3>
            <ul className="mt-4 space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-aqua-400 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            Fort Lauderdale, FL
          </p>
          <p className="text-xs text-slate-600">
            &copy; 2026 Shore Aquatic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
