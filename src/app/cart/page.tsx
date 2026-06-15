"use client";

import { useState, useEffect, useActionState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2, Plus, Minus, ShoppingBag, Lock, Mail, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { CartUtils, CartItem } from "@/lib/cart";
import { createShopifyCheckout } from "@/lib/shopifyCart";
import { submitBackorderRequest, BackorderFormState } from "@/app/actions/backorder";
import AvailabilityBadge from "@/components/AvailabilityBadge";
import Footer from "@/components/Footer";

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [mounted, setMounted] = useState(false);
  const [checkoutState, setCheckoutState] = useState<"idle" | "loading" | "error">("idle");
  const [checkoutError, setCheckoutError] = useState("");
  const [requestState, requestAction, requestPending] = useActionState<BackorderFormState, FormData>(
    submitBackorderRequest,
    {}
  );

  // Clear the cart once a backorder request is confirmed sent
  useEffect(() => {
    if (requestState.ok) {
      CartUtils.clear();
      setItems([]);
    }
  }, [requestState.ok]);

  useEffect(() => {
    setMounted(true);
    setItems(CartUtils.get());
    const onUpdate = () => setItems(CartUtils.get());
    window.addEventListener("cart-updated", onUpdate);
    return () => window.removeEventListener("cart-updated", onUpdate);
  }, []);

  const updateQty = (id: string, qty: number) => {
    CartUtils.updateQty(id, qty);
    setItems(CartUtils.get());
  };

  const removeItem = (id: string) => {
    CartUtils.remove(id);
    setItems(CartUtils.get());
  };

  const handleCheckout = async () => {
    setCheckoutState("loading");
    setCheckoutError("");
    try {
      const checkoutUrl = await createShopifyCheckout(
        items.map((i) => ({ productId: i.id, quantity: i.quantity }))
      );
      window.location.href = checkoutUrl;
    } catch (err: any) {
      setCheckoutState("error");
      setCheckoutError(err.message ?? "Something went wrong. Please try again.");
    }
  };

  if (!mounted) return null;

  const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);
  const tax = subtotal * 0.06;
  const total = subtotal + tax;
  const hasBackorder = items.some((i) => i.availability === "BACKORDER");

  return (
    <main className="pt-16">
      <section className="py-12 sm:py-16 bg-gradient-to-b from-ocean-800 to-ocean-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Your Cart
          </h1>
          <p className="mt-2 text-slate-400">
            {items.length === 0
              ? "Your cart is empty"
              : `${items.reduce((s, i) => s + i.quantity, 0)} items in your cart`}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {requestState.ok ? (
          <div className="flex items-center justify-center py-20">
            <div className="glass-strong rounded-2xl p-12 text-center max-w-lg">
              <CheckCircle2 size={48} className="mx-auto text-emerald-400 mb-4" />
              <p className="text-xl font-medium text-white">Backorder request sent</p>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                We&apos;ve received your list and will verify availability with our
                supplier. Expect a reply within 1 business day with confirmed stock
                and an invoice — <span className="text-slate-300">you won&apos;t be
                charged anything until you approve it</span>.
              </p>
              <Link
                href="/shop"
                className="mt-6 inline-block rounded-full bg-coral px-6 py-3 text-sm font-bold text-white shadow-lg shadow-coral/20 hover:bg-orange-500 transition-all cursor-pointer"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        ) : items.length === 0 ? (
          <div className="flex items-center justify-center py-20">
            <div className="glass-strong rounded-2xl p-12 text-center max-w-md">
              <ShoppingBag size={48} className="mx-auto text-slate-600 mb-4" />
              <p className="text-xl font-medium text-white">
                Your cart is empty
              </p>
              <p className="mt-2 text-sm text-slate-400">
                Browse our collection and add some items.
              </p>
              <Link
                href="/shop"
                className="mt-6 inline-block rounded-full bg-coral px-6 py-3 text-sm font-bold text-white shadow-lg shadow-coral/20 hover:bg-orange-500 transition-all cursor-pointer"
              >
                Start Shopping
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Cart items */}
            <div className="lg:col-span-2 space-y-4">
              <AnimatePresence mode="popLayout">
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="glass rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-4"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start gap-2 flex-wrap">
                        <h3 className="text-base font-semibold text-white truncate">
                          {item.name}
                        </h3>
                        <span className="shrink-0 rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium text-slate-300 uppercase tracking-wider">
                          {item.category}
                        </span>
                      </div>
                      <div className="mt-1.5 flex items-center gap-3">
                        <span className="text-sm text-aqua-400 font-medium">
                          ${item.price.toFixed(2)}
                        </span>
                        <span className="text-xs text-slate-500">each</span>
                      </div>
                      <div className="mt-2">
                        <AvailabilityBadge
                          status={
                            item.availability as
                              | "AVAILABLE"
                              | "BACKORDER"
                              | "OUT OF SEASON"
                          }
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      {/* Qty stepper */}
                      <div className="flex items-center rounded-full border border-white/10 bg-white/5">
                        <button
                          onClick={() => updateQty(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="p-2 text-slate-400 hover:text-white disabled:opacity-30 transition-colors cursor-pointer disabled:cursor-not-allowed"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-sm font-medium text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQty(item.id, item.quantity + 1)}
                          className="p-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      {/* Line total */}
                      <span className="w-20 text-right text-sm font-bold text-white">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>

                      {/* Remove */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-slate-500 hover:text-red-400 transition-colors cursor-pointer"
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Order summary */}
            <div>
              <div className="glass-strong rounded-2xl p-6 sticky top-28">
                <h2 className="text-lg font-bold text-white mb-6">
                  Order Summary
                </h2>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-slate-400">
                    <span>Subtotal</span>
                    <span className="text-white font-medium">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Florida Sales Tax (6%)</span>
                    <span className="text-white font-medium">
                      ${tax.toFixed(2)}
                    </span>
                  </div>
                  <div className="border-t border-white/10 pt-3 flex justify-between">
                    <span className="font-bold text-white">Total</span>
                    <span className="font-bold text-aqua-400 text-lg">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>

                {hasBackorder ? (
                  <form action={requestAction} className="mt-6 space-y-3">
                    <div className="rounded-xl bg-aqua-400/10 border border-aqua-400/20 p-3.5">
                      <p className="text-xs text-aqua-300 leading-relaxed">
                        <span className="font-semibold">Backorder items in cart.</span>{" "}
                        We confirm availability with our supplier before any payment —
                        submit your request and we&apos;ll reply within 1 business day
                        with confirmed stock and an invoice. Prices include FedEx
                        overnight shipping with live arrival guarantee.
                      </p>
                    </div>
                    <input type="hidden" name="items" value={JSON.stringify(items)} />
                    <input
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-aqua-400/50"
                    />
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="Email address"
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-aqua-400/50"
                    />
                    <input
                      name="phone"
                      type="tel"
                      placeholder="Phone (optional)"
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-aqua-400/50"
                    />
                    <textarea
                      name="note"
                      rows={2}
                      placeholder="Notes — sizes, color preferences, ship dates… (optional)"
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-aqua-400/50 resize-none"
                    />
                    <button
                      type="submit"
                      disabled={requestPending}
                      className="flex items-center justify-center gap-2 w-full rounded-full bg-coral py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-coral/20 hover:bg-orange-500 transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {requestPending ? (
                        <>
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                            className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Sending request…
                        </>
                      ) : (
                        <>
                          <Mail size={14} />
                          Request Availability — No Charge
                        </>
                      )}
                    </button>
                    {requestState.error && (
                      <p className="text-xs text-red-400 text-center">{requestState.error}</p>
                    )}
                    <p className="text-[11px] text-slate-500 text-center">
                      No payment is collected now. Totals shown are estimates pending
                      availability confirmation.
                    </p>
                  </form>
                ) : (
                  <>
                    <button
                      onClick={handleCheckout}
                      disabled={checkoutState === "loading"}
                      className="mt-6 flex items-center justify-center gap-2 w-full rounded-full bg-coral py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-coral/20 hover:bg-orange-500 transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {checkoutState === "loading" ? (
                        <>
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                            className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Preparing checkout…
                        </>
                      ) : (
                        <>
                          <Lock size={14} />
                          Proceed to Checkout
                        </>
                      )}
                    </button>

                    {checkoutError && (
                      <p className="mt-3 text-xs text-red-400 text-center">{checkoutError}</p>
                    )}

                    <div className="mt-4 flex items-center justify-center gap-2">
                      <Lock size={10} className="text-slate-600" />
                      <p className="text-[11px] text-slate-500">
                        Secure checkout powered by Shopify · Shop Pay accepted
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
