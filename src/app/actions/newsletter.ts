"use server";

// Newsletter / email-capture signups from the site pop-up.
// Emails the new subscriber to the store (via Resend) so they can be added to
// Shopify as a consented subscriber. Env is read lazily so a missing key can't
// break the build (same pattern as the backorder + wholesale flows).

export interface NewsletterState {
  ok?: boolean;
  error?: string;
  code?: string;
}

const WELCOME_CODE = "WELCOME10";

export async function subscribeNewsletter(
  _prev: NewsletterState,
  formData: FormData
): Promise<NewsletterState> {
  const email = (formData.get("email") as string | null)?.trim().toLowerCase() ?? "";
  const source = (formData.get("source") as string | null)?.slice(0, 60) ?? "site-popup";

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Please enter a valid email address." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.BACKORDER_NOTIFY_EMAIL || "shoreaquatic@gmail.com";
  const fromEmail =
    process.env.BACKORDER_FROM_EMAIL || "Shore Aquatic <onboarding@resend.dev>";

  if (!apiKey) {
    console.error("[newsletter] RESEND_API_KEY missing; signup NOT delivered:", email);
    // Still reward the visitor — we don't want to lose the signup UX; the code
    // works regardless, and the owner can reconcile later.
    return { ok: true, code: WELCOME_CODE };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: fromEmail,
      to: [notifyEmail],
      reply_to: email,
      subject: `New email subscriber: ${email}`,
      text:
        `New newsletter signup from shoreaquatic.com\n\n` +
        `Email: ${email}\n` +
        `Source: ${source}\n` +
        `Consent: opted in via site email-capture pop-up (10% off offer)\n\n` +
        `Add this address to your Shopify customers with "Accepts email marketing = yes".`,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("[newsletter] Resend error:", res.status, detail);
    // Don't punish the visitor for our delivery hiccup — still give the code.
    return { ok: true, code: WELCOME_CODE };
  }

  return { ok: true, code: WELCOME_CODE };
}
