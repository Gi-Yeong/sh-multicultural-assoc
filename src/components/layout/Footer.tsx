import Link from "next/link";

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
    <footer className="bg-neutral-900 text-neutral-300" aria-label="사이트 하단">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Col 1: Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-white text-sm">시흥시 영유아다문화 협의회</div>
                <div className="text-xs text-neutral-400">Siheung Multicultural Association</div>
              </div>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              다문화 가정의 영유아와 부모를 위해 함께하는 시흥시의 따뜻한 손길
            </p>
            <p className="text-xs text-neutral-500 mt-3">
              고유번호: 134-82-XXXXX
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">바로가기</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">연락처</h3>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li className="flex gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                경기도 시흥시 [주소 입력 필요]
              </li>
              <li className="flex gap-2">
                <svg className="w-4 h-4 flex-shrink-0 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:031-XXX-XXXX" className="hover:text-white transition-colors">031-XXX-XXXX</a>
              </li>
              <li className="flex gap-2">
                <svg className="w-4 h-4 flex-shrink-0 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@shmc.or.kr" className="hover:text-white transition-colors">info@shmc.or.kr</a>
              </li>
              <li className="flex gap-2">
                <svg className="w-4 h-4 flex-shrink-0 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                평일 09:00 ~ 18:00 (토·일·공휴일 휴무)
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-neutral-500">
          <span>© 2025 시흥시 영유아다문화 협의회. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-neutral-300 transition-colors">개인정보처리방침</Link>
            <Link href="/sitemap.xml" className="hover:text-neutral-300 transition-colors">사이트맵</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
