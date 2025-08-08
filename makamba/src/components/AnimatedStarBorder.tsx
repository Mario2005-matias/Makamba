// src/components/AnimatedStarBorder.tsx
import { motion } from "framer-motion";

interface AnimatedStarBorderProps {
  children: React.ReactNode;
}

export function AnimatedStarBorder({ children }: AnimatedStarBorderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{
        opacity: 1,
        scale: 1,
        boxShadow: "0 0 0 2px rgba(255, 215, 0, 0.8)", // efeito dourado
      }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
      className="inline-block rounded-full"
    >
      {children}
    </motion.div>
  );
}
