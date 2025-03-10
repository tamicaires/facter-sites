"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Clock, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { TypeWriter } from "@/components/ui/type-animation";
import heroPatterns from "@/public/hero-pattern.png";
import { getWhatsappUrl } from "@/urls";
import Link from "next/link";

export function Hero() {
  const url = getWhatsappUrl("Olá, gostaria de falar com um especialista sobre as soluções digitais da Facter Sites.");
  return (
    <section
      className="relative py-20 md:py-28 bg-black overflow-hidden bg-grid-pattern bg-opacity-80 bg-cover"
      style={{
        backgroundImage: `url(${heroPatterns.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-gradient absolute inset-0" />
      <div className="grid-pattern absolute inset-0" />

      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 mb-8 rounded-full bg-zinc-900/50 border border-zinc-800">
            <span className="flex h-2 w-2 rounded-full bg-[#c1ff00] animate-pulse-glow mr-2" />
            <span className="text-sm text-zinc-400">
              Seu negócio na frente das pessoas certas, na hora certa.
            </span>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white">
            <TypeWriter />
            <span className="block">que Vendem Enquanto Você Dorme</span>
          </h1>

          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto mt-6">
            Transforme visitantes em clientes com páginas otimizadas que
            convertem até{" "}
            <span className="text-white font-semibold">47% mais</span> que a
            média do mercado.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href={url} target="_blank">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#c1ff00] text-black hover:bg-[#c1ff00]/90 px-8 h-14 text-lg group"
              >
                Quero Vender Mais
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="#cases">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-zinc-800 text-white hover:bg-zinc-900 px-8 h-14 text-lg"
              >
                Ver Portfólio
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-[#c1ff00]" />
              <span className="text-zinc-400">+100 Clientes Satisfeitos</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-[#c1ff00]" />
              <span className="text-zinc-400">Entrega em 5-7 dias</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
