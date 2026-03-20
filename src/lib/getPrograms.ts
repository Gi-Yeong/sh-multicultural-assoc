import type { Program } from "@/types/program";

// Data access layer - replace import() with fetch() when migrating to CMS
export async function getKidsPrograms(): Promise<Program[]> {
  const data = await import("@/content/programs/kids.json");
  return data.default as Program[];
}

export async function getKidsProgramBySlug(
  slug: string
): Promise<Program | undefined> {
  const programs = await getKidsPrograms();
  return programs.find((p) => p.slug === slug);
}

export async function getMultiPrograms(): Promise<Program[]> {
  const data = await import("@/content/programs/multi.json");
  return data.default as Program[];
}

export async function getMultiProgramBySlug(
  slug: string
): Promise<Program | undefined> {
  const programs = await getMultiPrograms();
  return programs.find((p) => p.slug === slug);
}
