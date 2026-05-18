"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const planKeys = ["free", "pro", "enterprise"] as const;
const featureCounts: Record<(typeof planKeys)[number], number> = {
  free: 4,
  pro: 5,
  enterprise: 5,
};

export function Pricing() {
  const t = useTranslations("pricing");

  const scrollToWaitlist = () => {
    const element = document.querySelector("#lista-espera");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="planos" className="py-24 border-b-2 border-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 border-b-2 border-foreground pb-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            <span className="text-foreground">[→]</span> {t("label")}
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tight">
            {t("title")}
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground text-lg">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-2 border-foreground">
          {planKeys.map((planKey) => {
            const highlighted = planKey === "pro";
            const period = t(`plans.${planKey}.period`);
            const featureCount = featureCounts[planKey];

            return (
              <div
                key={planKey}
                className={cn(
                  "flex flex-col p-8 border-foreground md:border-r last:md:border-r-0",
                  highlighted
                    ? "bg-brand text-foreground md:-my-4 md:py-12 shadow-brutal-lg"
                    : "bg-background hover:bg-brand/10 transition-colors"
                )}
              >
                <p className="font-mono text-xs uppercase tracking-[0.3em] mb-6 text-muted-foreground">
                  {t(`plans.${planKey}.name`)}
                </p>
                <div className="mb-4">
                  <span className="font-display text-4xl font-black uppercase">
                    {t(`plans.${planKey}.price`)}
                  </span>
                  {period && (
                    <span className="font-mono text-sm text-muted-foreground">
                      {period}
                    </span>
                  )}
                </div>
                <p
                  className={cn(
                    "text-sm mb-8 leading-relaxed",
                    highlighted
                      ? "text-foreground/80"
                      : "text-muted-foreground"
                  )}
                >
                  {t(`plans.${planKey}.description`)}
                </p>
                <ul className="space-y-3 mb-10 flex-1">
                  {Array.from({ length: featureCount }, (_, i) => (
                    <li
                      key={i}
                      className="font-mono text-xs flex items-start gap-2"
                    >
                      <span className="shrink-0 font-bold">+</span>
                      {t(`plans.${planKey}.features.${i}`)}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={scrollToWaitlist}
                  variant={highlighted ? "default" : "outline"}
                  className="w-full h-12"
                >
                  {t(`plans.${planKey}.cta`)}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
