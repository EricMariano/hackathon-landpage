"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { LogoSvg } from "@/components/svgs/logo-svg";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Sobre", href: "#sobre" },
  { name: "Cronograma", href: "#cronograma" },
  { name: "Prêmios", href: "#premios" },
  { name: "FAQ", href: "#faq" },
];

export function Navbar() {
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
        "fixed top-0 left-0 right-0 z-50 transition-transform duration-300",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between rounded-2xl border border-border/50 bg-background/80 backdrop-blur-xl mt-4 px-6 shadow-[var(--shadow-warm)]">
          <div className="flex items-center gap-3 min-w-0 shrink">
            <LogoSvg textOnly className="h-12 min-w-[150px] mb-2" />
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>

          <Button
            onClick={() => scrollToSection("#inscricao")}
            className="bg-primary hover:bg-primary/90"
          >
            Inscreva-se
          </Button>
        </div>
      </div>
    </nav>
  );
}
