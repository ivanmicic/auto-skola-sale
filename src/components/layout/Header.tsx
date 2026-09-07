"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Menu, Phone, X } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { BUSINESS } from "@/lib/business";
import { trackEvent } from "@/lib/analytics";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { TrackLink } from "@/components/analytics/TrackLink";

export function Header() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: { pathname: "/" as const, hash: "o-nama" }, label: t("about") },
    { href: "/obuka-b-kategorija" as const, label: t("training") },
    { href: "/kondicioni-casovi" as const, label: t("refresher") },
    { href: { pathname: "/" as const, hash: "vozni-park" }, label: t("fleet") },
    { href: { pathname: "/" as const, hash: "cenovnik" }, label: t("pricing") },
    { href: { pathname: "/" as const, hash: "faq" }, label: t("faq") },
    { href: { pathname: "/" as const, hash: "kontakt" }, label: t("contact") },
  ];

  return (
    <header className="royal-shine sticky top-0 z-50 border-b border-white/10 text-white">
      <div className="mx-auto flex max-w-[90rem] items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8 xl:px-10">
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="Auto škola Sale"
            width={2000}
            height={2000}
            className="h-11 w-11 object-contain"
            priority
          />
          <span className="font-display text-base font-semibold leading-tight whitespace-nowrap sm:text-lg">
            Auto škola Sale
            <span className="block text-xs font-normal tracking-wide text-white/65">
              Kostolac
            </span>
          </span>
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 lg:flex xl:gap-1" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-md px-2 py-2 text-sm whitespace-nowrap text-white/85 transition hover:bg-white/10 hover:text-white xl:px-2.5"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <TrackLink
            href={`tel:${BUSINESS.phoneTel}`}
            event="phone_click"
            eventParams={{ location: "header" }}
            className="inline-flex items-center gap-2 text-sm font-medium whitespace-nowrap text-white/90 hover:text-white"
          >
            <Phone className="h-4 w-4 shrink-0" aria-hidden />
            {BUSINESS.phoneDisplay}
          </TrackLink>
          <LanguageSwitcher />
          <Link
            href={{ pathname: "/", hash: "kontakt" }}
            onClick={() => trackEvent("contact_click", { location: "header" })}
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-accent px-4 text-sm font-semibold whitespace-nowrap text-white transition hover:bg-accent-hover"
          >
            {t("contactCta")}
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-white/20 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? t("closeMenu") : t("openMenu")}</span>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="royal-shine border-t border-white/10 px-4 py-4 lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base text-white/90 hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4">
            <TrackLink
              href={`tel:${BUSINESS.phoneTel}`}
              event="phone_click"
              eventParams={{ location: "header_mobile" }}
              className="inline-flex items-center gap-2 text-sm font-medium"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {BUSINESS.phoneDisplay}
            </TrackLink>
            <LanguageSwitcher />
            <Link
              href={{ pathname: "/", hash: "kontakt" }}
              onClick={() => {
                trackEvent("contact_click", { location: "header_mobile" });
                setOpen(false);
              }}
              className="inline-flex min-h-11 items-center justify-center rounded-lg bg-accent px-4 text-sm font-semibold text-white"
            >
              {t("contactCta")}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
