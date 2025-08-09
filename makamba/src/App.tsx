import { useEffect, Suspense, lazy } from "react";
import Header from "./components/Header";
import Main from "./layout/section-main/Main";
import Sobre from "./layout/section-sobre/Sobre";
import { ThemeProvider } from "./components/theme-provider";
import WhyChoose from "./layout/why-choose/why-choose"; // Corrigido nome
import FqaSection from "./layout/perguntas-frequentes/section-fqa";
import Cta from "./layout/cta/cta";
import Footer from "./layout/footer/footer";
import { ServiceCarousel } from "./layout/section-services/ServiceCarousel";
import ContactForm from "./layout/section-contact/ContactForm";
// Carregamento assíncrono dos depoimentos
const TestimonialsSection = lazy(() =>
  import("./layout/section-depoimento/TestimonialsSection") 
);
// Componente Splash Cursor com efeitos
const SplashCursor = () => {
  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    const timeouts: number[] = [];

    const cursor = document.createElement("div");
    cursor.className = "splash-cursor";
    cursor.style.cssText = `
      position: fixed;
      width: 20px;
      height: 20px;
      background: radial-gradient(circle, #FF6700, transparent);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      mix-blend-mode: multiply;
      transition: transform 0.1s ease;
      opacity: 0.6;
    `;
    document.body.appendChild(cursor);

    const trail = document.createElement("div");
    trail.className = "cursor-trail";
    trail.style.cssText = `
      position: fixed;
      width: 40px;
      height: 40px;
      border: 2px solid #FF6700;
      border-radius: 50%;
      pointer-events: none;
      z-index: 9998;
      transition: all 0.15s ease;
      opacity: 0.3;
    `;
    document.body.appendChild(trail);

    const style = document.createElement("style");
    style.textContent = `
      @keyframes splashAnimation {
        0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
        50% { transform: translate(-50%, -50%) scale(1.5); opacity: 0.7; }
        100% { transform: translate(-50%, -50%) scale(3); opacity: 0; }
      }

      @keyframes ripple {
        0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(4); opacity: 0; }
      }

      .splash-cursor.clicking {
        transform: scale(1.5);
        background: radial-gradient(circle, #FF6700, #FF8C42, transparent);
      }

      body, *, a, button, [role="button"] {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    const createSplash = (x: number, y: number, intensity = 1) => {
      const splash = document.createElement("div");
      splash.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: ${10 * intensity}px;
        height: ${10 * intensity}px;
        background: radial-gradient(circle, #FF6700, #FF8C42, transparent);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9997;
        animation: splashAnimation 0.8s ease-out forwards;
        transform: translate(-50%, -50%);
      `;
      document.body.appendChild(splash);
      const timeout = window.setTimeout(() => splash.remove(), 800);
      timeouts.push(timeout);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = `${mouseX - 10}px`;
      cursor.style.top = `${mouseY - 10}px`;
      trail.style.left = `${mouseX - 20}px`;
      trail.style.top = `${mouseY - 20}px`;

      if (Math.random() > 0.95) createSplash(mouseX, mouseY, 0.5);
    };

    const handleMouseDown = () => {
      cursor.classList.add("clicking");
      createSplash(mouseX, mouseY, 2);

      const ripple = document.createElement("div");
      ripple.style.cssText = `
        position: fixed;
        left: ${mouseX}px;
        top: ${mouseY}px;
        width: 4px;
        height: 4px;
        border: 2px solid #FF6700;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9996;
        animation: ripple 0.6s ease-out forwards;
        transform: translate(-50%, -50%);
      `;
      document.body.appendChild(ripple);
      const timeout = window.setTimeout(() => ripple.remove(), 600);
      timeouts.push(timeout);
    };

    const handleMouseUp = () => {
      cursor.classList.remove("clicking");
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches("a, button, [role='button']")) {
        cursor.style.transform = "scale(1.5)";
        trail.style.transform = "scale(1.2)";
        trail.style.borderColor = "#FF8C42";
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches("a, button, [role='button']")) {
        cursor.style.transform = "scale(1)";
        trail.style.transform = "scale(1)";
        trail.style.borderColor = "#FF6700";
      }
    };

    // Eventos
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);

      cursor.remove();
      trail.remove();
      style.remove();

      timeouts.forEach(clearTimeout);
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

      <WhyChoose />

      <section className="w-full">
        <Suspense fallback={<div className="text-center py-10 text-white">Carregando depoimentos...</div>}>
          <TestimonialsSection />
        </Suspense>
      </section>

      <FqaSection />

      <section className="w-full">
        <ContactForm />
      </section><br />

      <Cta />
      <Footer />
      </ThemeProvider>
    )};
