"use client";

import { useState } from "react";
import type { Program, ProgramCategory } from "@/types/program";
import ProgramCard from "./ProgramCard";

interface ProgramFilterProps {
  programs: Program[];
  categories: ProgramCategory[];
  basePath: string;
}

export default function ProgramFilter({ programs, categories, basePath }: ProgramFilterProps) {
  const [active, setActive] = useState<ProgramCategory | "전체">("전체");

  const filtered =
    active === "전체" ? programs : programs.filter((p) => p.category === active);

  return (
    <div>
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="프로그램 카테고리 필터">
        {(["전체", ...categories] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat as ProgramCategory | "전체")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              active === cat
                ? "bg-primary text-white"
                : "bg-white text-neutral-600 border border-neutral-200 hover:border-primary hover:text-primary"
            }`}
            aria-pressed={active === cat}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Program grid */}
      {filtered.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((program) => (
            <ProgramCard key={program.slug} program={program} basePath={basePath} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-neutral-400">
          해당 카테고리의 프로그램이 없습니다.
        </div>
      )}
    </div>
  );
}
