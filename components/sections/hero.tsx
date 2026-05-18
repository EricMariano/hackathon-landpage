"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { LogoSvg } from "@/components/svgs/logo-svg";
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
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-8">
            <h1 className="font-display text-[clamp(3.5rem,12vw,9rem)] font-black leading-[0.9] tracking-tight uppercase">
              {t("titleLine1")}
              <br />
              <span className="px-2 text-foreground">
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

          <div className="lg:col-span-4 flex justify-center">
            <LogoSvg size="lg" iconOnly className="[&_svg]:!h-56 [&_svg]:!w-auto sm:[&_svg]:!h-72" />
          </div>
        </div>
      </div>
    </section>
  );
}
