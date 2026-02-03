"use client";

import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { LogoSvg } from "@/components/svgs/logo-svg";

const footerLinks = {
  navegacao: [
    { name: "Sobre", href: "#sobre" },
    { name: "Cronograma", href: "#cronograma" },
    { name: "Prêmios", href: "#premios" },
    { name: "FAQ", href: "#faq" },
  ],
  legal: [
    { name: "Termos de Uso", href: "#" },
    { name: "Política de Privacidade", href: "#" },
    { name: "Código de Conduta", href: "#" },
  ],
  contato: [
    { name: "Email", href: "mailto:contato@hackathon.com", icon: Mail },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "GitHub", href: "#", icon: Github },
  ],
};

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.open(href, "_blank");
    }
  };

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <LogoSvg className="w-24 h-14" />
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              O evento de inovação e tecnologia do Nordeste. Junte-se a nós em
              Aracaju e <span className="text-primary font-fell">build the future</span>.
            </p>
            <div className="flex gap-4">
              {footerLinks.contato.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-colors"
                    aria-label={item.name}
                  >
                    <Icon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              {footerLinks.navegacao.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} HackAju. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
