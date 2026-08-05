import { useLocale, useTranslations } from "next-intl";
import { MapPin, MessageCircle, Phone, Clock } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TrackLink } from "@/components/analytics/TrackLink";
import { ContactForm } from "./ContactForm";
import type { Locale } from "@/i18n/routing";

export function Contact() {
  const t = useTranslations("contact");
  const locale = useLocale() as Locale;
  const hours =
    locale === "sr"
      ? BUSINESS.openingHoursDisplay.sr
      : BUSINESS.openingHoursDisplay.en;

  return (
    <section id="kontakt" className="scroll-mt-24 bg-navy-soft py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title={t("title")} subtitle={t("intro")} centered />

        <p className="mb-10 text-center font-display text-2xl font-semibold uppercase tracking-wide text-navy-deep sm:text-3xl">
          {t("cta")}
        </p>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="flex gap-3">
              <MapPin className="mt-1 h-5 w-5 text-accent" aria-hidden />
              <div>
                <p className="text-sm font-semibold text-navy">{t("addressLabel")}</p>
                <p className="text-muted">
                  Auto škola Sale
                  <br />
                  {BUSINESS.address.street}, {BUSINESS.address.city}
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Phone className="mt-1 h-5 w-5 text-accent" aria-hidden />
              <div>
                <p className="text-sm font-semibold text-navy">{t("phoneLabel")}</p>
                <TrackLink
                  href={`tel:${BUSINESS.phoneTel}`}
                  event="phone_click"
                  eventParams={{ location: "contact" }}
                  className="text-lg font-semibold text-navy-deep hover:text-accent"
                >
                  {BUSINESS.phoneDisplay}
                </TrackLink>
              </div>
            </div>
            <div className="flex gap-3">
              <Clock className="mt-1 h-5 w-5 text-accent" aria-hidden />
              <div>
                <p className="text-sm font-semibold text-navy">{t("hoursLabel")}</p>
                <p className="text-muted">{hours}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <MessageCircle className="mt-1 h-5 w-5 text-accent" aria-hidden />
              <div>
                <p className="text-sm font-semibold text-navy">{t("chatLabel")}</p>
                <div className="mt-2 flex flex-wrap gap-3">
                  <TrackLink
                    href={BUSINESS.viber}
                    event="chat_click"
                    eventParams={{ channel: "viber" }}
                    className="inline-flex min-h-11 items-center rounded-lg bg-navy px-4 text-sm font-semibold text-white hover:bg-navy-deep"
                  >
                    {t("viber")}
                  </TrackLink>
                  <TrackLink
                    href={BUSINESS.whatsapp}
                    event="chat_click"
                    eventParams={{ channel: "whatsapp" }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center rounded-lg bg-accent px-4 text-sm font-semibold text-white hover:bg-accent-hover"
                  >
                    {t("whatsapp")}
                  </TrackLink>
                </div>
              </div>
            </div>

            {/* TODO: replace with exact Google Maps embed once pin is confirmed */}
            <div className="overflow-hidden rounded-xl border border-line bg-white aspect-[16/10]">
              <iframe
                title={t("mapTitle")}
                src={BUSINESS.mapEmbedUrl}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          <div className="rounded-2xl bg-surface p-6 shadow-[0_20px_60px_rgba(20,32,51,0.08)] sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
