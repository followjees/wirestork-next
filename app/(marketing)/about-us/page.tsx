// app/(marketing)/about-us/page.tsx — SERVER COMPONENT
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — Wirestork | Legal Intelligence for the GCC",
  description: "Wirestork is a legal intelligence company built for the UAE and GCC. We simplify travel ban checks, background verifications, and legal consultations for individuals and businesses.",
  keywords: "about Wirestork, UAE legal tech company, GCC legal intelligence, background check UAE company",
  openGraph: {
    title: "About Wirestork — Legal Intelligence Simplified",
    description: "Built to make legal clarity accessible across the Gulf. Background checks, travel ban verification, and lawyer access — without the complexity.",
    type: "website",
  },
};

const BLUE = "#0708E4";
const BTN_GRAD = "linear-gradient(135deg, #0708E4 0%, #6366F1 100%)";
const GLASS = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 24,
} as const;

const STATS = [
  { n: "12,000+", label: "Checks completed" },
  { n: "6", label: "GCC countries covered" },
  { n: "98%", label: "Customer satisfaction" },
  { n: "24h", label: "Fastest turnaround" },
];

const VALUES = [
  {
    icon: "🔍",
    title: "Radical Transparency",
    body: "We tell you exactly what we check, how we check it, and what the results mean. No black boxes, no ambiguous language.",
  },
  {
    icon: "⚡",
    title: "Speed Without Compromise",
    body: "Legal processes are notoriously slow. We've rebuilt them from scratch to deliver results in hours, not weeks.",
  },
  {
    icon: "🔒",
    title: "Confidentiality First",
    body: "Every check is encrypted end-to-end. We never share data with third parties or retain it beyond your order lifecycle.",
  },
  {
    icon: "🌐",
    title: "Regional Depth",
    body: "We're not a global tool retrofitted for the Gulf. We're built specifically for UAE, KSA, Qatar, Kuwait, Oman, and Bahrain.",
  },
  {
    icon: "⚖️",
    title: "Legal Integrity",
    body: "We work within official legal frameworks. Every result is sourced from official government channels, not workarounds.",
  },
  {
    icon: "🤝",
    title: "Human Accountability",
    body: "Every order is reviewed by a real person. Our team signs off on results before they reach you.",
  },
];

const MILESTONES = [
  { year: "2019", title: "Founded in Dubai", body: "Wirestork started as a small legal research desk helping expats navigate UAE court and immigration records." },
  { year: "2021", title: "GCC Expansion", body: "Extended services to Saudi Arabia, Qatar, and Kuwait as demand grew from regional employers and law firms." },
  { year: "2023", title: "Digital Platform Launch", body: "Launched wirestork.com, moving from manual operations to a fully digital order and delivery platform." },
  { year: "2024", title: "10,000 Checks Milestone", body: "Surpassed 10,000 completed background and travel ban checks across the GCC region." },
  { year: "2025", title: "Attorney Network", body: "Built a vetted network of 200+ licensed attorneys across the GCC, enabling same-day legal consultations." },
  { year: "2026", title: "Conzurge Inc. Integration", body: "Merged with Conzurge Inc. to accelerate technology infrastructure and expand into new legal verticals." },
];

const SERVICES_SUMMARY = [
  { icon: "✈️", title: "Travel Ban Checks", slug: "/travel-ban-uae-check", body: "Verify travel ban status across UAE and Saudi Arabia through official channels." },
  { icon: "⚖️", title: "Court & Police Records", slug: "/uae-court-police-case-checking", body: "Check UAE court cases, police records, and legal history with human verification." },
  { icon: "🧑‍💼", title: "Background Checks", slug: "/background-checks-gcc", body: "Employment, criminal, and identity screening across all six GCC countries." },
  { icon: "📞", title: "Legal Consultations", slug: "/online-lawyer-consultation", body: "Licensed GCC lawyers available within 2–6 hours, no appointment needed." },
  { icon: "🏢", title: "Vendor Verification", slug: "/client-credit-check", body: "Full due diligence on clients and vendors before you sign any agreement." },
];

export default function AboutPage() {
  return (
    <main style={{ background: "#000", color: "#fff", minHeight: "100vh", fontFamily: "'Outfit', sans-serif" }}>

      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section style={{ paddingTop: 120, paddingBottom: 80, padding: "120px 32px 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(7,8,228,0.15), transparent)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative" }}>
          <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 20 }}>About Wirestork</p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(42px, 7vw, 80px)", lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 28 }}>
            Legal intelligence,<br />
            <span style={{ color: "rgba(255,255,255,0.35)" }}>built for the Gulf.</span>
          </h1>
          <p style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "rgba(255,255,255,0.5)", lineHeight: 1.8, maxWidth: 620, marginBottom: 40 }}>
            Wirestork is a legal technology company operated by Conzurge Inc. We help individuals, employers, and law firms access accurate legal data across the UAE and GCC — quickly, securely, and affordably.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/reach-us" style={{ background: BTN_GRAD, color: "#fff", borderRadius: 100, padding: "13px 28px", fontSize: 13, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>
              Get in Touch →
            </Link>
            <Link href="/services" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.7)", borderRadius: 100, padding: "13px 28px", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS ──────────────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "60px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {STATS.map((s) => (
            <div key={s.n} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(36px, 4vw, 56px)", color: "#fff", letterSpacing: "-0.03em", lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", fontWeight: 600, marginTop: 8, letterSpacing: "0.05em" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── STORY ──────────────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "80px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 16 }}>Our Story</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 24 }}>
              Built from frustration with broken legal processes.
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", lineHeight: 1.9, marginBottom: 18 }}>
              Wirestork was founded in Dubai after our team spent years watching expatriates, businesses, and job seekers struggle with the same problem: getting reliable legal information in the UAE was opaque, expensive, and exhaustingly slow.
            </p>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", lineHeight: 1.9, marginBottom: 18 }}>
              Travel bans discovered at the airport. Employment offers lost to undisclosed criminal records. Business partnerships soured by unverified vendors. These weren't edge cases — they were everyday events in the Gulf.
            </p>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", lineHeight: 1.9 }}>
              We built Wirestork to fix that. Not by cutting corners, but by rebuilding the process around clarity, speed, and genuine accountability — with real humans reviewing every result before it reaches you.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              { label: "Founded", value: "Dubai, UAE", sub: "2019" },
              { label: "Operated by", value: "Conzurge Inc.", sub: "Legal Technology" },
              { label: "Coverage", value: "6 Countries", sub: "All GCC states" },
              { label: "Languages", value: "English · Arabic", sub: "Fully bilingual" },
            ].map((item) => (
              <div key={item.label} style={{ ...GLASS, padding: 24 }}>
                <div style={{ fontSize: 10, fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: 8 }}>{item.label}</div>
                <div style={{ fontWeight: 700, fontSize: 16, color: "#fff", marginBottom: 4 }}>{item.value}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ───────────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "80px 32px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 14 }}>Timeline</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.03em" }}>How we got here.</h2>
          </div>
          <div style={{ position: "relative", paddingLeft: 40 }}>
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 1, background: "rgba(255,255,255,0.08)" }} />
            {MILESTONES.map((m, i) => (
              <div key={m.year} style={{ position: "relative", marginBottom: i < MILESTONES.length - 1 ? 44 : 0, paddingLeft: 32 }}>
                <div style={{ position: "absolute", left: -5, top: 6, width: 10, height: 10, borderRadius: "50%", background: BLUE, boxShadow: `0 0 12px rgba(7,8,228,0.6)` }} />
                <div style={{ fontSize: 10, fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", color: BLUE, marginBottom: 6 }}>{m.year}</div>
                <h3 style={{ fontWeight: 700, fontSize: 18, color: "#fff", marginBottom: 8 }}>{m.title}</h3>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.8, margin: 0 }}>{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ─────────────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "80px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 14 }}>What We Stand For</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.03em" }}>Six principles we don't compromise on.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {VALUES.map((v) => (
              <div key={v.title} style={{ ...GLASS, padding: 28, borderRadius: 20 }}>
                <div style={{ fontSize: 28, marginBottom: 16 }}>{v.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 17, color: "#fff", marginBottom: 10 }}>{v.title}</h3>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.8, margin: 0 }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ─────────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "80px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 14 }}>Our Services</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.03em" }}>What we do — and do well.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {SERVICES_SUMMARY.map((s) => (
              <Link key={s.title} href={s.slug} style={{ textDecoration: "none" }}>
                <div style={{ ...GLASS, padding: 28, borderRadius: 20, transition: "border-color 0.15s", cursor: "pointer" }}>
                  <div style={{ fontSize: 28, marginBottom: 14 }}>{s.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: 16, color: "#fff", marginBottom: 8 }}>{s.title}</h3>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, margin: "0 0 14px" }}>{s.body}</p>
                  <span style={{ fontSize: 12, color: BLUE, fontWeight: 700 }}>Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── DISCLAIMER / LEGAL NOTE ────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "48px 32px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", ...GLASS, padding: "28px 32px", borderRadius: 16 }}>
          <div style={{ fontSize: 10, fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", marginBottom: 12 }}>Legal Disclaimer</div>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", lineHeight: 1.9, margin: 0 }}>
            Wirestork is a legal technology platform operated by Conzurge Inc. We are not a law firm, lawyer referral service, or accounting firm. Legal information and services provided through wirestork.com are not a substitute for advice from a licensed attorney. For complex legal matters, we recommend consulting a qualified lawyer. Our attorney network connects you with independent licensed legal professionals.
          </p>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "80px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: 620, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.03em", marginBottom: 16 }}>
            Ready to get started?
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.45)", marginBottom: 36, lineHeight: 1.7 }}>
            Browse our services or reach out directly. Most orders are processed within 2 business hours.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/services" style={{ background: BTN_GRAD, color: "#fff", borderRadius: 100, padding: "14px 32px", fontSize: 14, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>
              Browse Services →
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
