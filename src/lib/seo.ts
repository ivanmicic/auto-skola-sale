import { BUSINESS, SITE, fullAddress, fullAddressEn } from "./business";
import type { Locale } from "@/i18n/routing";

export function absoluteUrl(path = "") {
  const base = SITE.url.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

export function localePath(locale: Locale, path = "") {
  const clean = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${clean}`;
}

export function buildAlternates(locale: Locale, pathSr: string, pathEn: string) {
  const sr = absoluteUrl(localePath("sr", pathSr));
  const en = absoluteUrl(localePath("en", pathEn));
  return {
    canonical: locale === "sr" ? sr : en,
    languages: {
      sr,
      en,
      "x-default": sr,
    },
  };
}

export function drivingSchoolJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "DrivingSchool",
    "@id": `${SITE.url}/#drivingschool`,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    url: SITE.url,
    telephone: BUSINESS.phoneTel,
    taxID: BUSINESS.pib,
    priceRange: BUSINESS.priceRange,
    image: absoluteUrl("/opengraph-image"),
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.municipality,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      // Approximate Kostolac center — refine when exact coords confirmed
      latitude: 44.7167,
      longitude: 21.25,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "16:00",
    },
    areaServed: BUSINESS.areaServed.map((name) => ({
      "@type": "City",
      name,
    })),
    founder: {
      "@type": "Person",
      name: BUSINESS.owner,
    },
    description:
      locale === "sr"
        ? `Auto škola Sale u Kostolcu — obuka vozača B kategorije i kondicioni časovi. ${fullAddress()}.`
        : `Sale Driving School in Kostolac — B category driver training and refresher lessons. ${fullAddressEn()}.`,
    sameAs: Object.values(BUSINESS.social).filter(Boolean),
  };
}

export function faqJsonLd(
  items: { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
