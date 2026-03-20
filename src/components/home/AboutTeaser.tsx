import Link from "next/link";

const stats = [
  { number: "2018", label: "설립 연도" },
  { number: "420+", label: "등록 회원 가정" },
  { number: "12개", label: "운영 프로그램" },
];

export default function AboutTeaser() {
  return (
    <section className="py-20 lg:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
              협의회 소개
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6 leading-tight">
              다문화 가정과 함께<br />성장하는 시흥시
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-6">
              시흥시 영유아다문화 협의회는 2018년 설립된 비영리 민간 협의회로,
              다문화 가정의 영유아(0~7세) 아동과 그 부모를 위한
              언어·문화·정서 지원 프로그램을 운영합니다.
            </p>
            <p className="text-base text-neutral-500 leading-relaxed mb-8">
              모든 아이가 자신의 뿌리를 자랑스럽게 여기고 한국 사회에서
              당당하게 성장할 수 있도록, 전문가 팀이 가정과 함께 합니다.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-primary">{stat.number}</div>
                  <div className="text-xs text-neutral-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <Link
              href="/intro"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              협의회 소개 더보기
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Visual card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 text-white">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-lg">미션</div>
                  <div className="text-white/80 text-sm mt-1 leading-relaxed">
                    다문화 가정의 영유아가 건강하고 행복하게 성장할 수 있는 환경을 만들며, 문화적 다양성을 존중하는 시흥시를 만들어 갑니다
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-lg">비전</div>
                  <div className="text-white/80 text-sm mt-1 leading-relaxed">
                    모든 아이가 평등하게 꿈꾸고 성장하는 다문화 공동체
                  </div>
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg px-5 py-3 border border-neutral-100">
              <div className="text-xs text-neutral-500">2025년 운영 현황</div>
              <div className="font-bold text-neutral-900 mt-0.5">총 892명 참여</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
