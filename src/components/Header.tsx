// src/components/Header.tsx

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-glass-bg backdrop-blur-lg border-b border-glass-border shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-white hover:text-accent-primary transition-colors duration-300 pointer-events-auto">
          WEB3
        </a>
        
        {/* Links de Navegação */}
        <nav>
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
      </div>
    </header>
  );
}