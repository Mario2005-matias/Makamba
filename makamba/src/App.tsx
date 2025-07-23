import Header from "./components/Header"
import Main from "./layout/section-main/Main"
import { ThemeProvider } from "./components/theme-provider"
import WhyChosse from "./layout/why-choose/why-choose"
import Testimonials from './layout/section-depoimento/components/testimonials-masonry'
import FqaSection from './layout/perguntas-frequentes/section-fqa'
import Cta from './layout/cta/cta'
import Footer from "./layout/footer/footer"

export default function App() {

  return (
    <ThemeProvider defaultTheme="system" storageKey="makamba-theme">
      <Header/>
      <Main/>
      <WhyChosse/>
      <Testimonials/>
      <FqaSection/>
      <Cta/>
      <Footer/>
    </ThemeProvider>
  )
}
