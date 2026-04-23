"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

/* ─── TYPES ──────────────────────────────────────────────────── */
type Order = {
  id: string;
  service_slug: string;
  service_title: string;
  service_category: string | null;
  amount_aed: number | null;
  payment_status: string;
  order_status: string;
  notes: string | null;
  result_url: string | null;
  created_at: string;
};
type DocFile = {
  id: string;
  order_id: string;
  file_name: string;
  file_size_bytes: number | null;
  file_type: string | null;
  upload_status: string;
  uploaded_at: string;
};
type User = { email: string; name?: string };

/* ─── CONSTANTS ──────────────────────────────────────────────── */
const BLUE      = "#0708E4";
const BTN_GRAD  = "linear-gradient(135deg, #0708E4 0%, #6366F1 100%)";
const GLASS: React.CSSProperties = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 16,
};

const STATUS_COLORS: Record<string, { bg: string; border: string; text: string; label: string }> = {
  received:   { bg: "rgba(99,102,241,0.12)", border: "rgba(99,102,241,0.3)", text: "#818CF8", label: "Received" },
  processing: { bg: "rgba(245,158,11,0.12)", border: "rgba(245,158,11,0.3)", text: "#FCD34D", label: "Processing" },
  completed:  { bg: "rgba(16,185,129,0.12)", border: "rgba(16,185,129,0.3)", text: "#34D399", label: "Completed" },
  cancelled:  { bg: "rgba(239,68,68,0.12)",  border: "rgba(239,68,68,0.3)",  text: "#FCA5A5", label: "Cancelled" },
};
const PAY_COLORS: Record<string, { text: string; label: string }> = {
  pending: { text: "#FCD34D", label: "Pending Payment" },
  paid:    { text: "#34D399", label: "Paid" },
  manual:  { text: "#818CF8", label: "Manual" },
  failed:  { text: "#FCA5A5", label: "Failed" },
};

const SERVICE_ICONS: Record<string, string> = {
  "travel-ban-uae-check":             "✈️",
  "labor-ban-check":                  "⚖️",
  "uae-court-police-case-checking":   "🏛️",
  "check-travel-ban-in-saudi-arabia": "🇸🇦",
  "online-lawyer-consultation":       "💬",
  "background-checks-gcc":            "🔍",
  "client-credit-check":              "💳",
  "legal-document-review":            "📄",
  "remove-travel-ban-in-uae":         "🔓",
  "employee-check":                   "👤",
  "debt-collection-agency":           "💰",
  "uae-business-formation":           "🏢",
};

/* ─── UPLOAD ZONE ────────────────────────────────────────────── */
function UploadZone({ order, userEmail, onUploaded }: {
  order: Order; userEmail: string; onUploaded: () => void;
}) {
  const [dragging, setDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const upload = useCallback(async (file: File) => {
    setUploading(true); setError(null); setSuccess(null);
    try {
      const fd = new FormData();
      fd.append("file", file);
      fd.append("orderId", order.id);
      fd.append("email", userEmail);
      fd.append("serviceSlug", order.service_slug);
      const res = await fetch("/api/upload", { method: "POST", body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Upload failed");
      setSuccess(`${file.name} uploaded successfully`);
      onUploaded();
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  }, [order.id, order.service_slug, userEmail, onUploaded]);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault(); setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) upload(file);
  };

  return (
    <div style={{ marginTop: 14 }}>
      <div
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        style={{
          border: `2px dashed ${dragging ? BLUE : "rgba(255,255,255,0.12)"}`,
          borderRadius: 10, padding: "16px 20px", textAlign: "center", cursor: "pointer",
          background: dragging ? "rgba(7,8,228,0.06)" : "transparent",
          transition: "all 0.15s",
          opacity: uploading ? 0.6 : 1,
        }}
      >
        <input ref={inputRef} type="file" style={{ display: "none" }}
          accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.heic"
          onChange={(e) => { if (e.target.files?.[0]) upload(e.target.files[0]); }} />
        {uploading ? (
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>⏳ Uploading...</div>
        ) : (
          <>
            <div style={{ fontSize: 20, marginBottom: 6 }}>📎</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.5 }}>
              <span style={{ color: "rgba(255,255,255,0.65)", fontWeight: 600 }}>Drag & drop</span> or click to attach<br />
              <span style={{ fontSize: 11 }}>PDF, DOCX, JPG, PNG · Max 20MB</span>
            </div>
          </>
        )}
      </div>
      {error && <div style={{ marginTop: 8, fontSize: 12, color: "#FCA5A5" }}>⚠ {error}</div>}
      {success && <div style={{ marginTop: 8, fontSize: 12, color: "#34D399" }}>✓ {success}</div>}
    </div>
  );
}

/* ─── ORDER CARD ─────────────────────────────────────────────── */
function OrderCard({ order, userEmail, docs, onRefresh }: {
  order: Order; userEmail: string; docs: DocFile[]; onRefresh: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const st = STATUS_COLORS[order.order_status] ?? STATUS_COLORS.received;
  const pt = PAY_COLORS[order.payment_status] ?? PAY_COLORS.pending;
  const icon = SERVICE_ICONS[order.service_slug] ?? "📋";
  const orderDocs = docs.filter(d => d.order_id === order.id);
  const date = new Date(order.created_at).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

  return (
    <div style={{ ...GLASS, overflow: "hidden", borderRadius: 16, marginBottom: 12 }}>
      {/* Header row */}
      <div
        onClick={() => setExpanded(x => !x)}
        style={{ padding: "20px 24px", cursor: "pointer", display: "flex", alignItems: "center", gap: 16 }}
      >
        <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>
          {icon}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: 700, fontSize: 15, color: "#fff", marginBottom: 3 }}>{order.service_title}</div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", display: "flex", gap: 12 }}>
            <span>{order.id}</span>
            <span>·</span>
            <span>{date}</span>
            {order.amount_aed && <><span>·</span><span>AED {order.amount_aed.toLocaleString()}</span></>}
          </div>
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center", flexShrink: 0 }}>
          <span style={{ fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 100, background: st.bg, border: `1px solid ${st.border}`, color: st.text }}>
            {st.label}
          </span>
          <span style={{ fontSize: 11, fontWeight: 700, color: pt.text, opacity: 0.8 }}>{pt.label}</span>
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 14, marginLeft: 4, transform: expanded ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>▾</span>
        </div>
      </div>

      {/* Expanded body */}
      {expanded && (
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "20px 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {/* Left: details */}
            <div>
              <div style={{ fontSize: 10, fontWeight: 900, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)", marginBottom: 12 }}>Order Details</div>
              {[
                ["Service", order.service_title],
                ["Category", order.service_category ?? "—"],
                ["Status", st.label],
                ["Payment", pt.label],
                ["Notes", order.notes ?? "—"],
              ].map(([k, v]) => (
                <div key={k} style={{ display: "flex", gap: 12, marginBottom: 8 }}>
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", width: 72, flexShrink: 0 }}>{k}</span>
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", flex: 1 }}>{v}</span>
                </div>
              ))}
              {order.result_url && (
                <a href={order.result_url} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 12, background: BTN_GRAD, color: "#fff", borderRadius: 8, padding: "8px 16px", fontSize: 12, fontWeight: 700, textDecoration: "none" }}>
                  📥 Download Report
                </a>
              )}
            </div>

            {/* Right: files */}
            <div>
              <div style={{ fontSize: 10, fontWeight: 900, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)", marginBottom: 12 }}>
                Documents ({orderDocs.length})
              </div>
              {orderDocs.length > 0 && (
                <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 12 }}>
                  {orderDocs.map((doc) => (
                    <div key={doc.id} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 8, padding: "8px 12px", display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ fontSize: 16 }}>📄</span>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 12, color: "#fff", fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{doc.file_name}</div>
                        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)" }}>
                          {doc.file_size_bytes ? `${(doc.file_size_bytes / 1024).toFixed(0)} KB · ` : ""}
                          {new Date(doc.uploaded_at).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}
                        </div>
                      </div>
                      <span style={{ fontSize: 10, color: "#34D399", fontWeight: 700 }}>✓</span>
                    </div>
                  ))}
                </div>
              )}
              {/* Upload zone — always show unless order is completed/cancelled */}
              {!["completed", "cancelled"].includes(order.order_status) && (
                <UploadZone order={order} userEmail={userEmail} onUploaded={onRefresh} />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── MAIN DASHBOARD ─────────────────────────────────────────── */
export default function DashboardPage() {
  const searchParams = useSearchParams();
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState<Order[]>([]);
  const [docs, setDocs] = useState<DocFile[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const [successOrder, setSuccessOrder] = useState<string | null>(null);

  const newOrderId = searchParams.get("order");
  const status     = searchParams.get("status");

  /* ── Auth: simple email-based session stored in localStorage ── */
  useEffect(() => {
    const stored = localStorage.getItem("ws_user");
    if (stored) {
      const u = JSON.parse(stored) as User;
      setUser(u);
      setEmail(u.email);
    }
    setLoading(false);
    if (status === "success" && newOrderId) setSuccessOrder(newOrderId);
  }, [newOrderId, status]);

  /* ── Fetch orders + docs from Supabase ── */
  const fetchData = useCallback(async (userEmail: string) => {
    try {
      const [ordRes, docRes] = await Promise.all([
        fetch(`/api/orders?email=${encodeURIComponent(userEmail)}`),
        fetch(`/api/documents?email=${encodeURIComponent(userEmail)}`),
      ]);
      if (ordRes.ok) setOrders(await ordRes.json());
      if (docRes.ok) setDocs(await docRes.json());
    } catch (e) {
      console.error("Fetch error", e);
    }
  }, []);

  useEffect(() => {
    if (user?.email) fetchData(user.email);
  }, [user, fetchData]);

  /* ── Login form ── */
  const [loginEmail, setLoginEmail] = useState(newOrderId ? "" : "");
  const [loginName, setLoginName]   = useState("");
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginEmail) return;
    const u: User = { email: loginEmail, name: loginName || loginEmail.split("@")[0] };
    localStorage.setItem("ws_user", JSON.stringify(u));
    setUser(u);
    setEmail(loginEmail);
    fetchData(loginEmail);
  };

  const handleLogout = () => {
    localStorage.removeItem("ws_user");
    setUser(null); setOrders([]); setDocs([]);
  };

  /* ── Derived stats ── */
  const total     = orders.length;
  const active    = orders.filter(o => !["completed","cancelled"].includes(o.order_status)).length;
  const completed = orders.filter(o => o.order_status === "completed").length;
  const pending   = orders.filter(o => o.payment_status === "pending").length;

  const filtered = filter === "all" ? orders
    : filter === "active"    ? orders.filter(o => !["completed","cancelled"].includes(o.order_status))
    : orders.filter(o => o.order_status === "completed");

  /* ── Loading ── */
  if (loading) return (
    <div style={{ minHeight: "100vh", background: "#000", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 14 }}>Loading...</div>
    </div>
  );

  /* ── Login screen ── */
  if (!user) return (
    <div style={{ minHeight: "100vh", background: "#000", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ width: "100%", maxWidth: 440 }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <Link href="/" style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 28, color: "#fff", textDecoration: "none" }}>
            Wirestork<span style={{ color: BLUE }}>.</span>
          </Link>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 32, marginTop: 24, marginBottom: 8, letterSpacing: "-0.03em" }}>
            Client Dashboard
          </h1>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>
            Enter the email address you used when placing your order to view your orders and upload documents.
          </p>
          {successOrder && (
            <div style={{ marginTop: 16, background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: 10, padding: "12px 16px", fontSize: 13, color: "#34D399" }}>
              ✓ Payment received! Order <strong>{successOrder}</strong> confirmed. Sign in below to upload your documents.
            </div>
          )}
        </div>
        <form onSubmit={handleLogin} style={{ ...GLASS, padding: 32, borderRadius: 20 }}>
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: "block", fontSize: 10, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 8 }}>Your Name</label>
            <input type="text" placeholder="Full name (optional)" value={loginName} onChange={e => setLoginName(e.target.value)}
              style={{ width: "100%", padding: "12px 14px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, color: "#fff", fontSize: 14, outline: "none", fontFamily: "inherit", boxSizing: "border-box" }} />
          </div>
          <div style={{ marginBottom: 24 }}>
            <label style={{ display: "block", fontSize: 10, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 8 }}>Email Address *</label>
            <input type="email" required placeholder="The email used for your order" value={loginEmail} onChange={e => setLoginEmail(e.target.value)}
              style={{ width: "100%", padding: "12px 14px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, color: "#fff", fontSize: 14, outline: "none", fontFamily: "inherit", boxSizing: "border-box" }} />
          </div>
          <button type="submit" style={{ width: "100%", background: BTN_GRAD, color: "#fff", border: "none", borderRadius: 12, padding: 14, fontWeight: 900, fontSize: 15, cursor: "pointer", fontFamily: "inherit" }}>
            Access My Orders →
          </button>
          <p style={{ textAlign: "center", fontSize: 12, color: "rgba(255,255,255,0.25)", marginTop: 14, lineHeight: 1.6 }}>
            No password needed. We match your email to your orders.
          </p>
        </form>
        <p style={{ textAlign: "center", fontSize: 13, color: "rgba(255,255,255,0.3)", marginTop: 24 }}>
          New order? <Link href="/services" style={{ color: BLUE }}>Browse services →</Link>
        </p>
      </div>
    </div>
  );

  /* ── Main dashboard ── */
  return (
    <div style={{ minHeight: "100vh", background: "#000", color: "#fff", fontFamily: "'Outfit', sans-serif" }}>

      {/* Top bar */}
      <div style={{ background: "rgba(0,0,0,0.9)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "14px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 68, zIndex: 50, backdropFilter: "blur(12px)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <Link href="/" style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 20, color: "#fff", textDecoration: "none" }}>
            Wirestork<span style={{ color: BLUE }}>.</span>
          </Link>
          <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
          <span style={{ fontSize: 12, fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>Client Portal</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>{user.name ?? user.email}</span>
          <Link href="/services" style={{ background: BTN_GRAD, color: "#fff", borderRadius: 8, padding: "8px 16px", fontSize: 12, fontWeight: 900, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none" }}>
            + New Order
          </Link>
          <button onClick={handleLogout} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.45)", borderRadius: 8, padding: "8px 14px", fontSize: 12, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>
            Sign Out
          </button>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 32px" }}>

        {/* Success banner */}
        {successOrder && (
          <div style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.25)", borderRadius: 14, padding: "16px 22px", marginBottom: 32, display: "flex", alignItems: "center", gap: 14 }}>
            <span style={{ fontSize: 24 }}>✅</span>
            <div>
              <div style={{ fontWeight: 700, fontSize: 15, color: "#34D399", marginBottom: 3 }}>Payment confirmed — Order {successOrder}</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>Expand the order below to upload your supporting documents. We&apos;ll begin processing immediately.</div>
            </div>
          </div>
        )}

        {/* Welcome + stats */}
        <div style={{ marginBottom: 36 }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(28px, 4vw, 44px)", letterSpacing: "-0.03em", marginBottom: 4 }}>
            Welcome back{user.name ? `, ${user.name.split(" ")[0]}` : ""}.
          </h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.35)" }}>{user.email}</p>
        </div>

        {/* Stats row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 40 }}>
          {[
            { val: total,     label: "Total Orders",     accent: BLUE },
            { val: active,    label: "In Progress",      accent: "#F59E0B" },
            { val: completed, label: "Completed",        accent: "#10B981" },
            { val: pending,   label: "Awaiting Payment", accent: "#818CF8" },
          ].map(({ val, label, accent }) => (
            <div key={label} style={{ ...GLASS, padding: "22px 22px" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 900, fontSize: 44, color: accent, lineHeight: 1, marginBottom: 8 }}>{val}</div>
              <div style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Orders section */}
        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
            <h2 style={{ fontWeight: 900, fontSize: 16, letterSpacing: "0.02em", color: "#fff" }}>Your Orders</h2>
            <div style={{ display: "flex", gap: 6 }}>
              {(["all", "active", "completed"] as const).map((f) => (
                <button key={f} onClick={() => setFilter(f)}
                  style={{ padding: "6px 16px", borderRadius: 100, border: filter === f ? `1px solid ${BLUE}` : "1px solid rgba(255,255,255,0.08)", background: filter === f ? "rgba(7,8,228,0.15)" : "transparent", color: filter === f ? "#fff" : "rgba(255,255,255,0.4)", fontSize: 12, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", textTransform: "capitalize" }}>
                  {f}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div style={{ ...GLASS, padding: "60px 32px", textAlign: "center", borderRadius: 20 }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>📋</div>
              <div style={{ fontWeight: 700, fontSize: 18, color: "#fff", marginBottom: 8 }}>
                {filter === "all" ? "No orders yet" : `No ${filter} orders`}
              </div>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.35)", marginBottom: 28 }}>
                {filter === "all" ? "Place your first order to get started." : `You don't have any ${filter} orders.`}
              </p>
              <Link href="/services" style={{ background: BTN_GRAD, color: "#fff", borderRadius: 10, padding: "12px 24px", fontSize: 13, fontWeight: 900, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none" }}>
                Browse Services →
              </Link>
            </div>
          ) : (
            <div>
              {filtered.map(order => (
                <OrderCard
                  key={order.id}
                  order={order}
                  userEmail={user.email}
                  docs={docs}
                  onRefresh={() => fetchData(user.email)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Help strip */}
        <div style={{ marginTop: 48, ...GLASS, padding: "20px 28px", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, flexWrap: "wrap" }}>
          <div style={{ fontSize: 14, color: "rgba(255,255,255,0.45)" }}>
            Need help with your order? Quote your order ID and email us.
          </div>
          <a href="mailto:care@wirestork.com" style={{ color: BLUE, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
            care@wirestork.com →
          </a>
        </div>
      </div>
    </div>
  );
}
