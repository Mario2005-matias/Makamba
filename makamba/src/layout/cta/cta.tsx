import { useState } from "react"
import { Button } from "../../components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import MinhaImagem from "./fundo1.jpg";

export default function Cta() {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(true)
    // Descomente se quiser voltar após alguns segundos
    // setTimeout(() => setClicked(false), 3000)
  }

    const geometricPatternStyle = {
    backgroundImage: `url(${MinhaImagem})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#1e293b",
  };

  return (
    <section className="w-full items-center justify-center px-6" >

      <div className="text-white">
        <div className="bg-gray-900 rounded-lg px-6 py-4 gap-4 flex flex-wrap items-center justify-between max-w-7xl mx-auto relative" style={geometricPatternStyle}>
          {/* Overlay escura */}
    <div className="absolute inset-0 bg-slate-900/80 rounded-lg"></div>
          <div className="flex flex-col z-10">
            <h1 className="text-lg font-semibold">Comece com a Makamba Tech hoje!</h1>
            <p className="text-sm text-gray-300 mt-1">
              Soluções feitas sob medida para fazer seu negócio crescer online.
            </p>
          </div>

          <div className="flex items-center min-w-[160px] h-[40px] relative">
            <AnimatePresence mode="wait">
              {clicked ? (
                <motion.span
                  key="brevemente"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 flex items-center justify-center font-medium text-white"
                >
                  Brevemente...
                </motion.span>
              ) : (
                <motion.div
                  key="button"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <Button
                    onClick={handleClick}
                    className="w-full h-full bg-white text-gray-900 hover:bg-gray-100 font-medium"
                  >
                    Juntar-se a nós
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
