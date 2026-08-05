interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`section-heading ${centered ? "section-heading--centered" : ""} ${
        light ? "section-heading--light" : ""
      }`}
    >
      {eyebrow && <p className="section-heading__eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p className="section-heading__description">{description}</p>}
    </div>
  );
}
