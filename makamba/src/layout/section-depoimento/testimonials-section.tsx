import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { testimonials } from '../../service/Testimonial'

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

  // const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="Testemunhas" className="relative py-20 overflow-hidden cursor-default">
      {/* Animated Background */}
      {/* <div className="absolute inset-0 ">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%239C92AC fillOpacity=0.1%3E%3Ccircle cx=30 cy=30 r=2/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div> */}

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center ">
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-center mb-2">
            O que nossos clientes dizem
          </h2>
          {/* <p className="text-md md:text-lg text-gray-900 max-w-3xl mx-auto leading-relaxed">
            Descubra por que mais de 500+ empresas confiam em nossos serviços para transformar suas ideias em realidade
          </p> */}
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
                <div key={testimonial.id} className="w-full  flex-shrink-0">
                  <Card
                    className={`border-0 transition-all duration-500 hover:scale-[1.02] ${
                      index === currentIndex ? "" : ""
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
                      <blockquote className="text-md md:text-xl text-gray-900 dark:text-white text-center mb-10 leading-relaxed font-light italic">
                        <Quote className="inline w-5 h-5 text-gray-700 dark:text-gray-200 mr-2 -mt-2" />
                        {testimonial.content}
                        <Quote className="inline w-5 h-5 text-gray-700 dark:text-gray-200 ml-2 -mt-2 rotate-180" />
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
                          <h4 className="text-gray-900 dark:text-gray-100 font-bold text-xl md:2xl mb-1">{testimonial.name}</h4>
                          <p className="text-gray-800 dark:text-gray-200 text-lg font-medium">{testimonial.role}</p>
                          <p className="text-gray-800 dark:text-gray-200">{testimonial.company}</p>
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
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-14 h-14 bg-white/10 backdrop-blur-xl border-white/20 hover:bg-white/20 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110"
            onClick={goToPrevious}
          >
            <ChevronLeft className="text-black dark:text-gray-200 w-8 h-8" />
          </Button>

          <Button
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-14 h-14 bg-white/10 backdrop-blur-xl border-white/20 hover:bg-white/20 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110"
            onClick={goToNext}
          >
            <ChevronRight className="text-black dark:text-gray-200 w-8 h-8" />
          </Button>
        </div>

        {/* Enhanced Dots Indicator */}
        <div className="flex justify-center mt-12 space-x-3 ">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              className={`relative transition-all duration-500 ${
                index === currentIndex ? "w-12 h-3" : "w-3 h-3 hover:scale-125"
              }`}
              onClick={() => goToSlide(index)}
            >
              <div
                className={`absolute inset-0 rounded-full transition-all duration-500 ${
                  index === currentIndex
                    ? `bg-gradient-to-r ${testimonial.color} shadow-lg`
                    : "bg-gray-400 hover:bg-white/10"
                }`}
              ></div>
            </button>
          ))}
        </div>

        {/* Auto-play Control */}
        <div className="flex justify-center mt-8">
          <Button
            variant='ghost'
            size="sm"
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-gray-800 dark:text-gray-100 hover:text-gray-600 hover:bg-white/10 backdrop-blur-sm border border-gray-200 transition-all duration-300"
          >
            <div
              className={`w-2 h-2 rounded-full mr-2 ${isAutoPlaying ? "bg-green-400 animate-pulse" : "bg-gray-400"}`}
            ></div>
            {isAutoPlaying ? "Pausar" : "Reproduzir"} rotação automática
          </Button>
        </div>

        {/* Stats Section */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
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
        </div> */}
      </div>
    </section>
  )
}
