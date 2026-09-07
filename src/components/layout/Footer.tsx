import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { BUSINESS } from "@/lib/business";
import { TrackLink } from "@/components/analytics/TrackLink";
import type { Locale } from "@/i18n/routing";

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const locale = useLocale() as Locale;
  const hours =
    locale === "sr"
      ? BUSINESS.openingHoursDisplay.sr
      : BUSINESS.openingHoursDisplay.en;

  return (
    <footer className="royal-shine text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-semibold tracking-tight">
            Auto škola Sale
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
            {t("tagline")}
          </p>
          <Link
            href={{ pathname: "/", hash: "kontakt" }}
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg bg-accent px-4 text-sm font-semibold text-white transition hover:bg-accent-hover"
          >
            {t("contactCta")}
          </Link>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/50">
            {t("quickLinks")}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <Link href={{ pathname: "/", hash: "o-nama" }} className="hover:text-white">
                {tNav("about")}
              </Link>
            </li>
            <li>
              <Link href="/obuka-b-kategorija" className="hover:text-white">
                {tNav("training")}
              </Link>
            </li>
            <li>
              <Link href="/kondicioni-casovi" className="hover:text-white">
                {tNav("refresher")}
              </Link>
            </li>
            <li>
              <Link href={{ pathname: "/", hash: "cenovnik" }} className="hover:text-white">
                {tNav("pricing")}
              </Link>
            </li>
            <li>
              <Link href={{ pathname: "/", hash: "faq" }} className="hover:text-white">
                {tNav("faq")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/50">
            {tNav("contact")}
          </p>
          <address className="mt-4 space-y-2 text-sm not-italic text-white/80">
            <p>Auto škola Sale</p>
            <p>
              {BUSINESS.address.street}, {BUSINESS.address.city}
            </p>
            <p>
              <TrackLink
                href={`tel:${BUSINESS.phoneTel}`}
                event="phone_click"
                eventParams={{ location: "footer" }}
                className="hover:text-white"
              >
                {BUSINESS.phoneDisplay}
              </TrackLink>
            </p>
            <p>{hours}</p>
          </address>
          <p className="mt-6 text-xs leading-relaxed text-white/45">
            {BUSINESS.legalName}
            <br />
            PIB {BUSINESS.pib} · MB {BUSINESS.mb}
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} Auto škola Sale. {t("rights")}
          </p>
          <div className="flex gap-4">
            <Link href="/politika-privatnosti" className="hover:text-white">
              {t("privacy")}
            </Link>
            <Link href="/uslovi-koriscenja" className="hover:text-white">
              {t("terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
