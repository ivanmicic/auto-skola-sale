"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";

export function ContactForm() {
  const t = useTranslations("contact.form");
  const [status, setStatus] = useState<"idle" | "preview">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("preview");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <p className="rounded-lg bg-navy-soft px-3 py-2.5 text-sm leading-relaxed text-navy">
        {t("previewNotice")}
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-ink">
          {t("name")}
          <input
            required
            name="name"
            autoComplete="name"
            className="mt-1.5 w-full min-h-11 rounded-lg border border-line bg-white px-3 text-base outline-none ring-navy/30 focus:ring-2"
          />
        </label>
        <label className="block text-sm font-medium text-ink">
          {t("phone")}
          <input
            required
            name="phone"
            type="tel"
            autoComplete="tel"
            className="mt-1.5 w-full min-h-11 rounded-lg border border-line bg-white px-3 text-base outline-none ring-navy/30 focus:ring-2"
          />
        </label>
      </div>
      <label className="block text-sm font-medium text-ink">
        {t("email")}
        <input
          required
          name="email"
          type="email"
          autoComplete="email"
          className="mt-1.5 w-full min-h-11 rounded-lg border border-line bg-white px-3 text-base outline-none ring-navy/30 focus:ring-2"
        />
      </label>
      <label className="block text-sm font-medium text-ink">
        {t("service")}
        <select
          name="service"
          required
          className="mt-1.5 w-full min-h-11 rounded-lg border border-line bg-white px-3 text-base outline-none ring-navy/30 focus:ring-2"
          defaultValue="b"
        >
          <option value="b">{t("serviceB")}</option>
          <option value="refresher">{t("serviceRefresher")}</option>
          <option value="other">{t("serviceOther")}</option>
        </select>
      </label>
      <label className="block text-sm font-medium text-ink">
        {t("message")}
        <textarea
          required
          name="message"
          rows={4}
          className="mt-1.5 w-full rounded-lg border border-line bg-white px-3 py-2 text-base outline-none ring-navy/30 focus:ring-2"
        />
      </label>
      <button
        type="submit"
        className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-accent px-6 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-accent-hover sm:w-auto"
      >
        {t("submit")}
      </button>
      {status === "preview" ? (
        <p className="text-sm font-medium text-navy" role="status">
          {t("previewSubmit")}
        </p>
      ) : null}
    </form>
  );
}
