import Link from "next/link";

const items = [
  {
    href: "/kids",
    title: "영유아 프로그램",
    desc: "0~7세 언어·발달·문화 프로그램",
    color: "text-primary bg-primary-light",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    href: "/multi",
    title: "다문화 지원",
    desc: "이민자·다문화 가정 종합 지원",
    color: "text-secondary bg-secondary-light",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: "/notice",
    title: "공지사항",
    desc: "모집공고·행사·협회 소식",
    color: "text-amber-600 bg-amber-50",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
  {
    href: "/contact",
    title: "문의하기",
    desc: "오시는 길·상담 신청",
    color: "text-green-700 bg-green-50",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function QuickNav() {
  return (
    <section className="py-10 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col items-center text-center p-5 rounded-2xl border border-neutral-100 hover:border-neutral-200 hover:shadow-md transition-all"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${item.color}`}>
                {item.icon}
              </div>
              <span className="font-semibold text-neutral-900 text-sm mb-1 group-hover:text-primary transition-colors">
                {item.title}
              </span>
              <span className="text-xs text-neutral-500">{item.desc}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
