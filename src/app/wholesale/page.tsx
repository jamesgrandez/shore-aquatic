import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Link from "next/link";
import { getCurrentSession } from "@/lib/wholesale-session";
import WholesaleLoginForm from "./WholesaleLoginForm";

export const metadata: Metadata = {
  title: "Wholesale Portal Login | Shore Aquatic",
  description:
    "Sign in to the Shore Aquatic wholesale portal to access our B2B price list, catalog, and account tools.",
  robots: { index: false, follow: false },  // don't index the login page
};

export default async function WholesaleLoginPage() {
  // If already logged in, jump straight to the portal
  const session = await getCurrentSession();
  if (session) redirect("/wholesale/portal");

  return (
    <main className="pt-16 min-h-screen bg-ocean-950 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Brand mark */}
        <div className="mb-8 text-center">
          <Link href="/" className="text-sm text-slate-500 hover:text-aqua-400 transition-colors">
            ← back to shoreaquatic.com
          </Link>
          <h1 className="mt-4 text-3xl font-bold text-white">Wholesale Portal</h1>
          <p className="mt-2 text-sm text-slate-400">
            Sign in to access our B2B price list and catalog.
          </p>
        </div>

        {/* Login card */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur p-6 shadow-xl shadow-black/20">
          <WholesaleLoginForm />
        </div>

        {/* Bottom helper */}
        <div className="mt-6 text-center text-xs text-slate-500">
          <p>
            Need an account?{" "}
            <a
              href="mailto:shoreaquatic@gmail.com?subject=Wholesale%20Account%20Request"
              className="text-aqua-400 hover:text-aqua-300"
            >
              Email us to apply
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
