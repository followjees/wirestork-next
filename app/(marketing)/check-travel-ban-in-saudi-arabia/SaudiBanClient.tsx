"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const BLUE = "#0708E4";
const BTN_GRAD = "linear-gradient(135deg, #0708E4 0%, #6366F1 100%)";
const BTN_CONTRAST = "linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)";
const GLASS = { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 24 } as const;

const PLANS = [
  {
    id: "micro" as const,
    label: "Micro Saudi Ban Check",
    currency: "SAR",
    price: 500,
    tagline: "Ideal to check travel ban in Saudi Arabia arising from Huroob status",
    features: [
      "Identify prevalence of Saudi travel bans with Jawazat",
      "Identify prevalence of travel bans with Ministry of Labor (MOL)",
      "Iqama required (can be expired)",
      "No case filing lookups",
    ],
    note: null,
  },
  {
    id: "standard" as const,
    label: "Standard Saudi Ban Check",
    currency: "SAR",
    price: 2500,
    tagline: "Comprehensive Saudi travel ban check including criminal and civil cases",
    popular: true,
    features: [
      "Statutory lookup of criminal and civil filings across Saudi courts and police stations",
      "Case numbers, jurisdictions, and current statuses (where available)",
      "Lead time: ten working days for complete Saudi travel ban verification",
      "Identify potential ban extensions to Qatar, UAE, Oman, Bahrain, and Libya* (add-on)",
      "Identify Interpol Red Notices* (add-on)",
      "Detailed resolution plan and legal guidance (where a lift is feasible)",
    ],
    note: "* Add-ons priced separately: Interpol check $50; cross-border extension scan $250.",
  },
];

type PlanId = "micro" | "standard";
type FlowState = "idle" | "selected" | "submitting" | "success";

const NAV_SECTIONS = [
  { id: "section-overview", label: "Overview" },
  { id: "product-pricing", label: "Pricing" },
  { id: "section-apply", label: "Apply Now" },
  { id: "section-how", label: "How it Works" },
  { id: "section-comparison", label: "vs Najiz / Absher" },
  { id: "section-docs", label: "Documents Required" },
  { id: "section-resources", label: "Gov. Resources" },
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
          <button onClick={() => scrollTo("section-apply")} style={{ width: "100%", background: BTN_GRAD, color: "#fff", border: "none", borderRadius: 10, padding: "9px 10px", fontSize: 11, fontWeight: 900, cursor: "pointer", fontFamily: "inherit" }}>Check Saudi Ban →</button>
        </div>
      </div>
    </div>
  );
}

export default function SaudiBanClient() {
  const [selectedPlan, setSelectedPlan] = useState<PlanId | null>(null);
  const [flow, setFlow] = useState<FlowState>("idle");
  const [orderId, setOrderId] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState({
    name: "", email: "", phone: "", passport: "",
    iqama: "", nationality: "", docLink: "",
  });

  const update = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement>) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const plan = PLANS.find((p) => p.id === selectedPlan);

  const pickPlan = useCallback((id: PlanId) => {
    setSelectedPlan(id);
    setFlow("selected");
    setTimeout(() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
  }, []);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = "Valid email required";
    if (!form.passport.trim()) errs.passport = "Required";
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
          productSlug: `saudi-ban-${selectedPlan}`,
          name: form.name, email: form.email, phone: form.phone, nationality: form.nationality,
          notes: `Passport: ${form.passport}${form.iqama ? ` | Iqama: ${form.iqama}` : ""}${form.docLink ? ` | Docs: ${form.docLink}` : ""} | Plan: ${plan.label} ${plan.currency} ${plan.price}`,
        }),
      });
      const data = await res.json();
      setOrderId(data.orderId ?? `WS-${Date.now().toString().slice(-6)}`);
      setFlow("success");
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

  const lbl: React.CSSProperties = { display: "block", fontSize: 10, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 7 };

  return (
    <>
      <style>{`
        @media (max-width: 1100px) { .floating-nav-hide-mobile { display: none !important; } }
        input:focus { border-color: rgba(7,8,228,0.5) !important; box-shadow: 0 0 0 3px rgba(7,8,228,0.08); }
      `}</style>

      <FloatingNav />

      {/* ── PRICING ─────────────────────────────────────────────────── */}
      <section id="product-pricing" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "80px 32px", scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 14 }}>Saudi Travel Ban Check Pricing</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em", marginBottom: 14 }}>Saudi Travel Ban Check Pricing</h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 17 }}>Standard lead time: <strong style={{ color: "#fff" }}>ten working days</strong> (Standard plan). Choose the Saudi ban check service that meets your needs.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {PLANS.map((p) => {
              const isSel = selectedPlan === p.id;
              return (
                <div key={p.id} style={{ background: isSel ? "rgba(7,8,228,0.1)" : "rgba(255,255,255,0.02)", border: isSel ? "2px solid rgba(7,8,228,0.6)" : p.popular ? "2px solid rgba(7,8,228,0.3)" : "1px solid rgba(255,255,255,0.08)", borderRadius: 24, padding: 32, display: "flex", flexDirection: "column", position: "relative", transition: "all 0.2s" }}>
                  {p.popular && !isSel && <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: BTN_GRAD, color: "#fff", borderRadius: 100, padding: "4px 18px", fontSize: 11, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", whiteSpace: "nowrap" }}>Most Popular</div>}
                  {isSel && <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: "linear-gradient(135deg,#22C55E,#16A34A)", color: "#fff", borderRadius: 100, padding: "4px 18px", fontSize: 11, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", whiteSpace: "nowrap" }}>✓ Selected</div>}
                  <div style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase", color: isSel ? "#818CF8" : "rgba(255,255,255,0.35)", marginBottom: 12, marginTop: p.popular || isSel ? 8 : 0 }}>{p.label}</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 6 }}>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 48, color: "#fff", lineHeight: 1 }}>{p.currency} {p.price.toLocaleString()}</div>
                  </div>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 24, lineHeight: 1.6 }}>{p.tagline}</p>
                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 20, marginBottom: p.note ? 12 : 28, flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
                    {p.features.map((f) => (
                      <div key={f} style={{ display: "flex", gap: 10, fontSize: 13, color: "rgba(255,255,255,0.6)", alignItems: "flex-start" }}>
                        <span style={{ color: isSel ? "#4ADE80" : BLUE, flexShrink: 0, marginTop: 1 }}>✓</span>{f}
                      </div>
                    ))}
                  </div>
                  {p.note && <p style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", fontStyle: "italic", marginBottom: 20 }}>{p.note}</p>}
                  <button onClick={() => pickPlan(p.id)} style={{ display: "block", width: "100%", background: isSel ? "linear-gradient(135deg,#22C55E,#16A34A)" : p.popular ? BTN_GRAD : "rgba(255,255,255,0.06)", border: isSel || p.popular ? "none" : "1px solid rgba(255,255,255,0.15)", color: "#fff", borderRadius: 12, padding: "14px 20px", fontWeight: 900, fontSize: 14, cursor: "pointer", letterSpacing: "0.05em", fontFamily: "inherit", transition: "all 0.2s" }}>
                    {isSel ? "✓ Plan Selected — Fill Form Below" : `Request ${p.label}`}
                  </button>
                </div>
              );
            })}
          </div>
          {flow === "idle" && <p style={{ textAlign: "center", marginTop: 20, fontSize: 13, color: "rgba(255,255,255,0.3)" }}>↑ Select a plan above to begin your application</p>}
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
                  <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(24px, 3vw, 36px)", lineHeight: 1.1 }}>Request: {plan.label}</h2>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>Total</div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 40, color: "#fff", lineHeight: 1 }}>{plan.currency} {plan.price.toLocaleString()}</div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
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
                      <label style={lbl}>Nationality</label>
                      <input type="text" style={inp("nationality")} placeholder="Country of passport" value={form.nationality} onChange={update("nationality")} />
                    </div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                    <div>
                      <label style={lbl}>Phone / WhatsApp</label>
                      <input type="tel" style={inp("phone")} placeholder="+966 50 000 0000" value={form.phone} onChange={update("phone")} />
                    </div>
                    <div>
                      <label style={lbl}>Iqama Number <span style={{ color: "rgba(255,255,255,0.2)", fontWeight: 400, textTransform: "none", letterSpacing: 0 }}>— can be expired</span></label>
                      <input type="text" style={inp("iqama")} placeholder="Saudi residence ID number" value={form.iqama} onChange={update("iqama")} />
                    </div>
                  </div>
                  <div>
                    <label style={lbl}>Document Link <span style={{ color: "rgba(255,255,255,0.2)", fontWeight: 400, textTransform: "none", letterSpacing: 0 }}>— optional</span></label>
                    <input type="url" style={inp("docLink")} placeholder="Google Drive, Dropbox, OneDrive or any shareable link" value={form.docLink} onChange={update("docLink")} />
                    <div style={{ marginTop: 10, background: "rgba(7,8,228,0.06)", border: "1px solid rgba(7,8,228,0.15)", borderRadius: 10, padding: "12px 16px", display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ color: "#818CF8", flexShrink: 0, fontSize: 16, marginTop: 1 }}>ℹ</span>
                      <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, margin: 0 }}>
                        Don&apos;t have a link? Email your passport, Iqama, and Saudi visa copies to{" "}
                        <strong style={{ color: "#818CF8" }}>care@wirestork.com</strong>{" "}
                        with your order number after payment.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Order summary */}
                <div style={{ background: "rgba(7,8,228,0.06)", border: "1px solid rgba(7,8,228,0.15)", borderRadius: 14, padding: "16px 20px", marginBottom: 16, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
                  <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                    <div><div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 2 }}>Plan</div><div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>{selectedPlan === "micro" ? "Micro" : "Standard"}</div></div>
                    <div><div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 2 }}>Lead Time</div><div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>{selectedPlan === "micro" ? "Varies" : "10 Working Days"}</div></div>
                    <div><div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 2 }}>Coverage</div><div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>Kingdom-wide</div></div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 2 }}>Total</div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 24, color: "#fff" }}>{plan.currency} {plan.price.toLocaleString()}</div>
                  </div>
                </div>

                {errors.submit && <div style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 10, padding: "12px 16px", color: "#F87171", fontSize: 13, marginBottom: 16 }}>{errors.submit}</div>}

                <button type="submit" disabled={submitting} style={{ width: "100%", background: submitting ? "rgba(255,255,255,0.08)" : BTN_GRAD, color: "#fff", border: "none", borderRadius: 14, padding: "17px 24px", fontWeight: 900, fontSize: 16, cursor: submitting ? "not-allowed" : "pointer", fontFamily: "inherit", letterSpacing: "0.04em", marginBottom: 10 }}>
                  {submitting ? "Processing..." : `Proceed to Secure Payment — ${plan.currency} ${plan.price.toLocaleString()} →`}
                </button>
                <p style={{ textAlign: "center", fontSize: 12, color: "rgba(255,255,255,0.25)", margin: 0 }}>🔒 Encrypted · Stripe secured · No card data stored</p>
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
                  We&apos;ve received your <strong style={{ color: "#fff" }}>{plan.label}</strong> request. Results delivered to <strong style={{ color: "#fff" }}>{form.email}</strong>{selectedPlan === "standard" ? " within 10 working days" : ""}.
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
                        Email your passport, Iqama, and Saudi visa copies to <strong style={{ color: "#818CF8" }}>care@wirestork.com</strong> with subject: <strong style={{ color: "#fff" }}>{orderId}</strong>
                      </p>
                    </div>
                  </div>
                )}
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
