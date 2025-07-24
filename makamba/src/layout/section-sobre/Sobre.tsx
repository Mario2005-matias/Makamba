import "./style/index.css";
import { ArrowUpRight } from "lucide-react"

export default function Sobre() {
  return (
    <div className="sobre container " id="sobre">
      <div className="content">
        <div className="card">
          <div className="title">
            <h2>Sobre Nós</h2>
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
