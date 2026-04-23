import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { getKidsPrograms, getKidsProgramBySlug } from "@/lib/getPrograms";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const programs = await getKidsPrograms();
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = await getKidsProgramBySlug(slug);
  if (!program) return {};
  return {
    title: program.title,
    description: program.description,
  };
}

export default async function KidsProgramDetailPage({ params }: Props) {
  const { slug } = await params;
  const program = await getKidsProgramBySlug(slug);
  if (!program) notFound();

  const spotsLeft = program.capacity - program.enrolled;

  return (
    <>
      <div className="bg-gradient-to-br from-primary to-primary-dark text-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "영유아 프로그램", href: "/kids" },
              { label: program.title },
            ]}
          />
          <div className="flex flex-wrap items-center gap-3 mt-5 mb-4">
            <Badge label={program.category} className="bg-white/20 text-white border-0" />
            <Badge label={program.status} variant="status" className="bg-white/20 text-white border-0" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold">{program.title}</h1>
        </div>
      </div>

      <section className="py-12 lg:py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Detail */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-neutral-100">
                <h2 className="font-bold text-neutral-900 text-lg mb-3">프로그램 소개</h2>
                <p className="text-neutral-600 leading-relaxed">{program.description}</p>
              </div>

              {program.details.length > 0 && (
                <div className="bg-white rounded-2xl p-6 border border-neutral-100">
                  <h2 className="font-bold text-neutral-900 text-lg mb-4">프로그램 상세</h2>
                  <ul className="space-y-3">
                    {program.details.map((d, i) => (
                      <li key={i} className="flex gap-3 text-sm text-neutral-600">
                        <span className="w-5 h-5 rounded-full bg-primary-light text-primary flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                          {i + 1}
                        </span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="bg-white rounded-2xl p-6 border border-neutral-100">
                <h3 className="font-bold text-neutral-900 mb-4">프로그램 정보</h3>
                <dl className="space-y-3 text-sm">
                  {[
                    { dt: "시작일", dd: program.startDate },
                    { dt: "일정", dd: program.schedule },
                    { dt: "장소", dd: program.location },
                    { dt: "대상", dd: program.ageRange },
                    { dt: "참가비", dd: program.tuition },
                    { dt: "강사", dd: program.instructor },
                  ].map(({ dt, dd }) => (
                    <div key={dt} className="flex flex-col gap-0.5">
                      <dt className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">{dt}</dt>
                      <dd className="text-neutral-800">{dd}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Capacity */}
              <div className="bg-white rounded-2xl p-6 border border-neutral-100">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-neutral-700">모집 현황</span>
                  <span className="text-sm font-bold text-primary">
                    {program.enrolled}/{program.capacity}명
                  </span>
                </div>
                <div className="w-full bg-neutral-100 rounded-full h-2 mb-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: `${Math.min((program.enrolled / program.capacity) * 100, 100)}%` }}
                  />
                </div>
                <p className="text-xs text-neutral-500">
                  {program.status === "모집중" ? `잔여 ${spotsLeft}자리` : program.status}
                </p>
              </div>

              {/* CTA */}
              <a
                href={`mailto:eucai@naver.com?subject=[신청] ${program.title}`}
                className={`block w-full text-center font-semibold py-3.5 rounded-xl transition-colors ${
                  program.status === "모집중"
                    ? "bg-primary text-white hover:bg-primary-dark"
                    : "bg-neutral-100 text-neutral-400 cursor-not-allowed"
                }`}
              >
                {program.status === "모집중" ? "이메일로 신청하기" : "모집 종료"}
              </a>
              <Link
                href="/kids"
                className="block w-full text-center text-sm text-neutral-500 hover:text-primary transition-colors"
              >
                ← 목록으로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
