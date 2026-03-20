import Link from "next/link";
import type { Program } from "@/types/program";
import Badge from "@/components/ui/Badge";

interface ProgramCardProps {
  program: Program;
  basePath: string;
  accentColor?: "primary" | "secondary";
}

export default function ProgramCard({ program, basePath, accentColor = "primary" }: ProgramCardProps) {
  const barClass =
    accentColor === "secondary"
      ? "bg-gradient-to-r from-secondary to-secondary-dark"
      : "bg-gradient-to-r from-primary to-primary-dark";

  return (
    <Link
      href={`${basePath}/${program.slug}`}
      className="group bg-white rounded-2xl border border-neutral-100 hover:border-primary/20 hover:shadow-xl transition-all overflow-hidden flex flex-col"
    >
      <div className={`h-2 ${barClass}`} />
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-3">
          <Badge label={program.category} />
          <Badge label={program.status} variant="status" />
        </div>
        <h3 className="font-bold text-neutral-900 text-lg mb-2 group-hover:text-primary transition-colors leading-snug">
          {program.title}
        </h3>
        <p className="text-sm text-neutral-500 leading-relaxed mb-4 flex-1 line-clamp-3">
          {program.description}
        </p>

        <div className="space-y-1.5 text-xs text-neutral-500 border-t border-neutral-100 pt-4">
          <div className="flex gap-2">
            <span className="font-medium text-neutral-700 w-10 flex-shrink-0">일정</span>
            <span>{program.schedule}</span>
          </div>
          <div className="flex gap-2">
            <span className="font-medium text-neutral-700 w-10 flex-shrink-0">대상</span>
            <span>{program.ageRange}</span>
          </div>
          <div className="flex gap-2">
            <span className="font-medium text-neutral-700 w-10 flex-shrink-0">참가비</span>
            <span>{program.tuition}</span>
          </div>
        </div>

        {program.status === "모집중" && (
          <div className="mt-4">
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-neutral-500">모집 현황</span>
              <span className="font-medium text-neutral-700">
                {program.enrolled}/{program.capacity}명
              </span>
            </div>
            <div className="w-full bg-neutral-100 rounded-full h-1.5">
              <div
                className="bg-primary h-1.5 rounded-full transition-all"
                style={{ width: `${Math.min((program.enrolled / program.capacity) * 100, 100)}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}
