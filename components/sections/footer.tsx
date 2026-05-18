"use client";

import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { LogoSvg } from "@/components/svgs/logo-svg";

const productLinkKeys = [
  { key: "features" as const, href: "#funcionalidades" },
  { key: "forWho" as const, href: "#para-quem" },
  { key: "pricing" as const, href: "#planos" },
  { key: "faq" as const, href: "#faq" },
];

const legalLinkKeys = [
  { key: "terms" as const, href: "#" },
  { key: "privacy" as const, href: "#" },
];

const contactLinks = [
  { name: "Email", href: "mailto:contato@hackhub.app", icon: Mail },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "GitHub", href: "#", icon: Github },
];

export function Footer() {
  const t = useTranslations("footer");

  const scrollToSection = (href: string) => {
    if (href.startsWith("#") && href.length > 1) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    if (href.startsWith("mailto:") || href.startsWith("http")) {
      window.open(href, href.startsWith("mailto:") ? "_self" : "_blank");
    }
  };

  return (
    <footer className="border-t-2 border-foreground bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <LogoSvg size="md" className="mb-4" />
            <p className="text-muted-foreground mb-6 max-w-md text-sm leading-relaxed">
              {t("description")}
            </p>
            <div className="flex gap-3">
              {contactLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target={
                      item.href.startsWith("mailto") ? undefined : "_blank"
                    }
                    rel="noopener noreferrer"
                    className="w-10 h-10 border-2 border-foreground flex items-center justify-center hover:bg-brand hover-shadow-brutal-lift shadow-brutal-sm transition-colors"
                    aria-label={item.name}
                  >
                    <Icon className="h-4 w-4 text-muted-foreground" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.3em] mb-4">
              {t("product")}
            </h3>
            <ul className="space-y-2">
              {productLinkKeys.map((link) => (
                <li key={link.key}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t(`links.${link.key}`)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.3em] mb-4">
              {t("legal")}
            </h3>
            <ul className="space-y-2">
              {legalLinkKeys.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t(`links.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-foreground pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
            {t("copyright", { year: new Date().getFullYear() })}
          </p>
          <button
            type="button"
            onClick={() => scrollToSection("#lista-espera")}
            className="font-mono text-xs uppercase tracking-widest text-foreground hover:underline font-bold"
          >
            {t("earlyAccess")}
          </button>
        </div>
      </div>
    </footer>
  );
}
