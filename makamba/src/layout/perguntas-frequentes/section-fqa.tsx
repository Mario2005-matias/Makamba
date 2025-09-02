"use client"

import { useState } from "react"
import { Plus, X, ArrowRight } from "lucide-react"

interface AccordionItem {
  id: string
  title: string
  content: string
}

const accordionItems: AccordionItem[] = [
  {
    id: "experience",
    title: "Mais de 5 anos de experiência no setor",
    content:
      "Nossa equipe acumula anos de atuação no mercado digital, dominando tecnologias modernas e práticas eficientes para garantir os melhores resultados.",
  },
  {
    id: "execution",
    title: "Execução pontual e com ótimo custo-benefício",
    content:
      "Planejamos e executamos cada projeto com foco em prazos realistas e soluções acessíveis, sem comprometer a qualidade.",
  },
  {
    id: "certified",
    title: "Equipe qualificada e confiável",
    content:
      "Trabalhamos com profissionais capacitados, comprometidos com a excelência e com foco total na sua satisfação.",
  },
  {
    id: "innovation",
    title: "Tecnologias modernas e soluções inovadoras",
    content:
      "Utilizamos ferramentas atualizadas, métodos ágeis e recursos digitais para entregar projetos impactantes e de alto desempenho.",
  },
]

export default function FqaSection() {
  const [expandedItem, setExpandedItem] = useState<string>("execution")

  const toggleItem = (itemId: string) => {
    setExpandedItem(expandedItem === itemId ? "" : itemId)
  }

  return (
    <div className=" px-8 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Coluna Esquerda */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              Perguntas Frequentes
            </h1>

            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Com mais de 5 anos de experiência no setor, oferecemos soluções digitais de alta qualidade, pontuais e com excelente custo-benefício. Nossa equipe é especializada, confiável e comprometida com a excelência, garantindo que cada projeto atenda aos mais altos padrões de inovação, desempenho e segurança.
            </p>

            <button className="bg-black dark:bg-orange-500 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-800 transition-colors">
              Vamos trabalhar
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Coluna Direita - Acordeão */}
          <div className="space-y-4">
            {accordionItems.map((item) => (
              <div key={item.id} className="bg-white dark:bg-gray-900  rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between dark:hover:bg-gray-900 hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 dark:text-gray-100 text-lg">{item.title}</span>
                  {expandedItem === item.id ? (
                    <X className="w-6 h-6 text-gray-600 dark:text-gray-200 flex-shrink-0" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-600 dark:text-gray-200 flex-shrink-0" />
                  )}
                </button>
                                           
                {expandedItem === item.id && (
                  <div className="px-6 pb-6">
                    <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white p-6 rounded-xl">
                      <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                      <p className="text-orange-50 leading-relaxed">{item.content}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
