import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { GoodsLineup } from "@/components/GoodsLineup";
import { WaitlistForm } from "@/components/WaitlistForm";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <main className="flex flex-col">
      <Hero />
      <About />
      <GoodsLineup />
      <WaitlistForm />
      <FAQ />
      <Footer />
    </main>
  );
}
