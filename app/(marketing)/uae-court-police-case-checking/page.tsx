// app/(marketing)/uae-court-police-case-checking/page.tsx — SERVER COMPONENT
import type { Metadata } from "next";
import CourtCheckClient from "./CourtCheckClient";

export const metadata: Metadata = {
  title: "UAE Court & Police Case Check | Wirestork",
  description: "Identify court and police cases filed against you in the UAE. Typical delivery: five working days. Two-day expedited available on eligible plans. Encrypted. Confidential. Lawyer-verified.",
  keywords: ["UAE court case check", "UAE police case check", "UAE criminal record check", "court case UAE", "police case UAE"],
  openGraph: {
    title: "UAE Court & Police Case Check | Wirestork",
    description: "Nationwide court and police case identification across all Emirates. Five working days. Two-day expedited on eligible plans.",
    type: "website",
    images: [{ url: "https://wirestork.com/wp-content/uploads/2020/02/Court-and-Police-Check.png" }],
  },
  alternates: { canonical: "https://wirestork.com/uae-court-police-case-checking/" },
};

const BLUE = "#0708E4";
const BTN_GRAD = "linear-gradient(135deg, #0708E4 0%, #6366F1 100%)";
const BTN_CONTRAST = "linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)";
const GLASS = { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 24 } as const;

const USP_IMGS = [
  { src: "https://wired.b-cdn.net/wp-content/uploads/2024/08/Personal-Data-XN4Z8YM-2.png", title: "Lawyer-Verified Reports", body: "Reviewed and signed off by licensed UAE legal professionals. Suitable for counsel, employers, and records." },
  { src: "https://wired.b-cdn.net/wp-content/uploads/2024/08/Phishing-XN4Z8YM-2.png", title: "Two-Day Expedited", body: "Standard delivery is five working days. Eligible plans offer a two-day fast track." },
  { src: "https://wired.b-cdn.net/wp-content/uploads/2024/08/Mail-Attack-XN4Z8YM-2.png", title: "Official Source Checks", body: "Courts, Police, Prosecution, plus Land Department and Municipalities where applicable." },
  { src: "https://wired.b-cdn.net/wp-content/uploads/2024/08/Protection-XN4Z8YM-2.png", title: "100% Confidential Process", body: "Encrypted intake. Your data stays private and access-controlled." },
  { src: "https://wired.b-cdn.net/wp-content/uploads/2024/08/Personal-XN4Z8YM-3.png", title: "Guidance & Resolution", body: "Actionable steps and one consultation session included to align on resolution." },
  { src: "https://wired.b-cdn.net/wp-content/uploads/2024/08/Encryption-XN4Z8YM-2.png", title: "Trusted Since 2017", body: "12,000+ expats and law firms rely on accurate, compliant, lawyer-reviewed checks." },
];

const FAQS = [
  { q: "How does Wirestork's Court & Police Case Check work?", a: "We're an online legal aggregator. Our team identifies criminal and civil filings across courts and police stations in all Emirates. Standard is best if you don't know your current status. You'll also get guidance on resolution and options to manage counsel—via Wirestork, yourself, or external lawyers." },
  { q: "What's included?", a: "Statutory lookup of three, six, or complete filings; a curated brief of civil/criminal cases nationwide with histories and judgments if any; checks with Land Department and Municipalities; plaintiff details where available; and one consultation session." },
  { q: "What's the delivery time?", a: "Standard: 5 working days. Expedited plans: 2 working days. Expedited is available on the Standard plan only." },
  { q: "What do you need from me?", a: "A short brief of relevant financial/employment/civic history, the front page of your passport, your latest Emirates ID (optional), and your latest residence visa copy." },
  { q: "Does a case check notify the courts or police?", a: "No. The lookup is a confidential inquiry conducted by our licensed legal team. It does not create any alerts in government systems or notify any party." },
  { q: "Can this be used as an official clearance certificate?", a: "Our report provides a lawyer-verified summary of filings. For official clearance certificates accepted by government bodies (e.g. for visa applications), a specific police clearance certificate may be required. Our team can advise during your consultation session." },
  { q: "What if a case is found?", a: "Your report will include case numbers, plaintiff or complainant details (where available), jurisdiction, nature of filing, and a step-by-step resolution roadmap. The Standard and Advanced plans include a consultation session to walk through next steps." },
  { q: "Can I check someone else's cases?", a: "Our service is designed for individuals checking their own legal standing. For checks on third parties (e.g. employee screening or tenant verification), please contact us through our Business verification services." },
];

export default function CourtCheckPage() {
  return (
    <div style={{ background: "#000", color: "#fff", fontFamily: "'Outfit', sans-serif" }}>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org/", "@type": "Product",
        "name": "UAE Court and Police Case Check",
        "image": "https://wirestork.com/wp-content/uploads/2020/02/Court-and-Police-Check.png",
        "description": "Wirestork offers a comprehensive UAE Court and Police Case Check service. It allows individuals to identify any active criminal or civil cases filed against them across all jurisdictions in the UAE.",
        "url": "https://wirestork.com/uae-court-police-case-checking/",
        "brand": { "@type": "Brand", "name": "Wirestork" },
        "sku": "UAE-COURT-POLICE-CHECK",
        "offers": [
          { "@type": "Offer", "name": "Basic", "priceCurrency": "AED", "price": "750", "availability": "https://schema.org/InStock" },
          { "@type": "Offer", "name": "Standard", "priceCurrency": "AED", "price": "1200", "availability": "https://schema.org/InStock" },
          { "@type": "Offer", "name": "Advanced", "priceCurrency": "AED", "price": "1800", "availability": "https://schema.org/InStock" }
        ],
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "reviewCount": "19" }
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
      })}} />

      {/* ── TRUST BAR ───────────────────────────────────────────────── */}
      <div style={{ background: "rgba(255,255,255,0.02)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "10px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 20 }}>
          {[["🔒", "SSL Secured"], ["⚖️", "Lawyer-Verified"], ["⭐", "5-Star Rated"]].map(([icon, label]) => (
            <span key={String(label)} style={{ display: "flex", alignItems: "center", gap: 7, border: "1px dashed rgba(7,8,228,0.4)", borderRadius: 100, padding: "5px 14px", fontSize: 13, color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>
              <span>{icon}</span> {label}
            </span>
          ))}
        </div>
      </div>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section id="section-overview" style={{ paddingTop: 100, paddingBottom: 80, position: "relative", scrollMarginTop: 0 }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)", backgroundSize: "40px 40px", maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 60%, transparent 100%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", position: "relative" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(7,8,228,0.12)", border: "1px solid rgba(7,8,228,0.3)", borderRadius: 100, padding: "4px 14px 4px 8px", marginBottom: 28 }}>
              <span style={{ background: BTN_GRAD, color: "#fff", borderRadius: 100, padding: "2px 10px", fontSize: 10, fontWeight: 900, letterSpacing: "0.1em" }}>UAE</span>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.6)" }}>Court & Police Case Check — Official & Verified</span>
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(38px, 5vw, 60px)", lineHeight: 1.0, letterSpacing: "-0.03em", marginBottom: 20 }}>
              Know Your UAE Court & Police Cases —{" "}
              <span style={{ color: BLUE }}>Five Working Days</span>
            </h1>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.5)", lineHeight: 1.75, marginBottom: 36 }}>
              Need it faster? Choose <strong style={{ color: "#fff" }}>two-day expedited</strong> on eligible plans at checkout. Confidential, encrypted, and lawyer-verified reporting.
            </p>
            <div style={{ ...GLASS, padding: 28 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 24px", marginBottom: 24 }}>
                {["Report delivered as PDF", "Secure & Private", "Lawyer review included", "All-Emirates Coverage"].map((f) => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>
                    <span style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 11, color: "#4ADE80" }}>✓</span>
                    {f}
                  </div>
                ))}
              </div>
              <a href="#product-pricing" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, background: BTN_GRAD, color: "#fff", padding: "15px 24px", borderRadius: 12, fontWeight: 900, fontSize: 16, textDecoration: "none", marginBottom: 14 }}>
                Check My Court & Police Cases Now →
              </a>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: 100, padding: "7px 16px", fontSize: 12, fontWeight: 700, color: "#4ADE80", marginBottom: 20 }}>
                🔒 Encrypted • Privacy-first handling
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
                {["https://wired.b-cdn.net/wp-content/uploads/2024/08/3-1.png", "https://wired.b-cdn.net/wp-content/uploads/2024/08/1-1.png", "https://wired.b-cdn.net/wp-content/uploads/2024/08/2-1.png", "https://wired.b-cdn.net/wp-content/uploads/2024/08/4-1.png"].map((src, i) => (
                  <img key={i} src={src} alt="Trust badge" style={{ height: 36, width: "auto", opacity: 0.9 }} loading="lazy" />
                ))}
              </div>
            </div>
          </div>
          <div style={{ borderRadius: 32, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", position: "relative" }}>
            <img src="https://wirestork.com/wp-content/uploads/2024/09/dubai-downtown-skyline-united-arab-emirates-or-uae-urban-city-.jpg" alt="UAE courts and police case context — Dubai skyline" loading="eager" style={{ width: "100%", objectFit: "cover", display: "block", minHeight: 420 }} />
            <div style={{ position: "absolute", bottom: 20, left: 20, right: 20, display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
              {[["12,000+", "Cases Checked"], ["99.9%", "Accuracy"], ["2-Day", "Fast-Track"]].map(([n, l]) => (
                <div key={l} style={{ background: "rgba(0,0,0,0.72)", backdropFilter: "blur(12px)", borderRadius: 12, padding: "12px 10px", textAlign: "center" }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 22, color: "#fff", lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 4 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY THOUSANDS CHOOSE ────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "80px 32px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 14 }}>Key Benefits</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em" }}>Why Thousands Choose Wirestork</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {USP_IMGS.map((u) => (
              <div key={u.title} style={{ ...GLASS, padding: 28, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                <img src={u.src} alt={u.title} width={80} height={80} loading="lazy" style={{ marginBottom: 18 }} />
                <h3 style={{ fontWeight: 700, fontSize: 17, color: "#fff", marginBottom: 10 }}>{u.title}</h3>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.75 }}>{u.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING + FORM (client) ──────────────────────────────────── */}
      <CourtCheckClient />

      {/* ── PROBLEM ──────────────────────────────────────────────────── */}
      <section style={{ background: "#fff", color: "#000", borderRadius: 80, margin: "0 16px", padding: "80px 64px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.15, marginBottom: 12, color: "#111" }}>Most People Learn About Cases the Hard Way</h2>
            <p style={{ fontSize: 18, color: "#6B7280", marginBottom: 28, fontWeight: 600 }}>Don&apos;t play guesswork with courts or police.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
              {["Detentions, travel disruptions, and blocked services.", "Public portals rarely show full, current case data.", "Missed filings and judgments compound risk."].map((t) => (
                <div key={t} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 26, height: 26, flexShrink: 0, background: "#FEE2E2", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 13, color: "#B91C1C" }}>!</div>
                  <p style={{ margin: 0, fontWeight: 600, fontSize: 15, color: "#111" }}>{t}</p>
                </div>
              ))}
            </div>
            <a href="#product-pricing" style={{ display: "inline-block", background: BTN_CONTRAST, color: "#fff", borderRadius: 12, padding: "13px 28px", fontWeight: 900, fontSize: 14, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none" }}>Run a Case Check →</a>
          </div>
          <div style={{ background: "#F9FAFB", border: "1px solid #E5E7EB", borderRadius: 20, padding: 28 }}>
            <h3 style={{ fontWeight: 800, fontSize: 20, marginBottom: 12, color: "#111" }}>What&apos;s Typically Filed?</h3>
            <p style={{ fontSize: 15, color: "#6B7280", lineHeight: 1.75 }}>Criminal complaints, civil claims, rental and cheque disputes, employment and credit matters, plus municipal and land-related filings. We surface what&apos;s on record—before it becomes a problem.</p>
          </div>
        </div>
      </section>

      {/* ── 3-STEP TIMELINE ──────────────────────────────────────────── */}
      <section id="section-how" style={{ padding: "80px 32px", borderTop: "1px solid rgba(255,255,255,0.06)", scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 14 }}>How It Works</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em", marginBottom: 12 }}>Your Case Status in 3 Steps</h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 17 }}>Nationwide scan. Verified results. Actionable next steps.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 48px 1fr 48px 1fr", alignItems: "start", gap: 0 }}>
            {[
              { n: "1", title: "Submit Details", body: "Passport or Emirates ID. Add a brief of relevant financial, employment, or civic history.", icon: "📋" },
              { n: "2", title: "We Verify Directly", body: "Cross-checks across courts, police stations, prosecution records, and where relevant Land Department and Municipalities.", icon: "🔍" },
              { n: "3", title: "Get Your Report", body: "Five working days typical delivery. Two-day expedited available on eligible plans.", icon: "📄" },
            ].map((step, idx) => (
              <>
                <div key={step.n} style={{ ...GLASS, padding: 32, textAlign: "center", position: "relative" }}>
                  <div style={{ width: 56, height: 56, borderRadius: "50%", background: BTN_GRAD, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: 22 }}>{step.icon}</div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 64, color: "rgba(7,8,228,0.15)", position: "absolute", top: 16, right: 20, lineHeight: 1 }}>{step.n}</div>
                  <h3 style={{ fontWeight: 700, fontSize: 20, color: "#fff", marginBottom: 10 }}>{step.title}</h3>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.75 }}>{step.body}</p>
                </div>
                {idx < 2 && (
                  <div key={`arr-${idx}`} style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 40 }}>
                    <div style={{ width: "100%", height: 2, background: "rgba(7,8,228,0.3)", position: "relative" }}>
                      <div style={{ position: "absolute", right: -6, top: -5, borderTop: "6px solid transparent", borderBottom: "6px solid transparent", borderLeft: "10px solid rgba(7,8,228,0.4)" }} />
                    </div>
                  </div>
                )}
              </>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <a href="#product-pricing" style={{ display: "inline-block", background: BTN_GRAD, color: "#fff", borderRadius: 12, padding: "14px 32px", fontWeight: 900, fontSize: 14, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>Start My Case Check →</a>
          </div>
        </div>
      </section>

      {/* ── WHY CLIENTS TRUST + WHAT YOU GET ────────────────────────── */}
      <section id="section-what-filed" style={{ padding: "0 32px 80px", scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 42, letterSpacing: "-0.02em", marginBottom: 32, lineHeight: 1.1 }}>Why Clients Trust Wirestork</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { color: "#06B6D4", label: "All-Emirates Coverage", rest: " — one request, nationwide clarity." },
                { color: "#22C55E", label: "Lawyer-Verified Reports", rest: " — suitable for legal use." },
                { color: "#F59E0B", label: "Encrypted & Secure", rest: " — your data stays private." },
                { color: "#6366F1", label: "Five working days", rest: " — delivered as a PDF." },
                { color: "#EF4444", label: "Consultation Included", rest: " — align on next steps with an expert." },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 26, height: 26, flexShrink: 0, background: `${item.color}18`, border: `1px solid ${item.color}40`, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 12, color: item.color }}>✓</div>
                  <div style={{ fontSize: 15, color: "rgba(255,255,255,0.75)" }}><strong style={{ color: "#fff" }}>{item.label}</strong>{item.rest}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ ...GLASS, padding: 32 }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 26, marginBottom: 20 }}>What You Get</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
              {[
                "Statutory lookup of three, six, or complete filings (civil and criminal)",
                "Curated brief of filings nationwide, with history and judgments if any",
                "Brief of cases with Land Department and Municipalities",
                "Plaintiff/complainant details where available",
                "One consultation session",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: 10, fontSize: 14, color: "rgba(255,255,255,0.7)", alignItems: "flex-start" }}>
                  <span style={{ color: BLUE, fontSize: 16, flexShrink: 0, marginTop: 2 }}>→</span> {item}
                </div>
              ))}
            </div>
            <div style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.25)", borderRadius: 10, padding: "12px 16px", display: "flex", gap: 10, alignItems: "center", fontSize: 13, fontWeight: 700, color: "#FCD34D" }}>
              ⚡ Fast-Track slots today: 3 left
            </div>
          </div>
        </div>
      </section>

      {/* ── DECISION-READY REPORTING ─────────────────────────────────── */}
      <section id="section-report" style={{ padding: "0 32px 80px", scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ marginBottom: 52 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 14 }}>Sample Report</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em" }}>Decision-Ready Reporting</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", marginBottom: 64 }}>
            <div>
              <span style={{ display: "inline-flex", alignItems: "center", background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.3)", color: "#818CF8", fontSize: 11, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", padding: "4px 14px", borderRadius: 100, marginBottom: 16 }}>Verified Legal Insights</span>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 30, marginBottom: 12 }}>Actionable Legal Intelligence</h3>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>Accurate information reviewed by vetted lawyers. Private, encrypted, and mapped to official case references where available.</p>
            </div>
            <div style={{ borderRadius: 24, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
              <img src="https://wired.b-cdn.net/wp-content/uploads/2019/07/Sample-Travel-Ban-Check-Report-Wirestork_page-0001-1187x1536.jpg" alt="Sample Wirestork report — summary page" loading="lazy" style={{ width: "100%", display: "block" }} />
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            <div style={{ borderRadius: 24, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
              <img src="https://wired.b-cdn.net/wp-content/uploads/2019/07/Sample-Travel-Ban-Check-Report-Wirestork_page-0002-1187x1536.jpg" alt="Sample Wirestork report — directive roadmap" loading="lazy" style={{ width: "100%", display: "block" }} />
            </div>
            <div>
              <span style={{ display: "inline-flex", alignItems: "center", background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.25)", color: "#FCD34D", fontSize: 11, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", padding: "4px 14px", borderRadius: 100, marginBottom: 16 }}>Resolution, Simplified</span>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 30, marginBottom: 12 }}>Directive Roadmaps</h3>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>Step-by-step instructions to resolve filings rapidly and cleanly—DIY or with counsel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section id="faq" style={{ padding: "80px 32px", borderTop: "1px solid rgba(255,255,255,0.06)", scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 14 }}>FAQ</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em", marginBottom: 12 }}>Frequently Asked Questions</h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 17 }}>Direct answers. No legalese.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {FAQS.map((faq) => (
              <details key={faq.q} style={{ ...GLASS, padding: 20 }}>
                <summary style={{ fontWeight: 700, fontSize: 14, color: "#fff", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                  {faq.q}
                  <span style={{ color: BLUE, fontSize: 20, fontWeight: 300, flexShrink: 0 }}>+</span>
                </summary>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.8, marginTop: 14, paddingTop: 14, borderTop: "1px solid rgba(255,255,255,0.06)" }}>{faq.a}</div>
              </details>
            ))}
          </div>

          {/* Final CTA */}
          <div style={{ ...GLASS, padding: 40, marginTop: 40, textAlign: "center" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 32, marginBottom: 12 }}>Last Step: Confirm Your Status</h3>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.45)", marginBottom: 28 }}>Know what&apos;s filed. Act before it escalates.</p>
            <a href="#product-pricing" style={{ display: "inline-block", background: BTN_GRAD, color: "#fff", borderRadius: 12, padding: "14px 36px", fontWeight: 900, fontSize: 15, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none" }}>View Pricing →</a>
          </div>
        </div>
      </section>

      {/* Mobile sticky CTA */}
      <style>{`@media (min-width: 768px) { .mobile-cta-court { display: none !important; } }`}</style>
      <div className="mobile-cta-court" style={{ position: "fixed", left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.92)", backdropFilter: "blur(12px)", borderTop: "1px solid rgba(7,8,228,0.3)", padding: "12px 16px", zIndex: 50 }}>
        <a href="#product-pricing" style={{ display: "block", background: BTN_GRAD, color: "#fff", borderRadius: 12, padding: "13px", fontWeight: 900, fontSize: 15, textAlign: "center", textDecoration: "none", letterSpacing: "0.05em" }}>Start My Case Check →</a>
      </div>

    </div>
  );
}
