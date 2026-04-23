import type { ProgramStatus } from "@/types/program";

const categoryColors: Record<string, string> = {
  언어교육: "bg-primary-light text-primary-dark",
  발달지원: "bg-secondary-light text-secondary-dark",
  문화체험: "bg-primary-light text-primary-dark",
  부모교육: "bg-secondary-light text-secondary-dark",
  언어지원: "bg-primary-light text-primary-dark",
  상담지원: "bg-secondary-light text-secondary-dark",
  문화통합: "bg-primary-light text-primary-dark",
  긴급지원: "bg-red-100 text-red-700",
  공지사항: "bg-neutral-100 text-neutral-700",
  모집공고: "bg-primary-light text-primary-dark",
  행사안내: "bg-secondary-light text-secondary-dark",
  보도자료: "bg-neutral-100 text-neutral-700",
};

const statusColors: Record<ProgramStatus, string> = {
  모집중: "bg-primary text-white",
  모집완료: "bg-neutral-200 text-neutral-500",
  운영중: "bg-secondary text-white",
  종료: "bg-neutral-100 text-neutral-400",
};

interface BadgeProps {
  label: string;
  variant?: "category" | "status";
  className?: string;
}

export default function Badge({ label, variant = "category", className = "" }: BadgeProps) {
  const colorClass =
    variant === "status"
      ? statusColors[label as ProgramStatus] ?? "bg-neutral-100 text-neutral-600"
      : categoryColors[label] ?? "bg-neutral-100 text-neutral-600";

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${colorClass} ${className}`}
    >
      {label}
    </span>
  );
}
