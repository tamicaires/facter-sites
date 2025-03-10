"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { TrendingUp, Users, Clock } from "lucide-react";
import analytics from "@/public/analytics.png";

export function Metrics() {
  const metrics = [
    {
      icon: TrendingUp,
      value: "300%",
      label: "Aumento médio em vendas",
      description: "Crescimento significativo após a implementação",
    },
    {
      icon: Users,
      value: "47%",
      label: "Taxa de conversão",
      description:
        "Taxa média de conversão de visitantes em leads qualificados",
    },
    {
      icon: Clock,
      value: "1.2s",
      label: "Tempo de carregamento",
      description: "Páginas otimizadas para carregar em menos de 2 segundos",
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="flex items-center gap-2 mb-8">
                <div className="h-1 w-12 bg-[#c1ff00]" />
                <p className="text-[#c1ff00] text-sm">RESULTADOS</p>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Resultados <span className="text-[#c1ff00]">mensuráveis</span>{" "}
                para seu negócio
              </h2>

              <p className="text-zinc-400 mb-8">
                Não trabalhamos com achismos. Todos os nossos projetos são
                baseados em dados e métricas comprovadas que geram resultados
                reais para nossos clientes.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[#c1ff00]/20 rounded-2xl blur-3xl" />
              <Image
                src={analytics}
                alt="Dashboard de Métricas"
                width={600}
                height={400}
                className="relative rounded-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-zinc-900/50 border-zinc-800 p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative">
                      <div className="absolute inset-1 bg-primary/20 rounded-full blur-lg" />
                      <div className="relative p-3 rounded-lg bg-[#c1ff00]/10 mb-4">
                        <metric.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>

                    <div className="text-3xl font-bold text-[#c1ff00] mb-2">
                      {metric.value}
                    </div>
                    <div className="font-medium text-white mb-2">
                      {metric.label}
                    </div>
                    <p className="text-sm text-zinc-400">
                      {metric.description}
                    </p>
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
