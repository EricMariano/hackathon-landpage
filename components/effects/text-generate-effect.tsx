"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  duration?: number;
  filter?: boolean;
}

export function TextGenerateEffect({
  words,
  className,
  duration = 0.5,
  filter = false,
}: TextGenerateEffectProps) {
  const wordsArray = words.split(" ");

  return (
    <div className={cn("text-base md:text-lg lg:text-xl", className)}>
      {wordsArray.map((word, idx) => {
        return (
          <motion.span
            key={word + idx}
            className="dark:text-white text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: duration,
              delay: idx * (duration / wordsArray.length),
            }}
          >
            {word}{" "}
          </motion.span>
        );
      })}
    </div>
  );
}
