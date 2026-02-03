"use client";

import { LogoSvg } from "@/components/svgs/logo-svg";
import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/effects/flip-words";
import { TextGenerateEffect } from "@/components/effects/text-generate-effect";
import { FlipClock } from "@/components/effects/flip-clock";

export function Hero() {
  const eventDate = new Date();
  eventDate.setDate(eventDate.getDate() + 30);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">
      {/* Gradientes orgânicos no tons da paleta */}
      <div className="absolute inset-0 bg-linear-to-b from-primary/10 via-primary/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        {/* Logo como elemento central */}
        <div className="flex justify-center drop-shadow-2xl">
          <LogoSvg className="w-56 h-36 sm:w-64 sm:h-40 md:w-72 md:h-44" />
        </div>

        {/* Título */}
        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-fell text-muted-foreground">
          Ideias que transformam Aracaju.{" "}
            <FlipWords
              words={["Inove.", "Crie.", "Conecte.", "Desenvolva.", ""] }
              duration={2500}
              className="text-primary"
            />
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <TextGenerateEffect
            words="Um evento de 24h horas em Aracaju, Sergipe, onde desenvolvedores e inovadores se reúnem para construir soluções inovadoras com identidade nordestina."
            duration={0.1}
            className="text-muted-foreground font-sans"
          />
        </div>

        <div className="flex justify-center py-8">
          <FlipClock
            targetDate={eventDate}
            size="lg"
            variant="outline"
            showDays="auto"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button
            onClick={() => scrollToSection("#inscricao")}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 font-sans"
          >
            Inscreva-se Agora
          </Button>
          <Button
            onClick={() => scrollToSection("#sobre")}
            variant="outline"
            size="lg"
            className="font-sans text-lg px-8 py-6 border-primary/50 text-foreground hover:bg-primary/10"
          >
            Saiba Mais
          </Button>
        </div>
      </div>
    </section>
  );
}
