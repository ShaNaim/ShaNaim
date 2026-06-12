import Image from "next/image";

/* logo.svg is 2400×884 */
const RATIO = 2400 / 884;

interface LogoProps {
  height?: number;
  className?: string;
}

export function Logo({ height = 28, className = "" }: LogoProps) {
  return (
    <Image
      src="/logo.svg"
      alt="Shanaim Shourov"
      height={height}
      width={Math.round(height * RATIO)}
      className={className}
      priority
    />
  );
}
