"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const BLUE = "#0708E4";
const BTN_GRAD = "linear-gradient(135deg, #0708E4 0%, #6366F1 100%)";
const GLASS = { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 24 } as const;

const PLANS = [
  {
    id: "basic" as const,
    label: "Essential",
    price: 499,
    tagline: "One legal question, answered clearly by a licensed UAE or Saudi lawyer",
    features: ["Written legal opinion within 6 business hours", "One legal question or concern", "Document review up to 3 pages", "Covers UAE & Saudi Arabia"],
  },
  {
    id: "standard" as const,
    label: "Standard",
    price: 999,
    popular: true,
    tagline: "Full case review with actionable legal report and follow-up",
    features: ["Written legal opinion within 6 business hours", "Full case assessment", "Document review up to 10 pages", "Legal Action Report with next steps", "One follow-up email exchange", "Covers UAE, Saudi Arabia & Bahrain"],
  },
  {
    id: "advanced" as const,
    label: "Premium",
    price: 1999,
    tagline: "Ongoing support with dedicated lawyer assignment and court strategy",
    features: ["Priority response within 2 hours", "Unlimited questions for 7 days", "Full document review", "Detailed Legal Action Report", "Court filing strategy if needed", "Dedicated lawyer assignment", "Covers all GCC jurisdictions"],
  },
];

type PlanId = "basic" | "standard" | "advanced";
type FlowState = "idle" | "selected" | "submitting" | "success";

const NAV_SECTIONS = [
  { id: "section-overview", label: "Overview" },
  { id: "product-pricing", label: "Pricing" },
  { id: "section-apply", label: "Book Now" },
  { id: "section-how", label: "How it Works" },
  { id: "section-lawyers", label: "Our Lawyers" },
  { id: "section-specialties", label: "Specialties" },
  { id: "section-testimonials", label: "Testimonials" },
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
          <button onClick={() => scrollTo("section-apply")} style={{ width: "100%", background: BTN_GRAD, color: "#fff", border: "none", borderRadius: 10, padding: "9px 10px", fontSize: 11, fontWeight: 900, cursor: "pointer", fontFamily: "inherit" }}>Book Consultation →</button>
        </div>
      </div>
    </div>
  );
}

export default function ConsultationClient() {
  const [selectedPlan, setSelectedPlan] = useState<PlanId | null>(null);
  const [flow, setFlow] = useState<FlowState>("idle");
  const [orderId, setOrderId] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState({
    name: "", email: "", phone: "", nationality: "",
    country: "UAE", category: "", concern: "", docLink: "",
  });

  const update = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

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
    if (!form.concern.trim()) errs.concern = "Please describe your legal concern";
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
          productSlug: `consultation-${selectedPlan}`,
          name: form.name, email: form.email, phone: form.phone, nationality: form.nationality,
          notes: `Country: ${form.country} | Category: ${form.category} | Concern: ${form.concern}${form.docLink ? ` | Docs: ${form.docLink}` : ""} | Plan: ${plan.label} AED ${plan.price}`,
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
        input:focus, textarea:focus, select:focus { border-color: rgba(7,8,228,0.5) !important; box-shadow: 0 0 0 3px rgba(7,8,228,0.08); }
        select option { background: #111; color: #fff; }
      `}</style>

      <FloatingNav />

      {/* ── PRICING ─────────────────────────────────────────────────── */}
      <section id="product-pricing" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "80px 32px", scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 14 }}>Transparent Pricing</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em", marginBottom: 14 }}>Choose Your Consultation Plan</h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 17 }}>Licensed UAE & Saudi lawyers · <strong style={{ color: "#fff" }}>Same-day legal advice</strong> · 100% confidential</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {PLANS.map((p) => {
              const isSel = selectedPlan === p.id;
              return (
                <div key={p.id} style={{ background: isSel ? "rgba(7,8,228,0.1)" : "rgba(255,255,255,0.02)", border: isSel ? "2px solid rgba(7,8,228,0.6)" : p.popular ? "2px solid rgba(7,8,228,0.3)" : "1px solid rgba(255,255,255,0.08)", borderRadius: 24, padding: 32, display: "flex", flexDirection: "column", position: "relative", transition: "all 0.2s" }}>
                  {p.popular && !isSel && <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: BTN_GRAD, color: "#fff", borderRadius: 100, padding: "4px 18px", fontSize: 11, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", whiteSpace: "nowrap" }}>Most Popular</div>}
                  {isSel && <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: "linear-gradient(135deg,#22C55E,#16A34A)", color: "#fff", borderRadius: 100, padding: "4px 18px", fontSize: 11, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", whiteSpace: "nowrap" }}>✓ Selected</div>}
                  <div style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase", color: isSel ? "#818CF8" : "rgba(255,255,255,0.35)", marginBottom: 12, marginTop: p.popular || isSel ? 8 : 0 }}>{p.label}</div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 48, color: "#fff", lineHeight: 1, marginBottom: 6 }}>AED {p.price.toLocaleString()}</div>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 24, lineHeight: 1.6 }}>{p.tagline}</p>
                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 20, marginBottom: 28, flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
                    {p.features.map((f) => (
                      <div key={f} style={{ display: "flex", gap: 10, fontSize: 13, color: "rgba(255,255,255,0.6)", alignItems: "flex-start" }}>
                        <span style={{ color: isSel ? "#4ADE80" : BLUE, flexShrink: 0, marginTop: 1 }}>✓</span>{f}
                      </div>
                    ))}
                  </div>
                  <button onClick={() => pickPlan(p.id)} style={{ display: "block", width: "100%", background: isSel ? "linear-gradient(135deg,#22C55E,#16A34A)" : p.popular ? BTN_GRAD : "rgba(255,255,255,0.06)", border: isSel || p.popular ? "none" : "1px solid rgba(255,255,255,0.15)", color: "#fff", borderRadius: 12, padding: "14px 20px", fontWeight: 900, fontSize: 14, cursor: "pointer", letterSpacing: "0.05em", fontFamily: "inherit", transition: "all 0.2s" }}>
                    {isSel ? "✓ Plan Selected — Fill Form Below" : `Book ${p.label} Consultation`}
                  </button>
                </div>
              );
            })}
          </div>
          {flow === "idle" && <p style={{ textAlign: "center", marginTop: 20, fontSize: 13, color: "rgba(255,255,255,0.3)" }}>↑ Select a plan above to book your consultation</p>}
        </div>
      </section>

      {/* ── BOOKING FORM ────────────────────────────────────────────── */}
      <div id="section-apply" ref={formRef} style={{ scrollMarginTop: 80 }}>
        {flow !== "idle" && flow !== "success" && plan && (
          <section style={{ padding: "0 32px 80px" }}>
            <div style={{ maxWidth: 860, margin: "0 auto" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32, flexWrap: "wrap", gap: 16 }}>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", color: BLUE, marginBottom: 8 }}>Book Now</div>
                  <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(24px, 3vw, 36px)", lineHeight: 1.1 }}>Book: {plan.label} Consultation</h2>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>Total</div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 40, color: "#fff", lineHeight: 1 }}>AED {plan.price.toLocaleString()}</div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div style={{ ...GLASS, padding: 28, marginBottom: 16 }}>
                  <div style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 20 }}>Your Details</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                    <div>
                      <label style={lbl}>Full Name *</label>
                      <input type="text" style={inp("name")} placeholder="Your full name" value={form.name} onChange={update("name")} />
                      {errors.name && <div style={{ fontSize: 11, color: "#F87171", marginTop: 4 }}>{errors.name}</div>}
                    </div>
                    <div>
                      <label style={lbl}>Email Address *</label>
                      <input type="email" style={inp("email")} placeholder="Legal opinion delivered here" value={form.email} onChange={update("email")} />
                      {errors.email && <div style={{ fontSize: 11, color: "#F87171", marginTop: 4 }}>{errors.email}</div>}
                    </div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                    <div>
                      <label style={lbl}>Phone / WhatsApp</label>
                      <input type="tel" style={inp("phone")} placeholder="+971 50 000 0000" value={form.phone} onChange={update("phone")} />
                    </div>
                    <div>
                      <label style={lbl}>Nationality</label>
                      <input type="text" style={inp("nationality")} placeholder="Country of passport" value={form.nationality} onChange={update("nationality")} />
                    </div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                    <div>
                      <label style={lbl}>Country of Issue</label>
                      <select style={{ ...inp("country") }} value={form.country} onChange={update("country")}>
                        <option>UAE</option>
                        <option>Saudi Arabia</option>
                        <option>Bahrain</option>
                        <option>Qatar</option>
                        <option>Kuwait</option>
                        <option>Oman</option>
                      </select>
                    </div>
                    <div>
                      <label style={lbl}>Legal Category</label>
                      <select style={{ ...inp("category") }} value={form.category} onChange={update("category")}>
                        <option value="">Select category...</option>
                        <option>Travel Ban / Immigration</option>
                        <option>Employment / Labour</option>
                        <option>Debt / Bounced Cheque</option>
                        <option>Business / Commercial</option>
                        <option>Family Law</option>
                        <option>Real Estate</option>
                        <option>Criminal / Court Case</option>
                        <option>Cybercrime / Tech Law</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <label style={lbl}>Describe Your Legal Concern *</label>
                    <textarea style={{ ...inp("concern"), resize: "vertical", minHeight: 120 }} placeholder="Briefly describe your situation — what happened, when, what you need clarity on. The more detail you provide, the better your lawyer can advise you." value={form.concern} onChange={update("concern")} />
                    {errors.concern && <div style={{ fontSize: 11, color: "#F87171", marginTop: 4 }}>{errors.concern}</div>}
                  </div>
                  <div>
                    <label style={lbl}>Document Link <span style={{ color: "rgba(255,255,255,0.2)", fontWeight: 400, textTransform: "none", letterSpacing: 0 }}>— optional</span></label>
                    <input type="url" style={inp("docLink")} placeholder="Google Drive, Dropbox, OneDrive or any shareable link" value={form.docLink} onChange={update("docLink")} />
                    <div style={{ marginTop: 10, background: "rgba(7,8,228,0.06)", border: "1px solid rgba(7,8,228,0.15)", borderRadius: 10, padding: "12px 16px", display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ color: "#818CF8", flexShrink: 0, fontSize: 16, marginTop: 1 }}>ℹ</span>
                      <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, margin: 0 }}>
                        Don&apos;t have a link? Email documents to <strong style={{ color: "#818CF8" }}>care@wirestork.com</strong> with your order number after payment.
                      </p>
                    </div>
                  </div>
                </div>

                <div style={{ background: "rgba(7,8,228,0.06)", border: "1px solid rgba(7,8,228,0.15)", borderRadius: 14, padding: "16px 20px", marginBottom: 16, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
                  <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                    <div><div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 2 }}>Plan</div><div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>{plan.label}</div></div>
                    <div><div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 2 }}>Response</div><div style={{ fontSize: 14, fontWeight: 700, color: selectedPlan === "advanced" ? "#FCD34D" : "#fff" }}>{selectedPlan === "advanced" ? "⚡ Within 2 Hours" : "Within 6 Hours"}</div></div>
                    <div><div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 2 }}>Coverage</div><div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>{selectedPlan === "advanced" ? "All GCC" : "UAE, KSA, Bahrain"}</div></div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 2 }}>Total (incl. VAT)</div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 24, color: "#fff" }}>AED {Math.round(plan.price * 1.05).toLocaleString()}</div>
                  </div>
                </div>

                {errors.submit && <div style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 10, padding: "12px 16px", color: "#F87171", fontSize: 13, marginBottom: 16 }}>{errors.submit}</div>}

                <button type="submit" disabled={submitting} style={{ width: "100%", background: submitting ? "rgba(255,255,255,0.08)" : BTN_GRAD, color: "#fff", border: "none", borderRadius: 14, padding: "17px 24px", fontWeight: 900, fontSize: 16, cursor: submitting ? "not-allowed" : "pointer", fontFamily: "inherit", letterSpacing: "0.04em", marginBottom: 10 }}>
                  {submitting ? "Processing..." : `Proceed to Secure Payment — AED ${Math.round(plan.price * 1.05).toLocaleString()} →`}
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
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 32, color: "#4ADE80", marginBottom: 8 }}>Consultation Booked</h2>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 20, color: "rgba(255,255,255,0.5)", marginBottom: 20 }}>{orderId}</div>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: 32, maxWidth: 480, margin: "0 auto 32px" }}>
                  Your <strong style={{ color: "#fff" }}>{plan.label} Consultation</strong> is confirmed. A licensed lawyer will reach out to <strong style={{ color: "#fff" }}>{form.email}</strong> within {selectedPlan === "advanced" ? "2 hours" : "6 business hours"}.
                </p>
                <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginBottom: 24 }}>
                  {["📧 Confirmation sent", "⚖️ Lawyer assigned shortly", "🔒 Fully confidential"].map((t) => (
                    <span key={t} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 100, padding: "5px 14px", fontSize: 12, color: "rgba(255,255,255,0.5)" }}>{t}</span>
                  ))}
                </div>
                {!form.docLink && (
                  <div style={{ background: "rgba(7,8,228,0.08)", border: "1px solid rgba(7,8,228,0.2)", borderRadius: 14, padding: "16px 20px", marginBottom: 24, display: "flex", gap: 12, alignItems: "flex-start", textAlign: "left" }}>
                    <span style={{ fontSize: 20, flexShrink: 0 }}>📎</span>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 14, color: "#fff", marginBottom: 4 }}>Send your documents</div>
                      <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, margin: 0 }}>
                        Email any relevant documents to <strong style={{ color: "#818CF8" }}>care@wirestork.com</strong> with subject: <strong style={{ color: "#fff" }}>{orderId}</strong>
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
