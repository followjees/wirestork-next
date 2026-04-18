// app/(marketing)/page.tsx
// Exact wirestork.com copy — dark editorial aesthetic
import Link from "next/link";
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

export default function HomePage() {
  return (
    <div style={{ background: "#000", color: "#fff", fontFamily: "'Outfit', sans-serif", overflowX: "hidden" }}>

      {/* ── ANNOUNCEMENT BAR ─────────────────────────────────────────── */}
      <div style={{ background: "#000", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "10px 24px", textAlign: "center", fontSize: 12, color: "rgba(255,255,255,0.45)", letterSpacing: "0.05em", display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
        <span>Saudi Travel Ban Checks — Jawazat Verified. Confirm your travel ban status before exit or entry.</span>
        <Link href="/check-travel-ban-in-saudi-arabia" style={{ color: "#22d3ee", fontWeight: 900, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none" }}>Check Status →</Link>
      </div>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "120px 32px 80px", position: "relative" }}>
        {/* Grid overlay */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)", backgroundSize: "40px 40px", maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 60%, transparent 100%)", pointerEvents: "none" }} />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 48, borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: 80, position: "relative" }}>
          <div>
            <p style={{ color: "#22d3ee", fontWeight: 900, letterSpacing: "0.3em", textTransform: "uppercase", fontSize: 11, marginBottom: 32, fontStyle: "italic" }}>● Legal Intelligence Simplified</p>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontStyle: "italic", fontSize: "clamp(72px, 11vw, 152px)", lineHeight: 0.82, letterSpacing: "-0.03em", marginBottom: 36 }}>
              EFFICIENT.<br />RELIABLE.<br />ACCURATE.
            </h1>
            <p style={{ fontSize: 22, color: "rgba(255,255,255,0.5)", maxWidth: 560, lineHeight: 1.65 }}>
              Get Affordable legal help in the UAE and Middle East From top rated lawyers.{" "}
              <span style={{ color: "#fff" }}>126,448 checks and counting.</span>
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: 14 }}>
            <Link href="/uae-court-police-case-checking" style={{ display: "block", background: "#22d3ee", color: "#000", padding: "28px 24px", borderRadius: 28, fontWeight: 900, fontSize: 18, textAlign: "center", textDecoration: "none", letterSpacing: "-0.01em", lineHeight: 1.2 }}>
              START A POLICE<br />CASE CHECK
            </Link>
            <Link href="/travel-ban-uae-check" style={{ display: "block", border: "1px solid rgba(255,255,255,0.18)", color: "#fff", padding: "28px 24px", borderRadius: 28, fontWeight: 900, fontSize: 18, textAlign: "center", textDecoration: "none", letterSpacing: "-0.01em", lineHeight: 1.2 }}>
              START A TRAVEL<br />BAN CHECK
            </Link>
          </div>
        </div>

        {/* Trust strip */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 40, padding: "28px 0", fontSize: 11, fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", borderBottom: "1px solid rgba(255,255,255,0.06)", position: "relative" }}>
          <span><span style={{ color: "#22d3ee", marginRight: 8 }}>✓</span>Human Verified</span>
          <span><span style={{ color: "#22d3ee", marginRight: 8 }}>✓</span>Accurate Reporting</span>
          <span><span style={{ color: "#22d3ee", marginRight: 8 }}>✓</span>Fast Turnaround</span>
          <span style={{ marginLeft: "auto", color: "#fff" }}>Rated 4.8 / 5.0 Intelligence Score</span>
        </div>
      </section>

      {/* ── EXPERT ATTORNEYS / BENTO ─────────────────────────────────── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px 80px", display: "grid", gridTemplateColumns: "1fr 380px", gap: 16 }}>
        {/* Main glass card */}
        <div style={{ background: "rgba(255,255,255,0.02)", backdropFilter: "blur(40px)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 56, padding: "52px 48px" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 38, marginBottom: 24, lineHeight: 1.2 }}>Expert Local Attorneys Are Waiting To Help</h2>
          <p style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.75, fontSize: 17, marginBottom: 32 }}>
            Wire Stork offers simplified legal services in the Middle East, including DIY options and access to a network of attorneys for guidance, all through one platform. Our services include resolution architecture, background checks, and legal data management, with no hourly charges or office visits.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            <div>
              <h3 style={{ color: "#22d3ee", fontWeight: 900, fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 12 }}>Expert Attorneys</h3>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>Utilizing our DIY services does not mean you have to tackle everything solo. Rely on our trusted network of lawyers for support without incurring hourly fees or having to make physical visits to their office.</p>
            </div>
            <div>
              <h3 style={{ color: "#22d3ee", fontWeight: 900, fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 12 }}>Pay it in 4 interest-free instalments</h3>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>No physical visits to their office. Expert Local Attorneys are waiting to help. No confusion, just clarity.</p>
            </div>
          </div>
        </div>
        {/* Cyan accent card */}
        <div style={{ background: "#22d3ee", borderRadius: 56, padding: "52px 40px", color: "#000", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 64, lineHeight: 0.85, letterSpacing: "-0.03em", marginBottom: 24 }}>01.<br />COLLABORATE</div>
          <p style={{ fontWeight: 700, fontSize: 14, lineHeight: 1.6, marginBottom: 24 }}>Our enterprise level secure portal with real time update of your case matters. Your documents, messages, tasks and to do lists are all updated on a single dashboard.</p>
          <Link href="/our-technology" style={{ fontWeight: 900, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "underline", color: "#000" }}>Pay For Intelligence ↗</Link>
        </div>
      </section>

      {/* ── TECHNOLOGY / TRAVEL BAN CHECKS ───────────────────────────── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 32px 80px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ marginBottom: 64, position: "relative" }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(80px, 12vw, 120px)", color: "rgba(255,255,255,0.04)", letterSpacing: "-0.04em", lineHeight: 1, userSelect: "none", position: "absolute", top: 0, left: 0 }}>TECHNOLOGY</div>
          <div style={{ paddingTop: 56, position: "relative" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(40px, 6vw, 64px)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              Check Travel Bans<br /><span style={{ color: "#22d3ee" }}>Quick And Easy.</span>
            </h2>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
          {[
            { title: "Travel Ban Check", body: "Check criminal cases and even further, if you have Travel bans in the GCC or it's extensions in other GCC countries. We simplify travel ban, immigration ban and labor ban checks for the UAE, Saudi and Bahrain in three easy steps.", tag: "Now available: Saudi & Bahrain Checks", href: "/travel-ban-uae-check", cta: null },
            { title: "Police Case Check", body: "Stay in the know and ensure a clean record with our swift and secure police case checks in the UAE, Saudi and Bahrain regions. Whether you're applying for a job, traveling, or just curious, we've got you covered.", tag: null, href: "/uae-court-police-case-checking", cta: "Check Now" },
            { title: "Labour Ban Check", body: "Easily find out if you're clear to work with our quick, reliable, and accurate labour ban checks in the UAE. Perfect for job seekers and employers alike, we provide the latest updates straight from official sources.", tag: null, href: "/labor-ban-check", cta: "Check Status" },
          ].map((item) => (
            <div key={item.title} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 48, padding: 40, display: "flex", flexDirection: "column", transition: "all 0.3s" }}>
              <h4 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 24, marginBottom: 16, lineHeight: 1.2 }}>{item.title}</h4>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.75, marginBottom: 20, flex: 1 }}>{item.body}</p>
              {item.tag && <p style={{ fontSize: 11, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.15em", color: "#22d3ee" }}>{item.tag}</p>}
              {item.cta && (
                <Link href={item.href} style={{ display: "inline-block", background: item.cta === "Check Now" ? "#fff" : "transparent", color: item.cta === "Check Now" ? "#000" : "#fff", border: item.cta === "Check Status" ? "1px solid rgba(255,255,255,0.2)" : "none", borderRadius: 100, padding: "8px 20px", fontSize: 10, fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", width: "fit-content" }}>{item.cta}</Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── PLAN SMART / USE CASES ───────────────────────────────────── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
        <div>
          <p style={{ color: "rgba(255,255,255,0.3)", fontWeight: 900, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16 }}>Plan Smart, Live Easy</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(36px, 5vw, 56px)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 32 }}>Legal Support For Every Step Of Your Journey.</h2>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 15, lineHeight: 1.75, marginBottom: 32 }}>Whether you're starting a business, planning your estate, writing a will, or reviewing legal documents, our expert services are designed to simplify complex legal processes.</p>
          <Link href="/reach-us" style={{ display: "inline-block", background: "#22d3ee", color: "#000", padding: "18px 36px", borderRadius: 16, fontWeight: 900, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none" }}>Get A Quote</Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
          {[
            { label: "For Your Business", items: ["Start My Business", "Request a Contract Review", "Collect My Receivables", "Get Legal Help"], cta: "Explore Business", href: "/services" },
            { label: "For You & Family", items: ["Start My Estate Plan", "Last Will", "Living Trust", "Power of Attorney"], cta: "Explore Personal", href: "/services" },
            { label: "For Your IP", items: ["Trademark Registration", "Copyright Registration", "Trademark Monitoring", "Patent Registration"], cta: "Explore IP Services", href: "/services" },
            { label: "For Peace Of Mind", items: ["Travel Ban Checks", "Police Case Checks", "Labour Ban Checks", "Travel Ban Appeal"], cta: "Explore All Checks", href: "/services" },
          ].map((col) => (
            <div key={col.label}>
              <h4 style={{ color: "#22d3ee", fontWeight: 900, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16, fontStyle: "italic" }}>{col.label}</h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                {col.items.map((item) => (
                  <li key={item} style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>{item}</li>
                ))}
                <li><Link href={col.href} style={{ color: "#fff", fontWeight: 900, fontSize: 12, textDecoration: "underline" }}>{col.cta} ↗</Link></li>
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT MAKES WIRESTORK AWESOME — white section ─────────────── */}
      <section style={{ background: "#fff", color: "#000", borderRadius: 96, margin: "0 16px", padding: "96px 64px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 64, marginBottom: 80, flexWrap: "wrap" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(48px, 7vw, 80px)", letterSpacing: "-0.04em", lineHeight: 0.9, maxWidth: 480 }}>
              What makes<br />Wirestork<br />Awesome?
            </h2>
            <div style={{ maxWidth: 420 }}>
              <p style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.6, marginBottom: 12 }}>The ultimate background check resource in the Middle East, making sure you stay clear of all the shady stuff in a snap.</p>
              <p style={{ fontSize: 14, color: "#6B7280", fontStyle: "italic", lineHeight: 1.7 }}>Fastest, slickest, and most reliable. All digital — do it from your couch in your PJs!</p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40 }}>
            {[
              { n: "01", label: "Quick To Resolve And We Mean It.", body: "We pride ourselves in our fast paced ability to provide you with the most relevant information and within the quickest time humanly possible." },
              { n: "02", label: "We Understand Where You Come From.", body: "We are humane; our prices are fair and transparent and we promise no surprises ahead. This forms the fundamentals of our practice." },
              { n: "03", label: "Our Approach Is Revolutionary.", body: "Our services are the best in industry. We create alignment and shared understanding our benchmark, making you less stressed, and a little more happier" },
              { n: "04", label: "We Are Forward Thinking", body: "What makes us different is our history of creating progressive data solutions that actually solve problems, reduce turnaround time, and save you money." },
            ].map((item) => (
              <div key={item.n} style={{ borderLeft: "2px solid #22d3ee", paddingLeft: 20 }}>
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
          {[
            { n: "11,000", label: "Cases Finalized" },
            { n: "120+", label: "Lawyers Aboard" },
            { n: "242M", label: "Cumulative Savings" },
          ].map((s, i) => (
            <div key={s.label} style={{ textAlign: "center", borderRight: i < 2 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(56px, 8vw, 96px)", letterSpacing: "-0.04em", lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", marginTop: 8 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── AFFORDABLE TOP-TIER / ASK THE LAWYER ─────────────────────── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px 80px" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(40px, 6vw, 72px)", letterSpacing: "-0.03em", lineHeight: 1 }}>Affordable Top-Tier Legal Access</h2>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 15, maxWidth: 520, margin: "16px auto 0", lineHeight: 1.7 }}>Our resource pool of 400+ best lawyers in UAE gives you liberal access to quality representation at the lowest cost, in most cases up to 40% lower than traditional lawyers.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 40, minHeight: 320, display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.15)", fontSize: 14 }}>
            [Photo: Team high five]
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
                <div key={i.t} style={{ borderLeft: "2px solid rgba(34,211,238,0.3)", paddingLeft: 16 }}>
                  <div style={{ fontWeight: 900, fontSize: 13, color: "#fff", marginBottom: 6 }}>{i.t}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>{i.b}</div>
                </div>
              ))}
            </div>
            <Link href="/online-lawyer-consultation" style={{ display: "inline-block", background: "#22d3ee", color: "#000", padding: "14px 32px", borderRadius: 12, fontWeight: 900, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none" }}>Consult Now</Link>
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
                <div key={i.t} style={{ borderLeft: "2px solid rgba(34,211,238,0.3)", paddingLeft: 16 }}>
                  <div style={{ fontWeight: 900, fontSize: 13, color: "#fff", marginBottom: 6 }}>{i.t}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>{i.b}</div>
                </div>
              ))}
            </div>
            <Link href="/background-checks-gcc" style={{ display: "inline-block", background: "#22d3ee", color: "#000", padding: "14px 32px", borderRadius: 12, fontWeight: 900, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none" }}>Get Started</Link>
          </div>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 40, minHeight: 320, display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.15)", fontSize: 14 }}>
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
            <Link href="/background-checks-gcc" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#22d3ee", color: "#000", padding: "12px 22px", borderRadius: 12, fontWeight: 900, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none" }}>Know Your Legal Compliance</Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { stars: 5, text: `"Working with Wirestork has been an absolute pleasure. Their legal screening services have made our hiring process so much smoother and stress-free. The reports are always detailed and accurate, giving us the confidence to make informed decisions."`, name: "Ajaz Bhat", title: "CEO - theisat.com" },
              { stars: 5, text: `"What we love about Wirestork is their dedication to their clients – they really care about delivering the best service possible. It's clear that they take pride in their work, and it gives us peace of mind knowing that we can rely on them."`, name: "Omar Hassan", title: "CEO - findlawyers.me" },
              { stars: 5, text: `"The integration of Wirestork's comprehensive background check services into our offerings has significantly enhanced our service capabilities. Our clients appreciate the added layer of security and thoroughness, which has led to increased client retention and referrals."`, name: "Elena Martinez", title: "H&H Legal Partners" },
            ].map((t, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 24, padding: "28px 32px" }}>
                <div style={{ color: "#F59E0B", fontSize: 16, marginBottom: 12, letterSpacing: 2 }}>{"★".repeat(t.stars)}</div>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.85, marginBottom: 20, fontStyle: "italic" }}>{t.text}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(34,211,238,0.15)", border: "1px solid rgba(34,211,238,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 14, color: "#22d3ee" }}>{t.name[0]}</div>
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
          {[
            "What Does The Travel Ban Check Service Include?",
            "How Long Does It Take For My Reports?",
            "What Is Included In The Court And Police Case Check Service?",
            "How Do You Ensure Data Compliance?",
            "What Happens To My Data After Placing A Service Request With Wirestork?",
            "Who Conducts Legal Screening Checks At Wirestork?",
            "What Is The Process Of Travel Ban Checks?",
            "How Accurate Is Wirestork's Legal Screening Report?",
          ].map((q) => (
            <div key={q} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: "18px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>{q}</span>
              <span style={{ color: "#22d3ee", fontSize: 22, fontWeight: 300, lineHeight: 1, flexShrink: 0, marginLeft: 16 }}>+</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA / RELIABLE LEGAL SCREENING ───────────────────────────── */}
      <section style={{ padding: "0 16px 16px" }}>
        <div style={{ background: "linear-gradient(135deg, #0d1117 0%, #1a1035 40%, #0a2a2a 100%)", border: "1px solid rgba(34,211,238,0.1)", borderRadius: 80, padding: "72px 64px 0", maxWidth: 1280, margin: "0 auto", overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, marginBottom: 56 }}>
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(36px, 5vw, 56px)", letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 20 }}>Reliable Legal Screening, Detailed Reporting.</h2>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.8 }}>Stay On The Right Side Of The Law With Wirestork! Get access to reliable background checks, case status updates, and travel ban verifications—right when you need it. <strong style={{ color: "#22d3ee" }}>Check Now, Trust Always!</strong></p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 12 }}>
              {[
                { icon: "📋", t: "Lawyer-Vetted Reports", b: "All our checks and reports are conducted reviewed by qualified legal partners to ensure compliance with local and international laws." },
                { icon: "⚖", t: "Resolution Assistance", b: "Benefit from lawyer-vetted suggestions for resolutions, empowering you to address issues independently." },
                { icon: "🔒", t: "Privacy Guaranteed", b: "Our advanced security measures ensure that all your data is protected at every step of the screening process." },
              ].map((f) => (
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
          {/* Bottom stripe */}
          <div style={{ background: "rgba(34,211,238,0.05)", borderTop: "1px solid rgba(34,211,238,0.1)", margin: "0 -64px", padding: "24px 64px", display: "flex", gap: 12, justifyContent: "center" }}>
            <Link href="/uae-court-police-case-checking" style={{ background: "#22d3ee", color: "#000", padding: "14px 28px", borderRadius: 12, fontWeight: 900, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>Start A Police Case Check</Link>
            <Link href="/travel-ban-uae-check" style={{ background: "transparent", color: "#22d3ee", border: "1px solid rgba(34,211,238,0.4)", padding: "14px 28px", borderRadius: 12, fontWeight: 900, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>Start A Travel Ban Check</Link>
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

      {/* ── NEWSLETTER / FOOTER ──────────────────────────────────────── */}
      <footer style={{ padding: "0 16px 16px" }}>
        <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 80, padding: "72px 64px", maxWidth: 1280, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(32px, 5vw, 52px)", letterSpacing: "-0.03em", marginBottom: 36 }}>Stay On The Right Side Of The Law.</h2>
          <div style={{ display: "flex", gap: 0, maxWidth: 480, margin: "0 auto 56px", borderRadius: 100, overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)" }}>
            <input type="email" placeholder="Subscribe to our newsletter" style={{ flex: 1, padding: "14px 24px", background: "rgba(255,255,255,0.04)", border: "none", color: "#fff", fontSize: 13, outline: "none" }} />
            <button style={{ background: "#fff", color: "#000", border: "none", padding: "14px 24px", fontWeight: 900, fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", cursor: "pointer" }}>Subscribe</button>
          </div>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.25)", marginBottom: 56 }}>There is no spam and you can easy unsubscribe anytime</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, paddingTop: 40, borderTop: "1px solid rgba(255,255,255,0.05)", fontSize: 10, fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)" }}>
            <div style={{ textAlign: "left" }}>© 2026 Wirestork Intelligence</div>
            <div style={{ textAlign: "center" }}>Privacy Guaranteed / Lawyer Vetted</div>
            <div style={{ textAlign: "right", fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: 22, color: "#fff", textTransform: "none", letterSpacing: "-0.03em", fontWeight: 900 }}>Wirestork.</div>
          </div>
        </div>
      </footer>

    </div>
  );
}
