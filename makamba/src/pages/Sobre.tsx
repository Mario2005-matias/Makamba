import Header from '../components/Header';
import Section from '../components/sobre/Section'
import TeamCard from '../components/sobre/TeamCard'
import PartnerCard from '../components/sobre/PartnerCard'
import Missao from "../components/sobre/Missao";
import { ThemeProvider } from "../components/theme-provider";
import { ServiceCarousel } from "../layout/section-services/ServiceCarousel";

function App() {
  return (
     <ThemeProvider defaultTheme="system" storageKey="makamba-theme">
    <div className="bg-white text-gray-900 dark:bg-black dark:text-white">
      <Header />

      <main className=" w-full">
        <Missao/>
          <ServiceCarousel />
        <Section id="visao" title="Visão" content="Ser referência nacional no nosso setor até 2030." />
        <Section id="valores" title="Valores" content="Ética • Inovação • Transparência • Colaboração" />

        <Section id="historia" title="História" content="Fundada em 2001, nossa empresa começou com..." />

        <Section id="equipe" title="Equipe"/>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            <TeamCard name="Filipe Fernandes" role="CEO" imgSrc="/equipe/Filipe.jpg" />
            <TeamCard name="Mário Matias" role="CTO" imgSrc="/equipe/Mario.jpg" />
             <TeamCard name="João Tavares José" role="CTO" imgSrc="/equipe/Joao.jpg" />
          </div>

        <Section id="parcerias" title="Certificações e Parcerias"/>
          <div className="flex flex-wrap gap-4">
            <PartnerCard name="ISO 9001" imgSrc="/certificacoes/iso9001.png" />
            <PartnerCard name="Parceiro TechCorp" imgSrc="/certificacoes/techcorp.png" />
          </div>

      </main>
    </div>
    </ThemeProvider>
  )
}

export default App
