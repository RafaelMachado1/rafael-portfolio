// src/sections/Hero.tsx

import { TechIcons } from "../components/TechIcons";
import { ChevronDown } from "lucide-react";
import { Button } from "../components/Button";

// Usando 'export function' (exportação nomeada)

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center p-4 "
    >
      <div className="relative z-10">
        {/* Módulo 1: Painel de Conteúdo Principal */}
        <div className="bg-glass-bg backdrop-blur-[8px] border border-glass-border rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
          {/*
            [ARQUITETO]: REMOVIDO: 'text-5xl md:text-6xl'
            [ARQUITETO]: ADICIONADO: 'text-[clamp(2.75rem,5vw+1rem,4rem)]'
          */}
          <h1 className="font-bold tracking-tight bg-gradient-to-r from-accent-primary to-purple-400 bg-clip-text text-transparent text-[clamp(2.75rem,5vw+1rem,4rem)]">
            Desenvolvedor Web3
          </h1>
          {/*
            [ARQUITETO]: REMOVIDO: 'text-lg md:text-xl'
            [ARQUITETO]: ADICIONADO: 'text-[clamp(1rem,2.5vw+0.5rem,1.25rem)]'
          */}
          <p className="mt-4 text-gray-300 text-[clamp(1rem,2.5vw+0.5rem,1.25rem)]">
            Construindo a próxima geração de aplicações descentralizadas com
            foco em performance, segurança e experiência do usuário.
          </p>
            <div className="mt-10">
             <Button href="#projects">
                Ver Meus Projetos
             </Button>             
            </div>
       </div>

        {/* Módulo 2: Painel de Tecnologias */}
        {/* [ARQUITETO]: Este módulo será nosso PRÓXIMO alvo (Fase 3) */}
        <div className="mt-16 bg-glass-bg backdrop-blur-[8px] border border-glass-border rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
          <p className="text-gray-300 mb-4">Tecnologias que me impulsionam:</p>
          <div className="pointer-events-auto">
            <TechIcons />
          </div>
          <p className="mt-4 text-accent-primary italic">
            "Transformando ideias inovadoras em realidade digital
            descentralralizada."
          </p>
        </div>
      </div>

      {/* Módulo 3: Indicador de Rolagem (Nenhuma mudança necessária) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a href="#about" className="text-accent-primary animate-bounce">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
}
