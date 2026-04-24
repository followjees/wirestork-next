// app/(marketing)/background-checks-gcc/page.tsx — SERVER COMPONENT
import type { Metadata } from "next";
import Link from "next/link";
import BGCCPrequalClient from "./BGCCPrequalClient";

export const metadata: Metadata = {
  title: "Background Checks GCC | UAE, Saudi, Kuwait, Qatar, Oman & Bahrain — Wirestork",
  description: "PDPL-compliant background screening across UAE, Saudi Arabia, Kuwait, Qatar, Oman & Bahrain. Criminal checks, employment verification, education checks, travel ban checks. 1–7 days.",
  keywords: ["background checks GCC", "background verification UAE", "employee background check UAE", "GCC background screening", "criminal background check UAE"],
  openGraph: {
    title: "Background Checks Across GCC Countries | Wirestork",
    description: "Criminal background checks, employment verification, education checks, travel ban checks across all GCC countries. PDPL-compliant.",
    type: "website",
  },
  alternates: { canonical: "https://wirestork.com/background-checks-gcc/" },
};

const BLUE = "#0708E4";
const BTN_GRAD = "linear-gradient(135deg, #0708E4 0%, #6366F1 100%)";
const GLASS = { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16 } as const;

export default function BackgroundChecksGCCPage() {
  return (
    <div style={{ background: "#000", color: "#fff", fontFamily: "'Outfit', sans-serif" }}>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section style={{ padding: "120px 32px 72px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)", backgroundSize: "40px 40px", maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 60%, transparent 100%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
            {["🇦🇪 UAE", "🇸🇦 Saudi Arabia", "🇶🇦 Qatar", "🇰🇼 Kuwait", "🇴🇲 Oman", "🇧🇭 Bahrain"].map(t => (
              <span key={t} style={{ fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 100, background: "rgba(7,8,228,0.1)", border: "1px solid rgba(7,8,228,0.2)", color: "#818CF8" }}>{t}</span>
            ))}
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(38px, 6vw, 70px)", lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 20 }}>
            Background Checks Across<br />
            <span style={{ color: BLUE }}>GCC Countries</span>
          </h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, maxWidth: 640, marginBottom: 12 }}>
            PDPL-Compliant Background Screening Across UAE, Saudi Arabia, Kuwait, Qatar, Oman & Bahrain.
          </p>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.35)", lineHeight: 1.8, maxWidth: 640, marginBottom: 32 }}>
            If trust and safety is paramount in your business, we have you covered. Wirestork offers a suite of comprehensive background check services designed to give you peace of mind.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/background-checks-in-uae" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", color: "#fff", borderRadius: 100, padding: "10px 22px", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>
              🇦🇪 UAE Background Checks
            </Link>
            <Link href="/background-checks-in-saudi-arabia" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", color: "#fff", borderRadius: 100, padding: "10px 22px", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>
              🇸🇦 Saudi Background Checks
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRUST NETWORK ────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "52px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ textAlign: "center", fontSize: 11, fontWeight: 900, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", marginBottom: 36 }}>Wirestork Trust Network — Trusted Verification. Globally.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 20, textAlign: "center" }}>
            {[
              ["Operating across", "US, UK, Estonia & UAE"],
              ["70+", "Trusted Partners Worldwide"],
              ["100,000+", "Checks Completed"],
              ["55+", "Jurisdictions"],
              ["48 hrs", "Average Turnaround"],
            ].map(([val, lbl]) => (
              <div key={lbl} style={{ ...GLASS, padding: "20px 16px" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 22, color: "#fff", marginBottom: 6, lineHeight: 1.2 }}>{val}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.32)", fontWeight: 600 }}>{lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHECK TYPES ──────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "72px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 14 }}>What We Check</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(26px, 4vw, 48px)", letterSpacing: "-0.03em" }}>
              Start with a Background Check
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {[
              { icon: "🔍", title: "Criminal Background Checks", desc: "Protect your business from potential risks by verifying the criminal history of prospective employees. Our thorough checks include court records, police reports, and any history of criminal activity." },
              { icon: "💼", title: "Employment Verification", desc: "Ensure the integrity of your workforce with our detailed employment verification service. We cross-check previous job titles, duties, durations of employment, and reasons for leaving to give you a complete picture." },
              { icon: "🎓", title: "Education Verification", desc: "Avoid fraudulent qualifications with our education verification services. We confirm the authenticity of degrees, diplomas, and certificates directly with educational institutions." },
              { icon: "✈️", title: "Travel Ban Checks", desc: "Avoid the legal and financial repercussions of hiring someone with a travel ban. Our services include thorough checks across the GCC to ensure your hires are free to travel and work without restrictions." },
              { icon: "📋", title: "Reference Checks", desc: "Gain insights into a candidate's past performance and behavior with our professional reference checks. We speak directly with provided references to validate skills, work ethic, and reliability." },
              { icon: "💳", title: "Credit History Checks", desc: "For roles that require financial responsibility, our credit history checks provide an overview of a candidate's financial behavior and stability." },
            ].map(c => (
              <div key={c.title} style={{ ...GLASS, padding: "26px 24px" }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{c.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 16, color: "#fff", marginBottom: 8 }}>{c.title}</div>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.42)", lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COUNTRY CARDS ────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "72px 32px", background: "rgba(7,8,228,0.02)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 12 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 14 }}>Comprehensive. Efficient. Reliable.</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(26px, 4vw, 48px)", letterSpacing: "-0.03em", marginBottom: 14 }}>
              Select Your Country for Specific Background Check Information
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.38)", marginBottom: 40, maxWidth: 640, margin: "0 auto 40px" }}>
              Wirestork offers unparalleled precision and speed in background screening and legal checks across the GCC. If you seek reliability and accuracy in managing legal risks, Wirestork is the industry leader you can depend on.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {[
              {
                flag: "🇦🇪", name: "United Arab Emirates", from: "AED 20", turnaround: "1–6 Days",
                compliance: "PDPL Federal Decree-Law No. 45 of 2021",
                checks: ["Identity & Emirates ID Verification", "Employment History Validation", "Criminal Record & Police Clearance", "Travel Ban Status Check", "Education Credential Attestation", "Professional License Verification"],
                orderSlug: "#prequalify", infoSlug: "/background-checks-in-uae", cta: "Get UAE Background Check",
              },
              {
                flag: "🇸🇦", name: "Saudi Arabia (KSA)", from: "AED 112", turnaround: "3–5 Days",
                compliance: "Saudi Personal Data Protection Law",
                checks: ["Absher Employment Verification", "GOSI Records Validation", "Criminal Background Check", "Education History Attestation", "Professional Certification Validation", "Identity & Iqama Verification"],
                orderSlug: "#prequalify", infoSlug: "/background-checks-in-saudi-arabia", cta: "Get Saudi Background Check",
              },
              {
                flag: "🇶🇦", name: "Qatar", from: "AED 120", turnaround: "4–6 Days",
                compliance: "Qatar Labor Law Requirements",
                checks: ["Criminal History Verification", "Employment Record Check", "Ministry of Interior Clearance", "Education Credential Validation", "Travel Ban Status"],
                orderSlug: "#prequalify", infoSlug: null, cta: "Request Qatar Check",
              },
              {
                flag: "🇰🇼", name: "Kuwait", from: "AED 120", turnaround: "5–7 Days",
                compliance: "Kuwait Labor Law Standards",
                checks: ["Identity & Civil ID Verification", "Employment Background Check", "Criminal Record Search", "Public Authority for Manpower Records", "Litigation & Court Case Search"],
                orderSlug: "#prequalify", infoSlug: null, cta: "Request Kuwait Check",
              },
              {
                flag: "🇴🇲", name: "Oman & Bahrain", from: "AED 112", turnaround: "3–7 Days",
                compliance: "Country-Specific Labor Regulations",
                checks: ["Royal Oman Police Clearance", "Criminal & Court Records", "LMRA Verification (Bahrain)", "Employment History Validation", "Education & License Verification"],
                orderSlug: "#prequalify", infoSlug: null, cta: "Request Check",
              },
              {
                flag: "🌐", name: "International (55+ Countries)", from: "AED 85", turnaround: "Global Coverage",
                compliance: "North America, Europe, Asia, Africa, Australia",
                checks: ["Global Criminal Watchlists", "International Employment Verification", "Academic Credential Authentication", "Interpol Database Screening", "Multi-Country Background Packages"],
                orderSlug: "#prequalify", infoSlug: null, cta: "Request International Check",
                highlight: true,
              },
            ].map(c => (
              <div key={c.name} style={{ ...GLASS, padding: "24px 22px", border: (c as { highlight?: boolean }).highlight ? "1px solid rgba(7,8,228,0.25)" : "1px solid rgba(255,255,255,0.08)", background: (c as { highlight?: boolean }).highlight ? "rgba(7,8,228,0.05)" : "rgba(255,255,255,0.03)" }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{c.flag}</div>
                <div style={{ fontWeight: 700, fontSize: 16, color: "#fff", marginBottom: 4 }}>{c.name}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginBottom: 14 }}>Most Requested Checks:</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 5, marginBottom: 16 }}>
                  {c.checks.map(ch => (
                    <div key={ch} style={{ display: "flex", gap: 7, alignItems: "flex-start", fontSize: 12, color: "rgba(255,255,255,0.55)" }}>
                      <span style={{ color: "#4ADE80", flexShrink: 0 }}>✓</span>{ch}
                    </div>
                  ))}
                </div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", marginBottom: 6 }}>⏱ Turnaround: <span style={{ color: "rgba(255,255,255,0.6)", fontWeight: 600 }}>{c.turnaround}</span></div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", marginBottom: 16 }}>Compliance: {c.compliance}</div>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 14, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ fontSize: 10, color: "rgba(255,255,255,0.28)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Starting From</div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 20, color: "#fff" }}>{c.from}</div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 5, alignItems: "flex-end" }}>
                    <a href={c.orderSlug} style={{ background: BTN_GRAD, color: "#fff", borderRadius: 10, padding: "8px 14px", fontSize: 11, fontWeight: 900, textDecoration: "none", letterSpacing: "0.04em" }}>
                      {c.cta}
                    </a>
                    {c.infoSlug && (
                      <Link href={c.infoSlug} style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", textDecoration: "none", fontWeight: 600 }}>View detailed guide →</Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 28 }}>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.35)" }}>Need multi-country screening? <a href="#prequalify" style={{ color: BLUE, textDecoration: "none", fontWeight: 700 }}>Request a custom quote</a></p>
          </div>
        </div>
      </section>

      {/* ── BACKGROUND CHECK REQUIREMENTS ACROSS GCC ─────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "72px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 14 }}>Regional Compliance</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(26px, 4vw, 48px)", letterSpacing: "-0.03em", marginBottom: 14 }}>
              Background Check Requirements Across GCC Countries
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.42)", lineHeight: 1.8, maxWidth: 800 }}>
              Each GCC country has unique legal frameworks and verification processes for background screening. Understanding these differences ensures compliance and efficient hiring across the region. If trust and safety is paramount in your business, we have you covered. Looking for country-specific information? Explore our dedicated pages for <Link href="/background-checks-in-uae" style={{ color: BLUE, textDecoration: "none", fontWeight: 600 }}>UAE background checks</Link> and <Link href="/background-checks-in-saudi-arabia" style={{ color: BLUE, textDecoration: "none", fontWeight: 600 }}>Saudi Arabia screening services</Link>.
            </p>
          </div>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 28, letterSpacing: "-0.02em", marginBottom: 32 }}>Comparing GCC Background Check Regulations</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 48 }}>
            {[
              { flag: "🇦🇪", country: "United Arab Emirates", accent: "#60A5FA", body: "United Arab Emirates leads the GCC in digital transformation for background verification. The UAE's Personal Data Protection Law (PDPL) Federal Decree-Law No. 45 of 2021 sets strict standards for candidate consent and data handling. Background checks typically complete in 1-2 days for criminal records and 4-6 days for comprehensive packages. The UAE requires attestation through MOFA for international credentials and offers streamlined processes through government portals. For detailed UAE-specific requirements, see our comprehensive guide to background checks in UAE." },
              { flag: "🇸🇦", country: "Saudi Arabia", accent: "#34D399", body: "Saudi Arabia uses the Absher platform for integrated government verification services, making employment and criminal record checks more efficient than ever before. The Saudi Personal Data Protection Law mirrors UAE's PDPL requirements. Background checks in Saudi Arabia typically take 3-5 days and must comply with Saudization policies. The Ministry of Human Resources and Social Development oversees employment verification standards." },
              { flag: "🇶🇦", country: "Qatar", accent: "#818CF8", body: "Qatar has implemented comprehensive labor law reforms requiring enhanced due diligence for employers. Background checks take 4-6 days on average. The country's exit permit abolition and minimum wage implementation have increased focus on proper employee verification. Qatar requires specific attestation procedures for educational credentials through the Ministry of Education." },
              { flag: "🇰🇼", country: "Kuwait", accent: "#FCD34D", body: "Kuwait maintains traditional verification processes with growing digitization initiatives. Background checks typically require 5-7 days for completion. Kuwait's labor law mandates criminal record verification for specific industries and positions. The Public Authority for Manpower oversees employment verification standards." },
              { flag: "🇴🇲", country: "Oman", accent: "#F472B6", body: "Oman requires background checks for expatriate workers across most sectors, with particular emphasis on healthcare, education, and financial services. Verification processes take 3-7 days depending on the scope. Oman's Royal Oman Police handles criminal record clearances, which must be obtained for many employment categories." },
              { flag: "🇧🇭", country: "Bahrain", accent: "#FB923C", body: "Bahrain offers relatively streamlined background verification through the Labour Market Regulatory Authority (LMRA). Checks typically complete within 3-5 days. Bahrain requires police clearance certificates for certain positions and maintains specific requirements for financial sector employees under Central Bank of Bahrain regulations." },
            ].map(item => (
              <div key={item.country} style={{ borderLeft: `3px solid ${item.accent}`, paddingLeft: 24, paddingBottom: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span style={{ fontSize: 20 }}>{item.flag}</span>
                  <h3 style={{ fontWeight: 700, fontSize: 18, color: item.accent, margin: 0 }}>{item.country}</h3>
                </div>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.48)", lineHeight: 1.85, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>

          {/* Key Differences Table */}
          <div style={{ background: "#fff", color: "#000", borderRadius: 20, padding: "52px 48px" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 32, letterSpacing: "-0.03em", color: "#111", marginBottom: 36, textAlign: "center" }}>Key Differences in GCC Background Screening</h3>
            {[
              { title: "Data Protection Standards", body: "UAE and Saudi Arabia have the most comprehensive data protection laws in the region, with specific requirements for background check consent and data retention. Other GCC countries are developing similar frameworks but currently have less stringent requirements." },
              { title: "Digital Infrastructure", body: "UAE and Saudi Arabia offer the most advanced digital verification systems through government portals. Kuwait, Oman, Bahrain, and Qatar are progressively digitizing their verification processes but may still require manual processes for certain checks." },
              { title: "Turnaround Times", body: "UAE offers the fastest verification at 1-2 days for basic checks. Saudi Arabia follows at 3-5 days. Other GCC countries range from 4-7 days depending on the complexity and government processing speeds." },
              { title: "Education Verification", body: "All GCC countries require proper attestation of international degrees, but processes vary significantly. UAE's MOFA attestation is most streamlined, while other countries may require multiple levels of authentication through their respective embassies and ministries." },
              { title: "Criminal Record Access", body: "UAE and Bahrain offer most efficient criminal record checks through established legal channels. Saudi Arabia's Absher system has improved access significantly. Qatar, Kuwait, and Oman require more traditional application processes that may take longer." },
              { title: "Industry-Specific Requirements", body: "Financial services across all GCC countries face enhanced scrutiny with sanctions screening and credit checks. Healthcare workers need license verification through country-specific health authorities. Education sectors require teaching license validation and enhanced child safety screening." },
            ].map((item, i) => (
              <div key={item.title} style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 32, padding: "24px 0", borderBottom: i < 5 ? "1px solid #E5E7EB" : "none", alignItems: "start" }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: "#0708E4" }}>{item.title}</div>
                <div style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.75 }}>{item.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GCC TALENT MOBILITY CHALLENGE ────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "72px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 14 }}>Why Regional Screening Matters</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(26px, 4vw, 48px)", letterSpacing: "-0.03em", marginBottom: 14 }}>
              Why Regional Background Screening Matters
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.42)", lineHeight: 1.8, maxWidth: 800 }}>
              Hiring across GCC countries presents unique challenges that require specialized knowledge and regional infrastructure. Here's why comprehensive GCC background screening is essential for businesses operating in the Gulf region.
            </p>
          </div>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 28, letterSpacing: "-0.02em", marginBottom: 24 }}>The GCC Talent Mobility Challenge</h3>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.42)", lineHeight: 1.8, maxWidth: 800, marginBottom: 32 }}>
            The Gulf Cooperation Council facilitates significant workforce movement across member states. A candidate who worked in Dubai may have previous employment in Riyadh, educational credentials from Kuwait, and undisclosed legal issues in Bahrain. Without comprehensive regional screening, employers risk hiring individuals with:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 52 }}>
            {[
              { n: "01", title: "Undisclosed Travel Bans", body: "A candidate may have travel restrictions in one GCC country while applying for jobs in another. These bans often stem from unpaid debts, legal disputes, or visa violations that candidates fail to disclose. Regional screening prevents costly discoveries after hiring." },
              { n: "02", title: "Hidden Employment Issues", body: "Termination for cause in Saudi Arabia, labor ban in UAE, or contract violations in Qatar may not appear on single-country checks. Comprehensive GCC screening reveals the complete employment picture across all previous work locations." },
              { n: "03", title: "Legal Complications Across Borders", body: "Court cases, financial disputes, or criminal matters in one GCC country can impact employment eligibility in others. Regional criminal background checks ensure you're aware of any legal issues within the Gulf region." },
              { n: "04", title: "Credential Fraud Across Jurisdictions", body: "Fake degrees purchased in one country, forged employment letters from companies in another, and fabricated experience across multiple GCC locations are increasingly common. Regional verification through primary sources catches these discrepancies." },
            ].map(r => (
              <div key={r.n} style={{ ...GLASS, padding: "24px 22px", borderLeft: "3px solid rgba(7,8,228,0.4)", borderTopLeftRadius: 0, borderBottomLeftRadius: 0, borderRadius: "0 16px 16px 0" }}>
                <div style={{ fontSize: 10, fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase", color: BLUE, marginBottom: 8 }}>{r.n}</div>
                <h3 style={{ fontWeight: 700, fontSize: 16, color: "#fff", marginBottom: 10 }}>{r.title}</h3>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.8, margin: 0 }}>{r.body}</p>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div style={{ ...GLASS, padding: 36, borderRadius: 20 }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 26, marginBottom: 24, color: "#fff" }}>Benefits of Unified GCC Background Screening</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
              {[
                { icon: "🎯", title: "Single Point of Contact", body: "Instead of coordinating with multiple vendors across six countries, manage all GCC background checks through one experienced provider who understands regional nuances." },
                { icon: "⚖️", title: "Consistent Quality Standards", body: "Apply the same rigorous verification standards across all GCC countries while adapting to local legal requirements for fair, compliant, and comprehensive screening." },
                { icon: "⚡", title: "Faster Regional Hiring", body: "Simultaneous verification across multiple GCC countries reduces overall hiring timelines. Our regional infrastructure enables parallel processing." },
                { icon: "💰", title: "Cost Efficiency", body: "Bundled GCC screening packages offer better value than purchasing individual country checks separately. Volume commitments unlock better pricing." },
                { icon: "📊", title: "Comprehensive Risk Assessment", body: "Understanding a candidate's complete GCC history provides context that single-country checks miss. Regional patterns become visible only through comprehensive screening." },
                { icon: "🔒", title: "Regulatory Compliance", body: "Each GCC country has evolving data protection requirements. Regional expertise ensures compliance with UAE's PDPL, Saudi's PDPL, and emerging regulations across GCC." },
              ].map(b => (
                <div key={b.title} style={{ background: "rgba(255,255,255,0.03)", borderRadius: 12, padding: 18 }}>
                  <div style={{ fontSize: 22, marginBottom: 8 }}>{b.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "#fff", marginBottom: 6 }}>{b.title}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>{b.body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ───────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "72px 32px", background: "rgba(7,8,228,0.02)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 14 }}>Who We Serve</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(26px, 4vw, 48px)", letterSpacing: "-0.03em" }}>
              Industries Requiring GCC-Wide Screening
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
            {[
              { icon: "🌐", title: "Multinational Corporations", body: "Companies with operations across multiple GCC countries need consistent screening standards for regional hiring, ensuring employees meet the same quality standards whether placed in Dubai, Riyadh, Doha, or Kuwait City." },
              { icon: "🏦", title: "Financial Services", body: "Banks and financial institutions operating regionally require enhanced due diligence including criminal checks, sanctions screening, and employment verification across all GCC countries where candidates previously worked." },
              { icon: "🏥", title: "Healthcare Networks", body: "Hospital groups with facilities across GCC countries must verify medical licenses, educational credentials, and criminal backgrounds regionally to maintain consistent care standards and regulatory compliance." },
              { icon: "⛽", title: "Oil and Gas Sector", body: "Energy companies frequently rotate employees across GCC locations. Comprehensive regional screening ensures security clearances, technical certifications, and employment histories are verified across all relevant jurisdictions." },
              { icon: "🏨", title: "Hospitality Chains", body: "Hotels and resorts operating across the Gulf need regional screening to verify customer service experience, check for previous employment issues, and ensure candidates meet hospitality standards consistently." },
              { icon: "📚", title: "Education Groups", body: "International schools and university networks operating in multiple GCC countries require regional screening to verify teaching credentials, check for child safety concerns, and ensure educators meet standards across all locations." },
            ].map(i => (
              <div key={i.title} style={{ ...GLASS, padding: "22px 20px" }}>
                <div style={{ fontSize: 26, marginBottom: 10 }}>{i.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 15, color: "#fff", marginBottom: 8 }}>{i.title}</div>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.42)", lineHeight: 1.7, margin: 0 }}>{i.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMON RED FLAGS ─────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "72px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 14 }}>Due Diligence</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(26px, 4vw, 48px)", letterSpacing: "-0.03em" }}>
              Common Red Flags in GCC Background Checks
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
            {[
              { flag: "⚠️", title: "Unexplained Gaps", body: "Employment gaps coinciding with time in another GCC country may indicate undisclosed employment, visa issues, or legal problems. Regional checks reveal what happened during these periods." },
              { flag: "⚠️", title: "Conflicting Information", body: "Candidates claiming they 'never worked in Saudi Arabia' when records show Saudi employment, or stating they 'left UAE voluntarily' when labor bans exist, are red flags requiring investigation." },
              { flag: "⚠️", title: "Credential Inconsistencies", body: "Degrees that can't be verified through proper attestation channels, employment letters from companies that don't confirm claimed positions, or certifications from non-recognized institutions require investigation." },
              { flag: "⚠️", title: "Multiple Short Tenures", body: "A pattern of brief employment across multiple GCC countries may indicate performance issues, contract violations, or inability to secure long-term positions. Regional screening reveals employment stability trends." },
              { flag: "⚠️", title: "Undisclosed Litigation", body: "Legal cases, financial disputes, or criminal matters in one GCC country that candidates don't mention when applying in another represent serious integrity concerns requiring disclosure and explanation." },
              { flag: "✅", title: "Professional Verification Pays Off", body: "The cost of comprehensive background checks is minimal compared to the cost of bad hires — typically 1-3 times annual salary plus reputational damage." },
            ].map(f => (
              <div key={f.title} style={{ ...GLASS, padding: "20px 18px" }}>
                <div style={{ fontSize: 20, marginBottom: 8 }}>{f.flag}</div>
                <div style={{ fontWeight: 700, fontSize: 14, color: "#fff", marginBottom: 6 }}>{f.title}</div>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.42)", lineHeight: 1.7, margin: 0 }}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ─────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "72px 32px", background: "rgba(7,8,228,0.02)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 14 }}>Wirestork Case Studies</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(26px, 4vw, 48px)", letterSpacing: "-0.03em", marginBottom: 14 }}>
              Real Results: GCC Background Screening Success Stories
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.38)", maxWidth: 640, margin: "0 auto" }}>
              See how comprehensive regional background checks have helped companies across the Gulf make safer, smarter hiring decisions.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              {
                sector: "Retail & Hospitality", n: "Case Study 1",
                title: "Multinational Retail Chain Prevents Costly Hiring Mistake",
                challenge: "Regional hiring manager position for UAE and Saudi operations",
                findings: ["Employment verification in Saudi Arabia showed termination for inventory discrepancies, not the 'relocated for family reasons' claimed on resume", "UAE travel ban discovered due to unpaid personal loan, making the candidate ineligible to work in UAE", "UK university confirmed the MBA was completed but with significantly lower grades than claimed"],
                outcome: "The company avoided hiring someone with a travel ban who couldn't legally work in their primary market (UAE) and had undisclosed termination for cause. Regional screening saved an estimated AED 150,000 in hiring costs, training expenses, and potential inventory losses.",
                lesson: "Single-country checks would have missed the Saudi termination and UAE travel ban, both critical for this regional role.",
              },
              {
                sector: "Healthcare", n: "Case Study 2",
                title: "Healthcare Provider Discovers License Issues Across GCC",
                challenge: "Senior physician position for multi-facility hospital group operating in UAE and Qatar",
                findings: ["UAE DHA license was suspended 6 months prior due to malpractice complaint under investigation", "Qatar medical license had lapsed and was not renewed for past 18 months", "Employment verification revealed the candidate had actually worked locum positions for 4 months total, not the '2 years' claimed", "Criminal background check in Oman revealed ongoing litigation related to medical practice"],
                outcome: "The hospital group avoided hiring a physician with suspended licenses, misrepresented experience, and active legal issues. This prevented potential malpractice exposure, regulatory violations, and patient safety risks.",
                lesson: "Healthcare licensing verification across multiple GCC countries is essential, as candidates may hold (or claim) licenses in several jurisdictions with varying statuses.",
              },
              {
                sector: "Banking & Financial Services", n: "Case Study 3",
                title: "Financial Services Firm Uncovers Fraud Pattern",
                challenge: "Senior relationship manager for private banking division",
                findings: ["Criminal background check in UAE uncovered bounced check case and financial judgment against the candidate", "Credit history check revealed significant personal debts and poor financial management", "Employment verification in Bahrain showed dismissal for policy violations related to client account handling", "Kuwait employer confirmed only 8 months employment, not the '3 years' claimed", "Professional references were personal friends, not former supervisors"],
                outcome: "The bank avoided hiring someone with financial crimes history, poor money management, and fraudulent references for a position involving high-net-worth client assets.",
                lesson: "Financial sector requires enhanced screening including credit checks and multi-country criminal verification, especially for positions handling client funds.",
              },
            ].map(cs => (
              <div key={cs.n} style={{ ...GLASS, padding: "28px 28px", borderRadius: 18 }}>
                <div style={{ display: "flex", gap: 12, marginBottom: 16, flexWrap: "wrap", alignItems: "center" }}>
                  <span style={{ fontSize: 10, fontWeight: 900, padding: "4px 12px", borderRadius: 100, background: "rgba(7,8,228,0.15)", border: "1px solid rgba(7,8,228,0.3)", color: "#818CF8", letterSpacing: "0.1em", textTransform: "uppercase" }}>{cs.sector}</span>
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", fontWeight: 700 }}>{cs.n}</span>
                </div>
                <h3 style={{ fontWeight: 700, fontSize: 18, color: "#fff", marginBottom: 8 }}>{cs.title}</h3>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", marginBottom: 16 }}>Challenge: {cs.challenge}</p>
                <div style={{ marginBottom: 16 }}>
                  <div style={{ fontSize: 10, fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: 10 }}>What Regional Screening Revealed</div>
                  {cs.findings.map((f, i) => (
                    <div key={i} style={{ display: "flex", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.55)", marginBottom: 6, alignItems: "flex-start" }}>
                      <span style={{ color: "#FCA5A5", flexShrink: 0, marginTop: 1 }}>→</span>{f}
                    </div>
                  ))}
                </div>
                <div style={{ background: "rgba(16,185,129,0.07)", border: "1px solid rgba(16,185,129,0.2)", borderRadius: 10, padding: "12px 16px", marginBottom: 10 }}>
                  <div style={{ fontSize: 10, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", color: "#34D399", marginBottom: 6 }}>Outcome</div>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, margin: 0 }}>{cs.outcome}</p>
                </div>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", fontStyle: "italic" }}>Key Lesson: {cs.lesson}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 24, ...GLASS, padding: "22px 24px", borderRadius: 14, display: "flex", gap: 20, flexWrap: "wrap" }}>
            <div style={{ fontWeight: 700, fontSize: 14, color: "#fff", marginBottom: 12, width: "100%" }}>What These Cases Teach Us</div>
            {["Regional Screening Is Essential — All five cases involved information from multiple GCC countries. Single-country checks would have missed critical issues.", "Credentials Aren't Enough — Even legitimate qualifications don't guarantee suitability. Employment history, conduct issues, and legal problems require verification.", "Disclosure Matters — Candidates who hide problems are higher risk than those who disclose issues and explain them honestly.", "Professional Verification Pays Off — The cost of comprehensive background checks is minimal compared to the cost of bad hires — typically 1–3 times annual salary."].map((item, i) => (
              <div key={i} style={{ flex: "1 1 45%", fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>
                <span style={{ color: BLUE, fontWeight: 900 }}>→</span> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACCURACY / WHY WIRESTORK ─────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "72px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <div>
              <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 16 }}>Expertise in the GCC</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(26px, 3.5vw, 44px)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 16 }}>
                Accuracy You Can Count On
              </h2>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.42)", lineHeight: 1.8, marginBottom: 10 }}>
                With years of experience in the region, we are well-versed in the unique legal and cultural aspects of background checks across the GCC countries.
              </p>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.42)", lineHeight: 1.8, marginBottom: 10 }}>
                At Wirestork, we believe that ensuring every detail is verified isn't just a promise — it's our standard. From employment history to credential authentication, our meticulous background checks deliver the precision your business deserves.
              </p>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.42)", lineHeight: 1.8 }}>
                We know time is of the essence. Our efficient processes ensure that you get the information you need quickly without compromising on accuracy. Privacy matters — we use advanced encryption and follow rigorous data protection standards.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { icon: "📂", title: "Comprehensive Data Sources", body: "We access multiple databases and sources to gather detailed information, ensuring that no detail is overlooked in our verification process." },
                { icon: "🔄", title: "In-Depth Cross-Referencing", body: "Our rigorous cross-referencing procedures match data points across various records to guarantee the accuracy and reliability of the information provided." },
                { icon: "⚖️", title: "Human-Certified Verification", body: "Our team of experienced law partners personally reviews and certifies each background check, ensuring information is not only accurate but also contextually relevant and reliable." },
                { icon: "🔐", title: "Secure and Confidential", body: "We use advanced encryption and follow rigorous data protection standards to keep all background check information secure. Every screening is handled with absolute discretion." },
              ].map(f => (
                <div key={f.title} style={{ ...GLASS, padding: "18px 20px", display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 22, flexShrink: 0 }}>{f.icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: "#fff", marginBottom: 4 }}>{f.title}</div>
                    <p style={{ fontSize: 12, color: "rgba(255,255,255,0.42)", lineHeight: 1.7, margin: 0 }}>{f.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "72px 32px", background: "rgba(7,8,228,0.02)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 14 }}>Knowledge Panel</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(26px, 4vw, 44px)", letterSpacing: "-0.03em", marginBottom: 10 }}>
              Background Checks in GCC — Comprehensive FAQ
            </h2>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.35)" }}>Everything you need to know about background verification across the Gulf Cooperation Council.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {[
              { q: "What are background checks in GCC countries?", a: "Background checks in GCC (Gulf Cooperation Council) countries are comprehensive verification processes that help employers, organizations, and individuals validate credentials, employment history, criminal records, and other essential information. The GCC region, comprising Saudi Arabia, UAE, Kuwait, Bahrain, Oman, and Qatar, has specific regulations and requirements for conducting thorough background screenings." },
              { q: "Can I conduct background checks across multiple GCC countries simultaneously?", a: "Yes. Wirestork coordinates simultaneous verification in UAE, Saudi Arabia, Kuwait, Qatar, Oman, and Bahrain, reducing overall turnaround time compared to sequential country-by-country checks. Our regional infrastructure and established networks in each country enable parallel processing while ensuring compliance with each jurisdiction's specific requirements." },
              { q: "Do GCC countries share background check information with each other?", a: "GCC countries do not automatically share background check databases or verification information with each other. Each country maintains independent criminal record systems, employment databases, and verification processes. This is why comprehensive regional screening is essential — a travel ban in UAE won't automatically appear in Saudi background checks, and criminal records in Kuwait aren't accessible through Bahrain's systems." },
              { q: "How do I verify a candidate who worked across multiple GCC countries?", a: "Verifying candidates with multi-country GCC experience requires coordinated regional screening. Start by obtaining comprehensive consent covering all relevant countries, then verify employment history in each GCC country, check criminal records in all GCC jurisdictions where they resided, verify educational credentials with proper attestation, and confirm no travel bans exist in any GCC country. Wirestork manages this complex process through established networks in all six GCC countries." },
              { q: "Are background check costs different across GCC countries?", a: "Yes, background check costs vary significantly across GCC countries. UAE offers the lowest starting costs at AED 20 for basic identity verification and AED 412 for criminal checks due to streamlined digital systems. Saudi Arabia starts at AED 112 due to Absher integration requirements. Qatar, Kuwait, Oman, and Bahrain range from AED 112-120 for basic checks. International multi-country packages start at AED 85 per country." },
              { q: "How long do background checks take in each GCC country?", a: "UAE is fastest at 1-2 business days for criminal checks and 4-6 days for comprehensive packages. Saudi Arabia averages 3-5 business days through Absher integration. Qatar typically requires 4-6 business days. Kuwait ranges from 5-7 business days. Oman takes 3-7 days. Bahrain averages 3-5 days. International verifications take 7-15 days depending on the country." },
              { q: "What are the legal requirements for background checks in UAE?", a: "Background checks in UAE must comply with UAE Labor Law and data protection regulations. Employers must obtain candidate consent before conducting checks, verify work permits and visa status for expatriate workers, and ensure checks are relevant to the job position. Learn more on our UAE background checks page." },
              { q: "What are background check requirements in Saudi Arabia?", a: "Background checks in Saudi Arabia must align with Saudi Labor Law and Ministry of Human Resources and Social Development guidelines. Employers must verify Saudi nationals through the Absher system and validate expatriate workers' credentials through proper channels." },
              { q: "What attestation is required for educational credentials across GCC countries?", a: "Each GCC country has specific attestation requirements. UAE requires university attestation, then State/Country authentication, UAE Embassy attestation in the issuing country, and MOFA attestation. Saudi Arabia follows similar steps but requires Saudi Cultural Mission or Embassy attestation. Qatar, Kuwait, Oman, and Bahrain have comparable multi-step processes. The entire attestation process typically takes 2-4 weeks." },
            ].map((faq, i) => (
              <details key={i} style={{ ...GLASS, borderRadius: 12, overflow: "hidden" }}>
                <summary style={{ padding: "18px 22px", fontWeight: 700, fontSize: 14, color: "#fff", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  {faq.q}
                  <span style={{ color: BLUE, fontSize: 18, flexShrink: 0, marginLeft: 12 }}>+</span>
                </summary>
                <div style={{ padding: "0 22px 18px", fontSize: 13, color: "rgba(255,255,255,0.48)", lineHeight: 1.8 }}>{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── PREQUALIFICATION FORM ─────────────────────────────────────── */}
      <section id="prequalify" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "72px 32px", scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
            <div>
              <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 16 }}>Request a Quote</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(26px, 3.5vw, 44px)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 16 }}>
                Ready to Streamline Your Background Checks?
              </h2>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.42)", lineHeight: 1.8, marginBottom: 24 }}>
                If you are a company interested in exploring our background check solutions, let's start talking.
              </p>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.42)", lineHeight: 1.8, marginBottom: 32 }}>
                Our experienced team has conducted over 100,000 verifications across the Gulf region. Join the leading companies across the GCC who trust Wirestork for thorough, compliant screening.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {["PDPL-compliant across all 6 GCC countries", "70+ trusted legal partners in the region", "Results in as fast as 1 business day (UAE)", "No minimum volume commitment to get started", "Dedicated account manager for enterprise clients"].map(item => (
                  <div key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(7,8,228,0.15)", border: "1px solid rgba(7,8,228,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ color: "#818CF8", fontSize: 10 }}>✓</span>
                    </div>
                    <span style={{ fontSize: 14, color: "rgba(255,255,255,0.55)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <BGCCPrequalClient />
          </div>
        </div>
      </section>

    </div>
  );
}
