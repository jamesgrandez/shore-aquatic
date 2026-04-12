"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Lock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CartUtils, CartItem } from "@/lib/cart";
import Footer from "@/components/Footer";

// BACKEND: POST /api/orders — creates Stripe PaymentIntent with capture_method: 'manual'

export default function CheckoutPage() {
  const router = useRouter();
  const [items, setItems] = useState<CartItem[]>([]);
  const [mounted, setMounted] = useState(false);
  const [formState, setFormState] = useState<"idle" | "submitting" | "submitted">("idle");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "FL",
    zip: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
    cardName: "",
  });

  useEffect(() => {
    setMounted(true);
    setItems(CartUtils.get());
  }, []);

  if (!mounted) return null;

  const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);
  const tax = subtotal * 0.06;
  const total = subtotal + tax;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    // BACKEND: This would POST to /api/orders with form data + cart items
    // Creating a Stripe PaymentIntent with capture_method: 'manual'
    setTimeout(() => {
      const orderId = crypto.randomUUID().split("-")[0].toUpperCase();
      CartUtils.clear();
      router.push(`/order-confirmation?id=${orderId}`);
    }, 2000);
  };

  if (items.length === 0 && formState === "idle") {
    return (
      <main className="pt-16">
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="glass-strong rounded-2xl p-10 text-center max-w-md">
            <p className="text-lg font-medium text-white">Nothing to check out</p>
            <p className="mt-2 text-sm text-slate-400">
              Add items to your cart first.
            </p>
            <Link
              href="/shop"
              className="mt-6 inline-block rounded-full bg-coral px-6 py-3 text-sm font-bold text-white hover:bg-orange-500 transition-all cursor-pointer"
            >
              Browse the Catalog
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="pt-16">
      <section className="py-10 sm:py-14 bg-gradient-to-b from-ocean-800 to-ocean-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/cart"
            className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors mb-4 cursor-pointer"
          >
            <ArrowLeft size={14} />
            Back to Cart
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Checkout
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact */}
              <div className="glass rounded-2xl p-6">
                <h2 className="text-lg font-bold text-white mb-5">
                  Contact Information
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input
                    label="Full Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                  <Input
                    label="Phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="(954) 555-0123"
                    className="sm:col-span-2"
                  />
                </div>
              </div>

              {/* Shipping */}
              <div className="glass rounded-2xl p-6">
                <h2 className="text-lg font-bold text-white mb-5">
                  Shipping Address
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input
                    label="Address"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    required
                    placeholder="123 Ocean Drive"
                    className="sm:col-span-2"
                  />
                  <Input
                    label="City"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    required
                    placeholder="Fort Lauderdale"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      label="State"
                      name="state"
                      value={form.state}
                      onChange={handleChange}
                      required
                      placeholder="FL"
                    />
                    <Input
                      label="ZIP Code"
                      name="zip"
                      value={form.zip}
                      onChange={handleChange}
                      required
                      placeholder="33311"
                    />
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div className="glass rounded-2xl p-6">
                <h2 className="text-lg font-bold text-white mb-4">
                  Payment Details
                </h2>

                <div className="rounded-xl border border-aqua-400/20 bg-aqua-400/5 p-4 mb-6">
                  <div className="flex items-start gap-2.5">
                    <Lock size={16} className="mt-0.5 text-aqua-400 shrink-0" />
                    <div className="text-sm">
                      <p className="font-semibold text-aqua-300">
                        Secure Authorization Only
                      </p>
                      <p className="mt-1 text-slate-400 leading-relaxed">
                        Your card will be authorized (not charged) when you
                        submit. Shore Aquatic will review your order and
                        available inventory. Your card is only charged after we
                        confirm shipment.
                      </p>
                    </div>
                  </div>
                </div>

                {/* BACKEND: Replace these inputs with Stripe Elements */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input
                    label="Card Number"
                    name="cardNumber"
                    value={form.cardNumber}
                    onChange={handleChange}
                    required
                    placeholder="4242 4242 4242 4242"
                    className="sm:col-span-2"
                    hint="[Backend: Stripe Elements]"
                  />
                  <Input
                    label="Expiry"
                    name="cardExpiry"
                    value={form.cardExpiry}
                    onChange={handleChange}
                    required
                    placeholder="MM / YY"
                  />
                  <Input
                    label="CVC"
                    name="cardCvc"
                    value={form.cardCvc}
                    onChange={handleChange}
                    required
                    placeholder="123"
                  />
                  <Input
                    label="Name on Card"
                    name="cardName"
                    value={form.cardName}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="sm:col-span-2"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={formState === "submitting"}
                className="w-full rounded-full bg-coral py-4 text-base font-bold text-white shadow-lg shadow-coral/20 hover:bg-orange-500 transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {formState === "submitting" ? (
                  <span className="inline-flex items-center gap-2">
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{
                        repeat: Infinity,
                        duration: 1,
                        ease: "linear",
                      }}
                      className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Processing...
                  </span>
                ) : (
                  "Submit Order Request"
                )}
              </button>
            </div>

            {/* Order summary sidebar */}
            <div>
              <div className="glass-strong rounded-2xl p-6 sticky top-28">
                <h2 className="text-lg font-bold text-white mb-4">
                  Order Summary
                </h2>

                <div className="space-y-3 mb-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between text-sm"
                    >
                      <span className="text-slate-400 truncate mr-2">
                        {item.name}{" "}
                        <span className="text-slate-600">x{item.quantity}</span>
                      </span>
                      <span className="text-white font-medium shrink-0">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/10 pt-3 space-y-2 text-sm">
                  <div className="flex justify-between text-slate-400">
                    <span>Subtotal</span>
                    <span className="text-white">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Tax (6%)</span>
                    <span className="text-white">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-white/10">
                    <span className="font-bold text-white">Total</span>
                    <span className="font-bold text-aqua-400 text-lg">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </main>
  );
}

/* ── Reusable input component ── */
function Input({
  label,
  name,
  type = "text",
  value,
  onChange,
  required,
  placeholder,
  className = "",
  hint,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
  className?: string;
  hint?: string;
}) {
  return (
    <div className={className}>
      <label className="block text-xs font-medium text-slate-400 mb-1.5">
        {label}
        {hint && (
          <span className="ml-2 text-[10px] text-slate-600">{hint}</span>
        )}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-slate-600 outline-none focus:border-aqua-400/50 focus:ring-1 focus:ring-aqua-400/20 transition-all"
      />
    </div>
  );
}
