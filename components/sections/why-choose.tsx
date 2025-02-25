"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Zap, Target, Clock, Trophy } from "lucide-react"

export function WhyChoose() {
  const differentials = [
    {
      icon: Target,
      title: "Design Estratégico",
      description:
        "Páginas desenvolvidas com foco total em conversão, usando gatilhos mentais e copywriting persuasivo.",
      stat: "47%",
      label: "Aumento médio na taxa de conversão",
    },
    {
      icon: Zap,
      title: "Alta Performance",
      description: "Carregamento ultra-rápido e otimizado, garantindo que você não perca vendas por lentidão.",
      stat: "<2s",
      label: "Tempo de carregamento",
    },
    {
      icon: Clock,
      title: "Entrega Rápida",
      description: "Processo otimizado para entregar sua página funcionando em tempo recorde.",
      stat: "5-7",
      label: "Dias para entrega",
    },
    {
      icon: Trophy,
      title: "Resultados Garantidos",
      description: "Satisfação garantida ou seu dinheiro de volta. Zero riscos para você.",
      stat: "100%",
      label: "Garantia de satisfação",
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-1 w-12 bg-[#c1ff00]" />
            <p className="text-[#c1ff00] text-sm">DIFERENCIAIS</p>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">
            O que diferencia uma página que <span className="text-[#c1ff00]">converte das demais?</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {differentials.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-zinc-900/50 border-zinc-800 p-6 h-full">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-[#c1ff00]/10">
                      <item.icon className="h-6 w-6 text-[#c1ff00]" />
                    </div>
                    <div className="space-y-4 flex-1">
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      <p className="text-zinc-400">{item.description}</p>
                      <div className="pt-4 border-t border-zinc-800">
                        <div className="text-2xl font-bold text-[#c1ff00]">{item.stat}</div>
                        <div className="text-sm text-zinc-400">{item.label}</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

