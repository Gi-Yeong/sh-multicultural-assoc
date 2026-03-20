import type { Notice } from "@/types/notice";

// Data access layer - replace import() with fetch() when migrating to CMS
export async function getAllNotices(): Promise<Notice[]> {
  const data = await import("@/content/notices/notices.json");
  const notices = data.default as Notice[];
  return notices.sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export async function getLatestNotices(count = 5): Promise<Notice[]> {
  const all = await getAllNotices();
  return all.slice(0, count);
}

export async function getNoticeById(id: string): Promise<Notice | undefined> {
  const all = await getAllNotices();
  return all.find((n) => n.id === id);
}
