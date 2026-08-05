"use client";

import { useState } from "react";
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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-deep/95 text-white backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="group flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          {/* TODO: IMAGE — modern logo (replace text mark), ~160x48, alt: Auto škola Sale logo */}
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent font-display text-lg font-bold tracking-tight">
            L
          </span>
          <span className="font-display text-base font-semibold leading-tight sm:text-lg">
            Auto škola Sale
            <span className="block text-xs font-normal tracking-wide text-white/65">
              Kostolac
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-md px-2.5 py-2 text-sm text-white/85 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <TrackLink
            href={`tel:${BUSINESS.phoneTel}`}
            event="phone_click"
            eventParams={{ location: "header" }}
            className="inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {BUSINESS.phoneDisplay}
          </TrackLink>
          <LanguageSwitcher />
          <Link
            href={{ pathname: "/", hash: "kontakt" }}
            onClick={() => trackEvent("contact_click", { location: "header" })}
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-accent px-4 text-sm font-semibold text-white transition hover:bg-accent-hover"
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
          className="border-t border-white/10 bg-navy-deep px-4 py-4 lg:hidden"
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
