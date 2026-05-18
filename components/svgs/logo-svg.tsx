import { cn } from "@/lib/utils";
import { LogoIcon } from "@/components/svgs/logo-icon";
import { LogoName } from "@/components/svgs/logo-name";

interface LogoSvgProps {
  className?: string;
  /** Apenas o wordmark "HackHub" */
  textOnly?: boolean;
  /** Apenas o ícone (caju) */
  iconOnly?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: {
    icon: "h-7 w-auto",
    name: "h-7 w-auto max-w-[100px]",
    gap: "gap-2",
  },
  md: {
    icon: "h-9 w-auto",
    name: "h-9 w-auto max-w-[120px]",
    gap: "gap-2.5",
  },
  lg: {
    icon: "h-14 w-auto sm:h-16",
    name: "h-14 w-auto max-w-[200px] sm:h-16 sm:max-w-[240px]",
    gap: "gap-3",
  },
};

export function LogoSvg({
  className,
  textOnly = false,
  iconOnly = false,
  size = "sm",
}: LogoSvgProps) {
  const sizes = sizeClasses[size];

  if (iconOnly) {
    return (
      <div className={className} aria-label="HackHub">
        <LogoIcon className={sizes.icon} />
      </div>
    );
  }

  if (textOnly) {
    return (
      <div className={className} aria-label="HackHub">
        <LogoName className={sizes.name} />
      </div>
    );
  }

  return (
    <div
      className={cn("flex items-center shrink-0", sizes.gap, className)}
      aria-label="HackHub"
    >
      <LogoIcon className={sizes.icon} />
      <LogoName className={sizes.name} />
    </div>
  );
}
