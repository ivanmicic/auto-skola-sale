import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Refresher } from "@/components/sections/Refresher";
import { Contact } from "@/components/sections/Contact";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildAlternates, drivingSchoolJsonLd } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const t = await getTranslations({ locale, namespace: "meta" });
  const alternates = buildAlternates(
    locale,
    "/kondicioni-casovi",
    "/refresher-lessons",
  );

  return {
    title: t("refresherTitle"),
    description: t("refresherDescription"),
    alternates,
    openGraph: {
      title: t("refresherTitle"),
      description: t("refresherDescription"),
      url: alternates.canonical,
      siteName: "Auto škola Sale",
      locale: locale === "sr" ? "sr_RS" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("refresherTitle"),
      description: t("refresherDescription"),
    },
  };
}

export default async function RefresherPage({ params }: Props) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "common" });

  return (
    <>
      <JsonLd data={drivingSchoolJsonLd(locale)} />
      <div className="border-b border-line bg-surface px-4 py-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/"
            className="text-sm font-semibold text-navy hover:text-accent"
          >
            ← {t("backHome")}
          </Link>
        </div>
      </div>
      <Refresher />
      <Contact />
    </>
  );
}
