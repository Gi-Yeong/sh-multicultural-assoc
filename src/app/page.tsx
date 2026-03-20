import type { Metadata } from "next";
import HeroBanner from "@/components/home/HeroBanner";
import QuickNav from "@/components/home/QuickNav";
import AboutTeaser from "@/components/home/AboutTeaser";
import ProgramsPreview from "@/components/home/ProgramsPreview";
import LatestNotices from "@/components/home/LatestNotices";
import { getKidsPrograms } from "@/lib/getPrograms";
import { getLatestNotices } from "@/lib/getNotices";

export const metadata: Metadata = {
  title: "시흥시 영유아다문화 협의회",
  description:
    "시흥시 영유아다문화 협의회는 다문화 가정의 영유아와 부모를 위한 언어·문화·정서 지원 프로그램을 운영합니다.",
};

export default async function HomePage() {
  const [programs, notices] = await Promise.all([
    getKidsPrograms(),
    getLatestNotices(6),
  ]);

  return (
    <>
      <HeroBanner />
      <QuickNav />
      <AboutTeaser />
      <ProgramsPreview programs={programs} />
      <LatestNotices notices={notices} />
    </>
  );
}
