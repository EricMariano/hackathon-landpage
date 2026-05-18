"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function WaitlistCTA() {
  const t = useTranslations("waitlist");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  };

  return (
    <section
      id="lista-espera"
      className="py-24 border-b-2 border-foreground bg-brand text-foreground"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-foreground/70 mb-4">
          <span className="font-bold">[→]</span> {t("label")}
        </p>
        <h2 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tight mb-6">
          {t("title")}
        </h2>
        <p className="text-lg text-foreground/80 mb-10 max-w-xl mx-auto">
          {t("subtitle")}
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-0 max-w-lg mx-auto border-2 border-foreground shadow-brutal bg-background"
        >
          <Input
            type="email"
            placeholder={t("placeholder")}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setStatus("idle");
            }}
            className="rounded-none border-0 bg-background text-foreground placeholder:text-muted-foreground h-14 px-4 font-mono text-sm flex-1 focus-visible:ring-0"
            aria-label={t("emailAriaLabel")}
          />
          <Button type="submit" size="lg" className="h-14 px-8 shrink-0">
            {t("submit")}
          </Button>
        </form>

        {status === "success" && (
          <p className="mt-4 font-mono text-xs uppercase tracking-widest">
            {t("success")}
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 font-mono text-xs uppercase tracking-widest text-foreground/80">
            {t("error")}
          </p>
        )}

        <p className="mt-8 font-mono text-xs text-foreground/50 uppercase tracking-widest">
          {t("disclaimer")}
        </p>
      </div>
    </section>
  );
}
