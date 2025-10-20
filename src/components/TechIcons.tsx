// src/components/TechIcons.tsx

// Ícones importados da biblioteca (verificados)
import { 
  SiReact, SiTypescript, SiJavascript, SiSolidity, 
  SiEthereum, SiBitcoin, SiNodedotjs, SiTailwindcss,
  SiRust, SiPolygon, SiSolana, SiGit
} from "react-icons/si";

// Ícones importados dos nossos componentes locais
import { HardhatIcon } from "./icons/HardhatIcon";
import { FoundryIcon } from "./icons/FoundryIcon";

// A lista de tecnologias agora está completa e correta
const technologies = [
  { title: "React", IconComponent: SiReact },
  { title: "TypeScript", IconComponent: SiTypescript },
  { title: "JavaScript", IconComponent: SiJavascript },
  { title: "Node.js", IconComponent: SiNodedotjs },
  { title: "Rust", IconComponent: SiRust },
  { title: "Solidity", IconComponent: SiSolidity },
  { title: "Ethereum", IconComponent: SiEthereum },
  { title: "Bitcoin", IconComponent: SiBitcoin },
  { title: "Polygon", IconComponent: SiPolygon },
  { title: "Solana", IconComponent: SiSolana },
  { title: "Hardhat", IconComponent: HardhatIcon }, // Usando componente local
  { title: "Foundry", IconComponent: FoundryIcon }, // Usando componente local
  { title: "Tailwind CSS", IconComponent: SiTailwindcss },
  { title: "Git", IconComponent: SiGit },
];

export function TechIcons() {
  const iconBaseClasses = "w-9 h-9 text-gray-400 transition-all duration-300";

  return (
    <div className="flex justify-center items-center gap-x-8 gap-y-6 flex-wrap pointer-events-auto">
      {technologies.map(({ title, IconComponent }) => (
        <div key={title} title={title} className="cursor-pointer">
          <IconComponent 
            className={`${iconBaseClasses} hover:text-accent-primary hover:scale-125`} 
          />
        </div>
      ))}
    </div>
  );
}