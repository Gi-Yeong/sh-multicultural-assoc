import Link from "next/link";
import type { Notice } from "@/types/notice";
import Badge from "@/components/ui/Badge";
import SectionHeader from "@/components/ui/SectionHeader";

interface LatestNoticesProps {
  notices: Notice[];
}

export default function LatestNotices({ notices }: LatestNoticesProps) {
  const pinned = notices.find((n) => n.pinned);
  const list = notices.filter((n) => !n.pinned).slice(0, 5);

  return (
    <section className="py-20 lg:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="공지사항"
          title="최신 소식"
          className="mb-12"
        />

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Notice list */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-neutral-100 overflow-hidden">
            <ul className="divide-y divide-neutral-100">
              {list.map((notice) => (
                <li key={notice.id}>
                  <Link
                    href={`/notice/${notice.id}`}
                    className="flex items-center gap-4 px-6 py-4 hover:bg-neutral-50 transition-colors group"
                  >
                    <Badge label={notice.category} />
                    <span className="flex-1 text-sm font-medium text-neutral-800 group-hover:text-primary transition-colors line-clamp-1">
                      {notice.title}
                    </span>
                    {notice.attachments && notice.attachments.length > 0 && (
                      <svg className="w-4 h-4 text-neutral-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                      </svg>
                    )}
                    <span className="text-xs text-neutral-400 flex-shrink-0">{notice.date}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="px-6 py-4 border-t border-neutral-100">
              <Link
                href="/notice"
                className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                전체 공지 보기
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Pinned banner */}
          {pinned && (
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-6 text-white flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg">📌</span>
                  <Badge label={pinned.category} className="bg-white/20 text-white border-0" />
                </div>
                <h3 className="font-bold text-lg leading-snug mb-3">
                  {pinned.title}
                </h3>
                <p className="text-sm text-white/75 leading-relaxed line-clamp-3">
                  {pinned.content.split("\n")[0]}
                </p>
              </div>
              <Link
                href={`/notice/${pinned.id}`}
                className="mt-6 inline-flex items-center gap-2 bg-white text-primary font-semibold text-sm px-4 py-2.5 rounded-full hover:bg-neutral-50 transition-colors self-start"
              >
                자세히 보기
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
