// app/api/webhooks/stripe/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret || !sig) {
    return NextResponse.json({ error: "Webhook not configured" }, { status: 400 });
  }

  try {
    const stripe = (await import("stripe")).default;
    const stripeClient = new stripe(process.env.STRIPE_SECRET_KEY!);
    const event = stripeClient.webhooks.constructEvent(body, sig, webhookSecret);

    if (event.type === "payment_intent.succeeded") {
      const pi = event.data.object as { metadata: Record<string, string> };
      console.log("[Webhook] Payment succeeded:", {
        product: pi.metadata.productTitle,
        email: pi.metadata.customerEmail,
        name: pi.metadata.customerName,
      });
      // TODO: Send confirmation email, create order in DB, notify ops team
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("[Webhook]", err);
    return NextResponse.json({ error: "Webhook failed" }, { status: 400 });
  }
}

// Must use raw body for Stripe signature verification
export const config = { api: { bodyParser: false } };
