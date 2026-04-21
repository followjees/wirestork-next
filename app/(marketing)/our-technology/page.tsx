// app/(marketing)/our-technology/page.tsx — SERVER COMPONENT
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Technology — Wirestork | Cutting-Edge Legal Screening",
  description: "Wirestork uses advanced data analytics and human-certified verification to deliver precise background checks, travel ban verifications, and court record checks across the GCC.",
  keywords: "Wirestork technology, legal screening technology UAE, background check technology GCC, human certified legal reports",
  openGraph: {
    title: "Our Technology — Wirestork",
    description: "Cutting-edge legal screening technology built for the UAE and GCC. Data-driven. Human-certified. Unmatched accuracy.",
    type: "website",
  },
};

const BLUE = "#0708E4";
const BTN_GRAD = "linear-gradient(135deg, #0708E4 0%, #6366F1 100%)";
const GLASS = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 20,
} as const;

// Images extracted directly from WordPress
const WP = "https://wirestork.com/wp-content/uploads/2024/08";

// Feature rows: icon (WP) + title + bullets + hero photo
const FEATURE_ROWS = [
  {
    icon: `${WP}/Server-XN4Z8YM-2.png`,
    title: "In-Depth Reports",
    subtitle: "Receive comprehensive and detailed reports that provide valuable insights into the backgrounds of individuals or entities, aiding in better decision-making.",
    bullets: [
      { label: "Thorough Analysis", text: "Our reports go beyond basic data to include thorough analysis, highlighting key details and potential red flags." },
      { label: "Customizable Reporting", text: "Tailor reports to meet your specific needs, focusing on the aspects most relevant to your business decisions." },
      { label: "Historical Data Access", text: "Gain access to historical data and trends to better understand the background and behavior patterns of individuals or entities." },
    ],
    photo: `${WP}/world-connection-meeting-at-cyber-space-table-PYVJNLQ-2.jpg`,
    photoAlt: "World connection meeting at cyber space table",
    reverse: false,
  },
  {
    icon: `${WP}/Virus-Protecetion-XN4Z8YM-2.png`,
    title: "Strategic Insights",
    subtitle: "Use the information from our reports to inform your strategic planning, whether it's for hiring, partnerships, or other critical business decisions.",
    bullets: [
      { label: "Hiring Decisions", text: "Make confident hiring decisions by understanding the complete background of potential employees, ensuring they meet your organization's standards." },
      { label: "Partnership Evaluations", text: "Evaluate potential business partners thoroughly to mitigate risks and ensure alignment with your business values and objectives." },
      { label: "Operational Planning", text: "Leverage insights from our reports to plan and optimize operational strategies, from expansion to market entry." },
    ],
    photo: `${WP}/their-meetings-are-insightful.jpg`,
    photoAlt: "Their meetings are insightful",
    reverse: true,
  },
  {
    icon: `${WP}/Surveillance-XN4Z8YM-2.png`,
    title: "Data-Driven Decisions",
    subtitle: "Base your decisions on accurate, data-driven insights to improve overall business outcomes.",
    bullets: [
      { label: "Objective Analysis", text: "Rely on objective, data-driven analysis to remove biases and make more informed decisions." },
      { label: "Performance Monitoring", text: "Use detailed data to monitor performance and compliance, ensuring ongoing alignment with your business goals." },
      { label: "Proactive Risk Management", text: "Anticipate and address potential risks before they become issues, maintaining a proactive approach to risk management." },
    ],
    photo: `${WP}/focused-businessman-analyzing-charts-and-graphs-in-modern-office.jpg`,
    photoAlt: "Focused businessman analyzing charts and graphs in modern office",
    reverse: false,
  },
  {
    icon: `${WP}/Upload-XN4Z8YM-2.png`,
    title: "Unmatched Accuracy",
    subtitle: "Trust is at the heart of everything we do at Wirestork. Our commitment to providing legally verified and human-certified information has empowered countless clients to make informed decisions with absolute confidence.",
    bullets: [
      { label: "Legally Verified", text: "Every result is sourced from official government databases — never third-party aggregators." },
      { label: "Human Certified", text: "Our legal team personally reviews and certifies all results before delivery to you." },
      { label: "Consistent Precision", text: "Whether it's background checks, case updates, or travel ban verifications — clients get fast, precise, and reliable results." },
    ],
    photo: `${WP}/stylish-girl-with-coffee-on-background-of-laptop-m-6T9V4UK-1.jpg`,
    photoAlt: "Reviewing verified legal results",
    reverse: true,
  },
];

const TECH_PILLARS = [
  {
    icon: `${WP}/Retina-Lock-XN4Z8YM-2.png`,
    title: "Advanced Data Analytics",
    text: "Utilizing state-of-the-art data analytics tools, we ensure accuracy and efficiency in our screening processes.",
  },
  {
    icon: `${WP}/Login-XN4Z8YM-2.png`,
    title: "Human Certified",
    text: "Our expert legal associates meticulously review and certify all background checks, ensuring unparalleled precision and reliability.",
  },
  {
    icon: `${WP}/Virus-Scan-XN4Z8YM-2.png`,
    title: "Professional Assurance",
    text: "Benefit from the insights and validations from experienced legal professionals dedicated to maintaining the highest standards.",
  },
];

const TRUSTED_BY = [
  { src: `${WP}/9.png`, alt: "Trusted partner" },
  { src: `${WP}/logo.png`, alt: "ADNOC & IKEA trust Wirestork background checks UAE" },
  { src: `${WP}/8.png`, alt: "Qatar Airways uses Wirestork background screening" },
  { src: `${WP}/1-3.png`, alt: "Trusted partner" },
  { src: `${WP}/logo-1.png`, alt: "Trusted partner" },
  { src: `${WP}/5.png`, alt: "Trusted partner" },
];

export default function OurTechnologyPage() {
  return (
    <main style={{ background: "#000", color: "#fff", minHeight: "100vh", fontFamily: "'Outfit', sans-serif" }}>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section style={{ paddingTop: 120, paddingBottom: 80, padding: "120px 32px 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(7,8,228,0.12), transparent)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 860, margin: "0 auto", position: "relative", textAlign: "center" }}>
          <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 20 }}>Our Technology</p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(40px, 7vw, 76px)", lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 24 }}>
            Cutting-Edge Legal<br />
            <span style={{ color: "rgba(255,255,255,0.35)" }}>Screening Technology</span>
          </h1>
          <p style={{ fontSize: "clamp(15px, 1.8vw, 19px)", color: "rgba(255,255,255,0.5)", lineHeight: 1.8, maxWidth: 640, margin: "0 auto 40px" }}>
            Get detailed insights and information you need to make informed, strategic hiring or migration decisions. Our comprehensive reports offer an unparalleled depth of analysis, helping you navigate complex business environments with confidence.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/background-checks-gcc" style={{ background: BTN_GRAD, color: "#fff", borderRadius: 100, padding: "13px 28px", fontSize: 13, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>
              Start With a Service →
            </Link>
            <Link href="/reach-us" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.7)", borderRadius: 100, padding: "13px 28px", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>
              Talk to Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURE ROWS ─────────────────────────────────────────────── */}
      {FEATURE_ROWS.map((row, i) => (
        <section key={row.title} style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "80px 32px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", direction: row.reverse ? "rtl" : "ltr" }}>
            {/* Photo side */}
            <div style={{ direction: "ltr", borderRadius: 20, overflow: "hidden", position: "relative" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={row.photo}
                alt={row.photoAlt}
                loading={i === 0 ? "eager" : "lazy"}
                style={{ width: "100%", aspectRatio: "3/2", objectFit: "cover", display: "block" }}
              />
            </div>
            {/* Text side */}
            <div style={{ direction: "ltr" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={row.icon} alt="" width={48} height={48} style={{ objectFit: "contain" }} />
                <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", margin: 0 }}>
                  {i === 0 ? "Core Technology" : i === 1 ? "Intelligence Layer" : i === 2 ? "Data Science" : "Quality Assurance"}
                </p>
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(26px, 3.5vw, 44px)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 16 }}>
                {row.title}
              </h2>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: 28 }}>{row.subtitle}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {row.bullets.map((b) => (
                  <div key={b.label} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(7,8,228,0.2)", border: "1px solid rgba(7,8,228,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                      <span style={{ color: "#818CF8", fontSize: 10 }}>✓</span>
                    </div>
                    <div>
                      <span style={{ fontWeight: 700, color: "#fff" }}>{b.label}:</span>{" "}
                      <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, lineHeight: 1.7 }}>{b.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── INNOVATIVE SOLUTIONS ─────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "80px 32px", background: "rgba(7,8,228,0.03)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            {/* Left: phone/device illustration */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${WP}/man-and-woman-texting-on-phones-digitally-connecte-HNVM8GG-2.png`}
                alt="Digitally connected background check platform"
                loading="lazy"
                style={{ maxWidth: 320, width: "100%", objectFit: "contain" }}
              />
            </div>
            {/* Right: text + tech pillar cards */}
            <div>
              <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 16 }}>How It Works</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(26px, 3.5vw, 44px)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 14 }}>
                Innovative Solutions for Comprehensive Checks
              </h2>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: 36 }}>
                At Wirestork.com, we harness advanced technology to deliver precise and thorough background checks. Our solutions encompass court and police case checks, travel ban checks, and comprehensive background screening services.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {TECH_PILLARS.map((p) => (
                  <div key={p.title} style={{ ...GLASS, padding: "18px 20px", display: "flex", gap: 16, alignItems: "flex-start" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.icon} alt="" width={36} height={36} style={{ objectFit: "contain", flexShrink: 0 }} />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 15, color: "#fff", marginBottom: 4 }}>{p.title}</div>
                      <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 32 }}>
                <Link href="/background-checks-gcc" style={{ background: BTN_GRAD, color: "#fff", borderRadius: 100, padding: "13px 28px", fontSize: 13, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", display: "inline-block" }}>
                  Start With a Service →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUSTED BY ───────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "64px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ textAlign: "center", fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: 40 }}>Trusted By</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 24, alignItems: "center" }}>
            {TRUSTED_BY.map((logo, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.45, filter: "grayscale(1) brightness(2)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo.src} alt={logo.alt} loading="lazy" style={{ maxWidth: "100%", maxHeight: 48, objectFit: "contain" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "80px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: 620, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.03em", marginBottom: 16 }}>
            Ready to experience the difference?
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.45)", marginBottom: 36, lineHeight: 1.7 }}>
            Start with any of our services and get results delivered to your inbox, verified by our legal team.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/services" style={{ background: BTN_GRAD, color: "#fff", borderRadius: 100, padding: "14px 32px", fontSize: 14, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>
              Browse All Services →
            </Link>
            <Link href="/reach-us" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.7)", borderRadius: 100, padding: "14px 32px", fontSize: 14, fontWeight: 700, textDecoration: "none" }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
