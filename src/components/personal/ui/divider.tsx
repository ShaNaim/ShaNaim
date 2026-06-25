export function Divider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`h-px ${className}`}
      style={{ background: "linear-gradient(90deg, #ff4d00, rgba(255,77,0,0.3), transparent)" }}
    />
  );
}
