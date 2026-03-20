"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/intro", label: "협의회 소개" },
  { href: "/kids", label: "영유아 프로그램" },
  { href: "/multi", label: "다문화 지원" },
  { href: "/notice", label: "공지사항" },
  { href: "/contact", label: "문의하기" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    onClose();
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        onClick={onClose}
        aria-hidden="true"
      />
      {/* Drawer */}
      <div
        className="fixed top-0 right-0 h-full w-72 bg-white z-50 lg:hidden shadow-2xl flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-label="모바일 메뉴"
      >
        <div className="flex items-center justify-between p-5 border-b border-neutral-200">
          <span className="font-bold text-neutral-900">메뉴</span>
          <button
            onClick={onClose}
            aria-label="메뉴 닫기"
            className="p-2 rounded-lg hover:bg-neutral-100 transition-colors"
          >
            <svg
              className="w-5 h-5 text-neutral-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4" aria-label="모바일 내비게이션">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center px-6 py-4 text-base font-medium border-b border-neutral-100 transition-colors ${
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

        <div className="p-5 border-t border-neutral-200 space-y-2">
          <div className="flex items-center gap-2 text-sm text-neutral-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            031-XXX-XXXX
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            info@shmc.or.kr
          </div>
        </div>
      </div>
    </>
  );
}
