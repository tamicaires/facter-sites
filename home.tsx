"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Code,
  Database,
  Globe,
  ChevronRight,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  TrendingUp,
  Clock,
  Star,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { ProjectCard } from "@/components/project-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { FloatingElement } from "@/components/floating-element"
import { PainPointCard } from "@/components/pain-point-card"
import { SolutionCard } from "@/components/solution-card"
import { ProcessStep } from "@/components/process-step"

const projects = [
  {
    title: "E-commerce de Luxo",
    description: "Plataforma completa com backend em Nest.js e frontend em Next.js",
    image: "/project1.jpg",
    tags: ["Next.js", "Nest.js", "PostgreSQL"],
  },
  {
    title: "Dashboard Analítico",
    description: "Visualização de dados em tempo real com React e MongoDB",
    image: "/project2.jpg",
    tags: ["React", "MongoDB", "D3.js"],
  },
  {
    title: "App de Gestão Financeira",
    description: "Aplicativo móvel desenvolvido com React Native e backend em Node.js",
    image: "/project3.jpg",
    tags: ["React Native", "Node.js", "GraphQL"],
  },
  {
    title: "Sistema de Gerenciamento",
    description: "Solução empresarial com TypeScript e PostgreSQL",
    image: "/project4.jpg",
    tags: ["TypeScript", "PostgreSQL", "Docker"],
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-effect">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl" />
                <div className="relative flex items-center justify-center w-full h-full rounded-xl bg-primary/10 border border-primary/20">
                  <Code className="h-5 w-5 text-primary" />
                </div>
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                Tami Dev
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Serviços
              </Link>
              <Link href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Projetos
              </Link>
              <Link href="#technologies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Tecnologias
              </Link>
              <Link href="#testimonials" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Depoimentos
              </Link>
              <ThemeToggle />
            </div>

            <Button className="relative overflow-hidden group bg-primary hover:bg-primary/90">
              <span className="relative z-10">Solicitar Orçamento</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/50 to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="hero-gradient absolute inset-0" />
        <div className="grid-pattern absolute inset-0 opacity-[0.02]" />

        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center px-4 py-2 mb-8 rounded-full glass-effect">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse-glow mr-2" />
              <span className="text-sm text-muted-foreground">Transformando ideias em realidade digital</span>
            </div>

            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
              Aumente seu
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                {" "}
                Faturamento{" "}
              </span>
              com Tecnologia de Ponta
            </h1>

            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Transforme sua empresa com soluções digitais que geram resultados reais. Mais de 200 empresas já
              aumentaram suas vendas em até 300%.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="relative group overflow-hidden bg-primary hover:bg-primary/90">
                <span className="relative z-10">Iniciar Projeto</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/50 to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="group border-primary/20 hover:border-primary/40 transition-colors"
              >
                Ver Portfólio
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-20"
          >
            <div className="relative mx-auto max-w-5xl">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl" />
              <div className="relative rounded-2xl glass-effect p-2">
                <Image
                  src="/dashboard-preview.png"
                  alt="Dashboard Preview"
                  width={1200}
                  height={600}
                  className="rounded-xl shadow-2xl"
                />

                <FloatingElement
                  className="absolute -top-8 left-10"
                  icon={<CheckCircle className="h-4 w-4 text-green-500" />}
                  text="Sistema Online"
                />

                <FloatingElement
                  className="absolute -bottom-8 right-10"
                  icon={<Zap className="h-4 w-4 text-primary" />}
                  text="99.9% Uptime"
                  delay={1}
                />
              </div>
            </div>
          </motion.div>
        </div>
        <div className="w-full bg-primary/5 border-y border-primary/10 py-4 mt-12">
          <div className="container flex items-center justify-center gap-4 text-sm md:text-base">
            <Clock className="h-5 w-5 text-primary animate-pulse" />
            <p>
              <span className="font-semibold">Oferta especial:</span> Consultoria gratuita para os próximos{" "}
              <span className="text-primary font-bold">5 clientes</span>
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="grid-pattern absolute inset-0 opacity-[0.02]" />

        <div className="container mx-auto px-6 relative">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Soluções
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  {" "}
                  Completas{" "}
                </span>
                em Desenvolvimento
              </h2>
              <p className="text-muted-foreground text-lg">
                Transformamos complexidade em simplicidade com nossas soluções full stack
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="h-6 w-6 text-primary" />,
                title: "Desenvolvimento Web",
                description: "Aplicações web modernas e responsivas com as melhores práticas de desenvolvimento.",
              },
              {
                icon: <Database className="h-6 w-6 text-primary" />,
                title: "Backend Robusto",
                description: "APIs escaláveis e banco de dados otimizados para alto desempenho.",
              },
              {
                icon: <Globe className="h-6 w-6 text-primary" />,
                title: "Soluções Full Stack",
                description: "Integração perfeita entre frontend e backend para uma experiência completa.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative p-6 space-y-4">
                    <div className="inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-primary/5 to-background" />
        <div className="grid-pattern absolute inset-0 opacity-[0.02]" />

        <div className="container mx-auto px-6 relative">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Nossos
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  {" "}
                  Projetos{" "}
                </span>
                em Destaque
              </h2>
              <p className="text-muted-foreground text-lg">
                Conheça algumas das soluções que desenvolvemos para nossos clientes
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section id="pain-points" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="grid-pattern absolute inset-0 opacity-[0.02]" />

        <div className="container mx-auto px-6 relative">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Superando
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  {" "}
                  Desafios{" "}
                </span>
                Tecnológicos
              </h2>
              <p className="text-muted-foreground text-lg">
                Entendemos as dificuldades que sua empresa enfrenta no mundo digital
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <PainPointCard
              icon={<Clock className="h-8 w-8 text-primary" />}
              title="Tempo de Desenvolvimento Lento"
              description="Projetos que se arrastam e atrasam o lançamento de produtos essenciais para o seu negócio."
            />
            <PainPointCard
              icon={<TrendingUp className="h-8 w-8 text-primary" />}
              title="Dificuldade em Escalar"
              description="Sistemas que não acompanham o crescimento do seu negócio, limitando sua expansão."
            />
            <PainPointCard
              icon={<Shield className="h-8 w-8 text-primary" />}
              title="Preocupações com Segurança"
              description="Vulnerabilidades que podem comprometer dados sensíveis e a confiança dos seus clientes."
            />
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-primary/5 to-background" />
        <div className="grid-pattern absolute inset-0 opacity-[0.02]" />

        <div className="container mx-auto px-6 relative">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Nossas
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  {" "}
                  Soluções{" "}
                </span>
                Inovadoras
              </h2>
              <p className="text-muted-foreground text-lg">
                Transformamos desafios em oportunidades com tecnologia de ponta
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <SolutionCard
              icon={<Zap className="h-8 w-8 text-primary" />}
              title="Desenvolvimento Ágil"
              description="Metodologias modernas e equipe experiente para entregar seu projeto rapidamente, sem comprometer a qualidade."
            />
            <SolutionCard
              icon={<TrendingUp className="h-8 w-8 text-primary" />}
              title="Arquitetura Escalável"
              description="Soluções projetadas para crescer com seu negócio, utilizando tecnologias cloud-native e práticas de DevOps."
            />
            <SolutionCard
              icon={<Shield className="h-8 w-8 text-primary" />}
              title="Segurança Avançada"
              description="Implementação de práticas de segurança de última geração para proteger seus dados e a privacidade dos seus clientes."
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="grid-pattern absolute inset-0 opacity-[0.02]" />

        <div className="container mx-auto px-6 relative">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Nosso
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  {" "}
                  Processo{" "}
                </span>
                de Desenvolvimento
              </h2>
              <p className="text-muted-foreground text-lg">
                Uma abordagem estruturada para transformar sua visão em realidade
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <ProcessStep
                number={1}
                title="Descoberta e Planejamento"
                description="Entendemos profundamente suas necessidades e objetivos de negócio."
              />
              <ProcessStep
                number={2}
                title="Design e Prototipagem"
                description="Criamos wireframes e protótipos interativos para validar conceitos."
              />
              <ProcessStep
                number={3}
                title="Desenvolvimento Ágil"
                description="Implementamos sua solução com sprints iterativos e feedback contínuo."
              />
              <ProcessStep
                number={4}
                title="Testes e Garantia de Qualidade"
                description="Realizamos testes rigorosos para garantir um produto final impecável."
              />
              <ProcessStep
                number={5}
                title="Lançamento e Suporte Contínuo"
                description="Implementamos sua solução e oferecemos suporte pós-lançamento."
              />
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl" />
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/process-illustration.svg"
                  alt="Processo de Desenvolvimento"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section id="roi" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-primary/5 to-background" />
        <div className="grid-pattern absolute inset-0 opacity-[0.02]" />

        <div className="container mx-auto px-6 relative">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Impacto
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  {" "}
                  Mensurável{" "}
                </span>
                nos Negócios
              </h2>
              <p className="text-muted-foreground text-lg">
                Veja como nossas soluções podem transformar seus resultados
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">300%</h3>
              <p className="text-xl font-semibold mb-4">Aumento em Vendas</p>
              <p className="text-muted-foreground">
                Nossos clientes experimentam em média um aumento de 300% em suas vendas online após implementação.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">-45%</h3>
              <p className="text-xl font-semibold mb-4">Redução de Custos</p>
              <p className="text-muted-foreground">
                Automatização e otimização de processos resultam em significativa redução de custos operacionais.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">15 dias</h3>
              <p className="text-xl font-semibold mb-4">Implementação Rápida</p>
              <p className="text-muted-foreground">
                Do conceito ao lançamento em tempo recorde, sem comprometer a qualidade.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="grid-pattern absolute inset-0 opacity-[0.02]" />

        <div className="container mx-auto px-6 relative">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Tecnologias
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  {" "}
                  Avançadas{" "}
                </span>
                que Utilizamos
              </h2>
              <p className="text-muted-foreground text-lg">
                Trabalhamos com as mais recentes e poderosas tecnologias do mercado
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "TypeScript",
                icon: "https://static-00.iconduck.com/assets.00/file-type-typescript-icon-2048x1349-0um6gqic.png",
              },
              { name: "React", icon: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" },
              {
                name: "Next.js",
                icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png",
              },
              { name: "Nest.js", icon: "https://static-00.iconduck.com/assets.00/nestjs-icon-2048x2040-3rrvcej8.png" },
              {
                name: "MongoDB",
                icon: "https://static-00.iconduck.com/assets.00/database-mongo-db-icon-980x1024-1q3t2p6x.png",
              },
              {
                name: "PostgreSQL",
                icon: "https://cdn.iconscout.com/icon/free/png-256/free-postgresql-8-1175119.png?f=webp",
              },
              { name: "GraphQL", icon: "/icons/graphql.svg" },
              {
                name: "Docker",
                icon: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png",
              },
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="relative w-20 h-20 mb-4">
                  <div className="absolute inset-0 bg-primary/10 rounded-xl blur-lg" />
                  <div className="relative flex items-center justify-center w-full h-full rounded-xl bg-card border border-primary/20">
                    <Image src={tech.icon || "/placeholder.svg"} alt={tech.name} width={40} height={40} />
                  </div>
                </div>
                <span className="text-sm font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-primary/5 to-background" />
        <div className="grid-pattern absolute inset-0 opacity-[0.02]" />

        <div className="container mx-auto px-6 relative">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                O que Nossos
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  {" "}
                  Clientes{" "}
                </span>
                Dizem
              </h2>
              <p className="text-muted-foreground text-lg">
                Veja o impacto que nossas soluções têm nos negócios de nossos clientes
              </p>
            </motion.div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-16">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm">ISO 27001 Certificado</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="text-sm">+500 Projetos Entregues</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-sm">+200 Clientes Ativos</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-primary" />
              <span className="text-sm">4.9/5 Avaliação Média</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard
              name="Carlos Silva"
              role="CEO, TechCorp"
              content="A Tami Dev superou todas as nossas expectativas. Entregaram um produto de altíssima qualidade no prazo e com uma atenção aos detalhes impressionante."
            />
            <TestimonialCard
              name="Ana Ferreira"
              role="CTO, InnovateBR"
              content="A expertise técnica e a capacidade de resolver problemas complexos da equipe da Tami Dev são incomparáveis. Eles não apenas entregaram o projeto, mas também nos ajudaram a evoluir nossa visão tecnológica."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background" />
        <div className="grid-pattern absolute inset-0 opacity-[0.02]" />

        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
              🔥 Oferta por tempo limitado
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Garanta Agora sua
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                {" "}
                Consultoria Gratuita{" "}
              </span>
              + Diagnóstico Digital
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Descubra como sua empresa pode aumentar o faturamento em até 300% com nossas soluções digitais. Vagas
              limitadas!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="relative group overflow-hidden bg-primary hover:bg-primary/90 w-full sm:w-auto"
              >
                <span className="relative z-10">Quero Aumentar Minhas Vendas</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/50 to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-sm text-muted-foreground">Apenas 5 vagas disponíveis para este mês</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-primary/10">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="relative w-8 h-8">
                  <div className="absolute inset-0 bg-primary/20 rounded-lg blur-lg" />
                  <div className="relative flex items-center justify-center w-full h-full rounded-lg bg-primary/10 border border-primary/20">
                    <Code className="h-4 w-4 text-primary" />
                  </div>
                </div>
                <span className="text-lg font-bold">Tami Dev</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Transformando ideias em soluções digitais inovadoras desde 2018.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Desenvolvimento Web
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Aplicações Mobile
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Consultoria Técnica
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    UI/UX Design
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Carreiras
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Siga-nos</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" ariahidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary/10 text-center">
            <p className="text-sm text-muted-foreground">© 2023 Tami Dev. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

