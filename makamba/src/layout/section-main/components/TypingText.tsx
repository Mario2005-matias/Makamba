import React, { useEffect, useState } from "react";

const TypingText: React.FC = () => {
  const fullText = "MAKAMBA TECH";
  const [displayedText, setDisplayedText] = useState("");
  const [loopCount, setLoopCount] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    // Para após 3 loops e fixa o texto
    if (loopCount >= 3) {
      setDisplayedText(fullText);
      setIsTyping(false);
      return;
    }

    let index = 0;
    const typingInterval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText[index]);
      index++;

      // Quando termina de digitar o texto completo
      if (index === fullText.length) {
        clearInterval(typingInterval);
        
        // Aguarda 1 segundo antes de limpar e repetir
        setTimeout(() => {
          setDisplayedText("");
          setLoopCount((prev) => prev + 1);
        }, 1000);
      }
    }, 100); // Velocidade da digitação (100ms por caractere)

    return () => clearInterval(typingInterval);
  }, [loopCount, fullText]);

  return (
    <div className="inline-flex items-center">
      <span className="border border-black px-3 py-1 rounded-lg text-xs">
        {displayedText}
        <span 
          className={`ml-1 ${isTyping ? "animate-pulse" : "animate-pulse"}`}
          style={{
            animation: 'blink 1s infinite'
          }}
        >
          |
        </span>
      </span>
      
      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default TypingText;