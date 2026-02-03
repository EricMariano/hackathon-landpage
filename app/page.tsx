import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { HeroSliderBar } from "@/components/sections/hero-slider-bar";
import { About } from "@/components/sections/about";
import { Schedule } from "@/components/sections/schedule";
import { Prizes } from "@/components/sections/prizes";
import { FAQ } from "@/components/sections/faq";
import { Register } from "@/components/sections/register";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <HeroSliderBar />
      <About />
      <Schedule />
      <Prizes />
      <FAQ />
      <Register />
      <Footer />
    </main>
  );
}
