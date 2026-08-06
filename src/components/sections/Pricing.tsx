import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Pricing() {
  const t = useTranslations("pricing");
  const keys = ["bCategory", "refresher", "extra"] as const;

  return (
    <section id="cenovnik" className="scroll-mt-24 bg-surface-alt py-16 sm:py-20">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8 xl:px-10">
        <SectionHeading title={t("title")} subtitle={t("intro")} centered />
        {/* TODO: unosi cene kada vlasnik potvrdi */}
        <ul className="grid gap-8 border-y border-line py-8 sm:grid-cols-3">
          {keys.map((key) => (
            <li key={key} className="sm:px-4">
              <h3 className="font-display text-xl font-semibold text-navy-deep">
                {t(`items.${key}.title`)}
              </h3>
              <p className="mt-3 font-display text-3xl font-semibold text-accent">
                {t(`items.${key}.price`)}
              </p>
              <p className="mt-2 text-sm text-muted">{t(`items.${key}.note`)}</p>
            </li>
          ))}
        </ul>
        <div className="mt-8 text-center">
          <Link
            href={{ pathname: "/", hash: "kontakt" }}
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-navy px-6 text-sm font-semibold text-white transition hover:bg-navy-deep"
          >
            {t("contactForPrice")}
          </Link>
        </div>
      </div>
    </section>
  );
}
