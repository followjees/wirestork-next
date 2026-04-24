// app/api/checkout/route.ts
import { NextRequest, NextResponse } from "next/server";

// ── Email helpers ─────────────────────────────────────────────────────────────

function parseNotes(notes: string = ""): Record<string, string> {
  const result: Record<string, string> = {};
  notes.split("|").forEach((part) => {
    const [k, ...v] = part.split(":");
    if (k && v.length) result[k.trim()] = v.join(":").trim();
  });
  return result;
}

function internalEmailHtml(data: {
  orderId: string; productSlug: string; productTitle: string;
  name: string; email: string; phone: string; nationality: string;
  notes: string; parsedNotes: Record<string, string>; manual: boolean;
}): string {
  const rows: [string, string][] = [
    ["Order ID", `<strong style="font-family:monospace">${data.orderId}</strong>`],
    ["Product", data.productTitle],
    ["Name", data.name || "—"],
    ["Email", data.email || "—"],
    ["Phone", data.phone || "—"],
    ["Nationality", data.nationality || "—"],
    ...Object.entries(data.parsedNotes).map(([k, v]): [string, string] => [k, v]),
    ["Payment", data.manual ? "⚠️ Manual — no payment taken yet" : "✅ Stripe PaymentIntent created"],
  ];
  return `<!DOCTYPE html><html><head><meta charset="utf-8"/></head><body style="margin:0;padding:0;background:#f5f5f5;font-family:'Helvetica Neue',sans-serif;">
  <div style="max-width:600px;margin:32px auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
    <div style="background:#0708E4;padding:24px 32px;"><div style="font-size:22px;font-weight:900;color:#fff;">Wirestork</div><div style="font-size:13px;color:rgba(255,255,255,0.7);margin-top:4px;">New Order</div></div>
    <div style="padding:32px;"><h2 style="margin:0 0 24px;font-size:20px;color:#111;">🆕 ${data.productTitle}</h2>
    <table style="width:100%;border-collapse:collapse;font-size:14px;">${rows.map(([l, v]) => `<tr><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#6b7280;font-weight:600;width:160px;">${l}</td><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#111;">${v||"—"}</td></tr>`).join("")}</table>
    <div style="margin-top:24px;padding:14px;background:#fefce8;border:1px solid #fde047;border-radius:8px;font-size:13px;color:#713f12;"><strong>Action required:</strong> Begin processing.</div></div>
    <div style="padding:16px 32px;background:#f9fafb;border-top:1px solid #e5e7eb;font-size:12px;color:#9ca3af;">Wirestork · care@wirestork.com</div>
  </div></body></html>`;
}

function customerEmailHtml(data: {
  orderId: string; productTitle: string; name: string; turnaround: string; dashboardUrl: string;
}): string {
  return `<!DOCTYPE html><html><head><meta charset="utf-8"/></head><body style="margin:0;padding:0;background:#f5f5f5;font-family:'Helvetica Neue',sans-serif;">
  <div style="max-width:600px;margin:32px auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
    <div style="background:#0708E4;padding:24px 32px;"><div style="font-size:22px;font-weight:900;color:#fff;">Wirestork</div><div style="font-size:13px;color:rgba(255,255,255,0.7);margin-top:4px;">Order Confirmation</div></div>
    <div style="padding:32px;">
      <h2 style="margin:0 0 8px;font-size:22px;color:#111;">Your order is confirmed ✓</h2>
      <p style="color:#6b7280;font-size:15px;margin:0 0 24px;line-height:1.6;">Hi ${data.name||"there"}, thank you. Here's what happens next.</p>
      <div style="background:#f0f4ff;border:1px solid #c7d2fe;border-radius:10px;padding:20px 24px;margin-bottom:20px;">
        <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#4338ca;margin-bottom:4px;">Order Reference</div>
        <div style="font-size:24px;font-weight:900;color:#1e1b4b;font-family:monospace;">${data.orderId}</div>
        <div style="font-size:13px;color:#6b7280;margin-top:4px;">${data.productTitle} · Delivery: ${data.turnaround}</div>
      </div>
      <div style="background:#f0f4ff;border:1px solid #c7d2fe;border-radius:10px;padding:16px 20px;margin-bottom:20px;">
        <div style="font-size:14px;font-weight:700;color:#1e1b4b;margin-bottom:8px;">📂 Upload your documents in your dashboard</div>
        <a href="${data.dashboardUrl}" style="display:inline-block;background:#0708E4;color:#fff;border-radius:8px;padding:10px 20px;font-weight:700;font-size:14px;text-decoration:none;">Open My Dashboard →</a>
      </div>
      <p style="font-size:13px;color:#6b7280;">Questions? <a href="mailto:care@wirestork.com" style="color:#0708E4;">care@wirestork.com</a> — quote <strong>${data.orderId}</strong>.</p>
    </div>
    <div style="padding:16px 32px;background:#f9fafb;border-top:1px solid #e5e7eb;font-size:12px;color:#9ca3af;">Wirestork · care@wirestork.com · wirestork.com</div>
  </div></body></html>`;
}

function getTurnaround(slug: string): string {
  const map: Record<string, string> = {
    "travel-ban-uae-check":             "24–48 hours",
    "labor-ban-check":                  "Same day",
    "uae-court-police-case-checking":   "5 working days",
    "check-travel-ban-in-saudi-arabia": "10 working days",
    "online-lawyer-consultation":       "Within 6 hours",
    "background-checks-gcc":            "1–6 days",
    "client-credit-check":              "7 working days",
    "legal-document-review":            "2–3 business days",
    "remove-travel-ban-in-uae":         "5–10 working days",
    "employee-check":                   "3–5 days",
    "debt-collection-agency":           "Varies by case",
    "uae-business-formation":           "7–14 working days",
  };
  return map[slug] ?? "5–7 working days";
}

async function sendEmails(data: {
  orderId: string; productSlug: string; productTitle: string;
  name: string; email: string; phone: string; nationality: string;
  notes: string; manual: boolean; dashboardUrl: string;
}) {
  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) return;
  const { Resend } = await import("resend");
  const resend = new Resend(resendKey);
  const parsedNotes = parseNotes(data.notes);
  await resend.emails.send({
    from: "Wirestork Orders <orders@wirestork.com>",
    to: ["care@wirestork.com"],
    subject: `[New Order] ${data.productTitle} — ${data.orderId}`,
    html: internalEmailHtml({ ...data, parsedNotes }),
  });
  if (data.email) {
    await resend.emails.send({
      from: "Wirestork <noreply@wirestork.com>",
      to: [data.email],
      replyTo: "care@wirestork.com",
      subject: `Order Confirmed: ${data.orderId} — ${data.productTitle}`,
      html: customerEmailHtml({ orderId: data.orderId, productTitle: data.productTitle, name: data.name, turnaround: getTurnaround(data.productSlug), dashboardUrl: data.dashboardUrl }),
    });
  }
}

// ── Main handler ──────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { productSlug, name, email, phone, nationality, notes, amountAed } = body;

    const { getProduct } = await import("@/lib/products");
    const product = getProduct(productSlug);

    const productTitle = product?.title ?? productSlug
      .replace(/-/g, " ").replace(/\b\w/g, (c: string) => c.toUpperCase());

    const orderId = `WS-${Date.now()}`;
    const stripeKey = process.env.STRIPE_SECRET_KEY;
    const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://wirestork.com";
    const dashboardUrl = `${appUrl}/dashboard`;
    const finalAmount = amountAed ?? (product ? Math.round(product.price * 1.05) : 0);

    // ── Write order to Supabase ────────────────────────────────────────────
    try {
      const { supabaseAdmin } = await import("@/lib/supabase");
      const db = supabaseAdmin();
      await db.from("orders").insert({
        id: orderId,
        user_email: (email ?? "").toLowerCase().trim(),
        user_name: name ?? null,
        user_phone: phone ?? null,
        user_nationality: nationality ?? null,
        service_slug: productSlug,
        service_title: productTitle,
        service_category: product?.category ?? null,
        amount_aed: finalAmount,
        notes: notes ?? null,
        payment_status: stripeKey ? "pending" : "manual",
        order_status: "received",
      });
    } catch (dbErr) {
      console.error("[Checkout] Supabase insert failed:", dbErr);
      // Don't block the checkout — continue even if DB write fails
    }

    // ── No Stripe key — manual order ──────────────────────────────────────
    if (!stripeKey) {
      sendEmails({ orderId, productSlug, productTitle, name: name ?? "", email: email ?? "", phone: phone ?? "", nationality: nationality ?? "", notes: notes ?? "", manual: true, dashboardUrl }).catch(console.error);
      return NextResponse.json({ orderId, manual: true, dashboardUrl });
    }

    // ── Stripe: create PaymentIntent (inline) ─────────────────────────────
    const stripe = (await import("stripe")).default;
    const stripeClient = new stripe(stripeKey);

    const paymentIntent = await stripeClient.paymentIntents.create({
      amount: finalAmount * 100,          // AED, smallest unit = fils
      currency: "aed",
      metadata: { orderId, productSlug, productTitle, customerName: name ?? "", customerEmail: email ?? "" },
      receipt_email: email || undefined,
      description: `Wirestork: ${productTitle} (${orderId})`,
      automatic_payment_methods: { enabled: true },
    });

    // Update order with PaymentIntent ID
    try {
      const { supabaseAdmin } = await import("@/lib/supabase");
      await supabaseAdmin().from("orders").update({
        stripe_payment_intent: paymentIntent.id,
      }).eq("id", orderId);
    } catch (_) { /* non-fatal */ }

    // Send emails async (order received, payment pending)
    sendEmails({ orderId, productSlug, productTitle, name: name ?? "", email: email ?? "", phone: phone ?? "", nationality: nationality ?? "", notes: notes ?? "", manual: false, dashboardUrl }).catch(console.error);

    return NextResponse.json({
      orderId,
      clientSecret: paymentIntent.client_secret,
      dashboardUrl,
    });
  } catch (err) {
    console.error("[Checkout API]", err);
    return NextResponse.json({ error: "Payment setup failed" }, { status: 500 });
  }
}
