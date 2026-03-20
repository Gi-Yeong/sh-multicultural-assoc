export type NoticeCategory = "공지사항" | "모집공고" | "행사안내" | "보도자료";

export interface NoticeAttachment {
  name: string;
  url: string;
}

export interface Notice {
  id: string;
  category: NoticeCategory;
  title: string;
  date: string;
  pinned: boolean;
  content: string;
  attachments?: NoticeAttachment[];
}
