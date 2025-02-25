"use client"

import { TypeAnimation } from "react-type-animation"

export function TypeWriter() {
  return (
    <div className="h-[1.2em] relative mb-2">
      <TypeAnimation
        sequence={[
          "Landing Pages",
          2000,
          "Sites Profissionais",
          2000,
          "Páginas de Vendas",
          2000,
          "Páginas de Captura",
          2000,
          "Funis de Vendas",
          2000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Number.POSITIVE_INFINITY}
        className="text-[#c1ff00] absolute left-0 right-0"
      />
    </div>
  )
}

