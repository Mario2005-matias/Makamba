import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Mail, MapPin, Phone, User, Send } from "lucide-react";
import { motion } from "framer-motion";

const schema = z.object({
  nome: z.string().min(2, "Digite seu nome completo"),
  email: z.string().email("E-mail inválido"),
  assunto: z.string().min(3, "Assunto obrigatório"),
  mensagem: z.string().min(10, "Mensagem muito curta"),
});

export default function ContatoSection() {
  const [status, setStatus] = useState<null | "sucesso" | "erro">(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data: z.infer<typeof schema>) => {
    try {
      setStatus(null);
      const response = await fetch("https://seu-backend.com/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Erro ao enviar");
      setStatus("sucesso");
      reset();
    } catch (err) {
      console.error(err);
      setStatus("erro");
    }
  };

  return (
    <section id="contacto" className="bg-[#0f172a] text-white px-4 py-20">
      {/* Título e Subtítulo com parágrafo acima */}
      <div className="text-center mb-12">
        <p className="inline-block border border-white/100 text-white/100 px-4 py-1 rounded-2xl text-sm md:text-base mb-4">
          Contacto
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">
          Entre em <span className="text-orange-400">Contato</span>
        </h2>
        <p className="text-gray-300 mt-2 text-base md:text-lg">
          Estamos aqui para ajudar você!
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Coluna Esquerda: Informações e Mapa */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Informações de Contato */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow space-y-4">
            <h3 className="text-base md:text-lg font-semibold text-white">
              Informações de Contato
            </h3>

            <div className="flex items-start gap-3">
              <span className="bg-white/10 p-2 rounded-full">
                <Mail className="text-orange-400" size={20} />
              </span>
              <div>
                <p className="font-semibold">E-mail</p>
                <p className="text-gray-300 text-sm">contato@empresa.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="bg-white/10 p-2 rounded-full">
                <Phone className="text-orange-400" size={20} />
              </span>
              <div>
                <p className="font-semibold">Telefone</p>
                <p className="text-gray-300 text-sm">+244 000 000 000</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="bg-white/10 p-2 rounded-full">
                <MapPin className="text-orange-400" size={20} />
              </span>
              <div>
                <p className="font-semibold">Endereço</p>
                <p className="text-gray-300 text-sm leading-snug">
                  Rua ...
                  <br />
                  Luanda
                  <br />
                  Angola
                </p>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow overflow-hidden">
            <p className="text-sm font-semibold text-white px-6 pt-4 pb-2">
              Nossa Localização
            </p>
            <div className="aspect-video">
              {/* <MapaInterativo /> */}
            </div>
          </div>
        </motion.div>

        {/* Coluna Direita: Formulário */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-md rounded-xl p-8 space-y-5 shadow"
        >
          <h2 className="text-lg font-semibold text-white">
            Envie sua Mensagem
          </h2>

          {/* Nome */}
          <div>
            <label className="flex items-center gap-2 mb-1 text-sm font-medium">
              <User size={16} /> Nome
            </label>
            <input
              {...register("nome")}
              placeholder="Seu nome completo"
              className="w-full bg-[#1e293b] text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.nome && (
              <p className="text-red-400 text-sm mt-1">{errors.nome.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="flex items-center gap-2 mb-1 text-sm font-medium">
              <Mail size={16} /> E-mail
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="seu@email.com"
              className="w-full bg-[#1e293b] text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Assunto */}
          <div>
            <label className="block text-sm font-medium mb-1">Assunto</label>
            <input
              {...register("assunto")}
              placeholder="Assunto da sua mensagem"
              className="w-full bg-[#1e293b] text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.assunto && (
              <p className="text-red-400 text-sm mt-1">
                {errors.assunto.message}
              </p>
            )}
          </div>

          {/* Mensagem */}
          <div>
            <label className="block text-sm font-medium mb-1">Mensagem</label>
            <textarea
              {...register("mensagem")}
              rows={4}
              placeholder="Escreva sua mensagem aqui..."
              className="w-full bg-[#1e293b] text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.mensagem && (
              <p className="text-red-400 text-sm mt-1">
                {errors.mensagem.message}
              </p>
            )}
          </div>

          {/* Status */}
          {status === "sucesso" && (
            <p className="text-green-400 font-medium">
              Mensagem enviada com sucesso!
            </p>
          )}
          {status === "erro" && (
            <p className="text-red-400 font-medium">
              Erro ao enviar. Tente novamente.
            </p>
          )}

          {/* Botão de Enviar */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition duration-300 disabled:opacity-50"
          >
            <Send size={16} />
            {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
