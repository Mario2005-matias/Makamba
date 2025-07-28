import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import WomanChef from "../../../assets/Woman-Chefe-Cooking.jpg";
import { Card, CardContent, CardHeader } from "../../../components/ui/card";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Leslie Alexander",
    role: "Designer",
    company: "CreativeTech",
    content:
      "A equipe da Makamba entregou um trabalho excepcional. Super recomendo!",
    rating: 5,
    avatar: WomanChef,
  },
  {
    id: 2,
    name: "Brenna Goyette",
    role: "Developer",
    company: "DevCorp",
    content:
      "Profissionais altamente qualificados e comprometidos com resultados.",
    rating: 5,
    avatar: WomanChef,
  },
  {
    id: 3,
    name: "Michael Foster",
    role: "Marketing",
    company: "GrowthHub",
    content: "Comunicação clara e entregas sempre dentro do prazo. Excelente!",
    rating: 5,
    avatar: WomanChef,
  },
<<<<<<< HEAD:makamba/src/layout/section-depoimento/testimonials-masonry.tsx
  {
    id: 5,
    name: "Floyd Miles",
    username: "@floydmiles",
    avatar: Avatar,
    content:
      "Architecto libero natus est. Est quam debitis officia enim atque et ut non. Sunt reiciendis quasi eaque. Iusto error ut et.",
  },
  {
    id: 6,
    name: "Lindsay Walton",
    username: "@lindsaywalton",
    avatar: Avatar,
    content:
      "Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.",
  }
]
=======
];
>>>>>>> origin/Makamba_Joao_Tavares_Jose:makamba/src/layout/section-depoimento/components/testimonials-masonry.tsx

export default function TestimonialsMasonry() {
  const [isVisible, setIsVisible] = useState<boolean[]>(
    new Array(testimonials.length).fill(false)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            showTestimonials();
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("testimonials-masonry");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const showTestimonials = () => {
    const newIsVisible = [...isVisible];
    testimonials.forEach((_, index) => {
      setTimeout(() => {
        newIsVisible[index] = true;
        setIsVisible([...newIsVisible]);
      }, index * 200);
    });
  };

  return (
<<<<<<< HEAD:makamba/src/layout/section-depoimento/testimonials-masonry.tsx
    <section id="Testemunhas" className="py-16 px-4 bg-gradient-to-br from-orange-500 via-blue-300 to-purple-400 ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
=======
    <section id="testimonials-masonry" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> origin/Makamba_Joao_Tavares_Jose:makamba/src/layout/section-depoimento/components/testimonials-masonry.tsx
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            O que nossos clientes estão dizendo
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isVisible[index] ? 1 : 0,
                y: isVisible[index] ? 0 : 20,
              }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full bg-white/10 backdrop-blur-md border-white/20 hover:shadow-xl transition-all duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-300">{testimonial.role}</p>
                    <p className="text-xs text-gray-400">
                      {testimonial.company}
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{testimonial.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
