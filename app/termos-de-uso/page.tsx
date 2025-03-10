"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { FileText, Shield, Wallet, Clock, Scale, FileCheck } from "lucide-react"
import { Header } from "@/components/layout/header"

export default function TermsOfUse() {
  const sections = [
    {
      icon: FileText,
      title: "Aceitação dos Termos",
      content: `Ao acessar e utilizar os serviços da Facter Sites, você concorda com estes Termos de Uso em sua totalidade. Se você não concordar com qualquer parte destes termos, solicitamos que não utilize nossos serviços.`,
    },
    {
      icon: Shield,
      title: "Serviços Oferecidos",
      content: `A Facter Sites oferece serviços de criação e desenvolvimento de sites, landing pages e soluções digitais. Nossos serviços incluem design, programação, implementação e suporte conforme especificado em contrato individual com cada cliente.`,
    },
    {
      icon: FileCheck,
      title: "Responsabilidades do Cliente",
      content: `O cliente é responsável por fornecer conteúdo (textos, imagens, vídeos) para o desenvolvimento do projeto dentro dos prazos acordados. O cliente também é responsável pela veracidade e legalidade de todo o conteúdo fornecido, incluindo a garantia de que possui os direitos necessários sobre todo material enviado.`,
    },
    {
      icon: Wallet,
      title: "Pagamentos e Entregas",
      content: `Os valores, formas de pagamento e cronograma de entregas serão definidos em contrato específico para cada projeto. A Facter Sites se compromete a cumprir os prazos estabelecidos, desde que o cliente forneça os materiais necessários dentro dos prazos acordados.`,
    },
    {
      icon: Scale,
      title: "Propriedade Intelectual",
      content: `Após a conclusão do projeto e pagamento integral, o cliente receberá os direitos de uso sobre o design e estrutura desenvolvidos. A Facter Sites mantém o direito de utilizar o projeto em seu portfólio e materiais promocionais, salvo acordo em contrário estabelecido formalmente.`,
    },
    {
      icon: Clock,
      title: "Alterações e Revisões",
      content: `O número de revisões e alterações incluídas em cada projeto será especificado em contrato. Alterações adicionais ou fora do escopo original poderão implicar em custos extras e extensão de prazos, mediante acordo prévio entre as partes.`,
    },
  ]

  return (
    <section className="pb-20 bg-black">
      <Header />
      <div className="container px-4 md:px-6 pt-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-1 w-12 bg-[#c1ff00]" />
            <p className="text-[#c1ff00] text-sm">LEGAL</p>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Termos de <span className="text-[#c1ff00]">Uso</span>
          </h2>

          <p className="text-zinc-400 mb-16 text-lg">
            Este documento estabelece as condições para utilização dos serviços oferecidos pela Facter Sites. Última
            atualização: 10 de março de 2025.
          </p>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-zinc-900/50 border-zinc-800 p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="p-3 rounded-lg bg-[#c1ff00]/10 h-fit">
                      <section.icon className="h-6 w-6 text-[#c1ff00]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">{section.title}</h3>
                      <p className="text-zinc-400">{section.content}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 p-6 bg-zinc-900/50 border border-zinc-800 rounded-lg"
          >
            <h3 className="text-xl font-bold text-white mb-4">Disposições Gerais</h3>
            <div className="space-y-4 text-zinc-400">
              <p>
                Estes Termos de Uso são regidos pelas leis brasileiras. Qualquer disputa decorrente deste acordo será
                resolvida nos tribunais da comarca de São Paulo/SP.
              </p>
              <p>
                A Facter Sites reserva-se o direito de modificar estes termos a qualquer momento, sendo responsabilidade
                do usuário verificar periodicamente as atualizações.
              </p>
              <p>
                Se qualquer disposição destes Termos de Uso for considerada inválida ou inexequível, as demais
                disposições permanecerão em pleno vigor e efeito.
              </p>
              <p>
                Para dúvidas ou esclarecimentos sobre estes Termos de Uso, entre em contato através do email{" "}
                <span className="text-[#c1ff00]">contato@factersites.com.br</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

