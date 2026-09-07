export const BUSINESS = {
  name: "Auto škola Sale",
  legalName: "Auto škola Sale d.o.o. Kostolac",
  owner: "Saša Anđelković",
  address: {
    street: "Rudarska bb",
    city: "Kostolac",
    municipality: "Požarevac",
    country: "Srbija",
    countryCode: "RS",
    postalCode: "12208",
  },
  /** Display format matching shop front */
  phoneDisplay: "+381 63 826 8876",
  phoneDisplayLocal: "063/82-68-876",
  /** E.164 for tel: links and schema */
  phoneTel: "+381638268876",
  pib: "107504491",
  mb: "20816520",
  activityCode: "8553",
  /** From shop front — confirm with owner */
  openingHoursDisplay: {
    sr: "Pon–Pet: 8–16h · Sub–Ned: neradno",
    en: "Mon–Fri: 8am–4pm · Sat–Sun: closed",
  },
  openingHoursSchema: ["Mo-Fr 08:00-16:00"],
  areaServed: ["Kostolac", "Požarevac"],
  priceRange: "$$",
  email: "", // TODO: confirm with owner
  social: {
    // TODO: replace with real profiles when available
    facebook: "",
    instagram: "",
    tiktok: "",
  },
  viber: "viber://chat?number=%2B381638268876",
  whatsapp: "https://wa.me/381638268876",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Rudarska+bb,+Kostolac,+Serbia&output=embed",
  mapSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=Rudarska+bb+Kostolac+Serbia",
} as const;

export const SITE = {
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://auto-skola-sale.rs",
  gaId: process.env.NEXT_PUBLIC_GA_ID,
  googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  /** Preview stays out of search until launch. Set to "true" when going live. */
  allowIndexing: process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true",
} as const;

export function isAnalyticsEnabled(gaId = SITE.gaId) {
  return Boolean(gaId && gaId !== "G-XXXXXXX");
}

export function fullAddress() {
  const { street, city, municipality, country } = BUSINESS.address;
  return `${street}, ${city}, opština ${municipality}, ${country}`;
}

export function fullAddressEn() {
  const { street, city, municipality, country } = BUSINESS.address;
  return `${street}, ${city}, ${municipality} municipality, ${country}`;
}
