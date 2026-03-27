import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "협의회 소개",
  description:
    "시흥시 영유아다문화교육협의회의 설립 목적, 미션/비전, 연혁, 조직도를 소개합니다.",
};

const coreValues = [
  {
    title: "평등",
    desc: "모든 아이는 출신과 관계없이 동등한 기회를 가져야 합니다",
    icon: "⚖️",
  },
  {
    title: "존중",
    desc: "다양한 문화와 언어는 우리 사회의 소중한 자산입니다",
    icon: "🤝",
  },
  {
    title: "연대",
    desc: "지역 사회가 함께 다문화 가정의 성장을 응원합니다",
    icon: "🌱",
  },
  {
    title: "성장",
    desc: "모든 아이의 잠재력을 이끌어내는 맞춤형 지원을 합니다",
    icon: "✨",
  },
];

const history = [
  { year: "2008", month: "03", event: "시흥시 시립어린이집 18개 기관이 참여해 영유아다문화교육협의회 설립" },
  { year: "2008", month: "~", event: "다문화 가정 영유아 교육 연구 및 프로그램 개발 사업 본격 시작" },
  { year: "2020", month: "~", event: "비대면 환경 대응 온라인 교육 프로그램 도입" },
  { year: "2025", month: "~", event: "참여 기관 23개로 확대 — 시흥시 시립어린이집 소속 원장·교사들로 구성" },
  { year: "2025", month: "09", event: "풀무원푸드머스와 '다문화 영유아 올바른 식습관 형성' 업무협약(MOU) 체결" },
];

const orgStructure = [
  { level: 0, title: "총회", note: "전체 회원" },
  { level: 1, title: "이사회", note: "이사 15인" },
  { level: 2, title: "회장", note: "" },
  { level: 3, title: "부회장 2인", note: "" },
  { level: 3, title: "감사 2인", note: "" },
  { level: 3, title: "사무국장", note: "" },
  { level: 4, title: "프로그램팀", note: "교육·문화 프로그램" },
  { level: 4, title: "상담지원팀", note: "법률·생활 상담" },
  { level: 4, title: "행정팀", note: "총무·회계" },
];

export default function IntroPage() {
  return (
    <>
      <PageHero
        title="협의회 소개"
        description="2008년 시흥시 시립어린이집 18개 기관이 모여 설립한 영유아다문화교육협의회. 다문화 가정 아이들의 건강한 성장을 위해 함께합니다."
        breadcrumb={[{ label: "협의회 소개" }]}
      />

      {/* Mission / Vision */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="미션 & 비전"
            title="우리가 추구하는 가치"
            className="mb-14"
          />

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-primary-light rounded-3xl p-8 border border-primary/10">
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">미션</h3>
              <p className="text-neutral-700 leading-relaxed">
                시흥시 시립어린이집 23개 기관이 함께 다문화 가정의 영유아를 위한 교육 연구와 프로그램을 개발하고,
                아이들이 건강하고 행복하게 성장할 수 있는 환경을 만들어 갑니다.
              </p>
            </div>
            <div className="bg-secondary-light rounded-3xl p-8 border border-secondary/10">
              <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">비전</h3>
              <p className="text-neutral-700 leading-relaxed">
                모든 아이가 평등하게 꿈꾸고 성장하는 다문화 공동체
              </p>
            </div>
          </div>

          {/* Core Values */}
          <h3 className="text-xl font-bold text-neutral-900 mb-6 text-center">핵심 가치</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {coreValues.map((v) => (
              <div key={v.title} className="text-center p-6 rounded-2xl bg-neutral-50 border border-neutral-100">
                <div className="text-3xl mb-3">{v.icon}</div>
                <div className="font-bold text-neutral-900 mb-2">{v.title}</div>
                <p className="text-sm text-neutral-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 lg:py-24 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="연혁" title="걸어온 길" className="mb-14" />
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[72px] top-0 bottom-0 w-0.5 bg-neutral-200 hidden sm:block" aria-hidden="true" />
            <div className="space-y-6">
              {history.map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 text-right hidden sm:block w-16">
                    <span className="text-sm font-bold text-primary">{item.year}</span>
                    <div className="text-xs text-neutral-400">{item.month}월</div>
                  </div>
                  <div className="hidden sm:flex flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-primary border-4 border-white shadow-sm z-10" aria-hidden="true" />
                  <div className="flex-1 bg-white rounded-xl p-4 border border-neutral-100 shadow-sm">
                    <div className="sm:hidden text-xs font-semibold text-primary mb-1">
                      {item.year}년 {item.month}월
                    </div>
                    <p className="text-sm text-neutral-700">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Org chart */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="조직도" title="협의회 조직 구성" className="mb-14" />
          <div className="bg-neutral-50 rounded-3xl p-8 border border-neutral-100">
            <div className="space-y-3">
              {/* 총회 */}
              <div className="flex justify-center">
                <div className="bg-primary text-white px-6 py-2.5 rounded-xl font-semibold text-sm">총회 (전체 회원)</div>
              </div>
              <div className="flex justify-center"><div className="w-0.5 h-4 bg-neutral-300" /></div>
              {/* 이사회 */}
              <div className="flex justify-center">
                <div className="bg-primary-dark text-white px-6 py-2.5 rounded-xl font-semibold text-sm">23개 참여 기관 원장·교사단</div>
              </div>
              <div className="flex justify-center"><div className="w-0.5 h-4 bg-neutral-300" /></div>
              {/* 회장 */}
              <div className="flex justify-center">
                <div className="bg-secondary text-white px-8 py-2.5 rounded-xl font-bold text-sm">회 장</div>
              </div>
              <div className="flex justify-center"><div className="w-0.5 h-4 bg-neutral-300" /></div>
              {/* 부회장, 감사, 사무국장 */}
              <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto">
                {["부회장 2인", "감사 2인", "사무국장"].map((t) => (
                  <div key={t} className="bg-white border border-neutral-200 rounded-xl px-3 py-2.5 text-sm font-medium text-neutral-700 text-center shadow-sm">{t}</div>
                ))}
              </div>
              <div className="flex justify-center"><div className="w-0.5 h-4 bg-neutral-300" /></div>
              {/* Teams */}
              <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto">
                {[
                  { name: "프로그램팀", sub: "교육·문화" },
                  { name: "상담지원팀", sub: "법률·생활" },
                  { name: "행정팀", sub: "총무·회계" },
                ].map((team) => (
                  <div key={team.name} className="bg-neutral-100 rounded-xl px-3 py-3 text-center border border-neutral-200">
                    <div className="text-sm font-semibold text-neutral-800">{team.name}</div>
                    <div className="text-xs text-neutral-500 mt-0.5">{team.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Docs download */}
      <section className="py-16 bg-neutral-50 border-t border-neutral-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold text-neutral-900 mb-6">규정 및 자료</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: "협의회 운영 규정", file: "/docs/협의회운영규정.md" },
              { name: "프로그램 운영 매뉴얼", file: "/docs/프로그램운영매뉴얼.md" },
            ].map((doc) => (
              <a
                key={doc.name}
                href={doc.file}
                className="flex items-center gap-4 bg-white rounded-xl p-4 border border-neutral-200 hover:border-primary/40 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="font-medium text-neutral-800 group-hover:text-primary transition-colors">{doc.name}</div>
                  <div className="text-xs text-neutral-400 mt-0.5">문서 보기</div>
                </div>
                <svg className="w-4 h-4 text-neutral-400 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
