import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "문의하기",
  description: "시흥시 영유아다문화 협의회 오시는 길과 문의 방법을 안내합니다.",
};

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "주소",
    value: "경기도 시흥시 [주소 입력 필요]",
    href: undefined,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "전화",
    value: "031-XXX-XXXX",
    href: "tel:031-XXX-XXXX",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "이메일",
    value: "info@shmc.or.kr",
    href: "mailto:info@shmc.or.kr",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "운영 시간",
    value: "평일 09:00 ~ 18:00 (토·일·공휴일 휴무)",
    href: undefined,
  },
];

const transit = [
  {
    type: "버스",
    icon: "🚌",
    lines: [
      "시흥 XX번, XX번: [정류장명] 하차 후 도보 5분",
      "광역 XXXX번: [정류장명] 하차 후 도보 10분",
    ],
  },
  {
    type: "지하철",
    icon: "🚇",
    lines: [
      "수도권 4호선 XXX역 1번 출구 → 버스 환승 후 3정거장",
    ],
  },
  {
    type: "자가용",
    icon: "🚗",
    lines: [
      "서해안고속도로 시흥 IC 이용",
      "주차장: 건물 지하 1층 (2시간 무료)",
    ],
  },
];

export default function ContactPage() {
  const mailtoHref = "mailto:info@shmc.or.kr?subject=[문의] 시흥시 영유아다문화 협의회";

  return (
    <>
      <PageHero
        title="문의하기"
        description="궁금하신 점은 언제든지 연락해 주세요. 성심껏 안내해 드리겠습니다."
        breadcrumb={[{ label: "문의하기" }]}
      />

      <section className="py-16 lg:py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Left: Contact info + Map */}
            <div className="space-y-6">
              {/* Info card */}
              <div className="bg-white rounded-2xl border border-neutral-100 p-6">
                <h2 className="font-bold text-neutral-900 text-lg mb-5">연락처 정보</h2>
                <ul className="space-y-4">
                  {contactInfo.map((item) => (
                    <li key={item.label} className="flex gap-4">
                      <div className="w-10 h-10 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0 text-primary">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">{item.label}</div>
                        {item.href ? (
                          <a href={item.href} className="text-sm text-neutral-800 hover:text-primary transition-colors mt-0.5 block">
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-sm text-neutral-800 mt-0.5">{item.value}</div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Map placeholder */}
              <div className="bg-white rounded-2xl border border-neutral-100 overflow-hidden">
                <div className="bg-neutral-100 h-64 flex items-center justify-center text-neutral-400 text-sm">
                  <div className="text-center">
                    <div className="text-4xl mb-3">🗺️</div>
                    <p>카카오맵 주소 입력 후 활성화됩니다</p>
                    <p className="text-xs mt-1">경기도 시흥시 [주소 입력 필요]</p>
                  </div>
                </div>
                <div className="p-4 border-t border-neutral-100">
                  <a
                    href="https://map.kakao.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-secondary hover:underline flex items-center gap-1"
                  >
                    카카오맵에서 크게 보기
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Transit */}
              <div className="bg-white rounded-2xl border border-neutral-100 p-6">
                <h2 className="font-bold text-neutral-900 text-lg mb-5">대중교통 안내</h2>
                <div className="space-y-4">
                  {transit.map((t) => (
                    <div key={t.type}>
                      <div className="flex items-center gap-2 font-semibold text-sm text-neutral-800 mb-2">
                        <span>{t.icon}</span> {t.type}
                      </div>
                      <ul className="space-y-1">
                        {t.lines.map((line, i) => (
                          <li key={i} className="text-sm text-neutral-500 pl-6 relative before:absolute before:left-2 before:top-2 before:w-1.5 before:h-1.5 before:bg-neutral-300 before:rounded-full">
                            {line}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Inquiry form */}
            <div>
              <div className="bg-white rounded-2xl border border-neutral-100 p-6 lg:p-8">
                <h2 className="font-bold text-neutral-900 text-lg mb-6">문의 양식</h2>
                <form
                  action={mailtoHref}
                  method="get"
                  className="space-y-5"
                  aria-label="문의 양식"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1.5">
                      성함 <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      name="body"
                      type="text"
                      required
                      placeholder="홍길동"
                      className="w-full px-4 py-2.5 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1.5">
                      연락처 <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="010-0000-0000"
                      className="w-full px-4 py-2.5 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="inquiry-type" className="block text-sm font-medium text-neutral-700 mb-1.5">
                      문의 유형
                    </label>
                    <select
                      id="inquiry-type"
                      className="w-full px-4 py-2.5 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-white"
                    >
                      <option value="">선택해 주세요</option>
                      <option value="program">프로그램 신청</option>
                      <option value="general">일반 문의</option>
                      <option value="partner">협력 제안</option>
                      <option value="other">기타</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1.5">
                      문의 내용 <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="body"
                      required
                      rows={5}
                      placeholder="문의하실 내용을 입력해 주세요."
                      className="w-full px-4 py-2.5 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                    />
                  </div>
                  <div className="flex items-start gap-3">
                    <input
                      id="privacy"
                      type="checkbox"
                      required
                      className="mt-0.5 w-4 h-4 rounded border-neutral-300 text-primary focus:ring-primary"
                    />
                    <label htmlFor="privacy" className="text-sm text-neutral-600">
                      <span className="font-medium text-neutral-800">개인정보 수집·이용에 동의합니다</span>
                      <span className="text-red-500" aria-hidden="true"> *</span>
                      <br />
                      <span className="text-xs text-neutral-400">수집 항목: 성함, 연락처 / 목적: 문의 답변 / 보유기간: 1년</span>
                    </label>
                  </div>

                  <div className="pt-2 space-y-3">
                    <a
                      href={mailtoHref}
                      className="block w-full text-center bg-primary text-white font-semibold py-3.5 rounded-xl hover:bg-primary-dark transition-colors"
                    >
                      이메일로 문의하기
                    </a>
                    <p className="text-xs text-neutral-400 text-center">
                      버튼 클릭 시 이메일 프로그램이 열립니다. 이메일을 직접 보내셔도 됩니다: info@shmc.or.kr
                    </p>
                  </div>
                </form>
              </div>

              {/* Kakao Channel */}
              <div className="mt-5 bg-yellow-50 border border-yellow-200 rounded-2xl p-5 flex items-center gap-4">
                <div className="text-3xl">💬</div>
                <div>
                  <div className="font-semibold text-neutral-900 text-sm">카카오톡으로 편하게 문의하세요</div>
                  <div className="text-xs text-neutral-500 mt-0.5">카카오톡 채널: 시흥시영유아다문화협의회</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
