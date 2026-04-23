import Image from "next/image";
import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const logoSrc = `${basePath}/images/logo/logo-mark.svg`;

const quickLinks = [
  { href: "/intro", label: "협의회 소개" },
  { href: "/kids", label: "영유아 프로그램" },
  { href: "/multi", label: "다문화 지원" },
  { href: "/news", label: "언론보도" },
  { href: "/notice", label: "공지사항" },
  { href: "/contact", label: "문의하기" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-darker text-primary-light/70" aria-label="사이트 하단">
      {/* Top green band */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Image
                    src={logoSrc}
                    alt="영유아다문화교육협의회 로고"
                    width={56}
                    height={56}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div>
                  <div className="font-bold text-white text-base leading-tight">시흥시 영유아다문화교육협의회</div>
                  <div className="text-[11px] text-primary-light/60 mt-0.5 tracking-wide">
                    Siheung Infant & Toddler Multicultural Education Council
                  </div>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-primary-light/80">
                2008년 시흥시 시립어린이집 18개 기관이 모여 시작한<br />
                영유아 다문화교육 연구와 프로그램 운영 협의회입니다.
              </p>
              <div className="mt-5 text-xs text-primary-light/60 space-y-1">
                <div>대표 <span className="text-white font-medium">이경채</span></div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3">
              <h3 className="text-sm font-semibold text-white mb-4">바로가기</h3>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-light/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-4">
              <h3 className="text-sm font-semibold text-white mb-4">연락처</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <svg className="w-4 h-4 mt-1 flex-shrink-0 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-primary-light/80 leading-relaxed">
                    (15069) 경기도 시흥시<br />도일로 112번길 12
                  </span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:010-2740-2798" className="text-primary-light/80 hover:text-white transition-colors">
                    M. 010-2740-2798
                  </a>
                </li>
                <li className="flex gap-3">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12v7a2 2 0 01-2 2H7a2 2 0 01-2-2v-7M17 8V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2m-2 0h14v4H5V8z" />
                  </svg>
                  <span className="text-primary-light/80">
                    F. 031-8056-9810
                  </span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:eucai@naver.com" className="text-primary-light/80 hover:text-white transition-colors">
                    E. eucai@naver.com
                  </a>
                </li>
                <li className="flex gap-3">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-primary-light/80">평일 09:00 ~ 18:00 (토·일·공휴일 휴무)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-primary-light/50">
          <span>© 2026 시흥시 영유아다문화교육협의회. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">개인정보처리방침</Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">사이트맵</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
