/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://auto-skola-sale.rs",
  generateRobotsTxt: false,
  // App Router sitemap.ts is the source of truth (includes hreflang).
  // Keep next-sitemap available if you later prefer static postbuild generation.
  exclude: ["/*"],
};
