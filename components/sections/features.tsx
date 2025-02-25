"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Zap, Target, BarChart, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Features() {
  const features = [
    {
      icon: Target,
      title: "Copywriting Persuasivo",
      description:
        "Textos estrategicamente desenvolvidos para converter visitantes em clientes, usando gatilhos mentais comprovados.",
      benefits: [
        "Aumento de 47% na taxa de conversão",
        "Redução do custo por aquisição",
        "Maior engajamento do visitante",
      ],
    },
    {
      icon: Zap,
      title: "Performance Otimizada",
      description:
        "Páginas ultra-rápidas que carregam em menos de 2 segundos, garantindo que você não perca vendas por lentidão.",
      benefits: ["Carregamento em 1.2 segundos", "Melhor ranqueamento no Google", "Experiência premium para usuários"],
    },
    {
      icon: BarChart,
      title: "Análise de Dados",
      description:
        "Monitoramento em tempo real do comportamento dos visitantes para otimização contínua dos resultados.",
      benefits: ["Relatórios detalhados de conversão", "Identificação de gargalos", "Otimização baseada em dados"],
    },
    {
      icon: Users,
      title: "Design Centrado no Usuário",
      description: "Interface intuitiva e atraente que guia naturalmente seus visitantes para a conversão.",
      benefits: [
        "Layout otimizado para conversão",
        "Responsivo em todos dispositivos",
        "Elementos persuasivos estratégicos",
      ],
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-1 w-12 bg-[#c1ff00]" />
            <p className="text-[#c1ff00] text-sm">RECURSOS</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Tecnologia de ponta para <span className="text-[#c1ff00]">maximizar suas vendas</span>
              </h2>
              <p className="text-zinc-400 mb-8">
                Combinamos estratégias avançadas de marketing com tecnologia de última geração para criar landing pages
                que não só atraem, mas convertem visitantes em clientes fiéis.
              </p>
              <Button className="bg-[#c1ff00] text-black hover:bg-[#c1ff00]/90 group">
                Conhecer Recursos
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[#c1ff00]/20 rounded-2xl blur-3xl" />
              <Card className="relative bg-zinc-900/50 border-zinc-800">
                <div className="grid sm:grid-cols-2 gap-4 p-6">
                  {[
                    { label: "Taxa de Conversão", value: "47%" },
                    { label: "Tempo de Carregamento", value: "1.2s" },
                    { label: "Satisfação de Clientes", value: "98%" },
                    { label: "ROI Médio", value: "300%" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center p-4 rounded-lg bg-black/20">
                      <div className="text-2xl font-bold text-[#c1ff00] mb-1">{stat.value}</div>
                      <div className="text-sm text-zinc-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-zinc-900/50 border-zinc-800 p-6 h-full">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-[#c1ff00]/10">
                      <feature.icon className="h-6 w-6 text-[#c1ff00]" />
                    </div>
                    <div className="space-y-4 flex-1">
                      <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                      <p className="text-zinc-400">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center gap-2 text-sm text-zinc-400">
                            <div className="h-1 w-1 rounded-full bg-[#c1ff00]" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
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

