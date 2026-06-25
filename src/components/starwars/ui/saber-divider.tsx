import { Reveal } from "@/components/shared/reveal";
import { SaberHiltIcon } from "./icons";

export type SaberColor = "blue" | "green" | "red";

const COLORS: Record<SaberColor, string> = {
  blue: "var(--saber-blue)",
  green: "var(--saber-green)",
  red: "var(--saber-red)",
};

/** Full-width lightsaber that ignites (blade extends) when scrolled into view. */
export function SaberDivider({ color = "blue", className = "" }: { color?: SaberColor; className?: string }) {
  const glow = COLORS[color];
  return (
    <Reveal className={`mx-auto flex max-w-[1240px] items-center px-5 md:px-10 ${className}`}>
      <SaberHiltIcon className="h-4 w-10 shrink-0 text-star-dim" />
      <div className="h-[3px] flex-1 overflow-visible">
        <div
          className="grow-bar h-full rounded-full bg-white"
          style={{
            "--bar-w": "100%",
            boxShadow: `0 0 5px 1px ${glow}, 0 0 18px 3px ${glow}80`,
          } as React.CSSProperties}
        />
      </div>
    </Reveal>
  );
}
