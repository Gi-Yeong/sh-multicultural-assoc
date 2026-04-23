import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import ProgramCard from "@/components/programs/ProgramCard";
import { getMultiPrograms } from "@/lib/getPrograms";

export const metadata: Metadata = {
  title: "다문화 지원",
  description: "결혼이민자, 다문화 가정을 위한 한국어 교육, 법률 상담, 문화 적응, 긴급 지원 서비스를 제공합니다.",
};

export default async function MultiPage() {
  const programs = await getMultiPrograms();

  return (
    <>
      <PageHero
        title="다문화 지원"
        description="결혼이민자와 다문화 가정이 한국 사회에서 안정적으로 뿌리내릴 수 있도록 다양한 지원 서비스를 제공합니다."
        breadcrumb={[{ label: "다문화 지원" }]}
        color="secondary"
      />

      {/* Support areas intro */}
      <section className="py-14 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "🗣️", title: "언어 지원", desc: "한국어 교육" },
              { icon: "⚖️", title: "법률 상담", desc: "비자·생활 법률" },
              { icon: "🌏", title: "문화 통합", desc: "적응 프로그램" },
              { icon: "🚨", title: "긴급 지원", desc: "24시간 연결" },
            ].map((item) => (
              <div key={item.title} className="text-center p-5 rounded-2xl bg-secondary-light border border-secondary/10">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="font-semibold text-neutral-900 text-sm">{item.title}</div>
                <div className="text-xs text-neutral-500 mt-0.5">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 lg:py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="지원 프로그램"
            title="다문화 가정을 위한 종합 지원"
            description="언어, 법률, 문화, 긴급 지원까지 필요한 모든 서비스를 제공합니다."
            className="mb-12"
          />

          <div className="grid md:grid-cols-2 gap-6">
            {programs.map((program) => (
              <ProgramCard
                key={program.slug}
                program={program}
                basePath="/multi"
                accentColor="secondary"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Emergency contact banner */}
      <section className="py-14 bg-red-50 border-t border-red-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-4xl mb-4">🚨</div>
          <h2 className="text-2xl font-bold text-neutral-900 mb-3">긴급 지원이 필요하신가요?</h2>
          <p className="text-neutral-600 mb-6">
            가정폭력, 경제 위기, 체류 문제 등 급박한 상황에서는 즉시 연락해 주세요.
          </p>
          <a
            href="tel:010-2740-2798"
            className="inline-flex items-center gap-2 bg-red-500 text-white font-bold px-8 py-4 rounded-full hover:bg-red-600 transition-colors text-lg shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            010-2740-2798 긴급 연락
          </a>
        </div>
      </section>
    </>
  );
}
