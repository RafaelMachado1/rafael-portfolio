// src/App.tsx

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import { particlesOptions } from "./config/particles-config";

import { Header } from "./components/Header";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";
import { Footer } from "./components/Footer";

function App() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <>
      {/* Camada 0: O Plano de Fundo. Ele é renderizado primeiro e tem z-0. */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="fixed top-0 left-0 w-full h-full z-0"
      />

      {/* Camada 50: O Header. Fixo no topo e acima de tudo. */}
      <Header />

      {/* Camada 10: O Conteúdo Principal. pointer-events-none para liberar partículas */}
      <main className="relative z-10 pt-20 pointer-events-none">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* Footer FORA do <main> para garantir interatividade */}
      <div className="relative z-10 pointer-events-auto">
        <Footer />
      </div>
    </>
  );
}

export default App;