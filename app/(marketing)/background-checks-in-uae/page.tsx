import type { Metadata } from "next";
import UAEBGPrequalClient from "./UAEBGPrequalClient";
import UAEBGFAQClient from "./UAEBGFAQClient";
import UAEBGPricingClient from "./UAEBGPricingClient";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Background Checks in UAE | Employment Screening & Verification — Wirestork",
  description: "PDPL-compliant background checks in UAE. Criminal records, employment verification, education checks, travel ban verification. Fast, accurate, legally compliant from AED 20.",
  keywords: ["background checks UAE", "employment screening UAE", "criminal record check UAE", "PDPL background check", "UAE background verification"],
  openGraph: {
    title: "Background Checks in UAE | Employment Screening & Verification",
    description: "Secure your business with reliable UAE background checks. PDPL-compliant, fast, accurate employment screening from AED 20.",
    type: "website",
  },
  alternates: { canonical: "https://wirestork.com/background-checks-in-uae/" },
};

const CDN = "https://wired.b-cdn.net/wp-content/uploads/2024/08";
const BLUE = "#0708E4";
const BTN_GRAD = "linear-gradient(135deg, #0708E4 0%, #6366F1 100%)";
const GLASS = { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16 } as const;

export default function BackgroundChecksUAEPage() {
  return (
    <div style={{ background: "#000", color: "#fff", fontFamily: "'Outfit', sans-serif" }}>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section style={{ padding: "120px 32px 72px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)", backgroundSize: "40px 40px", maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 60%, transparent 100%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
            {["🇦🇪 UAE", "PDPL-Compliant", "From AED 20", "1–6 Days"].map(t => (
              <span key={t} style={{ fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 100, background: "rgba(7,8,228,0.1)", border: "1px solid rgba(7,8,228,0.2)", color: "#818CF8" }}>{t}</span>
            ))}
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(38px, 6vw, 70px)", lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 20 }}>
            Background Checks in UAE<br />
            <span style={{ color: "rgba(255,255,255,0.3)" }}>Employment Screening &amp; Verification</span>
          </h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, maxWidth: 640, marginBottom: 12 }}>
            Secure your business with Reliable UAE Background Checks
          </p>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.38)", lineHeight: 1.8, maxWidth: 640, marginBottom: 32 }}>
            Stay safe and legally immune when hiring in the Emirates. We provide compliant, fast, and accurate employment background check in UAE services to protect your company&apos;s reputation and assets.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="#prequalify" style={{ background: BTN_GRAD, color: "#fff", borderRadius: 100, padding: "14px 32px", fontSize: 13, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>
              Request a Background Check →
            </a>
            <Link href="/background-checks-in-saudi-arabia" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)", borderRadius: 100, padding: "14px 28px", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>
              🇸🇦 Saudi Arabia →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CHECK TYPES ──────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "72px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {[
              { img: `${CDN}/Personal-Data-XN4Z8YM-2-100x100.png`, alt: "Criminal background check verification UAE", title: "Criminal Records", desc: "Protect your business with professional background checks in UAE that thoroughly verify criminal history. Our comprehensive screening includes court records, police reports, and criminal activity verification, helping you hire with confidence and mitigate potential risks to your organization." },
              { img: `${CDN}/Phishing-XN4Z8YM-2-100x100.png`, alt: "Employment history verification service UAE", title: "Employment Verification", desc: "Maintain workforce quality with thorough background checks in UAE that verify employment history. Our detailed service cross-checks job titles, duties, employment periods, and departure reasons, giving you complete visibility into each candidate's professional background and ensuring you hire qualified, trustworthy employees." },
              { img: `${CDN}/Mail-Attack-XN4Z8YM-2-100x100.png`, alt: "Education credential verification UAE universities", title: "Education Verification", desc: "Eliminate fraudulent qualifications with thorough background checks in UAE that verify educational credentials. We confirm the authenticity of degrees, diplomas, and certificates directly with issuing institutions, providing you with verified proof of your candidates' academic achievements and professional qualifications." },
              { img: `${CDN}/Protection-XN4Z8YM-2-100x100.png`, alt: "UAE travel ban check verification service", title: "GCC Travel Ban Verification", desc: "Prevent costly hiring mistakes with background checks in UAE that verify travel ban status across the GCC. We thoroughly screen candidates to ensure they're legally free to travel and work without restrictions, protecting your organization from legal repercussions and operational disruptions caused by undisclosed travel bans." },
              { img: `${CDN}/Personal-XN4Z8YM-3-100x100.png`, alt: "", title: "Reference Checks", desc: "Understand your candidates better with thorough background checks in UAE that include professional reference verification. We speak directly with provided references to confirm skills, work ethic, and reliability, giving you authentic insights into past performance and workplace behavior that resumes alone cannot reveal." },
              { img: `${CDN}/Encryption-XN4Z8YM-2-100x100.png`, alt: "Credit history check UAE employment screening", title: "Credit History Checks", desc: "Protect financially sensitive positions with specialized background checks in UAE that examine credit history. Our credit verification services reveal candidates' financial behavior and stability, helping you make informed decisions when hiring for roles requiring fiscal responsibility and monetary trustworthiness." },
            ].map(c => (
              <div key={c.title} style={{ ...GLASS, padding: "24px 20px", display: "flex", gap: 14, alignItems: "flex-start" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.img} alt={c.alt} width={44} height={44} style={{ flexShrink: 0, objectFit: "contain" }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: "#fff", marginBottom: 8 }}>{c.title}</div>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.42)", lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEGAL REQUIREMENTS ───────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "72px 32px", background: "rgba(7,8,228,0.02)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 40 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 14 }}>Legal Framework</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(26px, 4vw, 48px)", letterSpacing: "-0.03em", marginBottom: 14 }}>
              Legal Requirements for Background Checks in UAE
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.42)", lineHeight: 1.8, maxWidth: 720 }}>
              Background checks in UAE must comply with specific legal frameworks to protect both employers and candidates. Understanding these requirements ensures your hiring process remains legally compliant while maintaining candidate privacy.
            </p>
          </div>
          {/* Map image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${CDN}/Map-Flat-Q676QDA-2.png`} alt="" loading="lazy" style={{ width: "100%", borderRadius: 16, marginBottom: 40 }} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {[
              { title: "UAE Personal Data Protection Law (PDPL)", body: "The UAE's Federal Decree-Law No. 45 of 2021 on Personal Data Protection governs how background checks must be conducted. Under PDPL, employers must obtain explicit written consent from candidates before initiating any background verification. All personal data collected during screening must be relevant to the employment decision, stored securely, and retained only as long as necessary for business purposes." },
              { title: "UAE Labor Law Requirements", body: "Federal Decree-Law No. 33 of 2021 on the Regulation of Labor Relations establishes the framework for employment verification in the UAE. Employers have the right to verify candidate credentials, employment history, and criminal records as part of the hiring process. However, these checks must be conducted fairly, without discrimination, and candidates must be informed about the verification process." },
              { title: "Data Protection and Candidate Rights", body: "Candidates in the UAE have specific rights during background verification. They must be informed about what information will be collected, how it will be used, who will have access to it, and how long it will be retained. Candidates have the right to access their background check results, dispute inaccurate information, and withdraw consent at any stage of the hiring process." },
              { title: "DIFC and ADGM Special Zones", body: "Companies operating in Dubai International Financial Centre (DIFC) or Abu Dhabi Global Market (ADGM) must also comply with additional data protection regulations specific to these free zones. These jurisdictions have their own data protection laws that align with international standards like GDPR." },
            ].map(l => (
              <div key={l.title} style={{ ...GLASS, padding: "22px 20px" }}>
                <div style={{ fontWeight: 700, fontSize: 15, color: "#fff", marginBottom: 8 }}>{l.title}</div>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.8, margin: 0 }}>{l.body}</p>
              </div>
            ))}
          </div>
          {/* Industry-specific */}
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 26, marginTop: 40, marginBottom: 20 }}>Industry-Specific Regulations</h3>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.42)", marginBottom: 20 }}>Certain sectors in the UAE face additional background check requirements:</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
            {[
              { icon: "🏥", sector: "Healthcare", body: "The Ministry of Health (MOH) and Department of Health (DOH) require medical license verification, educational credential attestation through the UAE Ministry of Education, and criminal record clearance for all healthcare professionals." },
              { icon: "🏦", sector: "Financial Services", body: "The UAE Central Bank and Securities and Commodities Authority mandate enhanced screening including credit history checks, regulatory compliance verification, and sanctions list screening for employees handling financial transactions." },
              { icon: "📚", sector: "Education", body: "The Ministry of Education requires teaching license verification, criminal background checks, and educational credential attestation from recognized institutions for all educators working in UAE schools." },
            ].map(i => (
              <div key={i.sector} style={{ ...GLASS, padding: "20px 18px" }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{i.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 14, color: "#fff", marginBottom: 6 }}>{i.sector}</div>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.42)", lineHeight: 1.7, margin: 0 }}>{i.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY NON-NEGOTIABLE ───────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "72px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 12 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(26px, 4vw, 48px)", letterSpacing: "-0.03em", marginBottom: 10 }}>
              Why a hiring background check is non-negotiable
            </h2>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.3)", marginBottom: 40 }}>Stop hiring resumes. Start hiring verified talent. — Regional Screening Data Analysis 2024</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 40 }}>
            {[
              { stat: "25%", label: "Education Fraud", desc: "With candidates coming from all over the world, verifying degrees is critical. 25% of discrepancies involve embellished or fake academic credentials." },
              { stat: "1 in 3", label: "Employment History", desc: "An employee background check IN UAE often reveals gap-filling or title inflation. We verify dates, roles, and reasons for leaving directly with sources." },
              { stat: "High Risk", label: "Criminal Record", desc: "Ensure workplace safety. We navigate the local police clearance protocols to provide accurate UAE BACKGROUND CHECKS regarding criminal history." },
            ].map(f => (
              <div key={f.label} style={{ ...GLASS, padding: "32px 28px", textAlign: "center" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 52, color: BLUE, lineHeight: 1, marginBottom: 10 }}>{f.stat}</div>
                <div style={{ fontWeight: 700, fontSize: 16, color: "#fff", marginBottom: 10 }}>{f.label}</div>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.42)", lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.35)" }}>
              For comprehensive GCC-wide screening, explore our{" "}
              <Link href="/background-checks-gcc" style={{ color: BLUE, textDecoration: "none", fontWeight: 700 }}>background checks across all GCC countries</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ── EXPERTISE / WHO WE ARE ───────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "72px 32px", background: "rgba(7,8,228,0.02)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 52, alignItems: "center", marginBottom: 56 }}>
            <div>
              <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 14 }}>Expertise in the UAE &amp; GCC</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 14 }}>Who We Are</h2>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.42)", lineHeight: 1.8 }}>
                Through years of operating across the UAE and GCC region, we&apos;ve developed comprehensive knowledge of the varied legal requirements and cultural sensitivities that influence background screening practices in GCC countries. Our <Link href="/attorney-network" style={{ color: BLUE, textDecoration: "none" }}>attorney network</Link> across 70+ partners ensures we can verify credentials quickly and accurately.
              </p>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${CDN}/world-connection-meeting-at-cyber-space-table-PYVJNLQ-2.jpg`} alt="" loading="lazy" style={{ width: "100%", borderRadius: 16, aspectRatio: "3/2", objectFit: "cover" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 52, alignItems: "center", marginBottom: 56 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${CDN}/programming-equipment-in-dark.jpg`} alt="Programming Equipment in Dark" loading="lazy" style={{ width: "100%", borderRadius: 16, aspectRatio: "3/2", objectFit: "cover" }} />
            <div>
              <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 14 }}>Swift Turnaround Times</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 14 }}>
                Speed matters in your business.
              </h2>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.42)", lineHeight: 1.8, marginBottom: 16 }}>
                Our proven processes deliver the precise information you need, exactly when you need it.
              </p>
              <Link href="/our-technology" style={{ color: BLUE, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>Our Technology →</Link>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 52, alignItems: "center", marginBottom: 56 }}>
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 14 }}>Secure and Confidential</h2>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.42)", lineHeight: 1.8, marginBottom: 16 }}>
                Trust is earned through protection. Our background screening services utilize state-of-the-art security infrastructure, encrypted data storage, and strict access controls. We&apos;re fully compliant with regional data protection laws, ensuring that every piece of information remains confidential from inquiry to final report.
              </p>
              <Link href="/data-retention" style={{ color: BLUE, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>Our Data Retention Policy →</Link>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${CDN}/computer-security-concept.jpg`} alt="Wirestork's Background check in GCC and the UAE ensures you hire safely. Get accurate PDPL Compliant background screening for employment and legal compliance." loading="lazy" style={{ width: "100%", borderRadius: 16, aspectRatio: "3/2", objectFit: "cover" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 52, alignItems: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${CDN}/stylish-girl-with-coffee-on-background-of-laptop-m-6T9V4UK-2.jpg`} alt="Verify Saudi talent with Wirestork. PDPL-compliant background checks in Saudi Arabia via Absher & GOSI. Fast, secure Primary Source Verification." loading="lazy" style={{ width: "100%", borderRadius: 16, aspectRatio: "3/2", objectFit: "cover" }} />
            <div>
              <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 14 }}>Knowledge Panel</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 14 }}>Unmatched Accuracy</h2>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.42)", lineHeight: 1.8 }}>
                At Wirestork, we pride ourselves on the precision and thoroughness of our background checks. Our meticulous attention to detail ensures that every aspect of a candidate&apos;s history is accurately verified, leaving no room for doubt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACCURACY PILLARS ─────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "64px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.03em", marginBottom: 8 }}>
              Accuracy You Can Count On
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.38)" }}>Ensuring Every Background Detail is Verified</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {[
              { icon: `${CDN}/Retina-Lock-XN4Z8YM-2-100x100.png`, title: "Comprehensive Data Sources", body: "We access multiple databases and sources to gather detailed information, ensuring that no detail is overlooked in our verification process." },
              { icon: `${CDN}/Login-XN4Z8YM-2-100x100.png`, title: "In-Depth Cross-Referencing", body: "Our rigorous cross-referencing procedures match data points across various records to guarantee the accuracy and reliability of the information provided." },
              { icon: `${CDN}/Virus-Scan-XN4Z8YM-2-100x100.png`, title: "Human-Certified Verification", body: "Our team of experienced law partners personally reviews and certifies each background check, ensuring that the information is not only accurate but also contextually relevant and reliable." },
            ].map(p => (
              <div key={p.title} style={{ ...GLASS, padding: "22px 20px", display: "flex", gap: 14, alignItems: "flex-start" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.icon} alt="" width={40} height={40} style={{ flexShrink: 0, objectFit: "contain" }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "#fff", marginBottom: 6 }}>{p.title}</div>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.42)", lineHeight: 1.7, margin: 0 }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "72px 32px", background: "rgba(7,8,228,0.02)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 14 }}>Simple &amp; Clear</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(26px, 4vw, 48px)", letterSpacing: "-0.03em", marginBottom: 14 }}>
              Pricing
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.42)", maxWidth: 640, margin: "0 auto" }}>
              At Wirestork, we believe quality background checks should be accessible and affordable. Our Best Price Assurance guarantees you&apos;re receiving competitive rates for premium services. If you find a comparable screening package at a lower cost, simply show us the quote and we&apos;ll match it. We&apos;re transparent about our pricing with no hidden charges—what you see is what you pay.
            </p>
          </div>
          <UAEBGPricingClient />
        </div>
      </section>

      {/* ── HOW IT WORKS — 5 STEPS ───────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "72px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 14 }}>Request a Quote</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(26px, 4vw, 48px)", letterSpacing: "-0.03em", marginBottom: 14 }}>
              How Background Checks Work in UAE: Our 5-Step Process
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.42)", maxWidth: 720, margin: "0 auto" }}>
              Our streamlined verification process ensures PDPL compliance while delivering fast, accurate results. Here&apos;s exactly what happens from the moment you request a background check to receiving your comprehensive report.
            </p>
          </div>
          {/* Step pills */}
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 40, flexWrap: "wrap" }}>
            {["STEP 01 — Request & Candidate Consent", "STEP 02 — Data Collection & Submission", "STEP 03 — Primary Source Verification", "STEP 04 — Analysis & Quality Review", "STEP 05 — Comprehensive Final Report"].map((s, i) => (
              <span key={i} style={{ fontSize: 11, fontWeight: 700, padding: "5px 14px", borderRadius: 100, background: "rgba(7,8,228,0.1)", border: "1px solid rgba(7,8,228,0.2)", color: "#818CF8" }}>{s}</span>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {[
              {
                n: "01", title: "Request & Candidate Consent",
                body: "Every background check in UAE begins with proper authorization. Once you submit a candidate for screening through our platform, we immediately send them a consent form that complies with UAE's Personal Data Protection Law (PDPL). The consent form clearly outlines what information will be verified, how data will be used and stored, who will have access to the results, and how long records will be retained. Candidates can review and digitally sign the consent form within minutes. No verification begins without explicit written consent, ensuring full legal compliance and protecting both employer and candidate rights. Our system automatically tracks consent status, sends reminders for pending approvals, and maintains audit trails for regulatory compliance. This transparent approach builds trust and ensures candidates understand the screening process from the start.",
              },
              {
                n: "02", title: "Data Collection & Document Submission",
                body: "Once consent is obtained, we guide candidates through a secure document submission portal. Candidates upload required documents including Emirates ID or passport copies, previous employment contracts and salary certificates, educational degree certificates and transcripts, professional licenses or certifications, and any additional documents relevant to the position. Our AI-powered document verification system performs initial authenticity checks, identifying potential forgeries or alterations. All documents are encrypted during transmission and storage, meeting international data security standards including SOC 2 and ISO 27001 certifications. For candidates unable to provide certain documents, we work directly with previous employers, educational institutions, or government authorities to obtain verification through official channels. Our established relationships across 55+ countries enable efficient document collection even for complex international employment histories.",
              },
              {
                n: "03", title: "Primary Source Verification",
                body: "This is where our expertise truly differentiates us. Rather than relying solely on candidate-provided documents, we conduct primary source verification by contacting original issuing authorities directly. Employment Verification: Our team contacts HR departments of previous employers to confirm employment dates, job titles and responsibilities, reasons for leaving, and eligibility for rehire. For international employers, we navigate different time zones and verification protocols to obtain accurate information. Education Verification: We contact universities and educational institutions directly through registrar offices or official verification services. For international degrees used in UAE, we coordinate attestation through proper channels including the UAE Ministry of Education, MOFA, and relevant embassy attestation requirements. Criminal Record Checks: We work with licensed UAE lawyers who access official government databases to check criminal records across all seven emirates. This includes Dubai Police records, Abu Dhabi Judicial Department records, and other emirate-level criminal databases. For international candidates, we coordinate with authorities in their home countries to obtain police clearance certificates. License and Certification Verification: Professional licenses are verified directly with issuing bodies including Ministry of Health (MOH), Dubai Health Authority (DHA), UAE Central Bank, Ministry of Education, and industry-specific regulatory authorities. This direct verification approach eliminates reliance on potentially fraudulent documents and provides employers with verified, source-authenticated information they can trust.",
              },
              {
                n: "04", title: "Analysis & Quality Review",
                body: "Once verification data is collected, our experienced legal and compliance team analyzes findings for completeness and accuracy. This human review layer catches discrepancies that automated systems might miss. We cross-reference information across multiple data points to identify inconsistencies such as employment date overlaps or gaps, educational credentials that don't match stated employment history, professional licenses that are expired or suspended, and criminal records in jurisdictions the candidate didn't disclose. Our analysts also assess findings within proper context. For example, minor traffic violations are flagged differently than financial crimes, employment gaps are evaluated based on economic conditions or personal circumstances, and educational credentials are assessed based on institution accreditation and recognition in UAE. This analysis ensures employers receive actionable intelligence, not just raw data. We highlight potential red flags while providing context that enables informed hiring decisions rather than automatic disqualifications.",
              },
              {
                n: "05", title: "Comprehensive Final Report Delivery",
                body: "Within 1-10 business days depending on check complexity, you receive a detailed background check report through our secure client portal. The report includes a clear executive summary highlighting key findings and any areas of concern, detailed verification results for each component checked, copies of verified documents and official confirmations, risk assessment and recommendations based on the position requirements, and complete audit trail showing verification methods and sources contacted. All reports comply with UAE data protection regulations and include only job-relevant information. Candidates receive a copy of their background check results simultaneously, maintaining transparency and allowing them to dispute any inaccurate information. Reports are available for download, can be integrated into your HR systems via API, and remain accessible in your account while meeting our data retention policy requirements. For urgent hiring needs, preliminary results for critical components like criminal checks can be provided within 24-48 hours, with the complete report following once all verifications are finished.",
              },
            ].map((step, i, arr) => (
              <div key={step.n} style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 32, paddingBottom: 32, marginBottom: 32, borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 48, color: BLUE, lineHeight: 1 }}>
                    {step.n}
                  </div>
                </div>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: 18, color: "#fff", marginBottom: 12 }}>{step.title}</h3>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.48)", lineHeight: 1.9, margin: 0 }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "64px 32px", background: "rgba(7,8,228,0.02)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.03em", marginBottom: 32, textAlign: "center" }}>
            Timeline Expectations for UAE Background Checks
          </h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.38)", textAlign: "center", marginBottom: 40 }}>Understanding typical turnaround times helps you plan your hiring timeline effectively:</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 32 }}>
            {[
              { time: "1-2 business days", label: "Express Criminal Record Check", desc: "Basic UAE criminal record verification through official channels." },
              { time: "4-6 business days", label: "Standard Employment + Education Package", desc: "Verification of 2-3 previous employers and educational credentials within UAE or GCC." },
              { time: "7-10 business days", label: "Comprehensive Screening Package", desc: "Complete verification including international employment, education attestation, criminal records across multiple countries, professional licenses, and reference checks." },
              { time: "10-15 business days", label: "International Extensive Package", desc: "When candidates have complex international backgrounds requiring verification across multiple countries with varying response times." },
            ].map(t => (
              <div key={t.label} style={{ ...GLASS, padding: "22px 18px" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 18, color: BLUE, marginBottom: 8 }}>{t.time}</div>
                <div style={{ fontWeight: 700, fontSize: 13, color: "#fff", marginBottom: 8 }}>{t.label}</div>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, margin: 0 }}>{t.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.35)", textAlign: "center", lineHeight: 1.7 }}>
            Factors that may extend timelines include international verifications during holiday periods, unresponsive previous employers requiring multiple contact attempts, documents requiring official attestation through embassies, and complex degree verification from countries with challenging verification processes. We provide real-time status updates throughout the verification process so you always know where your background check stands.
          </p>
        </div>
      </section>

      {/* ── INDUSTRY-SPECIFIC SCREENING ──────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "72px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 14 }}>Sector Compliance</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(26px, 4vw, 48px)", letterSpacing: "-0.03em", marginBottom: 14 }}>
              Industry-Specific Background Screening in UAE
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.38)", maxWidth: 680, margin: "0 auto" }}>
              Different industries in the UAE have unique background check requirements based on regulatory standards and risk profiles. Our specialized screening services ensure compliance with sector-specific regulations while protecting your organization.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {[
              {
                icon: "🏥", sector: "Healthcare Sector",
                checks: [
                  ["DOH and MOH License Verification", "We verify active medical licenses through the Dubai Health Authority (DHA), Department of Health Abu Dhabi (DOH), and Ministry of Health and Prevention (MOHAP). This ensures practitioners are legally authorized to practice medicine in the UAE."],
                  ["Medical Education Credential Attestation", "All medical degrees must be verified and attested through the UAE Ministry of Education. We coordinate with international medical schools and verification services to confirm the authenticity of MBBS, MD, nursing, and allied health degrees."],
                  ["Prometric and Registration Exams", "For certain medical specialties, we verify completion of required licensing examinations and professional registration with relevant UAE health authorities."],
                  ["Clinical Experience Verification", "We confirm previous hospital affiliations, clinical rotations, residency programs, and specialist training to ensure candidates have the required hands-on experience."],
                ],
              },
              {
                icon: "🏦", sector: "Financial Services",
                checks: [
                  ["Credit History and Financial Behavior", "For positions involving financial transactions, we conduct comprehensive credit checks to assess financial responsibility and identify potential risks like bankruptcy or significant debt."],
                  ["Regulatory Compliance Verification", "We verify professional certifications required by the UAE Central Bank, Securities and Commodities Authority (SCA), and Dubai Financial Services Authority (DFSA) for roles in banking, insurance, and securities."],
                  ["Sanctions and Watchlist Screening", "All financial sector candidates undergo screening against international sanctions lists, OFAC databases, and anti-money laundering watchlists to ensure compliance with UAE financial regulations."],
                  ["Previous Employment in Financial Institutions", "We verify employment history with banks, investment firms, and financial services companies, including reasons for departure and eligibility for rehire."],
                ],
              },
              {
                icon: "📚", sector: "Education Sector",
                checks: [
                  ["Teaching License Verification", "We confirm valid teaching licenses issued by the UAE Ministry of Education or relevant emirate education authorities like KHDA (Dubai) and ADEK (Abu Dhabi)."],
                  ["Academic Credential Authentication", "All teaching degrees and educational qualifications are verified directly with issuing universities and attested through proper channels to prevent diploma fraud."],
                  ["Child Safety Screening", "Enhanced criminal background checks focus specifically on offenses involving minors, violence, or inappropriate conduct to protect students and maintain safe school environments."],
                  ["International Teaching Experience", "For educators with overseas experience, we verify previous school employment, teaching credentials from their home countries, and any disciplinary actions or license suspensions."],
                ],
              },
              {
                icon: "⛽", sector: "Oil and Gas Industry",
                checks: [
                  ["Security Clearance Requirements", "Positions at major energy companies often require government security clearances. We coordinate with relevant authorities to facilitate security vetting processes."],
                  ["Technical Certification Verification", "We verify specialized certifications required for oil and gas roles including safety training (NEBOSH, IOSH), technical qualifications (welding, drilling, HSE), and industry-specific credentials."],
                  ["International Experience Validation", "Given the global nature of the energy industry, we verify employment with international oil companies, offshore experience, and project-based assignments across multiple countries."],
                  ["Safety Record Verification", "We confirm candidates' workplace safety records, incident history, and compliance with health, safety, and environment (HSE) protocols from previous employers."],
                ],
              },
              {
                icon: "💻", sector: "Technology & Cybersecurity",
                checks: [
                  ["Technical Certification Validation", "We verify professional certifications like CISSP, CEH, AWS, Azure, CCNA, and other industry credentials directly with issuing bodies to prevent fraudulent claims."],
                  ["Previous Employer Technology Stack", "We confirm the specific technologies, programming languages, and systems candidates have actually worked with, not just listed on resumes."],
                  ["Intellectual Property and Non-Compete Verification", "For senior tech roles, we review any existing non-compete agreements, intellectual property assignments, or confidentiality obligations that might affect employment."],
                  ["Security Clearance for Sensitive Projects", "Government tech projects and critical infrastructure roles may require additional security vetting coordinated through UAE authorities."],
                ],
              },
              {
                icon: "🏨", sector: "Hospitality and Tourism",
                img: `${CDN}/9.png`,
                checks: [
                  ["Customer-Facing Role Verification", "We verify previous hospitality experience, guest service roles, and any customer complaints or service issues that might affect hiring decisions."],
                  ["International Hospitality Experience", "For candidates with global hotel chain experience, we verify employment with major hospitality brands, positions held, and reasons for leaving."],
                  ["Visa and Immigration History", "Given the transient nature of hospitality work, we verify candidates' visa histories across GCC countries to identify any immigration violations or employment bans."],
                  ["Language Skills and Certifications", "We confirm language proficiency claims and hospitality certifications like sommelier credentials, culinary certifications, or hotel management qualifications."],
                ],
              },
            ].map(ind => (
              <div key={ind.sector} style={{ ...GLASS, padding: "28px 28px", borderRadius: 18 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                  <span style={{ fontSize: 28 }}>{ind.icon}</span>
                  <h3 style={{ fontWeight: 700, fontSize: 20, color: "#fff", margin: 0 }}>{ind.sector}</h3>
                </div>
                {'img' in ind && ind.img && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={ind.img} alt="" loading="lazy" style={{ width: "100%", borderRadius: 12, marginBottom: 20, maxHeight: 120, objectFit: "cover" }} />
                )}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  {ind.checks.map(([title, body]) => (
                    <div key={title} style={{ background: "rgba(255,255,255,0.03)", borderRadius: 10, padding: "16px 16px" }}>
                      <div style={{ fontWeight: 700, fontSize: 13, color: BLUE, marginBottom: 6 }}>{title}</div>
                      <p style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, margin: 0 }}>{body}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUSTED BY ───────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "60px 32px", background: "rgba(7,8,228,0.02)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ textAlign: "center", fontWeight: 900, fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(255,255,255,0.18)", marginBottom: 36 }}>Trusted By</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 20, alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.45, filter: "grayscale(1) brightness(2)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${CDN}/9.png`} alt="" loading="lazy" width={140} height={71} style={{ maxWidth: "100%", objectFit: "contain" }} />
            </div>
            <a href="https://adnoc.ae" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.45, filter: "grayscale(1) brightness(2)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${CDN}/logo.png`} alt="ADNOC trusts Wirestork background checks UAE IKEA uses Wirestork employment verification UAE" loading="lazy" width={140} height={71} style={{ maxWidth: "100%", objectFit: "contain" }} />
            </a>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.45, filter: "grayscale(1) brightness(2)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${CDN}/8.png`} alt="Qatar Airways Uses Wirestork background screening client UAE" loading="lazy" width={140} height={71} style={{ maxWidth: "100%", objectFit: "contain" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.45, filter: "grayscale(1) brightness(2)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${CDN}/1-3.png`} alt="" loading="lazy" width={140} height={71} style={{ maxWidth: "100%", objectFit: "contain" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.45, filter: "grayscale(1) brightness(2)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${CDN}/logo-1.png`} alt="" loading="lazy" width={140} height={71} style={{ maxWidth: "100%", objectFit: "contain" }} />
            </div>
            <a href="https://ikea.ae" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.45, filter: "grayscale(1) brightness(2)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${CDN}/5.png`} alt="" loading="lazy" width={140} height={71} style={{ maxWidth: "100%", objectFit: "contain" }} />
            </a>
          </div>
        </div>
      </section>

      {/* ── PREQUALIFICATION FORM ─────────────────────────────────────── */}
      <section id="prequalify" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "72px 32px", scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${CDN}/Server-XN4Z8YM-2-100x100.png`} alt="Request background check quote UAE employers" width={56} height={56} style={{ marginBottom: 16, objectFit: "contain" }} />
              <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 14 }}>Request a Quote</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(26px, 3.5vw, 40px)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 14 }}>
                Ready to Streamline Your Background Checks?
              </h2>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.42)", lineHeight: 1.8 }}>
                If you are a company interested in exploring our background check solutions, let&apos;s start talking.
              </p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${CDN}/great-working-day-young-bearded-man-in-casual-clot-AEEU39Q-1.jpg`} alt="Streamline background checks in UAE for safe hiring" loading="lazy" style={{ width: "100%", borderRadius: 14, marginTop: 24 }} />
            </div>
            <UAEBGPrequalClient />
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "72px 32px", background: "rgba(7,8,228,0.02)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <UAEBGFAQClient />
        </div>
      </section>

    </div>
  );
}
