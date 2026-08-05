import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { BUSINESS } from "@/lib/business";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { TrackLink } from "@/components/analytics/TrackLink";

export function Hero() {
  const t = useTranslations("hero");
  const tImg = useTranslations("images");

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-navy-deep text-white">
      <div className="absolute inset-0">
        <div className="hero-media-motion h-full w-full">
          <ImagePlaceholder
            todo="Hero full-bleed: vozilo za obuku ili instruktor sa polaznikom, 1920x1080+, alt sr/en iz images.heroAlt"
            label={tImg("heroAlt")}
            aspectClassName="h-full min-h-[100svh] w-full"
            className="h-full"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/88 to-navy/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/35" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20 lg:justify-center lg:pb-24">
        <p className="animate-fade-up font-display text-sm font-semibold uppercase tracking-[0.22em] text-accent sm:text-base">
          {t("brand")}
        </p>
        <h1 className="animate-fade-up-delay mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
          {t("title")}
        </h1>
        <p className="animate-fade-up-delay-2 mt-5 max-w-xl text-base leading-relaxed text-white/82 sm:text-lg">
          {t("subtitle")}
        </p>
        <div className="animate-fade-up-delay-2 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href={{ pathname: "/", hash: "kontakt" }}
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-accent px-6 text-sm font-semibold text-white transition hover:bg-accent-hover sm:text-base"
          >
            {t("ctaPrimary")}
          </Link>
          <TrackLink
            href={`tel:${BUSINESS.phoneTel}`}
            event="phone_click"
            eventParams={{ location: "hero" }}
            className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/35 bg-white/5 px-6 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/12 sm:text-base"
          >
            {t("ctaSecondary")}
          </TrackLink>
        </div>
      </div>
    </section>
  );
}
