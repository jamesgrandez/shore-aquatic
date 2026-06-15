"use server";

// Backorder availability requests.
//
// BACKORDER livestock is never charged at checkout. Instead the customer
// submits this request; we verify availability with the supplier and reply
// with an invoice. Email delivery uses the Resend REST API — set
// RESEND_API_KEY and (optionally) BACKORDER_NOTIFY_EMAIL in the environment.
// Env vars are read lazily at request time so missing config can never break
// the build (same pattern as wholesale SESSION_SECRET).

export interface BackorderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface BackorderFormState {
  ok?: boolean;
  error?: string;
}

const MAX_ITEMS = 60;

export async function submitBackorderRequest(
  _prev: BackorderFormState,
  formData: FormData
): Promise<BackorderFormState> {
  const name = (formData.get("name") as string | null)?.trim() ?? "";
  const email = (formData.get("email") as string | null)?.trim() ?? "";
  const phone = (formData.get("phone") as string | null)?.trim() ?? "";
  const note = (formData.get("note") as string | null)?.trim() ?? "";
  const itemsRaw = (formData.get("items") as string | null) ?? "[]";

  if (!name || !email) {
    return { error: "Name and email are required so we can reach you." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Please enter a valid email address." };
  }

  let items: BackorderItem[];
  try {
    items = JSON.parse(itemsRaw);
    if (!Array.isArray(items) || items.length === 0) throw new Error();
    items = items.slice(0, MAX_ITEMS).map((i) => ({
      id: String(i.id).slice(0, 80),
      name: String(i.name).slice(0, 120),
      price: Number(i.price) || 0,
      quantity: Math.max(1, Math.min(99, Number(i.quantity) || 1)),
    }));
  } catch {
    return { error: "Your cart could not be read. Please refresh and try again." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.BACKORDER_NOTIFY_EMAIL || "shoreaquatic@gmail.com";
  // Resend's shared onboarding sender works without domain verification but can
  // only deliver to the account owner's address. Once shoreaquatic.com is
  // verified at resend.com/domains, set BACKORDER_FROM_EMAIL to
  // "backorders@shoreaquatic.com" to send from the brand domain.
  const fromEmail =
    process.env.BACKORDER_FROM_EMAIL || "Shore Aquatic Backorders <onboarding@resend.dev>";

  const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);
  const lines = items
    .map((i) => `  • ${i.quantity}x ${i.name} (${i.id}) — $${(i.price * i.quantity).toFixed(2)}`)
    .join("\n");
  const body = [
    "New BACKORDER availability request from shoreaquatic.com",
    "",
    `Customer: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    "",
    "Requested items:",
    lines,
    "",
    `Estimated subtotal: $${subtotal.toFixed(2)} (overnight shipping included in pricing)`,
    note ? `\nCustomer note:\n${note}` : null,
    "",
    "Next step: verify availability with the supplier, then reply to the",
    "customer with confirmed stock and an invoice. Do not charge before",
    "confirmation.",
  ]
    .filter((l) => l !== null)
    .join("\n");

  if (!apiKey) {
    // No email transport configured — fail loudly rather than dropping requests.
    console.error("[backorder] RESEND_API_KEY missing; request NOT delivered:", { name, email, items });
    return {
      error:
        "Our request system is temporarily offline. Please email your list to " +
        "sales@shoreaquatic.com and we'll confirm availability within 1 business day.",
    };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [notifyEmail],
      reply_to: email,
      subject: `Backorder request — ${name} — ${items.length} item${items.length === 1 ? "" : "s"} ($${subtotal.toFixed(2)})`,
      text: body,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("[backorder] Resend API error:", res.status, detail);
    return {
      error:
        "We couldn't submit your request just now. Please try again, or email " +
        "sales@shoreaquatic.com directly.",
    };
  }

  return { ok: true };
}
