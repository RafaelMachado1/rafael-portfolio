// src/sections/About.tsx
// (Solução A: Funcional, mas NÃO RECOMENDADA)

import React from 'react';
import { motion } from 'framer-motion';

// 1. Adicione 'export' aqui
export const About: React.FC = () => {
  return (
    <motion.section
      id="about"
      className="py-16 md:py-24" 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4">
        {/* Título da Seção - Centralizado */}
        <h2 className="section-title text-center text-4xl md:text-5xl font-bold mb-16">
          Sobre <span className="text-accent-primary drop-shadow-neon">Mim</span>
        </h2>

        {/* Conteúdo Centralizado */}
        <div className="about-content max-w-3xl mx-auto text-center">
          <motion.div
            className="about-text p-6 md:p-8 bg-bg-dark-secondary/40 backdrop-blur-md border border-glass-border rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <p className="text-text-primary text-lg mb-4 leading-relaxed">
              Com mais de 20 anos na área comercial e agora unindo essa experiência com a paixão por tecnologia, sou um desenvolvedor dedicado a criar soluções inovadoras no ecossistema Web3.
            </p>
            <p className="text-text-primary text-lg leading-relaxed">
              Minha jornada me deu uma visão única sobre o produto e o cliente, permitindo-me construir aplicações que não são apenas tecnicamente robustas, mas também intuitivas e alinhadas às necessidades reais do mercado.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

