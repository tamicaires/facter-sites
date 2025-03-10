import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { WhyChoose } from "@/components/sections/why-choose";
import { Cases } from "@/components/sections/cases";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Metrics } from "@/components/sections/metrics";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <Header />
      <main className="flex-1">
        <Hero />
        <WhyChoose />
        <Cases />
        <Services />
        <Process />
        <Metrics />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
