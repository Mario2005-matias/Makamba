import React, { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

import WomanChef from "../../../assets/Woman-Chefe-Cooking.jpg";
import { useMediaQuery } from "../../../hooks/use-media-query";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
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
    // color removido
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
    // color removido
  },
  {
    id: 3,
    name: "Mário Matias",
    role: "Fundador",
    company: "StartupBrasil",
    content:
      "Profissionalismo e qualidade em cada detalhe. O resultado final superou todas as nossas expectativas.",
    rating: 5,
    avatar: WomanChef,
    // color removido
  },
];

// 🔹 Card com Skeleton enquanto imagem carrega
const TestimonialCard = React.memo(
  ({ testimonial }: { testimonial: Testimonial }) => {
    const [loaded, setLoaded] = React.useState(false);

    return (
      <Card className="bg-white/10 backdrop-blur-xl border border-white/20 hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between">
        <CardContent className="p-6 flex flex-col h-full justify-between">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-700 animate-pulse overflow-hidden">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  loading="lazy"
                  onLoad={() => setLoaded(true)}
                  className={`w-12 h-12 rounded-full object-cover transition-opacity duration-500 ${
                    loaded ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
              <div>
                <h3 className="font-semibold text-white">{testimonial.name}</h3>
                <p className="text-sm text-gray-300">{testimonial.role}</p>
              </div>
            </div>
            <Quote className="w-8 h-8 text-[#FF6700]" />
          </div>
          <div className="flex-1">
            <p className="text-gray-300 mb-4 break-words">
              {testimonial.content}
            </p>
          </div>
          <div className="flex gap-1 mt-2">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#FF6700] text-[#FF6700]" />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }
);

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(min-width: 641px) and (max-width: 1024px)");

  const getVisibleCards = useCallback(() => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 3;
  }, [isMobile, isTablet]);

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

  // 🔹 Auto play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, goToNext]);

  // 🔹 Swipe
  const handleTouchStart = (e: React.TouchEvent) =>
    setTouchStart(e.touches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) =>
    setTouchEnd(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (Math.abs(distance) > 75) {
      if (distance > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section
      id="Testemunhas"
      className="py-20 bg-slate-900"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="inline-block border border-orange-400 text-white px-4 py-1 rounded-lg text-sm md:text-base mb-4">
            Depoimento
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            O que nossos clientes estão{" "}
            <span className="text-[#FF6700]">dizendo</span>
          </h2>
        </div>

        {/* 🔹 Carrossel */}
        <div className="relative">
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out items-stretch"
              style={{
                width: "100%",
                overflow: "visible",
              }}
            >
              {getCurrentCards().map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full max-w-[420px] flex flex-col h-full"
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Botões */}
          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-[#FF6700]/90 hover:text-white rounded-full transition-all duration-200 transform hover:scale-110 active:scale-95 shadow-lg focus:ring-2 focus:ring-[#FF6700]"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-[#FF6700]/90 hover:text-white rounded-full transition-all duration-200 transform hover:scale-110 active:scale-95 shadow-lg focus:ring-2 focus:ring-[#FF6700]"
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              title={`Ir para depoimento ${idx + 1}`}
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
