// src/data/projects.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  linkRepo: string;
  linkLive?: string; // O link para o deploy é opcional
}

export const projectData: Project[] = [
  {
    id: 1,
    title: "Protocolo DeFi de Empréstimo",
    description: "Um protocolo descentralizado para empréstimos de criptoativos com taxas de juros variáveis, construído na rede de testes Sepolia.",
    technologies: ["Solidity", "Hardhat", "React", "Ethers.js"],
    linkRepo: "https://github.com/seu-usuario/repo-defi",
    linkLive: "https://meu-protocolo-defi.vercel.app",
  },
  {
    id: 2,
    title: "Galeria de NFTs Dinâmicos",
    description: "Uma aplicação que exibe NFTs cujos metadados mudam com base em dados de oráculos on-chain, como o preço do ETH.",
    technologies: ["Next.js", "Tailwind CSS", "Thirdweb", "Chainlink"],
    linkRepo: "https://github.com/seu-usuario/repo-nft-gallery",
  },
  {
    id: 3,
    title: "Sistema de Votação com DAO",
    description: "Implementação de um sistema de governança on-chain onde detentores de tokens podem criar e votar em propostas.",
    technologies: ["Foundry", "Solidity", "Tally", "TypeScript"],
    linkRepo: "https://github.com/seu-usuario/repo-dao",
    linkLive: "https://minha-dao.xyz",
  },
];