import React from "react";
import Header from "../components/Header";
import Main from "../layout/section-main/Main";
import { ThemeProvider } from "../components/theme-provider";
import WhyChosse from "../layout/why-choose/why-choose";
import FqaSection from "../layout/perguntas-frequentes/section-fqa";
import Cta from "../layout/cta/cta";
import Footer from "../layout/footer/footer";
import Sobre from "../layout/section-sobre/Sobre";
import { ServiceCarousel } from "../layout/section-services/ServiceCarousel";
import FonterBorder from "../components/FonteBorder"
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { Suspense } from "react";
const Testimonials = React.lazy(() => import("../layout/section-depoimento/testimonials-section"))

export default function Home() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="makamba-theme">
      <Header />
      <FloatingWhatsApp
      phoneNumber="244946513242" 
      accountName="Makamba Suporte"
      avatar="../../src/assets/imagem1.jpg" 
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

      <Suspense fallback={<p>Carregando...</p>}>
        <Testimonials />
      </Suspense>

      {/* <section className="w-full">
        
      </section> */}

      <FqaSection />
      <Cta />
      <Footer />
    </ThemeProvider>
  );
}
