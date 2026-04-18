// app/sitemap.ts
import type { MetadataRoute } from "next";
import { getAllPosts, getAllPages, getWCProducts } from "@/lib/wordpress/client";
import { products as localProducts } from "@/lib/products";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://wirestork.com";

// Slugs that should NOT be in the sitemap
const EXCLUDED_SLUGS = new Set([
  "checkout", "cart", "my-account", "account",
  "order-received", "order-pay", "sample-page",
]);

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  // Static marketing pages
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${SITE_URL}/lawyers-in-uae`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/reach-us`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];

  // Try to get live data from WP — fall back to local stubs gracefully
  const [wpPosts, wpPages, wcProducts] = await Promise.allSettled([
    getAllPosts(200),
    getAllPages(),
    getWCProducts(),
  ]);

  // Blog posts
  const postRoutes: MetadataRoute.Sitemap =
    wpPosts.status === "fulfilled" && wpPosts.value.length > 0
      ? wpPosts.value.map((p) => ({
          url: `${SITE_URL}/blog/${p.slug}`,
          lastModified: new Date(p.modified),
          changeFrequency: "monthly" as const,
          priority: 0.7,
        }))
      : [];

  // WP pages (excluding private/utility pages)
  const pageRoutes: MetadataRoute.Sitemap =
    wpPages.status === "fulfilled" && wpPages.value.length > 0
      ? wpPages.value
          .filter((p) => !EXCLUDED_SLUGS.has(p.slug))
          .map((p) => ({
            url: `${SITE_URL}/${p.slug}`,
            lastModified: new Date(p.modified),
            changeFrequency: "monthly" as const,
            priority: 0.7,
          }))
      : [];

  // Service/product pages — prefer WC, fall back to local list
  const productRoutes: MetadataRoute.Sitemap =
    wcProducts.status === "fulfilled" && wcProducts.value.length > 0
      ? wcProducts.value
          .filter((p) => !EXCLUDED_SLUGS.has(p.slug))
          .map((p) => ({
            url: `${SITE_URL}/${p.slug}`,
            lastModified: new Date(p.date_modified),
            changeFrequency: "monthly" as const,
            priority: 0.9,
          }))
      : localProducts.map((p) => ({
          url: `${SITE_URL}/${p.slug}`,
          lastModified: now,
          changeFrequency: "monthly" as const,
          priority: 0.9,
        }));

  // Deduplicate by URL (WC products may overlap WP pages)
  const seen = new Set<string>();
  const all = [...staticRoutes, ...productRoutes, ...postRoutes, ...pageRoutes];
  return all.filter((r) => {
    if (seen.has(r.url)) return false;
    seen.add(r.url);
    return true;
  });
}
