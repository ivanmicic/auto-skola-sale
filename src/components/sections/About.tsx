import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  const t = useTranslations("about");
  const tImg = useTranslations("images");

  return (
    <section id="o-nama" className="scroll-mt-24 bg-surface py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <SectionHeading title={t("title")} />
          <div className="space-y-4 text-base leading-relaxed text-muted">
            <p>{t("p1")}</p>
            <p>{t("p2")}</p>
            <p>{t("p3")}</p>
          </div>
          <Link
            href="/obuka-b-kategorija"
            className="mt-8 inline-flex min-h-11 items-center font-semibold text-accent hover:text-accent-hover"
          >
            {t("cta")} →
          </Link>
        </div>
        <ImagePlaceholder
          todo="Tim ili enterijer prostorija, 1200x900, alt: images.aboutAlt"
          label={tImg("aboutAlt")}
          aspectClassName="aspect-[4/3]"
          className="w-full"
        />
      </div>
    </section>
  );
}
