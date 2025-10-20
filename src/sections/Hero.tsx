// src/sections/Hero.tsx

import { TechIcons } from "../components/TechIcons";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center p-4 "
    >
      <div className="relative z-10">
        {/* Módulo 1: Painel de Conteúdo Principal */}
        <div className="bg-glass-bg backdrop-blur-[8px] border border-glass-border rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-accent-primary to-purple-400 bg-clip-text text-transparent">
            Desenvolvedor Web3
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            Construindo a próxima geração de aplicações descentralizadas com
            foco em performance, segurança e experiência do usuário.
          </p>
          <a
            href="#projects"
            className="mt-8 inline-block bg-accent-primary text-gray-900 font-bold py-3 px-8 rounded-md transition-all duration-300 hover:bg-transparent hover:text-accent-primary border-2 border-transparent hover:border-accent-primary hover:shadow-[0_0_15px_rgba(0,242,255,0.6)] pointer-events-auto"
          >
            Ver Meus Projetos
          </a>
        </div>

        {/* Módulo 2: Painel de Tecnologias */}
        <div className="mt-16 bg-glass-bg backdrop-blur-[8px] border border-glass-border rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
          <p className="text-gray-300 mb-4">Tecnologias que me impulsionam:</p>
          <div className="pointer-events-auto">
            <TechIcons />
          </div>
          <p className="mt-4 text-accent-primary italic">
            "Transformando ideias inovadoras em realidade digital
            descentralizada."
          </p>
        </div>
      </div>

      {/* Módulo 3: Indicador de Rolagem */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a
          href="#about"
          className="text-accent-primary animate-bounce"
        >
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
}
