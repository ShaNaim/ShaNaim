"use client";

import { useState } from "react";
import { skillLegend } from "@/data/skills";

export function SkillLegend() {
  const [proMode, setProMode] = useState(false);

  return (
    <div className="mt-12 border-3 border-ink bg-ink p-6 text-paper shadow-hard-accent md:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <span className="font-display text-lg uppercase tracking-wide">Ranking Decoder</span>
        <button
          type="button"
          onClick={() => setProMode((v) => !v)}
          className="cursor-pointer border-2 border-paper px-3.5 py-2 font-mono text-[11px] font-bold tracking-[0.2em] uppercase transition-colors duration-150 hover:bg-paper hover:text-ink"
        >
          {proMode ? "⇄ Back to Jedi mode" : "⇄ Recruiter-safe mode"}
        </button>
      </div>

      <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
        {skillLegend.map(({ range, fun, pro }) => (
          <div key={range} className="border-2 border-paper/25 p-3.5 transition-colors duration-150 hover:border-accent">
            <div className="font-display text-base text-accent">{range}</div>
            <div className="mt-1.5 font-mono text-[11px] leading-snug">{proMode ? pro : fun}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
