"use client";
import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { getProduct } from "@/lib/products";
import Link from "next/link";

const BLUE     = "#0708E4";
const BTN_GRAD = "linear-gradient(135deg, #0708E4 0%, #6366F1 100%)";

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "12px 16px",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 10, color: "#fff", fontSize: 14,
  outline: "none", fontFamily: "inherit", boxSizing: "border-box",
};
const labelStyle: React.CSSProperties = {
  display: "block", fontSize: 11, fontWeight: 900,
  letterSpacing: "0.12em", textTransform: "uppercase",
  color: "rgba(255,255,255,0.35)", marginBottom: 8,
};

const STRIPE_APPEARANCE = {
  theme: "night" as const,
  variables: {
    colorPrimary: "#0708E4",
    colorBackground: "#0a0a0a",
    colorText: "#ffffff",
    colorDanger: "#ef4444",
    fontFamily: "'Outfit', sans-serif",
    borderRadius: "10px",
  },
  rules: {
    ".Input": { backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff" },
    ".Input:focus": { border: "1px solid #0708E4", boxShadow: "none" },
    ".Label": { color: "rgba(255,255,255,0.45)", fontSize: "11px", letterSpacing: "0.1em" },
    ".Tab": { backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)" },
    ".Tab--selected": { backgroundColor: "rgba(7,8,228,0.12)", border: "1px solid #0708E4", color: "#fff" },
    ".Tab:hover": { color: "#fff" },
  },
};

// ── Payment form rendered inside <Elements> ───────────────────────────────────
function PaymentForm({ orderId, total, name, email }: {
  orderId: string; total: number; name: string; email: string;
}) {
  const stripe   = useStripe();
  const elements = useElements();
  const router   = useRouter();
  const [paying, setPaying] = useState(false);
  const [error,  setError]  = useState<string | null>(null);

  async function handlePay(e: React.FormEvent) {
    e.preventDefault();
    if (!stripe || !elements) return;
    setPaying(true); setError(null);

    const { error: stripeError } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/dashboard?order=${orderId}&status=success`,
        payment_method_data: { billing_details: { name, email } },
      },
      redirect: "if_required",
    });

    if (stripeError) {
      setError(stripeError.message ?? "Payment failed. Please try again.");
      setPaying(false);
      return;
    }

    // Succeeded inline — no 3DS redirect needed
    router.push(`/dashboard?order=${orderId}&status=success`);
  }

  return (
    <form onSubmit={handlePay}>
      <div style={{ marginBottom: 20 }}>
        <PaymentElement options={{ layout: "tabs", defaultValues: { billingDetails: { name, email } } }} />
      </div>
      {error && (
        <div style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: 10, padding: "12px 16px", marginBottom: 16, fontSize: 13, color: "#FCA5A5" }}>
          ⚠ {error}
        </div>
      )}
      <button type="submit" disabled={paying || !stripe}
        style={{ width: "100%", background: paying ? "rgba(255,255,255,0.08)" : BTN_GRAD, color: "#fff", border: "none", borderRadius: 12, padding: 16, fontWeight: 900, fontSize: 16, letterSpacing: "0.04em", cursor: paying ? "not-allowed" : "pointer", fontFamily: "inherit" }}>
        {paying ? "Processing payment…" : `Pay AED ${total.toLocaleString()} →`}
      </button>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 14 }}>
        <span style={{ fontSize: 14 }}>🔒</span>
        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.22)" }}>Secured by Stripe · Card details never touch our servers</span>
      </div>
    </form>
  );
}

// ── Main content ──────────────────────────────────────────────────────────────
function CheckoutContent() {
  const searchParams = useSearchParams();
  const slug       = searchParams.get("product") ?? "";
  const docType    = searchParams.get("type");
  const priceParam = searchParams.get("price");

  const product    = getProduct(slug);
  const basePrice  = priceParam ? parseInt(priceParam) : (product?.price ?? 0);
  const total      = Math.round(basePrice * 1.05);
  const productTitle = docType
    ? `Legal Document Review — ${docType}`
    : (product?.title ?? slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()));

  const [step,         setStep]         = useState<"details" | "payment">("details");
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [orderId,      setOrderId]      = useState<string | null>(null);
  const [userData,     setUserData]     = useState({ name: "", email: "" });
  const [form,         setForm]         = useState({ name: "", email: "", phone: "", nationality: "", notes: "" });
  const [loading,      setLoading]      = useState(false);
  const [initError,    setInitError]    = useState<string | null>(null);

  const stripeKey     = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  const stripePromise = stripeKey ? loadStripe(stripeKey) : null;

  const up = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  async function handleDetailsSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true); setInitError(null);
    setUserData({ name: form.name, email: form.email });

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productSlug: slug || "legal-document-review",
          amountAed: total,
          name: form.name, email: form.email,
          phone: form.phone, nationality: form.nationality,
          notes: docType
            ? `Document Type: ${docType}${form.notes ? " | " + form.notes : ""}`
            : form.notes,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Failed to create order");

      setOrderId(data.orderId);

      if (data.manual || !data.clientSecret) {
        window.location.href = `/dashboard?order=${data.orderId}&status=manual`;
        return;
      }

      setClientSecret(data.clientSecret);
      setStep("payment");
    } catch (err: unknown) {
      setInitError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (!product && !priceParam) {
    return (
      <div style={{ textAlign: "center", padding: 80 }}>
        <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 56, color: "rgba(255,255,255,0.06)", marginBottom: 16 }}>?</div>
        <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 12 }}>No service selected</div>
        <Link href="/services" style={{ display: "inline-block", background: BTN_GRAD, color: "#fff", borderRadius: 12, padding: "12px 24px", fontWeight: 900, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>
          Browse Services →
        </Link>
      </div>
    );
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 52, alignItems: "flex-start" }}>

      {/* ── LEFT: forms ─────────────────────────────────── */}
      <div>
        {/* Step pills */}
        <div style={{ display: "flex", alignItems: "center", gap: 0, marginBottom: 32 }}>
          {(["Your Details", "Payment"] as const).map((lbl, i) => {
            const active = (i === 0 && step === "details") || (i === 1 && step === "payment");
            const done   = i === 0 && step === "payment";
            return (
              <div key={lbl} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: done ? "#10B981" : active ? BTN_GRAD : "rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 900, color: "#fff", flexShrink: 0 }}>
                  {done ? "✓" : i + 1}
                </div>
                <span style={{ fontSize: 13, fontWeight: active ? 700 : 500, color: active ? "#fff" : "rgba(255,255,255,0.28)" }}>{lbl}</span>
                {i === 0 && <div style={{ width: 36, height: 1, background: "rgba(255,255,255,0.1)", margin: "0 12px" }} />}
              </div>
            );
          })}
        </div>

        <h1 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 36, marginBottom: 6, lineHeight: 1.1, letterSpacing: "-0.03em" }}>
          {step === "details" ? "Your Details" : "Secure Payment"}
        </h1>
        <p style={{ color: "rgba(255,255,255,0.38)", marginBottom: 28, fontSize: 14 }}>
          {step === "details"
            ? "Fill in your details. Payment is the next step."
            : "Enter your card details below. Processed securely by Stripe."}
        </p>

        {/* Step 1: Details */}
        {step === "details" && (
          <form onSubmit={handleDetailsSubmit}>
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20, padding: 28, marginBottom: 16 }}>
              <p style={{ fontWeight: 900, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: 22 }}>Contact Information</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <div>
                  <label style={labelStyle}>Full Name *</label>
                  <input required type="text" style={inputStyle} placeholder="As on passport" value={form.name} onChange={up("name")} />
                </div>
                <div>
                  <label style={labelStyle}>Email Address *</label>
                  <input required type="email" style={inputStyle} placeholder="Order & results sent here" value={form.email} onChange={up("email")} />
                </div>
                <div>
                  <label style={labelStyle}>Phone / WhatsApp</label>
                  <input type="tel" style={inputStyle} placeholder="+971 50 000 0000" value={form.phone} onChange={up("phone")} />
                </div>
                <div>
                  <label style={labelStyle}>Nationality</label>
                  <input type="text" style={inputStyle} placeholder="e.g. Indian" value={form.nationality} onChange={up("nationality")} />
                </div>
              </div>
              <div style={{ marginTop: 14 }}>
                <label style={labelStyle}>Additional Notes</label>
                <textarea style={{ ...inputStyle, resize: "vertical" }} rows={3}
                  placeholder="Any specific details about your case…"
                  value={form.notes} onChange={up("notes")} />
              </div>
            </div>
            {initError && (
              <div style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: 10, padding: "12px 16px", marginBottom: 14, fontSize: 13, color: "#FCA5A5" }}>
                ⚠ {initError}
              </div>
            )}
            <button type="submit" disabled={loading}
              style={{ width: "100%", background: loading ? "rgba(255,255,255,0.07)" : BTN_GRAD, color: "#fff", border: "none", borderRadius: 12, padding: 15, fontWeight: 900, fontSize: 15, cursor: loading ? "not-allowed" : "pointer", fontFamily: "inherit" }}>
              {loading ? "Setting up your order…" : "Continue to Payment →"}
            </button>
          </form>
        )}

        {/* Step 2: Stripe Payment Element */}
        {step === "payment" && clientSecret && orderId && stripePromise && (
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20, padding: 28 }}>
            <p style={{ fontWeight: 900, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: 22 }}>Card Details</p>
            <Elements stripe={stripePromise} options={{ clientSecret, appearance: STRIPE_APPEARANCE }}>
              <PaymentForm orderId={orderId} total={total} name={userData.name} email={userData.email} />
            </Elements>
            <button onClick={() => { setStep("details"); setClientSecret(null); }}
              style={{ background: "transparent", border: "none", color: "rgba(255,255,255,0.28)", fontSize: 13, cursor: "pointer", marginTop: 18, fontFamily: "inherit", padding: 0 }}>
              ← Back to details
            </button>
          </div>
        )}

        {/* No Stripe key — show info */}
        {step === "payment" && !stripePromise && (
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20, padding: 28, textAlign: "center" }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>🔐</div>
            <div style={{ fontWeight: 700, fontSize: 16, color: "#fff", marginBottom: 8 }}>Payment processing not yet active</div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", lineHeight: 1.7 }}>
              Add <code style={{ background: "rgba(255,255,255,0.06)", padding: "2px 6px", borderRadius: 4, fontSize: 12 }}>NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY</code> to Vercel to activate inline payments.
            </p>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.25)", marginTop: 12 }}>
              Your order <strong style={{ color: "#fff" }}>{orderId}</strong> has been recorded. We&apos;ll contact you at {userData.email}.
            </p>
          </div>
        )}
      </div>

      {/* ── RIGHT: order summary ────────────────────────── */}
      <div style={{ position: "sticky", top: 88 }}>
        <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20, padding: 28 }}>
          <p style={{ fontWeight: 900, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: 20 }}>Order Summary</p>
          <div style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: 18, marginBottom: 16 }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 18, color: "#fff", marginBottom: 6, lineHeight: 1.3 }}>{productTitle}</div>
            {product?.tagline && <div style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", marginBottom: 14 }}>{product.tagline}</div>}
            {product?.features.slice(0, 4).map(f => (
              <div key={f} style={{ display: "flex", gap: 8, fontSize: 13, marginBottom: 6 }}>
                <span style={{ color: BLUE }}>✓</span>
                <span style={{ color: "rgba(255,255,255,0.42)" }}>{f}</span>
              </div>
            ))}
          </div>
          {[["Service fee", `AED ${basePrice.toLocaleString()}`], ["VAT (5%)", `AED ${Math.round(basePrice * 0.05).toLocaleString()}`]].map(([k, v]) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: 14 }}>
              <span style={{ color: "rgba(255,255,255,0.35)" }}>{k}</span>
              <span style={{ color: "#fff", fontWeight: 600 }}>{v}</span>
            </div>
          ))}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 14, display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontWeight: 900, color: "#fff" }}>Total</span>
            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 26, color: BLUE }}>AED {total.toLocaleString()}</span>
          </div>
          {product?.turnaround && (
            <div style={{ marginTop: 10, fontSize: 12, color: "rgba(255,255,255,0.22)" }}>⏱ Turnaround: {product.turnaround}</div>
          )}
        </div>

        <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 9 }}>
          {[["🔒", "256-bit SSL encryption"], ["🛡️", "Stripe PCI DSS Level 1"], ["📂", "Documents uploaded in your dashboard after payment"]].map(([icon, text]) => (
            <div key={text as string} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span style={{ fontSize: 13, flexShrink: 0 }}>{icon}</span>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.22)", lineHeight: 1.5 }}>{text as string}</span>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 16, fontSize: 12, color: "rgba(255,255,255,0.22)", textAlign: "center" }}>
          Questions? <Link href="/reach-us" style={{ color: BLUE }}>Contact us</Link>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <div style={{ background: "#000", color: "#fff", minHeight: "100vh", paddingTop: 100, paddingBottom: 80 }}>
      <div style={{ maxWidth: 1060, margin: "0 auto", padding: "0 32px" }}>
        <Suspense fallback={<div style={{ padding: 40, textAlign: "center", color: "rgba(255,255,255,0.3)" }}>Loading…</div>}>
          <CheckoutContent />
        </Suspense>
      </div>
    </div>
  );
}
