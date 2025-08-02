
import Header from '../components/Header';
import Historia from '../components/sobre/Historia'
import Missao from "../components/sobre/Missao";
import Team from '../components/sobre/Team'
import { ThemeProvider } from "../components/theme-provider";
import { ServiceCarousel } from "../layout/section-services/ServiceCarousel";
import Footer from "../layout/footer/footer";

function App() {
  return (
     <ThemeProvider defaultTheme="system" storageKey="makamba-theme">
    <div className="bg-white text-gray-900 dark:bg-black dark:text-white">
      <Header />

      <main className=" w-full">
        <Missao/>
          <ServiceCarousel />
          <h1 className='text-center text-2xl mt-10'>Conheça os membros da nossa <span className='text-[#FF6700]'>Equipe</span></h1>
          <Team />
        <h1 className='text-center text-2xl mt-10 p-10'>História e criação da <span className='text-[#FF6700]'>Makamba Tec</span></h1>

          <Historia />
      </main>
    </div>
       <Footer />
    </ThemeProvider>
  )
}

export default App
