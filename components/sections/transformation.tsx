"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card } from "@/components/ui/card"
import { ArrowRight, XCircle, CheckCircle } from "lucide-react"

export function Transformation() {
  const transformations = [
    {
      before: "Processos manuais e demorados",
      after: "Automação completa e eficiência",
      impact: "Redução de 70% no tempo operacional",
    },
    {
      before: "Perda de vendas por falta de organização",
      after: "Sistema integrado de gestão de vendas",
      impact: "Aumento de 300% em conversão",
    },
    {
      before: "Dificuldade em escalar operações",
      after: "Infraestrutura preparada para crescimento",
      impact: "Capacidade 10x maior sem custos adicionais",
    },
    {
      before: "Decisões baseadas em intuição",
      after: "Análise de dados em tempo real",
      impact: "95% mais precisão nas decisões",
    },
  ]

  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="A Transformação do seu Negócio"
          subtitle="Veja como nossa solução transforma cada aspecto da sua empresa"
          highlight="Transformação"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {transformations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6">
                <div className="grid grid-cols-[1fr,auto,1fr] gap-4 items-center mb-6">
                  <div className="space-y-2">
                    <div className="flex items-center text-destructive gap-2">
                      <XCircle className="h-5 w-5" />
                      <span className="font-medium">Antes</span>
                    </div>
                    <p className="text-muted-foreground">{item.before}</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-primary gap-2">
                      <CheckCircle className="h-5 w-5" />
                      <span className="font-medium">Depois</span>
                    </div>
                    <p className="text-muted-foreground">{item.after}</p>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="font-medium">Impacto:</span>
                    <span className="text-primary">{item.impact}</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

