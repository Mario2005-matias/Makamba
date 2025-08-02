import React, { useState, useEffect } from 'react';
import Imagem1 from "../../assets/imagem1.jpg";


interface CarouselItem {
  image: string;
  missionText: string;
}

const carouselItems: CarouselItem[] = [
  {
    image: Imagem1,
    missionText: 'Inovação em Soluções de TI Com base em Eficiencia e eficácia',
  },
  {
    image: 'https://via.placeholder.com/1500x600?text=Missão+2',
    missionText: 'Transformação Digital com Inteligência Artificial',
  },
  {
    image: 'https://via.placeholder.com/1500x600?text=Missão+3',
    missionText: 'Soluções Escaláveis e Customizadas',
  },
];

const Missao: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 5000); 
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
        className="absolute inset-0 transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className="w-full h-full flex justify-center items-center"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black opacity-40" />
            <div className="relative text-white text-4xl font-bold p-4 text-center text-">
              {item.missionText}
            </div>
          </div>
        ))}
      </div>

      {/* Setas de navegação */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-500 text-3xl p-2 bg-white rounded-full shadow-md hover:bg-orange-100 transition"
      >
        &#10094;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-orange-500 text-3xl p-2 bg-white rounded-full shadow-md hover:bg-orange-100 transition"
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
