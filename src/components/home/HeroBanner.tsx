import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary-dark to-orange-800 text-white overflow-hidden min-h-[560px] flex items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full" />
        <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-white/5 rounded-full" />
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-white/5 rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <div>
          <div className="inline-flex items-center gap-2 bg-white/20 text-white/90 text-sm font-medium px-3 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            2025년 상반기 프로그램 모집 중
          </div>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
            다문화 가정의<br />
            아이들이 행복하게<br />
            <span className="text-yellow-300">자라는 시흥시</span>
          </h1>
          <p className="text-lg lg:text-xl text-white/85 leading-relaxed mb-8 max-w-lg">
            시흥시 영유아다문화 협의회가 다문화 가정의 영유아와 부모 곁에서 함께합니다.
            언어·문화·정서 지원 프로그램으로 모든 아이의 건강한 성장을 돕습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/kids"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary font-semibold px-6 py-3.5 rounded-full hover:bg-neutral-50 transition-colors shadow-lg"
            >
              프로그램 알아보기
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/intro"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/60 text-white font-semibold px-6 py-3.5 rounded-full hover:bg-white/10 hover:border-white transition-colors"
            >
              협의회 소개
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 lg:gap-6">
          {[
            { number: "2018", label: "설립 연도", sub: "7년의 역사" },
            { number: "420+", label: "등록 회원", sub: "다문화 가정" },
            { number: "12개", label: "운영 프로그램", sub: "다양한 지원" },
            { number: "15개국", label: "출신 국가", sub: "다양한 문화" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/15 backdrop-blur-sm rounded-2xl p-5 text-center border border-white/20"
            >
              <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-sm font-medium text-white/90">{stat.label}</div>
              <div className="text-xs text-white/60 mt-0.5">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
