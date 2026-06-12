import type { Stat, Hobby } from "@/lib/types";

export const personal = {
  firstName: "SHANAIM",
  lastName: "SHOUROV",
  title: "Full-Stack Developer",
  yearsExperience: "3+",
  email: "shanaim2k15@gmail.com",
  phone: "+8801728420051",
  description:
    "I build end-to-end web applications — from pixel-precise interfaces to scalable backend integrations. I love minimalism and brutalist design, and I believe the best code is the kind nobody notices.",
  quote: "If it works on my machine, it's officially your problem now.",
};

export const heroStats: Stat[] = [
  { num: "3+", label: "Years" },
  { num: "4", label: "Products" },
  { num: "10+", label: "Tech Used" },
];

export const techStack: string[] = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Vue.js",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Docker",
  "Tailwind",
];

export const coreCompetencies: string[] = [
  "Full-Stack Web Development",
  "Responsive UI/UX Design",
  "RESTful API Development & Integration",
  "Database Design & Optimization",
  "Performance Optimization",
  "Effective Collaboration & Communication",
];

export const softSkills: string[] = [
  "Problem Solving & Critical Thinking",
  "Adaptability & Quick Learning",
  "Teamwork & Collaboration",
  "Leadership & Decision Making",
];

export const hobbies: Hobby[] = [
  { icon: "🍔", label: "Burgers", desc: "Hardcore enthusiast" },
  { icon: "🎮", label: "Gaming", desc: "Part-time quest taker" },
  { icon: "🔭", label: "Astrophysics", desc: "Black holes & bugs" },
  { icon: "👨‍👩‍👧", label: "Family", desc: "Core side quest" },
];
