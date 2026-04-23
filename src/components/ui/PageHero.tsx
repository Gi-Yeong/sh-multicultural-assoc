import Breadcrumb from "./Breadcrumb";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  description?: string;
  breadcrumb: BreadcrumbItem[];
  color?: "primary" | "secondary";
}

export default function PageHero({
  title,
  description,
  breadcrumb,
  color = "primary",
}: PageHeroProps) {
  const bgClass =
    color === "secondary"
      ? "bg-gradient-to-br from-secondary via-secondary-dark to-primary-darker"
      : "bg-gradient-to-br from-primary via-primary-dark to-primary-darker";

  return (
    <section className={`relative ${bgClass} text-white py-16 lg:py-24 overflow-hidden`}>
      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-2xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-2xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumb} />
        <h1 className="mt-5 text-3xl lg:text-5xl font-bold tracking-tight">{title}</h1>
        {description && (
          <p className="mt-4 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
