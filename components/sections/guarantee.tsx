"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Shield, Clock, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Guarantee() {
  const guarantees = [
    {
      icon: Shield,
      title: "Garantia de Satisfação",
      description:
        "Se você não ficar 100% satisfeito com o resultado, devolvemos seu dinheiro integralmente em até 7 dias.",
    },
    {
      icon: Clock,
      title: "Prazo Garantido",
      description: "Entrega no prazo combinado ou você recebe um desconto de 10% por dia de atraso.",
    },
    {
      icon: CheckCircle,
      title: "Suporte Premium",
      description: "30 dias de suporte gratuito após a entrega para ajustes e otimizações.",
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-1 w-12 bg-[#c1ff00]" />
            <p className="text-[#c1ff00] text-sm">GARANTIAS</p>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Satisfação <span className="text-[#c1ff00]">100% garantida</span> ou seu dinheiro de volta
            </h2>
            <p className="text-zinc-400">
              Trabalhamos com total transparência e comprometimento. Você tem garantias reais que protegem seu
              investimento.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={guarantee.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-zinc-900/50 border-zinc-800 p-6 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 rounded-lg bg-[#c1ff00]/10 mb-4">
                      <guarantee.icon className="h-6 w-6 text-[#c1ff00]" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{guarantee.title}</h3>
                    <p className="text-zinc-400">{guarantee.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-[#c1ff00] text-black hover:bg-[#c1ff00]/90 px-8 py-6 text-lg group">
              Começar Projeto Agora
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

