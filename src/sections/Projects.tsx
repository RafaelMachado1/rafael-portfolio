// src/sections/Projects.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { projectData } from '../data/projects'; // 1. Importando nossos dados
import { ProjectCard } from '../components/ProjectCard'; // 2. Importando nosso componente "átomo"

// Usando 'export const' (exportação nomeada)
export const Projects: React.FC = () => {
  return (
    <motion.section
      id="projects"
      className="py-16 md:py-24" // Espaçamento vertical da seção
      // Animação de entrada da seção inteira
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }} // Anima quando 20% da seção estiver visível
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4">
        {/* Título da Seção */}
        <h2 className="section-title text-center text-4xl md:text-5xl font-bold mb-16">
          Meus <span className="text-accent-primary drop-shadow-neon">Projetos</span>
        </h2>

        {/* Grid Responsiva de Projetos.
          - 1 coluna em mobile (padrão)
          - 2 colunas em tablets (md:)
          - 3 colunas em desktops (lg:)
          - 'gap-8' define o espaçamento entre os cards
        */}
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 3. Mapeando os dados para os componentes
            Para cada 'project' em 'projectData', renderize um <ProjectCard>
            A 'key' é crucial para o React otimizar a renderização.
          */}
          {projectData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};