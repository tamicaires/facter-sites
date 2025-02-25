"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    content:
      "Aumentamos nossas vendas em 280% nos primeiros 3 meses após implementar a landing page. O ROI foi excepcional!",
    author: "Carlos Silva",
    role: "CEO, TechCorp",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    content:
      "A melhor decisão que tomamos foi investir em uma página otimizada. Nossa taxa de conversão dobrou em apenas um mês.",
    author: "Ana Ferreira",
    role: "Marketing Director, InnovateBR",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    content:
      "Profissionalismo e resultados impressionantes. A página superou todas as nossas expectativas em performance e conversão.",
    author: "Ricardo Santos",
    role: "Founder, RS Digital",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-black">
      <div className="container px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-1 w-12 bg-[#c1ff00]" />
            <p className="text-[#c1ff00] text-sm">DEPOIMENTOS</p>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              O que nossos <span className="text-[#c1ff00]">clientes</span> dizem
            </h2>
            <p className="text-zinc-400">
              Resultados reais de empresas que transformaram suas vendas com nossas landing pages
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-zinc-900/50 border-zinc-800 p-6">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-[#c1ff00] text-[#c1ff00]" />
                    ))}
                  </div>

                  <Quote className="h-8 w-8 text-[#c1ff00]/20 mb-4" />

                  <blockquote className="text-white mb-6">{testimonial.content}</blockquote>

                  <div className="flex items-center gap-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-semibold text-white">{testimonial.author}</div>
                      <div className="text-sm text-zinc-400">{testimonial.role}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-[#c1ff00]" />
              <span className="text-zinc-400">200+ Clientes Satisfeitos</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-[#c1ff00]" />
              <span className="text-zinc-400">4.9/5 Avaliação Média</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-[#c1ff00]" />
              <span className="text-zinc-400">98% Taxa de Satisfação</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

