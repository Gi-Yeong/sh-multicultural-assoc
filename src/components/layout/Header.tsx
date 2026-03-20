"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { href: "/intro", label: "협회 소개" },
  { href: "/kids", label: "영유아 프로그램" },
  { href: "/multi", label: "다문화 지원" },
  { href: "/notice", label: "공지사항" },
  { href: "/contact", label: "문의하기" },
];

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
      {/* Top bar */}
      <div className="hidden lg:block bg-neutral-900 text-neutral-300 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2">
          <span>시흥시 영유아다문화 협회에 오신 것을 환영합니다</span>
          <div className="flex items-center gap-6">
            <a href="tel:031-XXX-XXXX" className="hover:text-white transition-colors flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              031-XXX-XXXX
            </a>
            <a href="mailto:info@shmc.or.kr" className="hover:text-white transition-colors flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@shmc.or.kr
            </a>
            <span className="text-neutral-500">|</span>
            <span>평일 09:00 ~ 18:00</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-30 bg-white transition-shadow duration-200 ${
          scrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 flex-shrink-0"
              aria-label="시흥시 영유아다문화 협회 홈으로"
            >
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="leading-tight">
                <div className="font-bold text-neutral-900 text-sm lg:text-base">시흥시 영유아다문화 협회</div>
                <div className="text-xs text-neutral-500 hidden sm:block">Siheung Multicultural Association</div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="주 내비게이션">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href || pathname.startsWith(link.href + "/");
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "text-primary bg-primary-light"
                        : "text-neutral-700 hover:text-primary hover:bg-neutral-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="메뉴 열기"
              aria-expanded={mobileOpen}
            >
              <svg className="w-6 h-6 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
