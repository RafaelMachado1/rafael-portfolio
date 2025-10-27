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
      'Portfólio de ativos on-chain em tempo real. Simples, rápido e seguro. O objetivo do Sentinel Pro é fornecer aos usuários uma visão clara e atualizada de seus investimentos em criptomoedas, permitindo que tomem decisões informadas com base em dados precisos e em tempo real.',
    imageUrl: '/images/Sentinel-Pro.png', // <<-- AÇÃO: Crie 'public/images/Sentinel-Pro.png'
    techStack: ['React','Next.js', 'TypeScript', 'Solidity', 'Tailwind CSS', 'RaibowKit Wagami','Alchemy','CoinGecko', 'char.js, react-charjs-2','Vercel'], // Renomeado
    links: {
      repo: 'https://github.com/RafaelMachado1/sentinel-pro-notus',
      live: 'https://sentinel-pro-notus-mkzv3ae4n-rafaelmachado1s-projects.vercel.app/',
    },
  },
  {
    id: 'p2-dynamic-nfts',
    title: 'Emissor de Certificados',
    description:
      'Este projeto implementa uma solução completa para a emissão de certificados digitais utilizando a blockchain. A aplicação permite que um usuário conecte sua carteira digital, preencha os dados de um certificado e o emita, registrando um hash do conteúdo de forma imutável na blockchain e armazenando os metadados no IPFS.',
    imageUrl: '/images/emissor-de-certificados.png', // <<-- AÇÃO: Crie 'public/images/project-dynamic-nft.png'
    techStack: ['React', 'Vite', 'Material-UI', 'RaibowKit Wagami Viem Ethers.js', 'Hardhat', 'Solidity', 'IPFS através do Pinata', 'Node.js Express PostgreSQL'], // Renomeado
    links: {
      repo: 'https://github.com/RafaelMachado1/assessment',
      // 'live' é opcional, então omitir está correto
      contract: 'https://github.com/RafaelMachado1/assessment/tree/main/blockchain/contracts', // <<-- AÇÃO: Adicione o link do contrato
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