// src/components/Button.tsx

import React from 'react';
import { motion } from 'framer-motion';

// Definimos as props que nosso botão aceitará
interface ButtonProps {
  href: string; // O link de destino
  children: React.ReactNode; // O texto ou ícone dentro do botão
  isExternal?: boolean; // Para abrir links em nova aba (ex: LinkedIn)
}

// Usando 'export const' (exportação nomeada)
export const Button: React.FC<ButtonProps> = ({
  href,
  children,
  isExternal = false,
}) => {
  // Traduzindo as classes .btn e .btn-primary do seu CSS
  const buttonClasses = [
    'inline-block',
    'px-8 py-3', // Padding (0.9rem 2.5rem é aprox. px-10 py-4, mas px-8 py-3 é mais padrão)
    'rounded-md', // border-radius: 5px
    'font-semibold', // font-weight: 600
    'tracking-wider', // letter-spacing: 0.05em
    'uppercase', // text-transform: uppercase
    'transition-all duration-300 ease-out',
    'bg-accent-primary', // background-color
    'text-bg-dark-primary', // color
    'border-2 border-accent-primary', // border
    'shadow-lg shadow-accent-primary/40', // box-shadow neon
    'hover:bg-transparent', // hover: background-color
    'hover:text-accent-primary', // hover: color
    'hover:-translate-y-1', // hover: transform
    'hover:shadow-neon', // hover: box-shadow (do nosso config)
    'pointer-events-auto', // Permitir interações
  ].join(' ');

  const externalProps = isExternal
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <motion.a
      href={href}
      className={buttonClasses}
      {...externalProps}
      // Adicionando a micro-interação do Framer Motion
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
};