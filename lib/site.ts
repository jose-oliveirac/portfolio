/**
 * The site's public address. On Vercel, VERCEL_PROJECT_PRODUCTION_URL holds the
 * production domain (e.g. "portfolio-xyz.vercel.app"), so links in the sitemap,
 * the share image and the canonical tags always point to the live site.
 * Set NEXT_PUBLIC_SITE_URL to override it (e.g. after buying a custom domain).
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const locales = ["pt", "en"] as const;
