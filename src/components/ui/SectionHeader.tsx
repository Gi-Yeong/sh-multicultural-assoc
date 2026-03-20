interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`${alignClass} ${className}`}>
      {eyebrow && (
        <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
