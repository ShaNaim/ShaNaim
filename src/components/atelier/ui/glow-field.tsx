interface GlowFieldProps {
  className?: string;
}

/** Two slow-drifting gold glow blobs. Place inside a `relative overflow-hidden` parent. */
export function GlowField({ className = "" }: GlowFieldProps) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div
        className="animate-drift-a absolute -top-48 -left-40 h-[560px] w-[560px] rounded-full opacity-[0.16] blur-[110px]"
        style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 65%)" }}
      />
      <div
        className="animate-drift-b absolute -right-40 -bottom-56 h-[640px] w-[640px] rounded-full opacity-[0.10] blur-[130px]"
        style={{ background: "radial-gradient(circle, var(--gold-light) 0%, transparent 65%)" }}
      />
    </div>
  );
}
