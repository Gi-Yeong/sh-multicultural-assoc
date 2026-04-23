import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { getAllNotices, getNoticeById } from "@/lib/getNotices";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const notices = await getAllNotices();
  return notices.map((n) => ({ id: n.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const notice = await getNoticeById(id);
  if (!notice) return {};
  return {
    title: notice.title,
  };
}

export default async function NoticeDetailPage({ params }: Props) {
  const { id } = await params;
  const notice = await getNoticeById(id);
  if (!notice) notFound();

  return (
    <>
      <div className="bg-gradient-to-br from-primary via-primary-dark to-primary-darker text-white py-14 lg:py-18">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "공지사항", href: "/notice" },
              { label: notice.title },
            ]}
          />
          <div className="flex items-center gap-3 mt-5 mb-4">
            {notice.pinned && <span className="text-lg">📌</span>}
            <Badge label={notice.category} className="bg-white/20 text-white border-0" />
          </div>
          <h1 className="text-2xl lg:text-3xl font-bold leading-snug">{notice.title}</h1>
          <p className="mt-3 text-sm text-neutral-400">{notice.date}</p>
        </div>
      </div>

      <section className="py-12 lg:py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-neutral-100 p-8">
            {/* Content - preserving newlines */}
            <div className="prose-like text-neutral-700 leading-relaxed whitespace-pre-line text-sm lg:text-base">
              {notice.content}
            </div>

            {/* Attachments */}
            {notice.attachments && notice.attachments.length > 0 && (
              <div className="mt-8 pt-6 border-t border-neutral-100">
                <h3 className="text-sm font-semibold text-neutral-700 mb-3">첨부파일</h3>
                <ul className="space-y-2">
                  {notice.attachments.map((att) => (
                    <li key={att.name}>
                      <a
                        href={att.url}
                        className="flex items-center gap-3 text-sm text-secondary hover:text-secondary-dark hover:underline"
                        download
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        {att.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="mt-6 flex justify-between">
            <Link
              href="/notice"
              className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-primary transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              목록으로
            </Link>
            <a
              href="mailto:eucai@naver.com"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              문의하기
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
