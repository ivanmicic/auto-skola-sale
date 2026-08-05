import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { buildAlternates } from "@/lib/seo";
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
    "/politika-privatnosti",
    "/privacy-policy",
  );

  return {
    title: t("privacyTitle"),
    description: t("privacyDescription"),
    alternates,
    openGraph: {
      title: t("privacyTitle"),
      description: t("privacyDescription"),
      url: alternates.canonical,
      locale: locale === "sr" ? "sr_RS" : "en_US",
      type: "website",
    },
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "legal.privacy" });
  const tCommon = await getTranslations({ locale, namespace: "common" });

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Link
        href="/"
        className="text-sm font-semibold text-navy hover:text-accent"
      >
        ← {tCommon("backHome")}
      </Link>
      <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-navy-deep">
        {t("title")}
      </h1>
      <p className="mt-3 text-sm text-muted">{t("updated")}</p>
      <div className="mt-8 space-y-4 text-base leading-relaxed text-muted">
        <p>{t("p1")}</p>
        <p>{t("p2")}</p>
        <p>{t("p3")}</p>
        <p>{t("p4")}</p>
      </div>
    </article>
  );
}
