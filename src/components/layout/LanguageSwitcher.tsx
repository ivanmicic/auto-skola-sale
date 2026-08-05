"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 p-1 text-xs font-semibold tracking-wide"
      role="group"
      aria-label="Language"
    >
      {routing.locales.map((code) => {
        const active = code === locale;
        return (
          <button
            key={code}
            type="button"
            onClick={() => router.replace(pathname, { locale: code })}
            className={`min-h-9 min-w-9 rounded-full px-2.5 uppercase transition ${
              active
                ? "bg-accent text-white"
                : "text-white/85 hover:bg-white/10"
            }`}
            aria-current={active ? "true" : undefined}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}
