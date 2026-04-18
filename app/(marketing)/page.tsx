// app/(marketing)/page.tsx
// Exact replica of wirestork.com homepage
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
    <>
      {/* ── ANNOUNCEMENT BAR ─────────────────────────────────────────────── */}
      <div style={{ background: "#111827", color: "white", textAlign: "center", padding: "10px 24px", fontSize: 13, display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
        <span>Saudi Travel Ban Checks — Jawazat Verified. Confirm your travel ban status before exit or entry.</span>
        <Link href="/check-travel-ban-in-saudi-arabia" className="btn" style={{ background: "#8550FF", color: "white", padding: "4px 14px", fontSize: 12, borderRadius: 6, fontWeight: 600 }}>Check Status</Link>
      </div>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ background: "linear-gradient(180deg, #EEF0FF 0%, #F8F8FF 60%, #fff 100%)", paddingTop: 100, paddingBottom: 64, textAlign: "center" }}>
        <div className="container">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(40px, 7vw, 72px)", lineHeight: 1.1, color: "#8550FF", marginBottom: 8 }}>
            Legal Intelligence Simplified.
          </h1>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(36px, 6vw, 64px)", lineHeight: 1.1, color: "#111827", marginBottom: 20 }}>
            Efficient. Reliable. Accurate.
          </h2>
          <p style={{ fontSize: 17, color: "#6B7280", marginBottom: 36 }}>
            Get Affordable legal help in the UAE and Middle East From top rated lawyers
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 24 }}>
            <Link href="/uae-court-police-case-checking" className="btn btn-primary" style={{ fontSize: 15, padding: "12px 24px", display: "flex", alignItems: "center", gap: 8 }}>
              <span>🛡</span> Start A Police Case Check
            </Link>
            <Link href="/travel-ban-uae-check" className="btn btn-outline" style={{ fontSize: 15, padding: "12px 24px", display: "flex", alignItems: "center", gap: 8 }}>
              <span>🏳</span> Start A Travel Ban Check
            </Link>
          </div>
          <div style={{ display: "flex", gap: 20, justifyContent: "center", fontSize: 13, color: "#6B7280" }}>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}><span style={{ color: "#8550FF" }}>✓</span> Human Verified</span>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}><span style={{ color: "#8550FF" }}>✓</span> Accurate Reporting</span>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}><span style={{ color: "#8550FF" }}>✓</span> Fast Turnaround</span>
          </div>
        </div>
      </section>

      {/* ── STAT / REVIEW BAR ────────────────────────────────────────────── */}
      <section style={{ padding: "32px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", background: "#fff", border: "1px solid #E5E7EB", borderRadius: 20, padding: "32px 40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 8px 32px rgba(133,80,255,0.06)" }}>
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 52, color: "#8550FF", lineHeight: 1 }}>126,448</div>
            <div style={{ fontSize: 15, color: "#6B7280", marginTop: 6 }}>checks and counting</div>
          </div>
          <div>
            <div style={{ display: "flex", gap: 4, marginBottom: 4 }}>{"★★★★★".split("").map((s, i) => <span key={i} style={{ color: "#F59E0B", fontSize: 20 }}>{s}</span>)}</div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 36, color: "#111827", marginBottom: 12 }}>4.8</div>
            <p style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.7 }}>
              Wire Stork offers simplified legal services in the Middle East, including DIY options and access to a network of attorneys for guidance, all through one platform. Our services include resolution architecture, background checks, and legal data management, with no hourly charges or office visits.
            </p>
          </div>
        </div>
      </section>

      {/* ── EXPERT LOCAL ATTORNEYS ───────────────────────────────────────── */}
      <section className="section" style={{ background: "#fff", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(28px, 4vw, 42px)", color: "#111827", marginBottom: 20 }}>Expert Local Attorneys Are Waiting To Help</h2>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#F9FAFB", border: "1px solid #E5E7EB", borderRadius: 100, padding: "8px 20px", fontSize: 14, fontWeight: 600, color: "#111827", marginBottom: 20 }}>
            Pay it in 4 interest-free instalments.
            <span style={{ background: "#B2FCE4", color: "#00A651", borderRadius: 4, padding: "2px 8px", fontSize: 13, fontWeight: 700 }}>afterpay ✓</span>
          </div>
          <p style={{ fontSize: 16, color: "#6B7280", maxWidth: 560, margin: "0 auto 28px", lineHeight: 1.7 }}>
            Utilizing our DIY services does not mean you have to tackle everything solo. Rely on our trusted network of lawyers for support without incurring hourly fees or having to make physical visits to their office.
          </p>
          <Link href="/online-lawyer-consultation" className="btn btn-primary" style={{ fontSize: 15, padding: "12px 28px", marginBottom: 48 }}>Get Legal Help Now</Link>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32, textAlign: "left", marginTop: 16 }}>
            {[
              { num: "01.", title: "Collaborate Effectively", body: "Our enterprise level secure portal with real time update of your case matters. Your documents, messages, tasks and to do lists are all updated on a single dashboard." },
              { num: "02.", title: "Pay For Intelligence", body: "You pay for intelligent data verified by local lawyers and which matters to the point. Our quantitative metrics revolve around the essential W's bundled with productive solutions crafted by genius Storks." },
              { num: "03.", title: "Multilingual & Translatable", body: "Confused with legal jargon. All your legal papers are interpreted into English and uploaded onto your dashboard; and your court and proceeding applications will be executed even before you know it." },
            ].map((item) => (
              <div key={item.num}>
                <div style={{ width: 52, height: 52, background: "#8550FF", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 900, fontSize: 16, marginBottom: 16 }}>{item.num}</div>
                <h3 style={{ fontWeight: 700, fontSize: 17, marginBottom: 10, color: "#111827" }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 36 }}>
            <Link href="/our-technology" className="btn btn-primary" style={{ fontSize: 14, padding: "10px 24px" }}>Our Technology</Link>
          </div>
        </div>
      </section>

      {/* ── CHECK TRAVEL BANS ────────────────────────────────────────────── */}
      <section className="section" style={{ background: "#FAFAFF" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "420px 1fr", gap: 64, alignItems: "center" }}>
            <div style={{ borderRadius: 20, overflow: "hidden", background: "#E5E7EB", minHeight: 340, display: "flex", alignItems: "center", justifyContent: "center", color: "#9CA3AF", fontSize: 14 }}>
              [Professional photo]
            </div>
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(28px, 3vw, 38px)", color: "#111827", marginBottom: 20 }}>Check Travel Bans Quick And Easy.</h2>
              <p style={{ fontSize: 15, color: "#6B7280", lineHeight: 1.8, marginBottom: 16 }}>
                Check criminal cases and even further, if you have Travel bans in the GCC or it&apos;s extensions in other GCC countries. We simpify travel ban, immigration ban and labor ban checks for the UAE, Saudi and Bahrain in three easy steps. Know your legal stand and red tape prohibitions along multiple jurisdictions without hiring expensive lawyers and manipulated with legal jargon. What&apos;s more; we will guide you through a transparent resolution process if you have any red tapes.
              </p>
              <p style={{ fontSize: 14, fontWeight: 600, color: "#111827", marginBottom: 24 }}>Now available – Saudi Travel Ban Check and Bahrain Travel Ban Checks</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 28 }}>
                <div>
                  <h4 style={{ fontWeight: 700, fontSize: 16, marginBottom: 8, color: "#111827" }}>Check Police Case</h4>
                  <p style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.7 }}>Stay in the know and ensure a clean record with our swift and secure police case checks in the UAE, Saudi and Bahrain regions. Whether you&apos;re applying for a job, traveling, or just curious, we&apos;ve got you covered.</p>
                </div>
                <div>
                  <h4 style={{ fontWeight: 700, fontSize: 16, marginBottom: 8, color: "#111827" }}>Check Labour Bans</h4>
                  <p style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.7 }}>Easily find out if you&apos;re clear to work with our quick, reliable, and accurate labour ban checks in the UAE. Perfect for job seekers and employers alike, we provide the latest updates straight from official sources</p>
                </div>
              </div>
              <Link href="/services" className="btn btn-primary" style={{ fontSize: 14, padding: "10px 24px" }}>Get Started</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PLAN SMART / USE CASE CARDS ──────────────────────────────────── */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: 48, alignItems: "start" }}>
            <div style={{ position: "sticky", top: 100 }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8550FF", marginBottom: 12 }}>PLAN SMART, LIVE EASY</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 38, color: "#111827", lineHeight: 1.2, marginBottom: 16 }}>Every Step Of Your Journey</h2>
              <p style={{ fontSize: 15, color: "#6B7280", lineHeight: 1.7, marginBottom: 24 }}>Whether you&apos;re starting a business, planning your estate, writing a will, or reviewing legal documents, our expert services are designed to simplify complex legal processes.</p>
              <Link href="/reach-us" className="btn btn-primary" style={{ fontSize: 14, padding: "10px 24px" }}>Get A Quote</Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                {
                  title: "For Your Business",
                  body: "Whether you need to form a company, apply for licenses and permits, or get a tax ID, we'll set your business up for success.",
                  items: ["Start My Business", "Request a contract Review", "Collect my receivables", "Get Legal Help"],
                  cta: "Explore Business",
                  href: "/services",
                },
                {
                  title: "For You And Your Family",
                  body: "From wills to powers of attorney, having the right estate planning docs can protect you and your loved ones now and in the future.",
                  items: ["Start my Estate plan", "Last Will", "Living Trust", "Power of Attorney"],
                  cta: "Explore Personal",
                  href: "/services",
                },
                {
                  title: "For Your Intellectual Property",
                  body: "Need to trademark your logo, copyright a creative work, or patent an invention? Safeguard your ideas and creations from copycats.",
                  items: ["Trademark registration", "Copyright registration", "Trademark monitoring", "Patent Registration"],
                  cta: "Explore IP Services",
                  href: "/services",
                },
                {
                  title: "For Your Peace Of Mind",
                  body: "",
                  items: ["Travel Ban Checks", "Police Case Checks", "Labour Ban Checks", "Travel Ban Appeal"],
                  cta: "Explore All Checks",
                  href: "/services",
                },
              ].map((card) => (
                <div key={card.title} style={{ borderRadius: 20, overflow: "hidden", background: "#111827", display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 260, position: "relative" }}>
                  <div style={{ background: "#E5E7EB", minHeight: 260, display: "flex", alignItems: "center", justifyContent: "center", color: "#9CA3AF", fontSize: 13 }}>[Photo]</div>
                  <div style={{ padding: "32px 28px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 24, color: "white", marginBottom: 12, lineHeight: 1.2 }}>{card.title}</h3>
                    {card.body && <p style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", lineHeight: 1.7, marginBottom: 16 }}>{card.body}</p>}
                    <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
                      {card.items.map((item) => (
                        <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.9)" }}>
                          <span style={{ color: "#8550FF", fontSize: 16 }}>✓</span> {item}
                        </div>
                      ))}
                    </div>
                    <Link href={card.href} className="btn" style={{ background: "#8550FF", color: "white", fontSize: 13, padding: "9px 20px", borderRadius: 100, width: "fit-content", fontWeight: 600 }}>{card.cta}</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT MAKES WIRESTORK AWESOME ─────────────────────────────────── */}
      <section className="section" style={{ background: "#FAFAFF" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8550FF", marginBottom: 12 }}>FAST, RELIABLE, COMPREHENSIVE</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(28px, 3vw, 40px)", color: "#111827", marginBottom: 20, lineHeight: 1.2 }}>What Makes Wirestork Awesome?</h2>
              <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.8, marginBottom: 28 }}>
                Wirestork is the ultimate background check resource in the Middle East, making sure you stay clear of all the shady stuff in a snap. It&apos;s got the fastest, slickest, and most reliable checks for court cases and travel bans in the GCC. Plus, it&apos;s all digital, so you can do it from your couch in your PJs!
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 28 }}>
                {[
                  { title: "We Are Quick To Resolve And We Mean It.", body: "We pride ourselves in our fast paced ability to provide you with the most relevant information and within the quickest time humanly possible." },
                  { title: "We Understand Where You Come From.", body: "We are humane; our prices are fair and transparent and we promise no surprises ahead. This forms the fundamentals of our practice." },
                  { title: "Our Approach Is Revolutionary.", body: "Our services are the best in industry. We create alignment and shared understanding our benchmark, making you less stressed, and a little more happier" },
                  { title: "We Are Forward Thinking", body: "What makes us different is our history of creating progressive data solutions that actually solve problems, reduce turnaround time, and save you money." },
                ].map((item) => (
                  <div key={item.title}>
                    <h4 style={{ fontWeight: 700, fontSize: 15, marginBottom: 8, color: "#111827" }}>{item.title}</h4>
                    <p style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.7 }}>{item.body}</p>
                  </div>
                ))}
              </div>
              <Link href="/services" className="btn btn-primary" style={{ fontSize: 14, padding: "10px 24px" }}>Get Started</Link>
            </div>
            <div style={{ borderRadius: 20, overflow: "hidden", position: "relative" }}>
              <div style={{ background: "#E5E7EB", height: 320, display: "flex", alignItems: "center", justifyContent: "center", color: "#9CA3AF", fontSize: 14, borderRadius: 20 }}>[Team photo]</div>
              <div style={{ background: "#111827", borderRadius: 16, padding: "20px 28px", marginTop: 16, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, textAlign: "center" }}>
                {[
                  { num: "11,000", label: "Cases Finalized" },
                  { num: "120", label: "Lawyers aboard" },
                  { num: "24 Ml", label: "Cumulative Savings" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 28, color: "#8550FF" }}>{stat.num}</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AFFORDABLE TOP-TIER LEGAL ACCESS ─────────────────────────────── */}
      <section className="section" style={{ background: "#fff", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(28px, 4vw, 46px)", color: "#111827", marginBottom: 16 }}>Affordable Top-Tier Legal Access</h2>
          <p style={{ fontSize: 16, color: "#6B7280", maxWidth: 540, margin: "0 auto 56px", lineHeight: 1.7 }}>
            Our resource pool of 400+ best lawyers in UAE gives you liberal access to quality representation at the lowest cost, in most cases up to 40% lower than traditional lawyers.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "420px 1fr", gap: 64, alignItems: "center", textAlign: "left" }}>
            <div style={{ borderRadius: 20, overflow: "hidden", background: "#E5E7EB", minHeight: 340, display: "flex", alignItems: "center", justifyContent: "center", color: "#9CA3AF", fontSize: 14 }}>[Team high five photo]</div>
            <div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 30, color: "#111827", marginBottom: 16 }}>Ask The Lawyer</h3>
              <p style={{ fontSize: 15, color: "#6B7280", lineHeight: 1.8, marginBottom: 16 }}>
                Consult with a Wirestork partner for fast, actionable legal solutions. Unlike traditional lawyers, we empower you with self-help options at a fraction of the cost you&apos;d expect!
              </p>
              <p style={{ fontSize: 15, color: "#6B7280", lineHeight: 1.8, marginBottom: 28 }}>
                We&apos;re transforming the law industry with transparency and accessibility. No language barriers, no follow-up appointments, or lengthy phone calls. No confusion, just clarity.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 28 }}>
                <div>
                  <h4 style={{ fontWeight: 700, fontSize: 16, marginBottom: 8, color: "#111827" }}>Instant Expert Advice</h4>
                  <p style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.7 }}>Consult with a Wirestork practitioner for fast, actionable legal solutions, saving you time and stress.</p>
                </div>
                <div>
                  <h4 style={{ fontWeight: 700, fontSize: 16, marginBottom: 8, color: "#111827" }}>Affordable Self-Help Options</h4>
                  <p style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.7 }}>Unlike traditional lawyers, we empower you with self-help solutions at a fraction of the cost you&apos;d expect!</p>
                </div>
              </div>
              <Link href="/online-lawyer-consultation" className="btn btn-primary" style={{ fontSize: 14, padding: "10px 24px" }}>Consult Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── BACKGROUND CHECKS ────────────────────────────────────────────── */}
      <section className="section" style={{ background: "#FAFAFF" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(24px, 3vw, 36px)", color: "#111827", marginBottom: 16, lineHeight: 1.2 }}>We Are Revolutionizing Background Checks In The GCC. One Check At A Time.</h2>
              <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.8, marginBottom: 24 }}>
                Wirestork is flipping the script on background checks, making them lightning-fast, super reliable, and a breeze to use. Our cutting-edge tech and all-in-one services deliver spot-on info with zero hassle.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 28 }}>
                <div>
                  <h4 style={{ fontWeight: 700, fontSize: 15, marginBottom: 8, color: "#111827" }}>Fast And Accurate</h4>
                  <p style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.7 }}>Our advanced system delivers fast, precise results, giving you the information you need without delay. Stay ahead with real-time updates and never miss crucial information.</p>
                </div>
                <div>
                  <h4 style={{ fontWeight: 700, fontSize: 15, marginBottom: 8, color: "#111827" }}>Human-Vetted Assurance</h4>
                  <p style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.7 }}>Each check is reviewed by real expert lawyers, ensuring top-notch accuracy and reliability. Trust our team to verify every detail for the highest level of confidence.</p>
                </div>
              </div>
              <Link href="/background-checks-gcc" className="btn btn-primary" style={{ fontSize: 14, padding: "10px 24px" }}>Get Started</Link>
            </div>
            <div style={{ borderRadius: 20, overflow: "hidden", background: "#E5E7EB", minHeight: 340, display: "flex", alignItems: "center", justifyContent: "center", color: "#9CA3AF", fontSize: 14 }}>[Office team photo]</div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 48, alignItems: "start" }}>
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(28px, 3vw, 38px)", color: "#111827", lineHeight: 1.2, marginBottom: 16 }}>What Clients Are Saying About Wirestork</h2>
              <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.7, marginBottom: 24 }}>At Wirestork, we pride ourselves on delivering trusted, reliable services that make a real difference. But don&apos;t just take our word for it—see what our clients have to say!</p>
              <Link href="/background-checks-gcc" className="btn btn-primary" style={{ fontSize: 13, padding: "10px 22px", display: "flex", alignItems: "center", gap: 8, width: "fit-content" }}>
                <span>🛡</span> Know Your Legal Compliance
              </Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                {
                  stars: 5,
                  text: `"Working with Wirestork has been an absolute pleasure. Their legal screening services have made our hiring process so much smoother and stress-free. The reports are always detailed and accurate, giving us the confidence to make informed decisions."`,
                  name: "Ajaz Bhat",
                  title: "CEO - theisat.com",
                  company: "isat",
                },
                {
                  stars: 5,
                  text: `"What we love about Wirestork is their dedication to their clients – they really care about delivering the best service possible. It's clear that they take pride in their work, and it gives us peace of mind knowing that we can rely on them."`,
                  name: "Omar Hassan",
                  title: "CEO - findlawyers.me",
                  company: "findlawyers",
                },
                {
                  stars: 5,
                  text: `"The integration of Wirestork's comprehensive background check services into our offerings has significantly enhanced our service capabilities. Our clients appreciate the added layer of security and thoroughness, which has led to increased client retention and referrals. Wirestork's commitment to excellence and their proactive support team have made this partnership not only beneficial but also a pleasure to maintain."`,
                  name: "Elena Martinez",
                  title: "H&H Legal Partners",
                  company: "H&H",
                },
              ].map((t, i) => (
                <div key={i} className="card" style={{ padding: 28 }}>
                  <div style={{ display: "flex", gap: 2, marginBottom: 12 }}>
                    {"★★★★★".split("").map((s, j) => <span key={j} style={{ color: "#F59E0B", fontSize: 18 }}>{s}</span>)}
                  </div>
                  <p style={{ fontSize: 15, color: "#374151", lineHeight: 1.8, marginBottom: 20, fontStyle: "italic" }}>{t.text}</p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#E5E7EB", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 16, color: "#6B7280" }}>{t.name[0]}</div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 14, color: "#111827" }}>{t.name}</div>
                        <div style={{ fontSize: 12, color: "#6B7280" }}>{t.title}</div>
                      </div>
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#8550FF" }}>{t.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="section" style={{ background: "#FAFAFF", textAlign: "center" }}>
        <div className="container-sm">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(28px, 4vw, 42px)", color: "#111827", marginBottom: 12 }}>Frequently Asked Questions</h2>
          <p style={{ fontSize: 16, color: "#6B7280", marginBottom: 40 }}>Explore answers to common inquiries about Wirestork Services</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, textAlign: "left" }}>
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
              <div key={q} style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: 12, padding: "18px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}>
                <span style={{ fontSize: 15, fontWeight: 500, color: "#111827" }}>{q}</span>
                <span style={{ color: "#8550FF", fontSize: 20, fontWeight: 300, lineHeight: 1 }}>+</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELIABLE LEGAL SCREENING CTA ─────────────────────────────────── */}
      <section style={{ padding: "56px 24px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", background: "linear-gradient(135deg, #7B5EA7 0%, #4ECDC4 100%)", borderRadius: 24, padding: "48px 56px", display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "center" }}>
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(28px, 3vw, 42px)", color: "white", marginBottom: 16, lineHeight: 1.2 }}>Reliable Legal Screening, Detailed Reporting.</h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.85)", lineHeight: 1.7, marginBottom: 8 }}>
              Stay On The Right Side Of The Law With Wirestork! Get access to reliable background checks, case status updates, and travel ban verifications—right when you need it.{" "}
              <strong style={{ color: "white" }}>Check Now, Trust Always!</strong>
            </p>
            <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 16, padding: "24px 28px", marginTop: 28, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
              {[
                { icon: "🛡", title: "Lawyer-Vetted Reports", body: "All our checks and reports are conducted reviewed by qualified legal partners to ensure compliance with local and international laws, providing you with legally sound and reliable information." },
                { icon: "⚖", title: "Resolution Assistance", body: "Benefit from lawyer-vetted suggestions for resolutions, empowering you to address issues independently." },
                { icon: "🔒", title: "Privacy Guaranteed", body: "Our advanced security measures ensure that all your data is protected at every step of the screening process." },
              ].map((item) => (
                <div key={item.title}>
                  <div style={{ fontSize: 28, marginBottom: 10 }}>{item.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: "white", marginBottom: 8 }}>{item.title}</div>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR PARTNERS ─────────────────────────────────────────────────── */}
      <section style={{ padding: "40px 24px", background: "#fff", textAlign: "center" }}>
        <div className="container">
          <h3 style={{ fontSize: 14, fontWeight: 700, color: "#6B7280", letterSpacing: "0.05em", marginBottom: 28 }}>Our Partners</h3>
          <div style={{ display: "flex", gap: 40, alignItems: "center", justifyContent: "center", flexWrap: "wrap", opacity: 0.6 }}>
            {["accurate.", "Valida", "GoodHire ✓", "First Advantage", "SHIELDGUARD", "KPMG"].map((p) => (
              <span key={p} style={{ fontSize: 16, fontWeight: 700, color: "#6B7280", letterSpacing: "-0.02em" }}>{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ───────────────────────────────────────────────────── */}
      <section style={{ background: "#111827", padding: "64px 24px", textAlign: "center" }}>
        <div className="container-sm">
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8550FF", marginBottom: 16 }}>DON&apos;T MISS OUR UPDATE</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(28px, 4vw, 44px)", color: "white", marginBottom: 16 }}>Subscribe To Our Newletter</h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, maxWidth: 500, margin: "0 auto 32px" }}>
            Whether you need tips on protecting your business, personal legal guidance, or updates on new regulations, our newsletter has you covered. Join our community and stay informed with Wirestork&apos;s comprehensive legal expertise.
          </p>
          <div style={{ display: "flex", gap: 0, maxWidth: 480, margin: "0 auto 12px", borderRadius: 100, overflow: "hidden", border: "1px solid rgba(255,255,255,0.2)" }}>
            <input type="email" placeholder="Email" style={{ flex: 1, padding: "14px 20px", background: "rgba(255,255,255,0.08)", border: "none", color: "white", fontSize: 15, outline: "none" }} />
            <button style={{ background: "#8550FF", color: "white", border: "none", padding: "14px 28px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>Subscribe</button>
          </div>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>There is no spam and you can easy unsubscribe anytime</p>
        </div>
      </section>
    </>
  );
}
