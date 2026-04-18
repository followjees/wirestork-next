// app/(marketing)/page.tsx
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wirestork — Legal Intelligence Simplified | Wirestork",
  description: "Fast, accurate travel ban checks, background checks, legal consultations and more across the UAE and GCC.",
  keywords: ["UAE travel ban check","labor ban check","UAE legal services","Saudi travel ban","background check UAE","online lawyer UAE"],
  openGraph: {
    title: "Wirestork — Legal Intelligence Simplified | Wirestork",
    description: "Fast, accurate travel ban checks, background checks, legal consultations and more across the UAE and GCC.",
    type: "website",
  },
};

const BLUE = "#0708E4";
const BTN_GRAD = "linear-gradient(135deg, #0708E4 0%, #6366F1 100%)";
const BTN_CONTRAST = "linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)";

const IMG = {
  proof1: "https://wired.b-cdn.net/wp-content/uploads/2024/08/3-1.png.bv.webp",
  proof2: "https://wired.b-cdn.net/wp-content/uploads/2024/08/1-1.png.bv.webp",
  proof3: "https://wired.b-cdn.net/wp-content/uploads/2024/08/2-1.png.bv.webp",
  proof4: "https://wired.b-cdn.net/wp-content/uploads/2024/08/4-1.png.bv.webp",
  office1: "https://wired.b-cdn.net/wp-content/uploads/2024/08/mixed-race-app-developer-in-coworking-space-PCZWKRD-1.jpg.bv.webp",
  office2: "https://wired.b-cdn.net/wp-content/uploads/2024/08/coworkers-discussing-project-in-board-room-9Q9BD26-1.jpg.bv.webp",
  office3: "https://wired.b-cdn.net/wp-content/uploads/2024/08/coworking-and-freelancing-72NJF7M-1.jpg.bv.webp",
  ajaz: "https://wired.b-cdn.net/wp-content/uploads/2024/08/Untitled-design-2.jpg.bv.webp",
  omar: "https://wired.b-cdn.net/wp-content/uploads/2024/08/3-2.jpg.bv.webp",
  elena: "https://wired.b-cdn.net/wp-content/uploads/2024/08/2-2.jpg.bv.webp",
};

export default function HomePage() {
  return (
    <div style={{ background: "#000", color: "#fff", fontFamily: "'Outfit', sans-serif", overflowX: "hidden" }}>

      {/* ── ANNOUNCEMENT BAR ─────────────────────────────────────────── */}
      <div style={{ background: "#000", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "10px 24px", textAlign: "center", fontSize: 12, color: "rgba(255,255,255,0.45)", letterSpacing: "0.05em", display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
        <span>Saudi Travel Ban Checks — Jawazat Verified. Confirm your travel ban status before exit or entry.</span>
        <Link href="/check-travel-ban-in-saudi-arabia" style={{ background: BTN_GRAD, color: "#fff", fontWeight: 900, fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", padding: "4px 14px", borderRadius: 6 }}>Check Status</Link>
      </div>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "120px 32px 80px", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)", backgroundSize: "40px 40px", maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 60%, transparent 100%)", pointerEvents: "none" }} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 48, borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: 80, position: "relative" }}>
          <div>
            <p style={{ color: BLUE, fontWeight: 900, letterSpacing: "0.3em", textTransform: "uppercase", fontSize: 11, marginBottom: 32, fontStyle: "italic" }}>● Legal Intelligence Simplified</p>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontStyle: "italic", fontSize: "clamp(72px, 11vw, 152px)", lineHeight: 0.82, letterSpacing: "-0.03em", marginBottom: 36 }}>
              EFFICIENT.<br />RELIABLE.<br />ACCURATE.
            </h1>
            <p style={{ fontSize: 22, color: "rgba(255,255,255,0.5)", maxWidth: 560, lineHeight: 1.65 }}>
              Get Affordable legal help in the UAE and Middle East From top rated lawyers.{" "}
              <span style={{ color: "#fff" }}>126,448 checks and counting.</span>
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: 14 }}>
            <Link href="/uae-court-police-case-checking" style={{ display: "block", background: BTN_GRAD, color: "#fff", padding: "28px 24px", borderRadius: 28, fontWeight: 900, fontSize: 18, textAlign: "center", textDecoration: "none", letterSpacing: "-0.01em", lineHeight: 1.2 }}>
              START A POLICE<br />CASE CHECK
            </Link>
            <Link href="/travel-ban-uae-check" style={{ display: "block", background: BTN_CONTRAST, color: "#fff", padding: "28px 24px", borderRadius: 28, fontWeight: 900, fontSize: 18, textAlign: "center", textDecoration: "none", letterSpacing: "-0.01em", lineHeight: 1.2 }}>
              START A TRAVEL<br />BAN CHECK
            </Link>
          </div>
        </div>

        {/* Social proof images row */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "28px 0 0", position: "relative" }}>
          <div style={{ display: "flex" }}>
            {[IMG.proof1, IMG.proof2, IMG.proof3, IMG.proof4].map((src, i) => (
              <div key={i} style={{ width: 44, height: 44, borderRadius: "50%", border: "2px solid #000", marginLeft: i === 0 ? 0 : -14, overflow: "hidden", position: "relative", background: "#111" }}>
                <img src={src} alt="Client" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            ))}
          </div>
          <div>
            <div style={{ display: "flex", gap: 2, marginBottom: 2 }}>{"★★★★★".split("").map((s,i) => <span key={i} style={{ color: "#F59E0B", fontSize: 13 }}>{s}</span>)}</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)" }}>Rated 4.8 / 5.0 · 126,448 checks</div>
          </div>
          <div style={{ marginLeft: "auto", display: "flex", gap: 28, fontSize: 11, fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>
            <span><span style={{ color: BLUE, marginRight: 6 }}>✓</span>Human Verified</span>
            <span><span style={{ color: BLUE, marginRight: 6 }}>✓</span>Accurate Reporting</span>
            <span><span style={{ color: BLUE, marginRight: 6 }}>✓</span>Fast Turnaround</span>
          </div>
        </div>
      </section>

      {/* ── EXPERT ATTORNEYS ─────────────────────────────────────────── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px 80px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ color: "rgba(255,255,255,0.3)", fontWeight: 900, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>Expert Local Attorneys</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(36px, 5vw, 56px)", letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 16 }}>Expert Local Attorneys Are Waiting To Help</h2>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 16, maxWidth: 580, margin: "0 auto 8px", lineHeight: 1.7 }}>Utilizing our DIY services does not mean you have to tackle everything solo. Rely on our trusted network of lawyers for support without incurring hourly fees or having to make physical visits to their office.</p>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 13 }}>Pay it in 4 interest-free instalments.</p>
        </div>

        {/* 3 cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 24 }}>
          {/* Card 01 — Collaborate */}
          <div style={{ background: "rgba(7,8,228,0.12)", border: "1px solid rgba(7,8,228,0.3)", borderRadius: 40, padding: 40, display: "flex", flexDirection: "column" }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 52, lineHeight: 0.85, letterSpacing: "-0.03em", color: BLUE, marginBottom: 24 }}>01.<br />COLLABORATE</div>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.75, flex: 1, marginBottom: 24 }}>Our enterprise level secure portal with real time update of your case matters. Your documents, messages, tasks and to do lists are all updated on a single dashboard.</p>
            <Link href="/our-technology" style={{ fontWeight: 900, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", color: BLUE, display: "flex", alignItems: "center", gap: 6 }}>Pay For Intelligence ↗</Link>
          </div>

          {/* Card 02 — Pay For Intelligence */}
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 40, padding: 40, display: "flex", flexDirection: "column" }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 52, lineHeight: 0.85, letterSpacing: "-0.03em", color: "rgba(255,255,255,0.15)", marginBottom: 24 }}>02.<br /><span style={{ fontSize: 32 }}>PAY FOR<br />INTELLIGENCE</span></div>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.75, flex: 1, marginBottom: 24 }}>You pay for intelligent data verified by local lawyers and which matters to the point. Our quantitative metrics revolve around the essential W's bundled with productive solutions crafted by genius Storks.</p>
            <Link href="/our-technology" style={{ fontWeight: 900, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", color: "rgba(255,255,255,0.4)", display: "flex", alignItems: "center", gap: 6 }}>Our Technology ↗</Link>
          </div>

          {/* Card 03 — Multilingual */}
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 40, padding: 40, display: "flex", flexDirection: "column" }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 52, lineHeight: 0.85, letterSpacing: "-0.03em", color: "rgba(255,255,255,0.15)", marginBottom: 24 }}>03.<br /><span style={{ fontSize: 26 }}>MULTILINGUAL<br />&amp; TRANSLATABLE</span></div>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.75, flex: 1, marginBottom: 24 }}>Confused with legal jargon. All your legal papers are interpreted into English and uploaded onto your dashboard; and your court and proceeding applications will be executed even before you know it.</p>
            <Link href="/our-technology" style={{ fontWeight: 900, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", color: "rgba(255,255,255,0.4)", display: "flex", alignItems: "center", gap: 6 }}>Our Technology ↗</Link>
          </div>
        </div>

        {/* Get Legal Help CTA */}
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <Link href="/online-lawyer-consultation" style={{ display: "inline-block", background: BTN_GRAD, color: "#fff", padding: "16px 36px", borderRadius: 14, fontWeight: 900, fontSize: 14, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>Get Legal Help Now</Link>
        </div>

        {/* ── LAWYER / ATTORNEY SOCIAL PROOF CARDS ─────────────────── */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 56 }}>
          <p style={{ color: "rgba(255,255,255,0.25)", fontWeight: 900, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 32, textAlign: "center" }}>Our Attorney Network</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 28 }}>
            {[
              { name: "Sara Al-Mansouri", role: "Immigration & Travel Bans", location: "Abu Dhabi", exp: "15 yrs", initials: "SA", stars: 5 },
              { name: "Ahmed Al-Khalidi", role: "Employment & Labour Law", location: "Dubai", exp: "12 yrs", initials: "AK", stars: 5 },
              { name: "Mohammed Al-Rashid", role: "Debt & Commercial Law", location: "Saudi Arabia", exp: "10 yrs", initials: "MR", stars: 5 },
              { name: "Priya Nair", role: "Corporate & IP Law", location: "Dubai", exp: "8 yrs", initials: "PN", stars: 5 },
            ].map((a) => (
              <div key={a.name} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 24, padding: 24, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: `rgba(7,8,228,0.2)`, border: `2px solid rgba(7,8,228,0.4)`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 20, color: "#818CF8", marginBottom: 14 }}>{a.initials}</div>
                <div style={{ fontWeight: 700, fontSize: 15, color: "#fff", marginBottom: 4 }}>{a.name}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginBottom: 8, lineHeight: 1.4 }}>{a.role}</div>
                <div style={{ display: "flex", gap: 8, marginBottom: 12, alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: 11, background: "rgba(7,8,228,0.15)", color: "#818CF8", padding: "2px 10px", borderRadius: 100, fontWeight: 700 }}>{a.location}</span>
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>{a.exp}</span>
                </div>
                <div style={{ color: "#F59E0B", fontSize: 13, letterSpacing: 2 }}>{"★".repeat(a.stars)}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="/online-lawyer-consultation" style={{ display: "inline-block", background: BTN_CONTRAST, color: "#fff", padding: "14px 32px", borderRadius: 12, fontWeight: 900, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none" }}>Request Lawyer On Call</Link>
          </div>
        </div>
      </section>

      {/* ── TRAVEL BAN CHECKS ────────────────────────────────────────── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 32px 80px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ marginBottom: 64, position: "relative" }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(80px, 12vw, 120px)", color: "rgba(255,255,255,0.04)", letterSpacing: "-0.04em", lineHeight: 1, userSelect: "none", position: "absolute", top: 0, left: 0 }}>TECHNOLOGY</div>
          <div style={{ paddingTop: 56, position: "relative" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(40px, 6vw, 64px)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              Check Travel Bans<br /><span style={{ color: BLUE }}>Quick And Easy.</span>
            </h2>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "center", marginBottom: 48 }}>
          <div>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", lineHeight: 1.85, marginBottom: 20 }}>Check criminal cases and even further, if you have Travel bans in the GCC or it's extensions in other GCC countries. We simplify travel ban, immigration ban and labor ban checks for the UAE, Saudi and Bahrain in three easy steps. Know your legal stand and red tape prohibitions along multiple jurisdictions without hiring expensive lawyers.</p>
            <p style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 28 }}>Now available – Saudi Travel Ban Check and Bahrain Travel Ban Checks</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 28 }}>
              {[
                { t: "Check Police Case", b: "Stay in the know and ensure a clean record with our swift and secure police case checks in the UAE, Saudi and Bahrain regions." },
                { t: "Check Labour Bans", b: "Easily find out if you're clear to work with our quick, reliable, and accurate labour ban checks in the UAE." },
              ].map((i) => (
                <div key={i.t} style={{ borderLeft: `2px solid rgba(7,8,228,0.4)`, paddingLeft: 16 }}>
                  <div style={{ fontWeight: 900, fontSize: 14, color: "#fff", marginBottom: 6 }}>{i.t}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>{i.b}</div>
                </div>
              ))}
            </div>
            <Link href="/services" style={{ display: "inline-block", background: BTN_GRAD, color: "#fff", padding: "14px 32px", borderRadius: 12, fontWeight: 900, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none" }}>Get Started</Link>
          </div>
          <div style={{ borderRadius: 32, overflow: "hidden", height: 380 }}>
            <img src={IMG.office1} alt="Wirestork team" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>
      </section>

      {/* ── PLAN SMART / USE CASES ───────────────────────────────────── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px 80px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
        <div>
          <p style={{ color: "rgba(255,255,255,0.3)", fontWeight: 900, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16 }}>Plan Smart, Live Easy</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(36px, 5vw, 56px)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 32 }}>Legal Support For Every Step Of Your Journey.</h2>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 15, lineHeight: 1.75, marginBottom: 32 }}>Whether you're starting a business, planning your estate, writing a will, or reviewing legal documents, our expert services are designed to simplify complex legal processes.</p>
          <Link href="/reach-us" style={{ display: "inline-block", background: BTN_GRAD, color: "#fff", padding: "18px 36px", borderRadius: 14, fontWeight: 900, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none" }}>Get A Quote</Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
          {[
            { label: "For Your Business", items: ["Start My Business", "Request a Contract Review", "Collect My Receivables", "Get Legal Help"], cta: "Explore Business", href: "/services" },
            { label: "For You & Family", items: ["Start My Estate Plan", "Last Will", "Living Trust", "Power of Attorney"], cta: "Explore Personal", href: "/services" },
            { label: "For Your IP", items: ["Trademark Registration", "Copyright Registration", "Trademark Monitoring", "Patent Registration"], cta: "Explore IP Services", href: "/services" },
            { label: "For Peace Of Mind", items: ["Travel Ban Checks", "Police Case Checks", "Labour Ban Checks", "Travel Ban Appeal"], cta: "Explore All Checks", href: "/services" },
          ].map((col) => (
            <div key={col.label}>
              <h4 style={{ color: BLUE, fontWeight: 900, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16, fontStyle: "italic" }}>{col.label}</h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                {col.items.map((item) => <li key={item} style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>{item}</li>)}
                <li><Link href={col.href} style={{ color: "#fff", fontWeight: 900, fontSize: 12, textDecoration: "underline" }}>{col.cta} ↗</Link></li>
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT MAKES WIRESTORK AWESOME — white section ─────────────── */}
      <section style={{ background: "#fff", color: "#000", borderRadius: 96, margin: "0 16px", padding: "96px 64px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 64, marginBottom: 64, flexWrap: "wrap" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(48px, 7vw, 80px)", letterSpacing: "-0.04em", lineHeight: 0.9, maxWidth: 480 }}>What makes<br />Wirestork<br />Awesome?</h2>
            <div style={{ maxWidth: 420 }}>
              <p style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.6, marginBottom: 12 }}>The ultimate background check resource in the Middle East, making sure you stay clear of all the shady stuff in a snap.</p>
              <p style={{ fontSize: 14, color: "#6B7280", fontStyle: "italic", lineHeight: 1.7 }}>Fastest, slickest, and most reliable. All digital — do it from your couch in your PJs!</p>
            </div>
          </div>
          {/* Office photo */}
          <div style={{ borderRadius: 32, overflow: "hidden", marginBottom: 48, height: 320 }}>
            <img src={IMG.office2} alt="Wirestork team" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40 }}>
            {[
              { n: "01", label: "Quick To Resolve And We Mean It.", body: "We pride ourselves in our fast paced ability to provide you with the most relevant information and within the quickest time humanly possible." },
              { n: "02", label: "We Understand Where You Come From.", body: "We are humane; our prices are fair and transparent and we promise no surprises ahead. This forms the fundamentals of our practice." },
              { n: "03", label: "Our Approach Is Revolutionary.", body: "Our services are the best in industry. We create alignment and shared understanding our benchmark, making you less stressed, and a little more happier" },
              { n: "04", label: "We Are Forward Thinking", body: "What makes us different is our history of creating progressive data solutions that actually solve problems, reduce turnaround time, and save you money." },
            ].map((item) => (
              <div key={item.n} style={{ borderLeft: "2px solid #0708E4", paddingLeft: 20 }}>
                <h5 style={{ fontWeight: 900, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8, color: "#111" }}>{item.n} / {item.label}</h5>
                <p style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "64px 0" }}>
          {[{ n: "11,000", label: "Cases Finalized" }, { n: "120+", label: "Lawyers Aboard" }, { n: "242M", label: "Cumulative Savings" }].map((s, i) => (
            <div key={s.label} style={{ textAlign: "center", borderRight: i < 2 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(56px, 8vw, 96px)", letterSpacing: "-0.04em", lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", marginTop: 8 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── AFFORDABLE LEGAL ACCESS / ASK THE LAWYER ─────────────────── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px 80px" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(40px, 6vw, 72px)", letterSpacing: "-0.03em", lineHeight: 1 }}>Affordable Top-Tier Legal Access</h2>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 15, maxWidth: 520, margin: "16px auto 0", lineHeight: 1.7 }}>Our resource pool of 400+ best lawyers in UAE gives you liberal access to quality representation at the lowest cost, in most cases up to 40% lower than traditional lawyers.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
          <div style={{ borderRadius: 32, overflow: "hidden", height: 380 }}>
            <img src={IMG.office3} alt="Legal team" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 40, marginBottom: 20, lineHeight: 1.1 }}>Ask The Lawyer</h3>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>Consult with a Wirestork partner for fast, actionable legal solutions. Unlike traditional lawyers, we empower you with self-help options at a fraction of the cost you'd expect!</p>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 15, lineHeight: 1.8, marginBottom: 32 }}>We're transforming the law industry with transparency and accessibility. No language barriers, no follow-up appointments, or lengthy phone calls. No confusion, just clarity.</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 32 }}>
              {[
                { t: "Instant Expert Advice", b: "Consult with a Wirestork practitioner for fast, actionable legal solutions, saving you time and stress." },
                { t: "Affordable Self-Help Options", b: "Unlike traditional lawyers, we empower you with self-help solutions at a fraction of the cost you'd expect!" },
              ].map((i) => (
                <div key={i.t} style={{ borderLeft: `2px solid rgba(7,8,228,0.4)`, paddingLeft: 16 }}>
                  <div style={{ fontWeight: 900, fontSize: 13, color: "#fff", marginBottom: 6 }}>{i.t}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>{i.b}</div>
                </div>
              ))}
            </div>
            <Link href="/online-lawyer-consultation" style={{ display: "inline-block", background: BTN_GRAD, color: "#fff", padding: "14px 32px", borderRadius: 12, fontWeight: 900, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none" }}>Consult Now</Link>
          </div>
        </div>
      </section>

      {/* ── BACKGROUND CHECKS ────────────────────────────────────────── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px 80px", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 80 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.1, marginBottom: 20 }}>We Are Revolutionizing Background Checks In The GCC. One Check At A Time.</h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, lineHeight: 1.8, marginBottom: 28 }}>Wirestork is flipping the script on background checks, making them lightning-fast, super reliable, and a breeze to use. Our cutting-edge tech and all-in-one services deliver spot-on info with zero hassle.</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 32 }}>
              {[
                { t: "Fast And Accurate", b: "Our advanced system delivers fast, precise results. Stay ahead with real-time updates and never miss crucial information." },
                { t: "Human-Vetted Assurance", b: "Each check is reviewed by real expert lawyers, ensuring top-notch accuracy and reliability." },
              ].map((i) => (
                <div key={i.t} style={{ borderLeft: `2px solid rgba(7,8,228,0.4)`, paddingLeft: 16 }}>
                  <div style={{ fontWeight: 900, fontSize: 13, color: "#fff", marginBottom: 6 }}>{i.t}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>{i.b}</div>
                </div>
              ))}
            </div>
            <Link href="/background-checks-gcc" style={{ display: "inline-block", background: BTN_GRAD, color: "#fff", padding: "14px 32px", borderRadius: 12, fontWeight: 900, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none" }}>Get Started</Link>
          </div>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 40, minHeight: 320, display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.15)", fontSize: 14, overflow: "hidden" }}>
            [Photo: Office team]
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 64, alignItems: "start" }}>
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 40, lineHeight: 1.1, marginBottom: 16 }}>What Clients Are Saying About Wirestork</h2>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.75, marginBottom: 24 }}>At Wirestork, we pride ourselves on delivering trusted, reliable services that make a real difference. But don't just take our word for it—see what our clients have to say!</p>
            <Link href="/background-checks-gcc" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: BTN_GRAD, color: "#fff", padding: "12px 22px", borderRadius: 12, fontWeight: 900, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none" }}>Know Your Legal Compliance</Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { img: IMG.ajaz, text: `"Working with Wirestork has been an absolute pleasure. Their legal screening services have made our hiring process so much smoother and stress-free. The reports are always detailed and accurate, giving us the confidence to make informed decisions."`, name: "Ajaz Bhat", title: "CEO - theisat.com" },
              { img: IMG.omar, text: `"What we love about Wirestork is their dedication to their clients – they really care about delivering the best service possible. It's clear that they take pride in their work, and it gives us peace of mind knowing that we can rely on them."`, name: "Omar Hassan", title: "CEO - findlawyers.me" },
              { img: IMG.elena, text: `"The integration of Wirestork's comprehensive background check services into our offerings has significantly enhanced our service capabilities. Our clients appreciate the added layer of security and thoroughness, which has led to increased client retention and referrals."`, name: "Elena Martinez", title: "H&H Legal Partners" },
            ].map((t, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 24, padding: "28px 32px" }}>
                <div style={{ color: "#F59E0B", fontSize: 16, marginBottom: 12, letterSpacing: 2 }}>★★★★★</div>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.85, marginBottom: 20, fontStyle: "italic" }}>{t.text}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", overflow: "hidden", flexShrink: 0 }}>
                    <img src={t.img} alt={t.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 900, fontSize: 13, color: "#fff" }}>{t.name}</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>{t.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px 80px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(36px, 5vw, 60px)", letterSpacing: "-0.03em" }}>Frequently Asked Questions</h2>
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 15, marginTop: 12 }}>Explore answers to common inquiries about Wirestork Services</p>
        </div>
        <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column", gap: 10 }}>
          {["What Does The Travel Ban Check Service Include?","How Long Does It Take For My Reports?","What Is Included In The Court And Police Case Check Service?","How Do You Ensure Data Compliance?","What Happens To My Data After Placing A Service Request With Wirestork?","Who Conducts Legal Screening Checks At Wirestork?","What Is The Process Of Travel Ban Checks?","How Accurate Is Wirestork's Legal Screening Report?"].map((q) => (
            <div key={q} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: "18px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>{q}</span>
              <span style={{ color: BLUE, fontSize: 22, fontWeight: 300, lineHeight: 1, flexShrink: 0, marginLeft: 16 }}>+</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── RELIABLE LEGAL SCREENING CTA ─────────────────────────────── */}
      <section style={{ padding: "0 16px 16px" }}>
        <div style={{ background: "linear-gradient(135deg, #0d1117 0%, #1a1035 40%, #0a2a2a 100%)", border: "1px solid rgba(7,8,228,0.15)", borderRadius: 80, padding: "72px 64px 0", maxWidth: 1280, margin: "0 auto", overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, marginBottom: 56 }}>
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(36px, 5vw, 56px)", letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 20 }}>Reliable Legal Screening, Detailed Reporting.</h2>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.8 }}>Stay On The Right Side Of The Law With Wirestork! Get access to reliable background checks, case status updates, and travel ban verifications—right when you need it. <strong style={{ color: "#fff" }}>Check Now, Trust Always!</strong></p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 12 }}>
              {[{ icon: "📋", t: "Lawyer-Vetted Reports", b: "All our checks and reports are conducted reviewed by qualified legal partners to ensure compliance with local and international laws." }, { icon: "⚖", t: "Resolution Assistance", b: "Benefit from lawyer-vetted suggestions for resolutions, empowering you to address issues independently." }, { icon: "🔒", t: "Privacy Guaranteed", b: "Our advanced security measures ensure that all your data is protected at every step of the screening process." }].map((f) => (
                <div key={f.t} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ fontSize: 18, flexShrink: 0, marginTop: 2 }}>{f.icon}</div>
                  <div>
                    <div style={{ fontWeight: 900, fontSize: 13, color: "#fff", marginBottom: 4 }}>{f.t}</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>{f.b}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: "rgba(7,8,228,0.08)", borderTop: "1px solid rgba(7,8,228,0.2)", margin: "0 -64px", padding: "24px 64px", display: "flex", gap: 12, justifyContent: "center" }}>
            <Link href="/uae-court-police-case-checking" style={{ background: BTN_GRAD, color: "#fff", padding: "14px 28px", borderRadius: 12, fontWeight: 900, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>Start A Police Case Check</Link>
            <Link href="/travel-ban-uae-check" style={{ background: BTN_CONTRAST, color: "#fff", padding: "14px 28px", borderRadius: 12, fontWeight: 900, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>Start A Travel Ban Check</Link>
          </div>
        </div>
      </section>

      {/* ── PARTNERS ─────────────────────────────────────────────────── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "56px 32px", textAlign: "center" }}>
        <p style={{ fontSize: 10, fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", marginBottom: 32 }}>Our Partners</p>
        <div style={{ display: "flex", gap: 48, justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
          {["accurate.", "Valida", "GoodHire", "First Advantage", "SHIELDGUARD", "KPMG"].map((p) => (
            <span key={p} style={{ fontSize: 15, fontWeight: 900, color: "rgba(255,255,255,0.18)", letterSpacing: "-0.02em" }}>{p}</span>
          ))}
        </div>
      </section>

      {/* ── NEWSLETTER ───────────────────────────────────────────────── */}
      <section style={{ background: "#000", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "72px 32px" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 10, fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: 16 }}>DON'T MISS OUR UPDATE</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(32px, 5vw, 52px)", letterSpacing: "-0.03em", marginBottom: 20 }}>Subscribe To Our Newsletter</h2>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", lineHeight: 1.8, marginBottom: 32 }}>Whether you need tips on protecting your business, personal legal guidance, or updates on new regulations, our newsletter has you covered. Join our community and stay informed with Wirestork's comprehensive legal expertise.</p>
          <div style={{ display: "flex", gap: 0, maxWidth: 480, margin: "0 auto 12px", borderRadius: 100, overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)" }}>
            <input type="email" placeholder="Your email address" style={{ flex: 1, padding: "14px 24px", background: "rgba(255,255,255,0.04)", border: "none", color: "#fff", fontSize: 13, outline: "none" }} />
            <button style={{ background: BTN_GRAD, color: "#fff", border: "none", padding: "14px 24px", fontWeight: 900, fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", cursor: "pointer", whiteSpace: "nowrap" }}>Subscribe</button>
          </div>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.2)" }}>There is no spam and you can easy unsubscribe anytime</p>
        </div>
      </section>

    </div>
  );
}
