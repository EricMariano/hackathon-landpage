"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const localeLabels: Record<Locale, string> = {
  pt: "PT",
  en: "EN",
  es: "ES",
};

export function LanguageSwitcher({ className }: { className?: string }) {
  const t = useTranslations("navbar");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div
      role="group"
      aria-label={t("language")}
      className={cn(
        "flex border-2 border-foreground shadow-brutal-sm bg-background",
        className
      )}
    >
      {routing.locales.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => router.replace(pathname, { locale: code })}
          className={cn(
            "px-2.5 py-1.5 font-mono text-xs uppercase tracking-widest transition-colors",
            locale === code
              ? "bg-brand text-foreground font-bold"
              : "text-muted-foreground hover:text-foreground hover:bg-brand/10"
          )}
          aria-current={locale === code ? "true" : undefined}
        >
          {localeLabels[code]}
        </button>
      ))}
    </div>
  );
}
