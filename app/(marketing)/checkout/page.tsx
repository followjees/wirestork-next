"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { getProduct } from "@/lib/products";
import Link from "next/link";

function CheckoutForm() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("product") ?? "";
  const product = getProduct(slug);

  const [form, setForm] = useState({ name: "", email: "", phone: "", nationality: "", notes: "" });
  const [loading, setLoading] = useState(false);
  const update = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // TODO: POST /api/checkout to create Stripe payment intent
    setTimeout(() => setLoading(false), 1500);
  }

  if (!product) {
    return (
      <div style={{ textAlign: "center", padding: 80 }}>
        <div style={{ fontSize: 40, marginBottom: 16 }}>🔍</div>
        <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 8 }}>No service selected</div>
        <Link href="/services" className="btn btn-primary">Browse Services →</Link>
      </div>
    );
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 48, alignItems: "flex-start" }}>
      {/* Form */}
      <div>
        <h1 style={{ fontWeight: 800, fontSize: 28, marginBottom: 8 }}>Complete Your Order</h1>
        <p style={{ color: "var(--muted)", marginBottom: 32 }}>Fill in your details to proceed to secure payment.</p>

        <form onSubmit={handleSubmit}>
          <div className="card" style={{ padding: 28, marginBottom: 24 }}>
            <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 20 }}>Your Details</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div>
                <label style={{ display: "block", fontWeight: 600, fontSize: 13, marginBottom: 6 }}>Full Name *</label>
                <input required type="text" className="input" placeholder="As on passport" value={form.name} onChange={update("name")} />
              </div>
              <div>
                <label style={{ display: "block", fontWeight: 600, fontSize: 13, marginBottom: 6 }}>Email *</label>
                <input required type="email" className="input" placeholder="Results sent here" value={form.email} onChange={update("email")} />
              </div>
              <div>
                <label style={{ display: "block", fontWeight: 600, fontSize: 13, marginBottom: 6 }}>Phone / WhatsApp</label>
                <input type="tel" className="input" placeholder="+971 50 000 0000" value={form.phone} onChange={update("phone")} />
              </div>
              <div>
                <label style={{ display: "block", fontWeight: 600, fontSize: 13, marginBottom: 6 }}>Nationality</label>
                <input type="text" className="input" placeholder="e.g. Indian, Pakistani" value={form.nationality} onChange={update("nationality")} />
              </div>
            </div>
            <div style={{ marginTop: 16 }}>
              <label style={{ display: "block", fontWeight: 600, fontSize: 13, marginBottom: 6 }}>Additional Notes</label>
              <textarea className="input" rows={3} placeholder="Any specific details about your case..." value={form.notes} onChange={update("notes")} style={{ resize: "vertical" }} />
            </div>
          </div>

          <div className="card" style={{ padding: 28, marginBottom: 24 }}>
            <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 20 }}>Payment</div>
            <div style={{ background: "var(--surface-2)", border: "1.5px dashed var(--border)", borderRadius: 12, padding: 24, textAlign: "center", color: "var(--muted)", fontSize: 14 }}>
              🔒 Stripe payment form loads here<br />
              <span style={{ fontSize: 12 }}>(Connect NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY to activate)</span>
            </div>
          </div>

          <button type="submit" disabled={loading} className="btn btn-primary" style={{ width: "100%", justifyContent: "center", fontSize: 16, padding: "15px" }}>
            {loading ? "Processing..." : `Pay AED ${product.price.toLocaleString()} →`}
          </button>
          <div style={{ textAlign: "center", marginTop: 12, fontSize: 12, color: "var(--light)" }}>
            🔒 Secured by Stripe · No card data stored on our servers
          </div>
        </form>
      </div>

      {/* Order summary */}
      <div style={{ position: "sticky", top: 88 }}>
        <div className="card" style={{ padding: 28 }}>
          <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 20 }}>Order Summary</div>
          <div style={{ borderBottom: "1px solid var(--border)", paddingBottom: 16, marginBottom: 16 }}>
            <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>{product.title}</div>
            <div style={{ fontSize: 13, color: "var(--muted)", marginBottom: 12 }}>{product.tagline}</div>
            {product.features.slice(0, 4).map((f) => (
              <div key={f} style={{ display: "flex", gap: 8, fontSize: 13, marginBottom: 6 }}>
                <span style={{ color: "var(--success)" }}>✓</span>
                <span style={{ color: "var(--muted)" }}>{f}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ color: "var(--muted)", fontSize: 14 }}>Service fee</span>
            <span style={{ fontWeight: 600 }}>AED {product.price.toLocaleString()}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
            <span style={{ color: "var(--muted)", fontSize: 14 }}>VAT (5%)</span>
            <span style={{ fontWeight: 600 }}>AED {Math.round(product.price * 0.05).toLocaleString()}</span>
          </div>
          <div style={{ borderTop: "1px solid var(--border)", paddingTop: 16, display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontWeight: 700 }}>Total</span>
            <span style={{ fontWeight: 900, fontSize: 20, color: "var(--brand)" }}>
              AED {Math.round(product.price * 1.05).toLocaleString()}
            </span>
          </div>
          <div style={{ marginTop: 16, fontSize: 12, color: "var(--light)", display: "flex", alignItems: "center", gap: 6 }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            Turnaround: {product.turnaround}
          </div>
        </div>
        <div style={{ marginTop: 12, fontSize: 13, color: "var(--muted)", textAlign: "center" }}>
          Questions? <Link href="/reach-us" style={{ color: "var(--brand)" }}>Contact us</Link>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <div style={{ paddingTop: 88, paddingBottom: 80 }}>
      <div className="container">
        <Suspense fallback={<div style={{ padding: 40, textAlign: "center", color: "var(--muted)" }}>Loading...</div>}>
          <CheckoutForm />
        </Suspense>
      </div>
    </div>
  );
}
