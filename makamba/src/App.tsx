import Header from "./components/Header";
import Main from "./layout/section-main/Main";
import { ThemeProvider } from "./components/theme-provider";
import WhyChosse from "./layout/why-choose/why-choose";
import FqaSection from "./layout/perguntas-frequentes/section-fqa";
import Cta from "./layout/cta/cta";
import Footer from "./layout/footer/footer";
import { Suspense, lazy } from "react";
import Sobre from "./layout/section-sobre/Sobre";
import { ServiceCarousel } from "./layout/section-services/ServiceCarousel";
import ContactForm from "./layout/section-contact/ContactForm"; // ✅ já está correto

// Carregamento assíncrono dos depoimentos
const TestimonialsSection = lazy(
  () => import("./layout/section-depoimento/components/testimonials-section")
);

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="makamba-theme">
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
            <div className="text-center py-10 text-white">Carregando depoimentos...</div>
          }
        >
          <TestimonialsSection />
        </Suspense>
      </section>

      <FqaSection />

      {/* ✅ Bloco de contato com fundo já definido no componente */}
      <section className="w-full">
        <ContactForm />
      </section><br />

      <Cta />
      <Footer />
    </ThemeProvider>
  );
}
