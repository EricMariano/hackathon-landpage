"use client";

import { useTranslations } from "next-intl";
import { Accordion } from "@/components/ui/accordion";

const faqKeys = [
  "free",
  "teams",
  "remote",
  "evaluation",
  "roles",
  "launch",
] as const;

export function FAQ() {
  const t = useTranslations("faq");

  const faqItems = faqKeys.map((key) => ({
    value: key,
    trigger: t(`items.${key}.trigger`),
    content: t(`items.${key}.content`),
  }));

  return (
    <section id="faq" className="py-24 border-b-2 border-foreground">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 border-b-2 border-foreground pb-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            <span className="text-foreground">[→]</span> {t("label")}
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tight">
            {t("title")}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">{t("subtitle")}</p>
        </div>

        <Accordion items={faqItems} type="single" />
      </div>
    </section>
  );
}
