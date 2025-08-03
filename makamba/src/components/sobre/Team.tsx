import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

// Exemplo de imagens (substitua pelos seus arquivos locais)
import Profissional1 from "../../assets/profissional.jpg";
import Profissional2 from "../../assets/profissional.jpg";
import Profissional3 from "../../assets/profissional.jpg";

const elementos = [
  {
    imagem: Profissional1,
    titulo: "Filipe Fernandes",
    descricao: "Jovem apaixonado por tecnologia desenvolvedor front-end",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    facebook: "https://facebook.com/",
  },
  {
    imagem: Profissional2,
    titulo: "Mário Matias",
    descricao: "CEO da equipe de Desenvolvedores focado em ser execelente",
    linkedin: "https://linkedin.com/",
    facebook: "https://facebook.com/",
  },
  {
    imagem: Profissional3,
    titulo: "João Tavares José",
    descricao: "Tecnologia aliada ao meio ambiente, front-end criativo .",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    facebook: "https://facebook.com/",
  },
   {
    imagem: Profissional3,
    titulo: "Valo Cateca",
    descricao: "CEO e fundador da Startup lider em Excelência Makamba Tec",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    facebook: "https://facebook.com/",
  },
];

export default function Carrossel() {
  const [index, setIndex] = useState(0);

  const proximo = () => setIndex((i) => (i + 1) % elementos.length);
  const anterior = () => setIndex((i) => (i - 1 + elementos.length) % elementos.length);

  // Drag/swipe handlers
  const handleDragEnd = (event:any, info: any) => {
    if (info.offset.x < -50) proximo();
    else if (info.offset.x > 50) anterior();
  };

  const varianteAnimacao = {
    inicial: { opacity: 0, y: 40, scale: 0.8, rotateY: -10 },
    animar: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      boxShadow: "0 8px 32px rgba(255, 103, 0, 0.15)",
      transition: { duration: 0.5, type: "spring" },
    },
    sair: { opacity: 0, y: -40, scale: 0.8, rotateY: 10, transition: { duration: 0.3 } },
  };

  return (
    <div className="w-full max-w-xl mx-auto p-4 text-center select-none">
      {/* Imagens do time no topo */}
      <div className="flex justify-center gap-6 mb-6">
        {elementos.map((el, i) => (
          <motion.img
            key={i}
            src={el.imagem}
            alt={el.titulo}
            className={`w-16 h-16 rounded-full object-cover border-4 ${
              i === index ? "border-[#FF6700] scale-110 shadow-lg" : "border-gray-300 opacity-60"
            } transition-all duration-300`}
            whileHover={{ scale: 1.15 }}
            onClick={() => setIndex(i)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>

      <div className="relative h-80 flex items-center justify-center">
        {/* Cards com blur */}
        {elementos.map((el, i) => {
          if (i === index) return null;
          const pos = i < index ? "-translate-x-40" : "translate-x-40";
          return (
            <motion.div
              key={i}
              className={`absolute w-full h-64 bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-center items-center dark:bg-black dark:text-white blur-md opacity-50 ${pos}`}
              style={{ top: "32px", zIndex: 0 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.5, scale: 0.9 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <img
                src={el.imagem}
                alt={el.titulo}
                className="w-16 h-16 rounded-full mb-2 object-cover"
              />
              <h2 className="text-xl font-bold mb-1 text-[#FF6700]">{el.titulo}</h2>
              <p className="text-gray-600">{el.descricao}</p>
              <div className="flex gap-3 mt-2">
                <a href={el.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-gray-500 hover:text-[#FF6700] text-xl transition" />
                </a>
                <a href={el.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-gray-500 hover:text-[#FF6700] text-xl transition" />
                </a>
                <a href={el.facebook} target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="text-gray-500 hover:text-[#FF6700] text-xl transition" />
                </a>
              </div>
            </motion.div>
          );
        })}

        {/* Card principal animado e arrastável */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="absolute w-72 h-72 bg-white rounded-2xl shadow-2xl p-6 flex flex-col justify-center items-center dark:bg-black dark:text-white cursor-grab"
            variants={varianteAnimacao}
            initial="inicial"
            animate="animar"
            exit="sair"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.3}
            onDragEnd={handleDragEnd}
            style={{ zIndex: 1 }}
            whileTap={{ scale: 0.97 }}
          >
            <img
              src={elementos[index].imagem}
              alt={elementos[index].titulo}
              className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-[#FF6700] shadow-lg"
            />
            <h2 className="text-2xl font-bold mb-2 text-[#FF6700]">
              {elementos[index].titulo}
            </h2>
            <p className="text-gray-600">{elementos[index].descricao}</p>
            <div className="flex gap-4 mt-4">
              <a href={elementos[index].github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-gray-500 hover:text-[#FF6700] text-2xl transition" />
              </a>
              <a href={elementos[index].linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-gray-500 hover:text-[#FF6700] text-2xl transition" />
              </a>
              <a href={elementos[index].facebook} target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-gray-500 hover:text-[#FF6700] text-2xl transition" />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex justify-between">
        <button
          onClick={anterior}
          className="bg-[#FF6700] text-white px-6 py-2 rounded-xl shadow hover:bg-orange-600 transition font-bold"
        >
            &#10094;  
        </button>
        <button
          onClick={proximo}
          className="bg-[#FF6700] text-white px-6 py-2 rounded-xl shadow hover:bg-orange-600 transition font-bold"
        >
           &#10095;  
        </button>
      </div>
    </div>
  );
}
