"use client";
import { useState } from "react";

const BLUE = "#0708E4";
const BTN_GRAD = "linear-gradient(135deg, #0708E4 0%, #6366F1 100%)";
const GLASS: React.CSSProperties = { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16 };

const PRICING_DATA = [
  {
    title: "Identity & Biometric Verification",
    desc: "Biometric-grade identity verification cross-referencing global databases and Iqama authenticity. Essential for preventing fraud at the first touchpoint.",
    time: "Instant to 1 Day",
    price: "SAR 20",
    prefix: "As Low As",
  },
  {
    title: "Employment History",
    desc: "Detailed confirmation of dates, roles, and reasons for leaving. We verify directly with HR departments to eliminate title inflation and gap-filling.",
    time: "4–6 Business Days",
    price: "SAR 112",
    prefix: "Starting From",
  },
  {
    title: "Education Verification",
    desc: "Official confirmation of degree, institution, and graduation year. Our global reach covers educational jurisdictions across 190+ countries.",
    time: "6–10 Business Days",
    price: "SAR 112",
    prefix: "Starting From",
  },
  {
    title: "Criminal Record Check",
    desc: "Comprehensive Saudi clearance or global equivalent background verification conducted by local legal teams covering all relevant courts.",
    time: "1–2 Business Days",
    price: "SAR 412",
    prefix: "As Low As",
  },
  {
    title: "Global Sanctions & AML",
    desc: "Cross-referencing candidates against 1,500+ global watchlists, including Interpol, OFAC, and PEP (Politically Exposed Persons) lists.",
    time: "Instant to 24 Hours",
    price: "SAR 85",
    prefix: "As Low As",
  },
  {
    title: "Social Media Integrity",
    desc: "AI-driven screening for public behavioral red flags, hate speech, or content that contradicts corporate values and Saudi cultural standards.",
    time: "2–3 Business Days",
    price: "SAR 120",
    prefix: "Starting From",
  },
];

export default function KSABGPricingClient() {
  const [active, setActive] = useState(0);
  const item = PRICING_DATA[active];

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
      {/* Left: title list */}
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {PRICING_DATA.map((d, i) => (
          <button key={i} onClick={() => setActive(i)}
            style={{
              background: active === i ? "rgba(7,8,228,0.12)" : "rgba(255,255,255,0.02)",
              border: active === i ? `1px solid ${BLUE}` : "1px solid rgba(255,255,255,0.07)",
              borderRadius: 12, padding: "14px 18px", textAlign: "left",
              cursor: "pointer", fontFamily: "inherit", transition: "all 0.15s",
              display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12,
            }}>
            <span style={{ fontWeight: active === i ? 700 : 500, fontSize: 14, color: active === i ? "#fff" : "rgba(255,255,255,0.55)" }}>{d.title}</span>
            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 16, color: active === i ? "#fff" : "rgba(255,255,255,0.35)", flexShrink: 0 }}>{d.price}</span>
          </button>
        ))}
        <p style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", marginTop: 8 }}>*Pricing indicators for volume screenings</p>
      </div>

      {/* Right: selected detail */}
      <div style={{ ...GLASS, padding: 32, borderRadius: 20 }}>
        <div style={{ fontSize: 10, fontWeight: 900, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)", marginBottom: 16 }}>Selected Check</div>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 24, color: "#fff", marginBottom: 12, lineHeight: 1.2 }}>{item.title}</h3>
        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: 24 }}>{item.desc}</p>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 20, display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.38)" }}>Turnaround</span>
            <span style={{ fontSize: 13, color: "#fff", fontWeight: 700 }}>{item.time}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.38)" }}>{item.prefix}</span>
            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 36, color: BLUE, lineHeight: 1 }}>{item.price}</span>
          </div>
        </div>
        <a href="#prequalify" style={{ display: "block", marginTop: 24, background: BTN_GRAD, color: "#fff", borderRadius: 12, padding: "13px 20px", fontWeight: 900, fontSize: 14, textAlign: "center", textDecoration: "none" }}>
          Request This Check →
        </a>
      </div>
    </div>
  );
}
