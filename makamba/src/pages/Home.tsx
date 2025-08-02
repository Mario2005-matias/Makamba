import Header from "../components/Header";
import Main from "../layout/section-main/Main";
import { ThemeProvider } from "../components/theme-provider";
import WhyChosse from "../layout/why-choose/why-choose";
import FqaSection from "../layout/perguntas-frequentes/section-fqa";
import Cta from "../layout/cta/cta";
import Footer from "../layout/footer/footer";
import { Suspense, lazy } from "react";
import Sobre from "../layout/section-sobre/Sobre";
import { ServiceCarousel } from "../layout/section-services/ServiceCarousel";
import FonterBorder from "../components/FonteBorder"
import { FloatingWhatsApp } from 'react-floating-whatsapp'

// Lazy load do componente Testimonials
const Testimonials = lazy(
  () => import("../layout/section-depoimento/testimonials-section")
);

export default function Home() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="makamba-theme">
      <Header />
      <FloatingWhatsApp
      phoneNumber="244946513242" 
      accountName="Makamba Suporte"
      avatar="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" // URL de avatar opcional
      statusMessage="Online"
      chatMessage="Olá! Como posso ajudar?"
      placeholder="Digite sua mensagem..."
      allowClickAway
      notification
      notificationSound
    />
      <Main />
      <section className="w-full flex items-center justify-center">
        <Sobre />
      </section>
      <section className="flex flex-col items-center justify-center mt-10">
        <header className='flex flex-col items-center '>
         <FonterBorder>Serviços_</FonterBorder>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6">
           Todos os serviços da <span className='text-[#FF6700]'>Makamba</span>
          </h2>
        </header>
        <ServiceCarousel />
      </section>
      <WhyChosse />

      <section className="w-full">
        <Suspense
          fallback={
            <div className="text-center py-10">Carregando depoimentos...</div>
          }
        >
          <Testimonials />
        </Suspense>
      </section>

      <FqaSection />
      <Cta />
      <Footer />
    </ThemeProvider>
  );
}
