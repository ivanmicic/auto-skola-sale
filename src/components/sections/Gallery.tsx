import { useTranslations } from "next-intl";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Gallery() {
  const t = useTranslations("gallery");
  const tImg = useTranslations("images");

  return (
    <section id="galerija" className="scroll-mt-24 bg-surface-alt py-16 sm:py-20">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8 xl:px-10">
        <SectionHeading title={t("title")} />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <li key={i}>
              <ImagePlaceholder
                todo={`Galerija #${i + 1}: prostorije/vozila/polaznici (uz saglasnost), 1000x1000, alt: images.galleryAlt`}
                label={t("caption")}
                aspectClassName="aspect-square"
              />
              <span className="sr-only">{tImg("galleryAlt")}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
