import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "페이지를 찾을 수 없습니다",
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-8xl font-bold text-neutral-100 mb-4">404</div>
        <h1 className="text-2xl font-bold text-neutral-900 mb-3">
          페이지를 찾을 수 없습니다
        </h1>
        <p className="text-neutral-500 mb-8">
          요청하신 페이지가 존재하지 않거나 이동되었습니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-primary-dark transition-colors"
          >
            홈으로 이동
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-neutral-200 text-neutral-700 font-semibold px-6 py-3 rounded-full hover:bg-neutral-50 transition-colors"
          >
            문의하기
          </Link>
        </div>
      </div>
    </div>
  );
}
