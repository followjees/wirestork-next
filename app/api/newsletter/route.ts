// app/api/newsletter/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    const email_lower = email.toLowerCase().trim();

    // ── Save to Supabase ────────────────────────────────────────────────────
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (supabaseUrl && supabaseKey) {
      const { createClient } = await import("@supabase/supabase-js");
      const supabase = createClient(supabaseUrl, supabaseKey);

      const { error } = await supabase
        .from("newsletter_subscribers")
        .upsert({ email: email_lower, subscribed_at: new Date().toISOString(), source: "blog" }, { onConflict: "email" });

      if (error && error.code !== "23505") { // ignore duplicate key
        console.error("[Newsletter] Supabase error:", error);
      }
    }

    // ── Send confirmation email via Resend ──────────────────────────────────
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const { Resend } = await import("resend");
      const resend = new Resend(resendKey);

      // Confirmation to subscriber
      await resend.emails.send({
        from: "Wirestork Legal Insights <noreply@wirestork.com>",
        to: [email_lower],
        replyTo: "care@wirestork.com",
        subject: "You're subscribed to Wirestork Legal Intelligence",
        html: `<!DOCTYPE html>
<html><head><meta charset="utf-8"/></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <div style="max-width:560px;margin:32px auto;background:#fff;border-radius:16px;overflow:hidden;border:1px solid #e5e7eb;">
    <div style="background:#0708E4;padding:28px 32px;">
      <div style="font-family:Georgia,serif;font-style:italic;font-weight:900;font-size:26px;color:#fff;letter-spacing:-0.03em;">Wirestork.</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.6);margin-top:4px;letter-spacing:0.1em;text-transform:uppercase;">Legal Intelligence Newsletter</div>
    </div>
    <div style="padding:36px 32px;">
      <h2 style="margin:0 0 12px;font-size:22px;color:#111;font-weight:700;">You're in. ✓</h2>
      <p style="color:#6b7280;font-size:15px;line-height:1.7;margin:0 0 20px;">
        Thanks for subscribing to Wirestork Legal Insights. You'll now receive weekly updates on:
      </p>
      <ul style="color:#374151;font-size:14px;line-height:1.9;padding-left:20px;margin:0 0 24px;">
        <li>UAE & GCC travel ban news and updates</li>
        <li>Employment law changes and PDPL compliance</li>
        <li>Background screening regulations across the Gulf</li>
        <li>Debt collection and civil law developments</li>
        <li>Legal tips for businesses operating in the UAE</li>
      </ul>
      <a href="https://wirestork.com/blog" style="display:inline-block;background:#0708E4;color:#fff;padding:12px 24px;border-radius:10px;font-weight:700;font-size:14px;text-decoration:none;">
        Read the Latest Articles →
      </a>
    </div>
    <div style="padding:16px 32px;background:#f9fafb;border-top:1px solid #e5e7eb;font-size:12px;color:#9ca3af;display:flex;justify-content:space-between;">
      <span>Wirestork · care@wirestork.com</span>
      <a href="https://wirestork.com/blog?unsubscribe=${email_lower}" style="color:#9ca3af;">Unsubscribe</a>
    </div>
  </div>
</body></html>`,
      }).catch((e) => console.error("[Newsletter] Email failed:", e));

      // Internal notification
      await resend.emails.send({
        from: "Wirestork Subscribers <orders@wirestork.com>",
        to: ["care@wirestork.com"],
        subject: `[Newsletter] New subscriber: ${email_lower}`,
        html: `<p>New newsletter subscriber: <strong>${email_lower}</strong><br/>Source: Blog post<br/>Time: ${new Date().toISOString()}</p>`,
      }).catch(() => {});
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Newsletter API]", err);
    return NextResponse.json({ error: "Subscription failed" }, { status: 500 });
  }
}
