"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { href: "/intro", label: "협의회 소개" },
  { href: "/kids", label: "영유아 프로그램" },
  { href: "/multi", label: "다문화 지원" },
  { href: "/news", label: "언론보도" },
  { href: "/notice", label: "공지사항" },
  { href: "/contact", label: "문의하기" },
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const logoSrc = `${basePath}/images/logo/logo-mark.svg`;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden lg:block bg-primary-darker text-primary-light/90 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2">
          <span className="tracking-wide">시흥시 영유아다문화교육협의회 · 모두의 아이들이 함께 자라는 시흥</span>
          <div className="flex items-center gap-5">
            <a href="tel:010-2740-2798" className="hover:text-white transition-colors flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              010-2740-2798
            </a>
            <a href="mailto:eucai@naver.com" className="hover:text-white transition-colors flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              eucai@naver.com
            </a>
            <span className="text-primary-light/40">|</span>
            <span>평일 09:00 ~ 18:00</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-30 bg-white transition-all duration-200 ${
          scrolled ? "shadow-md border-b border-neutral-100" : "border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 flex-shrink-0 group"
              aria-label="시흥시 영유아다문화교육협의회 홈으로"
            >
              <Image
                src={logoSrc}
                alt="영유아다문화교육협의회 로고"
                width={48}
                height={48}
                priority
                className="w-11 h-11 lg:w-12 lg:h-12 object-contain"
              />
              <div className="leading-tight">
                <div className="font-bold text-primary-darker text-sm lg:text-base tracking-tight">
                  시흥시 영유아다문화교육협의회
                </div>
                <div className="text-[11px] text-neutral-500 hidden sm:block tracking-wide">
                  Siheung Infant & Toddler Multicultural Education Council
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5" aria-label="주 내비게이션">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href || pathname.startsWith(link.href + "/");
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2.5 rounded-full text-sm font-semibold transition-all ${
                      isActive
                        ? "text-primary bg-primary-light"
                        : "text-neutral-700 hover:text-primary hover:bg-primary-soft"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-1 h-1 rounded-full bg-primary" aria-hidden="true" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-primary-soft transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="메뉴 열기"
              aria-expanded={mobileOpen}
            >
              <svg className="w-6 h-6 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
