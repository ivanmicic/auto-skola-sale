"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const KEY = "sale-cookie-consent";

export function CookieNotice() {
  const t = useTranslations("cookie");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  function accept() {
    try {
      localStorage.setItem(KEY, "1");
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  return (
    <aside
      className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-xl rounded-2xl border border-line bg-surface p-4 shadow-[0_18px_50px_rgba(20,32,51,0.18)] sm:p-5"
      role="dialog"
      aria-label="Cookies"
    >
      <p className="text-sm leading-relaxed text-ink">
        {t("message")}{" "}
        <Link
          href="/politika-privatnosti"
          className="font-semibold text-navy underline underline-offset-2"
        >
          {t("link")}
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={accept}
          className="inline-flex min-h-11 items-center justify-center rounded-lg bg-navy px-4 text-sm font-semibold text-white hover:bg-navy-deep"
        >
          {t("accept")}
        </button>
        <button
          type="button"
          onClick={() => setVisible(false)}
          className="inline-flex min-h-11 items-center justify-center rounded-lg px-4 text-sm font-semibold text-muted hover:text-ink"
        >
          {t("dismiss")}
        </button>
      </div>
    </aside>
  );
}
