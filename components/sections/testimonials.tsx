"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    content:
      "O processo de desenvolvimento foi muito transparente. Conseguimos melhorar nossa taxa de conversão em cerca de 15%, o que já fez bastante diferença para nosso negócio online.",
    author: "Carlos Silva",
    role: "Gerente de Marketing",
    initials: "CS",
    bgColor: "bg-indigo-600",
    rating: 5,
  },
  {
    content:
      "Gostei da abordagem focada em resultados. O site ficou bonito, mas o mais importante é que está funcionando bem nos dispositivos móveis, onde temos a maioria dos nossos acessos.",
    author: "Rodrigo",
    role: "Proprietário, CTRA",
    initials: "AF",
    bgColor: "bg-emerald-600",
    rating: 4,
  },
  {
    content:
      "O prazo foi cumprido conforme combinado, e o suporte pós-lançamento tem sido muito bom. Ainda estamos ajustando alguns detalhes, mas já notamos uma melhora na experiência dos usuários.",
    author: "Laudicéia Siqueira",
    role: "Proprietária, União Siqueira",
    initials: "RS",
    bgColor: "bg-amber-600",
    rating: 5,
  },
];

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
              O que nossos <span className="text-[#c1ff00]">clientes</span>{" "}
              dizem
            </h2>
            <p className="text-zinc-400">
              Experiências reais de empresas que melhoraram sua presença online
              com nossos serviços
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
                <Card className="bg-zinc-900/50 border-zinc-800 p-6 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-[#c1ff00] text-[#c1ff00]"
                      />
                    ))}
                    {Array.from({ length: 5 - testimonial.rating }).map(
                      (_, i) => (
                        <Star key={i} className="h-5 w-5 text-zinc-700" />
                      )
                    )}
                  </div>

                  <Quote className="h-8 w-8 text-[#c1ff00]/20 mb-4" />

                  <blockquote className="text-zinc-300 mb-6 flex-grow">
                    {testimonial.content}
                  </blockquote>

                  <div className="flex items-center gap-4 mt-auto">
                    <Avatar className={`h-10 w-10 ${testimonial.bgColor}`}>
                      <AvatarFallback className="text-white font-medium">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-white">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-zinc-400">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-[#c1ff00]" />
              <span className="text-zinc-400">4.7/5 Avaliação Média</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-[#c1ff00]" />
              <span className="text-zinc-400">92% Taxa de Recomendação</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
