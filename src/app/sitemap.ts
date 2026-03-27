export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { getKidsPrograms, getMultiPrograms } from "@/lib/getPrograms";
import { getAllNotices } from "@/lib/getNotices";

const BASE = "https://example.github.io/sh-multicultural-assoc";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [kids, multi, notices] = await Promise.all([
    getKidsPrograms(),
    getMultiPrograms(),
    getAllNotices(),
  ]);

  return [
    { url: BASE, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/intro`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/kids`, changeFrequency: "weekly", priority: 0.9 },
    ...kids.map((p) => ({
      url: `${BASE}/kids/${p.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${BASE}/multi`, changeFrequency: "weekly", priority: 0.9 },
    ...multi.map((p) => ({
      url: `${BASE}/multi/${p.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${BASE}/notice`, changeFrequency: "daily", priority: 0.8 },
    ...notices.map((n) => ({
      url: `${BASE}/notice/${n.id}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    { url: `${BASE}/news`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`, changeFrequency: "monthly", priority: 0.7 },
  ];
}
