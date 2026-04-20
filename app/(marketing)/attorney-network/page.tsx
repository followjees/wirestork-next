// app/(marketing)/attorney-network/page.tsx — SERVER COMPONENT
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Attorney Network UAE | Verified Lawyers in Dubai & GCC | Wirestork",
  description: "Wirestork's attorney network connects clients with licensed, verified lawyers across the UAE and GCC. Browse practice areas, meet our legal professionals, and get matched instantly.",
  keywords: ["attorney network UAE", "lawyers UAE", "verified lawyers Dubai", "UAE legal professionals", "GCC lawyers"],
  openGraph: {
    title: "Attorney Network UAE | Wirestork",
    description: "Licensed, vetted attorneys across all practice areas in the UAE and GCC. Get matched with the right lawyer instantly.",
    type: "website",
  },
  alternates: { canonical: "https://wirestork.com/attorney-network/" },
};

const BLUE = "#0708E4";
const BTN_GRAD = "linear-gradient(135deg, #0708E4 0%, #6366F1 100%)";
const BTN_CONTRAST = "linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)";
const GLASS = { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 24 } as const;

const LAWYERS = [
  {
    initials: "SA",
    name: "Sara Al-Mansouri",
    title: "Senior Immigration & Travel Ban Specialist",
    location: "Abu Dhabi, UAE",
    exp: "15 yrs",
    bar: "UAE Federal Bar",
    specialties: ["Travel Bans", "Immigration", "Residency Appeals"],
    rating: 4.9, reviews: 312,
    color: "#818CF8", bg: "rgba(7,8,228,0.15)",
  },
  {
    initials: "AK",
    name: "Ahmed Al-Khalidi",
    title: "Employment & Labour Law Expert",
    location: "Dubai, UAE",
    exp: "12 yrs",
    bar: "Dubai Legal Affairs Dept.",
    specialties: ["Labour Disputes", "Wrongful Termination", "MOHRE Cases"],
    rating: 4.8, reviews: 287,
    color: "#34D399", bg: "rgba(16,185,129,0.12)",
  },
  {
    initials: "MR",
    name: "Mohammed Al-Rashid",
    title: "Commercial & Debt Recovery Lawyer",
    location: "Riyadh, Saudi Arabia",
    exp: "14 yrs",
    bar: "Saudi Ministry of Justice",
    specialties: ["Debt Recovery", "Bounced Cheques", "Commercial Disputes"],
    rating: 4.9, reviews: 198,
    color: "#FCD34D", bg: "rgba(245,158,11,0.1)",
  },
  {
    initials: "PN",
    name: "Priya Nair",
    title: "Business & Corporate Law Specialist",
    location: "Dubai, UAE",
    exp: "10 yrs",
    bar: "UAE Federal Bar",
    specialties: ["Company Formation", "Contracts", "M&A"],
    rating: 4.7, reviews: 163,
    color: "#F472B6", bg: "rgba(236,72,153,0.1)",
  },
  {
    initials: "FA",
    name: "Fatima Al-Amri",
    title: "Family Law & Civil Matters",
    location: "Sharjah, UAE",
    exp: "11 yrs",
    bar: "UAE Federal Bar",
    specialties: ["Divorce", "Child Custody", "Tenancy Disputes"],
    rating: 4.8, reviews: 241,
    color: "#60A5FA", bg: "rgba(59,130,246,0.1)",
  },
  {
    initials: "YH",
    name: "Yasser Hassan",
    title: "Criminal Defence & Court Strategy",
    location: "Dubai, UAE",
    exp: "16 yrs",
    bar: "Dubai Courts",
    specialties: ["Criminal Defence", "Court Cases", "Arrest Warrants"],
    rating: 5.0, reviews: 89,
    color: "#F87171", bg: "rgba(239,68,68,0.1)",
  },
  {
    initials: "KA",
    name: "Khalid Al-Suwaidi",
    title: "Real Estate & Property Law",
    location: "Dubai, UAE",
    exp: "13 yrs",
    bar: "UAE Federal Bar",
    specialties: ["Tenancy Disputes", "RERA", "Property Transfers"],
    rating: 4.8, reviews: 174,
    color: "#A78BFA", bg: "rgba(139,92,246,0.12)",
  },
  {
    initials: "LT",
    name: "Layla Tahir",
    title: "Cyber Law & Technology Disputes",
    location: "Dubai, UAE",
    exp: "8 yrs",
    bar: "UAE Federal Bar",
    specialties: ["Cybercrime", "Data Privacy", "IT Contracts"],
    rating: 4.9, reviews: 112,
    color: "#2DD4BF", bg: "rgba(20,184,166,0.1)",
  },
  {
    initials: "NB",
    name: "Nasser Al-Balushi",
    title: "Banking & Financial Disputes",
    location: "Abu Dhabi, UAE",
    exp: "17 yrs",
    bar: "ADGM Courts",
    specialties: ["Banking Disputes", "Loan Defaults", "Arbitration"],
    rating: 4.9, reviews: 203,
    color: "#FB923C", bg: "rgba(251,146,60,0.1)",
  },
];

const PRACTICE_AREAS = [
  { icon: "🏢", title: "Business & Commercial Law", desc: "Company incorporation, contracts, commercial disputes, M&A, and shareholder agreements." },
  { icon: "👷", title: "Employment & Immigration", desc: "Labour disputes, wrongful termination, MOHRE cases, work visa appeals, and residency matters." },
  { icon: "⚖️", title: "Civil, Criminal & Debt", desc: "Bounced cheques, travel bans, criminal defence, debt collection, and dispute resolution." },
  { icon: "👨‍👩‍👧", title: "Family Law", desc: "Divorce, child custody, alimony, domestic matters, and marriage contracts." },
  { icon: "🏠", title: "Real Estate & Property", desc: "Tenancy disputes, RERA matters, property transfers, developer fraud, and eviction notices." },
  { icon: "💻", title: "Technology & Cyber Law", desc: "Cybercrime, data protection, social media defamation, and IT contract disputes." },
  { icon: "🏦", title: "Banking & Finance", desc: "Loan defaults, banking disputes, financial arbitration, and debt enforcement." },
  { icon: "🛂", title: "Immigration & Visas", desc: "Visa appeals, residency disputes, entry ban removal, and sponsorship matters." },
];

const STATS = [
  { n: "60+", label: "Licensed Attorneys" },
  { n: "7", label: "Practice Areas" },
  { n: "6", label: "GCC Countries" },
  { n: "4.9★", label: "Average Rating" },
];

const VETTING = [
  { n: "01", title: "License Verification", body: "Every attorney is verified against their respective bar or judicial authority — UAE Federal Bar, Dubai Courts, ADGM, Saudi Ministry of Justice, and equivalent GCC bodies." },
  { n: "02", title: "Jurisdiction Assessment", body: "Lawyers are assessed for depth of experience in their stated practice area and jurisdiction. Generalists are not accepted — we match you with proven specialists." },
  { n: "03", title: "Track Record Review", body: "We review case history, client outcomes, and professional standing. Attorneys with disciplinary records or unresolved complaints are excluded from our network." },
  { n: "04", title: "Ongoing Performance", body: "Client feedback is collected after every engagement. Attorneys who fall below our quality threshold are reviewed and, if necessary, removed from the network." },
];

export default function AttorneyNetworkPage() {
  return (
    <div style={{ background: "#000", color: "#fff", fontFamily: "'Outfit', sans-serif" }}>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org/", "@type": "LegalService",
        "name": "Wirestork Attorney Network",
        "description": "Licensed, verified attorneys across all practice areas in the UAE and GCC.",
        "provider": { "@type": "Organization", "name": "Wirestork" },
        "areaServed": ["AE", "SA", "BH", "QA", "KW", "OM"],
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "312" }
      })}} />

      {/* ── TRUST BAR ───────────────────────────────────────────────── */}
      <div style={{ background: "rgba(255,255,255,0.02)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "10px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 20 }}>
          {[["⚖️", "Licensed & Verified"], ["🌍", "6 GCC Countries"], ["⭐", "4.9 Average Rating"], ["🔒", "Attorney-Client Privilege"]].map(([icon, label]) => (
            <span key={String(label)} style={{ display: "flex", alignItems: "center", gap: 7, border: "1px dashed rgba(7,8,228,0.4)", borderRadius: 100, padding: "5px 14px", fontSize: 13, color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>
              <span>{icon}</span> {label}
            </span>
          ))}
        </div>
      </div>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section style={{ paddingTop: 100, paddingBottom: 80, position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)", backgroundSize: "40px 40px", maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 60%, transparent 100%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", position: "relative" }}>
          <div style={{ textAlign: "center", maxWidth: 800, margin: "0 auto 64px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(7,8,228,0.12)", border: "1px solid rgba(7,8,228,0.3)", borderRadius: 100, padding: "4px 14px 4px 8px", marginBottom: 28 }}>
              <span style={{ background: BTN_GRAD, color: "#fff", borderRadius: 100, padding: "2px 10px", fontSize: 10, fontWeight: 900, letterSpacing: "0.1em" }}>60+</span>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.6)" }}>Licensed attorneys across UAE & GCC</span>
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(42px, 6vw, 72px)", lineHeight: 1.0, letterSpacing: "-0.03em", marginBottom: 24 }}>
              The Wirestork <span style={{ color: BLUE }}>Attorney Network</span>
            </h1>
            <p style={{ fontSize: 19, color: "rgba(255,255,255,0.5)", lineHeight: 1.75, marginBottom: 40, maxWidth: 600, margin: "0 auto 40px" }}>
              Every lawyer in our network is licensed, vetted, and experienced in GCC law. You get matched automatically based on your legal category and jurisdiction — no guesswork, no cold calls.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/online-lawyer-consultation" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: BTN_GRAD, color: "#fff", padding: "14px 28px", borderRadius: 12, fontWeight: 900, fontSize: 14, textDecoration: "none", letterSpacing: "0.05em" }}>
                Get Matched with a Lawyer →
              </Link>
              <a href="#section-lawyers" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", padding: "14px 28px", borderRadius: 12, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
                Browse Attorneys ↓
              </a>
            </div>
          </div>

          {/* Stats strip */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, maxWidth: 860, margin: "0 auto" }}>
            {STATS.map(({ n, label }) => (
              <div key={label} style={{ ...GLASS, padding: "24px 20px", textAlign: "center" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 32, color: "#fff", lineHeight: 1 }}>{n}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 6 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW MATCHING WORKS ───────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "80px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 14 }}>Smart Matching</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(28px, 4vw, 44px)", letterSpacing: "-0.02em", marginBottom: 20, lineHeight: 1.1 }}>You Don&apos;t Pick a Lawyer. We Match You With the Right One.</h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: 24 }}>When you submit a legal consultation request, our system considers your jurisdiction (UAE, Saudi Arabia, Bahrain, etc.), your legal category (employment, travel ban, debt, family, etc.), and the complexity of your case — then assigns the best-matched attorney from our network automatically.</p>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: 32 }}>Your assigned lawyer reaches out within 6 business hours (2 hours on Premium). You communicate directly, securely, and confidentially.</p>
            <Link href="/online-lawyer-consultation" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: BTN_GRAD, color: "#fff", padding: "13px 24px", borderRadius: 12, fontWeight: 900, fontSize: 13, textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Book a Consultation →
            </Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { step: "1", label: "You describe your legal issue", detail: "Jurisdiction, category, and case details" },
              { step: "2", label: "System identifies the right match", detail: "By specialization, jurisdiction, and availability" },
              { step: "3", label: "Lawyer assigned within minutes", detail: "Licensed, verified, experienced in your area" },
              { step: "4", label: "Attorney contacts you within 6 hours", detail: "Written legal opinion delivered to your inbox" },
            ].map((item) => (
              <div key={item.step} style={{ ...GLASS, padding: "18px 22px", display: "flex", gap: 16, alignItems: "center" }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: BTN_GRAD, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 16, color: "#fff", flexShrink: 0 }}>{item.step}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "#fff", marginBottom: 3 }}>{item.label}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ATTORNEY PROFILES ────────────────────────────────────────── */}
      <section id="section-lawyers" style={{ padding: "80px 32px", borderTop: "1px solid rgba(255,255,255,0.06)", scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 14 }}>Our Attorneys</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em", marginBottom: 16 }}>Meet the Wirestork Attorney Network</h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 17, maxWidth: 560, margin: "0 auto" }}>A selection of the licensed legal professionals you may be matched with. Every attorney shown is currently active on the platform.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {LAWYERS.map((l) => (
              <div key={l.name} style={{ ...GLASS, padding: 28, display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 20 }}>
                  <div style={{ width: 60, height: 60, borderRadius: "50%", background: l.bg, border: `2px solid ${l.color}40`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 20, color: l.color, flexShrink: 0 }}>{l.initials}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 16, color: "#fff", marginBottom: 3 }}>{l.name}</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.5, marginBottom: 6 }}>{l.title}</div>
                    <div style={{ display: "flex", gap: 2, alignItems: "center" }}>
                      {[1,2,3,4,5].map((s) => <span key={s} style={{ color: s <= Math.floor(l.rating) ? "#F59E0B" : "rgba(255,255,255,0.15)", fontSize: 13 }}>★</span>)}
                      <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginLeft: 5 }}>{l.rating} ({l.reviews})</span>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 12, marginBottom: 14, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>📍 {l.location}</span>
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>• {l.exp} exp.</span>
                </div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: 8 }}>Specialties</div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
                  {l.specialties.map((s) => (
                    <span key={s} style={{ background: `${l.color}15`, border: `1px solid ${l.color}30`, color: l.color, fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 100 }}>{s}</span>
                  ))}
                </div>
                <div style={{ marginTop: "auto", fontSize: 11, color: "rgba(255,255,255,0.25)", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 12 }}>
                  Licensed: {l.bar}
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/online-lawyer-consultation" style={{ display: "inline-block", background: BTN_GRAD, color: "#fff", borderRadius: 12, padding: "14px 36px", fontWeight: 900, fontSize: 14, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>
              Get Matched with a Lawyer →
            </Link>
          </div>
        </div>
      </section>

      {/* ── PRACTICE AREAS ───────────────────────────────────────────── */}
      <section style={{ padding: "80px 32px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 14 }}>Practice Areas</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em" }}>Legal Coverage Across All Practice Areas</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
            {PRACTICE_AREAS.map((area) => (
              <div key={area.title} style={{ ...GLASS, padding: 24 }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{area.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 15, color: "#fff", marginBottom: 8 }}>{area.title}</h3>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VETTING PROCESS ──────────────────────────────────────────── */}
      <section style={{ background: "#fff", color: "#000", borderRadius: 80, margin: "0 16px", padding: "80px 64px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em", color: "#111", marginBottom: 16 }}>How We Vet Every Attorney</h2>
            <p style={{ fontSize: 18, color: "#6B7280", maxWidth: 560, margin: "0 auto" }}>Not all lawyers are equal. Our four-stage vetting process ensures only qualified, accountable attorneys join the Wirestork network.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24 }}>
            {VETTING.map((v) => (
              <div key={v.n} style={{ background: "#F9FAFB", border: "1px solid #E5E7EB", borderRadius: 20, padding: 28, borderLeft: "4px solid #0708E4" }}>
                <div style={{ fontSize: 10, fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0708E4", marginBottom: 8 }}>{v.n}</div>
                <h3 style={{ fontWeight: 800, fontSize: 18, color: "#111", marginBottom: 10 }}>{v.title}</h3>
                <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.75 }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOIN THE NETWORK CTA ─────────────────────────────────────── */}
      <section style={{ padding: "80px 32px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 14 }}>For Lawyers</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.02em", marginBottom: 20, lineHeight: 1.1 }}>Are You a Licensed GCC Lawyer? Join Our Network.</h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: 16 }}>Wirestork connects qualified attorneys with clients who need verified legal help across the UAE and GCC. If you are a licensed legal professional with experience in UAE, Saudi, Bahraini, Qatari, Kuwaiti, or Omani law, we want to hear from you.</p>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: 32 }}>We handle client acquisition, platform logistics, and payment processing — you focus on delivering great legal advice.</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/reach-us" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: BTN_GRAD, color: "#fff", padding: "13px 24px", borderRadius: 12, fontWeight: 900, fontSize: 13, textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Apply to Join →
              </Link>
              <Link href="/reach-us" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", padding: "12px 24px", borderRadius: 12, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
                Contact Us
              </Link>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              { icon: "💼", title: "Flexible Engagement", body: "Take on cases that match your schedule and expertise. No minimum commitment required." },
              { icon: "💳", title: "Fast, Reliable Payments", body: "Payments processed within 7 business days of case completion. No chasing invoices." },
              { icon: "🌍", title: "Cross-Border Reach", body: "Access clients from the UAE, Saudi Arabia, Bahrain, and across the GCC region." },
              { icon: "📋", title: "Case Management Tools", body: "Secure client portal, document management, and case tracking — all provided by Wirestork." },
            ].map((b) => (
              <div key={b.title} style={{ ...GLASS, padding: "18px 22px", display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{ fontSize: 24, flexShrink: 0 }}>{b.icon}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "#fff", marginBottom: 4 }}>{b.title}</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>{b.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────── */}
      <section style={{ padding: "0 32px 80px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ ...GLASS, padding: 56, textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(28px, 4vw, 44px)", letterSpacing: "-0.02em", marginBottom: 16 }}>Need Legal Help Right Now?</h2>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.45)", marginBottom: 32, maxWidth: 480, margin: "0 auto 32px" }}>Book a consultation and get matched with a verified lawyer from our network within minutes. Same-day advice available.</p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/online-lawyer-consultation" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: BTN_GRAD, color: "#fff", padding: "15px 32px", borderRadius: 12, fontWeight: 900, fontSize: 15, textDecoration: "none", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                Book a Consultation →
              </Link>
              <Link href="/services" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", padding: "14px 32px", borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
                Browse All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
