"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Checkout is now handled by Shopify's hosted checkout.
 * Customers are redirected there directly from the cart page.
 * This route redirects back to cart if someone navigates here directly.
 */
export default function CheckoutPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/cart");
  }, [router]);
  return null;
}
