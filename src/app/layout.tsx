import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-noto-sans-kr",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.github.io/sh-multicultural-assoc"),
  title: {
    template: "%s | 시흥시 영유아다문화 협회",
    default: "시흥시 영유아다문화 협회",
  },
  description:
    "시흥시 영유아다문화 협회는 다문화 가정의 영유아(0~7세)와 부모를 위한 언어·문화·정서 지원 프로그램을 운영하는 비영리 민간 협회입니다.",
  keywords: ["다문화", "영유아", "시흥시", "한국어교육", "다문화가족", "영유아프로그램"],
  openGraph: {
    siteName: "시흥시 영유아다문화 협회",
    locale: "ko_KR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={notoSansKR.variable}>
      <body className="min-h-screen flex flex-col" style={{ fontFamily: "var(--font-noto-sans-kr), 'Malgun Gothic', 'Apple SD Gothic Neo', sans-serif" }}>
        {/* Skip navigation for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg"
        >
          본문으로 바로가기
        </a>
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              name: "시흥시 영유아다문화 협회",
              alternateName: "Siheung City Infant and Toddler Multicultural Association",
              url: "https://example.github.io/sh-multicultural-assoc",
              telephone: "031-XXX-XXXX",
              email: "info@shmc.or.kr",
              address: {
                "@type": "PostalAddress",
                addressLocality: "시흥시",
                addressRegion: "경기도",
                addressCountry: "KR",
              },
              foundingDate: "2018",
            }),
          }}
        />
      </body>
    </html>
  );
}
