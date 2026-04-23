// app/api/orders/route.ts — fetch orders by email (service role, no auth required for now)
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get("email");
  if (!email) return NextResponse.json([], { status: 400 });

  try {
    const { supabaseAdmin } = await import("@/lib/supabase");
    const db = supabaseAdmin();
    const { data, error } = await db
      .from("orders")
      .select("id,service_slug,service_title,service_category,amount_aed,payment_status,order_status,notes,result_url,created_at")
      .eq("user_email", email.toLowerCase().trim())
      .order("created_at", { ascending: false });

    if (error) throw error;
    return NextResponse.json(data ?? []);
  } catch (err) {
    console.error("[Orders API]", err);
    return NextResponse.json([], { status: 500 });
  }
}
