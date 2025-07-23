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

// Lazy load do componente Testimonials
const Testimonials = lazy(
  () => import("./layout/section-depoimento/components/testimonials-masonry")
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
        <header className='flex flex-col items-center '>
          <p className="border text-black border-black px-3 py-1.5 rounded-lg text-xs font-medium tracking-wide mb-4">
            Serviços
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6">
           Todos os serviços da <span className='text-[#FF6700]'>Makamba</span>
          </h2>
        </header>
        <ServiceCarousel />
      </section>
      <WhyChosse />

      <Suspense
        fallback={
          <div className="text-center py-10">Carregando depoimentos...</div>
        }
      >
        <Testimonials />
      </Suspense>

      <FqaSection />
      <Cta />
      <Footer />
    </ThemeProvider>
  );
}
