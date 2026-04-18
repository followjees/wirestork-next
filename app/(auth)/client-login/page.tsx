"use client";
import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await signIn("credentials", {
      email, password, redirect: false,
    });
    setLoading(false);
    if (res?.error) {
      setError("Invalid email or password.");
    } else {
      router.push("/client-dashboard");
    }
  }

  return (
    <div style={{ minHeight: "100vh", background: "var(--canvas)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ width: "100%", maxWidth: 420 }}>
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: "linear-gradient(135deg, #8550FF, #6E3EFF)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 900, fontSize: 18 }}>W</div>
              <span style={{ fontWeight: 800, fontSize: 22, color: "var(--ink)", letterSpacing: "-0.03em" }}>Wire<span style={{ color: "var(--brand)" }}>stork</span></span>
            </div>
          </Link>
          <div style={{ marginTop: 24, fontWeight: 700, fontSize: 24, color: "var(--ink)" }}>Welcome back</div>
          <div style={{ color: "var(--muted)", fontSize: 15, marginTop: 6 }}>Sign in to your account</div>
        </div>

        <div className="card" style={{ padding: 36 }}>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: 18 }}>
              <label style={{ display: "block", fontWeight: 600, fontSize: 13, marginBottom: 6, color: "var(--ink)" }}>Email</label>
              <input
                type="email" required value={email} onChange={e => setEmail(e.target.value)}
                className="input" placeholder="you@example.com"
              />
            </div>
            <div style={{ marginBottom: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <label style={{ fontWeight: 600, fontSize: 13, color: "var(--ink)" }}>Password</label>
                <Link href="/client-reset" style={{ fontSize: 13, color: "var(--brand)" }}>Forgot password?</Link>
              </div>
              <input
                type="password" required value={password} onChange={e => setPassword(e.target.value)}
                className="input" placeholder="••••••••"
              />
            </div>
            {error && <div style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 8, padding: "10px 14px", fontSize: 14, color: "var(--danger)", marginBottom: 16 }}>{error}</div>}
            <button type="submit" disabled={loading} className="btn btn-primary" style={{ width: "100%", justifyContent: "center", padding: "13px", fontSize: 15 }}>
              {loading ? "Signing in..." : "Sign In →"}
            </button>
          </form>
          <div style={{ textAlign: "center", marginTop: 20, fontSize: 14, color: "var(--muted)" }}>
            Don't have an account?{" "}
            <Link href="/client-register" style={{ color: "var(--brand)", fontWeight: 600 }}>Create one</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
