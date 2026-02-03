"use client";

import Image from "next/image";
import { InfiniteSlider } from "@/components/effects/infinite-slider";

type SliderItem =
  | { type: "text"; label: string }
  | { type: "image"; src: string; alt: string; width?: number; height?: number };

const sliderItems: SliderItem[] = [
  { type: "image", src: "/logo1.png", alt: "HackAju", width: 120, height: 56 },
  { type: "text", label: "Inovação" },
  { type: "text", label: "Tecnologia" },
  { type: "image", src: "/logo2.png", alt: "HackAju", width: 80, height: 48 },
  { type: "text", label: "Aracaju" },
  { type: "text", label: "24h" },
  { type: "text", label: "Hackathon" },
  { type: "text", label: "Código" },
  { type: "text", label: "Networking" },
  { type: "text", label: "Prêmios" },
  { type: "text", label: "Criatividade" },
  { type: "text", label: "Sergipe" },
];

const itemClass =
  "shrink-0 flex items-center justify-center rounded-xl border border-primary/40 bg-primary/10 overflow-hidden";

export function HeroSliderBar() {
  return (
    <div className="w-full py-6 border-y border-border/50 bg-background/80 backdrop-blur-sm">
      <InfiniteSlider direction="left" speed={40} gap={24} className="py-2">
        {[...sliderItems, ...sliderItems].map((item, i) => (
          <div
            key={`${item.type}-${i}-${"label" in item ? item.label : item.alt}`}
            className={itemClass}
          >
            {item.type === "text" ? (
              <span className="px-5 py-2 text-sm font-medium text-foreground">
                {item.label}
              </span>
            ) : (
              <div className="relative h-12 w-24 sm:h-14 sm:w-28">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width ?? 112}
                  height={item.height ?? 56}
                  className="object-contain object-center"
                />
              </div>
            )}
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
}
