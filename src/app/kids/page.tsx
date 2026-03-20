import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ProgramFilter from "@/components/programs/ProgramFilter";
import { getKidsPrograms } from "@/lib/getPrograms";
import type { ProgramCategory } from "@/types/program";

export const metadata: Metadata = {
  title: "영유아 프로그램",
  description: "다문화 가정 영유아(0~7세)를 위한 언어교육, 발달지원, 문화체험, 부모교육 프로그램을 운영합니다.",
};

const KIDS_CATEGORIES: ProgramCategory[] = ["언어교육", "발달지원", "문화체험", "부모교육"];

export default async function KidsPage() {
  const programs = await getKidsPrograms();

  return (
    <>
      <PageHero
        title="영유아 프로그램"
        description="다문화 가정 영유아(0~7세)와 부모님을 위한 전문 프로그램을 운영합니다."
        breadcrumb={[{ label: "영유아 프로그램" }]}
      />

      <section className="py-16 lg:py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Summary */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {[
              { label: "전체 프로그램", value: `${programs.length}개` },
              { label: "모집 중", value: `${programs.filter((p) => p.status === "모집중").length}개` },
              { label: "운영 중", value: `${programs.filter((p) => p.status === "운영중").length}개` },
              { label: "참가비", value: "무료~소액" },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-2xl p-5 text-center border border-neutral-100 shadow-sm">
                <div className="text-2xl font-bold text-primary">{s.value}</div>
                <div className="text-xs text-neutral-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <ProgramFilter programs={programs} categories={KIDS_CATEGORIES} basePath="/kids" />
        </div>
      </section>
    </>
  );
}
