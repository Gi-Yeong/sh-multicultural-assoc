export type ProgramCategory =
  | "언어교육"
  | "발달지원"
  | "문화체험"
  | "부모교육"
  | "언어지원"
  | "상담지원"
  | "문화통합"
  | "긴급지원";

export type ProgramStatus = "모집중" | "모집완료" | "운영중" | "종료";
export type ProgramType = "kids" | "multi";

export interface Program {
  slug: string;
  title: string;
  category: ProgramCategory;
  status: ProgramStatus;
  startDate: string;
  schedule: string;
  location: string;
  capacity: number;
  enrolled: number;
  ageRange: string;
  tuition: string;
  description: string;
  instructor: string;
  image: string;
  details: string[];
}
