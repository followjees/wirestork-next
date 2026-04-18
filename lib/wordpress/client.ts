// lib/wordpress/client.ts
// Central data fetching layer — WP REST API + WooCommerce REST API
// Falls back gracefully when env vars are not set (build-time safety)

const WP_BASE = process.env.WORDPRESS_URL ?? "https://wirestork.com/wp-json";
const WC_BASE = process.env.WC_BASE_URL ?? "https://wirestork.com";
const WC_KEY = process.env.WC_CONSUMER_KEY ?? "";
const WC_SECRET = process.env.WC_CONSUMER_SECRET ?? "";

function wcAuthHeader(): string {
  if (!WC_KEY || !WC_SECRET) return "";
  return "Basic " + Buffer.from(`${WC_KEY}:${WC_SECRET}`).toString("base64");
}

async function wpFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const url = `${WP_BASE}${path}`;
  try {
    const res = await fetch(url, {
      ...init,
      headers: { "Content-Type": "application/json", ...init?.headers },
    });
    if (!res.ok) throw new Error(`WP ${res.status} ${url}`);
    return res.json();
  } catch (err) {
    console.error("[WP Client]", err);
    return [] as unknown as T;
  }
}

// ─── Types ─────────────────────────────────────────────────────────────────

export interface WPPost {
  id: number;
  slug: string;
  date: string;
  modified: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  categories: number[];
  _embedded?: {
    "wp:term"?: Array<Array<{ id: number; name: string; slug: string }>>;
    "wp:featuredmedia"?: Array<{ source_url: string; alt_text: string }>;
  };
  yoast_head_json?: {
    title?: string;
    description?: string;
    og_title?: string;
    og_description?: string;
    og_image?: Array<{ url: string; width: number; height: number }>;
    twitter_title?: string;
    twitter_description?: string;
    schema?: { "@graph": unknown[] };
  };
}

export interface WPPage {
  id: number;
  slug: string;
  date: string;
  modified: string;
  title: { rendered: string };
  content: { rendered: string };
  yoast_head_json?: WPPost["yoast_head_json"];
}

export interface WCProduct {
  id: number;
  name: string;
  slug: string;
  status: string;
  description: string;
  short_description: string;
  price: string;
  regular_price: string;
  sale_price: string;
  date_modified: string;
  categories: Array<{ id: number; name: string; slug: string }>;
  images: Array<{ src: string; alt: string }>;
  meta_data: Array<{ key: string; value: unknown }>;
}

// ─── Posts ─────────────────────────────────────────────────────────────────

export async function getAllPosts(perPage = 100): Promise<WPPost[]> {
  return wpFetch<WPPost[]>(
    `/wp/v2/posts?per_page=${perPage}&_embed=true&status=publish`,
    { next: { revalidate: 300 } }
  );
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const posts = await wpFetch<WPPost[]>(
    `/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed=true`,
    { next: { revalidate: 60 } }
  );
  return posts[0] ?? null;
}

// ─── Pages ─────────────────────────────────────────────────────────────────

export async function getAllPages(): Promise<WPPage[]> {
  return wpFetch<WPPage[]>(
    `/wp/v2/pages?per_page=100&_embed=true&status=publish`,
    { next: { revalidate: 3600 } }
  );
}

export async function getPageBySlug(slug: string): Promise<WPPage | null> {
  const pages = await wpFetch<WPPage[]>(
    `/wp/v2/pages?slug=${encodeURIComponent(slug)}&_embed=true`,
    { next: { revalidate: 3600 } }
  );
  return pages[0] ?? null;
}

// ─── WooCommerce Products ───────────────────────────────────────────────────

export async function getWCProducts(perPage = 100): Promise<WCProduct[]> {
  const auth = wcAuthHeader();
  if (!auth) return [];
  try {
    const res = await fetch(
      `${WC_BASE}/wp-json/wc/v3/products?per_page=${perPage}&status=publish`,
      { headers: { Authorization: auth }, next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export async function getWCProductBySlug(slug: string): Promise<WCProduct | null> {
  const auth = wcAuthHeader();
  if (!auth) return null;
  try {
    const res = await fetch(
      `${WC_BASE}/wp-json/wc/v3/products?slug=${encodeURIComponent(slug)}`,
      { headers: { Authorization: auth }, next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const products: WCProduct[] = await res.json();
    return products[0] ?? null;
  } catch {
    return null;
  }
}

// ─── WooCommerce Orders (server-side, no-store) ─────────────────────────────

export interface WCOrderData {
  payment_method: string;
  payment_method_title: string;
  set_paid: boolean;
  billing: {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    country: string;
  };
  line_items: Array<{ product_id: number; quantity: number }>;
  meta_data?: Array<{ key: string; value: string }>;
}

export async function createWCOrder(data: WCOrderData): Promise<unknown> {
  const auth = wcAuthHeader();
  if (!auth) throw new Error("WooCommerce credentials not configured");
  const res = await fetch(`${WC_BASE}/wp-json/wc/v3/orders`, {
    method: "POST",
    headers: { Authorization: auth, "Content-Type": "application/json" },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`WC order error: ${res.status} ${err}`);
  }
  return res.json();
}
