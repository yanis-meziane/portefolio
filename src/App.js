import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./components/accueil.jsx";
import { Navbar } from "./components/header.jsx"; // importe ton header
import { About } from "./components/about";
import { Competence } from "./components/competences.jsx";
import { Projet } from "./components/projet.jsx";
import { Contact } from "./components/contact.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Accueil />} />
        </Routes>

          <About />
          <Competence />
          <Projet />
          <Contact />



      </BrowserRouter>
    </>
  );
}

export default App;
