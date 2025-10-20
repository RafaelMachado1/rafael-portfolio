// src/components/Header.tsx

import { useState } from 'react';

export function Header() {
  // 1. O 'Ponto da Verdade': O state que controla o menu mobile.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 2. A Função de Toggle: Inverte o state ao ser chamada.
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 3. A Função de Fechar: Garante que o menu feche ao clicar em um link.
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* O Header principal. Nenhuma mudança estrutural aqui. */}
      <header className="fixed top-0 left-0 w-full z-50 bg-glass-bg backdrop-blur-lg border-b border-glass-border shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          {/* Logo */}
          <a
            href="#"
            className="text-2xl font-bold text-white hover:text-accent-primary transition-colors duration-300 pointer-events-auto"
            onClick={closeMenu} // Fecha o menu se clicar no logo
          >
            WEB3
          </a>

          {/* 4. NAVEGAÇÃO DESKTOP */}
          {/*
            - 'hidden': Escondido por padrão (Mobile-First)
            - 'md:flex': Vira 'flex' no breakpoint 'md' (768px) e superiores
          */}
          <nav className="hidden md:flex">
            <a
              href="#about"
              className="text-gray-300 hover:text-accent-primary transition-colors duration-300 ml-8 pointer-events-auto"
            >
              Sobre
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-accent-primary transition-colors duration-300 ml-8 pointer-events-auto"
            >
              Projetos
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-accent-primary transition-colors duration-300 ml-8 pointer-events-auto"
            >
              Contato
            </a>
          </nav>

          {/* 5. BOTÃO TOGGLE MOBILE (HAMBÚRGUER) */}
          {/*
            - 'md:hidden': Visível por padrão (mobile), mas escondido a partir do 'md'
          */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white pointer-events-auto z-50" // Z-index para ficar acima do menu dropdown
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              // Ícone "X" (quando o menu está aberto)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              // Ícone "Hambúrguer" (quando o menu está fechado)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* 6. MENU MOBILE DROPDOWN */}
      {/*
        - Renderizado condicionalmente com base no state 'isMenuOpen'
        - 'md:hidden' garante que ele NUNCA apareça em desktop
      */}
      {isMenuOpen && (
        <div
          className="fixed top-20 left-0 w-full z-40 bg-glass-bg backdrop-blur-lg border-b border-glass-border shadow-lg md:hidden"
          onClick={closeMenu} // Fecha o menu se clicar no fundo
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col items-center">
            <a
              href="#about"
              className="text-gray-300 hover:text-accent-primary transition-colors duration-300 py-3 text-lg pointer-events-auto"
            >
              Sobre
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-accent-primary transition-colors duration-300 py-3 text-lg pointer-events-auto"
            >
              Projetos
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-accent-primary transition-colors duration-300 py-3 text-lg pointer-events-auto"
            >
              Contato
            </a>
          </nav>
        </div>
      )}
    </>
  );
}