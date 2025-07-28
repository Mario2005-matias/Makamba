import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  color: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maria Silva",
    role: "CEO",
    company: "TechStart",
    content:
      "Excelente serviço! A equipe superou todas as nossas expectativas e entregou um produto de qualidade excepcional.",
    rating: 5,
    avatar: "/placeholder.svg",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    name: "João Santos",
    role: "Diretor de Marketing",
    company: "Inovação Digital",
    content:
      "Trabalhar com esta equipe foi uma experiência incrível. Eles transformaram nossa visão em realidade.",
    rating: 5,
    avatar: "/placeholder.svg",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    name: "Ana Costa",
    role: "Fundadora",
    company: "StartupBrasil",
    content:
      "Profissionalismo e qualidade em cada detalhe. O resultado final superou todas as nossas expectativas.",
    rating: 5,
    avatar: "/placeholder.svg",
    color: "from-emerald-500 to-teal-500",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isSignificantMovement = Math.abs(distance) > 75;

    if (isSignificantMovement) {
      if (distance > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }

    setTouchStart(null);
    setTouchEnd(null);
  }, [touchStart, touchEnd]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, goToNext]);

  return (
    <section
      id="Testemunhas"
      className="py-20 bg-gradient-to-r from-[#FF6B6B] via-[#A45EE5] to-[#4E89FF] relative"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Adicionar um overlay para melhorar a legibilidade */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>

      {/* Conteúdo existente com z-index para ficar acima do overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            O que nossos clientes estão dizendo
          </h2>
        </div>

        <div className="relative">
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.id}
                    className="bg-white/10 backdrop-blur-xl border border-white/20 hover:shadow-xl transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-4">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div>
                            <h3 className="font-semibold text-white">
                              {testimonial.name}
                            </h3>
                            <p className="text-sm text-gray-300">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                        <Quote className="w-8 h-8 text-purple-400" />
                      </div>
                      <p className="text-gray-300 mb-4">
                        {testimonial.content}
                      </p>
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 text-white hover:bg-white/10"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 text-white hover:bg-white/10"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "bg-white scale-125"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
