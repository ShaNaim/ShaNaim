import type { ComponentType, SVGProps } from "react";
import { Reveal } from "@/components/shared/reveal";
import { HoloPanel } from "@/components/starwars/ui/holo-panel";
import { SWHeading } from "@/components/starwars/ui/sw-heading";
import {
  XWingIcon,
  HolocronIcon,
  DroidIcon,
  DeathStarIcon,
  HyperspaceIcon,
  TransmissionIcon,
  TrooperIcon,
} from "@/components/starwars/ui/icons";
import { coreCompetencies, softSkills } from "@/data";

interface ForceMeta {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  tagline: string;
}

const FORCE_META: Record<string, ForceMeta> = {
  "Full-Stack Web Development": { Icon: XWingIcon, tagline: "Flies the whole mission — cockpit to engine room." },
  "Responsive UI/UX Design": { Icon: HolocronIcon, tagline: "Interfaces balanced like a true Jedi artifact." },
  "RESTful API Development & Integration": { Icon: DroidIcon, tagline: "Fluent in over six million forms of communication." },
  "Database Design & Optimization": { Icon: DeathStarIcon, tagline: "Planet-scale data. No exhaust-port weaknesses." },
  "Performance Optimization": { Icon: HyperspaceIcon, tagline: "Made the render in less than twelve parsecs." },
  "Effective Collaboration & Communication": { Icon: TransmissionIcon, tagline: "Clear signals, even from the Outer Rim." },
};

const FALLBACK: ForceMeta = { Icon: HolocronIcon, tagline: "" };

export function Force() {
  return (
    <section id="force" className="relative px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1240px]">
        <SWHeading episode="Episode I — Core Systems" title="Ways of the Force" />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {coreCompetencies.map((name, i) => {
            const { Icon, tagline } = FORCE_META[name] ?? FALLBACK;
            return (
              <Reveal key={name} delay={i * 80}>
                <HoloPanel className="group h-full p-7">
                  <div className="flex items-start justify-between gap-4">
                    <Icon className="h-8 w-8 text-holo transition-all duration-300 group-hover:text-sw-yellow group-hover:drop-shadow-[0_0_8px_var(--sw-yellow)]" />
                    <span className="font-mono text-[11px] text-star-dim/60">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-sci mt-6 text-[15px] font-bold tracking-wide text-starlight uppercase">{name}</h3>
                  {tagline && <p className="mt-2.5 text-[13px] leading-[1.8] text-star-dim">{tagline}</p>}
                </HoloPanel>
              </Reveal>
            );
          })}
        </div>

        {/* Soft skills — trooper-approved */}
        <Reveal delay={200}>
          <HoloPanel className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-4 p-7">
            <span className="flex items-center gap-3 font-mono text-[11px] tracking-[0.35em] text-sw-yellow uppercase">
              <TrooperIcon className="h-7 w-7 text-starlight/80" />
              Squad skills
            </span>
            <div className="flex flex-wrap gap-2.5">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="border border-white/10 px-4 py-2 text-[12px] text-star-dim transition-colors duration-200 hover:border-holo/50 hover:text-starlight"
                >
                  {skill}
                </span>
              ))}
            </div>
          </HoloPanel>
        </Reveal>
      </div>
    </section>
  );
}
