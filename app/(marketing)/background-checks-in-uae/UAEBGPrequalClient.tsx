"use client";
import { useState } from "react";
import Link from "next/link";

const BLUE = "#0708E4";
const BTN_GRAD = "linear-gradient(135deg, #0708E4 0%, #6366F1 100%)";

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "12px 16px",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 10, color: "#fff", fontSize: 14,
  outline: "none", fontFamily: "inherit", boxSizing: "border-box",
};
const labelStyle: React.CSSProperties = {
  display: "block", fontSize: 11, fontWeight: 700,
  color: "rgba(255,255,255,0.5)", marginBottom: 6,
};

export default function UAEBGPrequalClient() {
  const [form, setForm] = useState({
    company: "", industry: "", checksPerYear: "",
    name: "", email: "", phone: "", message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const up = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm(f => ({ ...f, [k]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true); setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productSlug: "background-checks-in-uae",
          amountAed: 0,
          name: form.name,
          email: form.email,
          phone: form.phone,
          notes: `Company: ${form.company} | Industry: ${form.industry} | Checks/year: ${form.checksPerYear} | Message: ${form.message}`,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong");
      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "36px 32px", textAlign: "center" }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 24, color: "#fff", marginBottom: 8 }}>Request Received</h3>
        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, marginBottom: 20 }}>
          Thank you, {form.name}. Our team will be in touch within 1 business day.
        </p>
        <Link href="/dashboard" style={{ display: "inline-block", background: BTN_GRAD, color: "#fff", borderRadius: 10, padding: "10px 24px", fontWeight: 900, fontSize: 13, textDecoration: "none" }}>
          Go to Dashboard →
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "32px 28px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

        {/* Company */}
        <div>
          <label style={labelStyle}>Company</label>
          <input required type="text" value={form.company} onChange={up("company")} style={inputStyle} />
        </div>

        {/* Industry */}
        <div>
          <label style={labelStyle}>Industry</label>
          <select required value={form.industry} onChange={up("industry")} style={{ ...inputStyle, cursor: "pointer" }}>
            <option value="" style={{ background: "#111" }}>Select industry</option>
            <option value="Legal services" style={{ background: "#111" }}>Legal services</option>
            <option value="Financial services" style={{ background: "#111" }}>Financial services</option>
            <option value="Technology" style={{ background: "#111" }}>Technology</option>
            <option value="Recurtitment" style={{ background: "#111" }}>Recurtitment</option>
            <option value="Consulting" style={{ background: "#111" }}>Consulting</option>
            <option value="Travel" style={{ background: "#111" }}>Travel</option>
          </select>
        </div>

        {/* Approximate Number of checks required per year */}
        <div>
          <label style={labelStyle}>Approximate Number of checks required per year</label>
          <select required value={form.checksPerYear} onChange={up("checksPerYear")} style={{ ...inputStyle, cursor: "pointer" }}>
            <option value="" style={{ background: "#111" }}>Select range</option>
            <option value="100-150" style={{ background: "#111" }}>100-150</option>
            <option value=">150" style={{ background: "#111" }}>&gt; 150</option>
            <option value=">250+" style={{ background: "#111" }}>&gt;250+</option>
          </select>
        </div>

        {/* Name */}
        <div>
          <label style={labelStyle}>Name</label>
          <input required type="text" value={form.name} onChange={up("name")} placeholder="Ex: Alex Worker" style={inputStyle} />
        </div>

        {/* Email */}
        <div>
          <label style={labelStyle}>Email</label>
          <input required type="email" value={form.email} onChange={up("email")} placeholder="Ex: yourmail@gmail.com" style={inputStyle} />
        </div>

        {/* Phone */}
        <div>
          <label style={labelStyle}>Phone</label>
          <input required type="tel" value={form.phone} onChange={up("phone")} style={inputStyle} />
        </div>

        {/* Message */}
        <div>
          <label style={labelStyle}>Message</label>
          <textarea value={form.message} onChange={up("message")} rows={7}
            style={{ ...inputStyle, resize: "vertical" }} />
        </div>

      </div>

      {error && (
        <div style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.25)", borderRadius: 10, padding: "10px 14px", fontSize: 13, color: "#FCA5A5", marginTop: 14 }}>⚠ {error}</div>
      )}

      <button type="submit" disabled={submitting}
        style={{ width: "100%", background: submitting ? "rgba(255,255,255,0.07)" : BTN_GRAD, color: "#fff", border: "none", borderRadius: 12, padding: "14px 20px", fontWeight: 900, fontSize: 15, cursor: submitting ? "not-allowed" : "pointer", fontFamily: "inherit", marginTop: 18 }}>
        {submitting ? "Sending…" : "Get started"}
      </button>
    </form>
  );
}
