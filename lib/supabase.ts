import { createClient } from "@supabase/supabase-js";

const url  = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const svc  = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Anon client — for client-side (respects RLS)
export const supabase = createClient(url, anon);

// Service role client — for API routes only (bypasses RLS)
export const supabaseAdmin = () => createClient(url, svc, {
  auth: { persistSession: false },
});

export type Order = {
  id: string;
  user_email: string;
  user_name: string | null;
  user_phone: string | null;
  user_nationality: string | null;
  service_slug: string;
  service_title: string;
  service_category: string | null;
  amount_aed: number | null;
  notes: string | null;
  payment_status: string;
  stripe_payment_intent: string | null;
  order_status: string;
  result_url: string | null;
  created_at: string;
  updated_at: string;
};

export type Document = {
  id: string;
  order_id: string;
  user_email: string;
  service_slug: string;
  file_name: string;
  file_path: string;
  file_size_bytes: number | null;
  file_type: string | null;
  upload_status: string;
  uploaded_at: string;
};
