import Header from "./components/Header"
import Main from "./layout/section-main/Main"
import { ThemeProvider } from "./components/theme-provider"
import WhyChosse from "./layout/why-choose/why-choose"
import Testimonials from './layout/section-depoimento/components/testimonials-masonry'
import FqaSection from './layout/perguntas-frequentes/section-fqa'

export default function App() {

  return (
    <ThemeProvider defaultTheme="system" storageKey="makamba-theme">
      <Header/>
      <Main/>
      <WhyChosse/>
      <Testimonials/>
      <FqaSection/>
    </ThemeProvider>
  )
}
