"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface InfiniteSliderProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: number;
  gap?: number;
  className?: string;
}

export function InfiniteSlider({
  children,
  direction = "left",
  speed = 30,
  gap = 16,
  className,
}: InfiniteSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Convert speed (seconds) to duration for animation
  const duration = speed;

  return (
    <div
      ref={containerRef}
      className={cn("overflow-hidden w-full", className)}
    >
      <motion.div
        className="flex"
        style={{
          gap: `${gap}px`,
        }}
        animate={{
          x: direction === "left" ? "-50%" : "50%",
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: duration,
            ease: "linear",
          },
        }}
      >
        {/* First set */}
        <div className="flex shrink-0" style={{ gap: `${gap}px` }}>
          {children}
        </div>
      </motion.div>
    </div>
  );
}
