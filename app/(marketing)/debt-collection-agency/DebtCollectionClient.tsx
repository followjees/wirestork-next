"use client";
import { useState } from "react";
import Link from "next/link";

const BLUE = "#0708E4";
const BTN_GRAD = "linear-gradient(135deg, #0708E4 0%, #6366F1 100%)";
const AMBER_GRAD = "linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)";
const GLASS: React.CSSProperties = { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16 };

const FEATURES = [
  { icon: "🤖", title: "AI-Powered Precision", desc: "Leverage cutting-edge artificial intelligence to streamline debt collection, ensuring faster and more accurate recovery with minimal human intervention." },
  { icon: "🔍", title: "Advanced Skip Tracing", desc: "Our state-of-the-art skip tracing technology tracks down even the most elusive debtors, maximizing recovery rates and minimizing lost revenue." },
  { icon: "📊", title: "Predictive Markov Modeling", desc: "Utilize sophisticated Markov modeling to forecast debtor behavior and tailor collection strategies, enhancing the efficiency and effectiveness of the debt recovery process." },
];

const CAPABILITIES = [
  { icon: "📈", title: "Predictive Analytics", desc: "AI-driven models forecast debtor behavior from day one, flattening the debt collection curve by nearly 70%." },
  { icon: "📡", title: "Omnichannel Communication", desc: "Structured outreach via letters, emails, calls, and digital channels — all logged and trackable." },
  { icon: "🔄", title: "Real-Time Data Integration", desc: "Cross-integrated with local credit bureau databases for verified, up-to-date debtor intelligence." },
  { icon: "🗺️", title: "Skip Tracing", desc: "Advanced digital tracing tools and cross-border networks for locating absconding debtors." },
  { icon: "⚖️", title: "Compliance Management", desc: "Every recovery action is legally documented and compliant with UAE Civil Code and Ministry of Justice regulations." },
  { icon: "⚡", title: "Automated Workflow", desc: "One-click onboarding, automated follow-ups, and streamlined communications from day one." },
  { icon: "📋", title: "Advanced Reporting", desc: "Monthly performance reports on the 4th of each month, plus 24/7 dashboard access." },
  { icon: "💳", title: "Payment Management", desc: "End-to-end payment tracking from invoice due date through collection and remittance." },
  { icon: "💬", title: "Sentiment Analysis", desc: "AI-powered tone and intent analysis to guide negotiation strategies and improve recovery outcomes." },
];

const SERVICES = [
  { icon: "🏷️", title: "White Labelled Communication", desc: "We deliver debt collection services under your brand, giving your clients the appearance of in-house credit management rather than an outsourced agency." },
  { icon: "📦", title: "Centralized Data", desc: "All payment communications related to your debt collection process in one place. Log into the dashboard and stay updated on every case." },
  { icon: "📝", title: "Contract Reviews", desc: "Your contracts and credit payment instruments are vetted by local legal experts to ensure no problems arise. Our team analyses obligations and suggests amendments before issues occur." },
  { icon: "✅", title: "Client Verifications", desc: "Need to verify a client's credibility before signing? We verify financial standing, legal history, and creditworthiness before you commit." },
  { icon: "🚀", title: "One-Click Legal Escalation", desc: "When best efforts fall short, escalate to legal professionals in one click. Exchange the full history of the debt and let them get to work immediately." },
  { icon: "❤️", title: "Humane Certified", desc: "We are data-driven, not adversarial. We work out solutions that are humanly doable, protecting both creditor interests and debtor dignity." },
];

const FAQS = [
  { q: "What sets Wirestork apart from other debt collection agencies in the UAE?", a: "What sets Wirestork apart is our commitment to professionalism and data-driven strategy. We understand that every case is unique, so we take time to understand the details of each debt before developing a collection strategy. We believe in transparency, keeping clients updated on progress, and our experienced collectors are always available to address any concerns." },
  { q: "Why will I need an accounts receivable manager?", a: "Cash flow is the lifeblood of business. Wirestork works relentlessly to improve your cash flow, leaving you to focus on your core operations. Spare your accountants for deep financial analytics and let us handle the collections." },
  { q: "Is account receivable collection the same as debt collection?", a: "No. An account receivable from a business that resulted from providing a product or service is referred to as a debt only once a collection agency has been assigned to assist in recovery." },
  { q: "What is the smallest invoice that Wirestork manages?", a: "We have no minimum caps on invoice amounts. Whether AED 1,000 or AED 1 million, our scalable recovery process ensures cost-effective and timely resolutions." },
  { q: "What information will you need to start?", a: "To start the receivable management process you will need to upload the name, address, contact name, telephone number, contact's email address, along with the outstanding balance and invoice information. Additional backup documentation (invoice copies, contracts) can be provided at placement or by request later." },
  { q: "How quickly does Wirestork get into action?", a: "We begin contacting your customers one week prior to your invoice due date and periodically thereafter through correspondence (letters, emails) as well as by telephone." },
  { q: "How can I see performance reports?", a: "We forward a performance report on the 4th of each month. The report includes a line item detail showing the current status of each account and any collections made. 24/7 access to your accounts and reports is also available via our dashboard." },
  { q: "Will you litigate on my behalf?", a: "When there is sufficient reason to believe that litigation could be successful, we will recommend that you litigate the claim. The client will be responsible for all court and litigation costs." },
  { q: "How does the fee structure work?", a: "Wirestork operates on a no-recovery, no-fee model. Fees depend on claim value, debt age, and debtor jurisdiction. Our pricing is transparent — no retainers, no hidden costs — only success-based payouts." },
  { q: "Can Wirestork recover debts internationally?", a: "Yes. Wirestork has international reach through legal partners across the GCC, Europe, and Asia. We recover foreign debts using cross-border coordination, diplomatic communication, and if needed, international arbitration." },
];

// ── Cheque Bounce Estimator ───────────────────────────────────────────────────
function ChequeBounceEstimator() {
  const [amount,       setAmount]       = useState("");
  const [currency,     setCurrency]     = useState("AED");
  const [bankType,     setBankType]     = useState("major");
  const [emirate,      setEmirate]      = useState("dubai");
  const [daysSince,    setDaysSince]    = useState("");
  const [noticeSent,   setNoticeSent]   = useState(false);
  const [lawyerActive, setLawyerActive] = useState(false);
  const [result,       setResult]       = useState<null | { probability: number; timeline: string; range: string; steps: string[] }>(null);

  function estimate() {
    const base = parseFloat(amount);
    if (!base || isNaN(base)) return;

    // Probability scoring
    let score = 50;
    if (bankType === "major")  score += 15;
    if (bankType === "mid")    score += 8;
    if (noticeSent)            score += 12;
    if (lawyerActive)          score += 15;
    const days = parseInt(daysSince) || 0;
    if (days < 30)             score += 8;
    else if (days < 90)        score += 3;
    else if (days > 180)       score -= 10;
    if (emirate === "dubai")   score += 5;
    if (emirate === "abudhabi") score += 4;
    score = Math.min(95, Math.max(20, score));

    // Timeline
    let timeline = "60–90 days";
    if (lawyerActive && noticeSent) timeline = "30–45 days";
    else if (noticeSent)           timeline = "45–70 days";
    else if (days > 180)           timeline = "90–150 days";

    // Recovery range
    const low  = Math.round(base * 0.7);
    const high = Math.round(base * 0.95);
    const sym  = currency === "AED" ? "AED" : "$";
    const range = `${sym} ${low.toLocaleString()} – ${sym} ${high.toLocaleString()}`;

    // Steps
    const steps: string[] = [];
    if (!noticeSent)   steps.push("Send a formal legal demand notice immediately.");
    if (!lawyerActive) steps.push("Engage a debt recovery lawyer for enforcement.");
    steps.push("File a bounced cheque case with Dubai Police or relevant emirate authority.");
    steps.push("Initiate civil case under UAE Penal Code for cheque fraud if needed.");
    if (days > 90)     steps.push("Consider an urgent enforcement order to prevent asset transfers.");

    setResult({ probability: score, timeline, range, steps });
  }

  const selectStyle: React.CSSProperties = {
    width: "100%", padding: "11px 14px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 10, color: "#fff", fontSize: 14,
    outline: "none", fontFamily: "inherit",
  };
  const inputStyle: React.CSSProperties = { ...selectStyle };
  const labelStyle: React.CSSProperties = {
    display: "block", fontSize: 10, fontWeight: 900,
    letterSpacing: "0.12em", textTransform: "uppercase",
    color: "rgba(255,255,255,0.32)", marginBottom: 6,
  };

  return (
    <div style={{ ...GLASS, borderRadius: 20, padding: "36px 32px" }}>
      <p style={{ color: BLUE, fontWeight: 900, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 8 }}>Interactive Tool</p>
      <h3 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 26, color: "#fff", marginBottom: 6 }}>Cheque Bounce Recovery Estimator</h3>
      <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", marginBottom: 28, lineHeight: 1.6 }}>Estimate your cheque recovery probability, expected timeline, and next legal steps before connecting with a professional recovery agency.</p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
        <div>
          <label style={labelStyle}>Cheque Amount</label>
          <input type="number" placeholder="e.g. 50000" value={amount} onChange={e => setAmount(e.target.value)} style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Currency</label>
          <select value={currency} onChange={e => setCurrency(e.target.value)} style={selectStyle}>
            <option value="AED" style={{ background: "#111" }}>AED — د.إ</option>
            <option value="USD" style={{ background: "#111" }}>USD — $</option>
          </select>
        </div>
        <div>
          <label style={labelStyle}>Bank Type</label>
          <select value={bankType} onChange={e => setBankType(e.target.value)} style={selectStyle}>
            <option value="major" style={{ background: "#111" }}>Major Bank (National/International)</option>
            <option value="mid" style={{ background: "#111" }}>Mid-size Bank</option>
            <option value="small" style={{ background: "#111" }}>Local / Small Bank</option>
          </select>
        </div>
        <div>
          <label style={labelStyle}>Emirate / Jurisdiction</label>
          <select value={emirate} onChange={e => setEmirate(e.target.value)} style={selectStyle}>
            <option value="dubai" style={{ background: "#111" }}>Dubai</option>
            <option value="abudhabi" style={{ background: "#111" }}>Abu Dhabi</option>
            <option value="sharjah" style={{ background: "#111" }}>Sharjah</option>
            <option value="other" style={{ background: "#111" }}>Other (GCC / Overseas)</option>
          </select>
        </div>
        <div>
          <label style={labelStyle}>Days Since Bounce</label>
          <input type="number" placeholder="e.g. 45" value={daysSince} onChange={e => setDaysSince(e.target.value)} style={inputStyle} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, paddingTop: 22 }}>
          <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
            <input type="checkbox" checked={noticeSent} onChange={e => setNoticeSent(e.target.checked)} style={{ width: 16, height: 16, accentColor: BLUE }} />
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>Legal Notice Sent</span>
          </label>
          <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
            <input type="checkbox" checked={lawyerActive} onChange={e => setLawyerActive(e.target.checked)} style={{ width: 16, height: 16, accentColor: BLUE }} />
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>Lawyer Engaged</span>
          </label>
        </div>
      </div>

      <button onClick={estimate} style={{ width: "100%", background: BTN_GRAD, color: "#fff", border: "none", borderRadius: 12, padding: "14px 20px", fontWeight: 900, fontSize: 15, cursor: "pointer", fontFamily: "inherit", marginBottom: 16 }}>
        Estimate Recovery →
      </button>

      {result && (
        <div style={{ background: "rgba(7,8,228,0.08)", border: "1px solid rgba(7,8,228,0.2)", borderRadius: 14, padding: "24px 22px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 20 }}>
            <div>
              <div style={{ fontSize: 10, fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 6 }}>Recovery Probability</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 36, color: result.probability >= 70 ? "#34D399" : result.probability >= 50 ? "#FCD34D" : "#FCA5A5" }}>{result.probability}%</div>
            </div>
            <div>
              <div style={{ fontSize: 10, fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 6 }}>Est. Time to Recovery</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 22, color: "#fff" }}>{result.timeline}</div>
            </div>
            <div>
              <div style={{ fontSize: 10, fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 6 }}>Recoverable Amount</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 18, color: "#fff", lineHeight: 1.3 }}>{result.range}</div>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 10, fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 10 }}>Recommended Next Steps</div>
            {result.steps.map((step, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 8 }}>
                <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(7,8,228,0.2)", border: "1px solid rgba(7,8,228,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 10, color: "#818CF8", marginTop: 1 }}>{i + 1}</div>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>{step}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.2)", marginTop: 14, lineHeight: 1.6 }}>
            Disclaimer: This estimator is for guidance only and does not replace legal advice. For verified recovery, connect with Wirestork&apos;s Debt Collection Agency in the UAE.
          </p>
          <Link href="/reach-us" style={{ display: "inline-block", marginTop: 14, background: AMBER_GRAD, color: "#fff", borderRadius: 10, padding: "10px 20px", fontWeight: 900, fontSize: 13, textDecoration: "none", letterSpacing: "0.06em" }}>
            Connect with a Debt Collection Lawyer →
          </Link>
        </div>
      )}
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function DebtCollectionClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main style={{ background: "#000", color: "#fff", minHeight: "100vh", fontFamily: "'Outfit', sans-serif" }}>

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section style={{ padding: "120px 32px 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(7,8,228,0.12), transparent)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 20 }}>Debt Collection Agency — Dubai & UAE</p>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(36px, 5vw, 62px)", lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 20 }}>
              Debt Collection<br />
              <span style={{ color: "rgba(255,255,255,0.3)" }}>Simplified</span>
            </h1>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: 12 }}>
              Is your business being crippled by delayed payments and bad debts? Tired of payment scams? Turbocharge your accounts receivable with Wirestork&apos;s account receivable management plan and get paid faster.
            </p>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.35)", lineHeight: 1.7, marginBottom: 36 }}>
              AI-powered predictive analysis, streamlined communications, one-click onboarding and more. We take care of your payment receivables and collections while you focus on your core business.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/reach-us" style={{ background: BTN_GRAD, color: "#fff", borderRadius: 100, padding: "14px 32px", fontSize: 13, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>
                Start Collecting Now →
              </Link>
              <a href="#estimator" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.65)", borderRadius: 100, padding: "14px 32px", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>
                Estimate Recovery ↓
              </a>
            </div>
          </div>
          {/* Right: feature pills */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {FEATURES.map(f => (
              <div key={f.title} style={{ ...GLASS, padding: "22px 22px", borderRadius: 14, display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ fontSize: 28, flexShrink: 0 }}>{f.icon}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: "#fff", marginBottom: 6 }}>{f.title}</div>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.42)", lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
                </div>
              </div>
            ))}
            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 4 }}>
              {[["70%", "Debt curve reduction"], ["No recovery", "No fee"], ["30–90 days", "Average recovery"], ["24/7", "Dashboard access"]].map(([val, lbl]) => (
                <div key={lbl} style={{ ...GLASS, padding: "16px 18px", borderRadius: 12 }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 20, color: "#fff" }}>{val}</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.32)", fontWeight: 600 }}>{lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CHEQUE ESTIMATOR ───────────────────────────────────────────────── */}
      <section id="estimator" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "72px 32px", scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
            <div>
              <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 16 }}>Free Tool</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(26px, 3.5vw, 44px)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 16 }}>
                How Much Debt Can You Recover?
              </h2>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.42)", lineHeight: 1.8, marginBottom: 24 }}>
                Got a bounced cheque in hand? Let&apos;s see how much you can recover. Our estimator analyzes bank type, jurisdiction, time elapsed, and legal steps taken to give you a realistic recovery outlook.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {["Dubai Police or court filing available for bounced cheques", "UAE Penal Code provides strong creditor protections", "No minimum claim amount — we handle all sizes", "Cross-GCC recovery through our legal partner network"].map(item => (
                  <div key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(7,8,228,0.15)", border: "1px solid rgba(7,8,228,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                      <span style={{ color: "#818CF8", fontSize: 10 }}>✓</span>
                    </div>
                    <span style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <ChequeBounceEstimator />
          </div>
        </div>
      </section>

      {/* ── DATA INTELLIGENCE ──────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "72px 32px", background: "rgba(7,8,228,0.02)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 14 }}>Technology</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(26px, 4vw, 48px)", letterSpacing: "-0.03em" }}>
              Debt Collection Agency in UAE<br />Leveraging Artificial Intelligence
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.38)", marginTop: 14, maxWidth: 600, margin: "14px auto 0", lineHeight: 1.8 }}>
              Our user-driven analytical data adapted from Markov modeling effectively computes the probability of bad debts from day one. Cross-integrated with local credit bureau databases, Wirestork&apos;s aggregated debt data flattens the debt collection curve by nearly 70%.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
            {CAPABILITIES.map(c => (
              <div key={c.title} style={{ ...GLASS, padding: "22px 20px" }}>
                <div style={{ fontSize: 24, marginBottom: 10 }}>{c.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 14, color: "#fff", marginBottom: 6 }}>{c.title}</div>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ───────────────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "72px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 14 }}>What We Offer</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(26px, 4vw, 48px)", letterSpacing: "-0.03em" }}>
              Secure, Transparent & Immutable<br />Transaction Records
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {SERVICES.map(s => (
              <div key={s.title} style={{ ...GLASS, padding: "26px 24px" }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{s.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 16, color: "#fff", marginBottom: 8 }}>{s.title}</div>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.42)", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ────────────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "60px 32px", background: "rgba(7,8,228,0.02)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.03em", marginBottom: 40, color: "rgba(255,255,255,0.7)" }}>
            Trusted by thousands to improve their account receivables & cashflow.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {[["24/5", "Support coverage"], ["10+", "Years experience"], ["No fee", "If no recovery"], ["70%", "Debt curve reduction"]].map(([val, lbl]) => (
              <div key={lbl} style={{ ...GLASS, padding: "24px 20px" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 40, color: BLUE, lineHeight: 1, marginBottom: 8 }}>{val}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>{lbl}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32, ...GLASS, padding: "24px 28px", borderRadius: 14, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
            <div style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", fontStyle: "italic" }}>
              &ldquo;Our 24/5 support ensures clients receive timely assistance whenever they need it. Our dedicated team is available around the clock to address any concerns, provide updates, and guide you through every step of the debt collection process.&rdquo;
            </div>
            <Link href="/reach-us" style={{ background: BTN_GRAD, color: "#fff", borderRadius: 100, padding: "12px 24px", fontSize: 13, fontWeight: 900, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", flexShrink: 0 }}>
              Contact Us →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "72px 32px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 14 }}>FAQ</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(26px, 4vw, 44px)", letterSpacing: "-0.03em" }}>
              Frequently Asked Questions
            </h2>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.3)", marginTop: 10 }}>Explore answers to common inquiries about Wirestork&apos;s Debt Collection process.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {FAQS.map((faq, i) => (
              <div key={i} style={{ ...GLASS, borderRadius: 14, overflow: "hidden" }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: "100%", padding: "20px 24px", background: "transparent", border: "none", color: "#fff", textAlign: "left", cursor: "pointer", fontFamily: "inherit", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}>
                  <span style={{ fontWeight: 700, fontSize: 15, lineHeight: 1.4 }}>{faq.q}</span>
                  <span style={{ color: BLUE, fontSize: 20, flexShrink: 0, transform: openFaq === i ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}>+</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 24px 20px", fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.8 }}>{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "80px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: 620, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.03em", marginBottom: 16 }}>
            Ready to recover what&apos;s yours?
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.42)", marginBottom: 36, lineHeight: 1.7 }}>
            No recovery, no fee. Submit your case today and our team will review within 24 hours.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/reach-us" style={{ background: BTN_GRAD, color: "#fff", borderRadius: 100, padding: "15px 36px", fontSize: 14, fontWeight: 900, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none" }}>
              Submit Your Case →
            </Link>
            <a href="#estimator" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)", borderRadius: 100, padding: "15px 36px", fontSize: 14, fontWeight: 700, textDecoration: "none" }}>
              Use the Estimator
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
