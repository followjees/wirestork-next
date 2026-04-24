// app/(marketing)/background-checks-in-uae/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Background Checks in UAE | PDPL-Compliant Screening From AED 20",
  description: "PDPL-compliant background checks in UAE. Criminal records, employment verification, education checks, travel ban verification. Fast, accurate, legally compliant.",
  keywords: "background checks UAE, employment screening UAE, criminal record check UAE, PDPL background check, UAE background verification",
  openGraph: {
    title: "Background Checks in UAE | Wirestork",
    description: "Secure your business with reliable UAE background checks. PDPL-compliant, fast, accurate employment screening from AED 20.",
    type: "website",
  },
};

const BLUE = "#0708E4";
const BTN_GRAD = "linear-gradient(135deg, #0708E4 0%, #6366F1 100%)";
const GLASS: React.CSSProperties = { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16 };

const SERVICES = [
  { icon: "🔍", title: "Criminal Records", price: "AED 412", time: "1–2 days", desc: "Protect your business with thorough criminal history verification. Our comprehensive screening includes court records, police reports, and criminal activity verification — helping you hire with confidence and mitigate potential risks." },
  { icon: "💼", title: "Employment Verification", price: "AED 112", time: "4–6 days", desc: "Verify employment history thoroughly. We cross-check job titles, duties, employment periods, and departure reasons — giving you complete visibility into each candidate's professional background." },
  { icon: "🎓", title: "Education Verification", price: "AED 112", time: "6–10 days", desc: "Eliminate fraudulent qualifications. We confirm the authenticity of degrees, diplomas, and certificates directly with issuing institutions — providing verified proof of academic achievements." },
  { icon: "✈️", title: "GCC Travel Ban Verification", price: "AED 20", time: "Same day", desc: "Prevent costly hiring mistakes. We thoroughly screen candidates to ensure they're legally free to travel and work without restrictions — protecting your organization from legal repercussions and operational disruptions." },
  { icon: "📋", title: "Reference Checks", price: "AED 85", time: "2–3 days", desc: "Understand your candidates better. We speak directly with provided references to confirm skills, work ethic, and reliability — giving you authentic insights into past performance that resumes alone cannot reveal." },
  { icon: "💳", title: "Credit History Checks", price: "AED 120", time: "3–5 days", desc: "Protect financially sensitive positions. Our credit verification services reveal candidates' financial behavior and stability — helping you make informed decisions when hiring for roles requiring fiscal responsibility." },
];

const PRICING = [
  { num: "01", title: "Identity & Biometrics", price: "AED 20", prefix: "As low as", time: "Instant–1 day", desc: "Identity verification cross-referencing global databases. Essential for preventing fraud at the first touchpoint." },
  { num: "02", title: "Employment History", price: "AED 112", prefix: "Starting at", time: "4–6 business days", desc: "Detailed confirmation of dates, roles, and reasons for leaving. We verify directly with HR departments." },
  { num: "03", title: "Education Verification", price: "AED 112", prefix: "Starting at", time: "6–10 business days", desc: "Official confirmation of degree, institution, and graduation year. Global reach covering 190+ countries." },
  { num: "04", title: "Criminal Record Check", price: "AED 412", prefix: "As low as", time: "1–2 business days", desc: "Comprehensive UAE clearance background verification conducted by local legal teams." },
  { num: "05", title: "Global Sanctions & AML", price: "AED 85", prefix: "As low as", time: "Same day", desc: "Sanctions, PEP, and adverse media screening against global watchlists." },
  { num: "06", title: "Social Media Integrity", price: "AED 120", prefix: "Starting at", time: "2–3 business days", desc: "Structured social media review for reputational risk and professional conduct assessment." },
];

const LEGAL = [
  { title: "UAE Personal Data Protection Law (PDPL)", body: "The UAE's Federal Decree-Law No. 45 of 2021 on Personal Data Protection governs how background checks must be conducted. Under PDPL, employers must obtain explicit written consent from candidates before initiating any background verification. All personal data collected during screening must be relevant to the employment decision, stored securely, and retained only as long as necessary for business purposes." },
  { title: "UAE Labor Law Requirements", body: "Federal Decree-Law No. 33 of 2021 on the Regulation of Labor Relations establishes the framework for employment verification in the UAE. Employers have the right to verify candidate credentials, employment history, and criminal records as part of the hiring process. However, these checks must be conducted fairly, without discrimination, and candidates must be informed about the verification process." },
  { title: "Data Protection & Candidate Rights", body: "Candidates in the UAE have specific rights during background verification. They must be informed about what information will be collected, how it will be used, who will have access to it, and how long it will be retained. Candidates have the right to access their background check results, dispute inaccurate information, and withdraw consent at any stage of the hiring process." },
  { title: "DIFC and ADGM Special Zones", body: "Companies operating in Dubai International Financial Centre (DIFC) or Abu Dhabi Global Market (ADGM) must also comply with additional data protection regulations specific to these free zones. These jurisdictions have their own data protection laws that align with international standards like GDPR." },
];

const INDUSTRY = [
  { sector: "Healthcare", icon: "🏥", body: "The Ministry of Health (MOH) and Department of Health (DOH) require medical license verification, educational credential attestation through the UAE Ministry of Education, and criminal record clearance for all healthcare professionals." },
  { sector: "Financial Services", icon: "🏦", body: "The UAE Central Bank and Securities and Commodities Authority mandate enhanced screening including credit history checks, regulatory compliance verification, and sanctions list screening for employees handling financial transactions." },
  { sector: "Education", icon: "🎓", body: "The Ministry of Education requires teaching license verification, criminal background checks, and educational credential attestation from recognized institutions for all educators working in UAE schools." },
];

const FRAUD_STATS = [
  { stat: "25%", label: "Education Fraud", desc: "With candidates coming from all over the world, verifying degrees is critical. 25% of discrepancies involve embellished or fake academic credentials." },
  { stat: "1 in 3", label: "Employment History", desc: "An employee background check in UAE often reveals gap-filling or title inflation. We verify dates, roles, and reasons for leaving directly with sources." },
  { stat: "High Risk", label: "Criminal Record", desc: "Ensure workplace safety. We navigate the local police clearance protocols to provide accurate UAE background checks regarding criminal history." },
];

export default function BackgroundChecksUAEPage() {
  return (
    <main style={{ background: "#000", color: "#fff", minHeight: "100vh", fontFamily: "'Outfit', sans-serif" }}>

      {/* Breadcrumb */}
      <div style={{ paddingTop: 100, paddingLeft: 32, paddingRight: 32 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: 8, fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
          <Link href="/" style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none" }}>Home</Link>
          <span>›</span>
          <Link href="/background-checks-gcc" style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none" }}>Background Checks GCC</Link>
          <span>›</span>
          <span style={{ color: "rgba(255,255,255,0.6)" }}>UAE</span>
        </div>
      </div>

      {/* Hero */}
      <section style={{ padding: "40px 32px 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 50% at 60% 0%, rgba(7,8,228,0.1), transparent)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", display: "grid", gridTemplateColumns: "1fr auto", gap: 48, alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
              {["🇦🇪 UAE", "PDPL-Compliant", "From AED 20"].map(t => (
                <span key={t} style={{ fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 100, background: "rgba(7,8,228,0.12)", border: "1px solid rgba(7,8,228,0.25)", color: "#818CF8" }}>{t}</span>
              ))}
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 20 }}>
              Background Checks<br />
              <span style={{ color: "rgba(255,255,255,0.3)" }}>in UAE</span>
            </h1>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, maxWidth: 560, marginBottom: 32 }}>
              Stay safe and legally compliant when hiring in the Emirates. We provide fast, accurate, PDPL-compliant employment background check services to protect your company's reputation and assets.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/background-checks-gcc" style={{ background: BTN_GRAD, color: "#fff", borderRadius: 100, padding: "13px 28px", fontSize: 13, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>
                Request a Check →
              </Link>
              <Link href="/background-checks-in-saudi-arabia" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)", borderRadius: 100, padding: "13px 28px", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>
                🇸🇦 Saudi Arabia →
              </Link>
            </div>
          </div>
          {/* Stats */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12, minWidth: 200 }}>
            {[["AED 20", "Starting from"], ["1–2 days", "Criminal checks"], ["48 hrs", "Avg turnaround"], ["ISO 27001", "Certified"]].map(([val, lbl]) => (
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
              Comprehensive UAE Screening Services
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
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 14 }}>Transparent Pricing</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(26px, 4vw, 48px)", letterSpacing: "-0.03em" }}>
              PDPL-Compliant Screening From AED 20
            </h2>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.3)", marginTop: 10 }}>*Pricing indicators for volume screenings. No hidden fees.</p>
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

      {/* Why non-negotiable */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "72px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 14 }}>Why It Matters</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(26px, 4vw, 48px)", letterSpacing: "-0.03em" }}>
              Why a hiring background check is non-negotiable
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.35)", marginTop: 12 }}>Stop hiring resumes. Start hiring verified talent. — Regional Screening Data Analysis 2024</p>
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

      {/* Legal requirements */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "72px 32px", background: "rgba(7,8,228,0.02)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
            <div>
              <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 16 }}>Legal Framework</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(26px, 3.5vw, 44px)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 16 }}>
                Legal Requirements for Background Checks in UAE
              </h2>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.42)", lineHeight: 1.8 }}>
                Background checks in UAE must comply with specific legal frameworks to protect both employers and candidates. Understanding these requirements ensures your hiring process remains legally compliant while maintaining candidate privacy.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {LEGAL.map(l => (
                <div key={l.title} style={{ ...GLASS, padding: "20px 22px", borderRadius: 14 }}>
                  <div style={{ fontWeight: 700, fontSize: 15, color: "#fff", marginBottom: 8 }}>{l.title}</div>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.42)", lineHeight: 1.7, margin: 0 }}>{l.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry-specific */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "72px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 14 }}>Industry Requirements</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(26px, 4vw, 44px)", letterSpacing: "-0.03em" }}>
              Industry-Specific Regulations
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {INDUSTRY.map(i => (
              <div key={i.sector} style={{ ...GLASS, padding: "26px 24px" }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{i.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 16, color: "#fff", marginBottom: 10 }}>{i.sector}</div>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.42)", lineHeight: 1.7, margin: 0 }}>{i.body}</p>
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
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 22, color: "#fff", marginBottom: 10 }}>Saudi Arabia Screening</h3>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, marginBottom: 18 }}>PDPL & GOSI-compliant background checks for the Kingdom, including Absher-verified criminal records and SIMAH credit checks.</p>
            <Link href="/background-checks-in-saudi-arabia" style={{ color: BLUE, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>View Saudi Arabia Checks →</Link>
          </div>
          <div style={{ ...GLASS, flex: 1, padding: "28px 28px", borderRadius: 16, minWidth: 260 }}>
            <p style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: 10 }}>Multi-Country</p>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 22, color: "#fff", marginBottom: 10 }}>All GCC Countries</h3>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, marginBottom: 18 }}>UAE, Saudi Arabia, Qatar, Kuwait, Oman, and Bahrain — comprehensive background screening across the entire GCC region.</p>
            <Link href="/background-checks-gcc" style={{ color: BLUE, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>View All GCC Checks →</Link>
          </div>
        </div>
      </section>

    </main>
  );
}
