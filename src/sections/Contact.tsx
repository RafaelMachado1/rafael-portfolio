// src/sections/Contact.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/Button'; // <-- Importando nosso novo botão

// Usando 'export const' (exportação nomeada)
export const Contact: React.FC = () => {
  return (
    <motion.section
      id="contact"
      className="py-16 md:py-24" // Espaçamento da seção
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4 text-center">
        {/* Título da Seção */}
        <h2 className="section-title text-4xl md:text-5xl font-bold mb-8">
          Vamos <span className="text-accent-primary drop-shadow-neon">Conversar</span>
        </h2>

        {/* Parágrafo de Chamada */}
        <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-12">
          Estou sempre aberto a novas oportunidades e colaborações. Se você tem um projeto em mente ou apenas quer trocar uma ideia sobre tecnologia e Web3, entre em contato!
        </p>

        {/* O Botão Reutilizável */}
        <Button href="mailto:rafaelmartinsmachado25@gmail.com">
          Enviar um E-mail
        </Button>
      </div>
    </motion.section>
  );
};