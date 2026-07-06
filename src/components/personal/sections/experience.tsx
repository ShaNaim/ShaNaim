import { FadeIn } from "@/components/personal/ui/fade-in";
import { SectionLabel } from "@/components/personal/ui/section-label";
import { experiences } from "@/data";

export function Experience() {
  return (
    <section id="experience" className="relative py-[100px] px-6 md:px-12" style={{ backgroundColor: "#080808" }}>
      <div className="max-w-[900px] mx-auto">
        <FadeIn>
          <SectionLabel label="02 / Experience" />
          <h2
            className="font-bebas leading-[0.9] mb-16 uppercase"
            style={{ fontSize: "clamp(48px, 8vw, 96px)", color: "#e8e8e8" }}
          >
            WHERE I'VE
            <br />
            WORKED
          </h2>
        </FadeIn>

        <div className="relative pl-10">
          {/* Timeline line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-[1px]"
            style={{ background: "linear-gradient(to bottom, #ff4d00, #161616)" }}
          />

          {experiences.map((exp, i) => (
            <FadeIn key={i} delay={i * 150} direction="left">
              <div className="group relative mb-12">
                {/* Timeline dot */}
                <div
                  className="absolute -left-[45px] top-7 w-[11px] h-[11px] rounded-full transition-all duration-300 group-hover:scale-125"
                  style={{
                    border: "2px solid #ff4d00",
                    backgroundColor: exp.current ? "#ff4d00" : "#080808",
                    boxShadow: exp.current ? "0 0 14px #ff4d00" : "none",
                  }}
                />

                {/* Card — border and bullet color in Tailwind so group-hover can override */}
                <div className="p-7 md:p-8 rounded-[2px] bg-transparent border border-[#161616] transition-all duration-300 group-hover:bg-[#0c0c0c] group-hover:border-[#ff4d00]">
                  {/* Header */}
                  <div className="flex flex-wrap justify-between items-start gap-3 mb-5">
                    <div>
                      <div className="text-[11px] tracking-[0.15em] mb-1.5 uppercase text-[#ff4d00]">
                        {exp.company}
                      </div>
                      <div className="font-bebas text-[28px] tracking-[0.05em] uppercase text-[#e8e8e8]">
                        {exp.title}
                      </div>
                    </div>

                    <span
                      className="text-[11px] px-3 py-1 tracking-[0.1em] self-start flex items-center"
                      style={{
                        border: exp.current ? "1px solid #ff4d00" : "1px solid #161616",
                        color: exp.current ? "#ff4d00" : "#333333",
                      }}
                    >
                      {exp.current && (
                        <span className="mr-1.5 animate-[blink_1.1s_step-end_infinite]">●</span>
                      )}
                      {exp.period}
                    </span>
                  </div>

                  <div className="h-[1px] mb-5 bg-[#111111]" />

                  {/* Points */}
                  <ul className="flex flex-col gap-3 list-none">
                    {exp.points.map((pt, j) => (
                      <li key={j} className="flex gap-3 text-[13px] leading-[1.7]">
                        <span className="shrink-0 mt-0.5 text-[#ff4d00]">→</span>
                        <span className="text-[#484848] transition-colors duration-200 group-hover:text-[#cccccc]">
                          {pt}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
