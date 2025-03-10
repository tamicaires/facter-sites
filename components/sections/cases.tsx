"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const cases = [
  {
    id: "gestao-manutencao",
    title: "Gestão de Manutenção",
    type: "Landing Page",
    description:
      "Landing page para SaaS de gestão de manutenção de frotas, desenvolvida com foco em conversão e performance.",
    image: "https://i.ibb.co/rG21dBmL/image.png",
    url: "https://www.facter.com.br/",
    stats: {
      conversion: "N/A",
      leads: "N/A",
      time: "N/A",
    },
  },
  {
    id: "ct-rodrigo-argentino",
    title: "CT Rodrigo Argentino",
    type: "Site para Centro de Treinamento",
    description:
      "Site para centro de treinamento de artes marciais, com design moderno e foco na captação de novos alunos.",
    image: "https://i.ibb.co/RkGbdDqx/image.png",
    url: "https://www.ctrodrigoargentino.com.br/",
    stats: {
      conversion: "N/A",
      leads: "N/A",
      time: "N/A",
    },
  },
  {
    id: "uniao-siqueira",
    title: "União Siqueira",
    type: "Site Empresarial",
    description:
      "Site para empresa de acabamentos e telhas, desenvolvido com foco em destacar produtos e serviços.",
    image: "https://i.ibb.co/JjX6G97x/image.png",
    url: "https://www.uniaosiqueira.com.br/",
    stats: {
      conversion: "N/A",
      leads: "N/A",
      time: "N/A",
    },
  },
  {
    id: "bora-trip-milhas",
    title: "Bora Trip Milhas",
    type: "Site Institucional",
    description:
      "Site institucional para empresa de milhas aéreas, focado em gerar interesse e captação de leads.",
    image: "https://i.ibb.co/MysXTkV8/image.png",
    url: "https://boratripmilhas.vercel.app/",
    stats: {
      conversion: "N/A",
      leads: "N/A",
      time: "N/A",
    },
  },
  {
    id: "englobal-consorcios",
    title: "Englobal Consórcios",
    type: "Site Profissional",
    description:
      "Site profissional para empresa de consórcios, desenvolvido com foco em usabilidade e experiência do usuário.",
    image: "https://i.ibb.co/k2TPsbq3/image.png",
    url: "https://englobal.vercel.app/",
    stats: {
      conversion: "N/A",
      leads: "N/A",
      time: "N/A",
    },
  },
];

export function Cases() {
  const [activeCase, setActiveCase] = useState(cases[0]);

  return (
    <section className="py-20 bg-black" id="cases">
      <div className="container px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-1 w-12 bg-primary" />
            <p className="text-primary text-sm">CASES DE SUCESSO</p>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">
            Confira alguns cases{" "}
            <span className="text-primary">do meu portfólio</span>
          </h2>

          <div className="grid lg:grid-cols-[300px,1fr] gap-8">
            <div className="space-y-2">
              {cases.map((item) => (
                <motion.button
                  key={item.id}
                  className={`w-full text-left px-4 py-3 rounded transition-all duration-200 ${
                    activeCase.id === item.id
                      ? "bg-primary text-black font-medium"
                      : "bg-zinc-900/50 text-zinc-400 hover:bg-zinc-900 hover:text-white"
                  }`}
                  onClick={() => setActiveCase(item)}
                  whileHover={{ x: 4 }}
                >
                  {item.title}
                </motion.button>
              ))}
              <motion.button
                className="w-full text-left px-4 py-3 rounded border border-primary text-primary mt-4 flex items-center justify-between group"
                whileHover={{ x: 4 }}
              >
                <span>Ver todos os cases</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-zinc-900/50 border-zinc-800 p-6">
                  <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-6 group">
                    <Image
                      src={activeCase.image || "/placeholder.svg"}
                      alt={`Preview do Projeto ${activeCase.title}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Link href={activeCase.url} target="_blank">
                        <Button className="px-4 py-2 bg-primary text-black rounded-lg flex items-center gap-2 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          Ver Projeto Completo
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="h-1 w-6 bg-primary" />
                      <p className="text-zinc-400 text-sm">{activeCase.type}</p>
                    </div>

                    <h3 className="text-2xl font-bold text-white">
                      {activeCase.title}
                    </h3>

                    <p className="text-zinc-400">{activeCase.description}</p>
                    {/* stats removed temporally  */}
                    {/* <div className="grid grid-cols-3 gap-4 pt-4 border-t border-zinc-800">
                      {"conversion" in activeCase.stats && (
                        <div className="text-center p-3 rounded-lg bg-zinc-900">
                          <div className="text-2xl font-bold text-primary">
                            {activeCase.stats.conversion}
                          </div>
                          <div className="text-sm text-zinc-400">
                            Taxa de Conversão
                          </div>
                        </div>
                      )}
                      {"leads" in activeCase.stats && (
                        <div className="text-center p-3 rounded-lg bg-zinc-900">
                          <div className="text-2xl font-bold text-primary">
                            {activeCase.stats.leads}
                          </div>
                          <div className="text-sm text-zinc-400">
                            Leads Gerados
                          </div>
                        </div>
                      )}

                      <div className="text-center p-3 rounded-lg bg-zinc-900">
                        <div className="text-2xl font-bold text-primary">
                          {activeCase.stats.time}
                        </div>
                        <div className="text-sm text-zinc-400">
                          Tempo de Carregamento
                        </div>
                      </div>
                    </div> */}
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
