import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/header.jsx'
import Accueil from './components/accueil.jsx'
import Presentation from './components/presentation.jsx'
import Projet from './components/projet.jsx'
import Album from './components/album.jsx'


function App(){
  return (
    <BrowserRouter>
    <Header></Header>
      <Routes>
          <Route path='/' element={<Accueil />}></Route>
          <Route path='/presentation' element={<Presentation />}></Route>
          <Route path = '/projet' element={<Projet />}></Route>
          <Route path = '/album' element={<Album />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;