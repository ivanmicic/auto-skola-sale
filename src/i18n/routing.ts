import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["sr", "en"],
  defaultLocale: "sr",
  localePrefix: "always",
  pathnames: {
    "/": "/",
    "/obuka-b-kategorija": {
      sr: "/obuka-b-kategorija",
      en: "/b-category-training",
    },
    "/kondicioni-casovi": {
      sr: "/kondicioni-casovi",
      en: "/refresher-lessons",
    },
    "/politika-privatnosti": {
      sr: "/politika-privatnosti",
      en: "/privacy-policy",
    },
    "/uslovi-koriscenja": {
      sr: "/uslovi-koriscenja",
      en: "/terms-of-use",
    },
  },
});

export type Locale = (typeof routing.locales)[number];
export type Pathnames = keyof typeof routing.pathnames;
