import { Button } from "@/components/ui/button";
import FonterBorder from "@/components/FonteBorder";
import Card from "./components/Card";
import { Target, Eye, Gem, Flag } from "lucide-react";

export default function Sobre() {
  const DadosSobre = [
    {
      id:1, 
      title: "Nossos Objectivos", 
      description: "Oferecer estratégias de marketing, design e soluções tecnológicas que traduzam a identidade cultural dos nossos clientes em experiências autênticas, digitais e impactantes. Buscamos fortalecer marcas africanas, valorizando suas histórias, conectando-as com o mundo por meio da inovação.", 
      icon: <Flag/>
    },
    {
      id:2, 
      title: "Nossa Missão", 
      description: "Promover transformação digital com identidade, conectando cultura africana, inovação tecnológica e estratégias de marketing para fortalecer marcas, empreendedores e instituições que acreditam na força da autenticidade e da inovação humanizada.", 
      icon: <Target/>
    },
    {
      id:3, 
      title: "Nossa Visão", 
      description: "Ser reconhecida como referência africana em marketing cultural e tecnologia criativa, contribuindo para uma nova geração de negócios, conteúdos e marcas que respeitam a cultura e caminham rumo à inovação sustentável.", 
      icon: <Eye/>
    },
    {
      id:4, 
      title: "Nossos Valores", 
      description: "Valorizamos nossas raízes, símbolos e histórias, pois acreditamos na força da identidade e da representatividade. Usamos a tecnologia com propósito, criando soluções de impacto real. Acolhemos diferentes visões com empatia e respeito, promovendo a diversidade.", 
      icon: <Gem/>
    },
  ]

  const HandleServicos = () => {
    console.log("serviços")
  }

  const HandleSobre= () => {
    console.log("sobre")
  }

  return (
    <div className="sobre container my-15 max-md:my-10 m-8 dark:text-white">
      <header className="mb-8 flex flex-col items-center justify-center">
        <FonterBorder>Sobre nós</FonterBorder>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 text-center">Quem nós somos?</h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className="">
          <h3 className="text-4xl font-medium text-gray-900 mb-2 max-sm:text-3xl dark:text-white">Building careers, Strengthening Businesses</h3>
          <p className="text-gray-800 dark:text-gray-200">Somos a Makamba Tec, uma agência que une a potência da tecnologia com a essência da cultura africana, criando soluções de marketing inovadoras, autênticas e conectadas às raízes. Atuamos para transformar ideias em experiências marcantes, respeitando as identidades culturais e promovendo o desenvolvimento digital com alma africana.</p>
          <div className='flex gap-4 my-4'>
            <Button onClick={HandleServicos}>Explorar serviços</Button>
            <Button onClick={HandleSobre} variant={'outline'}>Saber mais</Button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {DadosSobre.map((item) => (
            <Card key={item.id} id={item.id} title={item.title} description={item.description} icon={item.icon}  />
          ))}
        </div>
      </div>
    </div>
  );
}
