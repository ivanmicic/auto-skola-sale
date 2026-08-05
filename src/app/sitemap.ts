import type { MetadataRoute } from "next";
import { SITE } from "@/lib/business";

const routes = [
  { sr: "", en: "" },
  { sr: "/obuka-b-kategorija", en: "/b-category-training" },
  { sr: "/kondicioni-casovi", en: "/refresher-lessons" },
  { sr: "/politika-privatnosti", en: "/privacy-policy" },
  { sr: "/uslovi-koriscenja", en: "/terms-of-use" },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url.replace(/\/$/, "");

  return routes.map((route) => {
    const srUrl = `${base}/sr${route.sr}`;
    const enUrl = `${base}/en${route.en}`;
    return {
      url: srUrl,
      lastModified: new Date(),
      alternates: {
        languages: {
          sr: srUrl,
          en: enUrl,
          "x-default": srUrl,
        },
      },
    };
  });
}
