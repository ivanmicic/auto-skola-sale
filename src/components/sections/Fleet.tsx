import { useTranslations } from "next-intl";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Fleet() {
  const t = useTranslations("fleet");
  const tImg = useTranslations("images");

  return (
    <section id="vozni-park" className="scroll-mt-24 bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8 xl:px-10">
        <SectionHeading title={t("title")} subtitle={t("intro")} />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <li key={n}>
              <ImagePlaceholder
                todo={`Fotografija vozila #${n}: model/godište kada vlasnik potvrdi, 1200x800, alt: images.fleetAlt`}
                label={tImg("fleetAlt")}
                aspectClassName="aspect-[3/2]"
              />
              <p className="mt-3 font-display text-lg font-semibold text-navy-deep">
                {t("vehicleLabel")} {n}
              </p>
              <p className="text-sm text-muted">{t("vehicleMeta")}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
