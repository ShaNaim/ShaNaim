export interface Stat {
  num: string;
  label: string;
}

export interface Hobby {
  icon: string;
  label: string;
  desc: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  current: boolean;
  points: string[];
}

export interface Skill {
  name: string;
  level: number;
}

export type SkillsMap = Record<string, Skill[]>;

export interface LegendEntry {
  range: string;
  fun: string;
  pro: string;
}

export interface SocialLink {
  label: string;
  href: string;
  highlight?: boolean;
}
