import Link from "next/link";
import type { Program } from "@/types/program";
import Badge from "@/components/ui/Badge";
import SectionHeader from "@/components/ui/SectionHeader";

interface ProgramsPreviewProps {
  programs: Program[];
}

export default function ProgramsPreview({ programs }: ProgramsPreviewProps) {
  return (
    <section className="py-20 lg:py-24 bg-primary-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="주요 프로그램"
          title="영유아와 부모를 위한 다양한 프로그램"
          description="다문화 가정의 영유아 성장을 위한 전문 프로그램을 운영합니다."
          className="mb-12"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.slice(0, 3).map((program) => (
            <Link
              key={program.slug}
              href={`/kids/${program.slug}`}
              className="group bg-white rounded-2xl border border-primary/10 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-0.5 transition-all overflow-hidden"
            >
              {/* Color bar */}
              <div className="h-1.5 bg-gradient-to-r from-primary via-primary-dark to-secondary" />
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <Badge label={program.category} />
                  <Badge label={program.status} variant="status" />
                </div>
                <h3 className="font-bold text-neutral-900 text-lg mb-2 group-hover:text-primary transition-colors leading-tight">
                  {program.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed mb-4 line-clamp-2">
                  {program.description}
                </p>
                <div className="space-y-1.5 text-xs text-neutral-500">
                  <div className="flex gap-2">
                    <span className="font-medium text-neutral-700">일정</span>
                    {program.schedule}
                  </div>
                  <div className="flex gap-2">
                    <span className="font-medium text-neutral-700">대상</span>
                    {program.ageRange}
                  </div>
                  <div className="flex gap-2">
                    <span className="font-medium text-neutral-700">참가비</span>
                    {program.tuition}
                  </div>
                </div>
                {program.status === "모집중" && (
                  <div className="mt-4 pt-4 border-t border-neutral-100">
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="text-neutral-500">모집 현황</span>
                      <span className="font-medium text-neutral-700">
                        {program.enrolled}/{program.capacity}명
                      </span>
                    </div>
                    <div className="w-full bg-neutral-100 rounded-full h-1.5">
                      <div
                        className="bg-primary h-1.5 rounded-full"
                        style={{ width: `${(program.enrolled / program.capacity) * 100}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/kids"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary font-semibold px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-colors"
          >
            모든 프로그램 보기
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
