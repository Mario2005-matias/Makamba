import Header from "./components/Header"
import Main from "./layout/section-main/Main"
import { ThemeProvider } from "./components/theme-provider"
import WhyChosse from "./layout/why-choose/why-choose"
import FqaSection from './layout/perguntas-frequentes/section-fqa'
import Cta from './layout/cta/cta'
import Footer from "./layout/footer/footer"
import { Suspense, lazy } from "react"
import Sobre from "./layout/section-sobre/Sobre"
import Services from "./layout/section-services/Services"

// Lazy load do componente Testimonials
const Testimonials = lazy(() => import('./layout/section-depoimento/components/testimonials-masonry'))

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="makamba-theme">
      <Header />
      <Main />
      <Sobre/>
      <Services/>
      <WhyChosse />
      
      <Suspense fallback={<div className="text-center py-10">Carregando depoimentos...</div>}>
        <Testimonials />
      </Suspense>

      <FqaSection />
      <Cta />
      <Footer />
    </ThemeProvider>
  )
}
