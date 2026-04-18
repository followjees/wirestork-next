"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Travel Ban", href: "/travel-ban-uae-check" },
  { label: "Background Checks", href: "/background-checks-gcc" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/lawyers-in-uae" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "background 0.3s, box-shadow 0.3s, backdrop-filter 0.3s",
          background: scrolled ? "rgba(250,250,255,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.07)" : "none",
        }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          {/* Wordmark */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{
              width: 32, height: 32, borderRadius: 8,
              background: "linear-gradient(135deg, #8550FF 0%, #6E3EFF 100%)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "white", fontWeight: 900, fontSize: 14, fontFamily: "Inter, sans-serif"
            }}>W</div>
            <span style={{ fontWeight: 800, fontSize: 18, color: "var(--ink)", letterSpacing: "-0.03em" }}>
              Wire<span style={{ color: "var(--brand)" }}>stork</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 4 }} className="desktop-nav">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="nav-link" style={{ padding: "6px 12px", borderRadius: 8 }}>
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }} className="desktop-nav">
            <Link href="/client-login" className="nav-link">Sign In</Link>
            <Link href="/travel-ban-uae-check" className="btn btn-primary" style={{ padding: "9px 20px", fontSize: 13 }}>
              Check Ban Status →
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "none", background: "none", border: "none", cursor: "pointer",
              padding: 8, color: "var(--ink)"
            }}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 99,
          background: "rgba(250,250,255,0.97)", backdropFilter: "blur(20px)",
          display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 8,
          paddingTop: 80
        }}>
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              style={{ fontSize: 28, fontWeight: 700, color: "var(--ink)", textDecoration: "none", padding: "12px 0" }}>
              {l.label}
            </Link>
          ))}
          <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 12, width: "80%", maxWidth: 300 }}>
            <Link href="/client-login" onClick={() => setMenuOpen(false)}
              className="btn btn-outline" style={{ justifyContent: "center" }}>Sign In</Link>
            <Link href="/travel-ban-uae-check" onClick={() => setMenuOpen(false)}
              className="btn btn-primary" style={{ justifyContent: "center" }}>Check Ban Status →</Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
