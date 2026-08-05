import { useTranslations } from "next-intl";
import { BUSINESS } from "@/lib/business";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Team() {
  const t = useTranslations("team");
  const tImg = useTranslations("images");

  const members = [
    {
      name: BUSINESS.owner,
      role: t("ownerRole"),
    },
    {
      name: "—",
      role: t("instructorRole"),
    },
    {
      name: "—",
      role: t("theoryRole"),
    },
  ];

  return (
    <section id="tim" className="scroll-mt-24 bg-surface-alt py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title={t("title")} subtitle={t("intro")} />
        <ul className="grid gap-8 sm:grid-cols-3">
          {members.map((member, index) => (
            <li key={`${member.role}-${index}`}>
              <ImagePlaceholder
                todo={`Portret člana tima (${member.role}), 800x1000, alt: images.teamAlt`}
                label={tImg("teamAlt")}
                aspectClassName="aspect-[4/5]"
              />
              <h3 className="mt-4 font-display text-xl font-semibold text-navy-deep">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-accent">{member.role}</p>
              <p className="mt-2 text-sm text-muted">{t("bioPlaceholder")}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
