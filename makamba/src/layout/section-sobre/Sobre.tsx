import "./style/index.css";
import { ArrowUpRight } from "lucide-react"

export default function Sobre() {
  return (
    <div className="sobre container my-15 max-md:my-10 m-8 dark:bg-black dark:text-white dark:rounded-2xl" id="sobre">
      <div className="bg-[#eee7e7] p-6 dark:bg-black rounded-2xl">
        <div className="">
          <div className="w-35 h-8 text-[#FF6700] text-2xl font-bold">
            <h2 className="">Sobre Nós</h2>
          </div>

          <p className="text-xl m-4 text-[clamp(1rem,1.5vw,1.25rem)]">Na <span className='font-bold text-[#FF6700]'>MAKAMBA</span>, desenvolvemos soluções digitais inteligentes para empresas e profissionais que desejam crescer com segurança, eficiência e inovação. Com uma equipe apaixonada por tecnologia, oferecemos serviços como desenvolvimento de sites, manutenção de sistemas, redes e suporte técnico, sempre com foco em qualidade, transparência e resultados reais. Mais do que prestadores de serviço, somos parceiros estratégicos na jornada digital dos nossos clientes.</p>

          <div className="button-float-card">
            <div className="button_float">
              <ArrowUpRight/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
