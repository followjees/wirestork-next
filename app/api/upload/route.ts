// app/api/upload/route.ts — handles file uploads to Supabase Storage
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file     = formData.get("file") as File | null;
    const orderId  = formData.get("orderId") as string | null;
    const email    = formData.get("email") as string | null;
    const serviceSlug = formData.get("serviceSlug") as string | null;

    if (!file || !orderId || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { supabaseAdmin } = await import("@/lib/supabase");
    const db = supabaseAdmin();

    // Sanitise file name
    const ext = file.name.split(".").pop() ?? "bin";
    const safeName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
    const filePath = `${orderId}/${safeName}`;

    // Upload to Supabase Storage bucket "order-documents" (create in Supabase dashboard)
    const bytes = await file.arrayBuffer();
    const { error: uploadError } = await db.storage
      .from("order-documents")
      .upload(filePath, bytes, {
        contentType: file.type || "application/octet-stream",
        upsert: false,
      });

    if (uploadError) {
      console.error("[Upload] Storage error:", uploadError);
      return NextResponse.json({ error: uploadError.message }, { status: 500 });
    }

    // Record in documents table
    const { data: doc, error: dbError } = await db.from("documents").insert({
      order_id: orderId,
      user_email: email,
      service_slug: serviceSlug ?? "",
      file_name: file.name,
      file_path: filePath,
      file_size_bytes: file.size,
      file_type: file.type || `application/${ext}`,
    }).select().single();

    if (dbError) {
      console.error("[Upload] DB error:", dbError);
      return NextResponse.json({ error: dbError.message }, { status: 500 });
    }

    // Update order status to processing if it was still 'received'
    await db.from("orders")
      .update({ order_status: "processing", updated_at: new Date().toISOString() })
      .eq("id", orderId)
      .eq("order_status", "received");

    console.log("[Upload] File saved:", filePath, "for order:", orderId);
    return NextResponse.json({ success: true, document: doc });
  } catch (err) {
    console.error("[Upload API]", err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
