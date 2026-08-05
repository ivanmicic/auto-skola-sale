import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/Hero";
import { Facts } from "@/components/sections/Facts";
import { About } from "@/components/sections/About";
import { WhyUs } from "@/components/sections/WhyUs";
import { Training } from "@/components/sections/Training";
import { Refresher } from "@/components/sections/Refresher";
import { Pricing } from "@/components/sections/Pricing";
import { Fleet } from "@/components/sections/Fleet";
import { Team } from "@/components/sections/Team";
import { Testimonials } from "@/components/sections/Testimonials";
import { Gallery } from "@/components/sections/Gallery";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildAlternates,
  drivingSchoolJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import type { Locale } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const t = await getTranslations({ locale, namespace: "meta" });
  const alternates = buildAlternates(locale, "/", "/");

  return {
    title: t("homeTitle"),
    description: t("homeDescription"),
    alternates,
    openGraph: {
      title: t("homeTitle"),
      description: t("homeDescription"),
      url: alternates.canonical,
      siteName: "Auto škola Sale",
      locale: locale === "sr" ? "sr_RS" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("homeTitle"),
      description: t("homeDescription"),
    },
  };
}

export default async function HomePage({ params }: Props) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  setRequestLocale(locale);

  const tFaq = await getTranslations({ locale, namespace: "faq" });
  const faqKeys = [
    "age",
    "duration",
    "documents",
    "refresher",
    "hours",
    "location",
    "price",
    "exam",
  ] as const;

  const faqItems = faqKeys.map((key) => ({
    question: tFaq(`items.${key}.q`),
    answer: tFaq(`items.${key}.a`),
  }));

  return (
    <>
      <JsonLd data={drivingSchoolJsonLd(locale)} />
      <JsonLd data={faqJsonLd(faqItems)} />
      <Hero />
      <Facts />
      <About />
      <WhyUs />
      <Training />
      <Refresher />
      <Pricing />
      <Fleet />
      <Team />
      <Testimonials />
      <Gallery />
      <Faq />
      <Contact />
    </>
  );
}
