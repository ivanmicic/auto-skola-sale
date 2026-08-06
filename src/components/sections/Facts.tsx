import { useTranslations } from "next-intl";

export function Facts() {
  const t = useTranslations("facts");

  const items = [
    { label: t("experience"), value: t("experienceValue") },
    { label: t("vehicles"), value: t("vehiclesValue") },
    { label: t("schedule"), value: t("scheduleValue") },
  ];

  return (
    <section
      aria-label={t("note")}
      className="border-b border-line bg-surface"
    >
      <div className="mx-auto grid max-w-[90rem] gap-6 px-4 py-10 sm:grid-cols-3 sm:px-6 lg:px-8 xl:px-10">
        {items.map((item) => (
          <div key={item.label} className="text-center sm:text-left">
            <p className="font-display text-2xl font-semibold text-navy-deep">
              {item.value}
            </p>
            <p className="mt-1 text-sm text-muted">{item.label}</p>
          </div>
        ))}
      </div>
      <p className="sr-only">{t("note")}</p>
    </section>
  );
}
