"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Mail, MousePointer, Cookie, ShieldCheck, Bell } from "lucide-react";
import { Header } from "@/components/layout/header";

export default function PrivacyPolicy() {
  const policyItems = [
    {
      icon: Mail,
      title: "Informações de Contato",
      description:
        "Coletamos apenas informações básicas de contato quando você solicita um orçamento ou entra em contato conosco.",
      points: ["Nome e e-mail", "Telefone (opcional)", "Detalhes do projeto"],
    },
    {
      icon: MousePointer,
      title: "Dados de Navegação",
      description:
        "Utilizamos ferramentas de análise para entender como os visitantes interagem com nosso site e melhorar a experiência.",
      points: [
        "Páginas visitadas",
        "Tempo de permanência",
        "Origem do tráfego",
      ],
    },
    {
      icon: Cookie,
      title: "Cookies Essenciais",
      description:
        "Usamos apenas cookies essenciais para garantir o funcionamento adequado do site e melhorar sua experiência.",
      points: [
        "Preferências de sessão",
        "Cookies de análise",
        "Sem cookies de terceiros invasivos",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Proteção de Dados",
      description:
        "Seus dados são armazenados com segurança e nunca são compartilhados ou vendidos a terceiros.",
      points: [
        "Armazenamento seguro",
        "Sem compartilhamento com terceiros",
        "Exclusão após finalidade cumprida",
      ],
    },
  ];

  return (
    <section className="pb-20 bg-black" id="privacidade">
      <Header />
      <div className="container px-4 md:px-6 pt-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-1 w-12 bg-[#c1ff00]" />
            <p className="text-[#c1ff00] text-sm">PRIVACIDADE</p>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Política de <span className="text-[#c1ff00]">Privacidade</span>
          </h2>

          <p className="text-zinc-400 mb-16 text-lg">
            Na Facter, respeitamos sua privacidade. Nossa política é simples:
            coletamos apenas o mínimo de informações necessárias para fornecer
            nossos serviços de criação de sites e landing pages.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {policyItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-zinc-900/50 border-zinc-800 p-6 h-full">
                  <div className="flex flex-col justify-center items-start gap-4">
                    <div className="p-3 rounded-lg bg-[#c1ff00]/10">
                      <item.icon className="h-6 w-6 text-[#c1ff00]" />
                    </div>
                    <div className="space-y-4 flex-1">
                      <h3 className="text-xl font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="text-zinc-400">{item.description}</p>
                      <ul className="pt-4 border-t border-zinc-800 space-y-2">
                        {item.points.map((point, i) => (
                          <li
                            key={i}
                            className="text-zinc-400 flex items-center gap-2"
                          >
                            <div className="h-1.5 w-1.5 rounded-full bg-[#c1ff00]" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 p-6 bg-zinc-900/50 border border-zinc-800 rounded-lg"
          >
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Bell className="h-5 w-5 text-[#c1ff00]" />
              Seus Direitos
            </h3>
            <p className="text-zinc-400 mb-4">
              Você tem o direito de solicitar acesso, correção ou exclusão de
              seus dados a qualquer momento. Para exercer esses direitos, entre
              em contato conosco através do e-mail abaixo.
            </p>
            <p className="text-zinc-400 text-center mt-6">
              Última atualização: 10 de março de 2025. Para mais informações ou
              dúvidas sobre nossa política de privacidade, entre em contato
              através do email{" "}
              <span className="text-[#c1ff00]">contato@facter.com.br</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
