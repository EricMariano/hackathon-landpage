"use client";

import { Calendar, Clock, Trophy, Code, Presentation } from "lucide-react";

const scheduleItems = [
  {
    date: "15 a 20 de Março",
    time: "08:00",
    title: "Abertura das Inscrições",
    description: "Inscrições abertas! Garanta sua vaga no maior hackathon de Aracaju.",
    icon: Calendar,
    status: "upcoming",
  },
  {
    date: "21 de Março",
    time: "09:00",
    title: "Cerimônia de Abertura",
    description: "Apresentação dos desafios, regras e networking com participantes.",
    icon: Presentation,
    status: "upcoming",
  },
  {
    date: "21 e 22 de Março",
    time: "24 horas",
    title: "Período de Desenvolvimento",
    description: "Hora de colocar a mão na massa! Desenvolva sua solução com mentoria disponível.",
    icon: Code,
    status: "upcoming",
  },
  {
    date: "22 de Março",
    time: "10:00",
    title: "Pitch Final",
    description: "Apresente sua solução para o painel de jurados e concorra aos prêmios.",
    icon: Presentation,
    status: "upcoming",
  },
  {
    date: "22 de Março",
    time: "11:00",
    title: "Premiação",
    description: "Cerimônia de encerramento com anúncio dos vencedores e networking.",
    icon: Trophy,
    status: "upcoming",
  },
];

export function Schedule() {
  return (
    <section id="cronograma" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Cronograma</h2>
          <p className="text-xl text-muted-foreground">
            Confira as datas e horários do evento
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-12">
            {scheduleItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="relative flex gap-6">
                  {/* Icon circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {item.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {item.time}
                          </span>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
