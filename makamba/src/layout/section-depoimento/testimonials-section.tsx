import React, { useEffect, useState, useCallback, Suspense } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "../../components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import WomanChef from "../../assets/Woman-Chefe-Cooking.jpg";
import { useMediaQuery } from "../../hooks/use-media-query";

const Card = React.lazy(() => import("../../components/ui/card").then(module => ({ default: module.Card })));
const CardContent = React.lazy(() => import("../../components/ui/card").then(module => ({ default: module.CardContent })));
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
    name: "Filipe Fernandes",
    role: "CEO",
    company: "TechStart",
    content:
      "Excelente serviço! A equipe superou todas as nossas expectativas e entregou um produto de qualidade excepcional.",
    rating: 5,
    avatar: WomanChef,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    name: "João Tavares José",
    role: "Diretor de Marketing",
    company: "Inovação Digital",
    content:
      "Trabalhar com esta equipe foi uma experiência incrível. Eles transformaram nossa visão em realidade.",
    rating: 5,
    avatar: WomanChef,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    name: "Màrio Matias",
    role: "Fundador",
    company: "StartupBrasil",
    content:
      "Profissionalismo e qualidade em cada detalhe. O resultado final superou todas as nossas expectativas.",
    rating: 5,
    avatar: WomanChef,
    color: "from-emerald-500 to-teal-500",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Media queries para responsividade
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(min-width: 641px) and (max-width: 1024px)");

  // Determina quantos cards mostrar com base no tamanho da tela
  const getVisibleCards = useCallback(() => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 3;
  }, [isMobile, isTablet]);

  // Função para obter os cards visíveis atualmente
  const getCurrentCards = useCallback(() => {
    const visibleCards = getVisibleCards();
    const cards = [];
    let index = currentIndex;

    for (let i = 0; i < visibleCards; i++) {
      cards.push(testimonials[index]);
      index = (index + 1) % testimonials.length;
    }

    return cards;
  }, [currentIndex, getVisibleCards]);

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
      className="py-20 bg-slate-900"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            O que nossos clientes estão{" "}
            <span className="text-[#FF6700]">dizendo</span>
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
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {getCurrentCards().map((testimonial) => (
                  <Suspense fallback={
                  <div className="h-64 bg-gray-800 animate-pulse rounded-lg" >Loading...</div>
                  }>
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
                              loading='lazy'
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
                          <Quote className="w-8 h-8 text-[#FF6700]" />
                        </div>
                        <p className="text-gray-300 mb-4">
                          {testimonial.content}
                        </p>
                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 fill-[#FF6700] text-[#FF6700]"
                            />
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </Suspense>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Botões de navegação */}
          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 text-white bg-white/10 hover:bg-white/10"
          >
            <ChevronLeft className="text-black dark:text-gray-200 w-8 h-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 text-white bg-white/10 hover:bg-white/10"
          >
            <ChevronRight className="text-black dark:text-gray-200 w-8 h-8" />
          </Button>
        </div>

        {/* Indicadores de página */}
        <div className="flex justify-center mt-8 gap-2">
          {[...Array(testimonials.length)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "bg-[#FF6700] scale-125"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
