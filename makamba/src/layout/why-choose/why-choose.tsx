"use client";

import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Users, Award, BookOpen, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import MinhaImagem from "./fundo1.jpg";

// Corrigido: usamos "Variants" e tipagem correta para a função
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 * i,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const dados= [
  {
    title: "Profissionais de excelência",
    icon: <Users className="w-6 h-6 text-gray-800" />,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid possimus maxime veniam eaque, incidunt ipsum ad sit.",
  },
  {
    title: "Career-Boost Certify",
    icon: <Award className="w-6 h-6 text-gray-800" />,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid possimus maxime veniam eaque, incidunt ipsum ad sit.",
  },
  {
    title: "100+ High Impact Courses",
    icon: <BookOpen className="w-6 h-6 text-gray-800" />,
   text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid possimus maxime veniam eaque, incidunt ipsum ad sit.",
  },
];

   const geometricPatternStyle = {
    backgroundImage: `url(${MinhaImagem})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#1e293b",
  };

export default function WhyChoose() {
  return (
    <motion.section
      className="py-16 px-4 max-w-7xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Header */}
      <motion.div
        className="flex flex-col items-center justify-center mb-12"
        variants={fadeUp}
        custom={0}
      >
        <p className="border text-black border-black px-3 py-1.5 rounded-lg text-xs font-medium tracking-wide mb-4">
          Porquê nos escolher?
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center">
          Porquê escolher a Makamba Tech? 
        </h2>
      </motion.div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {dados.map((feature, i) => (
          <motion.div key={i} variants={fadeUp} custom={i + 1}>
            <Card className="p-8 border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.text}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}

        {/* Último card com fundo escuro */}
        <motion.div variants={fadeUp} custom={4}>


          <Card className="p-8 bg-slate-900 text-white relative overflow-hidden"  style={geometricPatternStyle}>

            {/* Overlay escura */}
            <div className="absolute inset-0 bg-slate-900/80 "></div>

            <CardContent className="p-0 relative z-10">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Horários Flexíveis</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Aprenda no seu ritmo, com cursos sob demanda. Perfeito para quem
                tem uma rotina cheia.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                A flexibilidade que você precisa para estudar onde e quando
                quiser.
              </p>
              <Button className="bg-[#FF6700] hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition-colors">
                Começar agora
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -translate-y-16 translate-x-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-500/10 rounded-full translate-y-12 -translate-x-12" />
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
}
