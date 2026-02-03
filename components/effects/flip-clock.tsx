"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface FlipClockProps {
  targetDate: Date;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "secondary" | "destructive" | "outline" | "muted";
  showDays?: "always" | "never" | "auto";
  className?: string;
}

export function FlipClock({
  targetDate,
  size = "md",
  variant = "default",
  showDays = "auto",
  className,
}: FlipClockProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  const variantClasses = {
    default: "bg-primary/10 text-primary border-primary/20",
    secondary: "bg-secondary text-secondary-foreground border-secondary",
    destructive: "bg-destructive/10 text-destructive border-destructive/20",
    outline: "bg-transparent border-border",
    muted: "bg-muted text-muted-foreground border-muted",
  };

  const shouldShowDays =
    showDays === "always" ||
    (showDays === "auto" && timeLeft.days > 0);

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {shouldShowDays && (
        <>
          <div
            className={cn(
              "px-4 py-2 rounded-lg border font-mono font-bold",
              sizeClasses[size],
              variantClasses[variant]
            )}
          >
            {formatNumber(timeLeft.days)}
            <span className="text-xs ml-1 opacity-70">D</span>
          </div>
          <span className="text-muted-foreground">:</span>
        </>
      )}
      <div
        className={cn(
          "px-4 py-2 rounded-lg border font-mono font-bold",
          sizeClasses[size],
          variantClasses[variant]
        )}
      >
        {formatNumber(timeLeft.hours)}
        <span className="text-xs ml-1 opacity-70">H</span>
      </div>
      <span className="text-muted-foreground">:</span>
      <div
        className={cn(
          "px-4 py-2 rounded-lg border font-mono font-bold",
          sizeClasses[size],
          variantClasses[variant]
        )}
      >
        {formatNumber(timeLeft.minutes)}
        <span className="text-xs ml-1 opacity-70">M</span>
      </div>
      <span className="text-muted-foreground">:</span>
      <div
        className={cn(
          "px-4 py-2 rounded-lg border font-mono font-bold",
          sizeClasses[size],
          variantClasses[variant]
        )}
      >
        {formatNumber(timeLeft.seconds)}
        <span className="text-xs ml-1 opacity-70">S</span>
      </div>
    </div>
  );
}
