import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"
import path from "path"

// https://vite.dev/config/
export default defineConfig({
   plugins: [
    react(), 
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
   build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          icons: ['react-icons', 'lucide-react'],
          motion: ['framer-motion', 'react-intersection-observer'],
          ui: [
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-slot',
            'embla-carousel-react',
            'react-floating-whatsapp'
          ],
          tailwind: ['tailwindcss', 'tailwind-merge', 'class-variance-authority', 'clsx'],
        },
      },
    },
    minify: true,
  }
})
