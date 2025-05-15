import { Navbar } from "../components/Navbar";
import { Accueil } from "../components/accueil";
import { About } from "../components/about";
import { Projects } from "../components/projects";
import { MySkills } from "../components/skills";
import { Contact } from "../components/contact";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      <Navbar />

      <main>

        <Accueil />
        <About />
        <MySkills />
        <Projects />
        <Contact />

      </main>

      {/* Footer */}

      
    </div>
  );
};