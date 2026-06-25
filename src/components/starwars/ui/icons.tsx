import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps): IconProps {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props,
  };
}

/** Stylised stormtrooper helmet — dome, lenses, mouth vents. */
export function TrooperIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 11a7 7 0 0 1 14 0v5.5A2.5 2.5 0 0 1 16.5 19h-9A2.5 2.5 0 0 1 5 16.5z" />
      <path d="M7.2 11.2c.5-.9 1.6-1.2 2.8-.8l1 .35c.6.2.6 1.05 0 1.25l-1.6.55c-1.3.45-2.6-.15-2.2-1.35z" fill="currentColor" stroke="none" />
      <path d="M16.8 11.2c-.5-.9-1.6-1.2-2.8-.8l-1 .35c-.6.2-.6 1.05 0 1.25l1.6.55c1.3.45 2.6-.15 2.2-1.35z" fill="currentColor" stroke="none" />
      <path d="M9.5 16h5M8.5 14.5h7" strokeWidth={1.2} />
    </svg>
  );
}

/** Death Star — sphere, equatorial trench, superlaser dish. */
export function DeathStarIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.4 14.5h17.2" />
      <circle cx="8.5" cy="8" r="2.6" />
      <path d="M3.6 9.5c2-.7 4-.7 5.5-.4M14 4.6c1.5 1 2.6 2.2 3.4 3.6" strokeWidth={0.9} opacity={0.5} />
    </svg>
  );
}

/** X-wing fighter, attack position. */
export function XWingIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 4v16" />
      <path d="M12 9 4.5 5.5M12 9l7.5-3.5M12 15l-7.5 3.5M12 15l7.5 3.5" />
      <path d="M4.5 4v3M19.5 4v3M4.5 17v3M19.5 17v3" strokeWidth={1.2} />
      <circle cx="12" cy="12" r="1.6" />
    </svg>
  );
}

/** Jedi holocron — cube with inner light. */
export function HolocronIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3l7 4v10l-7 4-7-4V7z" />
      <path d="M12 3v18M5 7l14 10M19 7L5 17" strokeWidth={0.8} opacity={0.5} />
      <path d="M12 9.5l2.2 2.5L12 14.5 9.8 12z" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Protocol droid head. */
export function DroidIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6.5 11a5.5 5.5 0 0 1 11 0v4a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2z" />
      <circle cx="9.8" cy="11" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="14.2" cy="11" r="1.2" fill="currentColor" stroke="none" />
      <path d="M10 14.8h4M9 19.5h6" strokeWidth={1.2} />
    </svg>
  );
}

/** Hyperspace jump — starlines converging. */
export function HyperspaceIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 12h6M21 12h-4M12 3v4M12 21v-3" />
      <path d="M5.5 5.5 9 9M18.5 5.5 15.5 8.5M5.5 18.5 8.5 15.5M18.5 18.5 15 15" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Rebel transmission — signal arcs. */
export function TransmissionIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="14" r="1.6" fill="currentColor" stroke="none" />
      <path d="M8.5 10.5a5 5 0 0 1 7 0M6 8a8.5 8.5 0 0 1 12 0" />
      <path d="M12 15.5V21" />
    </svg>
  );
}

/** Lightsaber hilt, horizontal, pointing right. */
export function SaberHiltIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 40 16" fill="currentColor" stroke="none" {...props}>
      <rect x="1" y="5" width="7" height="6" rx="1.5" />
      <rect x="8" y="3.5" width="3" height="9" rx="1" />
      <rect x="11" y="5.5" width="10" height="5" rx="1" />
      <rect x="14" y="4" width="1.6" height="8" />
      <rect x="17" y="4" width="1.6" height="8" />
      <rect x="21" y="3" width="4" height="10" rx="1" />
      <rect x="25" y="6" width="13" height="4" rx="1.2" />
    </svg>
  );
}
