interface ConnectButtonProps {
  href: string;
  label: string;
  icon?: string;
  highlight?: boolean;
  isEmail?: boolean;
}

export function ConnectButton({ href, label, icon = "↗", highlight = false, isEmail = false }: ConnectButtonProps) {
  return (
    <a
      href={href}
      target={isEmail ? undefined : "_blank"}
      rel={isEmail ? undefined : "noreferrer"}
      className="p-btn-shine inline-flex items-center gap-2 px-6 py-2.5 transition-all duration-200 text-[11px] tracking-[0.15em] uppercase hover:border-[#ff4d00] hover:text-[#ff4d00] hover:bg-[rgba(255,77,0,0.06)]"
      style={{
        border: highlight ? "1px solid #ff4d00" : "1px solid #282828",
        color: highlight ? "#ff4d00" : "#e8e8e8",
      }}
    >
      <span className="relative z-10 shrink-0">{icon}</span>
      <span className="relative z-10">{label}</span>
    </a>
  );
}
