"use client";

import { InfiniteSlider } from "@/components/effects/infinite-slider";
import { cn } from "@/lib/utils";

// Placeholder sponsor logos - substituir por logos reais
const sponsors = [
  { name: "Sponsor 1", tier: "gold" },
  { name: "Sponsor 2", tier: "gold" },
  { name: "Sponsor 3", tier: "silver" },
  { name: "Sponsor 4", tier: "silver" },
  { name: "Sponsor 5", tier: "bronze" },
  { name: "Sponsor 6", tier: "bronze" },
  { name: "Sponsor 7", tier: "bronze" },
  { name: "Sponsor 8", tier: "bronze" },
];

const tierStyles = {
  gold: "border-yellow-500/30 bg-yellow-500/10",
  silver: "border-gray-400/30 bg-gray-400/10",
  bronze: "border-orange-600/30 bg-orange-600/10",
};

export function Sponsors() {
  return (
    <section id="patrocinadores" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Patrocinadores
          </h2>
          <p className="text-xl text-muted-foreground">
            Apoio das empresas que fazem a diferença
          </p>
        </div>

        {/* Gold Tier */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-center">Ouro</h3>
          <InfiniteSlider direction="left" speed={30} gap={32}>
            {sponsors
              .filter((s) => s.tier === "gold")
              .map((sponsor, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-center justify-center w-48 h-32 rounded-lg border shrink-0",
                    tierStyles.gold
                  )}
                >
                  <span className="text-lg font-semibold">{sponsor.name}</span>
                </div>
              ))}
          </InfiniteSlider>
        </div>

        {/* Silver Tier */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-center">Prata</h3>
          <InfiniteSlider direction="right" speed={40} gap={24}>
            {sponsors
              .filter((s) => s.tier === "silver")
              .map((sponsor, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-center justify-center w-40 h-24 rounded-lg border shrink-0",
                    tierStyles.silver
                  )}
                >
                  <span className="text-base font-medium">{sponsor.name}</span>
                </div>
              ))}
          </InfiniteSlider>
        </div>

        {/* Bronze Tier */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-center">Bronze</h3>
          <InfiniteSlider direction="left" speed={50} gap={20}>
            {sponsors
              .filter((s) => s.tier === "bronze")
              .map((sponsor, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-center justify-center w-32 h-20 rounded-lg border shrink-0",
                    tierStyles.bronze
                  )}
                >
                  <span className="text-sm">{sponsor.name}</span>
                </div>
              ))}
          </InfiniteSlider>
        </div>
      </div>
    </section>
  );
}
