import type { MetadataRoute } from "next";
import { locales, siteUrl } from "@/lib/site";

/** /sitemap.xml: both language versions, each one telling Google about the other. */
export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((locale) => [locale, `${siteUrl}/${locale}`]));

  return locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified: new Date(),
    alternates: { languages },
  }));
}
