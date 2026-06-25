"use client";

import { useState } from "react";
import { FadeIn } from "@/components/personal/ui/fade-in";
import { SectionLabel } from "@/components/personal/ui/section-label";
import { SkillCategory } from "@/components/personal/ui/skill-category";
import { GlitchText } from "@/components/personal/ui/glitch-text";
import { skills, skillLegend, getRange } from "@/data";

export function Skills() {
  const [hoveredRange, setHoveredRange] = useState<string | null>(null);

  return (
    <section
      id="skills"
      className="relative py-[100px] px-6 md:px-12"
      style={{ backgroundColor: "#050505" }}
    >
      {/* Dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.1,
          backgroundImage: "radial-gradient(#ff4d00 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-[900px] mx-auto">
        <FadeIn>
          <SectionLabel label="03 / Skills" />
          <h2
            className="font-bebas leading-[0.9] mb-16 uppercase"
            style={{ fontSize: "clamp(48px, 8vw, 96px)", color: "#e8e8e8" }}
          >
            WHAT I
            <br />
            BUILD WITH
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(380px,1fr))] gap-12">
          {Object.entries(skills).map(([category, items], ci) => (
            <FadeIn key={category} delay={ci * 100}>
              <SkillCategory
                category={category}
                items={items}
                animationIndexOffset={ci}
                onSkillHover={(level) =>
                  setHoveredRange(level !== null ? getRange(level) : null)
                }
              />
            </FadeIn>
          ))}
        </div>

        {/* Legend */}
        <div
          className="mt-20 pt-8 flex flex-wrap gap-x-8 gap-y-3"
          style={{ borderTop: "1px solid #111111" }}
        >
          {skillLegend.map(({ range, fun, pro }) => {
            const isActive = hoveredRange === range;
            return (
              <div
                key={range}
                className="group flex items-center gap-2 transition-opacity duration-300"
                style={{ opacity: isActive ? 1 : hoveredRange ? 0.2 : 0.4 }}
              >
                <span
                  className="text-[8px] transition-colors duration-300"
                  style={{ color: isActive ? "#ff4d00" : "#666666" }}
                >
                  ●
                </span>
                <span className="inline-block text-[10px] tracking-widest uppercase">
                  <span
                    className="transition-colors duration-300"
                    style={{ color: isActive ? "#ff4d00" : "#666666" }}
                  >
                    <GlitchText text={range} />{" "}
                  </span>
                  <span
                    className="group-hover:hidden"
                    style={{ color: isActive ? "#ff4d00" : "#666666" }}
                  >
                    <GlitchText text={fun} />
                  </span>
                  <span
                    className="hidden group-hover:inline"
                    style={{ color: isActive ? "#ff4d00" : "#666666" }}
                  >
                    <GlitchText text={pro} />
                  </span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
