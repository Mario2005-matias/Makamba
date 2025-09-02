import React, { useEffect, useState, useCallback } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import MinhaImagem from "./fundo/fundo6.jpg";
import Perfil from "../../assets/profissional.jpg";
import FonterBorder from "@/components/FonteBorder";

// 🔘 Componente Button Reutilizável
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger" | "ghost";
  size?: "sm" | "md" | "lg" | "icon";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
  ...props
}) => {
  const baseStyles =
    "rounded-full font-medium focus:outline-none focus:ring transition-all duration-200 shadow-md flex items-center justify-center";

  const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-300",
    ghost: "bg-transparent text-white hover:bg-white/20 focus:ring-white/30",
  };

  const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
    icon: "w-12 h-12",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Card base
interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => (
  <div className={className}>{children}</div>
);

const CardContent: React.FC<CardProps> = ({ children, className }) => (
  <div className={className}>{children}</div>
);

//
// 📱 Hook de Media Query
//
const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
};

//
// 👤 Tipo Testimonial
//
interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

// Avatar default
const defaultAvatar = Perfil;

// Lista de depoimentos
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Filipe Fernandes",
    role: "CEO",
    company: "TechStart",
    content:
      "Excelente serviço! A equipe superou todas as nossas expectativas e entregou um produto de qualidade excepcional.",
    rating: 5,
    avatar: defaultAvatar,
  },
  {
    id: 2,
    name: "João Tavares José",
    role: "Diretor de Marketing",
    company: "Inovação Digital",
    content:
      "Trabalhar com esta equipe foi uma experiência incrível. Eles transformaram nossa visão em realidade.",
    rating: 5,
    avatar: defaultAvatar,
  },
  {
    id: 3,
    name: "Mário Matias",
    role: "Fundador",
    company: "StartupBrasil",
    content:
      "Profissionalismo e qualidade em cada detalhe. O resultado final superou todas as nossas expectativas.",
    rating: 5,
    avatar: defaultAvatar,
  },
];

//
// 📝 Card de depoimento
//
const TestimonialCard = React.memo(
  ({ testimonial }: { testimonial: Testimonial }) => {
    const [loaded, setLoaded] = useState(false);

    return (
      <Card className="bg-white/5 backdrop-blur-md border border-white/0 hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between rounded-2xl">
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
          <p className="text-gray-300 mb-4 break-words">
            {testimonial.content}
          </p>
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

//
// 🎠 Sessão de depoimentos
//
export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(min-width: 641px) and (max-width: 1024px)");

  const getVisibleCards = useCallback(() => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 3;
  }, [isMobile, isTablet]);

  const getCurrentCards = useCallback(() => {
    const visibleCards = getVisibleCards();
    const cards: Testimonial[] = [];
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

  // Auto play
  useEffect(() => {
    if (!isAutoPlaying || isDragging) return;
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, isDragging, goToNext]);

  // Swipe melhorado
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
    setIsDragging(true);
    setIsAutoPlaying(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return;
    
    const currentTouch = e.touches[0].clientX;
    setTouchEnd(currentTouch);
    
    // Calcula o offset do drag para feedback visual
    const offset = currentTouch - touchStart;
    setDragOffset(Math.max(-100, Math.min(100, offset * 0.5)));
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setIsDragging(false);
      setDragOffset(0);
      setIsAutoPlaying(true);
      return;
    }

    const distance = touchStart - touchEnd;
    const threshold = 50; // Reduzido para mais sensibilidade

    if (Math.abs(distance) > threshold) {
      if (distance > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }

    // Reset states
    setTouchStart(null);
    setTouchEnd(null);
    setIsDragging(false);
    setDragOffset(0);
    
    // Reativa autoplay após um delay
    setTimeout(() => setIsAutoPlaying(true), 1000);
  };

  // Mouse drag support para desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setTouchStart(e.clientX);
    setIsDragging(true);
    setIsAutoPlaying(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!touchStart || !isDragging) return;
    
    const currentMouse = e.clientX;
    setTouchEnd(currentMouse);
    
    const offset = currentMouse - touchStart;
    setDragOffset(Math.max(-100, Math.min(100, offset * 0.5)));
  };

  const handleMouseUp = () => {
    if (!touchStart || !touchEnd) {
      setIsDragging(false);
      setDragOffset(0);
      setIsAutoPlaying(true);
      return;
    }

    const distance = touchStart - touchEnd;
    const threshold = 50;

    if (Math.abs(distance) > threshold) {
      if (distance > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }

    setTouchStart(null);
    setTouchEnd(null);
    setIsDragging(false);
    setDragOffset(0);
    setTimeout(() => setIsAutoPlaying(true), 1000);
  };

  // Estilo do fundo
  const backgroundImageStyle = {
    backgroundImage: `url(${MinhaImagem})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#1e293b",
  };

  return (
    <section
      id="testemunhas"
      className="py-20 relative overflow-hidden select-none"
      style={backgroundImageStyle}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => {
        if (!isDragging) setIsAutoPlaying(true);
      }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-slate-900/80"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Título */}
        <div className="text-center mb-5">
          <header className="flex flex-col items-center justify-center">
            <FonterBorder>Depoimentos</FonterBorder>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              O que nossos clientes estão{" "}
              <span className="text-[#FF6700]">dizendo</span>
            </h2>
          </header>
        </div>

        {/* Carrossel */}
        <div className="relative">
          <div
            className="overflow-hidden cursor-grab active:cursor-grabbing"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{
              touchAction: 'pan-y pinch-zoom', // Permite scroll vertical mas captura horizontal
            }}
          >
            <div 
              className="flex gap-6 transition-transform duration-500 ease-in-out items-stretch"
              style={{
                transform: `translateX(${dragOffset}px)`,
                transition: isDragging ? 'none' : 'transform 0.5s ease-in-out'
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

          {/* Indicador de swipe (apenas mobile) */}
          {isMobile && !isDragging && (
            <div className="absolute bottom-4 left-1/1 transform -translate-x-1/2 text-white/60 text-sm animate-pulse">
              ← Deslize para navegar →
            </div>
          )}

          {/* Botões de navegação */}
          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-[#FF6700]/90 hover:text-white active:scale-95 z-10"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-7 h-7" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-[#FF6700]/90 hover:text-white active:scale-95 z-10"
            aria-label="Próximo"
          >
            <ChevronRight className="w-7 h-7" />
          </Button>
        </div>

        {/* Indicadores de posição */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentIndex(idx);
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(true), 2000);
              }}
              title={`Ir para depoimento ${idx + 1}`}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "bg-[#FF6700] scale-125"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Instruções de uso (apenas visível em dispositivos touch) */}
        <div className="text-center mt-4 md:hidden">
          <p className="text-white/50 text-sm">
            Deslize horizontalmente para ver mais depoimentos
          </p>
        </div>
      </div>
    </section>
  );
}