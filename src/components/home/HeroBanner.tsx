import Image from "next/image";
import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const logoSrc = `${basePath}/images/logo/logo-mark.svg`;

export default function HeroBanner() {
  return (
    <section className="relative bg-primary-soft text-neutral-900 overflow-hidden">
      {/* Subtle decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-[480px] h-[480px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[520px] h-[520px] bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
        {/* Text content */}
        <div>
          <div className="inline-flex items-center gap-2 bg-white border border-primary/20 text-primary-dark text-xs font-semibold px-3 py-1.5 rounded-full mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            2026년 상반기 프로그램 모집 중
          </div>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.15] mb-6 text-primary-darker">
            다문화 가정의 아이들이<br />
            건강하게 자라는<br />
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">시흥시</span>
              <span className="absolute left-0 right-0 bottom-1 h-3 bg-secondary/40 -z-0" aria-hidden="true" />
            </span>
          </h1>
          <p className="text-base lg:text-lg text-neutral-700 leading-relaxed mb-8 max-w-xl">
            시흥시 시립어린이집 23개 기관이 함께하는 영유아다문화교육협의회.<br />
            언어·문화·정서 지원 프로그램으로 모든 아이의 행복한 성장을 응원합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/kids"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-7 py-3.5 rounded-full hover:bg-primary-dark transition-colors shadow-md shadow-primary/20"
            >
              프로그램 알아보기
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/intro"
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary/30 text-primary-dark font-semibold px-7 py-3.5 rounded-full hover:border-primary hover:bg-primary-soft transition-colors"
            >
              협의회 소개
            </Link>
          </div>
        </div>

        {/* Right: logo card + stats */}
        <div className="relative">
          <div className="relative bg-white rounded-3xl p-8 lg:p-10 border border-primary/10 shadow-xl shadow-primary/5">
            <div className="flex flex-col items-center text-center pb-6 border-b border-neutral-100">
              <Image
                src={logoSrc}
                alt="영유아다문화교육협의회 로고"
                width={140}
                height={140}
                priority
                className="w-28 h-28 lg:w-32 lg:h-32 object-contain mb-4"
              />
              <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                Since 2008
              </div>
              <div className="font-bold text-primary-darker text-lg">
                영유아다문화교육협의회
              </div>
              <div className="text-xs text-neutral-500 mt-1">
                시흥시 시립어린이집 23개 기관
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 pt-6">
              {[
                { number: "23", label: "참여 기관", sub: "시립어린이집" },
                { number: "18", label: "년의 역사", sub: "2008년 창립" },
                { number: "15+", label: "출신 국가", sub: "다양한 문화" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center"
                >
                  <div className="text-2xl lg:text-3xl font-bold text-primary">{stat.number}</div>
                  <div className="text-xs font-semibold text-neutral-800 mt-1">{stat.label}</div>
                  <div className="text-[10px] text-neutral-400 mt-0.5">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Floating badge */}
          <div className="hidden lg:flex absolute -bottom-5 -left-5 bg-secondary text-white px-4 py-2.5 rounded-full shadow-lg items-center gap-2 text-sm font-semibold">
            <span className="text-base">🌱</span>
            함께 자라는 우리
          </div>
        </div>
      </div>
    </section>
  );
}
