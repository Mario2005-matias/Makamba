import { Button } from "../../components/ui/button";
import { ArrowRight } from "lucide-react";
//import CounterNumber from "./components/CounterNumber";
import TypingText from "./components/TypingText";
import { motion } from "framer-motion";

export default function Main() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center p-6 md:p-12 cursor-default dark:text-white dark:bg-black bg-white overflow-x-hidden">
      <motion.div
        className="container mx-auto flex flex-col items-center justify-center text-center space-y-3"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <TypingText />

        <motion.h1
          className="max-w-3xl font-semibold text-[clamp(2.5rem,5vw,4rem)] leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Transformamos ideias em soluções digitais de alto impacto.
        </motion.h1>

        <motion.h2
          className="dark:text-gray-200 max-w-3xl text-[clamp(1rem,2vw,1.25rem)] text-gray-600 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Da criação de sites modernos à construção de aplicativos móveis e estratégias de marketing digital eficazes — fazemos tudo sob medida para o seu negócio prosperar online.
        </motion.h2>

        <motion.div
          className="flex gap-4 flex-wrap items-center justify-center my-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <Button
            variant="outline"
            size="lg"
            className="flex items-center gap-2 bg-black text-white hover:bg-gray-900 hover:text-white hover:scale-110 transition-transform duration-300"
          >
            Contacta-nos
          </Button>

          <Button
            variant="link"
            size="lg"
            className="underline font-semibold hover:scale-110 transition-transform duration-300"
          >
            Saber mais
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <CounterNumber />
        </motion.div>
      </motion.div> */}
      {/* Add the missing closing tag for motion.div */}
    </motion.div>
    </main>
  );
}
