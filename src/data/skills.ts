import type { SkillsMap, LegendEntry } from "@/lib/types";

export function getRange(level: number): string {
  if (level >= 101) return "101+";
  if (level >= 90) return "90+";
  if (level >= 80) return "80+";
  if (level >= 70) return "70+";
  if (level >= 60) return "60+";
  return "<50";
}

export const skills: SkillsMap = {
  Languages: [
    { name: "TypeScript", level: 92 },
    { name: "JavaScript", level: 95 },
  ],
  "Libraries & Frameworks": [
    { name: "React", level: 94 },
    { name: "Next.js", level: 80 },
    { name: "Vue.js", level: 69 },
    { name: "Node.js", level: 88 },
    { name: "Express.js", level: 82 },
  ],
  "Styling & UI": [
    { name: "Tailwind CSS", level: 93 },
    { name: "ShadCN/UI", level: 90 },
  ],
  "Databases & Tools": [
    { name: "PostgreSQL", level: 76 },
    { name: "MongoDB", level: 69 },
    { name: "Prisma", level: 80 },
    { name: "Zod", level: 88 },
  ],
};

/** Professional tier word for a level, e.g. 92 → "Expert". */
export function getProTier(level: number): string {
  const range = getRange(level);
  return skillLegend.find((entry) => entry.range === range)?.pro ?? range;
}

export const skillLegend: LegendEntry[] = [
  { range: "101+", fun: "Torvalds", pro: "Torvalds" },
  { range: "90+", fun: "Master Yoda", pro: "Expert" },
  { range: "80+", fun: "Jedi Master", pro: "Pro" },
  { range: "70+", fun: "Jedi Knight", pro: "Advanced" },
  { range: "60+", fun: "Jedi Padawan", pro: "Intermediate" },
  { range: "<50", fun: "Force Sensitive", pro: "Familiar" },
];
