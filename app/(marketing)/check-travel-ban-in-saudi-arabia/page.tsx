// app/(marketing)/check-travel-ban-in-saudi-arabia/page.tsx — SERVER COMPONENT
import type { Metadata } from "next";
import SaudiBanClient from "./SaudiBanClient";

export const metadata: Metadata = {
  title: "Check Travel Ban in Saudi Arabia | Verified Saudi Ban Check | Wirestork",
  description: "Professional Saudi travel ban check service. Kingdom-wide verification, confidential processing, and lawyer-reviewed reports delivered in ten working days.",
  keywords: ["check travel ban in Saudi Arabia", "Saudi travel ban check", "Saudi ban check", "KSA travel ban", "Huroob status check"],
  openGraph: {
    title: "Check Travel Ban in Saudi Arabia | Wirestork",
    description: "Kingdom-wide verification, confidential processing, lawyer-reviewed reports. Ten working days.",
    type: "website",
  },
  alternates: { canonical: "https://wirestork.com/check-travel-ban-in-saudi-arabia/" },
};

const BLUE = "#0708E4";
const BTN_GRAD = "linear-gradient(135deg, #0708E4 0%, #6366F1 100%)";
const BTN_CONTRAST = "linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)";
const GLASS = { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 24 } as const;

const USP_IMGS = [
  { src: "https://wired.b-cdn.net/wp-content/uploads/2024/08/Personal-Data-XN4Z8YM-2.png", title: "Lawyer-Verified Reports", body: "Every Saudi travel ban check is reviewed by licensed legal professionals. Suitable for counsel, employers, and official interactions." },
  { src: "https://wired.b-cdn.net/wp-content/uploads/2024/08/Phishing-XN4Z8YM-2.png", title: "Kingdom-wide Coverage", body: "Single request provides complete clarity across all Saudi regions and relevant agencies for comprehensive travel ban verification." },
  { src: "https://wired.b-cdn.net/wp-content/uploads/2024/08/Mail-Attack-XN4Z8YM-2.png", title: "Official Source Checks", body: "We reference relevant Saudi public records and court systems. No authority contact initiated for this check." },
  { src: "https://wired.b-cdn.net/wp-content/uploads/2024/08/Protection-XN4Z8YM-2.png", title: "Privacy-First", body: "Encrypted intake for your Saudi travel ban check. Your data stays private and access-controlled throughout the process." },
  { src: "https://wired.b-cdn.net/wp-content/uploads/2024/08/Personal-XN4Z8YM-3.png", title: "Guidance & Resolution", body: "Receive actionable next steps with your Saudi ban check report, plus optional legal support when a lift is feasible." },
  { src: "https://wired.b-cdn.net/wp-content/uploads/2024/08/Encryption-XN4Z8YM-2.png", title: "Trusted Since 2017", body: "12,000+ expats and firms rely on Wirestork for accurate, compliant Saudi travel ban checks and background checks in Saudi Arabia." },
];

const COMPARISON_ROWS = [
  ["Kingdom-wide Coverage", "✓", "~", "~"],
  ["Criminal & Civil Case Lookups", "✓", "~", "✗"],
  ["Lawyer Verification", "✓", "✗", "✗"],
  ["Detailed PDF Report", "✓", "✗", "✗"],
  ["Case Numbers & Jurisdictions", "✓", "~", "✗"],
  ["Resolution Guidance", "✓", "✗", "✗"],
  ["Legal Consultation Included", "✓", "✗", "✗"],
  ["Huroob Status Check", "✓", "✗", "✓"],
  ["Interpol & Cross-Border Checks", "✓", "✗", "✗"],
  ["Best For", "Comprehensive Saudi travel ban verification with legal support", "Basic court case inquiries (requires Iqama/POA)", "Checking Huroob status only (requires Iqama/POA)"],
];

const GOV_RESOURCES = [
  { title: "Absher Platform", url: "https://absher.sa", label: "absher.sa", body: "Official Saudi government e-services platform. Check Huroob (absconding) status, manage residency permits (Iqama), and access various Ministry of Interior services." },
  { title: "Najiz Portal", url: "https://najiz.sa", label: "najiz.sa", body: "Ministry of Justice electronic services. Check court cases, view case statuses, and access judicial services across Saudi Arabia. Requires active Iqama or POA." },
  { title: "Ministry of Justice", url: "https://moj.gov.sa", label: "moj.gov.sa", body: "Official Ministry of Justice website. Access legal information, court services, and judicial resources in Saudi Arabia." },
  { title: "Ministry of Interior", url: "https://moi.gov.sa", label: "moi.gov.sa", body: "Saudi Ministry of Interior services. Immigration, passport services (Jawazat), and security-related matters." },
  { title: "Ministry of Labor (HRSD)", url: "https://hrsd.gov.sa", label: "hrsd.gov.sa", body: "Ministry of Human Resources and Social Development. Labor services, employment contracts, and work-related inquiries." },
  { title: "Saudi Arabia Portal", url: "https://saudi.gov.sa", label: "saudi.gov.sa", body: "Official Saudi government services portal. Unified access to all government e-services and information." },
];

const FAQS = [
  { q: "How do I check travel ban in Saudi Arabia online?", a: "To check travel ban in Saudi Arabia, submit your passport and Iqama details through Wirestork's verified Saudi ban check service. We're a legal aggregator that references relevant Saudi public records and court systems to identify potential travel bans. You get expert guidance on resolution and options to manage counsel via Wirestork, DIY, or external lawyers. Standard delivery is 10 working days." },
  { q: "What's included in a Saudi travel ban check?", a: "Micro Saudi ban check: essential ban prevalence against MOL/Jawazat indicators. Standard Saudi travel ban check: travel-ban status plus case lookups across Saudi courts and police stations, curated brief of filings (history + judgments when available), plaintiff/claim details and case numbers when present, and one consultation. Optional add-ons for Interpol ($50) and cross-border extension scan ($250)." },
  { q: "How long does a Saudi travel ban check take?", a: "Standard Saudi ban check plan: 10 working days. The Micro plan focuses on presence checks against Huroob indicators and doesn't include comprehensive case lookups, so it may be completed faster depending on data availability." },
  { q: "What documents are needed to check travel ban in Saudi Arabia?", a: "For a Saudi travel ban check you'll need: passport front page; Iqama (can be expired; POA may be needed if not registered with Absher); latest Saudi residence visa; brief of relevant financial/employment/civic history; and any rejected visa application number/document if applicable." },
  { q: "Can I check Saudi travel ban with expired Iqama?", a: "Yes. Iqama is required for a comprehensive Saudi ban check but can be expired. For higher accuracy and complete Saudi travel ban verification across all regions and case types, including your Iqama and visa page copies reduces data gaps and accelerates cross-checks across the Kingdom." },
  { q: "What causes a Saudi travel ban?", a: "Saudi travel bans can result from Huroob (absconding) status, unpaid debts or loans, criminal cases, civil litigation, labor disputes with employers, or financial claims. When you check travel ban in Saudi Arabia through our service, we identify these potential restrictions and provide guidance on resolution." },
  { q: "Can banks cause a Saudi travel ban?", a: "Yes, debt disputes with Saudi banks can lead to legal actions that may trigger travel restrictions. This is why it's important to check travel ban in Saudi Arabia before attempting to travel. Engage your bank early to explore repayment or settlement options if you have outstanding debts." },
  { q: "How are Saudi travel bans lifted?", a: "Saudi travel ban removal depends on the cause — e.g., case closure, debt settlement, or administrative updates. Your Saudi ban check report includes a resolution roadmap with specific next steps. Legal action may be required in some cases." },
  { q: "Is the Saudi ban check service confidential?", a: "Yes, our Saudi travel ban check service is completely confidential. We use encrypted intake processes, and no authority contact is initiated for the check. Your personal information and Saudi ban check results remain private and access-controlled throughout the entire process." },
  { q: "Can I check travel ban for other GCC countries?", a: "Yes, in addition to our Saudi travel ban check, we offer travel ban verification services for other GCC countries including the UAE, Qatar, Bahrain, Oman, and Kuwait." },
];

const cellColor = (val: string) => {
  if (val === "✓") return "#4ADE80";
  if (val === "✗") return "#F87171";
  if (val === "~") return "#FCD34D";
  return "rgba(255,255,255,0.55)";
};

export default function SaudiTravelBanPage() {
  return (
    <div style={{ background: "#000", color: "#fff", fontFamily: "'Outfit', sans-serif" }}>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org/", "@type": "Product",
        "name": "Saudi Arabia Travel Ban Check",
        "description": "Professional Saudi travel ban check service. Kingdom-wide verification, confidential processing, and lawyer-reviewed reports.",
        "brand": { "@type": "Brand", "name": "Wirestork" },
        "sku": "SAUDI-TRAVEL-BAN-CHECK",
        "offers": [
          { "@type": "Offer", "name": "Micro Saudi Ban Check", "priceCurrency": "SAR", "price": "500", "availability": "https://schema.org/InStock" },
          { "@type": "Offer", "name": "Standard Saudi Ban Check", "priceCurrency": "SAR", "price": "2500", "availability": "https://schema.org/InStock" },
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
              <span style={{ background: BTN_GRAD, color: "#fff", borderRadius: 100, padding: "2px 10px", fontSize: 10, fontWeight: 900, letterSpacing: "0.1em" }}>KSA</span>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.6)" }}>Saudi Travel Ban Check — Official & Verified</span>
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(38px, 5vw, 60px)", lineHeight: 1.0, letterSpacing: "-0.03em", marginBottom: 20 }}>
              Check Travel Ban in Saudi Arabia —{" "}
              <span style={{ color: BLUE }}>Get Verified Results</span>
            </h1>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.5)", lineHeight: 1.75, marginBottom: 36 }}>
              Professional Saudi travel ban check service. Kingdom-wide verification, confidential processing, and lawyer-reviewed reports delivered in <strong style={{ color: "#fff" }}>ten working days</strong>.
            </p>
            <div style={{ ...GLASS, padding: 28 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 24px", marginBottom: 24 }}>
                {["Report delivered as PDF", "Secure & Private", "Lawyer review included", "Kingdom-wide Coverage"].map((f) => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>
                    <span style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 11, color: "#4ADE80" }}>✓</span>
                    {f}
                  </div>
                ))}
              </div>
              <a href="#product-pricing" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, background: BTN_GRAD, color: "#fff", padding: "15px 24px", borderRadius: 12, fontWeight: 900, fontSize: 16, textDecoration: "none", marginBottom: 14 }}>
                Check My Saudi Travel Ban Now →
              </a>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: 100, padding: "7px 16px", fontSize: 12, fontWeight: 700, color: "#4ADE80", marginBottom: 20 }}>
                🔒 Encrypted • No authority contact initiated
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
                {["https://wired.b-cdn.net/wp-content/uploads/2024/08/3-1.png", "https://wired.b-cdn.net/wp-content/uploads/2024/08/1-1.png", "https://wired.b-cdn.net/wp-content/uploads/2024/08/2-1.png", "https://wired.b-cdn.net/wp-content/uploads/2024/08/4-1.png"].map((src, i) => (
                  <img key={i} src={src} alt="Trust badge" style={{ height: 36, width: "auto", opacity: 0.9 }} loading="lazy" />
                ))}
              </div>
            </div>
          </div>
          <div style={{ borderRadius: 32, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", position: "relative" }}>
            <img src="https://wirestork.com/wp-content/uploads/2024/09/dubai-downtown-skyline-united-arab-emirates-or-uae-urban-city-.jpg" alt="Saudi Arabia travel ban check" loading="eager" style={{ width: "100%", objectFit: "cover", display: "block", minHeight: 420 }} />
            <div style={{ position: "absolute", bottom: 20, left: 20, right: 20, display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
              {[["SAR 500", "Micro Check"], ["SAR 2,500", "Standard Check"], ["10 Days", "Delivery"]].map(([n, l]) => (
                <div key={l} style={{ background: "rgba(0,0,0,0.72)", backdropFilter: "blur(12px)", borderRadius: 12, padding: "12px 10px", textAlign: "center" }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 18, color: "#fff", lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 4 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO CONTENT ─────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "60px 32px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 20 }}>About Saudi Travel Bans</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(28px, 4vw, 44px)", letterSpacing: "-0.02em", marginBottom: 32, lineHeight: 1.1 }}>How to Check Travel Ban in Saudi Arabia Online</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              "If you need to check travel ban in Saudi Arabia, Wirestork provides a comprehensive Saudi ban check service that verifies your status across the Kingdom. Our Saudi travel ban check service is designed specifically for expats, foreign workers, and business travelers who need verified confirmation before traveling.",
              "A Saudi travel ban can arise from various situations including Huroob (absconding) status, unpaid debts, civil litigation, criminal cases, or labor disputes. Our Saudi ban check service references relevant public records, court systems, and prosecution data across all regions to provide you with accurate, lawyer-verified results.",
              "Unlike basic online portals that may not surface complete or current data, our professional service conducts a thorough Saudi travel ban verification that includes case lookups across courts and police stations throughout the Kingdom. Whether you're looking to check Saudi travel ban status before booking flights or need to verify your clearance for re-entry, our service provides the comprehensive answers you need.",
              "Our Saudi ban check online service delivers results in ten working days for the Standard plan, with all findings reviewed by licensed legal professionals. Each report includes detailed information about any identified restrictions, case numbers where available, and actionable guidance on resolution pathways.",
            ].map((t, i) => (
              <p key={i} style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", lineHeight: 1.85 }}>{t}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── USP GRID ─────────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "80px 32px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 14 }}>Key Benefits</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em" }}>Why Thousands Choose Our Saudi Travel Ban Check</h2>
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
      <SaudiBanClient />

      {/* ── PROBLEM ──────────────────────────────────────────────────── */}
      <section style={{ background: "#fff", color: "#000", borderRadius: 80, margin: "0 16px", padding: "80px 64px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.15, marginBottom: 12, color: "#111" }}>Don&apos;t Discover a Saudi Travel Ban at the Airport</h2>
            <p style={{ fontSize: 18, color: "#6B7280", marginBottom: 28, fontWeight: 600 }}>Check your Saudi ban status first. Avoid detentions, denied boarding, and wasted trips to the Kingdom.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
              {[
                "Huroob status, unpaid debts, or open cases can trigger Saudi travel restrictions.",
                "Public portals don't always surface full or current data when you check travel ban in Saudi Arabia.",
                "Cross-border notices can extend restrictions beyond KSA to other GCC countries.",
              ].map((t) => (
                <div key={t} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 26, height: 26, flexShrink: 0, background: "#FEE2E2", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 13, color: "#B91C1C" }}>!</div>
                  <p style={{ margin: 0, fontWeight: 600, fontSize: 15, color: "#111" }}>{t}</p>
                </div>
              ))}
            </div>
            <a href="#product-pricing" style={{ display: "inline-block", background: BTN_CONTRAST, color: "#fff", borderRadius: 12, padding: "13px 28px", fontWeight: 900, fontSize: 14, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none" }}>Run a Saudi Ban Check Now →</a>
          </div>
          <div style={{ background: "#F9FAFB", border: "1px solid #E5E7EB", borderRadius: 20, padding: 28 }}>
            <h3 style={{ fontWeight: 800, fontSize: 20, marginBottom: 12, color: "#111" }}>Who Should Check Travel Ban in Saudi Arabia?</h3>
            <p style={{ fontSize: 15, color: "#6B7280", lineHeight: 1.75 }}>Expats, foreign workers, business travelers, and tourists planning entry, exit, or re-entry to the Kingdom. Our Saudi travel ban check service is essential for anyone who needs to confirm their status before booking flights or attempting to travel. Whether you&apos;re concerned about Saudi Arabia travel ban issues, labor disputes, or financial matters, verify your status in advance to avoid complications at immigration.</p>
          </div>
        </div>
      </section>

      {/* ── 3-STEP TIMELINE ──────────────────────────────────────────── */}
      <section id="section-how" style={{ padding: "80px 32px", borderTop: "1px solid rgba(255,255,255,0.06)", scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 14 }}>How It Works</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em", marginBottom: 12 }}>Your Verified Saudi Travel Ban Status in 3 Steps</h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 17 }}>Zero guesswork. Clear outcomes in ten working days. Actionable guidance.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 48px 1fr 48px 1fr", alignItems: "start", gap: 0 }}>
            {[
              { n: "1", title: "Submit Details", body: "Passport and Iqama (can be expired). Provide a brief overview of relevant financial/employment/civic history for your Saudi ban check.", icon: "📋" },
              { n: "2", title: "We Verify", body: "We reference relevant Saudi public records, court systems, and police/prosecution data sources to check travel ban status. No authority contact initiated.", icon: "🔍" },
              { n: "3", title: "Get Your Report", body: "Lawyer-reviewed PDF with Saudi travel ban check findings, next steps, and optional add-ons for cross-border scans.", icon: "📄" },
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
            <a href="#product-pricing" style={{ display: "inline-block", background: BTN_GRAD, color: "#fff", borderRadius: 12, padding: "14px 32px", fontWeight: 900, fontSize: 14, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>Start My Saudi Ban Check →</a>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ─────────────────────────────────────────── */}
      <section id="section-comparison" style={{ padding: "80px 32px", borderTop: "1px solid rgba(255,255,255,0.06)", scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 14 }}>Comparison</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.02em", marginBottom: 16 }}>Wirestork vs Najiz Portal vs Absher</h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 16 }}>Understanding your options to check travel ban in Saudi Arabia</p>
          </div>

          {/* Table */}
          <div style={{ overflowX: "auto", borderRadius: 20, border: "1px solid rgba(255,255,255,0.08)", marginBottom: 40 }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "rgba(255,255,255,0.03)" }}>
                  {["Feature", "Wirestork", "Najiz Portal", "Absher"].map((h, i) => (
                    <th key={h} style={{ padding: "16px 20px", textAlign: i === 0 ? "left" : "center", fontSize: 12, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", color: i === 1 ? "#818CF8" : "rgba(255,255,255,0.4)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map(([feat, ws, najiz, absher], i) => (
                  <tr key={feat} style={{ background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.015)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    <td style={{ padding: "14px 20px", fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.65)" }}>{feat}</td>
                    {[ws, najiz, absher].map((val, j) => (
                      <td key={j} style={{ padding: "14px 20px", fontSize: val.length === 1 ? 18 : 12, textAlign: val.length === 1 ? "center" : "left", color: val.length === 1 ? cellColor(val) : "rgba(255,255,255,0.4)", fontWeight: j === 0 && val.length > 1 ? 600 : 400 }}>{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 3 cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginBottom: 40 }}>
            {[
              { name: "Wirestork", tag: "Recommended for comprehensive checks", tagColor: "#4ADE80", tagBg: "rgba(34,197,94,0.08)", tagBorder: "rgba(34,197,94,0.2)", body: "Professional Saudi travel ban check service with lawyer verification, comprehensive case lookups, and resolution guidance. Accepts expired Iqama.", accent: BLUE },
              { name: "Najiz Portal", tag: "Limited to basic case lookups", tagColor: "#FCD34D", tagBg: "rgba(245,158,11,0.08)", tagBorder: "rgba(245,158,11,0.2)", body: "Saudi government portal for court case inquiries. Requires active Iqama or POA. Limited to court records without comprehensive ban verification or legal guidance.", accent: "rgba(255,255,255,0.3)" },
              { name: "Absher", tag: "Huroob status only", tagColor: "#FCD34D", tagBg: "rgba(245,158,11,0.08)", tagBorder: "rgba(245,158,11,0.2)", body: "Saudi government platform for Huroob (absconding) status checks only. Requires active Iqama or POA. Does not cover court cases, criminal matters, or civil litigation.", accent: "rgba(255,255,255,0.3)" },
            ].map((card) => (
              <div key={card.name} style={{ ...GLASS, padding: 24 }}>
                <div style={{ fontWeight: 900, fontSize: 16, color: "#fff", marginBottom: 8 }}>{card.name}</div>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.75, marginBottom: 16 }}>{card.body}</p>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: card.tagBg, border: `1px solid ${card.tagBorder}`, borderRadius: 100, padding: "4px 12px", fontSize: 11, fontWeight: 700, color: card.tagColor }}>
                  {card.tag}
                </div>
              </div>
            ))}
          </div>

          {/* Why choose Wirestork box */}
          <div style={{ ...GLASS, padding: 32, borderLeft: `4px solid ${BLUE}`, borderRadius: "0 24px 24px 0", borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}>
            <h3 style={{ fontWeight: 700, fontSize: 20, color: "#fff", marginBottom: 16 }}>Why Choose Wirestork Over Free Government Portals?</h3>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: 16 }}>While Najiz and Absher are useful government tools, they have significant limitations when you need to check travel ban in Saudi Arabia comprehensively:</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                ["Accepts Expired Iqama", "Wirestork works with expired Iqama, while Najiz and Absher typically require active registration."],
                ["Complete Coverage", "We check criminal cases, civil cases, Huroob status, and financial disputes — not just one aspect."],
                ["Expert Guidance", "Lawyer-verified reports with actionable resolution plans, not just raw data."],
                ["Official Documentation", "Professional PDF reports suitable for embassies, employers, and legal proceedings."],
              ].map(([title, body]) => (
                <div key={String(title)} style={{ display: "flex", gap: 12 }}>
                  <span style={{ color: "#4ADE80", flexShrink: 0, marginTop: 2 }}>✓</span>
                  <div style={{ fontSize: 14, color: "rgba(255,255,255,0.55)" }}><strong style={{ color: "#fff" }}>{title}:</strong> {body}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <a href="#product-pricing" style={{ display: "inline-block", background: BTN_GRAD, color: "#fff", borderRadius: 12, padding: "14px 32px", fontWeight: 900, fontSize: 14, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>Get Comprehensive Saudi Ban Check →</a>
          </div>
        </div>
      </section>

      {/* ── WHY CLIENTS TRUST + WHAT YOU GET ────────────────────────── */}
      <section style={{ padding: "0 32px 80px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 42, letterSpacing: "-0.02em", marginBottom: 32, lineHeight: 1.1 }}>Why Clients Trust Our Saudi Travel Ban Check</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { color: "#06B6D4", label: "Kingdom-wide Coverage", rest: " — one Saudi ban check request, complete clarity across all regions." },
                { color: "#22C55E", label: "Lawyer-Verified", rest: " — every Saudi travel ban check is suitable for legal use and official purposes." },
                { color: "#F59E0B", label: "Private & Encrypted", rest: " — no authority contact initiated for Saudi ban checks." },
                { color: "#6366F1", label: "Ten working days", rest: " — typical delivery for Standard Saudi travel ban verification." },
                { color: "#EF4444", label: "Add-ons Available", rest: " — Interpol and cross-border extension scans for comprehensive checks." },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 26, height: 26, flexShrink: 0, background: `${item.color}18`, border: `1px solid ${item.color}40`, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 12, color: item.color }}>✓</div>
                  <div style={{ fontSize: 15, color: "rgba(255,255,255,0.75)" }}><strong style={{ color: "#fff" }}>{item.label}</strong>{item.rest}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ ...GLASS, padding: 32 }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 26, marginBottom: 20 }}>What You Get When You Check Travel Ban in Saudi Arabia</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
              {[
                "Micro: essential Saudi ban prevalence based on MOL/Jawazat indicators",
                "Standard: comprehensive Saudi travel ban status plus case lookups across courts and police stations",
                "Curated brief of civil/criminal filings with history and judgments (Standard)",
                "Plaintiff and claim details when available in prosecution data (Standard)",
                "Case numbers where available for your Saudi ban check (Standard)",
                "Optional: Interpol Red Notice scan ($50); extension scan to Qatar, UAE, Oman, Bahrain, Libya ($250)",
                "One consultation session to review your Saudi travel ban check results",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: 10, fontSize: 13, color: "rgba(255,255,255,0.65)", alignItems: "flex-start" }}>
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

      {/* ── RELATED SERVICES ─────────────────────────────────────────── */}
      <section style={{ padding: "0 32px 80px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 20 }}>Related Services</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(28px, 4vw, 44px)", letterSpacing: "-0.02em", marginBottom: 32 }}>Related Legal Services in Saudi Arabia</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {[
              { icon: "⚖️", title: "Legal Consultation", body: "Need legal advice after your Saudi travel ban check? Connect with verified lawyers in the Kingdom.", link: "/online-lawyer-consultation", cta: "Explore Legal Services" },
              { icon: "🏛️", title: "Police Case Check", body: "Verify if you have any open police cases in Saudi Arabia that could affect your travel status.", link: "/uae-court-police-case-checking", cta: "Check Police Cases" },
              { icon: "🔍", title: "UAE Travel Ban Check", body: "Also need to verify your UAE travel ban status? Our UAE service covers all seven emirates.", link: "/travel-ban-uae-check", cta: "Check UAE Travel Ban" },
            ].map((s) => (
              <div key={s.title} style={{ ...GLASS, padding: 28 }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{s.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 18, color: "#fff", marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.75, marginBottom: 20 }}>{s.body}</p>
                <a href={s.link} style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#818CF8", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>{s.cta} →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOCUMENTS REQUIRED ───────────────────────────────────────── */}
      <section id="section-docs" style={{ padding: "80px 32px", borderTop: "1px solid rgba(255,255,255,0.06)", scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 14 }}>What You&apos;ll Need</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.02em" }}>Documents Required to Check Travel Ban in Saudi Arabia</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <div style={{ ...GLASS, padding: 32 }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 24, marginBottom: 24 }}>What You&apos;ll Need for Your Saudi Ban Check</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  ["📋", "A brief of your financial, employment, or civic history relevant to the Saudi travel ban check"],
                  ["🛂", "Front page of your passport (essential for all Saudi ban checks)"],
                  ["🪪", "Iqama (can be expired; POA may be needed if not registered with Absher)"],
                  ["📄", "Copy of most recent Saudi residence visa"],
                  ["🚫", "Rejected Visa Application number/document (if applicable to your Saudi travel ban situation)"],
                ].map(([icon, text]) => (
                  <div key={String(text)} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(7,8,228,0.12)", border: "1px solid rgba(7,8,228,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{icon}</div>
                    <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, margin: 0 }}>{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ ...GLASS, padding: 32, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.25)", borderRadius: 14, padding: 20, marginBottom: 24 }}>
                  <div style={{ fontSize: 14, fontWeight: 900, color: "#FCD34D", marginBottom: 8 }}>💡 Pro Tip</div>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.75, margin: 0 }}>Iqama is required but <strong style={{ color: "#fff" }}>can be expired</strong>. Including your Iqama and visa copies significantly improves accuracy and reduces processing time for your Saudi travel ban check.</p>
                </div>
                <div style={{ background: "rgba(7,8,228,0.06)", border: "1px solid rgba(7,8,228,0.15)", borderRadius: 14, padding: 20 }}>
                  <div style={{ fontSize: 14, fontWeight: 900, color: "#818CF8", marginBottom: 8 }}>📎 How to Submit</div>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.75, margin: 0 }}>Upload via shareable link (Google Drive, Dropbox, OneDrive) at checkout, or email documents to <strong style={{ color: "#818CF8" }}>care@wirestork.com</strong> with your order number as the subject.</p>
                </div>
              </div>
              <div style={{ marginTop: 24 }}>
                <a href="#product-pricing" style={{ display: "block", background: BTN_GRAD, color: "#fff", borderRadius: 12, padding: "14px", fontWeight: 900, fontSize: 14, textAlign: "center", textDecoration: "none" }}>Start My Saudi Ban Check →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GOV RESOURCES ────────────────────────────────────────────── */}
      <section id="section-resources" style={{ padding: "80px 32px", borderTop: "1px solid rgba(255,255,255,0.06)", scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 14 }}>Official Resources</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(28px, 4vw, 44px)", letterSpacing: "-0.02em", marginBottom: 12 }}>Official Saudi Government Resources</h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.4)" }}>Helpful government portals for Saudi Arabia travel and residency services</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
            {GOV_RESOURCES.map((r) => (
              <div key={r.title} style={{ ...GLASS, padding: 22, borderLeft: `3px solid rgba(7,8,228,0.5)`, borderRadius: "0 16px 16px 0", borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, flexWrap: "wrap" }}>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: 16, color: "#fff", marginBottom: 4 }}>{r.title}</h3>
                    <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, marginBottom: 0 }}>{r.body}</p>
                  </div>
                  <a href={r.url} target="_blank" rel="noopener noreferrer" style={{ flexShrink: 0, background: "rgba(7,8,228,0.1)", border: "1px solid rgba(7,8,228,0.25)", color: "#818CF8", borderRadius: 8, padding: "6px 14px", fontSize: 12, fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap" }}>
                    {r.label} →
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div style={{ ...GLASS, padding: 28, borderLeft: `4px solid ${BLUE}`, borderRadius: "0 20px 20px 0", borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}>
            <h4 style={{ fontWeight: 900, fontSize: 16, marginBottom: 8, color: "#fff" }}>Need Help Navigating Government Portals?</h4>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.8, margin: 0 }}>While these government resources are valuable, they often have limitations: some require active Iqama or POA, others only show partial information, and many don&apos;t provide legal guidance. Wirestork&apos;s Saudi travel ban check service provides comprehensive verification across all these sources with expert legal review and actionable resolution plans.</p>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section id="faq" style={{ padding: "80px 32px", borderTop: "1px solid rgba(255,255,255,0.06)", scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 14 }}>FAQ</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em", marginBottom: 12 }}>Frequently Asked Questions About Saudi Travel Ban Checks</h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 17 }}>Everything you need to know to check travel ban in Saudi Arabia</p>
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
          <div style={{ ...GLASS, padding: 48, marginTop: 40, textAlign: "center" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 36, marginBottom: 12 }}>Ready to Check Your Saudi Travel Ban Status?</h3>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.45)", marginBottom: 12 }}>Get verified results in 10 working days. Lawyer-reviewed, confidential, and comprehensive.</p>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.25)", marginBottom: 32 }}>Join 12,000+ satisfied clients who trust Wirestork for accurate Saudi travel ban checks</p>
            <a href="#product-pricing" style={{ display: "inline-block", background: BTN_GRAD, color: "#fff", borderRadius: 12, padding: "15px 40px", fontWeight: 900, fontSize: 15, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none" }}>Start Your Saudi Ban Check Now →</a>
          </div>
        </div>
      </section>

      {/* Mobile sticky CTA */}
      <style>{`@media (min-width: 768px) { .mob-cta-saudi { display: none !important; } }`}</style>
      <div className="mob-cta-saudi" style={{ position: "fixed", left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.92)", backdropFilter: "blur(12px)", borderTop: "1px solid rgba(7,8,228,0.3)", padding: "12px 16px", zIndex: 50 }}>
        <a href="#product-pricing" style={{ display: "block", background: BTN_GRAD, color: "#fff", borderRadius: 12, padding: "13px", fontWeight: 900, fontSize: 15, textAlign: "center", textDecoration: "none" }}>Check My Saudi Travel Ban →</a>
      </div>

    </div>
  );
}
