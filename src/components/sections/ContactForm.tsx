"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { trackEvent } from "@/lib/analytics";

export function ContactForm() {
  const t = useTranslations("contact.form");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Placeholder submit — wire to email/API later
    const payload = {
      name: String(data.get("name") || ""),
      phone: String(data.get("phone") || ""),
      email: String(data.get("email") || ""),
      service: String(data.get("service") || ""),
      message: String(data.get("message") || ""),
    };

    try {
      console.info("Contact inquiry:", payload);
      trackEvent("form_submit", { service: payload.service });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
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
      {status === "success" ? (
        <p className="text-sm font-medium text-navy" role="status">
          {t("success")}
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm font-medium text-red-700" role="alert">
          {t("error")}
        </p>
      ) : null}
    </form>
  );
}
