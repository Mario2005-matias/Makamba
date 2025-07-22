import { Button } from "../../components/ui/button";
import { ArrowRight } from "lucide-react";
import CounterNumber from "./components/CounterNumber";
import TypingText from "./components/TypingText";

export default function Main() {
  return (
    <main className="w-full p-6 md:p-12 cursor-default dark:text-white dark:bg-gray-900 bg-white overflow-x-hidden">
      <div className="container mx-auto flex flex-col items-center justify-center text-center space-y-3">
        <TypingText />

        <h1 className="max-w-3xl font-semibold text-[clamp(2.5rem,5vw,4rem)] leading-tight">
          Transformamos ideias em soluções digitais de alto impacto.
        </h1>

        <h2 className="dark:text-gray-200 max-w-3xl text-[clamp(1rem,2vw,1.25rem)] text-gray-600 font-medium">
          Da criação de sites modernos à construção de aplicativos móveis e estratégias de marketing digital eficazes — fazemos tudo sob medida para o seu negócio prosperar online.
        </h2>

        <div className="flex gap-4 flex-wrap my-4">
          <Button
            variant="outline"
            size="lg"
            className="flex items-center gap-2 bg-black text-white hover:scale-110 transition-transform duration-300"
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
        </div>

        <CounterNumber />
      </div>
    </main>
  );
}
