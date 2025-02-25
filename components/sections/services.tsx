"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Check, ArrowRight } from "lucide-react"
import Image from "next/image"

const services = [
  {
    title: "Página de Captura",
    features: [
      "Design do Layout da Página",
      "Versão Desktop e Mobile",
      "Programação e publicação",
      "Instalação de pixels",
      "Integração com ferramentas",
      "Otimização de carregamento",
      "Suporte pós-entrega",
    ],
    deliveryTime: "5 dias",
  },
  {
    title: "Página de Obrigado",
    features: [
      "Design do Layout da Página",
      "Versão Desktop e Mobile",
      "Programação e publicação",
      "Instalação de pixels",
      "Integração com ferramentas",
      "Otimização de carregamento",
      "Suporte pós-entrega",
    ],
    deliveryTime: "3 dias",
  },
  {
    title: "Página de Vendas",
    features: [
      "Design do Layout da Página",
      "Versão Desktop e Mobile",
      "Programação e publicação",
      "Instalação de pixels",
      "Integração com ferramentas",
      "Otimização de carregamento",
      "Suporte pós-entrega",
    ],
    deliveryTime: "7 dias",
  },
]

export function Services() {
  return (
    <section className="py-20 bg-black">
      <div className="container px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative aspect-video">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Performance Metrics"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="h-1 w-12 bg-[#c1ff00]" />
                <p className="text-[#c1ff00] text-sm">PERFORMANCE</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Alta performance <span className="text-[#c1ff00]">de verdade!</span>
              </h2>
              <p className="text-zinc-400 mb-4">
                Sabemos que páginas lentas são verdadeiras máquinas de queimar dinheiro.
              </p>
              <p className="text-zinc-400">
                De nada adianta ter um design bonito e atrativo, copy persuasiva, se o carregamento for maior do que 3
                segundos.
              </p>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Escolha qual o serviço que você <span className="text-[#c1ff00]">deseja contratar</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-zinc-900/50 border-zinc-800 p-6">
                  <h3 className="text-xl font-bold text-white mb-6">{service.title}</h3>
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#c1ff00] shrink-0" />
                        <span className="text-zinc-400 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-4">
                    <button className="w-full bg-[#c1ff00] text-black px-4 py-3 rounded-lg font-medium hover:bg-[#c1ff00]/90 transition-colors flex items-center justify-center gap-2 group">
                      Contratar serviço
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <p className="text-center text-sm text-zinc-400">Prazo de Entrega: {service.deliveryTime}</p>
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

