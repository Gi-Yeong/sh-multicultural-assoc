import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import articlesData from "@/content/news/articles.json";

export const metadata: Metadata = {
  title: "언론보도",
  description:
    "시흥시 영유아다문화교육협의회 관련 언론 보도 및 기사를 소개합니다.",
};

interface Article {
  id: number;
  title: string;
  source: string;
  date: string;
  url: string;
  excerpt: string;
}

const articles: Article[] = articlesData;

function formatDate(dateStr: string) {
  const [year, month, day] = dateStr.split("-");
  return `${year}년 ${month}월 ${day}일`;
}

export default function NewsPage() {
  return (
    <>
      <PageHero
        title="언론보도"
        description="영유아다문화교육협의회의 활동과 소식을 다룬 언론 기사들을 모았습니다."
        breadcrumb={[{ label: "언론보도" }]}
      />

      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Press"
            title="보도 기사"
            className="mb-14"
          />

          {articles.length > 0 ? (
            <div className="space-y-6">
              {articles.map((article) => (
                <a
                  key={article.id}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white rounded-2xl border border-neutral-200 p-6 hover:border-primary/40 hover:shadow-lg transition-all"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="inline-block bg-primary-light text-primary text-xs font-semibold px-3 py-1 rounded-full">
                      {article.source}
                    </span>
                    <time
                      dateTime={article.date}
                      className="text-sm text-neutral-400"
                    >
                      {formatDate(article.date)}
                    </time>
                  </div>
                  <h2 className="text-lg font-bold text-neutral-900 group-hover:text-primary transition-colors mb-2 leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    기사 보기
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </span>
                </a>
              ))}
            </div>
          ) : (
            <p className="text-neutral-500 text-center py-16">
              등록된 기사가 없습니다.
            </p>
          )}

          {/* 추가 안내 */}
          <div className="mt-12 bg-neutral-50 rounded-2xl border border-neutral-100 p-6 flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-secondary-light flex items-center justify-center flex-shrink-0">
              <svg
                className="w-5 h-5 text-secondary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-neutral-800 mb-1">
                기사 추가 예정
              </p>
              <p className="text-sm text-neutral-500 leading-relaxed">
                협의회 관련 보도 기사가 확인되는 대로 이 페이지에 추가됩니다.
                기사 링크를 알고 계신 경우 관리자에게 알려주세요.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
