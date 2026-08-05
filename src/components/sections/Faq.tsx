"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const KEYS = [
  "age",
  "duration",
  "documents",
  "refresher",
  "hours",
  "location",
  "price",
  "exam",
] as const;

export function Faq() {
  const t = useTranslations("faq");
  const [open, setOpen] = useState<string | null>("age");

  return (
    <section id="faq" className="scroll-mt-24 bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading title={t("title")} centered />
        <div className="divide-y divide-line border-y border-line">
          {KEYS.map((key) => {
            const isOpen = open === key;
            return (
              <div key={key}>
                <h3>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : key)}
                  >
                    <span className="font-display text-lg font-semibold text-navy-deep">
                      {t(`items.${key}.q`)}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-navy transition ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden
                    />
                  </button>
                </h3>
                {isOpen ? (
                  <p className="pb-5 text-base leading-relaxed text-muted">
                    {t(`items.${key}.a`)}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
