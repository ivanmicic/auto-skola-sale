import { useTranslations } from "next-intl";
import { Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  const t = useTranslations("testimonials");
  const keys = ["1", "2", "3"] as const;

  return (
    <section className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title={t("title")} subtitle={t("note")} centered />
        <ul className="grid gap-10 md:grid-cols-3">
          {keys.map((key) => (
            <li key={key} className="border-t border-line pt-6">
              <div className="flex gap-1 text-accent" aria-label="5/5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" aria-hidden />
                ))}
              </div>
              <blockquote className="mt-4 text-base leading-relaxed text-ink">
                “{t(`items.${key}.quote`)}”
              </blockquote>
              <p className="mt-4 text-sm font-semibold text-navy">
                {t(`items.${key}.name`)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
