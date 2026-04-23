import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "문의하기",
  description: "시흥시 영유아다문화교육협의회 오시는 길과 문의 방법을 안내합니다.",
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
    value: "(15069) 경기도 시흥시 도일로 112번길 12",
    href: undefined,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "휴대전화 (M)",
    value: "010-2740-2798",
    href: "tel:010-2740-2798",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12v7a2 2 0 01-2 2H7a2 2 0 01-2-2v-7M17 8V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2m-2 0h14v4H5V8z" />
      </svg>
    ),
    label: "팩스 (F)",
    value: "031-8056-9810",
    href: undefined,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "이메일 (E)",
    value: "eucai@naver.com",
    href: "mailto:eucai@naver.com",
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

export default function ContactPage() {
  const mailtoHref = "mailto:eucai@naver.com?subject=[문의] 시흥시 영유아다문화교육협의회";
  const kakaoMapUrl =
    "https://map.kakao.com/?q=" +
    encodeURIComponent("경기도 시흥시 도일로 112번길 12");

  return (
    <>
      <PageHero
        title="문의하기"
        description="궁금하신 점은 언제든지 연락해 주세요. 성심껏 안내해 드리겠습니다."
        breadcrumb={[{ label: "문의하기" }]}
      />

      <section className="py-16 lg:py-20 bg-primary-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left: Contact info + Map */}
            <div className="lg:col-span-3 space-y-6">
              {/* Representative card */}
              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-6 text-white shadow-lg shadow-primary/10">
                <div className="text-xs font-bold uppercase tracking-wider text-white/70 mb-1">
                  대표
                </div>
                <div className="text-2xl font-bold">이경채</div>
                <div className="text-sm text-white/80 mt-1">
                  시흥시 영유아다문화교육협의회
                </div>
              </div>

              {/* Info card */}
              <div className="bg-white rounded-2xl border border-primary/10 p-6 lg:p-7 shadow-sm">
                <h2 className="font-bold text-primary-darker text-lg mb-5">연락처 정보</h2>
                <ul className="space-y-4">
                  {contactInfo.map((item) => (
                    <li key={item.label} className="flex gap-4">
                      <div className="w-10 h-10 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0 text-primary">
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-primary uppercase tracking-wider">{item.label}</div>
                        {item.href ? (
                          <a href={item.href} className="text-sm text-neutral-800 hover:text-primary transition-colors mt-1 block break-all">
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-sm text-neutral-800 mt-1 break-keep">{item.value}</div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Map card */}
              <div className="bg-white rounded-2xl border border-primary/10 overflow-hidden shadow-sm">
                <div className="bg-primary-soft h-64 flex items-center justify-center text-neutral-500 text-sm">
                  <div className="text-center px-6">
                    <div className="w-14 h-14 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-3">
                      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <p className="font-semibold text-neutral-700">(15069) 경기도 시흥시 도일로 112번길 12</p>
                    <p className="text-xs text-neutral-500 mt-1">지도는 외부 서비스에서 확인하실 수 있습니다</p>
                  </div>
                </div>
                <div className="p-4 border-t border-neutral-100">
                  <a
                    href={kakaoMapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-primary hover:text-primary-dark flex items-center gap-1"
                  >
                    카카오맵에서 길찾기
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Inquiry form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-primary/10 p-6 lg:p-8 shadow-sm sticky top-24">
                <h2 className="font-bold text-primary-darker text-lg mb-1">문의 양식</h2>
                <p className="text-xs text-neutral-500 mb-6">아래 양식을 작성하시면 이메일이 열립니다.</p>
                <form
                  action={mailtoHref}
                  method="get"
                  className="space-y-5"
                  aria-label="문의 양식"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-1.5">
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
                    <label htmlFor="phone" className="block text-sm font-semibold text-neutral-700 mb-1.5">
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
                    <label htmlFor="inquiry-type" className="block text-sm font-semibold text-neutral-700 mb-1.5">
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
                    <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-1.5">
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
                      className="mt-0.5 w-4 h-4 rounded border-neutral-300 text-primary focus:ring-primary accent-primary"
                    />
                    <label htmlFor="privacy" className="text-sm text-neutral-600">
                      <span className="font-semibold text-neutral-800">개인정보 수집·이용에 동의합니다</span>
                      <span className="text-red-500" aria-hidden="true"> *</span>
                      <br />
                      <span className="text-xs text-neutral-400">수집 항목: 성함, 연락처 / 목적: 문의 답변 / 보유기간: 1년</span>
                    </label>
                  </div>

                  <div className="pt-2 space-y-3">
                    <a
                      href={mailtoHref}
                      className="block w-full text-center bg-primary text-white font-bold py-3.5 rounded-xl hover:bg-primary-dark transition-colors shadow-md shadow-primary/20"
                    >
                      이메일로 문의하기
                    </a>
                    <p className="text-xs text-neutral-400 text-center leading-relaxed">
                      버튼 클릭 시 메일 프로그램이 열립니다.<br />
                      직접 보내려면: <a href="mailto:eucai@naver.com" className="text-primary hover:underline">eucai@naver.com</a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
