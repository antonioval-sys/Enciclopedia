import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react'
import './style.css'
import Foot from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import LineaTiempo from './pages/LineaTiempo.jsx';
import Caracteristicas from './pages/Caracteristicas.jsx';

function App() {


  return (
    <>
      <Navbar/>
      <Routes>
         <Route path="/" element={<Home />} />  {/* Ruta alternativa para inicio */}
        <Route path="/inicio" element={<Home />} />  {/* Ruta alternativa para inicio */}
         <Route path="/linea-de-tiempo" element={<LineaTiempo />} />  {/* Ruta alternativa para inicio */}
         <Route path="/caracteristicas/:slug" element={<Caracteristicas />} />
      </Routes>
      <Foot />
      </>
  )
}

export default App
