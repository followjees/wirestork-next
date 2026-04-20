"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const BLUE = "#0708E4";
const BTN_GRAD = "linear-gradient(135deg, #0708E4 0%, #6366F1 100%)";
const BTN_CONTRAST = "linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)";
const GLASS = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 24,
} as const;

const PLANS = [
  {
    id: "basic" as const,
    label: "Basic",
    price: 750,
    tagline: "Essential Court Case Check For Travelers and Debtors",
    features: [
      "Maximum of three case lookups",
      "No expedited options",
    ],
    expedited: false,
  },
  {
    id: "standard" as const,
    label: "Standard",
    price: 1200,
    tagline: "Ideal For Individuals With Minimal Financial Liabilities",
    popular: true,
    features: [
      "Covers all courts and police stations",
      "Includes case numbers OR plaintiff details with jurisdictions OR judgements (as available in the Prosecution database)",
      "Lookup of maximum six case filings across all jurisdictions",
      "Lookup of cases with Land Department and Municipalities",
      "Detailed resolution plan with step-by-step instructions",
      "Delivery: five working days; expedited two-day delivery available",
    ],
    expedited: true,
  },
  {
    id: "advanced" as const,
    label: "Advanced",
    price: 1800,
    tagline: "Ideal For Businessmen With Complex Financial/Legal Liabilities",
    features: [
      "Covers all courts and police stations in the UAE",
      "Includes case numbers OR plaintiff details with jurisdictions OR judgements (as available in the Prosecution database)",
      "Lookup of cases with Land Department and Municipalities",
      "Unlimited case lookups",
      "Detailed resolution plan with step-by-step instructions to resolve",
      "Delivery: five working days",
    ],
    expedited: false,
  },
];

type PlanId = "basic" | "standard" | "advanced";
type FlowState = "idle" | "selected" | "submitting" | "success";
type Delivery = "standard" | "expedited";

const NAV_SECTIONS = [
  { id: "section-overview", label: "Overview" },
  { id: "product-pricing", label: "Pricing" },
  { id: "section-apply", label: "Apply Now" },
  { id: "section-how", label: "How it Works" },
  { id: "section-what-filed", label: "What's Filed" },
  { id: "section-report", label: "Decision-Ready Report" },
  { id: "faq", label: "FAQ" },
];

// ── FLOATING NAV ─────────────────────────────────────────────────────────────
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

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className="floating-nav-hide-mobile"
      style={{
        position: "fixed", right: 20, top: "50%",
        transform: `translateY(-50%) translateX(${visible ? 0 : 80}px)`,
        transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.4s",
        opacity: visible ? 1 : 0, zIndex: 90,
      }}
    >
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
          <button onClick={() => scrollTo("section-apply")} style={{ width: "100%", background: BTN_GRAD, color: "#fff", border: "none", borderRadius: 10, padding: "9px 10px", fontSize: 11, fontWeight: 900, cursor: "pointer", fontFamily: "inherit" }}>
            Check My Cases →
          </button>
        </div>
      </div>
    </div>
  );
}

// ── MAIN CLIENT COMPONENT ────────────────────────────────────────────────────
export default function CourtCheckClient() {
  const [selectedPlan, setSelectedPlan] = useState<PlanId | null>(null);
  const [flow, setFlow] = useState<FlowState>("idle");
  const [delivery, setDelivery] = useState<Delivery>("standard");
  const [orderId, setOrderId] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState({
    name: "", email: "", passport: "", nationality: "",
    phone: "", emiratesId: "", docLink: "",
  });

  const update = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const plan = PLANS.find((p) => p.id === selectedPlan);
  const canExpedite = plan?.expedited ?? false;
  const effectiveDelivery = canExpedite ? delivery : "standard";
  const totalPrice = plan ? plan.price : 0;

  const pickPlan = useCallback((id: PlanId) => {
    setSelectedPlan(id);
    setDelivery("standard");
    setFlow("selected");
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }, []);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = "Valid email required";
    if (!form.passport.trim()) errs.passport = "Required";
    if (!form.nationality.trim()) errs.nationality = "Required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || !plan) return;
    setSubmitting(true);
    setFlow("submitting");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productSlug: `court-check-${selectedPlan}`,
          name: form.name, email: form.email,
          phone: form.phone, nationality: form.nationality,
          notes: `Passport: ${form.passport}${form.emiratesId ? ` | Emirates ID: ${form.emiratesId}` : ""}${form.docLink ? ` | Docs: ${form.docLink}` : ""} | Delivery: ${effectiveDelivery} | Plan: ${plan.label} AED ${totalPrice}`,
        }),
      });
      const data = await res.json();
      if (data.manual || data.clientSecret) {
        setOrderId(data.orderId ?? `WS-${Date.now().toString().slice(-6)}`);
        setFlow("success");
      } else throw new Error(data.error ?? "Unknown error");
    } catch {
      setFlow("selected");
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

  const lbl: React.CSSProperties = {
    display: "block", fontSize: 10, fontWeight: 900,
    letterSpacing: "0.12em", textTransform: "uppercase",
    color: "rgba(255,255,255,0.35)", marginBottom: 7,
  };

  return (
    <>
      <style>{`
        @media (max-width: 1100px) { .floating-nav-hide-mobile { display: none !important; } }
        input:focus, textarea:focus { border-color: rgba(7,8,228,0.5) !important; box-shadow: 0 0 0 3px rgba(7,8,228,0.08); }
      `}</style>

      <FloatingNav />

      {/* ── PRICING ─────────────────────────────────────────────────── */}
      <section id="product-pricing" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "80px 32px", scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 14 }}>Transparent Pricing</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em", marginBottom: 14 }}>Pricing</h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 17 }}>
              Standard lead time: <strong style={{ color: "#fff" }}>five working days</strong>.{" "}
              <strong style={{ color: "#fff" }}>Two-day expedited</strong> available on eligible plans.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {PLANS.map((p) => {
              const isSel = selectedPlan === p.id;
              return (
                <div key={p.id} style={{ background: isSel ? "rgba(7,8,228,0.1)" : "rgba(255,255,255,0.02)", border: isSel ? "2px solid rgba(7,8,228,0.6)" : p.popular ? "2px solid rgba(7,8,228,0.3)" : "1px solid rgba(255,255,255,0.08)", borderRadius: 24, padding: 32, display: "flex", flexDirection: "column", position: "relative", transition: "all 0.2s" }}>
                  {p.popular && !isSel && (
                    <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: BTN_GRAD, color: "#fff", borderRadius: 100, padding: "4px 18px", fontSize: 11, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", whiteSpace: "nowrap" }}>Most Popular</div>
                  )}
                  {isSel && (
                    <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: "linear-gradient(135deg,#22C55E,#16A34A)", color: "#fff", borderRadius: 100, padding: "4px 18px", fontSize: 11, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", whiteSpace: "nowrap" }}>✓ Selected</div>
                  )}
                  <div style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase", color: isSel ? "#818CF8" : "rgba(255,255,255,0.35)", marginBottom: 12, marginTop: p.popular || isSel ? 8 : 0 }}>{p.label}</div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 48, color: "#fff", lineHeight: 1, marginBottom: 6 }}>AED {p.price.toLocaleString()}</div>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 24, lineHeight: 1.6 }}>{p.tagline}</p>
                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 20, marginBottom: 28, flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
                    {p.features.map((f) => (
                      <div key={f} style={{ display: "flex", gap: 10, fontSize: 13, color: "rgba(255,255,255,0.6)", alignItems: "flex-start" }}>
                        <span style={{ color: isSel ? "#4ADE80" : BLUE, flexShrink: 0, marginTop: 1 }}>✓</span>{f}
                      </div>
                    ))}
                    {p.expedited && (
                      <div style={{ display: "flex", gap: 8, marginTop: 6, background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.2)", borderRadius: 8, padding: "7px 10px", fontSize: 12, color: "#FCD34D", alignItems: "center" }}>
                        <span>⚡</span> Two-day expedited available
                      </div>
                    )}
                  </div>
                  <button onClick={() => pickPlan(p.id)} style={{ display: "block", width: "100%", background: isSel ? "linear-gradient(135deg,#22C55E,#16A34A)" : p.popular ? BTN_GRAD : "rgba(255,255,255,0.06)", border: isSel || p.popular ? "none" : "1px solid rgba(255,255,255,0.15)", color: "#fff", borderRadius: 12, padding: "14px 20px", fontWeight: 900, fontSize: 14, cursor: "pointer", letterSpacing: "0.05em", fontFamily: "inherit", transition: "all 0.2s" }}>
                    {isSel ? "✓ Plan Selected — Fill Form Below" : `Select ${p.label} Check`}
                  </button>
                </div>
              );
            })}
          </div>
          {flow === "idle" && (
            <p style={{ textAlign: "center", marginTop: 20, fontSize: 13, color: "rgba(255,255,255,0.3)" }}>↑ Select a plan above to begin your application</p>
          )}
        </div>
      </section>

      {/* ── APPLICATION FORM ────────────────────────────────────────── */}
      <div id="section-apply" ref={formRef} style={{ scrollMarginTop: 80 }}>
        {flow !== "idle" && flow !== "success" && plan && (
          <section style={{ padding: "0 32px 80px" }}>
            <div style={{ maxWidth: 860, margin: "0 auto" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32, flexWrap: "wrap", gap: 16 }}>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", color: BLUE, marginBottom: 8 }}>Apply Now</div>
                  <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(24px, 3vw, 36px)", lineHeight: 1.1 }}>Apply for: {plan.label} Check</h2>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>Total</div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 40, color: "#fff", lineHeight: 1 }}>AED {totalPrice.toLocaleString()}</div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Delivery toggle — only shown for Standard */}
                {plan.expedited && (
                  <div style={{ marginBottom: 28 }}>
                    <div style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 12 }}>Delivery Speed</div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                      <button type="button" onClick={() => setDelivery("standard")} style={{ background: delivery === "standard" ? "rgba(7,8,228,0.12)" : "rgba(255,255,255,0.02)", border: delivery === "standard" ? "2px solid rgba(7,8,228,0.5)" : "1px solid rgba(255,255,255,0.1)", borderRadius: 14, padding: "16px 20px", cursor: "pointer", textAlign: "left", fontFamily: "inherit", transition: "all 0.15s" }}>
                        <div style={{ fontSize: 13, fontWeight: 700, color: delivery === "standard" ? "#818CF8" : "rgba(255,255,255,0.7)", marginBottom: 4 }}>Standard Delivery</div>
                        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>Five working days · Included</div>
                      </button>
                      <button type="button" onClick={() => setDelivery("expedited")} style={{ background: delivery === "expedited" ? "rgba(245,158,11,0.08)" : "rgba(255,255,255,0.02)", border: delivery === "expedited" ? "2px solid rgba(245,158,11,0.5)" : "1px solid rgba(255,255,255,0.1)", borderRadius: 14, padding: "16px 20px", cursor: "pointer", textAlign: "left", fontFamily: "inherit", transition: "all 0.15s" }}>
                        <div style={{ fontSize: 13, fontWeight: 700, color: delivery === "expedited" ? "#FCD34D" : "rgba(255,255,255,0.7)", marginBottom: 4 }}>⚡ Two-Day Expedited</div>
                        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>Results within 2 working days</div>
                      </button>
                    </div>
                  </div>
                )}

                {!plan.expedited && (
                  <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: "12px 16px", marginBottom: 24, fontSize: 13, color: "rgba(255,255,255,0.4)", display: "flex", gap: 10 }}>
                    <span style={{ flexShrink: 0 }}>📅</span>
                    {selectedPlan === "basic" ? "Basic plan: standard 5-working-day delivery only. Upgrade to Standard for two-day expedited." : "Standard 5-working-day delivery."}
                  </div>
                )}

                {/* Fields */}
                <div style={{ ...GLASS, padding: 28, marginBottom: 16 }}>
                  <div style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 20 }}>Your Details</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                    <div>
                      <label style={lbl}>Full Name *</label>
                      <input type="text" style={inp("name")} placeholder="As on passport" value={form.name} onChange={update("name")} />
                      {errors.name && <div style={{ fontSize: 11, color: "#F87171", marginTop: 4 }}>{errors.name}</div>}
                    </div>
                    <div>
                      <label style={lbl}>Email Address *</label>
                      <input type="email" style={inp("email")} placeholder="Results delivered here" value={form.email} onChange={update("email")} />
                      {errors.email && <div style={{ fontSize: 11, color: "#F87171", marginTop: 4 }}>{errors.email}</div>}
                    </div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                    <div>
                      <label style={lbl}>Passport Number *</label>
                      <input type="text" style={inp("passport")} placeholder="Current passport number" value={form.passport} onChange={update("passport")} />
                      {errors.passport && <div style={{ fontSize: 11, color: "#F87171", marginTop: 4 }}>{errors.passport}</div>}
                    </div>
                    <div>
                      <label style={lbl}>Nationality *</label>
                      <input type="text" style={inp("nationality")} placeholder="Country of passport" value={form.nationality} onChange={update("nationality")} />
                      {errors.nationality && <div style={{ fontSize: 11, color: "#F87171", marginTop: 4 }}>{errors.nationality}</div>}
                    </div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                    <div>
                      <label style={lbl}>Phone / WhatsApp</label>
                      <input type="tel" style={inp("phone")} placeholder="+971 50 000 0000" value={form.phone} onChange={update("phone")} />
                    </div>
                    <div>
                      <label style={lbl}>Emirates ID <span style={{ color: "rgba(255,255,255,0.2)", fontWeight: 400, textTransform: "none", letterSpacing: 0 }}>— optional</span></label>
                      <input type="text" style={inp("emiratesId")} placeholder="784-XXXX-XXXXXXX-X" value={form.emiratesId} onChange={update("emiratesId")} />
                    </div>
                  </div>

                  {/* Document link */}
                  <div>
                    <label style={lbl}>Passport / Document Link <span style={{ color: "rgba(255,255,255,0.2)", fontWeight: 400, textTransform: "none", letterSpacing: 0 }}>— optional</span></label>
                    <input type="url" style={inp("docLink")} placeholder="Google Drive, Dropbox, OneDrive or any shareable link" value={form.docLink} onChange={update("docLink")} />
                    <div style={{ marginTop: 10, background: "rgba(7,8,228,0.06)", border: "1px solid rgba(7,8,228,0.15)", borderRadius: 10, padding: "12px 16px", display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ color: "#818CF8", flexShrink: 0, fontSize: 16, marginTop: 1 }}>ℹ</span>
                      <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, margin: 0 }}>
                        Don&apos;t have a shareable link? Simply email your passport copy and residence visa to{" "}
                        <strong style={{ color: "#818CF8" }}>care@wirestork.com</strong>{" "}
                        with your order number in the subject line after completing payment.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Order summary */}
                <div style={{ background: "rgba(7,8,228,0.06)", border: "1px solid rgba(7,8,228,0.15)", borderRadius: 14, padding: "16px 20px", marginBottom: 16, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
                  <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                    <div><div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 2 }}>Plan</div><div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>{plan.label}</div></div>
                    <div><div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 2 }}>Delivery</div><div style={{ fontSize: 14, fontWeight: 700, color: effectiveDelivery === "expedited" ? "#FCD34D" : "#fff" }}>{effectiveDelivery === "expedited" ? "⚡ 2 Working Days" : "5 Working Days"}</div></div>
                    <div><div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 2 }}>Coverage</div><div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>All UAE Emirates</div></div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 2 }}>Total (incl. VAT)</div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 24, color: "#fff" }}>AED {Math.round(totalPrice * 1.05).toLocaleString()}</div>
                  </div>
                </div>

                {errors.submit && (
                  <div style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 10, padding: "12px 16px", color: "#F87171", fontSize: 13, marginBottom: 16 }}>{errors.submit}</div>
                )}

                <button type="submit" disabled={submitting} style={{ width: "100%", background: submitting ? "rgba(255,255,255,0.08)" : BTN_GRAD, color: "#fff", border: "none", borderRadius: 14, padding: "17px 24px", fontWeight: 900, fontSize: 16, cursor: submitting ? "not-allowed" : "pointer", fontFamily: "inherit", letterSpacing: "0.04em", marginBottom: 10 }}>
                  {submitting ? "Processing your request..." : `Proceed to Secure Payment — AED ${Math.round(totalPrice * 1.05).toLocaleString()} →`}
                </button>
                <p style={{ textAlign: "center", fontSize: 12, color: "rgba(255,255,255,0.25)", margin: 0 }}>🔒 Encrypted · Stripe secured · No card data stored on our servers</p>
                <div style={{ marginTop: 14, textAlign: "center" }}>
                  <button type="button" onClick={() => { setFlow("idle"); setSelectedPlan(null); setErrors({}); }} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.3)", fontSize: 12, cursor: "pointer", fontFamily: "inherit" }}>← Change plan</button>
                </div>
              </form>
            </div>
          </section>
        )}

        {/* ── SUCCESS ────────────────────────────────────────────────── */}
        {flow === "success" && orderId && plan && (
          <section style={{ padding: "0 32px 80px" }}>
            <div style={{ maxWidth: 680, margin: "0 auto" }}>
              <div style={{ ...GLASS, padding: 48, textAlign: "center", border: "1px solid rgba(34,197,94,0.25)", background: "rgba(34,197,94,0.04)" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", fontSize: 28 }}>✓</div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 32, color: "#4ADE80", marginBottom: 8 }}>Order Confirmed</h2>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 20, color: "rgba(255,255,255,0.5)", marginBottom: 20 }}>{orderId}</div>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: 32, maxWidth: 480, margin: "0 auto 32px" }}>
                  We&apos;ve received your <strong style={{ color: "#fff" }}>{plan.label} Court & Police Case Check</strong>.{" "}
                  {effectiveDelivery === "expedited" ? "Expect your report within 2 working days." : "Expect your report within 5 working days."}{" "}
                  A confirmation has been sent to <strong style={{ color: "#fff" }}>{form.email}</strong>.
                </p>

                <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginBottom: 24 }}>
                  {["📧 Confirmation sent to your email", "⏱ Processing begins within 2 hours", "📋 Check your spam folder"].map((tag) => (
                    <span key={tag} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 100, padding: "5px 14px", fontSize: 12, color: "rgba(255,255,255,0.5)" }}>{tag}</span>
                  ))}
                </div>

                {/* Email docs reminder when no link provided */}
                {!form.docLink && (
                  <div style={{ background: "rgba(7,8,228,0.08)", border: "1px solid rgba(7,8,228,0.2)", borderRadius: 14, padding: "16px 20px", marginBottom: 28, display: "flex", gap: 12, alignItems: "flex-start", textAlign: "left" }}>
                    <span style={{ fontSize: 20, flexShrink: 0 }}>📎</span>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 14, color: "#fff", marginBottom: 4 }}>Send us your documents</div>
                      <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, margin: 0 }}>
                        Email your passport copy, Emirates ID, and latest residence visa to{" "}
                        <strong style={{ color: "#818CF8" }}>care@wirestork.com</strong>{" "}
                        with subject line: <strong style={{ color: "#fff" }}>{orderId}</strong>
                      </p>
                    </div>
                  </div>
                )}

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 28 }}>
                  {[{ label: "Plan", value: plan.label }, { label: "Delivery", value: effectiveDelivery === "expedited" ? "2 Working Days" : "5 Working Days" }, { label: "Order ID", value: orderId }].map(({ label, value }) => (
                    <div key={label} style={{ background: "rgba(255,255,255,0.03)", borderRadius: 12, padding: 16, textAlign: "center" }}>
                      <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>{label}</div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>{value}</div>
                    </div>
                  ))}
                </div>
                <a href="/reach-us" style={{ display: "inline-block", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.6)", borderRadius: 10, padding: "10px 22px", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>Questions? Contact us</a>
              </div>
            </div>
          </section>
        )}

        {flow === "idle" && <div style={{ height: 1 }} />}
      </div>
    </>
  );
}
