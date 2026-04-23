"use client";
import { useState, useRef } from "react";
import Link from "next/link";

const BLUE = "#0708E4";
const BTN_GRAD = "linear-gradient(135deg, #0708E4 0%, #6366F1 100%)";
const AMBER_GRAD = "linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)";

const glassStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 16,
};

/* ─── DOCUMENT TYPES & PRICING (from WP product) ──────────── */
const DOC_TYPES = [
  { id: "employment",       label: "Employment Contract",                  price: 149, turnaround: "2 days",  icon: "👔", category: "Employment" },
  { id: "termination",      label: "Termination / Resignation Letter",     price: 149, turnaround: "2 days",  icon: "📝", category: "Employment" },
  { id: "labour-complaint", label: "Labour Complaint Filing",              price: 199, turnaround: "2 days",  icon: "⚖️", category: "Employment" },
  { id: "nda",              label: "Non-Disclosure Agreement (NDA)",       price: 149, turnaround: "2 days",  icon: "🔒", category: "Business" },
  { id: "partnership",      label: "Business Partnership Agreement",       price: 249, turnaround: "3 days",  icon: "🤝", category: "Business" },
  { id: "shareholder",      label: "Shareholder Agreement",                price: 299, turnaround: "3 days",  icon: "📊", category: "Business" },
  { id: "moa-aoa",          label: "MOA / AOA",                            price: 299, turnaround: "3 days",  icon: "🏢", category: "Business" },
  { id: "franchise",        label: "Franchise Agreement",                  price: 299, turnaround: "3 days",  icon: "🏪", category: "Business" },
  { id: "agency",           label: "Agency Agreement",                     price: 249, turnaround: "3 days",  icon: "🤜", category: "Business" },
  { id: "ip",               label: "Intellectual Property Agreement",      price: 249, turnaround: "3 days",  icon: "💡", category: "Business" },
  { id: "construction",     label: "Construction Contract",                price: 349, turnaround: "3 days",  icon: "🏗️", category: "Business" },
  { id: "court-judgment",   label: "Court Judgment / Legal Ruling",        price: 199, turnaround: "2 days",  icon: "🏛️", category: "Legal" },
  { id: "poa",              label: "Power of Attorney",                    price: 149, turnaround: "1 day",   icon: "📋", category: "Legal" },
  { id: "legal-notice",     label: "Legal Notice / Demand Letter",         price: 149, turnaround: "1 day",   icon: "📨", category: "Legal" },
  { id: "affidavit",        label: "Affidavit / Sworn Statement",          price: 149, turnaround: "1 day",   icon: "✍️", category: "Legal" },
  { id: "prosecution",      label: "Public Prosecution Order",             price: 199, turnaround: "2 days",  icon: "⚡", category: "Legal" },
  { id: "case-filing",      label: "Case Filing Summary / Docket Sheet",   price: 199, turnaround: "2 days",  icon: "📁", category: "Legal" },
  { id: "rental-dispute",   label: "Rental Dispute Committee Document",    price: 199, turnaround: "2 days",  icon: "🏠", category: "Property" },
];

const CATEGORIES = ["All", "Employment", "Business", "Legal", "Property"];

const PROCESS_STEPS = [
  { num: "01", title: "Select Document Type", desc: "Choose from 18 categories of legal documents. Price is shown instantly." },
  { num: "02", title: "Pay Securely", desc: "Complete payment via card or bank transfer. Your order is created immediately." },
  { num: "03", title: "Upload Your Document", desc: "Drag and drop your file into the secure upload portal. PDF, DOCX, or images accepted." },
  { num: "04", title: "Expert Review", desc: "Our legal team reviews for risks, ambiguous clauses, and compliance issues." },
  { num: "05", title: "Receive Detailed Report", desc: "Get a clear report with findings, risks flagged, and recommended revisions." },
  { num: "06", title: "Optional Consultation", desc: "Book a follow-up session with the reviewing lawyer to discuss findings." },
];

const BENEFITS = [
  { icon: "🛡️", title: "Mitigate Legal Risks", desc: "Identify contract pitfalls before signing — not after a dispute." },
  { icon: "⚖️", title: "GCC Compliance", desc: "Reviewed against UAE, KSA, Qatar, Bahrain, Oman, and Kuwait laws." },
  { icon: "⏱️", title: "Fast Turnaround", desc: "2–3 business days standard. Expedited options available." },
  { icon: "🔐", title: "Confidential & Secure", desc: "Advanced encryption. Only authorised lawyers access your documents." },
  { icon: "🌐", title: "Bilingual Review", desc: "Arabic and English documents reviewed with legal and cultural accuracy." },
  { icon: "📞", title: "Follow-up Support", desc: "Access follow-up consultations and legal advice after your report." },
];

const FAQS = [
  { q: "Is Wirestork a law firm?", a: "No. Wirestork is a legal services platform connecting you with qualified lawyers and legal experts for document review and other services." },
  { q: "How long does document review take?", a: "Typically 2–3 business days. Expedited services are available upon request for urgent matters." },
  { q: "How do I submit my documents?", a: "After payment you'll be redirected to a secure upload portal. You can drag-and-drop PDF, DOCX, or image files." },
  { q: "Are my documents confidential?", a: "Absolutely. We use advanced encryption and strict confidentiality protocols. Only the assigned legal professional can access your file." },
  { q: "Do you review international contracts?", a: "Yes. We have a network of experts who handle cross-border agreements and are familiar with multiple jurisdictions." },
  { q: "What is the pricing structure?", a: "Pricing ranges from AED 149 to AED 349 depending on document type and complexity. Select your document type above to see the exact price instantly." },
];

export default function ContractReviewClient() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDoc, setSelectedDoc] = useState<typeof DOC_TYPES[0] | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const orderRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const filtered = selectedCategory === "All"
    ? DOC_TYPES
    : DOC_TYPES.filter(d => d.category === selectedCategory);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) setUploadedFile(file);
  };

  const scrollToOrder = () => {
    orderRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main style={{ background: "#000", color: "#fff", minHeight: "100vh", fontFamily: "'Outfit', sans-serif" }}>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section style={{ position: "relative", padding: "120px 32px 80px", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 60% -10%, rgba(7,8,228,0.14), transparent)", pointerEvents: "none" }} />
        {/* Decorative document lines */}
        <div style={{ position: "absolute", right: 60, top: 80, opacity: 0.04 }}>
          {[...Array(12)].map((_, i) => (
            <div key={i} style={{ height: 2, background: "#fff", marginBottom: 18, width: i % 3 === 2 ? 120 : 220, borderRadius: 1 }} />
          ))}
        </div>
        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative" }}>
          <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 20 }}>Legal Document Review</p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(38px, 6vw, 72px)", lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 24 }}>
            Simplify Your Legal<br />
            <span style={{ color: "rgba(255,255,255,0.3)" }}>Document Review</span>
          </h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, maxWidth: 600, marginBottom: 16 }}>
            Expert contract &amp; legal document reviews to protect your business and ensure compliance across the GCC.
          </p>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.32)", lineHeight: 1.7, maxWidth: 580, marginBottom: 40 }}>
            Upload your document securely and receive a thorough, expert review tailored to your business needs. Avoid costly legal risks and make informed decisions with confidence.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <button onClick={scrollToOrder} style={{ background: BTN_GRAD, color: "#fff", border: "none", borderRadius: 100, padding: "14px 32px", fontSize: 14, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", fontFamily: "inherit" }}>
              Start Your Review →
            </button>
            <div style={{ display: "flex", gap: 20, marginLeft: 8 }}>
              {[["2–3 Days", "Turnaround"], ["18", "Doc Types"], ["AED 149+", "From"]].map(([val, lbl]) => (
                <div key={lbl}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 22, color: "#fff" }}>{val}</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>{lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "72px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 14 }}>Simple Process</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(26px, 4vw, 48px)", letterSpacing: "-0.03em" }}>
              How It Works
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.num} style={{ ...glassStyle, padding: "28px 24px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 16, right: 18, fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 56, color: "rgba(7,8,228,0.08)", lineHeight: 1 }}>{step.num}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 28, color: BLUE, marginBottom: 14 }}>{step.num}</div>
                <div style={{ fontWeight: 700, fontSize: 16, color: "#fff", marginBottom: 8 }}>{step.title}</div>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.42)", lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
                {i < 5 && (
                  <div style={{ position: "absolute", right: -10, top: "50%", transform: "translateY(-50%)", fontSize: 18, color: "rgba(255,255,255,0.1)", display: i % 3 === 2 ? "none" : "block" }}>→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOCUMENT SELECTOR + ORDER ─────────────────────────────────── */}
      <section ref={orderRef} id="order" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "72px 32px", scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 14 }}>Step 1 of 3</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(26px, 4vw, 48px)", letterSpacing: "-0.03em" }}>
              Select Your Document Type
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.38)", marginTop: 10 }}>Price shown instantly. Pay after selection.</p>
          </div>

          {/* Category filter tabs */}
          <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 32, flexWrap: "wrap" }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: "8px 20px",
                  borderRadius: 100,
                  border: selectedCategory === cat ? `1px solid ${BLUE}` : "1px solid rgba(255,255,255,0.1)",
                  background: selectedCategory === cat ? "rgba(7,8,228,0.15)" : "rgba(255,255,255,0.03)",
                  color: selectedCategory === cat ? "#fff" : "rgba(255,255,255,0.45)",
                  fontSize: 13,
                  fontWeight: selectedCategory === cat ? 700 : 500,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  transition: "all 0.15s",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Two-column layout: doc grid + sticky order panel */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 28, alignItems: "start" }}>
            {/* Document type grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
              {filtered.map((doc) => {
                const isSelected = selectedDoc?.id === doc.id;
                return (
                  <button
                    key={doc.id}
                    onClick={() => setSelectedDoc(doc)}
                    style={{
                      background: isSelected ? "rgba(7,8,228,0.12)" : "rgba(255,255,255,0.025)",
                      border: isSelected ? `1.5px solid ${BLUE}` : "1px solid rgba(255,255,255,0.07)",
                      borderRadius: 14,
                      padding: "18px 18px",
                      textAlign: "left",
                      cursor: "pointer",
                      fontFamily: "inherit",
                      transition: "all 0.15s",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 14,
                    }}
                  >
                    <span style={{ fontSize: 24, flexShrink: 0 }}>{doc.icon}</span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontWeight: 600, fontSize: 14, color: isSelected ? "#fff" : "rgba(255,255,255,0.7)", lineHeight: 1.4, marginBottom: 6 }}>{doc.label}</div>
                      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                        <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 17, color: isSelected ? "#fff" : "rgba(255,255,255,0.5)" }}>AED {doc.price}</span>
                        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.05)", padding: "2px 8px", borderRadius: 100 }}>{doc.turnaround}</span>
                      </div>
                    </div>
                    {isSelected && (
                      <div style={{ width: 20, height: 20, borderRadius: "50%", background: BTN_GRAD, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <span style={{ color: "#fff", fontSize: 11 }}>✓</span>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Sticky order panel */}
            <div style={{ position: "sticky", top: 90 }}>
              <div style={{ ...glassStyle, padding: 28, borderRadius: 20 }}>
                {selectedDoc ? (
                  <>
                    <div style={{ fontSize: 10, fontWeight: 900, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)", marginBottom: 20 }}>Your Order</div>
                    <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 20, paddingBottom: 20, borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                      <span style={{ fontSize: 28 }}>{selectedDoc.icon}</span>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 15, color: "#fff", lineHeight: 1.4, marginBottom: 4 }}>{selectedDoc.label}</div>
                        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.05)", padding: "2px 8px", borderRadius: 100 }}>Category: {selectedDoc.category}</span>
                      </div>
                    </div>
                    {/* Price breakdown */}
                    <div style={{ marginBottom: 20 }}>
                      {[
                        ["Document Review", `AED ${selectedDoc.price}`],
                        ["Turnaround", selectedDoc.turnaround],
                        ["Report Format", "PDF + Summary"],
                        ["Languages", "Arabic / English"],
                      ].map(([k, v]) => (
                        <div key={k} style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.38)" }}>{k}</span>
                          <span style={{ fontSize: 13, color: "#fff", fontWeight: 600 }}>{v}</span>
                        </div>
                      ))}
                      <div style={{ height: 1, background: "rgba(255,255,255,0.07)", margin: "14px 0" }} />
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span style={{ fontWeight: 700, color: "#fff" }}>Total</span>
                        <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 22, color: "#fff" }}>AED {selectedDoc.price}</span>
                      </div>
                    </div>

                    {/* Upload preview (post-pay UI) */}
                    <div
                      onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                      onDragLeave={() => setDragOver(false)}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                      style={{
                        border: `2px dashed ${dragOver ? BLUE : "rgba(255,255,255,0.12)"}`,
                        borderRadius: 12,
                        padding: "20px 16px",
                        textAlign: "center",
                        marginBottom: 16,
                        cursor: "pointer",
                        background: dragOver ? "rgba(7,8,228,0.06)" : "transparent",
                        transition: "all 0.15s",
                      }}
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf,.doc,.docx,.png,.jpg"
                        style={{ display: "none" }}
                        onChange={(e) => { if (e.target.files?.[0]) setUploadedFile(e.target.files[0]); }}
                      />
                      {uploadedFile ? (
                        <>
                          <div style={{ fontSize: 22, marginBottom: 6 }}>📄</div>
                          <div style={{ fontSize: 13, color: "#fff", fontWeight: 600 }}>{uploadedFile.name}</div>
                          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>{(uploadedFile.size / 1024).toFixed(0)} KB</div>
                        </>
                      ) : (
                        <>
                          <div style={{ fontSize: 22, marginBottom: 8 }}>📂</div>
                          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>
                            <strong style={{ color: "rgba(255,255,255,0.7)" }}>Drag & drop</strong> your document here<br />
                            <span style={{ fontSize: 11 }}>PDF, DOCX or image · Max 20MB</span>
                          </div>
                        </>
                      )}
                    </div>

                    <Link
                      href={`/checkout?product=legal-document-review&type=${encodeURIComponent(selectedDoc.label)}&price=${selectedDoc.price}`}
                      style={{
                        display: "block",
                        background: BTN_GRAD,
                        color: "#fff",
                        borderRadius: 12,
                        padding: "14px 20px",
                        fontWeight: 900,
                        fontSize: 14,
                        textAlign: "center",
                        textDecoration: "none",
                        letterSpacing: "0.04em",
                        marginBottom: 12,
                      }}
                    >
                      Pay AED {selectedDoc.price} & Submit →
                    </Link>
                    <p style={{ textAlign: "center", fontSize: 11, color: "rgba(255,255,255,0.2)", lineHeight: 1.5 }}>
                      Secure payment · 2–3 day turnaround<br />Upload after payment via your dashboard
                    </p>
                  </>
                ) : (
                  <div style={{ textAlign: "center", padding: "20px 0" }}>
                    <div style={{ fontSize: 40, marginBottom: 16 }}>👆</div>
                    <div style={{ fontWeight: 700, fontSize: 16, color: "#fff", marginBottom: 8 }}>Select a document type</div>
                    <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", lineHeight: 1.6 }}>
                      Choose the type of document you need reviewed from the list. Pricing and turnaround time appear here instantly.
                    </p>
                  </div>
                )}
              </div>

              {/* Trust signals */}
              <div style={{ display: "flex", gap: 10, marginTop: 14, flexWrap: "wrap" }}>
                {["🔐 Encrypted", "⚖️ Verified Lawyers", "📞 Follow-up Included"].map((t) => (
                  <div key={t} style={{ fontSize: 11, color: "rgba(255,255,255,0.32)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 100, padding: "5px 12px", fontWeight: 600 }}>{t}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DOCUMENT CATEGORIES TABLE ─────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "72px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 14 }}>Coverage</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(26px, 4vw, 48px)", letterSpacing: "-0.03em" }}>
              Documents We Review
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            {[
              { cat: "Contracts & Agreements", desc: "Employment contracts, service agreements, sales contracts, partnership agreements, NDAs, vendor contracts. Defining rights, obligations, and risk mitigation." },
              { cat: "Litigation Documents", desc: "Pleadings, affidavits, discovery files, and court-related documents requiring relevance and privilege review." },
              { cat: "Corporate Governance", desc: "Articles of association, shareholder agreements, board resolutions, and compliance documents." },
              { cat: "Real Estate Documents", desc: "Lease agreements, deeds, property transfer documents ensuring legal validity and accuracy." },
              { cat: "Regulatory Filings", desc: "Documents submitted to government or regulatory bodies, requiring compliance verification." },
              { cat: "Wills & Trusts", desc: "Estate planning documents needing precise legal compliance and clarity." },
              { cat: "Financial & Insurance", desc: "Policies, claims, and financial agreements subject to detailed review for risk and compliance." },
              { cat: "Internal Investigations", desc: "Emails, reports, and records reviewed for litigation or regulatory investigations." },
            ].map((row) => (
              <div key={row.cat} style={{ ...glassStyle, padding: "22px 22px", display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: BTN_GRAD, flexShrink: 0, marginTop: 7 }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: "#fff", marginBottom: 6 }}>{row.cat}</div>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, margin: 0 }}>{row.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY WIRESTORK ────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "72px 32px", background: "rgba(7,8,228,0.02)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <div>
              <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 16 }}>Our Expertise</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(26px, 3.5vw, 44px)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 16 }}>
                Benefits of Choosing Wirestork
              </h2>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.42)", lineHeight: 1.8, marginBottom: 10 }}>
                Wirestork is a trusted legal compliance partner in the GCC, serving businesses since 2017. Our document review services are powered by experienced professionals specialising in contract law and GCC jurisdictions.
              </p>
              <blockquote style={{ borderLeft: `2px solid ${BLUE}`, paddingLeft: 20, margin: "24px 0 0", fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: 16, color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
                &ldquo;Wirestork&apos;s document review saved us from signing a contract with hidden liabilities. Their clarity and professionalism are unmatched.&rdquo;
                <div style={{ fontFamily: "Outfit, sans-serif", fontStyle: "normal", fontSize: 12, color: "rgba(255,255,255,0.3)", marginTop: 8, fontWeight: 600 }}>— Ahmed S., CEO, Dubai</div>
              </blockquote>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {BENEFITS.map((b) => (
                <div key={b.title} style={{ ...glassStyle, padding: "20px 18px" }}>
                  <div style={{ fontSize: 24, marginBottom: 10 }}>{b.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "#fff", marginBottom: 6 }}>{b.title}</div>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, margin: 0 }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── JURISDICTIONS ────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "60px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 20 }}>Jurisdictions We Cover</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            {[
              ["🇦🇪", "United Arab Emirates"],
              ["🇸🇦", "Saudi Arabia"],
              ["🇶🇦", "Qatar"],
              ["🇧🇭", "Bahrain"],
              ["🇴🇲", "Oman"],
              ["🇰🇼", "Kuwait"],
            ].map(([flag, country]) => (
              <div key={country} style={{ ...glassStyle, padding: "12px 22px", display: "flex", alignItems: "center", gap: 10, borderRadius: 100 }}>
                <span style={{ fontSize: 20 }}>{flag}</span>
                <span style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", fontWeight: 600 }}>{country}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.25)", marginTop: 20 }}>Also supporting cross-border and international contracts via our global network</p>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "72px 32px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: BLUE, fontWeight: 900, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 14 }}>FAQ</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(26px, 4vw, 44px)", letterSpacing: "-0.03em" }}>
              Frequently Asked Questions
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {FAQS.map((faq, i) => (
              <div key={i} style={{ ...glassStyle, borderRadius: 14, overflow: "hidden" }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: "100%", padding: "20px 24px", background: "transparent", border: "none", color: "#fff", textAlign: "left", cursor: "pointer", fontFamily: "inherit", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}
                >
                  <span style={{ fontWeight: 700, fontSize: 15 }}>{faq.q}</span>
                  <span style={{ color: BLUE, fontSize: 18, flexShrink: 0, marginTop: 1, transition: "transform 0.2s", transform: openFaq === i ? "rotate(45deg)" : "none" }}>+</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 24px 20px", fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.8 }}>{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "80px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: 620, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.03em", marginBottom: 16 }}>
            Get Your Document Reviewed Today
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.42)", marginBottom: 36, lineHeight: 1.7 }}>
            Fast. Confidential. Reliable. Starting from AED 149.
          </p>
          <button onClick={scrollToOrder} style={{ background: BTN_GRAD, color: "#fff", border: "none", borderRadius: 100, padding: "15px 36px", fontSize: 15, fontWeight: 900, letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer", fontFamily: "inherit", marginRight: 12 }}>
            Start Your Review →
          </button>
          <Link href="/online-lawyer-consultation" style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, textDecoration: "none", fontWeight: 600 }}>
            Need a lawyer instead? →
          </Link>
        </div>
      </section>

    </main>
  );
}
