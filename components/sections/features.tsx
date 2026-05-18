"use client";

import {
  Users,
  FileCode2,
  CalendarClock,
  LayoutDashboard,
  UserPlus,
  MessageSquare,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

const featureKeys = [
  { icon: Users, number: "01", key: "teams" as const },
  { icon: FileCode2, number: "02", key: "submission" as const },
  { icon: CalendarClock, number: "03", key: "schedule" as const },
  { icon: LayoutDashboard, number: "04", key: "dashboard" as const },
  { icon: UserPlus, number: "05", key: "registration" as const },
  { icon: MessageSquare, number: "06", key: "mentorship" as const },
];

export function Features() {
  const t = useTranslations("features");

  return (
    <section id="funcionalidades" className="py-24 border-b-2 border-foreground">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-2 border-foreground">
          {featureKeys.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.number}
                className={cn(
                  "group p-8 border-foreground hover:bg-brand/10 transition-colors",
                  index % 3 !== 2 && "lg:border-r",
                  index < 3 && "md:border-b lg:border-b",
                  index % 2 === 0 && "md:border-r lg:border-r",
                  index < featureKeys.length - 1 && "border-b md:border-b-0",
                  index < 4 && "lg:border-b"
                )}
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="font-mono text-xs font-bold text-foreground">
                    {feature.number}
                  </span>
                  <Icon className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-wide mb-3">
                  {t(`items.${feature.key}.title`)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(`items.${feature.key}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
