// app/(marketing)/background-checks-in-saudi-arabia/page.tsx — SERVER COMPONENT
import type { Metadata } from "next";
import Link from "next/link";
import KSABGPrequalClient from "./KSABGPrequalClient";
import KSABGFAQClient from "./KSABGFAQClient";
import KSABGPricingClient from "./KSABGPricingClient";

export const metadata: Metadata = {
  title: "Background Checks in Saudi Arabia | PDPL & GOSI Verification — Wirestork",
  description: "PDPL-compliant background checks in Saudi Arabia. Criminal verification via Absher, GOSI employment checks, SIMAH credit verification, education screening. Fast & accurate.",
  keywords: ["background checks Saudi Arabia", "employment screening KSA", "Absher background check", "GOSI verification", "PDPL screening Saudi Arabia"],
  openGraph: {
    title: "Background Checks in Saudi Arabia | PDPL & GOSI Verification — Wirestork",
    description: "Secure your Saudi recruitment with PDPL-compliant background checks. Criminal, employment, education, and GOSI verification.",
    type: "website",
  },
  alternates: { canonical: "https://wirestork.com/background-checks-in-saudi-arabia/" },
};

const CDN = "https://wired.b-cdn.net/wp-content/uploads/2024/08";
const BLUE = "#0708E4";
const BTN_GRAD = "linear-gradient(135deg, #0708E4 0%, #6366F1 100%)";
const GLASS = { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16 } as const;

export default function BackgroundChecksSaudiPage() {
  return (
    <div style={{ background: "#000", color: "#fff", fontFamily: "'Outfit', sans-serif" }}>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section style={{ padding: "120px 32px 72px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)", backgroundSize: "40px 40px", maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 60%, transparent 100%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
            {["🇸🇦 Saudi Arabia", "PDPL-Compliant", "GOSI Verified", "Absher Integrated"].map(t => (
              <span key={t} style={{ fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 100, background: "rgba(7,8,228,0.1)", border: "1px solid rgba(7,8,228,0.2)", color: "#818CF8" }}>{t}</span>
            ))}
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(38px, 6vw, 70px)", lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 20 }}>
            Background Checks in<br />
            <span style={{ color: "rgba(255,255,255,0.3)" }}>Saudi Arabia</span>
          </h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, maxWidth: 640, marginBottom: 12 }}>
            Compliant Background Checks in Saudi Arabia
          </p>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.38)", lineHeight: 1.8, maxWidth: 640, marginBottom: 32 }}>
            Secure your Saudi recruitment with Wirestork. We offer PDPL-compliant background checks in Saudi Arabia, including criminal, education, and GOSI verification.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="#prequalify" style={{ background: BTN_GRAD, color: "#fff", borderRadius: 100, padding: "14px 32px", fontSize: 13, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>
              Request a Background Check →
            </a>
            <Link href="/background-checks-in-uae" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)", borderRadius: 100, padding: "14px 28px", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>
              🇦🇪 UAE →
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRUST NETWORK ────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "48px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ textAlign: "center", fontSize: 12, fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", marginBottom: 8 }}>Wirestork Trust Network</p>
          <p style={{ textAlign: "center", fontSize: 13, color: "rgba(255,255,255,0.3)", marginBottom: 32 }}>Trusted Verification. Globally. — Operating across US, UK, Estonia &amp; UAE</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 14, textAlign: "center" }}>
            {[["70+", "Trusted Partners Worldwide"], ["100,000+", "Checks Completed"], ["55+", "Jurisdictions"], ["Verified", "Accuracy"], ["48 hrs", "Average Turnaround"]].map(([val, lbl]) => (
              <div key={lbl} style={{ ...GLASS, padding: "18px 12px" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 22, color: "#fff", marginBottom: 4 }}>{val}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.32)", fontWeight: 600 }}>{lbl}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 12 }}>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.25)", letterSpacing: "0.1em" }}>ISO 27001</span>
          </div>
        </div>
      </section>

      {/* ── CHECK TYPES ──────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "72px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 14, textAlign: "center" }}>Start with a background check</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {[
              { img: `${CDN}/Personal-Data-XN4Z8YM-2-100x100.png`, alt: "Criminal background check verification Saudi Arabia", title: "Criminal Records", desc: "Ensure your recruitment process meets the highest standards of integrity and compliance. Wirestork provides rigorous criminal history verification through official Saudi channels, facilitating seamless candidate consent via the Absher portal. By meticulously verifying judicial and security records, we empower your business to hire with certainty, reducing operational risk while fully adhering to the Kingdom's Personal Data Protection Law (PDPL)." },
              { img: `${CDN}/Phishing-XN4Z8YM-2-100x100.png`, alt: "Employment history verification service Saudi Arabia", title: "Employment Verification", desc: "Build a high-performance team with background checks in Saudi Arabia that go beyond the CV. Wirestork provides meticulous employment history verification by cross-referencing professional records with GOSI (Social Insurance) data and official Service Certificates. We validate tenure, job titles, and professional conduct, giving you the transparency needed to ensure your talent pool is both competent and compliant with the Kingdom's Nitaqat and PDPL requirements." },
              { img: `${CDN}/Mail-Attack-XN4Z8YM-2-100x100.png`, alt: "Education credential verification Saudi Arabia universities", title: "Education Verification", desc: "Authentic expertise is your greatest asset. Wirestork provides specialized background checks in Saudi Arabia that go beyond simple document review. We authenticate degrees, diplomas, and professional licenses through primary-source verification and alignment with the Kingdom's Professional Verification Program. By validating academic credentials directly with local and international institutions, we ensure your hires meet the rigorous standards set by the Saudi Ministry of Education and the MHRSD." },
              { img: `${CDN}/Protection-XN4Z8YM-2-100x100.png`, alt: "Saudi Arabia travel ban check verification service", title: "GCC Travel Ban Verification", desc: "Protect your organization from unexpected operational disruptions and regulatory hurdles. Wirestork provides specialized screening in Saudi Arabia to verify a candidate's legal standing and eligibility for deployment. Our process facilitates PDPL-compliant consent via the Absher and Najiz portals, allowing you to confirm that prospective hires are free from judicial restrictions or labor-related travel bans. Hire with the certainty that your workforce is fully mobile and legally cleared to meet your business objectives in the Kingdom." },
              { img: `${CDN}/Personal-XN4Z8YM-3-100x100.png`, alt: "", title: "Reference Checks", desc: "Go beyond the resume with professional reference checks in Saudi Arabia that provide actionable insights. Wirestork conducts structured, PDPL-compliant interviews with former supervisors and peers to validate core competencies, leadership style, and workplace conduct. By aligning candidate history with the Kingdom's Vision 2030 values of integrity and excellence, we help you secure talent that doesn't just fill a role, but drives your organization's long-term success." },
              { img: `${CDN}/Encryption-XN4Z8YM-2-100x100.png`, alt: "Credit history check Saudi Arabia employment screening", title: "Credit History Checks", desc: "Protect your organization's fiscal health with specialized background checks in Saudi Arabia that verify credit history through official SIMAH records. Our screening process ensures full compliance with SAMA's \"Fit and Proper\" standards, helping you evaluate the financial stability and responsibility of candidates for sensitive roles. By facilitating PDPL-compliant consent to access credit records, Wirestork enables you to make data-driven hiring decisions that uphold the highest standards of regulatory integrity." },
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

      {/* ── WHY STRATEGIC MANDATE ─────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "72px 32px", background: "rgba(7,8,228,0.02)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 12 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(26px, 4vw, 48px)", letterSpacing: "-0.03em", marginBottom: 10 }}>
              Why Background Screening is a Strategic Mandate in the Kingdom.
            </h2>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.3)", marginBottom: 40 }}>The digital-first verification needed to protect your reputation — Regional Screening Data Analysis 2024</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 40 }}>
            {[
              { stat: "25%", label: "Education Fraud", desc: "With candidates coming from all over the world, verifying degrees is critical. 25% of discrepancies involve embellished or fake academic credentials." },
              { stat: "1 in 3", label: "Employment History", desc: "An employee background check in Saudi often reveals gap-filling or title inflation. We verify dates, roles, and reasons for leaving directly with sources." },
              { stat: "High Risk", label: "Criminal Record", desc: "Ensure workplace safety. We navigate the local police clearance protocols to provide accurate Saudi Background Checks regarding criminal history." },
            ].map(f => (
              <div key={f.label} style={{ ...GLASS, padding: "32px 28px", textAlign: "center" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 52, color: BLUE, lineHeight: 1, marginBottom: 10 }}>{f.stat}</div>
                <div style={{ fontWeight: 700, fontSize: 16, color: "#fff", marginBottom: 10 }}>{f.label}</div>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.42)", lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── UNIFIED REGIONAL REACH + WHO WE ARE ──────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "72px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 52, alignItems: "center", marginBottom: 56 }}>
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 16 }}>
                Unified Regional Reach, Localized Saudi Authority.
              </h2>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.42)", lineHeight: 1.8 }}>
                Wirestork bridges the gap between global standards and Gulf-specific regulations. While we provide comprehensive screening across the GCC (<Link href="/background-checks-in-uae" style={{ color: BLUE, textDecoration: "none" }}>UAE</Link>, Kuwait, Qatar, Bahrain, and Oman), our core expertise is rooted in the Kingdom&apos;s unique digital infrastructure. We go beyond regional data sharing by offering deep integration with Saudi-specific platforms like Absher, Najiz, and GOSI. Whether you are hiring locally or across borders, our screening ensures that your workforce remains compliant with both the Saudi PDPL and broader GCC labor standards.
              </p>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${CDN}/world-connection-meeting-at-cyber-space-table-PYVJNLQ-2.jpg`} alt="" loading="lazy" style={{ width: "100%", borderRadius: 16, aspectRatio: "3/2", objectFit: "cover" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 52, alignItems: "center", marginBottom: 56 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${CDN}/Virus-Protecetion-XN4Z8YM-2.png`} alt="" loading="lazy" style={{ width: "100%", maxWidth: 320, margin: "0 auto", objectFit: "contain" }} />
            <div>
              <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 14 }}>Expertise in the Kingdom</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 14 }}>Who We Are</h2>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.42)", lineHeight: 1.8 }}>
                Through years of operating across Saudi Arabia and the broader GCC region, we&apos;ve developed comprehensive knowledge of the Kingdom&apos;s regulatory environment. Our attorney network across 70+ partners ensures we can verify credentials quickly and accurately through official Saudi channels.
              </p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 52, alignItems: "center", marginBottom: 56 }}>
            <div>
              <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 14 }}>Swift Turnaround Times</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 14 }}>
                Your recruitment shouldn&apos;t be the bottleneck.
              </h2>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.42)", lineHeight: 1.8, marginBottom: 16 }}>
                Wirestork leverages the Kingdom&apos;s digital infrastructure—including Absher and GOSI—to deliver rapid, precision-driven background checks. Our streamlined workflows provide the verified insights you need at the speed of business, ensuring your onboarding remains agile, compliant, and ahead of the competition.
              </p>
              <Link href="/our-technology" style={{ color: BLUE, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>Our Technology →</Link>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${CDN}/programming-equipment-in-dark.jpg`} alt="Programming Equipment in Dark" loading="lazy" style={{ width: "100%", borderRadius: 16, aspectRatio: "3/2", objectFit: "cover" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 52, alignItems: "center", marginBottom: 56 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${CDN}/Surveillance-XN4Z8YM-2.png`} alt="" loading="lazy" style={{ width: "100%", maxWidth: 300, margin: "0 auto", objectFit: "contain" }} />
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 14 }}>PDPL-First Security</h2>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.42)", lineHeight: 1.8, marginBottom: 16 }}>
                Trust is built on a foundation of absolute security and local compliance. Wirestork&apos;s background screening is engineered to exceed the rigorous standards of the Saudi Personal Data Protection Law (PDPL). By utilizing KSA-based encrypted storage and a Zero-Trust security architecture, we ensure that sensitive candidate information remains protected and confidential. From the initial Absher authorization to the final encrypted report, your data never leaves our secure, SDAIA-compliant infrastructure.
              </p>
              <Link href="/data-retention" style={{ color: BLUE, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>Our Data Retention Policy →</Link>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 52, alignItems: "center", marginBottom: 56 }}>
            <div>
              <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 14 }}>Knowledge Panel</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 14 }}>Unmatched Accuracy</h2>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.42)", lineHeight: 1.8 }}>
                At Wirestork, we define precision through the lens of Saudi regulatory excellence. Our background checks are built on a foundation of Primary-Source Verification (PSV), ensuring that every credential, employment record, and judicial status is authenticated directly via official channels like Absher, GOSI, and the Ministry of Education. By eliminating the risks associated with manual errors and third-party inaccuracies, we provide a definitive professional record that leaves no room for doubt, ensuring your hiring remains fully aligned with Vision 2030 standards.
              </p>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${CDN}/computer-security-concept.jpg`} alt="Wirestork's Background check in GCC and the UAE ensures you hire safely. Get accurate PDPL Compliant background screening for employment and legal compliance." loading="lazy" style={{ width: "100%", borderRadius: 16, aspectRatio: "3/2", objectFit: "cover" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 52, alignItems: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${CDN}/Upload-XN4Z8YM-2.png`} alt="" loading="lazy" style={{ width: "100%", maxWidth: 300, margin: "0 auto", objectFit: "contain" }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${CDN}/stylish-girl-with-coffee-on-background-of-laptop-m-6T9V4UK-2.jpg`} alt="Verify Saudi talent with Wirestork. PDPL-compliant background checks in Saudi Arabia via Absher & GOSI. Fast, secure Primary Source Verification." loading="lazy" style={{ width: "100%", borderRadius: 16, aspectRatio: "3/2", objectFit: "cover" }} />
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
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.42)", maxWidth: 700, margin: "0 auto" }}>
              Our Price Match Guarantee ensures you receive the most competitive rates for high-tier, PDPL-compliant screening services. We offer complete transparency with no hidden fees; our quotes are straightforward and fully aligned with ZATCA. If you receive a lower quote for a comparable, locally-governed screening package, we will match it—ensuring you never have to choose between your budget and the security of your organization.
            </p>
          </div>
          <KSABGPricingClient />
        </div>
      </section>

      {/* ── 360-DEGREE AUTHENTICATION + ACCURACY PILLARS ─────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "72px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          {/* Map image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${CDN}/Map-Flat-Q676QDA-2.png`} alt="" loading="lazy" style={{ width: "100%", borderRadius: 16, marginBottom: 48 }} />

          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.03em", marginBottom: 8 }}>
              360-Degree Authentication
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.38)" }}>
              Integrity is found in the details. At Wirestork, we don&apos;t just &ldquo;check&rdquo; backgrounds; we authenticate them through a rigorous Primary-Source Verification framework.
            </p>
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

      {/* ── HOW WE VERIFY — 5 STEPS ──────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "72px 32px", background: "rgba(7,8,228,0.02)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 14 }}>Request a Quote</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(26px, 4vw, 48px)", letterSpacing: "-0.03em", marginBottom: 14 }}>
              How We Verify Candidates
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.42)" }}>
              Our streamlined process ensures compliance with Saudi Data Privacy laws while delivering speed.
            </p>
          </div>
          {/* Step pills */}
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 48, flexWrap: "wrap" }}>
            {["01. Request & Consent", "02. Data Collection", "03. Verification", "04. Analysis", "05. Final Report"].map((s, i) => (
              <span key={i} style={{ fontSize: 11, fontWeight: 700, padding: "6px 16px", borderRadius: 100, background: "rgba(7,8,228,0.1)", border: "1px solid rgba(7,8,228,0.2)", color: "#818CF8" }}>{s}</span>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {[
              {
                n: "01", title: "Request & Consent",
                body: "Every background check in Saudi Arabia begins with proper PDPL-compliant authorization. Once you submit a candidate for screening through our platform, we facilitate consent via the Absher portal—Saudi Arabia's official digital identity system. The consent process clearly outlines what information will be verified, how data will be used and stored in KSA-based servers, who will have access to the results, and how long records will be retained under SDAIA guidelines. No verification begins without explicit, digitally-verified consent, ensuring full legal compliance with the Saudi Personal Data Protection Law (PDPL) and protecting both employer and candidate rights throughout the process.",
              },
              {
                n: "02", title: "Data Collection",
                body: "Once Absher-authenticated consent is obtained, we guide candidates through a secure document submission portal. For Saudi nationals and residents, this includes Iqama or National ID copies, previous employment Service Certificates and GOSI records, educational degree certificates and Mosadaqa verification references, professional licenses issued by SCE, SCFHS, or SOCPA, and any additional documents relevant to the position. Our AI-powered document verification system performs initial authenticity checks. All documents are encrypted during transmission and stored in KSA-based, SDAIA-compliant servers, meeting international data security standards including ISO 27001 certifications.",
              },
              {
                n: "03", title: "Verification",
                body: "This is where our Saudi-specific expertise truly differentiates us. Rather than relying solely on candidate-provided documents, we conduct Primary-Source Verification (PSV) by contacting original issuing authorities directly. Employment Verification: Our team integrates directly with the GOSI (General Organization for Social Insurance) database to obtain official records of employment dates, registered job titles, and departure status. This provides government-authenticated data that cannot be falsified. Education Verification: We authenticate degrees through the Ministry of Education's Mosadaqa e-platform and coordinate with the Saudi Cultural Mission for international credentials. For professional qualifications, we verify directly with SCE, SCFHS, and SOCPA. Criminal Record Checks: We work with licensed Saudi lawyers who access the Ministry of Interior's Amen portal and the Ministry of Justice's Najiz system to check criminal records across all provinces of the Kingdom. This includes verification of judicial enforcement orders and pending cases.",
              },
              {
                n: "04", title: "Analysis",
                body: "Once verification data is collected, our experienced legal and compliance team analyzes findings for completeness and accuracy within the Saudi regulatory framework. This human review layer catches discrepancies that automated systems might miss. We cross-reference information to identify inconsistencies such as employment records that conflict with GOSI data, educational credentials not recognized by the Saudi Ministry of Education, professional licenses that are expired, suspended, or not aligned with Vision 2030 standards, and judicial records that the candidate did not disclose. Our analysts assess findings within the proper Saudi cultural and regulatory context. We highlight potential red flags while providing contextual analysis that enables informed hiring decisions aligned with Nitaqat (Saudization) policies and MHRSD requirements.",
              },
              {
                n: "05", title: "Comprehensive Final Report",
                body: "Within 1-9 business days depending on check complexity, you receive a detailed, PDPL-compliant background check report through our secure client portal. The report includes a clear executive summary with key findings and PDPL-compliant risk assessment, detailed Primary-Source Verification results from Absher, GOSI, Mosadaqa, and other official sources, copies of verified documents and official Saudi government confirmations, recommendations based on MHRSD guidelines and position requirements, and a complete audit trail meeting SDAIA regulatory requirements. All reports include only job-relevant information as mandated by Saudi PDPL. Candidates receive a copy of their results simultaneously, maintaining transparency. Reports are available for download and can be integrated into your HR systems via API.",
              },
            ].map((step, i, arr) => (
              <div key={step.n} style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 32, paddingBottom: 32, marginBottom: 32, borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 48, color: BLUE, lineHeight: 1 }}>{step.n}</div>
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

      {/* ── TRUSTED BY ───────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "60px 32px" }}>
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
      <section id="prequalify" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "72px 32px", scrollMarginTop: 80, background: "rgba(7,8,228,0.02)" }}>
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
            <KSABGPrequalClient />
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "72px 32px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <KSABGFAQClient />
        </div>
      </section>

    </div>
  );
}
