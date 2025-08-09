import React, { useState, useEffect } from 'react';
import Imagem1 from "../../assets/imagem1.jpg";
import Imagem2 from "../../assets/imagem2.jpg";
import Imagem3 from "../../assets/imagem3.jpg";

interface CarouselItem {
  image: string;
  missionText: string;
}

const carouselItems: CarouselItem[] = [
  {
    image: Imagem1,
    missionText: 'Inovação em Soluções de TI Com base em Eficiencia e eficácia  sempre entregando o melhor',
  },
  {
    image: Imagem2,
    missionText: 'Soluções seguras e praticas pra sí e pra sua empresa, usando tecnologias modernas pra melhor performance!',
  },
  {
    image: Imagem3,
    missionText: 'Soluções Escaláveis e Customizadas pra tudo em um hambiente corporativo e eficiente',
  },
];

const Missao: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 10000); 
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden mt-15">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          width: `${carouselItems.length * 100}%`,
          transform: `translateX(-${currentIndex * (100 / carouselItems.length)}%)`,
        }}
      >
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className="w-full h-[600px] flex-shrink-0 flex justify-center items-center relative"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: `${100 / carouselItems.length}%`,
            }}
          >
            <div className="absolute inset-0 bg-black opacity-40" />
            <div className="relative text-4xl font-bold p-4 text-center text-[#FF6700] w-full m-50">
              {item.missionText}
            </div>
          </div>
        ))}
      </div>

      {/* Setas de navegação */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#FF6700] text-3xl p-2 bg-white w-15 h-15 rounded-full hover:bg-[#FF6700] dark:bg-black transition duration-600 ease-in-out hover:text-white  cursor-pointer"
      >
        &#10094;  
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#FF6700] dark:bg-black text-3xl p-2 bg-white w-15 h-15 rounded-full hover:bg-[#FF6700] transition duration-600 ease-in-out hover:text-white  cursor-pointer"
      >
        &#10095;
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-orange-500' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Missao;