interface DesignSwitchProps {
  href: string;
  label: string;
  /** which design this button sits on — controls its styling */
  on: "atelier" | "print";
}

/**
 * Quiet floating indicator that links to the other edition of the site.
 * Collapsed to a small glyph; the label slides out on hover.
 */
export function DesignSwitch({ href, label, on }: DesignSwitchProps) {
  if (on === "print") {
    return (
      <a
        href={href}
        aria-label={label}
        className="group fixed right-5 bottom-5 z-50 flex items-center border-3 border-ink bg-paper shadow-hard-sm transition-all duration-200 hover:-translate-y-[2px]"
      >
        <span className="grid h-11 w-11 place-items-center font-display text-lg text-accent">◐</span>
        <span className="max-w-0 overflow-hidden font-mono text-[10px] font-bold tracking-[0.2em] whitespace-nowrap uppercase transition-all duration-300 group-hover:max-w-[180px] group-hover:pr-4">
          {label}
        </span>
      </a>
    );
  }

  return (
    <a
      href={href}
      aria-label={label}
      className="group fixed right-5 bottom-5 z-50 flex items-center rounded-full border border-gold/30 bg-night/80 backdrop-blur-md transition-all duration-200 hover:border-gold/70"
    >
      <span className="grid h-11 w-11 place-items-center text-lg text-gold">◑</span>
      <span className="max-w-0 overflow-hidden font-mono text-[10px] tracking-[0.2em] whitespace-nowrap text-cream-dim uppercase transition-all duration-300 group-hover:max-w-[180px] group-hover:pr-4">
        {label}
      </span>
    </a>
  );
}
