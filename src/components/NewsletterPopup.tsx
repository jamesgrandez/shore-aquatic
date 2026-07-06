"use client";

import { useActionState, useEffect, useState } from "react";
import { X, Leaf, CheckCircle2 } from "lucide-react";
import { subscribeNewsletter, NewsletterState } from "@/app/actions/newsletter";

const STORAGE_KEY = "shore_newsletter_seen";

export default function NewsletterPopup() {
  const [open, setOpen] = useState(false);
  const [state, action, pending] = useActionState<NewsletterState, FormData>(
    subscribeNewsletter,
    {}
  );

  // Show once per visitor: after 18s, or on exit-intent (mouse leaves top).
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(STORAGE_KEY)) return;

    let done = false;
    const trigger = () => {
      if (done) return;
      done = true;
      setOpen(true);
      cleanup();
    };
    const timer = window.setTimeout(trigger, 18000);
    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) trigger();
    };
    document.addEventListener("mouseleave", onLeave);
    function cleanup() {
      window.clearTimeout(timer);
      document.removeEventListener("mouseleave", onLeave);
    }
    return cleanup;
  }, []);

  // Persist dismissal / success so it never nags again.
  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, "1");
    setOpen(false);
  };
  useEffect(() => {
    if (state.ok) localStorage.setItem(STORAGE_KEY, "1");
  }, [state.ok]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={dismiss} />

      <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-gradient-to-b from-ocean-800 to-ocean-950 p-8 shadow-2xl">
        <button
          onClick={dismiss}
          aria-label="Close"
          className="absolute right-4 top-4 text-slate-500 hover:text-white transition-colors"
        >
          <X size={18} />
        </button>

        {state.ok ? (
          <div className="text-center py-4">
            <CheckCircle2 size={44} className="mx-auto text-emerald-400 mb-4" />
            <h2 className="text-2xl font-bold text-white">You&apos;re in! 🌱</h2>
            <p className="mt-2 text-sm text-slate-400">Here&apos;s your welcome code — use it at checkout:</p>
            <div className="mt-4 inline-block rounded-xl border border-aqua-400/30 bg-aqua-400/10 px-6 py-3">
              <span className="text-xl font-bold tracking-widest text-aqua-300">{state.code}</span>
            </div>
            <p className="mt-4 text-xs text-slate-500">10% off your first order. Check your inbox for our latest arrivals.</p>
            <button
              onClick={dismiss}
              className="mt-6 rounded-full bg-coral px-6 py-2.5 text-sm font-bold text-white hover:bg-orange-500 transition-colors"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2 text-emerald-300 mb-3">
              <Leaf size={16} />
              <span className="text-xs font-semibold uppercase tracking-widest">Shore Aquatic</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              Get <span className="text-aqua-300">10% Off</span> Your First Order
            </h2>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Join our list for care tips, new arrivals, and subscriber-only deals on
              plants, coral &amp; saltwater livestock.
            </p>

            <form action={action} className="mt-5 space-y-3">
              <input type="hidden" name="source" value="site-popup" />
              <input
                name="email"
                type="email"
                required
                placeholder="you@email.com"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-aqua-400/50"
              />
              <button
                type="submit"
                disabled={pending}
                className="w-full rounded-xl bg-coral px-6 py-3 text-sm font-bold text-white hover:bg-orange-500 transition-colors disabled:opacity-70"
              >
                {pending ? "Signing you up…" : "Send My 10% Code"}
              </button>
              {state.error && <p className="text-xs text-red-400 text-center">{state.error}</p>}
            </form>

            <button onClick={dismiss} className="mt-3 w-full text-center text-xs text-slate-500 hover:text-slate-300">
              No thanks, maybe later
            </button>
            <p className="mt-3 text-[11px] text-slate-600 text-center leading-relaxed">
              By subscribing you agree to receive marketing emails. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
