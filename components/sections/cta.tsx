"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, CheckCircle, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { getWhatsappUrl } from "@/urls";

export function CTA() {
  const url = getWhatsappUrl(
    "Olá, gostaria de falar com um especialista sobre as soluções digitais da Facter Sites."
  );
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[#c1ff00]/5" />
      <div className="grid-pattern absolute inset-0" />

      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-block px-4 py-2 bg-[#c1ff00]/10 rounded-full text-[#c1ff00] text-sm font-medium mb-6">
            🔥 Oferta Especial por Tempo Limitado
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Pronto para <span className="text-[#c1ff00]">transformar</span> suas
            vendas?
          </h2>

          <p className="text-xl text-zinc-400 mb-8">
            Junte-se a mais de 100 empresas que já aumentaram suas vendas em até
            300% com nossas landing pages. Últimas 3 vagas com condições
            especiais para Junho!
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
              <Zap className="h-6 w-6 text-[#c1ff00] mb-2 mx-auto" />
              <div className="text-white font-semibold">47% Conversão</div>
              <div className="text-sm text-zinc-400">Taxa média</div>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
              <Clock className="h-6 w-6 text-[#c1ff00] mb-2 mx-auto" />
              <div className="text-white font-semibold">5-7 Dias</div>
              <div className="text-sm text-zinc-400">Prazo de entrega</div>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
              <CheckCircle className="h-6 w-6 text-[#c1ff00] mb-2 mx-auto" />
              <div className="text-white font-semibold">100% Garantido</div>
              <div className="text-sm text-zinc-400">Satisfação total</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={url} target="_blank">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#c1ff00] text-black hover:bg-[#c1ff00]/90 px-8 h-14 text-lg group"
              >
                Quero Vender Mais
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
