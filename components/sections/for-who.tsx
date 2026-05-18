"use client";

import { Building2, Rocket } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

const audienceConfig = [
  {
    icon: Building2,
    key: "organizers" as const,
    accent: "border-foreground bg-brand/10",
  },
  {
    icon: Rocket,
    key: "participants" as const,
    accent: "border-foreground bg-background",
  },
];

const bulletIndices = [0, 1, 2] as const;

export function ForWho() {
  const t = useTranslations("forWho");

  return (
    <section id="para-quem" className="py-24 border-b-2 border-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            <span className="text-foreground">[→]</span> {t("label")}
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tight">
            {t("titleLine1")}
            <br />
            {t("titleLine2")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 border-2 border-foreground">
          {audienceConfig.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <div
                key={audience.key}
                className={cn(
                  "p-10 md:p-14 space-y-6",
                  audience.accent,
                  index === 0 && "md:border-r-2 border-foreground"
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-6 w-6 text-foreground" />
                  <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    {t(`${audience.key}.tag`)}
                  </span>
                </div>
                <h3 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight">
                  {t(`${audience.key}.title`)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(`${audience.key}.description`)}
                </p>
                <ul className="space-y-3 pt-4 border-t-2 border-foreground">
                  {bulletIndices.map((i) => (
                    <li
                      key={i}
                      className="font-mono text-sm text-muted-foreground flex items-start gap-3"
                    >
                      <span className="text-foreground shrink-0 font-bold">
                        →
                      </span>
                      {t(`${audience.key}.bullets.${i}`)}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
