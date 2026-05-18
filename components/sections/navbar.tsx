"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { LogoSvg } from "@/components/svgs/logo-svg";
import { LanguageSwitcher } from "@/components/language-switcher";
import { cn } from "@/lib/utils";

const navHrefs = [
  { key: "features" as const, href: "#funcionalidades" },
  { key: "forWho" as const, href: "#para-quem" },
  { key: "pricing" as const, href: "#planos" },
  { key: "faq" as const, href: "#faq" },
];

export function Navbar() {
  const t = useTranslations("navbar");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-transform duration-300 border-b-2 border-foreground bg-background",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center min-w-0 shrink"
          >
            <LogoSvg size="sm" />
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navHrefs.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => scrollToSection(item.href)}
                className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              >
                {t(item.key)}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <LanguageSwitcher />
            <Button
              onClick={() => scrollToSection("#lista-espera")}
              size="sm"
            >
              {t("earlyAccess")}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
