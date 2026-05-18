import { setRequestLocale } from "next-intl/server";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { ForWho } from "@/components/sections/for-who";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { WaitlistCTA } from "@/components/sections/waitlist-cta";
import { Footer } from "@/components/sections/footer";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <ForWho />
      <Pricing />
      <FAQ />
      <WaitlistCTA />
      <Footer />
    </main>
  );
}
