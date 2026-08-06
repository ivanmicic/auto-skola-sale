import { useTranslations } from "next-intl";
import { Award, CalendarClock, CarFront, HeartHandshake } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const ICONS = {
  quality: Award,
  dedication: HeartHandshake,
  vehicles: CarFront,
  schedule: CalendarClock,
} as const;

export function WhyUs() {
  const t = useTranslations("why");
  const keys = ["quality", "dedication", "vehicles", "schedule"] as const;

  return (
    <section className="bg-surface-alt py-16 sm:py-20">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8 xl:px-10">
        <SectionHeading title={t("title")} centered />
        <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {keys.map((key) => {
            const Icon = ICONS[key];
            return (
              <li key={key} className="text-center sm:text-left">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-navy-deep">
                  {t(`items.${key}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {t(`items.${key}.text`)}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
