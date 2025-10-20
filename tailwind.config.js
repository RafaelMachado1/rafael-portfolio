/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // --- SEU BLOCO DE CORES ESTAVA INCOMPLETO ---
      // --- ESTE É O BLOCO CORRETO BASEADO NO NOSSO DESIGN ---
      colors: {
        "bg-dark-primary": "#08081a",
        "bg-dark-secondary": "#121228",
        "accent-primary": "#00f2ff", // Você já tinha este
        "accent-secondary": "#8a2be2",
        "text-primary": "#e0e0e0", // <-- A CLASSE CRÍTICA QUE FALTAVA
        "text-secondary": "#a0a0c0",
        "glass-border": "rgba(255, 255, 255, 0.15)", // Você já tinha este
        // Nota: 'glass-bg' não é necessário, pois usamos a opacidade do Tailwind (ex: bg-bg-dark-secondary/40)
      },

      // Você já tinha este
      backdropBlur: {
        lg: "12px",
      },

      // --- ADICIONANDO O RESTANTE DO TEMA (FONTES E SOMBRAS) ---
      // Adicionado para garantir que 'font-poppins' funcione (index.css)
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      // Adicionado para 'drop-shadow-neon' e futuros botões
      boxShadow: {
        neon: "0 0 10px theme(colors.accent-primary), 0 0 20px theme(colors.accent-primary)",
        "neon-intense":
          "0 15px 40px rgba(0, 0, 0, 0.6), 0 0 10px theme(colors.accent-primary), 0 0 20px theme(colors.accent-primary)",
      },

      // Adicionado para o fundo animado do Hero (Fase 2)
      animation: {
        gradient: "gradientAnimation 20s ease infinite",
      },
      keyframes: {
        gradientAnimation: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [],
};
