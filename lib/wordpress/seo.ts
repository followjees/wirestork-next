// lib/wordpress/seo.ts
import type { Metadata } from "next";
import type { WPPost, WPPage, WCProduct } from "./client";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://wirestork.com";

export function postToMetadata(post: WPPost): Metadata {
  const y = post.yoast_head_json;
  const title = y?.title ?? post.title.rendered;
  const description = y?.description ?? stripHtml(post.excerpt.rendered);
  const ogImage = y?.og_image?.[0]?.url;

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: {
      title: y?.og_title ?? title,
      description: y?.og_description ?? description,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.modified,
      images: ogImage ? [{ url: ogImage }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: y?.twitter_title ?? title,
      description: y?.twitter_description ?? description,
      images: ogImage ? [ogImage] : [],
    },
  };
}

export function pageToMetadata(page: WPPage, slug: string): Metadata {
  const y = page.yoast_head_json;
  const title = y?.title ?? page.title.rendered;
  const description = y?.description ?? "";
  const ogImage = y?.og_image?.[0]?.url;

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/${slug}` },
    openGraph: {
      title: y?.og_title ?? title,
      description: y?.og_description ?? description,
      type: "website",
      images: ogImage ? [{ url: ogImage }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: y?.twitter_title ?? title,
      description: y?.twitter_description ?? description,
    },
  };
}

export function productToMetadata(product: WCProduct): Metadata {
  const description = stripHtml(product.short_description || product.description).slice(0, 160);
  const title = `${product.name} | Wirestork`;
  const ogImage = product.images?.[0]?.src;

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/${product.slug}` },
    openGraph: {
      title,
      description,
      type: "website",
      images: ogImage ? [{ url: ogImage }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

// ─── JSON-LD helpers ─────────────────────────────────────────────────────────

export function buildServiceSchema(product: WCProduct): object {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: product.name,
    description: stripHtml(product.description),
    provider: {
      "@type": "Organization",
      name: "Wirestork",
      url: SITE_URL,
      areaServed: ["AE", "SA", "KW", "BH", "QA", "OM"],
    },
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "AED",
      availability: "https://schema.org/InStock",
    },
  };
}

export function buildArticleSchema(post: WPPost): object {
  const categories =
    post._embedded?.["wp:term"]?.[0]?.map((t) => t.name) ?? [];
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title.rendered,
    datePublished: post.date,
    dateModified: post.modified,
    author: { "@type": "Organization", name: "Wirestork" },
    publisher: {
      "@type": "Organization",
      name: "Wirestork",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    articleSection: categories.join(", "),
    url: `${SITE_URL}/blog/${post.slug}`,
  };
}

export function buildOrganizationSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Wirestork",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      "Legal intelligence for the UAE and GCC. Travel ban checks, background verifications, legal consultations.",
    areaServed: ["AE", "SA", "KW", "BH", "QA", "OM"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["English", "Arabic"],
    },
  };
}

// ─── Util ─────────────────────────────────────────────────────────────────────

export function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, "").trim();
}
