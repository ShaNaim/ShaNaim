export function SectionLabel({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`text-[10px] tracking-[0.3em] uppercase mb-3 font-medium select-none pointer-events-none ${className}`}
      style={{ color: "#ff4d00" }}
    >
      {label}
    </div>
  );
}
