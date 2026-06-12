import type { ReactNode } from "react";
import { Reveal } from "@/components/shared/reveal";
import { GlassCard } from "@/components/atelier/ui/glass-card";
import { AtelierHeading } from "@/components/atelier/ui/atelier-heading";
import { coreCompetencies, softSkills, techStack } from "@/data";

interface CraftMeta {
  tagline: string;
  icon: ReactNode;
  span: string;
}

function StrokeIcon({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      {children}
    </svg>
  );
}

/* Presentation metadata per competency — unknown competencies fall back gracefully. */
const CRAFT_META: Record<string, CraftMeta> = {
  "Full-Stack Web Development": {
    tagline: "From database schema to final pixel — one pair of hands, end to end.",
    icon: <StrokeIcon><polyline points="8 6 3 12 8 18" /><polyline points="16 6 21 12 16 18" /><line x1="13" y1="5" x2="11" y2="19" /></StrokeIcon>,
    span: "md:col-span-3",
  },
  "Responsive UI/UX Design": {
    tagline: "Interfaces that feel right on every screen — minimal, intentional, usable.",
    icon: <StrokeIcon><rect x="3" y="4" width="18" height="14" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="9" x2="9" y2="18" /></StrokeIcon>,
    span: "md:col-span-3",
  },
  "RESTful API Development & Integration": {
    tagline: "Clean contracts between front and back.",
    icon: <StrokeIcon><path d="M7 8l-4 4 4 4" /><path d="M17 8l4 4-4 4" /><circle cx="12" cy="12" r="1.6" /></StrokeIcon>,
    span: "md:col-span-2",
  },
  "Database Design & Optimization": {
    tagline: "Models that stay fast as the data grows.",
    icon: <StrokeIcon><ellipse cx="12" cy="6" rx="8" ry="3" /><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6" /><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></StrokeIcon>,
    span: "md:col-span-2",
  },
  "Performance Optimization": {
    tagline: "Shaving milliseconds like it's a sport.",
    icon: <StrokeIcon><path d="M12 3a9 9 0 1 0 9 9" /><polyline points="12 7 12 12 16 14" /><path d="M19 5l2-2" /></StrokeIcon>,
    span: "md:col-span-2",
  },
  "Effective Collaboration & Communication": {
    tagline: "Code is a team sport — clear words, clean handoffs.",
    icon: <StrokeIcon><path d="M8 12h.01M12 12h.01M16 12h.01" /><path d="M21 12c0 4-4 7-9 7a10 10 0 0 1-3-.5L4 20l1.3-3.2A6.6 6.6 0 0 1 3 12c0-4 4-7 9-7s9 3 9 7z" /></StrokeIcon>,
    span: "md:col-span-2",
  },
};

const FALLBACK_META: CraftMeta = {
  tagline: "",
  icon: <StrokeIcon><circle cx="12" cy="12" r="8" /></StrokeIcon>,
  span: "md:col-span-2",
};

export function Craft() {
  return (
    <section id="craft" className="relative px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1240px]">
        <AtelierHeading kicker="01 — What I do" title={<>The craft, <em>distilled.</em></>} />

        <div className="grid gap-5 md:grid-cols-6">
          {coreCompetencies.map((name, i) => {
            const meta = CRAFT_META[name] ?? FALLBACK_META;
            return (
              <Reveal key={name} delay={i * 80} className={meta.span}>
                <GlassCard className="group flex h-full flex-col p-7 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-gold transition-transform duration-300 group-hover:-translate-y-1">{meta.icon}</span>
                    <span className="font-mono text-[11px] text-cream-dim/60">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-6 text-lg leading-snug font-semibold text-cream">{name}</h3>
                  {meta.tagline && <p className="mt-2.5 text-[13px] leading-[1.8] text-cream-dim">{meta.tagline}</p>}
                </GlassCard>
              </Reveal>
            );
          })}

          {/* Soft skills cell */}
          <Reveal delay={200} className="md:col-span-4">
            <GlassCard className="h-full p-7 md:p-8">
              <div className="font-mono text-[11px] tracking-[0.35em] text-gold uppercase">Soft skills</div>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 px-4 py-2 text-[12px] text-cream-dim transition-colors duration-200 hover:border-gold/40 hover:text-cream"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          </Reveal>

          {/* Stack cell — full-width closing strip */}
          <Reveal delay={280} className="md:col-span-6">
            <GlassCard className="flex h-full flex-wrap items-center gap-x-8 gap-y-3 p-7 md:p-8">
              <span className="font-mono text-[11px] tracking-[0.35em] text-gold uppercase">Daily drivers</span>
              <span aria-hidden className="hidden h-px flex-1 bg-white/[0.07] md:block" />
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {techStack.map((tech) => (
                  <span key={tech} className="font-mono text-[12px] text-cream-dim transition-colors duration-200 hover:text-gold">
                    {tech}
                  </span>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
