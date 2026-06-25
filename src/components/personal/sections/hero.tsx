import { FadeIn } from "@/components/personal/ui/fade-in";
import { Pill } from "@/components/personal/ui/pill";
import { Divider } from "@/components/personal/ui/divider";
import { GlitchText } from "@/components/personal/ui/glitch-text";
import { personal, heroStats, techStack, coreCompetencies, softSkills } from "@/data";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-24 pt-[120px] pb-20 overflow-hidden"
      style={{ backgroundColor: "#080808" }}
    >
      {/* Animated cyber grid background */}
      <div className="p-cyber-grid absolute inset-0 pointer-events-none" />

      {/* Ghost number */}
      <div
        className="absolute -right-5 top-1/2 -translate-y-1/2 font-bebas leading-none select-none pointer-events-none"
        style={{ fontSize: "clamp(180px, 28vw, 400px)", color: "rgba(255,255,255,0.02)" }}
      >
        01
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[960px]">

        {/* Badge row */}
        <FadeIn>
          <div className="flex items-center gap-4 mb-7">
            <Pill>
              <GlitchText text={personal.title} />
            </Pill>
            <span className="text-[10px] tracking-[0.2em] uppercase" style={{ color: "#2e2e2e" }}>
              · {personal.yearsExperience} YRS EXPERIENCE
            </span>
          </div>
        </FadeIn>

        {/* Name — two lines, solid then outline */}
        <FadeIn delay={100}>
          <div className="overflow-hidden py-2">
            <div
              className="font-bebas leading-[0.9] p-animate-reveal"
              style={{ fontSize: "clamp(72px, 12vw, 160px)", color: "#e8e8e8" }}
            >
              {personal.firstName}
            </div>
          </div>
          <div className="overflow-hidden py-2">
            <div
              className="font-bebas leading-[0.9] p-animate-reveal p-animation-delay-200"
              style={{
                fontSize: "clamp(72px, 12vw, 160px)",
                color: "transparent",
                WebkitTextStroke: "1px #e8e8e8",
              }}
            >
              {personal.lastName}
            </div>
          </div>
        </FadeIn>

        {/* Divider */}
        <FadeIn delay={200}>
          <Divider className="my-9" />
        </FadeIn>

        {/* Bio + Competencies grid */}
        <FadeIn delay={300}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">

            {/* Left — bio */}
            <div>
              <p className="text-[13px] leading-[1.95] mb-5" style={{ color: "#cccccc" }}>
                {personal.description}
              </p>
              <p className="text-[11px] italic leading-[1.7]" style={{ color: "#666666" }}>
                &quot;{personal.quote}&quot;
              </p>

              {/* Stats */}
              <div className="mt-8 flex gap-8">
                {heroStats.map(({ num, label }) => (
                  <div key={label}>
                    <div className="font-bebas text-6xl leading-none tabular-nums" style={{ color: "#ff4d00" }}>
                      {num}
                    </div>
                    <div className="text-[10px] tracking-[0.15em] mt-1 uppercase" style={{ color: "#666666" }}>
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Stack */}
              <div className="mt-8 pt-8" style={{ borderTop: "1px solid #111111" }}>
                <div className="text-[9px] tracking-[0.3em] uppercase mb-3" style={{ color: "#2e2e2e" }}>
                  Stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((label) => (
                    <span
                      key={label}
                      className="text-[10px] px-2.5 py-1 tracking-wider rounded-sm transition-all duration-200 hover:border-[#ff4d00] hover:text-[#ff4d00]"
                      style={{ border: "1px solid #161616", color: "#666666" }}
                    >
                      <GlitchText text={label} />
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — competencies */}
            <div>
              <div className="text-[10px] tracking-[0.25em] mb-3.5 uppercase" style={{ color: "#ff4d00" }}>
                Core Competencies
              </div>

              {coreCompetencies.map((label) => (
                <div
                  key={label}
                  className="flex items-center gap-[10px] py-[9px] text-[12px] tracking-wide transition-colors duration-200 hover:text-[#cccccc]"
                  style={{ borderBottom: "1px solid #161616", color: "#666666" }}
                >
                  <span className="text-[7px]" style={{ color: "#ff4d00" }}>⬡</span>
                  {label}
                </div>
              ))}

              <div className="text-[10px] tracking-[0.25em] mt-5 mb-3.5 uppercase" style={{ color: "#2e2e2e" }}>
                Soft Skills
              </div>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((label) => (
                  <span
                    key={label}
                    className="text-[10px] px-2.5 py-0.5 tracking-wider rounded-sm transition-all duration-200 hover:border-[#282828] hover:text-[#cccccc]"
                    style={{ border: "1px solid #161616", color: "#666666" }}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-10 left-6 md:left-12 flex items-center gap-3 text-[10px] tracking-[0.25em]"
        style={{ opacity: 0.25, color: "#e8e8e8" }}
      >
        <div className="w-10 h-[1px]" style={{ backgroundColor: "#ff4d00" }} />
        SCROLL
      </div>
    </section>
  );
}
