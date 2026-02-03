"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Users, Calendar, MapPin } from "lucide-react";
import { LogoSvg } from "@/components/svgs/logo-svg";

const features = [
  {
    icon: Code,
    title: "O que é o HACKAJU?",
    description:
      "Um evento de 24 horas onde equipes multidisciplinares desenvolvem soluções inovadoras para desafios reais. Uma oportunidade única para aprender, criar e conectar.",
  },
  {
    icon: Users,
    title: "Quem pode participar?",
    description:
      "Desenvolvedores, designers, estudantes e profissionais de todas as áreas. Forme equipes de até 5 pessoas e participe do evento.",
  },
  {
    icon: Calendar,
    title: "Formato do Evento",
    description:
      "24 horas de desenvolvimento intenso, com mentorias e networking. Apresente sua solução no pitch final para um painel de jurados.",
  },
  {
    icon: MapPin,
    title: "Localização",
    description:
      "Aracaju, Sergipe - Brasil. Evento híbrido: participe presencialmente na capital sergipana. Todas as ferramentas necessárias serão fornecidas.",
  },
];

export function About() {
  return (
    <section id="sobre" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-fell mb-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
            <span className="font-serif">Sobre o</span>
            <LogoSvg textOnly className="md:h-16 h-12 shrink-0 mb-4.5" />
          </h2>
          <p className="font-sans text-xl text-muted-foreground max-w-2xl mx-auto">
            Um evento que reúne mentes criativas para construir o
            futuro da tecnologia em Aracaju
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
