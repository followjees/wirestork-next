"use client";
// components/blog/NewsletterBox.tsx
import { useState } from "react";

const BLUE = "#0708E4";
const BTN_GRAD = "linear-gradient(135deg, #0708E4 0%, #6366F1 100%)";

export function NewsletterBox() {
  const [email, setEmail]       = useState("");
  const [status, setStatus]     = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage]   = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong");
      setStatus("success");
      setMessage("You're subscribed! Expect legal insights in your inbox.");
      setEmail("");
    } catch (err: unknown) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Failed to subscribe. Try again.");
    }
  }

  return (
    <div style={{
      background: "linear-gradient(135deg, rgba(7,8,228,0.08) 0%, rgba(99,102,241,0.05) 100%)",
      border: "1px solid rgba(7,8,228,0.2)",
      borderRadius: 20,
      padding: "36px 32px",
      marginTop: 48,
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Decorative orb */}
      <div style={{
        position: "absolute",
        top: -40,
        right: -40,
        width: 180,
        height: 180,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(7,8,228,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative" }}>
        <div style={{
          display: "inline-block",
          fontSize: 10,
          fontWeight: 900,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#818CF8",
          background: "rgba(7,8,228,0.12)",
          border: "1px solid rgba(7,8,228,0.25)",
          padding: "4px 12px",
          borderRadius: 100,
          marginBottom: 16,
        }}>
          ✦ Legal Intelligence Newsletter
        </div>

        <h3 style={{
          fontFamily: "'Playfair Display', serif",
          fontStyle: "italic",
          fontWeight: 900,
          fontSize: "clamp(20px, 3vw, 28px)",
          color: "#fff",
          letterSpacing: "-0.03em",
          marginBottom: 8,
          lineHeight: 1.2,
        }}>
          Stay ahead of UAE &amp; GCC legal changes.
        </h3>
        <p style={{
          fontSize: 14,
          color: "rgba(255,255,255,0.45)",
          lineHeight: 1.7,
          marginBottom: 24,
          maxWidth: 480,
        }}>
          Get weekly insights on travel ban updates, employment law, background screening regulations, and legal developments across the Gulf — direct to your inbox. No spam, ever.
        </p>

        {status === "success" ? (
          <div style={{
            background: "rgba(16,185,129,0.08)",
            border: "1px solid rgba(16,185,129,0.25)",
            borderRadius: 12,
            padding: "14px 20px",
            fontSize: 14,
            color: "#34D399",
            fontWeight: 600,
          }}>
            ✓ {message}
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your work email"
              style={{
                flex: 1,
                minWidth: 220,
                padding: "12px 18px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 10,
                color: "#fff",
                fontSize: 14,
                outline: "none",
                fontFamily: "inherit",
              }}
              onFocus={(e) => (e.target.style.borderColor = BLUE)}
              onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              style={{
                background: status === "loading" ? "rgba(255,255,255,0.08)" : BTN_GRAD,
                color: "#fff",
                border: "none",
                borderRadius: 10,
                padding: "12px 24px",
                fontWeight: 900,
                fontSize: 13,
                letterSpacing: "0.06em",
                cursor: status === "loading" ? "not-allowed" : "pointer",
                fontFamily: "inherit",
                whiteSpace: "nowrap",
              }}
            >
              {status === "loading" ? "Subscribing…" : "Subscribe Free →"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p style={{ fontSize: 12, color: "#FCA5A5", marginTop: 8 }}>⚠ {message}</p>
        )}

        <p style={{ fontSize: 11, color: "rgba(255,255,255,0.2)", marginTop: 12 }}>
          We respect your privacy. Unsubscribe anytime. See our{" "}
          <a href="/privacy" style={{ color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}
