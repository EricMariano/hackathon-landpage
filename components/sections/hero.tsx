"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

export function Hero() {
  const t = useTranslations("hero");

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center border-b-2 border-foreground pt-16"
    >
      <div className="absolute top-0 right-0 w-1/3 h-full border-l-2 border-foreground hidden lg:block" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8 space-y-8">
            <h1 className="font-display text-[clamp(3.5rem,12vw,9rem)] font-black leading-[0.9] tracking-tight uppercase">
              {t("titleLine1")}
              <br />
              <span className="bg-brand px-2 text-foreground">
                {t("titleHighlight")}
              </span>
              <br />
              {t("titleLine3")}
            </h1>

            <p className="max-w-xl text-lg text-muted-foreground border-l-2 border-foreground pl-6">
              {t("subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => scrollToSection("#lista-espera")}
                size="lg"
                className="px-10 py-7 h-auto text-sm"
              >
                {t("ctaWaitlist")}
              </Button>
              <Button
                onClick={() => scrollToSection("#funcionalidades")}
                variant="outline"
                size="lg"
                className="px-10 py-7 h-auto text-sm"
              >
                {t("ctaFeatures")}
              </Button>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <div className="border-2 border-foreground p-4 shadow-brutal-sm bg-background">
              <span className="text-foreground font-bold">01</span> —{" "}
              {t("highlight1")}
            </div>
            <div className="border-2 border-foreground p-4 shadow-brutal-sm bg-background">
              <span className="text-foreground font-bold">02</span> —{" "}
              {t("highlight2")}
            </div>
            <div className="border-2 border-foreground p-4 bg-brand text-foreground shadow-brutal">
              <span className="font-bold">03</span> — {t("highlight3")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
