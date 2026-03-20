import type { ProgramStatus } from "@/types/program";

const categoryColors: Record<string, string> = {
  언어교육: "bg-blue-100 text-blue-700",
  발달지원: "bg-green-100 text-green-700",
  문화체험: "bg-purple-100 text-purple-700",
  부모교육: "bg-amber-100 text-amber-700",
  언어지원: "bg-blue-100 text-blue-700",
  상담지원: "bg-teal-100 text-teal-700",
  문화통합: "bg-purple-100 text-purple-700",
  긴급지원: "bg-red-100 text-red-700",
  공지사항: "bg-neutral-100 text-neutral-700",
  모집공고: "bg-orange-100 text-orange-700",
  행사안내: "bg-sky-100 text-sky-700",
  보도자료: "bg-indigo-100 text-indigo-700",
};

const statusColors: Record<ProgramStatus, string> = {
  모집중: "bg-green-100 text-green-700",
  모집완료: "bg-neutral-100 text-neutral-500",
  운영중: "bg-blue-100 text-blue-700",
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
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colorClass} ${className}`}
    >
      {label}
    </span>
  );
}
