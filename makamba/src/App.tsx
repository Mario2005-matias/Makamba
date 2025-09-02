import Header from "./components/Header";
import Main from "./layout/section-main/Main";
import { ThemeProvider } from "./components/theme-provider";
import WhyChosse from "./layout/why-choose/why-choose";
import FqaSection from "./layout/perguntas-frequentes/section-fqa";
import Cta from "./layout/cta/cta";
import Footer from "./layout/footer/footer";
import { Suspense, lazy, useEffect } from "react";
import Sobre from "./layout/section-sobre/Sobre";
import { ServiceCarousel } from "./layout/section-services/ServiceCarousel";
import ContactForm from "./layout/section-contact/ContactForm";

// ✅ já está correto
// Carregamento assíncrono dos depoimentos
const TestimonialsSection = lazy(
  () => import("./layout/section-depoimento/components/testimonials-section")
);

// Componente Splash Cursor
const SplashCursor = () => {
  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let isClicking = false;
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
    const isDesktop = window.innerWidth > 1024;

    // Diferentes configurações para cada dispositivo
    const config = {
      mobile: {
        cursorSize: 30,
        trailSize: 60,
        splashIntensity: 3,
        colors: ["#FF6700", "#FF8C42", "#FFB366"],
        effects: "pulse",
      },
      tablet: {
        cursorSize: 25,
        trailSize: 50,
        splashIntensity: 2,
        colors: ["#FF6700", "#FF8C42"],
        effects: "wave",
      },
      desktop: {
        cursorSize: 20,
        trailSize: 40,
        splashIntensity: 1,
        colors: ["#FF6700"],
        effects: "classic",
      },
    };

    const currentConfig = isMobile
      ? config.mobile
      : isTablet
      ? config.tablet
      : config.desktop;

    // Criar o elemento do cursor adaptativo
    const cursor = document.createElement("div");
    cursor.className = "splash-cursor";
    cursor.style.cssText = `
      position: fixed;
      width: ${currentConfig.cursorSize}px;
      height: ${currentConfig.cursorSize}px;
      background: ${
        isMobile
          ? "radial-gradient(circle, #FF6700, #FF8C42, #FFB366, transparent)"
          : isTablet
          ? "radial-gradient(circle, #FF6700, #FF8C42, transparent)"
          : "radial-gradient(circle, #FF6700, transparent)"
      };
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      mix-blend-mode: ${
        isMobile ? "screen" : isTablet ? "overlay" : "multiply"
      };
      transition: transform 0.1s ease;
      opacity: ${isMobile ? "0.8" : isTablet ? "0.7" : "0.6"};
      ${isMobile ? "box-shadow: 0 0 20px #FF6700;" : ""}
    `;
    document.body.appendChild(cursor);

    // Criar o elemento do trail adaptativo
    const trail = document.createElement("div");
    trail.className = "cursor-trail";
    trail.style.cssText = `
      position: fixed;
      width: ${currentConfig.trailSize}px;
      height: ${currentConfig.trailSize}px;
      ${
        isMobile
          ? "background: radial-gradient(circle, transparent, #FF6700, transparent); border: none;"
          : isTablet
          ? "border: 3px solid #FF6700; background: rgba(255, 103, 0, 0.1);"
          : "border: 2px solid #FF6700; background: transparent;"
      }
      border-radius: 50%;
      pointer-events: none;
      z-index: 9998;
      transition: all 0.15s ease;
      opacity: ${isMobile ? "0.6" : isTablet ? "0.4" : "0.3"};
    `;
    document.body.appendChild(trail);

    // Função para criar splash effect adaptativo
    const createSplash = (x, y, intensity = 1) => {
      const splash = document.createElement("div");
      const finalIntensity = intensity * currentConfig.splashIntensity;

      if (isMobile) {
        // Efeito pulsante para mobile
        splash.style.cssText = `
          position: fixed;
          left: ${x}px;
          top: ${y}px;
          width: ${15 * finalIntensity}px;
          height: ${15 * finalIntensity}px;
          background: radial-gradient(circle, #FF6700, #FF8C42, #FFB366, transparent);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9997;
          animation: mobileSplashAnimation 1.2s ease-out forwards;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 30px #FF6700;
        `;
      } else if (isTablet) {
        // Efeito de onda para tablet
        splash.style.cssText = `
          position: fixed;
          left: ${x}px;
          top: ${y}px;
          width: ${12 * finalIntensity}px;
          height: ${12 * finalIntensity}px;
          background: conic-gradient(#FF6700, #FF8C42, #FF6700);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9997;
          animation: tabletSplashAnimation 1s ease-out forwards;
          transform: translate(-50%, -50%);
        `;
      } else {
        // Efeito clássico para desktop
        splash.style.cssText = `
          position: fixed;
          left: ${x}px;
          top: ${y}px;
          width: ${10 * finalIntensity}px;
          height: ${10 * finalIntensity}px;
          background: radial-gradient(circle, #FF6700, #FF8C42, transparent);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9997;
          animation: splashAnimation 0.8s ease-out forwards;
          transform: translate(-50%, -50%);
        `;
      }

      document.body.appendChild(splash);

      setTimeout(
        () => {
          if (splash.parentNode) {
            splash.parentNode.removeChild(splash);
          }
        },
        isMobile ? 1200 : isTablet ? 1000 : 800
      );
    };

    // Adicionar estilos CSS para animações adaptativas
    const style = document.createElement("style");
    style.textContent = `
      @keyframes splashAnimation {
        0% {
          transform: translate(-50%, -50%) scale(0);
          opacity: 1;
        }
        50% {
          transform: translate(-50%, -50%) scale(1.5);
          opacity: 0.7;
        }
        100% {
          transform: translate(-50%, -50%) scale(3);
          opacity: 0;
        }
      }

      @keyframes mobileSplashAnimation {
        0% {
          transform: translate(-50%, -50%) scale(0) rotate(0deg);
          opacity: 1;
        }
        25% {
          transform: translate(-50%, -50%) scale(1) rotate(90deg);
          opacity: 0.9;
        }
        50% {
          transform: translate(-50%, -50%) scale(2) rotate(180deg);
          opacity: 0.6;
        }
        75% {
          transform: translate(-50%, -50%) scale(3.5) rotate(270deg);
          opacity: 0.3;
        }
        100% {
          transform: translate(-50%, -50%) scale(5) rotate(360deg);
          opacity: 0;
        }
      }

      @keyframes tabletSplashAnimation {
        0% {
          transform: translate(-50%, -50%) scale(0) rotate(0deg);
          opacity: 1;
        }
        30% {
          transform: translate(-50%, -50%) scale(1.2) rotate(120deg);
          opacity: 0.8;
        }
        60% {
          transform: translate(-50%, -50%) scale(2.5) rotate(240deg);
          opacity: 0.4;
        }
        100% {
          transform: translate(-50%, -50%) scale(4) rotate(360deg);
          opacity: 0;
        }
      }

      @keyframes ripple {
        0% {
          transform: translate(-50%, -50%) scale(0);
          opacity: 1;
        }
        100% {
          transform: translate(-50%, -50%) scale(4);
          opacity: 0;
        }
      }

      @keyframes mobileRipple {
        0% {
          transform: translate(-50%, -50%) scale(0);
          opacity: 1;
          border-width: 4px;
        }
        50% {
          transform: translate(-50%, -50%) scale(3);
          opacity: 0.6;
          border-width: 2px;
        }
        100% {
          transform: translate(-50%, -50%) scale(6);
          opacity: 0;
          border-width: 1px;
        }
      }

      @keyframes tabletRipple {
        0% {
          transform: translate(-50%, -50%) scale(0);
          opacity: 1;
          border-width: 3px;
        }
        100% {
          transform: translate(-50%, -50%) scale(5);
          opacity: 0;
          border-width: 1px;
        }
      }

      .splash-cursor.clicking {
        transform: ${
          isMobile ? "scale(2)" : isTablet ? "scale(1.8)" : "scale(1.5)"
        };
        background: ${
          isMobile
            ? "radial-gradient(circle, #FFB366, #FF8C42, #FF6700, transparent)"
            : isTablet
            ? "radial-gradient(circle, #FF8C42, #FF6700, transparent)"
            : "radial-gradient(circle, #FF6700, #FF8C42, transparent)"
        };
      }

      ${
        isDesktop
          ? `
        body {
          cursor: none;
        }
        * {
          cursor: none !important;
        }
        a, button, [role="button"] {
          cursor: none !important;
        }
      `
          : ""
      }

      ${
        isMobile
          ? `
        @media (max-width: 768px) {
          .splash-cursor {
            animation: mobilePulse 2s ease-in-out infinite;
          }
        }
        @keyframes mobilePulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; transform: scale(1.1); }
        }
      `
          : ""
      }

      ${
        isTablet
          ? `
        @media (min-width: 769px) and (max-width: 1024px) {
          .cursor-trail {
            animation: tabletGlow 3s ease-in-out infinite;
          }
        }
        @keyframes tabletGlow {
          0%, 100% { box-shadow: 0 0 10px #FF6700; }
          50% { box-shadow: 0 0 25px #FF6700, 0 0 35px #FF8C42; }
        }
      `
          : ""
      }
    `;
    document.head.appendChild(style);

    // Event listeners adaptativos
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursor.style.left = `${mouseX - currentConfig.cursorSize / 2}px`;
      cursor.style.top = `${mouseY - currentConfig.cursorSize / 2}px`;

      trail.style.left = `${mouseX - currentConfig.trailSize / 2}px`;
      trail.style.top = `${mouseY - currentConfig.trailSize / 2}px`;

      // Criar mini splashes durante movimento com frequência adaptativa
      const randomThreshold = isMobile ? 0.92 : isTablet ? 0.94 : 0.95;
      if (Math.random() > randomThreshold) {
        createSplash(mouseX, mouseY, 0.5);
      }
    };

    const handleMouseDown = (e) => {
      isClicking = true;
      cursor.classList.add("clicking");

      // Criar splash maior no clique com intensidade adaptativa
      const clickIntensity = isMobile ? 3 : isTablet ? 2.5 : 2;
      createSplash(mouseX, mouseY, clickIntensity);

      // Criar ripple effect adaptativo
      const ripple = document.createElement("div");
      const rippleAnimation = isMobile
        ? "mobileRipple"
        : isTablet
        ? "tabletRipple"
        : "ripple";
      const rippleDuration = isMobile ? "1s" : isTablet ? "0.8s" : "0.6s";

      ripple.style.cssText = `
        position: fixed;
        left: ${mouseX}px;
        top: ${mouseY}px;
        width: 4px;
        height: 4px;
        border: ${isMobile ? "4px" : isTablet ? "3px" : "2px"} solid #FF6700;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9996;
        animation: ${rippleAnimation} ${rippleDuration} ease-out forwards;
        transform: translate(-50%, -50%);
      `;

      document.body.appendChild(ripple);

      const timeoutDuration = isMobile ? 1000 : isTablet ? 800 : 600;
      setTimeout(() => {
        if (ripple.parentNode) {
          ripple.parentNode.removeChild(ripple);
        }
      }, timeoutDuration);
    };

    const handleMouseUp = () => {
      isClicking = false;
      cursor.classList.remove("clicking");
    };

    const handleMouseEnter = (e) => {
      if (e.target.matches('a, button, [role="button"]')) {
        const hoverScale = isMobile ? "2.5" : isTablet ? "2" : "1.5";
        const trailScale = isMobile ? "1.5" : isTablet ? "1.3" : "1.2";
        cursor.style.transform = `scale(${hoverScale})`;
        trail.style.transform = `scale(${trailScale})`;
        trail.style.borderColor = "#FF8C42";

        if (isMobile) {
          trail.style.background =
            "radial-gradient(circle, rgba(255, 140, 66, 0.3), #FF6700, transparent)";
        }
      }
    };

    const handleMouseLeave = (e) => {
      if (e.target.matches('a, button, [role="button"]')) {
        cursor.style.transform = "scale(1)";
        trail.style.transform = "scale(1)";
        trail.style.borderColor = "#FF6700";

        if (isMobile) {
          trail.style.background =
            "radial-gradient(circle, transparent, #FF6700, transparent)";
        }
      }
    };

    // Touch events para dispositivos móveis
    const handleTouchStart = (e) => {
      if (isMobile || isTablet) {
        const touch = e.touches[0];
        mouseX = touch.clientX;
        mouseY = touch.clientY;

        cursor.style.left = `${mouseX - currentConfig.cursorSize / 2}px`;
        cursor.style.top = `${mouseY - currentConfig.cursorSize / 2}px`;
        cursor.style.display = "block";

        trail.style.left = `${mouseX - currentConfig.trailSize / 2}px`;
        trail.style.top = `${mouseY - currentConfig.trailSize / 2}px`;
        trail.style.display = "block";

        createSplash(mouseX, mouseY, isMobile ? 2.5 : 2);
      }
    };

    const handleTouchMove = (e) => {
      if (isMobile || isTablet) {
        e.preventDefault();
        const touch = e.touches[0];
        mouseX = touch.clientX;
        mouseY = touch.clientY;

        cursor.style.left = `${mouseX - currentConfig.cursorSize / 2}px`;
        cursor.style.top = `${mouseY - currentConfig.cursorSize / 2}px`;

        trail.style.left = `${mouseX - currentConfig.trailSize / 2}px`;
        trail.style.top = `${mouseY - currentConfig.trailSize / 2}px`;

        if (Math.random() > 0.9) {
          createSplash(mouseX, mouseY, 0.7);
        }
      }
    };

    const handleTouchEnd = () => {
      if (isMobile || isTablet) {
        setTimeout(() => {
          cursor.style.display = "none";
          trail.style.display = "none";
        }, 500);
      }
    };

    // Adicionar event listeners adaptativos
    if (isDesktop) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mousedown", handleMouseDown);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("mouseenter", handleMouseEnter, true);
      document.addEventListener("mouseleave", handleMouseLeave, true);
    } else {
      // Para mobile e tablet, usar touch events
      document.addEventListener("touchstart", handleTouchStart, {
        passive: false,
      });
      document.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
      document.addEventListener("touchend", handleTouchEnd);

      // Inicialmente esconder o cursor em dispositivos touch
      cursor.style.display = "none";
      trail.style.display = "none";
    }

    // Limpeza adaptativa
    return () => {
      if (isDesktop) {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mousedown", handleMouseDown);
        document.removeEventListener("mouseup", handleMouseUp);
        document.removeEventListener("mouseenter", handleMouseEnter, true);
        document.removeEventListener("mouseleave", handleMouseLeave, true);
      } else {
        document.removeEventListener("touchstart", handleTouchStart);
        document.removeEventListener("touchmove", handleTouchMove);
        document.removeEventListener("touchend", handleTouchEnd);
      }

      if (cursor.parentNode) cursor.parentNode.removeChild(cursor);
      if (trail.parentNode) trail.parentNode.removeChild(trail);
      if (style.parentNode) style.parentNode.removeChild(style);
    };
  }, []);

  return null;
};

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="makamba-theme">
      <SplashCursor />
      <Header />

      <Main />

      <section className="w-full flex items-center justify-center">
        <Sobre />
      </section>

      <section className="flex flex-col items-center justify-center mt-10">
        <header className="flex flex-col items-center">
          <p className="border text-black border-black px-3 py-1.5 rounded-lg text-xs font-medium tracking-wide mb-4">
            Serviços_
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6">
            Todos os serviços da <span className="text-[#FF6700]">Makamba</span>
          </h2>
        </header>
        <ServiceCarousel />
      </section>

      <WhyChosse />

      <section className="w-full">
        <Suspense
          fallback={
            <div className="text-center py-10 text-white">
              Carregando depoimentos...
            </div>
          }
        >
          <TestimonialsSection />
        </Suspense>
      </section>

      <FqaSection />

      {/* ✅ Bloco de contato com fundo já definido no componente */}
      <section className="w-full">
        <ContactForm />
      </section>
      <br />

      <Cta />
      <Footer />
    </ThemeProvider>
  );
}
