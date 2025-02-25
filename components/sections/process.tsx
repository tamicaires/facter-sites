"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Search, Layout, Code, Rocket, BarChart } from "lucide-react";

export function Process() {
  const steps = [
    {
      icon: Search,
      title: "Briefing e Análise",
      description: "Entendimento profundo do seu negócio e objetivos",
      details: [
        "Análise do público-alvo",
        "Estudo da concorrência",
        "Definição de metas",
      ],
    },
    {
      icon: Layout,
      title: "Design Estratégico",
      description: "Criação do layout focado em conversão",
      details: [
        "Wireframe otimizado",
        "Design responsivo",
        "Elementos persuasivos",
      ],
    },
    {
      icon: Code,
      title: "Desenvolvimento",
      description: "Codificação com as melhores práticas",
      details: ["Código limpo", "Performance otimizada", "SEO amigável"],
    },
    {
      icon: Rocket,
      title: "Lançamento",
      description: "Publicação e configurações finais",
      details: [
        "Análise de métricas",
        "Otimização de velocidade",
        "Integração com ferramentas",
      ],
    },
    // {
    //   icon: BarChart,
    //   title: "Otimização",
    //   description: "Monitoramento e melhorias contínuas",
    //   details: ["Análise de métricas", "Ajustes baseados em dados", "Suporte contínuo"],
    // },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-1 w-12 bg-primary" />
            <p className="text-primary text-sm">PROCESSO</p>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">
            Processo comprovado para{" "}
            <span className="text-primary">resultados extraordinários</span>
          </h2>

          <div className="relative">
            <div className="grid lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <Card className="bg-zinc-900/50 border-zinc-800 p-6">
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg" />
                        <div className="relative w-10 h-10 rounded-full bg-black border-2 border-primary flex items-center justify-center">
                          <step.icon className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 text-center">
                      <h3 className="text-lg font-bold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-zinc-400 text-sm mb-4">
                        {step.description}
                      </p>
                      <ul className="space-y-2 text-left">
                        {step.details.map((detail) => (
                          <li
                            key={detail}
                            className="text-sm text-zinc-400 flex items-center gap-2"
                          >
                            <div className="h-1 w-1 rounded-full bg-primary" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
