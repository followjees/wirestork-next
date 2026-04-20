"use client";

import { useState, useEffect, useRef } from "react";

const BLUE = "#0708E4";
const BTN_GRAD = "linear-gradient(135deg, #0708E4 0%, #6366F1 100%)";
const GLASS = { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 24 } as const;

const NAV_SECTIONS = [
  { id: "section-overview", label: "Overview" },
  { id: "section-what-included", label: "What's Included" },
  { id: "product-pricing", label: "Pricing" },
  { id: "section-apply", label: "Order Now" },
  { id: "section-how", label: "How it Works" },
  { id: "section-why", label: "Why Credit Check" },
  { id: "section-docs", label: "Documents Required" },
  { id: "faq", label: "FAQ" },
];

function FloatingNav() {
  const [active, setActive] = useState("section-overview");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 800);
    const observers: IntersectionObserver[] = [];
    NAV_SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => { clearTimeout(timer); observers.forEach((o) => o.disconnect()); };
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="floating-nav-hide-mobile" style={{ position: "fixed", right: 20, top: "50%", transform: `translateY(-50%) translateX(${visible ? 0 : 80}px)`, transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.4s", opacity: visible ? 1 : 0, zIndex: 90 }}>
      <div style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: "10px 8px", minWidth: 160 }}>
        <div style={{ fontSize: 9, fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", padding: "4px 10px 8px", borderBottom: "1px solid rgba(255,255,255,0.06)", marginBottom: 4 }}>On This Page</div>
        {NAV_SECTIONS.map(({ id, label }) => {
          const isActive = active === id;
          return (
            <button key={id} onClick={() => scrollTo(id)} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 10px", borderRadius: 8, border: "none", background: isActive ? "rgba(7,8,228,0.2)" : "transparent", color: isActive ? "#818CF8" : "rgba(255,255,255,0.45)", fontSize: 12, fontWeight: isActive ? 700 : 500, cursor: "pointer", textAlign: "left", width: "100%", fontFamily: "inherit" }}>
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: isActive ? BLUE : "rgba(255,255,255,0.2)", flexShrink: 0 }} />
              {label}
            </button>
          );
        })}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", marginTop: 6, paddingTop: 8 }}>
          <button onClick={() => scrollTo("section-apply")} style={{ width: "100%", background: BTN_GRAD, color: "#fff", border: "none", borderRadius: 10, padding: "9px 10px", fontSize: 11, fontWeight: 900, cursor: "pointer", fontFamily: "inherit" }}>Order Credit Check →</button>
        </div>
      </div>
    </div>
  );
}

type FlowState = "idle" | "submitting" | "success";

export default function CreditCheckClient() {
  const [flow, setFlow] = useState<FlowState>("idle");
  const [orderId, setOrderId] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState({
    clientName: "", clientAddress: "", contactName: "", email: "",
    phone: "", emiratesId: "", docLink: "",
  });

  const update = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement>) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.clientName.trim()) errs.clientName = "Required";
    if (!form.clientAddress.trim()) errs.clientAddress = "Required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = "Valid email required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setFlow("submitting");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productSlug: "client-credit-check",
          name: form.contactName || form.clientName,
          email: form.email, phone: form.phone,
          notes: `Client: ${form.clientName} | Address: ${form.clientAddress}${form.emiratesId ? ` | Emirates ID: ${form.emiratesId}` : ""}${form.docLink ? ` | Docs: ${form.docLink}` : ""} | AED 1,499`,
        }),
      });
      const data = await res.json();
      setOrderId(data.orderId ?? `WS-${Date.now().toString().slice(-6)}`);
      setFlow("success");
    } catch {
      setFlow("idle");
      setErrors({ submit: "Something went wrong. Please try again or contact us." });
    } finally {
      setSubmitting(false);
    }
  };

  const inp = (field: string): React.CSSProperties => ({
    width: "100%", padding: "12px 14px",
    background: errors[field] ? "rgba(239,68,68,0.06)" : "rgba(255,255,255,0.04)",
    border: `1px solid ${errors[field] ? "rgba(239,68,68,0.4)" : "rgba(255,255,255,0.1)"}`,
    borderRadius: 10, color: "#fff", fontSize: 14, outline: "none", fontFamily: "inherit",
  });

  const lbl: React.CSSProperties = { display: "block", fontSize: 10, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 7 };

  return (
    <>
      <style>{`
        @media (max-width: 1100px) { .floating-nav-hide-mobile { display: none !important; } }
        input:focus { border-color: rgba(7,8,228,0.5) !important; box-shadow: 0 0 0 3px rgba(7,8,228,0.08); }
      `}</style>

      <FloatingNav />

      {/* ── PRICING CARD ────────────────────────────────────────────── */}
      <section id="product-pricing" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "80px 32px", scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 14 }}>Client Credit Check Pricing</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em", marginBottom: 14 }}>One Comprehensive Plan</h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 17 }}>Everything you need to verify a client&apos;s creditworthiness — in <strong style={{ color: "#fff" }}>7 working days</strong>.</p>
          </div>

          <div style={{ ...GLASS, padding: 40, maxWidth: 680, margin: "0 auto", position: "relative" }}>
            <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: BTN_GRAD, color: "#fff", borderRadius: 100, padding: "4px 20px", fontSize: 11, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
              Complete Credit Verification
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "start", marginTop: 12 }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 10 }}>Client Credit Check</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 52, color: "#fff", lineHeight: 1, marginBottom: 6 }}>AED 1,499</div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ADE80" }} />
                  <span style={{ fontSize: 13, color: "#4ADE80", fontWeight: 700 }}>7 Working Days Delivery</span>
                </div>
                <button
                  onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
                  style={{ width: "100%", background: BTN_GRAD, color: "#fff", border: "none", borderRadius: 12, padding: "14px 20px", fontWeight: 900, fontSize: 15, cursor: "pointer", fontFamily: "inherit", letterSpacing: "0.05em" }}
                >
                  Order Client Credit Check →
                </button>
              </div>
              <div style={{ borderLeft: "1px solid rgba(255,255,255,0.07)", paddingLeft: 32 }}>
                <div style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 14 }}>What&apos;s Included</div>
                {[
                  "Company profile check",
                  "Criminal background check",
                  "Address verification",
                  "Two professional reference checks",
                  "Lawyer-reviewed PDF report",
                  "Actionable risk summary",
                ].map((f) => (
                  <div key={f} style={{ display: "flex", gap: 10, fontSize: 13, color: "rgba(255,255,255,0.65)", alignItems: "flex-start", marginBottom: 9 }}>
                    <span style={{ color: "#4ADE80", flexShrink: 0, marginTop: 1 }}>✓</span>{f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ORDER FORM ──────────────────────────────────────────────── */}
      <div id="section-apply" ref={formRef} style={{ scrollMarginTop: 80 }}>
        {flow !== "success" && (
          <section style={{ padding: "0 32px 80px" }}>
            <div style={{ maxWidth: 860, margin: "0 auto" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32, flexWrap: "wrap", gap: 16 }}>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", color: BLUE, marginBottom: 8 }}>Order Now</div>
                  <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(24px, 3vw, 36px)", lineHeight: 1.1 }}>Order Your Client Credit Check</h2>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", marginTop: 8 }}>Fill in the details below. Our team will start your client credit check within 2 hours.</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>Total</div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 40, color: "#fff", lineHeight: 1 }}>AED 1,499</div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Client info */}
                <div style={{ ...GLASS, padding: 28, marginBottom: 16 }}>
                  <div style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 20 }}>Client Being Checked</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                    <div style={{ gridColumn: "1 / -1" }}>
                      <label style={lbl}>Full Name / Company Name of Client *</label>
                      <input type="text" style={inp("clientName")} placeholder="Full legal name or registered company name" value={form.clientName} onChange={update("clientName")} />
                      {errors.clientName && <div style={{ fontSize: 11, color: "#F87171", marginTop: 4 }}>{errors.clientName}</div>}
                    </div>
                  </div>
                  <div style={{ marginBottom: 0 }}>
                    <label style={lbl}>Client&apos;s Address *</label>
                    <input type="text" style={inp("clientAddress")} placeholder="Full residential or business address" value={form.clientAddress} onChange={update("clientAddress")} />
                    {errors.clientAddress && <div style={{ fontSize: 11, color: "#F87171", marginTop: 4 }}>{errors.clientAddress}</div>}
                  </div>
                </div>

                {/* Authorized signatory */}
                <div style={{ ...GLASS, padding: 28, marginBottom: 16 }}>
                  <div style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 20 }}>Authorized Signatory (Your Details)</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                    <div>
                      <label style={lbl}>Full Name</label>
                      <input type="text" style={inp("contactName")} placeholder="Signatory's full name" value={form.contactName} onChange={update("contactName")} />
                    </div>
                    <div>
                      <label style={lbl}>Email Address *</label>
                      <input type="email" style={inp("email")} placeholder="Report delivered here" value={form.email} onChange={update("email")} />
                      {errors.email && <div style={{ fontSize: 11, color: "#F87171", marginTop: 4 }}>{errors.email}</div>}
                    </div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                    <div>
                      <label style={lbl}>Phone / WhatsApp</label>
                      <input type="tel" style={inp("phone")} placeholder="+971 50 000 0000" value={form.phone} onChange={update("phone")} />
                    </div>
                    <div>
                      <label style={lbl}>Emirates ID of Signatory</label>
                      <input type="text" style={inp("emiratesId")} placeholder="784-XXXX-XXXXXXX-X" value={form.emiratesId} onChange={update("emiratesId")} />
                    </div>
                  </div>

                  {/* Document link */}
                  <div>
                    <label style={lbl}>Document Link <span style={{ color: "rgba(255,255,255,0.2)", fontWeight: 400, textTransform: "none", letterSpacing: 0 }}>— optional</span></label>
                    <input type="url" style={inp("docLink")} placeholder="Google Drive, Dropbox, OneDrive — credit application form, purchase references, etc." value={form.docLink} onChange={update("docLink")} />
                    <div style={{ marginTop: 10, background: "rgba(7,8,228,0.06)", border: "1px solid rgba(7,8,228,0.15)", borderRadius: 10, padding: "12px 16px", display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ color: "#818CF8", flexShrink: 0, fontSize: 16, marginTop: 1 }}>ℹ</span>
                      <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, margin: 0 }}>
                        Don&apos;t have a link? Email your client credit application form, residence visa page, Emirates ID of the authorized signatory, and any purchase references to{" "}
                        <strong style={{ color: "#818CF8" }}>care@wirestork.com</strong>{" "}
                        with your order number as the subject after payment.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Order summary */}
                <div style={{ background: "rgba(7,8,228,0.06)", border: "1px solid rgba(7,8,228,0.15)", borderRadius: 14, padding: "16px 20px", marginBottom: 16, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
                  <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                    {[["Service", "Client Credit Check"], ["Delivery", "7 Working Days"], ["Coverage", "UAE-wide"], ["Includes", "4 checks + PDF report"]].map(([k, v]) => (
                      <div key={k}>
                        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 2 }}>{k}</div>
                        <div style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>{v}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 2 }}>Total (incl. VAT)</div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 24, color: "#fff" }}>AED {Math.round(1499 * 1.05).toLocaleString()}</div>
                  </div>
                </div>

                {errors.submit && <div style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 10, padding: "12px 16px", color: "#F87171", fontSize: 13, marginBottom: 16 }}>{errors.submit}</div>}

                <button type="submit" disabled={submitting} style={{ width: "100%", background: submitting ? "rgba(255,255,255,0.08)" : BTN_GRAD, color: "#fff", border: "none", borderRadius: 14, padding: "17px 24px", fontWeight: 900, fontSize: 16, cursor: submitting ? "not-allowed" : "pointer", fontFamily: "inherit", letterSpacing: "0.04em", marginBottom: 10 }}>
                  {submitting ? "Processing..." : `Proceed to Secure Payment — AED ${Math.round(1499 * 1.05).toLocaleString()} →`}
                </button>
                <p style={{ textAlign: "center", fontSize: 12, color: "rgba(255,255,255,0.25)", margin: 0 }}>🔒 Encrypted · Stripe secured · No card data stored</p>
              </form>
            </div>
          </section>
        )}

        {/* ── SUCCESS ────────────────────────────────────────────────── */}
        {flow === "success" && orderId && (
          <section style={{ padding: "0 32px 80px" }}>
            <div style={{ maxWidth: 680, margin: "0 auto" }}>
              <div style={{ ...GLASS, padding: 48, textAlign: "center", border: "1px solid rgba(34,197,94,0.25)", background: "rgba(34,197,94,0.04)" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", fontSize: 28 }}>✓</div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 32, color: "#4ADE80", marginBottom: 8 }}>Client Credit Check Ordered</h2>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 20, color: "rgba(255,255,255,0.5)", marginBottom: 20 }}>{orderId}</div>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: 32, maxWidth: 480, margin: "0 auto 32px" }}>
                  Your client credit check for <strong style={{ color: "#fff" }}>{form.clientName}</strong> is confirmed. Report delivered to <strong style={{ color: "#fff" }}>{form.email}</strong> within 7 working days.
                </p>
                <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginBottom: 24 }}>
                  {["📧 Confirmation sent", "⏱ Processing starts within 2 hours", "📋 Check your spam folder"].map((t) => (
                    <span key={t} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 100, padding: "5px 14px", fontSize: 12, color: "rgba(255,255,255,0.5)" }}>{t}</span>
                  ))}
                </div>
                {!form.docLink && (
                  <div style={{ background: "rgba(7,8,228,0.08)", border: "1px solid rgba(7,8,228,0.2)", borderRadius: 14, padding: "16px 20px", marginBottom: 24, display: "flex", gap: 12, alignItems: "flex-start", textAlign: "left" }}>
                    <span style={{ fontSize: 20, flexShrink: 0 }}>📎</span>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 14, color: "#fff", marginBottom: 4 }}>Send your documents</div>
                      <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, margin: 0 }}>
                        Email the client credit application form, residence visa page, Emirates ID, and any purchase references to{" "}
                        <strong style={{ color: "#818CF8" }}>care@wirestork.com</strong> with subject: <strong style={{ color: "#fff" }}>{orderId}</strong>
                      </p>
                    </div>
                  </div>
                )}
                <a href="/reach-us" style={{ display: "inline-block", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.6)", borderRadius: 10, padding: "10px 22px", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>Questions? Contact us</a>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
