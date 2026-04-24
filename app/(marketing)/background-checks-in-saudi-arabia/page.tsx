// app/(marketing)/background-checks-in-saudi-arabia/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Background Checks in Saudi Arabia | PDPL & GOSI Verification — Wirestork",
  description: "PDPL-compliant background checks in Saudi Arabia. Criminal records via Absher, GOSI employment verification, SIMAH credit checks, education verification. Fast & accurate.",
  keywords: "background checks Saudi Arabia, employment screening KSA, Absher background check, GOSI verification, PDPL screening Saudi Arabia",
  openGraph: {
    title: "Background Checks in Saudi Arabia | Wirestork",
    description: "Secure your Saudi recruitment with PDPL-compliant background checks. Criminal, employment, education, and GOSI verification.",
    type: "website",
  },
};

const BLUE = "#0708E4";
const BTN_GRAD = "linear-gradient(135deg, #0708E4 0%, #6366F1 100%)";
const GLASS: React.CSSProperties = { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16 };

const SERVICES = [
  { icon: "🔍", title: "Criminal Records", price: "SAR 412", time: "1–2 days", desc: "Rigorous criminal history verification through official Saudi channels, facilitating seamless candidate consent via the Absher portal. We meticulously verify judicial and security records, fully adhering to the Kingdom's Personal Data Protection Law (PDPL)." },
  { icon: "💼", title: "Employment Verification", price: "SAR 112", time: "4–6 days", desc: "Build a high-performance team with background checks that go beyond the CV. Wirestork provides meticulous employment history verification by cross-referencing professional records with GOSI (Social Insurance) data and official Service Certificates, validating tenure, job titles, and professional conduct." },
  { icon: "🎓", title: "Education Verification", price: "SAR 112", time: "6–10 days", desc: "Authentic expertise is your greatest asset. We authenticate degrees, diplomas, and professional licenses through primary-source verification aligned with the Kingdom's Professional Verification Program and the Saudi Ministry of Education's standards." },
  { icon: "✈️", title: "GCC Travel Ban Verification", price: "SAR 20", time: "Same day", desc: "Protect your organization from unexpected operational disruptions. Our process facilitates PDPL-compliant consent via the Absher and Najiz portals, confirming that prospective hires are free from judicial restrictions or labour-related travel bans." },
  { icon: "📋", title: "Reference Checks", price: "SAR 85", time: "2–3 days", desc: "Go beyond the resume with PDPL-compliant interviews with former supervisors and peers to validate core competencies, leadership style, and workplace conduct — aligned with the Kingdom's Vision 2030 values of integrity and excellence." },
  { icon: "💳", title: "Credit History Checks", price: "SAR 120", time: "3–5 days", desc: "Protect your organization's fiscal health with credit history verification through official SIMAH records, ensuring full compliance with SAMA's Fit and Proper standards for candidates in sensitive financial roles." },
];

const PRICING = [
  { num: "01", title: "Identity & Biometrics", price: "SAR 20", prefix: "As low as", time: "Instant–1 day", desc: "Biometric-grade identity verification cross-referencing global databases and Iqama authenticity. Essential for preventing fraud at the first touchpoint." },
  { num: "02", title: "Employment History", price: "SAR 112", prefix: "Starting from", time: "4–6 business days", desc: "Detailed confirmation of dates, roles, and reasons for leaving. We verify directly with HR departments via GOSI to eliminate title inflation and gap-filling." },
  { num: "03", title: "Education Verification", price: "SAR 112", prefix: "Starting from", time: "6–10 business days", desc: "Official confirmation of degree, institution, and graduation year. Global reach covering educational jurisdictions across 190+ countries." },
  { num: "04", title: "Criminal Record Check", price: "SAR 412", prefix: "As low as", time: "1–2 business days", desc: "Comprehensive Saudi clearance or global equivalent background verification conducted by local legal teams covering all relevant courts." },
  { num: "05", title: "Global Sanctions & AML", price: "SAR 85", prefix: "As low as", time: "Same day", desc: "Sanctions, PEP, and adverse media screening against global watchlists and SAMA regulatory databases." },
  { num: "06", title: "Social Media Integrity", price: "SAR 120", prefix: "Starting at", time: "2–3 business days", desc: "Structured social media review for reputational risk and professional conduct assessment in line with Vision 2030 values." },
];

const TECH_PILLARS = [
  { icon: "⚡", title: "Swift Turnaround Times", desc: "Wirestork leverages the Kingdom's digital infrastructure — including Absher and GOSI — to deliver rapid, precision-driven background checks. Our streamlined workflows provide verified insights at the speed of business." },
  { icon: "🔐", title: "PDPL-First Security", desc: "Wirestork's background screening is engineered to exceed the rigorous standards of the Saudi Personal Data Protection Law (PDPL). We utilize KSA-based encrypted storage and a Zero-Trust security architecture, fully SDAIA-compliant." },
  { icon: "🌐", title: "Unified Regional Reach", desc: "We bridge the gap between global standards and Gulf-specific regulations. Deep integration with Saudi-specific platforms like Absher, Najiz, and GOSI — ensuring your workforce remains compliant with Saudi PDPL and GCC labour standards." },
];

const FRAUD_STATS = [
  { stat: "25%", label: "Education Fraud", desc: "With candidates coming from all over the world, verifying degrees is critical. 25% of discrepancies involve embellished or fake academic credentials." },
  { stat: "1 in 3", label: "Employment History", desc: "An employee background check in Saudi often reveals gap-filling or title inflation. We verify dates, roles, and reasons for leaving directly with GOSI sources." },
  { stat: "High Risk", label: "Criminal Record", desc: "Ensure workplace safety. We navigate local police clearance protocols and the Absher portal to provide accurate Saudi background checks regarding criminal history." },
];

export default function BackgroundChecksSaudiPage() {
  return (
    <main style={{ background: "#000", color: "#fff", minHeight: "100vh", fontFamily: "'Outfit', sans-serif" }}>

      {/* Breadcrumb */}
      <div style={{ paddingTop: 100, paddingLeft: 32, paddingRight: 32 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: 8, fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
          <Link href="/" style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none" }}>Home</Link>
          <span>›</span>
          <Link href="/background-checks-gcc" style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none" }}>Background Checks GCC</Link>
          <span>›</span>
          <span style={{ color: "rgba(255,255,255,0.6)" }}>Saudi Arabia</span>
        </div>
      </div>

      {/* Hero */}
      <section style={{ padding: "40px 32px 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 50% at 60% 0%, rgba(7,8,228,0.1), transparent)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", display: "grid", gridTemplateColumns: "1fr auto", gap: 48, alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
              {["🇸🇦 Saudi Arabia", "PDPL-Compliant", "GOSI Verified", "Absher Integrated"].map(t => (
                <span key={t} style={{ fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 100, background: "rgba(7,8,228,0.12)", border: "1px solid rgba(7,8,228,0.25)", color: "#818CF8" }}>{t}</span>
              ))}
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 20 }}>
              Background Checks<br />
              <span style={{ color: "rgba(255,255,255,0.3)" }}>in Saudi Arabia</span>
            </h1>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, maxWidth: 560, marginBottom: 32 }}>
              Secure your Saudi recruitment with Wirestork. We offer PDPL-compliant background checks including criminal verification via Absher, GOSI employment checks, SIMAH credit verification, and education screening.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/background-checks-gcc" style={{ background: BTN_GRAD, color: "#fff", borderRadius: 100, padding: "13px 28px", fontSize: 13, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>
                Request a Check →
              </Link>
              <Link href="/background-checks-in-uae" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)", borderRadius: 100, padding: "13px 28px", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>
                🇦🇪 UAE →
              </Link>
            </div>
          </div>
          {/* Stats */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12, minWidth: 200 }}>
            {[["SAR 20", "Starting from"], ["3–5 days", "Avg turnaround"], ["Absher", "GOSI integrated"], ["ISO 27001", "Certified"]].map(([val, lbl]) => (
              <div key={lbl} style={{ ...GLASS, padding: "16px 20px", borderRadius: 12 }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 22, color: "#fff" }}>{val}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", fontWeight: 600 }}>{lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "72px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 14 }}>What We Check</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(26px, 4vw, 48px)", letterSpacing: "-0.03em" }}>
              Compliant Background Checks in Saudi Arabia
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {SERVICES.map(s => (
              <div key={s.title} style={{ ...GLASS, padding: "26px 24px" }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{s.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 16, color: "#fff", marginBottom: 6 }}>{s.title}</div>
                <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>{s.price}</span>
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.05)", padding: "2px 8px", borderRadius: 100 }}>{s.time}</span>
                </div>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.42)", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "72px 32px", background: "rgba(7,8,228,0.02)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 14 }}>Simple & Clear Pricing</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(26px, 4vw, 48px)", letterSpacing: "-0.03em" }}>
              Our Price Match Guarantee
            </h2>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.35)", marginTop: 10, maxWidth: 600, margin: "10px auto 0" }}>
              Complete transparency with no hidden fees. Fully aligned with ZATCA. If you receive a lower quote for a comparable, locally-governed screening package, we will match it.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
            {PRICING.map(p => (
              <div key={p.num} style={{ ...GLASS, padding: "24px 22px", borderRadius: 14 }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 32, color: BLUE, lineHeight: 1, marginBottom: 12 }}>{p.num}</div>
                <div style={{ fontWeight: 700, fontSize: 15, color: "#fff", marginBottom: 6 }}>{p.title}</div>
                <div style={{ marginBottom: 10 }}>
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>{p.prefix} </span>
                  <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 20, color: "#fff" }}>{p.price}</span>
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", display: "block", marginTop: 2 }}>{p.time}</span>
                </div>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.38)", lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <Link href="/background-checks-gcc" style={{ background: BTN_GRAD, color: "#fff", borderRadius: 100, padding: "13px 32px", fontSize: 13, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>
              Start Your Background Check →
            </Link>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "72px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 14 }}>Why It Matters</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(26px, 4vw, 48px)", letterSpacing: "-0.03em" }}>
              Why Background Screening is a Strategic Mandate in the Kingdom
            </h2>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.35)", marginTop: 10 }}>The digital-first verification needed to protect your reputation — Regional Screening Data Analysis 2024</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {FRAUD_STATS.map(f => (
              <div key={f.label} style={{ ...GLASS, padding: "32px 28px", borderRadius: 16 }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 48, color: BLUE, lineHeight: 1, marginBottom: 12 }}>{f.stat}</div>
                <div style={{ fontWeight: 700, fontSize: 16, color: "#fff", marginBottom: 10 }}>{f.label}</div>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.42)", lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "72px 32px", background: "rgba(7,8,228,0.02)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 14 }}>Our Approach</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(26px, 4vw, 44px)", letterSpacing: "-0.03em" }}>
              Unified Regional Reach, Localized Saudi Authority
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.38)", marginTop: 14, maxWidth: 640, margin: "14px auto 0" }}>
              Wirestork bridges the gap between global standards and Gulf-specific regulations. We go beyond regional data sharing with deep integration into Saudi-specific platforms like Absher, Najiz, and GOSI.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {TECH_PILLARS.map(t => (
              <div key={t.title} style={{ ...GLASS, padding: "28px 24px" }}>
                <div style={{ fontSize: 28, marginBottom: 14 }}>{t.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 16, color: "#fff", marginBottom: 10 }}>{t.title}</div>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.42)", lineHeight: 1.7, margin: 0 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-link */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "60px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: 20, flexWrap: "wrap" }}>
          <div style={{ ...GLASS, flex: 1, padding: "28px 28px", borderRadius: 16, minWidth: 260 }}>
            <p style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: 10 }}>Also Available</p>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 22, color: "#fff", marginBottom: 10 }}>UAE Background Checks</h3>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, marginBottom: 18 }}>PDPL-compliant background checks in the UAE with MOFA attestation, from AED 20. The fastest turnaround in the GCC at 1–2 business days.</p>
            <Link href="/background-checks-in-uae" style={{ color: BLUE, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>View UAE Checks →</Link>
          </div>
          <div style={{ ...GLASS, flex: 1, padding: "28px 28px", borderRadius: 16, minWidth: 260 }}>
            <p style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: 10 }}>Multi-Country</p>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 22, color: "#fff", marginBottom: 10 }}>All GCC Countries</h3>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, marginBottom: 18 }}>UAE, Saudi Arabia, Qatar, Kuwait, Oman, and Bahrain — comprehensive background screening across the entire GCC region from AED 85 per country.</p>
            <Link href="/background-checks-gcc" style={{ color: BLUE, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>View All GCC Checks →</Link>
          </div>
        </div>
      </section>

    </main>
  );
}
