"use client"

import type React from "react"
import { useEffect, useState } from "react"

const TypingText: React.FC = () => {
  const fullText = "MAKAMBA TEC"
  const [displayedText, setDisplayedText] = useState("")
  const [loopCount, setLoopCount] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    // Para após 3 loops e fixa o texto
    if (loopCount >= 3) {
      setDisplayedText(fullText)
      setIsTyping(false)
      return
    }

    let index = 0
    const typingInterval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText[index])
      index++

      // Quando termina de digitar o texto completo
      if (index === fullText.length) {
        clearInterval(typingInterval)

        // Aguarda 1 segundo antes de limpar e repetir
        setTimeout(() => {
          setDisplayedText("")
          setLoopCount((prev) => prev + 1)
        }, 1000)
      }
    }, 100) // Velocidade da digitação (100ms por caractere)

    return () => clearInterval(typingInterval)
  }, [loopCount, fullText])

  return (
    <div className="inline-flex items-center">
      <div className="neon-border px-4 py-2 rounded-lg relative overflow-hidden">
        <span className="neon-text text-sm font-mono tracking-wider">
          {displayedText}
          <span className={`ml-1 neon-cursor ${isTyping ? "animate-pulse" : ""}`}>|</span>
        </span>
      </div>

      <style>{`
  .neon-text {
    color: #FF6700;
    text-shadow: 
      0 0 1px #FF6700,
      0 0 2px rgba(255, 103, 0, 0.5),
      0 0 4px rgba(255, 103, 0, 0.3);
    animation: neon-flicker-soft 6s infinite alternate;
  }

  .neon-border {
    border: 1px solid rgba(255, 103, 0, 0.6);
    box-shadow: 
      0 0 2px rgba(255, 103, 0, 0.3),
      0 0 4px rgba(255, 103, 0, 0.2),
      inset 0 0 2px rgba(255, 103, 0, 0.1);
    background: rgba(255, 103, 0, 0.01);
    backdrop-filter: blur(2px);
    animation: border-glow-soft 8s ease-in-out infinite alternate;
  }

  .neon-cursor {
    color: #FF6700;
    text-shadow: 
      0 0 1px #FF6700,
      0 0 2px rgba(255, 103, 0, 0.4);
    animation: cursor-blink 1s infinite, cursor-glow-soft 4s ease-in-out infinite alternate;
  }

  @keyframes neon-flicker-soft {
    0%, 100% {
      text-shadow: 
        0 0 1px #FF6700,
        0 0 2px rgba(255, 103, 0, 0.5),
        0 0 4px rgba(255, 103, 0, 0.3);
    }
    50% {
      text-shadow: 
        0 0 1px #FF6700,
        0 0 3px rgba(255, 103, 0, 0.6),
        0 0 5px rgba(255, 103, 0, 0.4);
    }
  }

  @keyframes border-glow-soft {
    0% {
      box-shadow: 
        0 0 2px rgba(255, 103, 0, 0.3),
        0 0 4px rgba(255, 103, 0, 0.2),
        inset 0 0 2px rgba(255, 103, 0, 0.1);
    }
    100% {
      box-shadow: 
        0 0 3px rgba(255, 103, 0, 0.4),
        0 0 6px rgba(255, 103, 0, 0.3),
        inset 0 0 3px rgba(255, 103, 0, 0.15);
    }
  }

  @keyframes cursor-glow-soft {
    0% {
      text-shadow: 
        0 0 1px #FF6700,
        0 0 2px rgba(255, 103, 0, 0.4);
    }
    100% {
      text-shadow: 
        0 0 2px #FF6700,
        0 0 4px rgba(255, 103, 0, 0.5);
    }
  }

  /* Efeito de scan line mais suave */
  .neon-border::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 103, 0, 0.05),
      transparent
    );
    animation: scan-line-soft 8s infinite;
  }

  @keyframes scan-line-soft {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }
`}</style>
    </div>
  )
}

export default TypingText
