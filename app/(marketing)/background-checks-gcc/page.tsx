// app/(marketing)/background-checks-gcc/page.tsx — SERVER COMPONENT
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Background Checks Across GCC Countries | Wirestork",
  description: "PDPL-compliant background screening across UAE, Saudi Arabia, Kuwait, Qatar, Oman & Bahrain. Criminal checks, employment verification, education checks, travel ban checks. 1–7 days.",
  keywords: ["background checks GCC", "background verification UAE", "employee background check UAE", "GCC background screening", "criminal background check UAE"],
  openGraph: {
    title: "Background Verification Across GCC Countries | Wirestork",
    description: "Criminal background checks, employment verification, education checks, travel ban checks across all GCC countries. PDPL-compliant.",
    type: "website",
  },
  alternates: { canonical: "https://wirestork.com/background-checks-gcc/" },
};

const BLUE = "#0708E4";
const BTN_GRAD = "linear-gradient(135deg, #0708E4 0%, #6366F1 100%)";
const BTN_CONTRAST = "linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)";
const GLASS = { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 24 } as const;

const CHECK_TYPES = [
  {
    icon: "🔍",
    title: "Criminal Background Checks",
    body: "Protect your business from potential risks by verifying the criminal history of prospective employees. Our thorough checks include court records, police reports, and any history of criminal activity.",
  },
  {
    icon: "💼",
    title: "Employment Verification",
    body: "Ensure the integrity of your workforce with our detailed employment verification service. We cross-check previous job titles, duties, durations of employment, and reasons for leaving to give you a complete picture.",
  },
  {
    icon: "🎓",
    title: "Education Verification",
    body: "Avoid fraudulent qualifications with our education verification services. We confirm the authenticity of degrees, diplomas, and certificates directly with educational institutions.",
  },
  {
    icon: "✈️",
    title: "Travel Ban Checks",
    body: "Avoid the legal and financial repercussions of hiring someone with a travel ban. Our services include thorough checks across the GCC to ensure your hires are free to travel and work without restrictions.",
  },
  {
    icon: "👥",
    title: "Reference Checks",
    body: "Gain insights into a candidate's past performance and behavior with our professional reference checks. We speak directly with provided references to validate skills, work ethic, and reliability.",
  },
  {
    icon: "💳",
    title: "Credit History Checks",
    body: "For roles that require financial responsibility, our credit history checks provide an overview of a candidate's financial behavior and stability.",
  },
];

const COUNTRIES = [
  {
    flag: "🇦🇪",
    name: "United Arab Emirates",
    checks: ["Identity & Emirates ID Verification", "Employment History Validation", "Criminal Record & Police Clearance", "Travel Ban Status Check", "Education Credential Attestation", "Professional License Verification"],
    turnaround: "1–2 days (criminal) | 4–6 days (comprehensive)",
    compliance: "PDPL Federal Decree-Law No. 45 of 2021",
    from: "AED 20",
    slug: "/travel-ban-uae-check",
    cta: "Get UAE Background Check →",
  },
  {
    flag: "🇸🇦",
    name: "Saudi Arabia (KSA)",
    checks: ["Absher Employment Verification", "GOSI Records Validation", "Criminal Background Check", "Education History Attestation", "Professional Certification Validation", "Identity & Iqama Verification"],
    turnaround: "3–5 days average",
    compliance: "Saudi Personal Data Protection Law",
    from: "AED 112",
    slug: "/check-travel-ban-in-saudi-arabia",
    cta: "Get Saudi Background Check →",
  },
  {
    flag: "🇶🇦",
    name: "Qatar",
    checks: ["Criminal History Verification", "Employment Record Check", "Ministry of Interior Clearance", "Education Credential Validation", "Travel Ban Status"],
    turnaround: "4–6 days",
    compliance: "Qatar Labor Law Requirements",
    from: "AED 120",
    slug: "/reach-us",
    cta: "Request Qatar Check →",
  },
  {
    flag: "🇰🇼",
    name: "Kuwait",
    checks: ["Identity & Civil ID Verification", "Employment Background Check", "Criminal Record Search", "Public Authority for Manpower Records", "Litigation & Court Case Search"],
    turnaround: "5–7 days",
    compliance: "Kuwait Labor Law Standards",
    from: "AED 120",
    slug: "/reach-us",
    cta: "Request Kuwait Check →",
  },
  {
    flag: "🇴🇲",
    name: "Oman & Bahrain",
    checks: ["Royal Oman Police Clearance", "Criminal & Court Records", "LMRA Verification (Bahrain)", "Employment History Validation", "Education & License Verification"],
    turnaround: "3–7 days",
    compliance: "Country-Specific Labor Regulations",
    from: "AED 112",
    slug: "/reach-us",
    cta: "Request Check →",
  },
  {
    flag: "🌐",
    name: "International (55+ Countries)",
    checks: ["Global Criminal Watchlists", "International Employment Verification", "Academic Credential Authentication", "Interpol Database Screening", "Multi-Country Background Packages"],
    turnaround: "7–15 days (varies by country)",
    compliance: "North America, Europe, Asia, Africa, Australia",
    from: "AED 85",
    slug: "/reach-us",
    cta: "Request International Check →",
    highlight: true,
  },
];

const GCC_DIFFERENCES = [
  {
    title: "Data Protection Standards",
    body: "UAE and Saudi Arabia have the most comprehensive data protection laws in the region, with specific requirements for background check consent and data retention. Other GCC countries are developing similar frameworks.",
  },
  {
    title: "Digital Infrastructure",
    body: "UAE and Saudi Arabia offer the most advanced digital verification systems through government portals. Kuwait, Oman, Bahrain, and Qatar are progressively digitizing but may still require manual processes for certain checks.",
  },
  {
    title: "Turnaround Times",
    body: "UAE offers the fastest verification at 1–2 days for basic checks. Saudi Arabia follows at 3–5 days. Other GCC countries range from 4–7 days depending on complexity and government processing speeds.",
  },
  {
    title: "Education Verification",
    body: "All GCC countries require proper attestation of international degrees, but processes vary significantly. UAE's MOFA attestation is most streamlined, while other countries may require multiple levels of authentication.",
  },
  {
    title: "Criminal Record Access",
    body: "UAE and Bahrain offer the most efficient criminal record checks through established legal channels. Saudi Arabia's Absher system has improved access significantly. Qatar, Kuwait, and Oman require more traditional application processes.",
  },
  {
    title: "Industry-Specific Requirements",
    body: "Financial services face enhanced scrutiny with sanctions screening and credit checks. Healthcare workers need license verification through country-specific health authorities. Education sectors require teaching license validation.",
  },
];

const MOBILITY_RISKS = [
  {
    n: "01",
    title: "Undisclosed Travel Bans",
    body: "A candidate may have travel restrictions in one GCC country while applying for jobs in another. These bans often stem from unpaid debts, legal disputes, or visa violations that candidates fail to disclose. Regional screening prevents costly discoveries after hiring.",
  },
  {
    n: "02",
    title: "Hidden Employment Issues",
    body: "Termination for cause in Saudi Arabia, labor ban in UAE, or contract violations in Qatar may not appear on single-country checks. Comprehensive GCC screening reveals the complete employment picture across all previous work locations.",
  },
  {
    n: "03",
    title: "Legal Complications Across Borders",
    body: "Court cases, financial disputes, or criminal matters in one GCC country can impact employment eligibility in others. Regional criminal background checks ensure you're aware of any legal issues within the Gulf region.",
  },
  {
    n: "04",
    title: "Credential Fraud Across Jurisdictions",
    body: "Fake degrees from one country, forged employment letters from another, and fabricated experience across multiple GCC locations are increasingly common. Regional verification through primary sources catches these discrepancies.",
  },
];

export default function BackgroundChecksGCCPage() {
  return (
    <div style={{ background: "#000", color: "#fff", fontFamily: "'Outfit', sans-serif" }}>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org/", "@type": "Service",
        "name": "Background Verification Across GCC Countries",
        "provider": { "@type": "Organization", "name": "Wirestork" },
        "description": "PDPL-compliant background screening across UAE, Saudi Arabia, Kuwait, Qatar, Oman & Bahrain.",
        "areaServed": ["AE","SA","KW","BH","QA","OM"],
      })}} />

      {/* ── TRUST BAR ───────────────────────────────────────────────── */}
      <div style={{ background: "rgba(255,255,255,0.02)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "10px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 20 }}>
          {[["🔒", "PDPL-Compliant"], ["🌍", "6 GCC Countries"], ["⚡", "From 1 Day"], ["⭐", "99.9% Accuracy"]].map(([icon, label]) => (
            <span key={String(label)} style={{ display: "flex", alignItems: "center", gap: 7, border: "1px dashed rgba(7,8,228,0.4)", borderRadius: 100, padding: "5px 14px", fontSize: 13, color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>
              <span>{icon}</span> {label}
            </span>
          ))}
        </div>
      </div>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section style={{ paddingTop: 100, paddingBottom: 80, position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)", backgroundSize: "40px 40px", maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 60%, transparent 100%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", position: "relative" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(7,8,228,0.12)", border: "1px solid rgba(7,8,228,0.3)", borderRadius: 100, padding: "4px 14px 4px 8px", marginBottom: 28 }}>
              <span style={{ background: BTN_GRAD, color: "#fff", borderRadius: 100, padding: "2px 10px", fontSize: 10, fontWeight: 900, letterSpacing: "0.1em" }}>GCC</span>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.6)" }}>Background Verification — PDPL Compliant</span>
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(38px, 5vw, 60px)", lineHeight: 1.0, letterSpacing: "-0.03em", marginBottom: 20 }}>
              Background Checks Across{" "}
              <span style={{ color: BLUE }}>GCC Countries</span>
            </h1>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.5)", lineHeight: 1.75, marginBottom: 12 }}>
              PDPL-Compliant Background Screening Across UAE, Saudi Arabia, Kuwait, Qatar, Oman & Bahrain.
            </p>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.35)", lineHeight: 1.75, marginBottom: 36 }}>
              If trust and safety is paramount in your business, we have you covered. Wirestork offers a suite of comprehensive background check services designed to give you peace of mind.
            </p>
            <div style={{ ...GLASS, padding: 28 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 24px", marginBottom: 24 }}>
                {["Criminal background checks", "Employment verification", "Education credential checks", "Travel ban checks", "Reference checks", "Credit history checks"].map((f) => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>
                    <span style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 11, color: "#4ADE80" }}>✓</span>
                    {f}
                  </div>
                ))}
              </div>
              <a href="#section-countries" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, background: BTN_GRAD, color: "#fff", padding: "15px 24px", borderRadius: 12, fontWeight: 900, fontSize: 16, textDecoration: "none", marginBottom: 14 }}>
                Select Your Country →
              </a>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: 100, padding: "7px 16px", fontSize: 12, fontWeight: 700, color: "#4ADE80" }}>
                🔒 PDPL Compliant · Candidate not notified
              </div>
            </div>
          </div>

          {/* Right — stats + country selector */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
              {[["100,000+", "Checks Done"], ["55+", "Jurisdictions"], ["99.9%", "Accuracy"]].map(([n, l]) => (
                <div key={l} style={{ ...GLASS, padding: "20px 16px", textAlign: "center" }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 26, color: "#fff", lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginTop: 6 }}>{l}</div>
                </div>
              ))}
            </div>
            <div style={{ ...GLASS, padding: 24 }}>
              <div style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 16 }}>🌍 Select Your Country for Specific Background Check Information</div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {[["🇦🇪", "UAE"], ["🇸🇦", "Saudi Arabia"], ["🇶🇦", "Qatar"], ["🇰🇼", "Kuwait"], ["🇴🇲", "Oman"], ["🇧🇭", "Bahrain"], ["🌐", "International"]].map(([flag, name]) => (
                  <a key={String(name)} href="#section-countries" style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, padding: "7px 12px", fontSize: 13, color: "rgba(255,255,255,0.7)", fontWeight: 600, textDecoration: "none" }}>
                    <span>{flag}</span> {name}
                  </a>
                ))}
              </div>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", marginTop: 14, marginBottom: 0 }}>Need multi-country screening? <a href="/reach-us" style={{ color: "#818CF8", textDecoration: "none" }}>Request a custom quote</a></p>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <div style={{ ...GLASS, padding: "14px 18px", flex: 1, textAlign: "center" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>Compliance</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>SOC 2 · GDPR · ISO 27001</div>
              </div>
              <div style={{ ...GLASS, padding: "14px 18px", flex: 1, textAlign: "center" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>Avg. Turnaround</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#FCD34D" }}>⚡ 48 hrs average</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE CHECK ────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "80px 32px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 14 }}>Comprehensive Coverage</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em", marginBottom: 16 }}>Background Check Services We Provide</h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 17, maxWidth: 560, margin: "0 auto" }}>Every check is conducted by licensed professionals, compliant with regional data protection laws, and delivered as a clear, actionable report.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {CHECK_TYPES.map((c) => (
              <div key={c.title} style={{ ...GLASS, padding: 28 }}>
                <div style={{ fontSize: 32, marginBottom: 14 }}>{c.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 17, color: "#fff", marginBottom: 10 }}>{c.title}</h3>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.75 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COUNTRY CARDS ────────────────────────────────────────────── */}
      <section id="section-countries" style={{ padding: "80px 32px", borderTop: "1px solid rgba(255,255,255,0.06)", scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 14 }}>By Country</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em", marginBottom: 16 }}>Comprehensive. Efficient. Reliable.</h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 17, maxWidth: 640, margin: "0 auto" }}>Wirestork offers unparalleled precision and speed in background screening and legal checks across the GCC. Each country has unique legal frameworks — we handle them all.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {COUNTRIES.map((c) => (
              <div key={c.name} style={{ ...GLASS, padding: 28, display: "flex", flexDirection: "column", background: c.highlight ? "rgba(7,8,228,0.06)" : "rgba(255,255,255,0.03)", border: c.highlight ? "1px solid rgba(7,8,228,0.25)" : "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <span style={{ fontSize: 28 }}>{c.flag}</span>
                  <h3 style={{ fontWeight: 700, fontSize: 17, color: "#fff", margin: 0 }}>{c.name}</h3>
                </div>
                <div style={{ fontSize: 10, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 10 }}>Most Requested Checks</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 16, flex: 1 }}>
                  {c.checks.map((ch) => (
                    <div key={ch} style={{ display: "flex", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.6)", alignItems: "flex-start" }}>
                      <span style={{ color: BLUE, flexShrink: 0, marginTop: 2 }}>✓</span>{ch}
                    </div>
                  ))}
                </div>
                <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 10, padding: "10px 14px", marginBottom: 16, fontSize: 12 }}>
                  <div style={{ color: "rgba(255,255,255,0.4)", marginBottom: 4 }}>⏱ <strong style={{ color: "rgba(255,255,255,0.7)" }}>Turnaround:</strong> {c.turnaround}</div>
                  <div style={{ color: "rgba(255,255,255,0.4)" }}>📋 <strong style={{ color: "rgba(255,255,255,0.7)" }}>Compliance:</strong> {c.compliance}</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 16 }}>
                  <div>
                    <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Starting From</div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 22, color: "#fff" }}>{c.from}</div>
                  </div>
                  <Link href={c.slug} style={{ background: BTN_GRAD, color: "#fff", borderRadius: 10, padding: "9px 16px", fontSize: 12, fontWeight: 900, textDecoration: "none", letterSpacing: "0.05em" }}>
                    {c.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COUNTRY-SPECIFIC INFO ────────────────────────────────────── */}
      <section style={{ padding: "80px 32px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ marginBottom: 52 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 14 }}>Regional Compliance</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.02em", marginBottom: 16 }}>Background Check Requirements Across GCC Countries</h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", lineHeight: 1.8 }}>Each GCC country has unique legal frameworks and verification processes for background screening. Understanding these differences ensures compliance and efficient hiring across the region.</p>
          </div>

          {[
            { flag: "🇦🇪", country: "United Arab Emirates", accent: "#60A5FA", body: "UAE leads the GCC in digital transformation for background verification. The UAE's Personal Data Protection Law (PDPL) Federal Decree-Law No. 45 of 2021 sets strict standards for candidate consent and data handling. Background checks typically complete in 1–2 days for criminal records and 4–6 days for comprehensive packages. The UAE requires attestation through MOFA for international credentials and offers streamlined processes through government portals." },
            { flag: "🇸🇦", country: "Saudi Arabia", accent: "#34D399", body: "Saudi Arabia uses the Absher platform for integrated government verification services, making employment and criminal record checks more efficient than ever before. The Saudi Personal Data Protection Law mirrors UAE's PDPL requirements. Background checks in Saudi Arabia typically take 3–5 days and must comply with Saudization policies. The Ministry of Human Resources and Social Development oversees employment verification standards." },
            { flag: "🇶🇦", country: "Qatar", accent: "#818CF8", body: "Qatar has implemented comprehensive labor law reforms requiring enhanced due diligence for employers. Background checks take 4–6 days on average. The country's exit permit abolition and minimum wage implementation have increased focus on proper employee verification. Qatar requires specific attestation procedures for educational credentials through the Ministry of Education." },
            { flag: "🇰🇼", country: "Kuwait", accent: "#FCD34D", body: "Kuwait maintains traditional verification processes with growing digitization initiatives. Background checks typically require 5–7 days for completion. Kuwait's labor law mandates criminal record verification for specific industries and positions. The Public Authority for Manpower oversees employment verification standards." },
            { flag: "🇴🇲", country: "Oman", accent: "#F472B6", body: "Oman requires background checks for expatriate workers across most sectors, with particular emphasis on healthcare, education, and financial services. Verification processes take 3–7 days depending on the scope. Oman's Royal Oman Police handles criminal record clearances, which must be obtained for many employment categories." },
            { flag: "🇧🇭", country: "Bahrain", accent: "#FB923C", body: "Bahrain offers relatively streamlined background verification through the Labour Market Regulatory Authority (LMRA). Checks typically complete within 3–5 days. Bahrain requires police clearance certificates for certain positions and maintains specific requirements for financial sector employees under Central Bank of Bahrain regulations." },
          ].map((item) => (
            <div key={item.country} style={{ borderLeft: `4px solid ${item.accent}`, paddingLeft: 28, marginBottom: 36 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <span style={{ fontSize: 24 }}>{item.flag}</span>
                <h3 style={{ fontWeight: 700, fontSize: 20, color: item.accent, margin: 0 }}>{item.country}</h3>
              </div>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", lineHeight: 1.85, margin: 0 }}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── KEY DIFFERENCES ──────────────────────────────────────────── */}
      <section style={{ background: "#fff", color: "#000", borderRadius: 80, margin: "0 16px", padding: "80px 64px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em", color: "#111", marginBottom: 16 }}>Comparing GCC Background Check Regulations</h2>
            <p style={{ fontSize: 18, color: "#6B7280", maxWidth: 560, margin: "0 auto" }}>Key differences in background screening across the Gulf Cooperation Council.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {GCC_DIFFERENCES.map((item, i) => (
              <div key={item.title} style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 40, padding: "28px 0", borderBottom: i < GCC_DIFFERENCES.length - 1 ? "1px solid #E5E7EB" : "none", alignItems: "start" }}>
                <div style={{ fontWeight: 800, fontSize: 16, color: "#0708E4" }}>{item.title}</div>
                <div style={{ fontSize: 15, color: "#6B7280", lineHeight: 1.75 }}>{item.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TALENT MOBILITY RISKS ────────────────────────────────────── */}
      <section style={{ padding: "80px 32px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 52 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 14 }}>Why Regional Screening Matters</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.02em", marginBottom: 16 }}>The GCC Talent Mobility Challenge</h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", lineHeight: 1.8, maxWidth: 720 }}>The Gulf Cooperation Council facilitates significant workforce movement across member states. A candidate who worked in Dubai may have previous employment in Riyadh, educational credentials from Kuwait, and undisclosed legal issues in Bahrain. Without comprehensive regional screening, employers risk:</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 48 }}>
            {MOBILITY_RISKS.map((r) => (
              <div key={r.n} style={{ ...GLASS, padding: 28, borderLeft: `3px solid rgba(7,8,228,0.4)`, borderRadius: "0 24px 24px 0", borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}>
                <div style={{ fontSize: 10, fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase", color: BLUE, marginBottom: 8 }}>{r.n}</div>
                <h3 style={{ fontWeight: 700, fontSize: 17, color: "#fff", marginBottom: 10 }}>{r.title}</h3>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.8, margin: 0 }}>{r.body}</p>
              </div>
            ))}
          </div>

          {/* Benefits of unified screening */}
          <div style={{ ...GLASS, padding: 36 }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 28, marginBottom: 24, color: "#fff" }}>Benefits of Unified GCC Background Screening</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
              {[
                ["🎯", "Single Point of Contact", "Instead of coordinating with multiple vendors across six countries, manage all GCC background checks through one platform."],
                ["✈️", "Regional Travel Ban Verification", "Check for travel restrictions across all GCC countries to prevent costly hiring mistakes when candidates have undisclosed bans in neighboring countries."],
                ["🔍", "Multi-Country Criminal Checks", "Verify criminal records across multiple GCC jurisdictions for candidates with regional work history, ensuring comprehensive risk assessment."],
                ["⚡", "Coordinated Verification Timing", "Manage background checks across different GCC countries simultaneously, reducing overall hiring timeline despite varying processing speeds."],
                ["📋", "Centralized Reporting", "Receive unified reports covering all GCC countries in standardized formats, simplifying decision-making for regional hiring managers."],
                ["🔒", "PDPL Compliance", "All checks conducted in accordance with UAE PDPL, Saudi PDPL, and applicable local data protection regulations."],
              ].map(([icon, title, body]) => (
                <div key={String(title)} style={{ background: "rgba(255,255,255,0.03)", borderRadius: 14, padding: 20 }}>
                  <div style={{ fontSize: 24, marginBottom: 10 }}>{icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "#fff", marginBottom: 6 }}>{title}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.65 }}>{body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────── */}
      <section style={{ padding: "0 32px 80px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ ...GLASS, padding: 56, textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(28px, 4vw, 44px)", letterSpacing: "-0.02em", marginBottom: 16 }}>Start with a Background Verification</h2>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.45)", marginBottom: 12, maxWidth: 540, margin: "0 auto 12px" }}>70+ trusted partners worldwide. 100,000+ checks completed. Operating across UAE, Saudi Arabia, and 55+ jurisdictions globally.</p>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.25)", marginBottom: 32 }}>Looking for country-specific information? Explore our dedicated pages for <Link href="/travel-ban-uae-check" style={{ color: "#818CF8", textDecoration: "none" }}>UAE background checks</Link> and <Link href="/check-travel-ban-in-saudi-arabia" style={{ color: "#818CF8", textDecoration: "none" }}>Saudi Arabia screening services</Link>.</p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="#section-countries" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: BTN_GRAD, color: "#fff", padding: "15px 32px", borderRadius: 12, fontWeight: 900, fontSize: 15, textDecoration: "none", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                Get a Background Check →
              </a>
              <Link href="/reach-us" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", padding: "14px 32px", borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
                Request Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile sticky CTA */}
      <style>{`@media (min-width: 768px) { .mob-cta-bgcheck { display: none !important; } }`}</style>
      <div className="mob-cta-bgcheck" style={{ position: "fixed", left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.92)", backdropFilter: "blur(12px)", borderTop: "1px solid rgba(7,8,228,0.3)", padding: "12px 16px", zIndex: 50 }}>
        <a href="#section-countries" style={{ display: "block", background: BTN_GRAD, color: "#fff", borderRadius: 12, padding: "13px", fontWeight: 900, fontSize: 15, textAlign: "center", textDecoration: "none" }}>Get a Background Check →</a>
      </div>

    </div>
  );
}
