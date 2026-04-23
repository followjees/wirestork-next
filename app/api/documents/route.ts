// app/api/documents/route.ts — fetch documents by email
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get("email");
  if (!email) return NextResponse.json([], { status: 400 });

  try {
    const { supabaseAdmin } = await import("@/lib/supabase");
    const db = supabaseAdmin();
    const { data, error } = await db
      .from("documents")
      .select("id,order_id,file_name,file_size_bytes,file_type,upload_status,uploaded_at")
      .eq("user_email", email.toLowerCase().trim())
      .order("uploaded_at", { ascending: false });

    if (error) throw error;
    return NextResponse.json(data ?? []);
  } catch (err) {
    console.error("[Documents API]", err);
    return NextResponse.json([], { status: 500 });
  }
}
