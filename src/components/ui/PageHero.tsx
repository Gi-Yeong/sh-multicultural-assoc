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
      ? "bg-gradient-to-br from-secondary to-secondary-dark"
      : "bg-gradient-to-br from-primary to-primary-dark";

  return (
    <section className={`${bgClass} text-white py-14 lg:py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumb} />
        <h1 className="mt-4 text-3xl lg:text-5xl font-bold">{title}</h1>
        {description && (
          <p className="mt-3 text-lg text-white/80 max-w-xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
