import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "/components/ui/button"
import { Card, CardContent } from "/components/ui/card"

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
  color: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maria Silva",
    role: "CEO",
    company: "TechStart",
    content:
      "Excelente serviço! A equipe superou todas as nossas expectativas e entregou um produto de qualidade excepcional. A atenção aos detalhes e o profissionalismo foram impressionantes.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    name: "João Santos",
    role: "Diretor de Marketing",
    company: "Inovação Digital",
    content:
      "Trabalhar com esta equipe foi uma experiência incrível. Eles entenderam perfeitamente nossa visão e transformaram em realidade, superando todas as expectativas.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    name: "Ana Costa",
    role: "Fundadora",
    company: "StartupBrasil",
    content:
      "Profissionalismo e qualidade em cada detalhe. O resultado final superou todas as nossas expectativas. A comunicação foi clara e o suporte excepcional.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 4,
    name: "Carlos Oliveira",
    role: "CTO",
    company: "DevSolutions",
    content:
      "A atenção aos detalhes técnicos e a capacidade de entender nossas necessidades complexas foi impressionante. Parceria de longo prazo garantida!",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    name: "Lucia Ferreira",
    role: "Gerente de Produto",
    company: "FinTech Pro",
    content:
      "Entrega no prazo, qualidade excepcional e suporte contínuo. A metodologia de trabalho e a transparência no processo foram exemplares.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
    color: "from-indigo-500 to-purple-500",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isHovered, setIsHovered] = useState(false)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || isHovered) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, isHovered])

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 transition-all duration-300 ${
          i < rating ? "fill-yellow-400 text-yellow-400 drop-shadow-sm" : "text-gray-300"
        }`}
      />
    ))
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%239C92AC fillOpacity=0.1%3E%3Ccircle cx=30 cy=30 r=2/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6 shadow-2xl">
            <Quote className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent mb-6 leading-tight">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Descubra por que mais de 500+ empresas confiam em nossos serviços para transformar suas ideias em realidade
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Testimonial Card */}
          <div className="overflow-hidden">
            <div
              className="flex transition-all duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-6">
                  <Card
                    className={`bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] ${
                      index === currentIndex ? "ring-2 ring-white/30" : ""
                    }`}
                  >
                    <CardContent className="p-10 md:p-12">
                      {/* Gradient Accent */}
                      <div className={`w-full h-1 bg-gradient-to-r ${testimonial.color} rounded-full mb-8`}></div>

                      {/* Rating */}
                      <div className="flex justify-center mb-8">
                        <div className="flex space-x-1 p-3 bg-white/10 rounded-full backdrop-blur-sm">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>

                      {/* Testimonial Content */}
                      <blockquote className="text-xl md:text-2xl text-white text-center mb-10 leading-relaxed font-light italic">
                        <Quote className="inline w-8 h-8 text-purple-300 mr-2 -mt-2" />
                        {testimonial.content}
                        <Quote className="inline w-8 h-8 text-purple-300 ml-2 -mt-2 rotate-180" />
                      </blockquote>

                      {/* Author Info */}
                      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                        <div className="relative">
                          <div
                            className={`absolute inset-0 bg-gradient-to-r ${testimonial.color} rounded-full blur-md opacity-75`}
                          ></div>
                          <img
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="relative w-20 h-20 rounded-full object-cover border-4 border-white/30 shadow-xl"
                          />
                        </div>
                        <div className="text-center md:text-left">
                          <h4 className="font-bold text-white text-2xl mb-1">{testimonial.name}</h4>
                          <p className="text-purple-200 text-lg font-medium">{testimonial.role}</p>
                          <p className="text-gray-300">{testimonial.company}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-14 h-14 bg-white/10 backdrop-blur-xl border-white/20 hover:bg-white/20 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110"
            onClick={goToPrevious}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-14 h-14 bg-white/10 backdrop-blur-xl border-white/20 hover:bg-white/20 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110"
            onClick={goToNext}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Enhanced Dots Indicator */}
        <div className="flex justify-center mt-12 space-x-3">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              className={`relative transition-all duration-500 ${
                index === currentIndex ? "w-12 h-4" : "w-4 h-4 hover:scale-125"
              }`}
              onClick={() => goToSlide(index)}
            >
              <div
                className={`absolute inset-0 rounded-full transition-all duration-500 ${
                  index === currentIndex
                    ? `bg-gradient-to-r ${testimonial.color} shadow-lg`
                    : "bg-white/30 hover:bg-white/50"
                }`}
              ></div>
            </button>
          ))}
        </div>

        {/* Auto-play Control */}
        <div className="flex justify-center mt-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-gray-300 hover:text-white hover:bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300"
          >
            <div
              className={`w-2 h-2 rounded-full mr-2 ${isAutoPlaying ? "bg-green-400 animate-pulse" : "bg-gray-400"}`}
            ></div>
            {isAutoPlaying ? "Pausar" : "Reproduzir"} rotação automática
          </Button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-gray-300">Clientes Satisfeitos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">98%</div>
            <div className="text-gray-300">Taxa de Satisfação</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-300">Suporte Disponível</div>
          </div>
        </div>
      </div>
    </section>
  )
}
