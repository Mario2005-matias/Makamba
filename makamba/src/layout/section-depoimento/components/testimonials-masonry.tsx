"use client"

import { useState, useEffect } from "react"

interface Testimonial {
  id: number
  name: string
  username: string
  avatar: string
  content: string
  company?: string
  companyLogo?: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Leslie Alexander",
    username: "@lesliealexander",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Laborum quis quam. Dolorum et ut autem ullam voluptatem numquam delectus nihil. Aut enim doloremque et ipsam.",
  },
  {
    id: 2,
    name: "Brenna Goyette",
    username: "@brennagoyette",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.",
    company: "SavvyCal",
    companyLogo: "/placeholder.svg?height=24&width=80",
  },
  {
    id: 3,
    name: "Leonard Krasner",
    username: "@leonardkrasner",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.",
  },
  {
    id: 4,
    name: "Michael Foster",
    username: "@michaelfoster",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "Quid dolorem qui et. Atque quo aliquid sit eos officia. Dolores similique laboriosam quaerat cupiditate.",
  },
  {
    id: 5,
    name: "Floyd Miles",
    username: "@floydmiles",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Architecto libero natus est. Est quam debitis officia enim atque et ut non. Sunt reiciendis quasi eaque. Iusto error ut et.",
  },
  {
    id: 6,
    name: "Lindsay Walton",
    username: "@lindsaywalton",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.",
  },
  {
    id: 7,
    name: "Tom Cook",
    username: "@tomcook",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.",
  },
  {
    id: 8,
    name: "Whitney Francis",
    username: "@whitneyfrancis",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Consequatur ut atque. Itaque nostrum molestiae id veniam eos cumque. Ut qua eum fugit laborum quidem inventore ut molestias. Voluptatem repudiandae officiis bell.",
  },
  {
    id: 9,
    name: "Emily Chen",
    username: "@emilychen",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Temporibus ea molestiae impedit adipisci perspiciatis illo aliquid. Quas ut ratione excepturi et. Nostrum explicabo iste unde.",
  },
]

export default function TestimonialsMasonry() {
  const [columns, setColumns] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setColumns(1)
      } else if (window.innerWidth < 1024) {
        setColumns(2)
      } else {
        setColumns(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const distributeTestimonials = () => {
    const columnArrays: Testimonial[][] = Array.from({ length: columns }, () => [])

    testimonials.forEach((testimonial, index) => {
      const columnIndex = index % columns
      columnArrays[columnIndex].push(testimonial)
    })

    return columnArrays
  }

  const testimonialColumns = distributeTestimonials()

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">O que nossos clientes estão dizendo</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Milhares de empresas confiam em nossa plataforma para impulsionar seus negócios
          </p>
        </div>

        {/* Masonry Grid */}
        <div
          className={`grid gap-6 ${
            columns === 1 ? "grid-cols-1" : columns === 2 ? "grid-cols-2" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {testimonialColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-6">
              {column.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  delay={columnIndex * 100 + index * 50}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

interface TestimonialCardProps {
  testimonial: Testimonial
  delay: number
}

function TestimonialCard({ testimonial, delay }: TestimonialCardProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{
        transitionDelay: `${delay}ms`,
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      }}
    >
      {/* Company Logo */}
      {testimonial.company && (
        <div className="flex justify-end mb-4">
          <div className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            {testimonial.company}
          </div>
        </div>
      )}

      {/* Testimonial Content */}
      <blockquote className="text-gray-700 text-base leading-relaxed mb-6">"{testimonial.content}"</blockquote>

      {/* Author Info */}
      <div className="flex items-center gap-3">
        <img
          src={testimonial.avatar || "/placeholder.svg"}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-100"
        />
        <div>
          <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
          <div className="text-gray-500 text-sm">{testimonial.username}</div>
        </div>
      </div>
    </div>
  )
}
