"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const BLUE = "#0708E4";
const BTN_GRAD = "linear-gradient(135deg, #0708E4 0%, #6366F1 100%)";
const GLASS = { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 24 } as const;

const PACKAGES = [
  {
    id: "uae" as const,
    flag: "🇦🇪",
    country: "United Arab Emirates",
    label: "UAE Background Check",
    from: "AED 20",
    turnaround: "1–6 days",
    checks: ["Identity & Emirates ID Verification", "Employment History Validation", "Criminal Record & Police Clearance", "Travel Ban Status Check", "Education Credential Attestation", "Professional License Verification"],
  },
  {
    id: "ksa" as const,
    flag: "🇸🇦",
    country: "Saudi Arabia",
    label: "KSA Background Check",
    from: "AED 112",
    turnaround: "3–5 days",
    checks: ["Absher Employment Verification", "GOSI Records Validation", "Criminal Background Check", "Education History Attestation", "Identity & Iqama Verification"],
  },
  {
    id: "qatar" as const,
    flag: "🇶🇦",
    country: "Qatar",
    label: "Qatar Background Check",
    from: "AED 120",
    turnaround: "4–6 days",
    checks: ["Criminal History Verification", "Employment Record Check", "Ministry of Interior Clearance", "Education Credential Validation", "Travel Ban Status"],
  },
  {
    id: "kuwait" as const,
    flag: "🇰🇼",
    country: "Kuwait",
    label: "Kuwait Background Check",
    from: "AED 120",
    turnaround: "5–7 days",
    checks: ["Identity & Civil ID Verification", "Employment Background Check", "Criminal Record Search", "Public Authority for Manpower Records", "Litigation & Court Case Search"],
  },
  {
    id: "oman" as const,
    flag: "🇴🇲",
    country: "Oman & Bahrain",
    label: "Oman / Bahrain Background Check",
    from: "AED 112",
    turnaround: "3–7 days",
    checks: ["Royal Oman Police Clearance", "Criminal & Court Records", "LMRA Verification (Bahrain)", "Employment History Validation", "Education & License Verification"],
  },
  {
    id: "international" as const,
    flag: "🌐",
    country: "International",
    label: "International Background Check",
    from: "AED 85",
    turnaround: "7–15 days",
    checks: ["Global Criminal Watchlists", "International Employment Verification", "Academic Credential Authentication", "Interpol Database Screening", "Multi-Country Background Packages"],
    highlight: true,
  },
];

type PackageId = "uae" | "ksa" | "qatar" | "kuwait" | "oman" | "international";
type FlowState = "idle" | "selected" | "submitting" | "success";

const NAV_SECTIONS = [
  { id: "section-overview", label: "Overview" },
  { id: "section-checks", label: "Check Types" },
  { id: "section-order", label: "Order Now" },
  { id: "section-countries", label: "By Country" },
  { id: "section-regulations", label: "Regulations" },
  { id: "section-mobility", label: "Why Regional" },
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
          <button onClick={() => scrollTo("section-order")} style={{ width: "100%", background: BTN_GRAD, color: "#fff", border: "none", borderRadius: 10, padding: "9px 10px", fontSize: 11, fontWeight: 900, cursor: "pointer", fontFamily: "inherit" }}>
            Request a Check →
          </button>
        </div>
      </div>
    </div>
  );
}

export default function BGCheckClient() {
  const [selectedPkg, setSelectedPkg] = useState<PackageId | null>(null);
  const [flow, setFlow] = useState<FlowState>("idle");
  const [orderId, setOrderId] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState({
    candidateName: "", email: "", phone: "", company: "",
    position: "", nationality: "", docLink: "",
  });

  const update = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement>) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const pkg = PACKAGES.find((p) => p.id === selectedPkg);

  const pickPkg = useCallback((id: PackageId) => {
    setSelectedPkg(id);
    setFlow("selected");
    setTimeout(() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
  }, []);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.candidateName.trim()) errs.candidateName = "Required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = "Valid email required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || !pkg) return;
    setSubmitting(true);
    setFlow("submitting");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productSlug: `background-check-${selectedPkg}`,
          name: form.candidateName,
          email: form.email,
          phone: form.phone,
          nationality: form.nationality,
          notes: `Country: ${pkg.country} | Candidate: ${form.candidateName}${form.company ? ` | Company: ${form.company}` : ""}${form.position ? ` | Position: ${form.position}` : ""}${form.docLink ? ` | Docs: ${form.docLink}` : ""} | From: ${pkg.from}`,
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

      {/* ── ORDER SECTION ────────────────────────────────────────────── */}
      <section id="section-order" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "80px 32px", scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 14 }}>Request a Background Check</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em", marginBottom: 14 }}>Select a Country to Begin</h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 17 }}>Pick the country you need screened — then fill in the candidate details below.</p>
          </div>

          {/* Package selector */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14, marginBottom: 40 }}>
            {PACKAGES.map((p) => {
              const isSel = selectedPkg === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => pickPkg(p.id)}
                  style={{ background: isSel ? "rgba(7,8,228,0.12)" : p.highlight ? "rgba(7,8,228,0.05)" : "rgba(255,255,255,0.02)", border: isSel ? "2px solid rgba(7,8,228,0.6)" : p.highlight ? "1px solid rgba(7,8,228,0.2)" : "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "18px 20px", cursor: "pointer", textAlign: "left", fontFamily: "inherit", transition: "all 0.15s", position: "relative" }}
                >
                  {isSel && (
                    <div style={{ position: "absolute", top: -10, right: 12, background: "linear-gradient(135deg,#22C55E,#16A34A)", color: "#fff", borderRadius: 100, padding: "2px 12px", fontSize: 10, fontWeight: 900, letterSpacing: "0.1em" }}>✓ SELECTED</div>
                  )}
                  <div style={{ fontSize: 22, marginBottom: 8 }}>{p.flag}</div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: isSel ? "#818CF8" : "#fff", marginBottom: 4 }}>{p.country}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>From {p.from} · {p.turnaround}</div>
                </button>
              );
            })}
          </div>

          {flow === "idle" && (
            <p style={{ textAlign: "center", fontSize: 13, color: "rgba(255,255,255,0.3)" }}>↑ Select a country above to fill in your request</p>
          )}
        </div>
      </section>

      {/* ── REQUEST FORM ─────────────────────────────────────────────── */}
      <div ref={formRef} style={{ scrollMarginTop: 80 }}>
        {flow !== "idle" && flow !== "success" && pkg && (
          <section style={{ padding: "0 32px 80px" }}>
            <div style={{ maxWidth: 860, margin: "0 auto" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32, flexWrap: "wrap", gap: 16 }}>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", color: BLUE, marginBottom: 8 }}>Background Check Request</div>
                  <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(22px, 3vw, 34px)", lineHeight: 1.1 }}>
                    {pkg.flag} {pkg.label}
                  </h2>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>Starting From</div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 36, color: "#fff", lineHeight: 1 }}>{pkg.from}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", marginTop: 4 }}>⏱ {pkg.turnaround}</div>
                </div>
              </div>

              {/* What's included for selected country */}
              <div style={{ background: "rgba(7,8,228,0.06)", border: "1px solid rgba(7,8,228,0.15)", borderRadius: 14, padding: "16px 20px", marginBottom: 24 }}>
                <div style={{ fontSize: 10, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 12 }}>Checks Included</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 20px" }}>
                  {pkg.checks.map((c) => (
                    <div key={c} style={{ display: "flex", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.65)", alignItems: "flex-start" }}>
                      <span style={{ color: "#4ADE80", flexShrink: 0, marginTop: 2 }}>✓</span>{c}
                    </div>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Candidate details */}
                <div style={{ ...GLASS, padding: 28, marginBottom: 16 }}>
                  <div style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 20 }}>Candidate / Subject Details</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                    <div>
                      <label style={lbl}>Full Name of Candidate *</label>
                      <input type="text" style={inp("candidateName")} placeholder="As on passport or ID" value={form.candidateName} onChange={update("candidateName")} />
                      {errors.candidateName && <div style={{ fontSize: 11, color: "#F87171", marginTop: 4 }}>{errors.candidateName}</div>}
                    </div>
                    <div>
                      <label style={lbl}>Nationality</label>
                      <input type="text" style={inp("nationality")} placeholder="Country of passport" value={form.nationality} onChange={update("nationality")} />
                    </div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                    <div>
                      <label style={lbl}>Position Applied For</label>
                      <input type="text" style={inp("position")} placeholder="Job title or role" value={form.position} onChange={update("position")} />
                    </div>
                    <div>
                      <label style={lbl}>Your Company / Organisation</label>
                      <input type="text" style={inp("company")} placeholder="Requesting employer or entity" value={form.company} onChange={update("company")} />
                    </div>
                  </div>
                </div>

                {/* Contact details */}
                <div style={{ ...GLASS, padding: 28, marginBottom: 16 }}>
                  <div style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 20 }}>Your Contact Details</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                    <div>
                      <label style={lbl}>Email Address *</label>
                      <input type="email" style={inp("email")} placeholder="Report delivered here" value={form.email} onChange={update("email")} />
                      {errors.email && <div style={{ fontSize: 11, color: "#F87171", marginTop: 4 }}>{errors.email}</div>}
                    </div>
                    <div>
                      <label style={lbl}>Phone / WhatsApp</label>
                      <input type="tel" style={inp("phone")} placeholder="+971 50 000 0000" value={form.phone} onChange={update("phone")} />
                    </div>
                  </div>

                  {/* Document link */}
                  <div>
                    <label style={lbl}>Document Link <span style={{ color: "rgba(255,255,255,0.2)", fontWeight: 400, textTransform: "none", letterSpacing: 0 }}>— optional</span></label>
                    <input type="url" style={inp("docLink")} placeholder="Google Drive, Dropbox, OneDrive — passport, ID, CV, etc." value={form.docLink} onChange={update("docLink")} />
                    <div style={{ marginTop: 10, background: "rgba(7,8,228,0.06)", border: "1px solid rgba(7,8,228,0.15)", borderRadius: 10, padding: "12px 16px", display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ color: "#818CF8", flexShrink: 0, fontSize: 16, marginTop: 1 }}>ℹ</span>
                      <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, margin: 0 }}>
                        Don&apos;t have a link? Email the candidate&apos;s passport, ID, and any supporting documents to{" "}
                        <strong style={{ color: "#818CF8" }}>care@wirestork.com</strong>{" "}
                        with your order number after payment.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Order summary */}
                <div style={{ background: "rgba(7,8,228,0.06)", border: "1px solid rgba(7,8,228,0.15)", borderRadius: 14, padding: "16px 20px", marginBottom: 16, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
                  <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                    <div><div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 2 }}>Country</div><div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>{pkg.flag} {pkg.country}</div></div>
                    <div><div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 2 }}>Turnaround</div><div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>{pkg.turnaround}</div></div>
                    <div><div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 2 }}>Checks</div><div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>{pkg.checks.length} included</div></div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 2 }}>Starting From</div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 24, color: "#fff" }}>{pkg.from}</div>
                  </div>
                </div>

                {errors.submit && <div style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 10, padding: "12px 16px", color: "#F87171", fontSize: 13, marginBottom: 16 }}>{errors.submit}</div>}

                <button type="submit" disabled={submitting} style={{ width: "100%", background: submitting ? "rgba(255,255,255,0.08)" : BTN_GRAD, color: "#fff", border: "none", borderRadius: 14, padding: "17px 24px", fontWeight: 900, fontSize: 16, cursor: submitting ? "not-allowed" : "pointer", fontFamily: "inherit", letterSpacing: "0.04em", marginBottom: 10 }}>
                  {submitting ? "Submitting request..." : `Submit Background Check Request →`}
                </button>
                <p style={{ textAlign: "center", fontSize: 12, color: "rgba(255,255,255,0.25)", margin: 0 }}>🔒 Encrypted · Candidate not notified · PDPL compliant</p>
                <div style={{ marginTop: 14, textAlign: "center" }}>
                  <button type="button" onClick={() => { setFlow("idle"); setSelectedPkg(null); setErrors({}); }} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.3)", fontSize: 12, cursor: "pointer", fontFamily: "inherit" }}>← Change country</button>
                </div>
              </form>
            </div>
          </section>
        )}

        {/* ── SUCCESS ────────────────────────────────────────────────── */}
        {flow === "success" && orderId && pkg && (
          <section style={{ padding: "0 32px 80px" }}>
            <div style={{ maxWidth: 680, margin: "0 auto" }}>
              <div style={{ ...GLASS, padding: 48, textAlign: "center", border: "1px solid rgba(34,197,94,0.25)", background: "rgba(34,197,94,0.04)" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", fontSize: 28 }}>✓</div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 32, color: "#4ADE80", marginBottom: 8 }}>Request Confirmed</h2>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 20, color: "rgba(255,255,255,0.5)", marginBottom: 20 }}>{orderId}</div>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: 32, maxWidth: 480, margin: "0 auto 32px" }}>
                  Your <strong style={{ color: "#fff" }}>{pkg.flag} {pkg.label}</strong> request for <strong style={{ color: "#fff" }}>{form.candidateName}</strong> has been received. Results delivered to <strong style={{ color: "#fff" }}>{form.email}</strong> within {pkg.turnaround}.
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
                      <div style={{ fontWeight: 700, fontSize: 14, color: "#fff", marginBottom: 4 }}>Send the candidate&apos;s documents</div>
                      <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, margin: 0 }}>
                        Email the candidate&apos;s passport, ID, and supporting documents to <strong style={{ color: "#818CF8" }}>care@wirestork.com</strong> with subject: <strong style={{ color: "#fff" }}>{orderId}</strong>
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
