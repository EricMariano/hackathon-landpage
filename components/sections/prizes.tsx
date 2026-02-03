"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Medal, Award } from "lucide-react";
import { cn } from "@/lib/utils";

const prizes = [
  {
    position: "1º Lugar",
    icon: Trophy,
    amount: "a decidir",
    description: "Prêmio principal + Certificado",
    gradient: "from-yellow-500/20 to-orange-500/20",
    borderColor: "border-yellow-500/50",
    iconColor: "text-yellow-500",
  },
  {
    position: "2º Lugar",
    icon: Medal,
    amount: "a decidir",
    description: "Prêmio secundário + Certificado",
    gradient: "from-gray-400/20 to-gray-500/20",
    borderColor: "border-gray-400/50",
    iconColor: "text-gray-400",
  },
  // {
  //   position: "3º Lugar",
  //   icon: Award,
  //   amount: "a decidir",
  //   description: "Prêmio terciário + Certificado",
  //   gradient: "from-orange-600/20 to-orange-700/20",
  //   borderColor: "border-orange-600/50",
  //   iconColor: "text-orange-600",
  // },
];

const honorableMentions = [
  "Melhor Design",
  "Melhor Código",
  "Melhor Pitch",
  "Inovação Tecnológica",
  "Impacto Social",
];

export function Prizes() {
  return (
    <section id="premios" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Prêmios</h2>
          <p className="text-xl text-muted-foreground">
            Grandes recompensas para os melhores projetos
          </p>
        </div>

        {/* Main Prizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {prizes.map((prize, index) => {
            const Icon = prize.icon;
            return (
              <Card
                key={index}
                className={cn(
                  "relative overflow-hidden border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl",
                  prize.borderColor
                )}
              >
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-50",
                    prize.gradient
                  )}
                />
                <CardHeader className="relative z-10 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 rounded-full bg-background/50 flex items-center justify-center border-2 border-current">
                      <Icon className={cn("h-10 w-10", prize.iconColor)} />
                    </div>
                  </div>
                  <CardTitle className="text-2xl mb-2">{prize.position}</CardTitle>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {prize.amount}
                  </div>
                </CardHeader>
                <CardContent className="relative z-10 text-center">
                  <p className="text-muted-foreground">{prize.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Honorable Mentions */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Menções Honrosas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {honorableMentions.map((mention, index) => (
              <Card
                key={index}
                className="text-center p-4 hover:border-primary/50 transition-colors"
              >
                <CardContent className="p-0">
                  <p className="font-medium">{mention}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Troféu
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
