import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Props = {
  showPageCta?: boolean;
};

export function Training({ showPageCta = true }: Props) {
  const t = useTranslations("training");
  const tImg = useTranslations("images");

  return (
    <section id="obuka" className="scroll-mt-24 bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading title={t("title")} subtitle={t("intro")} />
            <div className="space-y-8">
              {(["theory", "practice", "exam"] as const).map((key) => (
                <article key={key}>
                  <h3 className="font-display text-xl font-semibold text-navy-deep">
                    {t(`${key}.title`)}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-muted">
                    {t(`${key}.text`)}
                  </p>
                </article>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted">{t("ctaNote")}</p>
          </div>
          <ImagePlaceholder
            todo="Učionica ili vozilo tokom praktične obuke, 1000x1200, alt: images.trainingAlt"
            label={tImg("trainingAlt")}
            aspectClassName="aspect-[4/5]"
          />
        </div>

        {showPageCta ? (
          <div className="royal-shine mt-12 px-6 py-8 text-center text-white sm:px-10">
            <p className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              {t("cta")}
            </p>
            <Link
              href={{ pathname: "/", hash: "kontakt" }}
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-lg bg-accent px-6 text-sm font-semibold text-white transition hover:bg-accent-hover"
            >
              {t("cta")}
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
