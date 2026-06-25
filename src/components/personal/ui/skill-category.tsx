"use client";

import { AnimatedBar } from "./animated-bar";
import type { Skill } from "@/lib/types";

const SKILL_COLORS: Record<string, string> = {
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  React: "#61DAFB",
  "Next.js": "#ffffff",
  "Vue.js": "#4FC08D",
  "Node.js": "#339933",
  "Express.js": "#aaaaaa",
  "Tailwind CSS": "#38B2AC",
  "ShadCN/UI": "#ffffff",
  PostgreSQL: "#4169E1",
  MongoDB: "#47A248",
  Prisma: "#a78bfa",
  Zod: "#3178C6",
};

function getLevelLabel(level: number) {
  if (level >= 101) return "Torvalds";
  if (level >= 90) return "Expert";
  if (level >= 80) return "Pro";
  if (level >= 70) return "Advanced";
  if (level >= 60) return "Intermediate";
  return "Familiar";
}

interface SkillCategoryProps {
  category: string;
  items: Skill[];
  animationIndexOffset?: number;
  onSkillHover: (level: number | null) => void;
}

export function SkillCategory({ category, items, animationIndexOffset = 0, onSkillHover }: SkillCategoryProps) {
  return (
    <div>
      <h3 className="text-[10px] tracking-[0.25em] mb-6 uppercase" style={{ color: "#ff4d00" }}>
        {category}
      </h3>

      <div className="flex flex-col gap-5">
        {items.map((skill, si) => (
          <div
            key={skill.name}
            className="group relative flex items-center gap-4"
            onMouseEnter={() => onSkillHover(skill.level)}
            onMouseLeave={() => onSkillHover(null)}
          >
            <div
              className="min-w-[120px] text-[12px] tracking-wider transition-colors duration-200 group-hover:text-[#ff4d00]"
              style={{ color: "#666666" }}
            >
              {skill.name}
            </div>

            <div className="absolute left-[130px] top-[-10px] opacity-0 group-hover:opacity-20 pointer-events-none transition-all duration-500 hidden lg:block translate-x-2 group-hover:translate-x-0">
              <pre className="text-[8px] font-mono leading-tight select-none" style={{ color: "#2e2e2e" }}>
                {`// status: ${getLevelLabel(skill.level).toLowerCase()}\n> latency: 0.2ms`}
              </pre>
            </div>

            <div className="flex-1">
              <AnimatedBar
                level={skill.level}
                color={SKILL_COLORS[skill.name] ?? "#ff4d00"}
                delay={animationIndexOffset * 100 + si * 80}
              />
            </div>

            <div className="min-w-[70px] text-right tabular-nums">
              <span className="uppercase tracking-tighter group-hover:hidden" style={{ color: "#666666" }}>
                {getLevelLabel(skill.level)}
              </span>
              <span className="ml-2 group-hover:hidden text-[11px] font-mono" style={{ color: "#cccccc" }}>
                {skill.level}%
              </span>

              <span className="hidden group-hover:inline uppercase tracking-tighter" style={{ color: "#cccccc" }}>
                {getLevelLabel(skill.level)}
              </span>
              <span className="ml-2 hidden group-hover:inline text-[11px] font-mono" style={{ color: "#ff4d00" }}>
                {skill.level}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
