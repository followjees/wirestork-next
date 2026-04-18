// app/api/checkout/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { productSlug, name, email, phone, nationality, notes } = body;

    // Import product data
    const { getProduct } = await import("@/lib/products");
    const product = getProduct(productSlug);
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    const stripeKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeKey) {
      // No Stripe — return a pending order reference for manual processing
      const orderId = `WS-${Date.now()}`;
      console.log("[Checkout] Manual order:", { orderId, productSlug, name, email });
      return NextResponse.json({ orderId, manual: true, product: product.title });
    }

    // Stripe payment intent
    const stripe = (await import("stripe")).default;
    const stripeClient = new stripe(stripeKey);

    const amountAED = Math.round(product.price * 1.05); // incl. 5% VAT

    const paymentIntent = await stripeClient.paymentIntents.create({
      amount: amountAED * 100, // fils
      currency: "aed",
      metadata: {
        productSlug,
        productTitle: product.title,
        customerName: name,
        customerEmail: email,
        customerPhone: phone ?? "",
        nationality: nationality ?? "",
        notes: notes ?? "",
      },
      receipt_email: email,
      description: `Wirestork: ${product.title}`,
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error("[Checkout API]", err);
    return NextResponse.json({ error: "Payment setup failed" }, { status: 500 });
  }
}
