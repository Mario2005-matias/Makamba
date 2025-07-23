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
    title: "20+ Years of construction experience",
    content:
      "Our extensive experience in the construction industry ensures that we understand the complexities and challenges of every project type.",
  },
  {
    id: "execution",
    title: "On-time & budget-friendly execution",
    content:
      "We prioritize efficient planning and cost-effective solutions to meet deadlines without exceeding budgets.",
  },
  {
    id: "certified",
    title: "Licensed, insured, and industry-certified",
    content:
      "Our team holds all necessary licenses and certifications, providing you with peace of mind and professional assurance.",
  },
  {
    id: "sustainable",
    title: "Sustainable & modern building practices",
    content: "We incorporate eco-friendly materials and cutting-edge construction techniques to build for the future.",
  },
]

export default function FqaSection() {
  const [expandedItem, setExpandedItem] = useState<string>("execution")

  const toggleItem = (itemId: string) => {
    setExpandedItem(expandedItem === itemId ? "" : itemId)
  }

  return (
    <div className="bg-gray-50 min-h-screen px-8 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Why businesses trust elite builders Inc.?
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed">
              With 20+ years of industry experience, we deliver high-quality, on-time, and cost-effective construction
              solutions. Our team is licensed, insured, and committed to excellence, ensuring every project meets the
              highest standards of safety and craftsmanship.
            </p>

            <button className="bg-black text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-800 transition-colors">
              Start your project
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Column - Accordion */}
          <div className="space-y-4">
            {accordionItems.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 text-lg">{item.title}</span>
                  {expandedItem === item.id ? (
                    <X className="w-6 h-6 text-gray-600 flex-shrink-0" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-600 flex-shrink-0" />
                  )}
                </button>

                {expandedItem === item.id && (
                  <div className="px-6 pb-6">
                    <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white p-6 rounded-xl">
                      <h3 className="font-bold text-xl mb-3">
                        {item.id === "execution" ? "On-time & budget-friendly execution" : item.title}
                      </h3>
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
