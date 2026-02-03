"use client";

import { Accordion } from "@/components/ui/accordion";

const faqItems = [
  {
    value: "participate",
    trigger: "Quem pode participar?",
    content:
      "Qualquer pessoa interessada em tecnologia e inovação pode participar. Não há restrições de idade, experiência ou formação. Forme uma equipe de até 5 pessoas.",
  },
  {
    value: "team",
    trigger: "Preciso ter uma equipe formada?",
    content:
      "Não é obrigatório. Você pode formar uma equipe antes ou no dia do evento. Também oferecemos um espaço de networking para ajudar você a encontrar parceiros.",
  },
  {
    value: "bring",
    trigger: "O que preciso levar?",
    content:
      "Para participação presencial: seu laptop, carregador e muita criatividade!",
  },
  {
    value: "evaluation",
    trigger: "Como funciona a avaliação?",
    content:
      "Os projetos serão avaliados por um painel de jurados especialistas com base em critérios como: inovação, impacto, viabilidade técnica, design e qualidade do pitch. A apresentação final será de 5 minutos por equipe.",
  },
  {
    value: "food",
    trigger: "Terá coffee break?",
    content:
      "Sim! Para participantes presenciais, oferecemos coffee break o evento.",
  },
  {
    value: "cost",
    trigger: "O evento é gratuito?",
    content:
      "Sim, a participação é totalmente gratuita! Incluindo coffee break, mentoria e prêmios. Apenas garanta sua vaga através da inscrição.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground">
            Tire suas dúvidas sobre o evento
          </p>
        </div>

        <Accordion items={faqItems} type="single" />
      </div>
    </section>
  );
}
