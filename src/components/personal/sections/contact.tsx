import { FadeIn } from "@/components/personal/ui/fade-in";
import { SectionLabel } from "@/components/personal/ui/section-label";
import { ConnectButton } from "@/components/personal/ui/connect-button";
import { socialLinks } from "@/data";

const ICON_MAP: Record<string, string> = {
  Phone: "↗",
  "Email Me": "→",
};

export function Contact() {
  return (
    <section
      id="contact"
      className="relative py-[100px] px-6 md:px-12 overflow-hidden"
      style={{ backgroundColor: "#080808", borderTop: "1px solid #111111" }}
    >
      {/* Ghost number */}
      <div
        className="absolute -right-[60px] -bottom-[60px] font-bebas leading-none select-none pointer-events-none"
        style={{ fontSize: "280px", color: "rgba(255,255,255,0.01)" }}
      >
        04
      </div>

      <div className="relative z-10 max-w-[900px] mx-auto">
        <FadeIn>
          <SectionLabel label="04 / Contact" />
          <h2
            className="font-bebas leading-[0.9] mb-2 uppercase"
            style={{ fontSize: "clamp(48px, 8vw, 96px)", color: "#e8e8e8" }}
          >
            LET&apos;S CREATE
            <br />
            SOMETHING
          </h2>
          <div
            className="font-bebas leading-[0.9] mb-12 uppercase"
            style={{
              fontSize: "clamp(48px, 8vw, 96px)",
              color: "transparent",
              WebkitTextStroke: "1px rgba(232,232,232,0.15)",
            }}
          >
            AWESOME
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="text-[13px] leading-[1.9] max-w-[400px] mb-10" style={{ color: "#666666" }}>
            Preferably with fewer bugs, faster queries, and more coffee. Reach out — I don&apos;t bite (most of the time).
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="flex flex-wrap gap-4">
            {socialLinks.map(({ label, href, highlight }) => (
              <ConnectButton
                key={label}
                href={href}
                label={label}
                icon={ICON_MAP[label] ?? "↗"}
                highlight={highlight}
                isEmail={label === "Email Me"}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
