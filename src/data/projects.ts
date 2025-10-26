// src/data/projects.ts

/**
 * Define a estrutura de links para um projeto.
 * Em Web3, 'repo' (código) e 'contract' (on-chain) são tão importantes quanto 'live' (demo).
 */
export interface ProjectLinks {
  repo: string;
  live?: string;
  contract?: string; // Essencial para prova de trabalho on-chain
}

/**
 * Define o contrato de dados principal para um projeto.
 */
export interface Project {
  id: string; // IDs em string (ex: 'p1-defi') são mais robustos que números
  title: string;
  description: string;
  imageUrl: string; // CAMPO CRÍTICO: Adicionado para a imagem do card
  techStack: string[]; // Renomeado de 'technologies' para 'techStack'
  links: ProjectLinks; // Objeto aninhado para todos os links
}

/**
 * Nosso "banco de dados" de projetos.
 * ATENÇÃO: Substitua os placeholders 'imageUrl' e 'links.contract' pelos seus dados reais.
 */
export const projectData: Project[] = [
  {
    id: 'Sentinel Pro',
    title: 'Portfólio de Ativos',
    description:
      'portfólio de ativos on-chain em tempo real. Simples, rápido e seguro.',
    imageUrl: '/images/Sentinel-Pro.png', // <<-- AÇÃO: Crie 'public/images/Sentinel-Pro.png'
    techStack: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Solidity' ], // Renomeado
    links: {
      repo: 'https://github.com/RafaelMachado1/sentinel-pro-notus',
      live: 'https://sentinel-pro-notus-mkzv3ae4n-rafaelmachado1s-projects.vercel.app/',
    },
  },
  {
    id: 'p2-dynamic-nfts',
    title: 'Galeria de NFTs Dinâmicos',
    description:
      'Uma aplicação que exibe NFTs cujos metadados mudam com base em dados de oráculos on-chain, como o preço do ETH.',
    imageUrl: '/images/project-dynamic-nft.png', // <<-- AÇÃO: Crie 'public/images/project-dynamic-nft.png'
    techStack: ['Next.js', 'Tailwind CSS', 'Thirdweb', 'Chainlink'], // Renomeado
    links: {
      repo: 'https://github.com/seu-usuario/repo-nft-gallery',
      // 'live' é opcional, então omitir está correto
      contract: 'https://sepolia.etherscan.io/address/0x...', // <<-- AÇÃO: Adicione o link do contrato
    },
  },
  {
    id: 'p3-dao-voting',
    title: 'Sistema de Votação com DAO',
    description:
      'Implementação de um sistema de governança on-chain onde detentores de tokens podem criar e votar em propostas.',
    imageUrl: '/images/project-dao-voting.png', // <<-- AÇÃO: Crie 'public/images/project-dao-voting.png'
    techStack: ['Foundry', 'Solidity', 'Tally', 'TypeScript'], // Renomeado
    links: {
      repo: 'https://github.com/seu-usuario/repo-dao',
      live: 'https://minha-dao.xyz',
      contract: 'https://sepolia.etherscan.io/address/0x...', // <<-- AÇÃO: Adicione o link do contrato
    },
  },
];