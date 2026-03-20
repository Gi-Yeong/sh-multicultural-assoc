import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Badge from "@/components/ui/Badge";
import { getAllNotices } from "@/lib/getNotices";
import type { NoticeCategory } from "@/types/notice";

export const metadata: Metadata = {
  title: "공지사항",
  description: "시흥시 영유아다문화 협회의 공지사항, 모집공고, 행사 안내를 확인하세요.",
};

const CATEGORIES: (NoticeCategory | "전체")[] = ["전체", "공지사항", "모집공고", "행사안내"];

export default async function NoticePage() {
  const notices = await getAllNotices();

  const pinned = notices.filter((n) => n.pinned);
  const regular = notices.filter((n) => !n.pinned);

  return (
    <>
      <PageHero
        title="공지사항"
        description="협회의 최신 소식과 프로그램 모집 공고를 안내합니다."
        breadcrumb={[{ label: "공지사항" }]}
      />

      <section className="py-12 lg:py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Pinned */}
          {pinned.length > 0 && (
            <div className="mb-8 space-y-3">
              {pinned.map((notice) => (
                <Link
                  key={notice.id}
                  href={`/notice/${notice.id}`}
                  className="flex items-center gap-4 bg-primary-light border border-primary/20 rounded-xl px-5 py-4 hover:bg-primary/10 transition-colors group"
                >
                  <span className="text-lg">📌</span>
                  <Badge label={notice.category} />
                  <span className="flex-1 font-semibold text-neutral-900 group-hover:text-primary transition-colors line-clamp-1">
                    {notice.title}
                  </span>
                  <span className="text-xs text-neutral-400 flex-shrink-0">{notice.date}</span>
                </Link>
              ))}
            </div>
          )}

          {/* Regular list */}
          <div className="bg-white rounded-2xl border border-neutral-100 overflow-hidden">
            {/* Header */}
            <div className="hidden sm:grid grid-cols-[auto_1fr_auto_auto] gap-4 px-6 py-3 bg-neutral-50 border-b border-neutral-100 text-xs font-semibold text-neutral-500 uppercase tracking-wide">
              <span>분류</span>
              <span>제목</span>
              <span>파일</span>
              <span>날짜</span>
            </div>
            <ul className="divide-y divide-neutral-100">
              {regular.map((notice) => (
                <li key={notice.id}>
                  <Link
                    href={`/notice/${notice.id}`}
                    className="flex items-center gap-4 px-6 py-4 hover:bg-neutral-50 transition-colors group"
                  >
                    <Badge label={notice.category} className="flex-shrink-0" />
                    <span className="flex-1 text-sm font-medium text-neutral-800 group-hover:text-primary transition-colors line-clamp-1">
                      {notice.title}
                    </span>
                    <span className="flex-shrink-0 w-5">
                      {notice.attachments && notice.attachments.length > 0 ? (
                        <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                        </svg>
                      ) : null}
                    </span>
                    <span className="text-xs text-neutral-400 flex-shrink-0">{notice.date}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
