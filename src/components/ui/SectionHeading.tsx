type Props = {
  title: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
  as?: "h1" | "h2";
};

export function SectionHeading({
  title,
  subtitle,
  light = false,
  centered = false,
  as = "h2",
}: Props) {
  const Tag = as;
  return (
    <div className={`mb-10 max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      <Tag
        className={`text-3xl font-semibold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-navy-deep"
        }`}
      >
        {title}
      </Tag>
      {subtitle ? (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? "text-white/80" : "text-muted"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
