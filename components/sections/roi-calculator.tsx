"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Calculator, TrendingUp, DollarSign } from "lucide-react"

export function ROICalculator() {
  const [revenue, setRevenue] = useState("")
  const [showResults, setShowResults] = useState(false)

  const calculateROI = (currentRevenue: number) => {
    const projectedRevenue = currentRevenue * 3 // 300% aumento
    const investment = currentRevenue * 0.1 // 10% do faturamento atual
    const netProfit = projectedRevenue - currentRevenue - investment
    const roi = (netProfit / investment) * 100

    return {
      projectedRevenue: projectedRevenue.toLocaleString("pt-BR"),
      investment: investment.toLocaleString("pt-BR"),
      netProfit: netProfit.toLocaleString("pt-BR"),
      roi: roi.toFixed(0),
    }
  }

  const handleCalculate = () => {
    if (revenue) {
      setShowResults(true)
    }
  }

  const results = revenue ? calculateROI(Number(revenue.replace(/\D/g, ""))) : null

  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="Calcule seu Retorno sobre Investimento"
          subtitle="Descubra quanto sua empresa pode crescer com nossas soluções"
          highlight="Retorno"
        />

        <div className="max-w-3xl mx-auto">
          <Card className="p-6">
            <div className="grid gap-6">
              <div className="space-y-2">
                <Label htmlFor="revenue">Faturamento Mensal Atual</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="revenue"
                    placeholder="Ex: 100.000"
                    className="pl-9"
                    value={revenue}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "")
                      setRevenue(Number(value).toLocaleString("pt-BR"))
                    }}
                  />
                </div>
              </div>

              <Button onClick={handleCalculate} className="w-full">
                <Calculator className="mr-2 h-4 w-4" />
                Calcular ROI
              </Button>

              {showResults && results && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid sm:grid-cols-2 gap-4 pt-6 border-t"
                >
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">Faturamento Projetado</div>
                    <div className="text-2xl font-bold text-primary">R$ {results.projectedRevenue}</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">Investimento Necessário</div>
                    <div className="text-2xl font-bold">R$ {results.investment}</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">Lucro Líquido Adicional</div>
                    <div className="text-2xl font-bold text-primary">R$ {results.netProfit}</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">ROI</div>
                    <div className="text-2xl font-bold flex items-center gap-2">
                      {results.roi}%
                      <TrendingUp className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

