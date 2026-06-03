import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import Link from "next/link";
import { getCurrentSession } from "@/lib/wholesale-session";
import { logoutAction } from "@/app/actions/wholesale-auth";

export default async function WholesalePortalLayout({ children }: { children: ReactNode }) {
  // Server-side auth check — redirects to login if no valid session.
  const session = await getCurrentSession();
  if (!session) {
    redirect("/wholesale");
  }

  return (
    <main className="pt-16 min-h-screen bg-ocean-950">
      {/* Portal-specific top bar */}
      <div className="border-b border-white/5 bg-ocean-900/40 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4 flex-wrap">
          <nav className="flex items-center gap-4 text-sm">
            <Link href="/wholesale/portal" className="font-bold text-white hover:text-aqua-400 transition-colors">
              Wholesale Portal
            </Link>
            <span className="text-slate-700">|</span>
            <Link href="/wholesale/portal/catalog" className="text-slate-400 hover:text-white transition-colors">
              Catalog
            </Link>
            <Link href="/wholesale/portal#download" className="text-slate-400 hover:text-white transition-colors">
              Downloads
            </Link>
          </nav>

          <div className="flex items-center gap-4 text-xs">
            <span className="text-slate-500">
              Signed in as{" "}
              <span className="text-aqua-300 font-medium">{session.company}</span>
            </span>
            <form action={logoutAction}>
              <button
                type="submit"
                className="rounded-full border border-white/10 px-3 py-1 text-slate-300 hover:border-white/20 hover:text-white transition-colors cursor-pointer"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      </div>

      {children}
    </main>
  );
}
