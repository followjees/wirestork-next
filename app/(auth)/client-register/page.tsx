"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (form.password !== form.confirm) { setError("Passwords do not match."); return; }
    if (form.password.length < 8) { setError("Password must be at least 8 characters."); return; }
    setLoading(true);
    setError("");
    // TODO: POST /api/auth/register
    setTimeout(() => {
      setLoading(false);
      router.push("/client-login?registered=1");
    }, 1000);
  }

  const update = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) => setForm(f => ({ ...f, [k]: e.target.value }));

  return (
    <div style={{ minHeight: "100vh", background: "var(--canvas)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ width: "100%", maxWidth: 440 }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: "linear-gradient(135deg, #8550FF, #6E3EFF)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 900, fontSize: 18 }}>W</div>
              <span style={{ fontWeight: 800, fontSize: 22, color: "var(--ink)", letterSpacing: "-0.03em" }}>Wire<span style={{ color: "var(--brand)" }}>stork</span></span>
            </div>
          </Link>
          <div style={{ marginTop: 24, fontWeight: 700, fontSize: 24, color: "var(--ink)" }}>Create your account</div>
          <div style={{ color: "var(--muted)", fontSize: 15, marginTop: 6 }}>Track your orders and case history</div>
        </div>
        <div className="card" style={{ padding: 36 }}>
          <form onSubmit={handleSubmit}>
            {[
              { key: "name", label: "Full Name", type: "text", placeholder: "John Smith" },
              { key: "email", label: "Email", type: "email", placeholder: "you@example.com" },
              { key: "password", label: "Password", type: "password", placeholder: "Min. 8 characters" },
              { key: "confirm", label: "Confirm Password", type: "password", placeholder: "Repeat password" },
            ].map(({ key, label, type, placeholder }) => (
              <div key={key} style={{ marginBottom: 16 }}>
                <label style={{ display: "block", fontWeight: 600, fontSize: 13, marginBottom: 6, color: "var(--ink)" }}>{label}</label>
                <input type={type} required value={form[key as keyof typeof form]} onChange={update(key)}
                  className="input" placeholder={placeholder} />
              </div>
            ))}
            {error && <div style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 8, padding: "10px 14px", fontSize: 14, color: "var(--danger)", marginBottom: 16 }}>{error}</div>}
            <button type="submit" disabled={loading} className="btn btn-primary" style={{ width: "100%", justifyContent: "center", padding: "13px", fontSize: 15, marginTop: 8 }}>
              {loading ? "Creating account..." : "Create Account →"}
            </button>
          </form>
          <div style={{ textAlign: "center", marginTop: 20, fontSize: 14, color: "var(--muted)" }}>
            Already have an account?{" "}
            <Link href="/client-login" style={{ color: "var(--brand)", fontWeight: 600 }}>Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
