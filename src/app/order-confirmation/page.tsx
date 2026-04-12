"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";

const steps = [
  { label: "Order Submitted", completed: true },
  { label: "Under Review", active: true },
  { label: "Approved", completed: false },
  { label: "Shipped", completed: false },
];

function OrderConfirmationContent() {
  const params = useSearchParams();
  const orderId = params.get("id") || "UNKNOWN";

  return (
    <main className="pt-16">
      <div className="min-h-[70vh] flex items-center justify-center py-20">
        <div className="mx-auto max-w-lg px-4 text-center">
          {/* Animated checkmark */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
            className="mx-auto mb-8"
          >
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              className="mx-auto"
            >
              <motion.circle
                cx="40"
                cy="40"
                r="36"
                stroke="#22D3EE"
                strokeWidth="3"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              />
              <motion.path
                d="M24 42 L34 52 L56 30"
                stroke="#22D3EE"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.4, delay: 0.8, ease: "easeOut" }}
              />
            </svg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Order Request Received
            </h1>

            <div className="mt-6 glass-strong rounded-xl p-4 inline-block">
              <p className="text-xs text-slate-500 uppercase tracking-wider">
                Order ID
              </p>
              <p className="text-lg font-mono font-bold text-aqua-400 mt-0.5">
                #{orderId}
              </p>
            </div>
          </motion.div>

          {/* Status card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-8 glass rounded-2xl p-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 mb-4">
              <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
                Pending Review
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Shore Aquatic is reviewing your order and live inventory. You will
              receive an email when your order is approved and shipped. Your card
              will only be charged upon approval.
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-8"
          >
            <div className="flex items-center justify-between relative px-4">
              {/* Background line */}
              <div className="absolute top-3 left-[12%] right-[12%] h-0.5 bg-white/10" />

              {steps.map((step, i) => (
                <div key={step.label} className="relative flex flex-col items-center z-10">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      step.completed
                        ? "bg-aqua-400 border-aqua-400"
                        : step.active
                        ? "bg-amber-400/20 border-amber-400 animate-pulse"
                        : "bg-ocean-800 border-white/20"
                    }`}
                  >
                    {step.completed && (
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M3 6.5 L5 8.5 L9 4"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                    {step.active && (
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                    )}
                  </div>
                  <span
                    className={`mt-2 text-[10px] sm:text-xs font-medium ${
                      step.completed
                        ? "text-aqua-400"
                        : step.active
                        ? "text-amber-300"
                        : "text-slate-600"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="mt-10"
          >
            <Link
              href="/shop"
              className="inline-block rounded-full bg-coral px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-coral/20 hover:bg-orange-500 transition-all cursor-pointer"
            >
              Continue Shopping
            </Link>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

export default function OrderConfirmationPage() {
  return (
    <Suspense
      fallback={
        <main className="pt-16">
          <div className="min-h-[70vh] flex items-center justify-center">
            <div className="text-slate-500">Loading...</div>
          </div>
        </main>
      }
    >
      <OrderConfirmationContent />
    </Suspense>
  );
}
