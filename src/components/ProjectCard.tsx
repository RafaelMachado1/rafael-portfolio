// src/components/ProjectCard.tsx

import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ShieldCheck } from "lucide-react";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { id, title, description, imageUrl, techStack, links } = project;

  return (
    <motion.div
      className="project-card card-neon flex flex-col bg-transparent backdrop-blur-md border border-glass-border rounded-lg shadow-lg overflow-visible pointer-events-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -8,
        boxShadow:
          "0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px theme(colors.accent-primary)",
        transition: { duration: 0.3, ease: "easeOut" },
      }}
    >
      <div className="project-image overflow-hidden">
        <img
          src={imageUrl}
          alt={`Imagem de capa do projeto ${title}`}
          className="w-full h-56 object-cover object-center"
        />
      </div>
      <div className="project-info p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-text-primary mb-2">{title}</h3>
        <p className="text-text-secondary text-sm flex-grow mb-4">
          {description}
        </p>
        <div className="project-tags flex flex-wrap gap-2 mb-6">
          {techStack.map((tech) => (
            <span
              key={`${id}-${tech}`}
              className="project-tag bg-accent-primary/10 text-accent-primary text-xs font-medium px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="project-links flex items-center gap-6 mt-auto">
          {links.repo && (
            <a
              href={links.repo}
              target="_blank"
              rel="noopener noreferrer"
              title="Repositório no GitHub"
              className="flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors duration-300"
            >
              <Github size={18} />
              GitHub
            </a>
          )}
          {links.live && (
            <a
              href={links.live}
              target="_blank"
              rel="noopener noreferrer"
              title="Ver aplicação ao vivo"
              className="flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors duration-300"
            >
              <ExternalLink size={18} />
              Demo
            </a>
          )}
          {links.contract && (
            <a
              href={links.contract}
              target="_blank"
              rel="noopener noreferrer"
              title="Ver contrato verificado"
              className="flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors duration-300"
            >
              <ShieldCheck size={18} />
              Contrato
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
