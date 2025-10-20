// src/components/Footer.tsx

import React from 'react';
import { Linkedin, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-dark-secondary border-t border-glass-border shadow-inner py-12 z-10 pointer-events-auto">
      <div className="container mx-auto px-4 text-center">
        <div className="footer-content flex flex-col items-center gap-6">
          {/* Logo/Nome */}
          <a href="#" className="footer-logo text-2xl font-bold text-text-primary hover:text-accent-primary transition-colors pointer-events-auto">
            Rafael Machado.
          </a>

          {/* Ícones Sociais */}
          <div className="footer-socials flex gap-6">
            <a
              href="https://github.com/RafaelMachado1"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="text-text-secondary hover:text-accent-primary hover:-translate-y-1 transition-all duration-300 pointer-events-auto"
            >
              <Github size={38} />
            </a>
            <a
              href="https://www.linkedin.com/in/rafa25/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="text-text-secondary hover:text-accent-primary hover:-translate-y-1 transition-all duration-300 pointer-events-auto"
            >
              <Linkedin size={38} />
            </a>
          </div>

          {/* Copyright */}
          <p className="copyright-text text-text-secondary text-sm">
            &copy; {currentYear} Rafael Machado. Construído com paixão para o futuro descentralizado.
          </p>
        </div>
      </div>
    </footer>
  );
};