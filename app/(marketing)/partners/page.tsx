// app/(marketing)/partners/page.tsx — SERVER COMPONENT
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Become a Partner | Wirestork — Partnerships That Power Possibilities",
  description:
    "Join the Wirestork Partner Program. Offer travel ban checks, court case checks, and background verifications across the UAE and GCC. Up to 30% exclusive partner discounts.",
  keywords:
    "Wirestork partner program, UAE background check partner, GCC legal screening partner, become a Wirestork partner",
  openGraph: {
    title: "Become a Partner | Wirestork",
    description:
      "Partnerships that power possibilities. Extend your services into UAE & GCC legal screening with exclusive partner discounts.",
    type: "website",
  },
};

const WP = "https://wirestork.com/wp-content/uploads/2024/08";
const BLUE = "#0708E4";
const BTN_GRAD = "linear-gradient(135deg, #0708E4 0%, #6366F1 100%)";
const AMBER_GRAD = "linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)";

const glassStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 20,
};

const PARTNER_LOGOS = [
  { src: `${WP}/Partner-Logos-1.png`, alt: "Partner" },
  { src: `${WP}/Partner-Logos-2.png`, alt: "Partner" },
  { src: `${WP}/Partner-Logos-3.png`, alt: "Partner" },
  { src: `${WP}/Partner-Logos-4.png`, alt: "Partner" },
  { src: `${WP}/Partner-Logos-5.png`, alt: "Partner" },
  { src: `${WP}/logo-1-1.png`, alt: "Partner" },
];

const WHY_PARTNER = [
  {
    num: "01.",
    title: "Reach New Markets",
    body: "By partnering with Wirestork, you can extend your business operations into the UAE and Saudi Arabian markets, where there is a significant demand for thorough background checks.",
  },
  {
    num: "02.",
    title: "Comprehensive Solutions",
    body: "Add value to your existing services by incorporating our specialised checks like travel bans and legal status checks, enhancing your portfolio and making your offerings more attractive to clients.",
  },
  {
    num: "03.",
    title: "Dedicated Support",
    body: "Receive ongoing support from our experienced team, ensuring any issues are resolved promptly, maintaining high service quality and customer satisfaction.",
  },
];

const BENEFITS = [
  {
    num: "01.",
    title: "Exclusive Discounts",
    body: "Reliable and thorough background checks ensuring your business stays compliant and secure with our expert solutions. Comprehensive background checks and legal support services in GCC.",
  },
  {
    num: "02.",
    title: "Priority Service",
    body: "Get your reports in 2 days, not the usual 5. Comprehensive background checks and legal support services in GCC.",
  },
  {
    num: "03.",
    title: "Dedicated Support",
    body: "Personalised assistance with a dedicated relationship manager. Comprehensive background checks and legal support services in UAE, Saudi Arabia, and Bahrain.",
  },
];

const SERVICES_LIST = [
  "Travel Ban Checks",
  "Police Case Checks",
  "Court Case Checks",
  "Supplier Verifications",
  "Client Verifications",
  "Labour Ban Checks",
  "Background Screening",
];

const TESTIMONIALS = [
  {
    quote:
      "Partnering with Wirestork has been a game-changer for our company. Their expert background checks have allowed us to confidently expand our services into the UAE and Saudi Arabia, markets we were hesitant to enter before due to regulatory complexities.",
    name: "Raesh Kumar",
    role: "CEO — theisat.com",
    initial: "R",
  },
  {
    quote:
      "The integration of Wirestork's comprehensive background check services into our offerings has significantly enhanced our service capabilities. Our clients appreciate the added layer of security and thoroughness, which has led to increased client retention and referrals.",
    name: "Elena Martinez",
    role: "Client Attorney — H&H Legal Services",
    initial: "E",
  },
  {
    quote:
      "Collaborating with Wirestork has brought many growth opportunities for our firm. Their modern approach to legal and background checks, along with their helpful training and co-development programs, has strengthened our team's capabilities.",
    name: "Omar Hassan",
    role: "findlawyers.me",
    initial: "O",
  },
];

const FAQS = [
  {
    q: "What is the Partner Program?",
    a: "Our Partner Program is designed to help businesses and professionals grow their reach and revenue through strategic collaborations with our platform. Partners gain access to exclusive benefits, discounts, and support.",
  },
  {
    q: "What are the minimum requirements to join the Partner Program?",
    a: "To qualify, your business must have a valid commercial license, annual revenue of not less than 500,000 USD, minimum five years in business, and operate in one of our partner industries: legal services, financial services, technology, healthcare, or consulting.",
  },
  {
    q: "How do I become a partner?",
    a: "Fill out our online application form. Once your application is reviewed and approved, you'll receive a welcome email with all the necessary information to get started.",
  },
  {
    q: "What are the benefits of joining the Partner Program?",
    a: "As a partner you enjoy: Exclusive Discounts up to 30% off services; Marketing Support including co-branded materials; Dedicated Account Manager for personalised support; Training & Resources with regular webinars; and Revenue Sharing with attractive commission structures.",
  },
  {
    q: "How do I get in touch with my dedicated account manager?",
    a: "After joining, you will be assigned a dedicated account manager who will reach out to you. Their contact information will be provided in your welcome email.",
  },
];

export default function PartnersPage() {
  return (
    <main style={{ background: "#000", color: "#fff", minHeight: "100vh", fontFamily: "'Outfit', sans-serif" }}>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden", minHeight: "78vh", display: "flex", alignItems: "center" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${WP}/smile-professional-and-face-of-business-woman-in-office-for-lawyer-corporate-and-advocate-pride-1-1.jpg`}
          alt="Professional business woman — Wirestork partner"
          fetchPriority="high"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 25%", opacity: 0.22 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(0,0,0,0.93) 45%, rgba(7,8,228,0.13) 100%)" }} />
        <div style={{ position: "relative", maxWidth: 1100, margin: "0 auto", padding: "140px 32px 100px", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 20 }}>Partner Program</p>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(36px, 5.5vw, 66px)", lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 24 }}>
              Partnerships that<br />
              <span style={{ color: "rgba(255,255,255,0.28)" }}>Power Possibilities</span>
            </h1>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, maxWidth: 520, marginBottom: 12 }}>
              Got clients wanting to know if they have travel bans or police cases in the GCC? Wirestork is here to help. Our vision is to simplify legal intelligence at affordable costs. We help clients navigate the complexities of the GCC legal framework — currently limited to UAE, Saudi and Bahrain — at a fraction of the cost by teaming up with vetted lawyers.
            </p>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.3)", lineHeight: 1.7, maxWidth: 520, marginBottom: 40 }}>
              If your vision aligns with ours, let&apos;s partner up.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#apply" style={{ background: BTN_GRAD, color: "#fff", borderRadius: 100, padding: "14px 32px", fontSize: 13, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>
                Get a Partner Account →
              </a>
              <a href="#benefits" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.65)", borderRadius: 100, padding: "14px 32px", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>
                See Benefits
              </a>
            </div>
          </div>
          {/* Hero stat chips */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              { val: "2-Day", label: "Report turnaround" },
              { val: "30%", label: "Max partner discount" },
              { val: "UAE · KSA · Bahrain", label: "Active markets" },
              { val: "100%", label: "Human verified results" },
            ].map((s) => (
              <div key={s.label} style={{ ...glassStyle, padding: "18px 26px", display: "flex", alignItems: "center", gap: 20, borderRadius: 14 }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 26, color: "#fff", letterSpacing: "-0.02em", minWidth: 110 }}>{s.val}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", fontWeight: 600 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNER LOGOS ────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "52px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ textAlign: "center", fontWeight: 900, fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(255,255,255,0.18)", marginBottom: 36 }}>Our Partners</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 24, alignItems: "center" }}>
            {PARTNER_LOGOS.map((logo, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.4, filter: "grayscale(1) brightness(2)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo.src} alt={logo.alt} loading="lazy" style={{ maxWidth: "100%", maxHeight: 46, objectFit: "contain", display: "block" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY PARTNER ──────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "80px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          {/* Photo: happy-manager */}
          <div style={{ borderRadius: 20, overflow: "hidden" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${WP}/happy-manager-standing-in-office-of-start-up-company-1.jpg`} alt="Happy manager standing in office of start-up company" loading="lazy" style={{ width: "100%", aspectRatio: "3/2", objectFit: "cover", display: "block" }} />
          </div>
          <div>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 16 }}>Why Partner With Us</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(26px, 3.5vw, 44px)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 16 }}>
              We believe in the power of collaboration.
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.42)", lineHeight: 1.8, marginBottom: 36 }}>
              Our partners are integral to our mission of providing meticulous and reliable background checks across the GCC.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
              {WHY_PARTNER.map((item) => (
                <div key={item.num} style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 24, color: BLUE, flexShrink: 0, lineHeight: 1.2, minWidth: 38 }}>{item.num}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 16, color: "#fff", marginBottom: 6 }}>{item.title}</div>
                    <p style={{ fontSize: 14, color: "rgba(255,255,255,0.42)", lineHeight: 1.8, margin: 0 }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── UNMATCHED BENEFITS ───────────────────────────────────────── */}
      <section id="benefits" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "80px 32px", scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 14 }}>Unmatched Benefits</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-0.03em" }}>
              Everything you need to serve your clients better.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {BENEFITS.map((b) => (
              <div key={b.num} style={{ ...glassStyle, padding: "32px 28px" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 40, color: BLUE, lineHeight: 1, marginBottom: 18 }}>{b.num}</div>
                <h3 style={{ fontWeight: 700, fontSize: 19, color: "#fff", marginBottom: 12 }}>{b.title}</h3>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.42)", lineHeight: 1.8, margin: 0 }}>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ───────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "80px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 16 }}>What We Do</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(26px, 3.5vw, 44px)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 16 }}>
              Comprehensive background checks across the GCC.
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.42)", lineHeight: 1.8, marginBottom: 8 }}>
              Comprehensive background checks and legal support services in UAE, Saudi Arabia, and Bahrain.
            </p>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.32)", lineHeight: 1.8, marginBottom: 32 }}>
              Whether you&apos;re hiring for your startup, looking for a new roommate, or just ensuring you&apos;re surrounded by trustworthy vibes, Wirestork&apos;s got you covered. Ready to dive into the future of background checking? Let&apos;s go!
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 36 }}>
              {SERVICES_LIST.map((svc) => (
                <div key={svc} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(7,8,228,0.15)", border: "1px solid rgba(7,8,228,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ color: "#818CF8", fontSize: 10 }}>✓</span>
                  </div>
                  <span style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>{svc}</span>
                </div>
              ))}
            </div>
            <a href="#apply" style={{ display: "inline-block", background: BTN_GRAD, color: "#fff", borderRadius: 100, padding: "13px 28px", fontSize: 13, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>
              Become a Partner →
            </a>
          </div>
          {/* Photo: great-working-day bearded man */}
          <div style={{ borderRadius: 20, overflow: "hidden" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${WP}/great-working-day-young-bearded-man-in-casual-clot-AEEU39Q-1.jpg`} alt="Great working day — young professional" loading="lazy" style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", objectPosition: "center top", display: "block" }} />
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "80px 32px", background: "rgba(7,8,228,0.02)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 14 }}>Simple Transparent Pricing</p>
            <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 700, fontSize: 18, color: "rgba(255,255,255,0.28)" }}>Reliable.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, maxWidth: 880, margin: "0 auto" }}>

            {/* Tier 1 — 15% */}
            <div style={{ ...glassStyle, padding: "40px 36px", textAlign: "center", borderRadius: 24 }}>
              <p style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: 6 }}>100–150 Checks A Year?</p>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.32)", marginBottom: 22 }}>Pay as you go</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
                <div style={{ ...glassStyle, borderRadius: 10, padding: "10px 14px", fontSize: 13, color: "rgba(255,255,255,0.48)" }}>
                  Pack of 5 checks <span style={{ color: "#fff", fontWeight: 700 }}>@AED 3,000</span>
                </div>
                <div style={{ ...glassStyle, borderRadius: 10, padding: "10px 14px", fontSize: 13, color: "rgba(255,255,255,0.48)" }}>
                  Pack of 10 checks <span style={{ color: "#fff", fontWeight: 700 }}>@AED 5,500</span>
                </div>
              </div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 100, lineHeight: 0.85, letterSpacing: "-0.04em", background: BTN_GRAD, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                15<span style={{ fontSize: 50 }}>%</span>
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 20, color: "#fff", marginTop: 18, marginBottom: 16 }}>Discount on applicable rates!</h3>
              <a href="#apply" style={{ display: "inline-block", background: BTN_GRAD, color: "#fff", borderRadius: 100, padding: "12px 28px", fontSize: 13, fontWeight: 900, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", marginBottom: 22 }}>
                Apply Now →
              </a>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, textAlign: "left" }}>
                {["Two Day Reporting", "Vetted Lawyer Investigations", "Comprehensive Reporting of Pending Cases and Travel Bans", "Priority Support"].map((f) => (
                  <div key={f} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <span style={{ color: "#818CF8", fontSize: 12, marginTop: 2, flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.5 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tier 2 — 30% */}
            <div style={{ ...glassStyle, padding: "40px 36px", textAlign: "center", borderRadius: 24, borderColor: "rgba(245,158,11,0.28)", background: "rgba(245,158,11,0.03)" }}>
              <p style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: 6 }}>More than 150 Checks Annually?</p>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.32)", marginBottom: 22 }}>Prepay and Get</p>
              <div style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.18)", borderRadius: 10, padding: "10px 14px", fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 24 }}>
                Per annum — <span style={{ color: "#F59E0B", fontWeight: 700 }}>best value</span>
              </div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 100, lineHeight: 0.85, letterSpacing: "-0.04em", background: AMBER_GRAD, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                30<span style={{ fontSize: 50 }}>%</span>
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 20, color: "#fff", marginTop: 18, marginBottom: 16 }}>Discount on applicable rates</h3>
              <a href="#apply" style={{ display: "inline-block", background: AMBER_GRAD, color: "#fff", borderRadius: 100, padding: "12px 28px", fontSize: 13, fontWeight: 900, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", marginBottom: 22 }}>
                Apply Now →
              </a>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, textAlign: "left" }}>
                {["Vetted Lawyer Investigations", "Comprehensive Reporting of Pending Cases and Travel Bans", "Priority Support", "20% discount across lawyer network"].map((f) => (
                  <div key={f} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <span style={{ color: "#F59E0B", fontSize: 12, marginTop: 2, flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.5 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "80px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 14 }}>Real Experiences</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(26px, 4vw, 48px)", letterSpacing: "-0.03em" }}>
              Honest feedback from our partners around the globe.
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.32)", marginTop: 12 }}>(5.0 / 5.0)</p>
          </div>

          {/* Three testimonial cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 32 }}>
            {TESTIMONIALS.map((t) => (
              <div key={t.name} style={{ ...glassStyle, padding: "28px 24px", borderRadius: 20 }}>
                <div style={{ fontSize: 36, color: BLUE, fontFamily: "serif", lineHeight: 0.8, marginBottom: 16 }}>&ldquo;</div>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.8, fontStyle: "italic", marginBottom: 24 }}>{t.quote}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: BTN_GRAD, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 15, color: "#fff", flexShrink: 0 }}>{t.initial}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: "#fff" }}>{t.name}</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Feature chips */}
          <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap", marginBottom: 32 }}>
            {["Detailed Reporting", "Investigation by real lawyers", "Superfast turnaround times"].map((chip) => (
              <div key={chip} style={{ ...glassStyle, padding: "10px 20px", borderRadius: 100, fontSize: 13, color: "rgba(255,255,255,0.48)", fontWeight: 600 }}>✓ {chip}</div>
            ))}
          </div>

          {/* Beyond Boundaries featured block */}
          <div style={{ ...glassStyle, padding: "32px 36px", borderRadius: 20, display: "flex", alignItems: "center", gap: 28, flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, flexShrink: 0 }}>
              <div style={{ width: 50, height: 50, borderRadius: "50%", background: BTN_GRAD, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 18, color: "#fff" }}>B</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 16, color: "#fff" }}>Beyond Boundaries</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>Global Partners</div>
              </div>
            </div>
            <div style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", fontStyle: "italic", flex: 1, lineHeight: 1.7, minWidth: 240 }}>
              &ldquo;Partnering with Wirestork has been transformative. Their legal screening capabilities have opened doors in markets we couldn&apos;t reach before — and their team is with you every step of the way.&rdquo;
            </div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 20, color: "rgba(255,255,255,0.22)", flexShrink: 0 }}>5.0 / 5.0 ★</div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "80px 32px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 14 }}>FAQ</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.03em" }}>
              Frequently Asked Questions
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {FAQS.map((faq, i) => (
              <div key={i} style={{ ...glassStyle, padding: "24px 28px", borderRadius: 14 }}>
                <div style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 10 }}>
                  <span style={{ color: BLUE, fontSize: 12, fontWeight: 900, flexShrink: 0, marginTop: 3, letterSpacing: "0.05em" }}>Q{i + 1}</span>
                  <span style={{ fontWeight: 700, fontSize: 16, color: "#fff" }}>{faq.q}</span>
                </div>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.42)", lineHeight: 1.8, margin: "0 0 0 26px" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLY NOW ────────────────────────────────────────────────── */}
      <section id="apply" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "80px 32px", scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 14 }}>Apply Now</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-0.03em", marginBottom: 14 }}>
              Join us in our mission.
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.38)", maxWidth: 540, margin: "0 auto", lineHeight: 1.7 }}>
              Make high-quality legal screening services accessible to everyone. Fill in the form and our team will respond within 24 business hours.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
            {/* Form */}
            <div style={{ ...glassStyle, padding: "40px 36px", borderRadius: 24 }}>
              <div style={{ fontSize: 10, fontWeight: 900, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", marginBottom: 28 }}>Partner Application Form</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 20 }}>
                {[
                  { label: "Full Name", placeholder: "Your name" },
                  { label: "Company Name", placeholder: "Your organisation" },
                  { label: "Email Address", placeholder: "work@company.com" },
                  { label: "Phone / WhatsApp", placeholder: "+971 50 000 0000" },
                  { label: "Business Address", placeholder: "City, Country" },
                  { label: "Date of Establishment", placeholder: "e.g. 2018" },
                ].map(({ label, placeholder }) => (
                  <div key={label}>
                    <label style={{ display: "block", fontSize: 10, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: 6 }}>{label}</label>
                    <input type="text" placeholder={placeholder} style={{ width: "100%", padding: "11px 14px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, color: "#fff", fontSize: 14, outline: "none", fontFamily: "inherit", boxSizing: "border-box" }} />
                  </div>
                ))}
                <div>
                  <label style={{ display: "block", fontSize: 10, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: 6 }}>Legal Services</label>
                  <select style={{ width: "100%", padding: "11px 14px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, color: "#fff", fontSize: 14, outline: "none", fontFamily: "inherit", boxSizing: "border-box" }}>
                    <option value="" style={{ background: "#111" }}>Select industry</option>
                    {["Legal services", "Immigration services", "Technology", "Recruitment", "Consulting"].map((opt) => (
                      <option key={opt} value={opt} style={{ background: "#111" }}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 10, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: 6 }}>Approximate Number of Checks Per Year</label>
                  <input type="number" placeholder="e.g. 120" style={{ width: "100%", padding: "11px 14px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, color: "#fff", fontSize: 14, outline: "none", fontFamily: "inherit", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 10, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: 6 }}>Plan Type</label>
                  <select style={{ width: "100%", padding: "11px 14px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, color: "#fff", fontSize: 14, outline: "none", fontFamily: "inherit", boxSizing: "border-box" }}>
                    <option value="" style={{ background: "#111" }}>Select plan</option>
                    <option value="pack5" style={{ background: "#111" }}>Pack of 5 (AED 3,000) — 15% discount</option>
                    <option value="pack10" style={{ background: "#111" }}>Pack of 10 (AED 5,500) — 15% discount</option>
                    <option value="annual" style={{ background: "#111" }}>Annual 150+ checks — 30% discount</option>
                  </select>
                </div>
              </div>
              <Link href="/reach-us" style={{ display: "block", width: "100%", background: BTN_GRAD, color: "#fff", border: "none", borderRadius: 12, padding: "15px 24px", fontWeight: 900, fontSize: 14, cursor: "pointer", fontFamily: "inherit", letterSpacing: "0.04em", textAlign: "center", textDecoration: "none" }}>
                Get started →
              </Link>
              <p style={{ textAlign: "center", fontSize: 11, color: "rgba(255,255,255,0.2)", marginTop: 12 }}>We respond within 24 business hours</p>
            </div>

            {/* Right: perks + stat blocks */}
            <div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 26, letterSpacing: "-0.02em", marginBottom: 20, color: "#fff" }}>
                What you get as a partner
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 40 }}>
                {[
                  "Two Day Reporting turnaround",
                  "Vetted Lawyer Investigations",
                  "Comprehensive Reporting of Pending Cases and Travel Bans",
                  "Priority Support with a dedicated relationship manager",
                  "Exclusive Volume Discounts — 15% or 30%",
                  "20% discount across lawyer network (150+ plan)",
                  "Co-branded marketing materials and campaigns",
                  "Regular webinars, training sessions and resource library",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(7,8,228,0.15)", border: "1px solid rgba(7,8,228,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                      <span style={{ color: "#818CF8", fontSize: 10 }}>✓</span>
                    </div>
                    <span style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                {[
                  { val: "2 Days", label: "Report delivery" },
                  { val: "30%", label: "Max discount" },
                  { val: "3 Markets", label: "UAE · KSA · Bahrain" },
                  { val: "100%", label: "Human verified" },
                ].map((s) => (
                  <div key={s.label} style={{ ...glassStyle, padding: "20px 22px", borderRadius: 14 }}>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 30, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 4 }}>{s.val}</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", fontWeight: 600 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
