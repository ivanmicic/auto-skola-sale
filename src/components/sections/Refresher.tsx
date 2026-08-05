import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Refresher() {
  const t = useTranslations("refresher");

  return (
    <section
      id="kondicioni"
      className="scroll-mt-24 bg-navy text-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <SectionHeading title={t("title")} light centered />
        <p className="text-base leading-relaxed text-white/80 sm:text-lg">
          {t("text")}
        </p>
        <p className="mt-6 font-display text-2xl font-semibold text-accent sm:text-3xl">
          {t("highlight")}
        </p>
        <Link
          href={{ pathname: "/", hash: "kontakt" }}
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-accent px-6 text-sm font-semibold text-white transition hover:bg-accent-hover"
        >
          {t("cta")}
        </Link>
      </div>
    </section>
  );
}
