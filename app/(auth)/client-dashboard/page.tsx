"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

const mockOrders = [
  { id: "WS-1042", service: "UAE Travel Ban Check", date: "Apr 12, 2026", status: "Completed", statusColor: "var(--success)" },
  { id: "WS-1041", service: "Labor Ban Check", date: "Apr 10, 2026", status: "In Progress", statusColor: "var(--brand)" },
  { id: "WS-1038", service: "Online Legal Consultation", date: "Mar 28, 2026", status: "Completed", statusColor: "var(--success)" },
];

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") router.push("/client-login");
  }, [status, router]);

  if (status === "loading") {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--canvas)" }}>
        <div style={{ color: "var(--muted)" }}>Loading...</div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "var(--canvas)" }}>
      {/* Sidebar + content layout */}
      <div style={{ display: "flex", minHeight: "100vh" }}>
        {/* Sidebar */}
        <aside style={{ width: 240, background: "var(--ink)", color: "white", padding: "32px 0", flexShrink: 0, display: "flex", flexDirection: "column" }}>
          <div style={{ padding: "0 24px 32px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg, #8550FF, #6E3EFF)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 900, fontSize: 14 }}>W</div>
              <span style={{ fontWeight: 800, fontSize: 16, letterSpacing: "-0.02em" }}>Wirestork</span>
            </Link>
          </div>
          <nav style={{ padding: "24px 12px", flex: 1 }}>
            {[
              { icon: "⊞", label: "Dashboard", href: "/client-dashboard", active: true },
              { icon: "📋", label: "My Orders", href: "/client-dashboard" },
              { icon: "🔍", label: "New Service", href: "/services" },
              { icon: "📄", label: "Documents", href: "/client-dashboard" },
              { icon: "💬", label: "Support", href: "/reach-us" },
            ].map((item) => (
              <Link key={item.label} href={item.href} style={{
                display: "flex", alignItems: "center", gap: 10, padding: "10px 12px",
                borderRadius: 8, fontSize: 14, fontWeight: 500, textDecoration: "none",
                color: item.active ? "white" : "rgba(255,255,255,0.55)",
                background: item.active ? "rgba(133,80,255,0.3)" : "transparent",
                marginBottom: 2, transition: "all 0.15s"
              }}>
                <span>{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </nav>
          <div style={{ padding: "16px 12px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            <button onClick={() => signOut({ callbackUrl: "/" })} style={{
              display: "flex", alignItems: "center", gap: 10, padding: "10px 12px",
              borderRadius: 8, fontSize: 14, color: "rgba(255,255,255,0.55)",
              background: "none", border: "none", cursor: "pointer", width: "100%"
            }}>
              <span>↩</span> Sign Out
            </button>
          </div>
        </aside>

        {/* Main content */}
        <main style={{ flex: 1, padding: 40, overflowY: "auto" }}>
          <div style={{ marginBottom: 32 }}>
            <div style={{ fontSize: 24, fontWeight: 800, color: "var(--ink)", marginBottom: 4 }}>
              Welcome back, {session?.user?.name?.split(" ")[0] ?? "there"} 👋
            </div>
            <div style={{ color: "var(--muted)", fontSize: 15 }}>Here's a summary of your activity.</div>
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 40 }}>
            {[
              { label: "Total Orders", value: "3", icon: "📋" },
              { label: "Completed", value: "2", icon: "✅" },
              { label: "In Progress", value: "1", icon: "⏳" },
            ].map((s) => (
              <div key={s.label} className="card" style={{ padding: 24 }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{s.icon}</div>
                <div style={{ fontSize: 32, fontWeight: 900, fontFamily: "Playfair Display, serif", color: "var(--brand)" }}>{s.value}</div>
                <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Recent orders */}
          <div className="card" style={{ padding: 28 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
              <div style={{ fontWeight: 700, fontSize: 18 }}>Recent Orders</div>
              <Link href="/services" className="btn btn-outline" style={{ padding: "8px 16px", fontSize: 13 }}>
                New Order +
              </Link>
            </div>
            <div>
              {mockOrders.map((o, i) => (
                <div key={o.id} style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "16px 0",
                  borderTop: i > 0 ? "1px solid var(--border)" : "none"
                }}>
                  <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: "var(--brand-dim)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--brand)", fontWeight: 700, fontSize: 13 }}>
                      {o.id.split("-")[1]}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 15 }}>{o.service}</div>
                      <div style={{ fontSize: 12, color: "var(--muted)" }}>{o.id} · {o.date}</div>
                    </div>
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: o.statusColor, background: `${o.statusColor}15`, padding: "4px 12px", borderRadius: 100 }}>
                    {o.status}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick actions */}
          <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            <Link href="/travel-ban-uae-check" className="card card-hover" style={{ padding: 24, textDecoration: "none", display: "block" }}>
              <div style={{ fontSize: 24, marginBottom: 8 }}>✈️</div>
              <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 4 }}>Check Travel Ban</div>
              <div style={{ color: "var(--muted)", fontSize: 13 }}>UAE or Saudi Arabia</div>
            </Link>
            <Link href="/online-lawyer-consultation" className="card card-hover" style={{ padding: 24, textDecoration: "none", display: "block" }}>
              <div style={{ fontSize: 24, marginBottom: 8 }}>⚖️</div>
              <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 4 }}>Talk to a Lawyer</div>
              <div style={{ color: "var(--muted)", fontSize: 13 }}>Within 4 hours</div>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
