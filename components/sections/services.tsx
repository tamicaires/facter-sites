"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Check, X, ArrowRight, Zap, Crown, Rocket } from "lucide-react";
import Image from "next/image";
import mockup from "@/public/mockup.png";
import Link from "next/link";
import { getWhatsappUrl } from "@/urls";

const plans = [
  {
    name: "Fundação Digital",
    icon: <Rocket className="h-6 w-6 text-white" />,
    description: "Ideal para começar sua presença online com impacto",
    features: [
      { name: "Site Profissional", included: true },
      { name: "Design Estratégico", included: true },
      { name: "Responsividade de Telas", included: true },
      { name: "Copywriting Persuasivo", included: true },
      { name: "Manutenção Grátis por 15 dias", included: false },
      { name: "Domínio Grátis por 1 ano", included: false },
      { name: "Otimização de S.E.O.", included: false },
      { name: "Instalação de Pixel e GTM", included: false },
      { name: "Prioridade no Suporte técnico", included: false },
      { name: "Gestão de Tráfego Pago", included: false },
    ],
    highlight: false,
  },
  {
    name: "Aceleração Pro",
    icon: <Zap className="h-6 w-6 text-black" />,
    description: "Potencialize seu negócio com recursos avançados",
    features: [
      { name: "Site Profissional", included: true },
      { name: "Design Estratégico", included: true },
      { name: "Responsividade de Telas", included: true },
      { name: "Copywriting Persuasivo", included: true },
      { name: "Manutenção Grátis por 15 dias", included: true },
      { name: "Domínio Grátis por 1 ano", included: true },
      { name: "Otimização de S.E.O.", included: true },
      { name: "Instalação de Pixel e GTM", included: true },
      { name: "Prioridade no Suporte técnico", included: true },
      { name: "Gestão de Tráfego Pago", included: false },
    ],
    highlight: true,
  },
  {
    name: "Domínio Elite",
    icon: <Crown className="h-6 w-6 text-white" />,
    description: "Experiência premium com suporte estendido",
    features: [
      { name: "Site Profissional", included: true },
      { name: "Design Estratégico", included: true },
      { name: "Responsividade de Telas", included: true },
      { name: "Copywriting Persuasivo", included: true },
      { name: "Manutenção Grátis por 30 dias", included: true },
      { name: "Domínio Grátis por 1 ano", included: true },
      { name: "Otimização de S.E.O.", included: true },
      { name: "Instalação de Pixel e GTM", included: true },
      { name: "Prioridade no Suporte técnico", included: true },
      { name: "Gestão de Tráfego Pago", included: true },
    ],
    highlight: false,
  },
];

export function Services() {
  const getMessage = (plan: string) => {
    return `Olá! Tenho interesse no ${plan}. Poderia me fornecer mais informações sobre os benefícios e o que está incluso?`;
  };
  return (
    <section className="py-20 bg-black" id="servicos">
      <div className="container px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative aspect-video">
              <Image
                src={mockup || "/placeholder.svg"}
                alt="Performance Metrics"
                fill
                className="object-cover rounded-lg ml-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="h-1 w-12 bg-[#c1ff00]" />
                <p className="text-[#c1ff00] text-sm">PERFORMANCE</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Alta performance{" "}
                <span className="text-[#c1ff00]">de verdade!</span>
              </h2>
              <p className="text-zinc-400 mb-4">
                Sabemos que páginas lentas são verdadeiras máquinas de queimar
                dinheiro.
              </p>
              <p className="text-zinc-400">
                De nada adianta ter um design bonito e atrativo, copy
                persuasiva, se o carregamento for maior do que 3 segundos.
              </p>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Escolha o plano ideal para{" "}
              <span className="text-[#c1ff00]">impulsionar seu negócio</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Soluções personalizadas para cada fase do seu projeto, com
              recursos que realmente fazem diferença nos resultados.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 relative">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${
                  plan.highlight ? "z-10 md:-mt-4 md:mb-4" : ""
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-0 right-0 mx-auto w-max px-4 py-1 bg-[#c1ff00] text-black text-sm font-bold rounded-full">
                    Mais Popular
                  </div>
                )}
                <Card
                  className={`${
                    plan.highlight
                      ? "bg-zinc-900 border-[#c1ff00] shadow-lg shadow-[#c1ff00]/20"
                      : "bg-zinc-900/50 border-zinc-800"
                  } p-6 h-full ${plan.highlight ? "md:scale-105" : ""}`}
                >
                  <div
                    className={`
                    flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full
                    ${plan.highlight ? "bg-[#c1ff00]" : "bg-zinc-800"}
                  `}
                  >
                    {plan.icon}
                  </div>

                  <h3
                    className={`
                    text-2xl font-bold mb-2 text-center
                    ${plan.highlight ? "text-[#c1ff00]" : "text-white"}
                  `}
                  >
                    {plan.name}
                  </h3>

                  <p className="text-zinc-400 text-sm text-center mb-6">
                    {plan.description}
                  </p>

                  <div className="border-t border-zinc-800 my-4"></div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature.name} className="flex items-start gap-2">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-[#c1ff00] shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-zinc-600 shrink-0" />
                        )}
                        <span
                          className={`text-sm ${
                            feature.included ? "text-zinc-300" : "text-zinc-500"
                          }`}
                        >
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-4 mt-auto">
                    <Link
                      href={getWhatsappUrl(getMessage(plan.name))}
                      target="_blank"
                    >
                      <button
                        className={`
                        w-full px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 group
                        ${
                          plan.highlight
                            ? "bg-[#c1ff00] text-black hover:bg-[#c1ff00]/90"
                            : "bg-zinc-800 text-white hover:bg-zinc-700"
                        }
                      `}
                      >
                        Contratar agora
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>

                    {/* <p className="text-center text-sm text-zinc-400">
                      {plan.features.includes("") ? "Suporte prioritário" : "Suporte padrão"}
                    </p> */}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
