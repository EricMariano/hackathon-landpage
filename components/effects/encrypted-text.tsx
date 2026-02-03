"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface EncryptedTextProps {
  text: string;
  className?: string;
  revealDelayMs?: number;
  charset?: string;
  flipDelayMs?: number;
}

export function EncryptedText({
  text,
  className,
  revealDelayMs = 50,
  charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[];:,.<>/?",
  flipDelayMs = 50,
}: EncryptedTextProps) {
  const [displayText, setDisplayText] = useState<string[]>(
    Array(text.length).fill("")
  );
  const [revealedIndices, setRevealedIndices] = useState<Set<number>>(
    new Set()
  );
  const revealedIndicesRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    let revealTimeout: NodeJS.Timeout;
    let flipInterval: NodeJS.Timeout;
    let currentIndex = 0;

    // Reset
    setDisplayText(Array(text.length).fill(""));
    setRevealedIndices(new Set());
    revealedIndicesRef.current = new Set();

    const revealNext = () => {
      if (currentIndex >= text.length) return;

      revealedIndicesRef.current.add(currentIndex);
      setRevealedIndices(new Set(revealedIndicesRef.current));

      currentIndex++;
      revealTimeout = setTimeout(revealNext, revealDelayMs);
    };

    const flipUnrevealed = () => {
      setDisplayText((prev) =>
        prev.map((char, index) => {
          if (revealedIndicesRef.current.has(index)) {
            return text[index];
          }
          return charset[Math.floor(Math.random() * charset.length)];
        })
      );
    };

    revealNext();
    flipInterval = setInterval(flipUnrevealed, flipDelayMs);

    return () => {
      clearTimeout(revealTimeout);
      clearInterval(flipInterval);
    };
  }, [text, revealDelayMs, charset, flipDelayMs]);

  return (
    <span className={cn("font-mono", className)}>
      {displayText.map((char, index) => (
        <span
          key={index}
          className={revealedIndices.has(index) ? "" : "text-primary/50"}
        >
          {char || "\u00A0"}
        </span>
      ))}
    </span>
  );
}
