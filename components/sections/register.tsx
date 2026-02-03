"use client";

import { Button } from "@/components/ui/button";
import { QRCode } from "@/components/ui/qr-code";
import { motion } from "framer-motion";

export function Register() {
  const registrationUrl = "https://forms.example.com/hackathon-2026"; // Substituir por URL real

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="inscricao"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-4">
              Pronto para o desafio?  
            </h2>
            <p className="text-xl text-muted-foreground">
              Inscreva-se agora e garanta sua vaga no maior hackathon de Aracaju do ano
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8">
            {/* CTA Button */}
            <Button
              onClick={() => window.open(registrationUrl, "_blank")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-lg px-12 py-8 text-xl h-auto"
            >
              Inscreva-se Agora
            </Button>

            {/* QR Code */}
            <div className="flex flex-col items-center gap-4">
              <p className="text-sm text-muted-foreground">
                ou escaneie o QR Code:
              </p>
              <QRCode value={registrationUrl} size={180} />
            </div>
          </div>

          <div className="pt-8">
            <p className="text-sm text-muted-foreground">
              As inscrições são limitadas. Não perca esta oportunidade!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
