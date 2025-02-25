"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { ChevronDown, MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "Quanto tempo leva para ter minha landing page funcionando?",
    answer:
      "Nosso processo é otimizado para entregar resultados rápidos. O prazo médio é de 5-7 dias úteis, desde o briefing até a publicação. Para projetos urgentes, temos opção de entrega expressa em 3 dias úteis.",
  },
  {
    question: "Como vocês garantem uma boa taxa de conversão?",
    answer:
      "Utilizamos uma metodologia própria baseada em dados de mais de 200 projetos. Combinamos copywriting persuasivo, design estratégico e otimização técnica para atingir taxas de conversão até 47% superiores à média do mercado.",
  },
  {
    question: "Preciso fornecer textos e imagens?",
    answer:
      "Não! Nossa equipe de copywriters e designers cuidará de todo o conteúdo. Fazemos uma análise profunda do seu negócio e mercado para criar um conteúdo persuasivo e relevante para seu público-alvo.",
  },
  {
    question: "A página será otimizada para SEO?",
    answer:
      "Sim! Todas as nossas landing pages são desenvolvidas seguindo as melhores práticas de SEO. Isso inclui otimização de velocidade, estrutura semântica, meta tags e muito mais para melhor ranqueamento no Google.",
  },
  {
    question: "Oferecem suporte após a entrega?",
    answer:
      "Absolutamente! Você recebe 30 dias de suporte gratuito após a entrega. Neste período, fazemos ajustes, otimizações e fornecemos orientações para maximizar seus resultados.",
  },
  {
    question: "E se eu não gostar do resultado?",
    answer:
      "Oferecemos garantia incondicional de satisfação. Se você não ficar 100% satisfeito com sua landing page, devolvemos seu investimento integralmente em até 7 dias após a entrega.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-black">
      <div className="container px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-1 w-12 bg-[#c1ff00]" />
            <p className="text-[#c1ff00] text-sm">DÚVIDAS FREQUENTES</p>
          </div>

          <div className="grid lg:grid-cols-[1fr,400px] gap-12 items-start">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card
                  key={index}
                  className="overflow-hidden cursor-pointer bg-zinc-900/50 border-zinc-800"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                      <ChevronDown
                        className={`h-5 w-5 text-[#c1ff00] transition-transform ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="mt-4 text-zinc-400">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="bg-zinc-900/50 border-zinc-800 p-6">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#c1ff00]/10 flex items-center justify-center mx-auto">
                  <MessageCircle className="h-6 w-6 text-[#c1ff00]" />
                </div>
                <h3 className="text-xl font-bold text-white">Ainda tem dúvidas?</h3>
                <p className="text-zinc-400">
                  Fale com um especialista agora mesmo e descubra como podemos ajudar seu negócio a vender mais.
                </p>
                <Button className="w-full bg-[#c1ff00] text-black hover:bg-[#c1ff00]/90 group">
                  Falar com Especialista
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

