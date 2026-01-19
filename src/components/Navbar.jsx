import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Enciclopedia Automotriz</div>

      {/* BOTÓN HAMBURGUESA */}
      <button
        className="menu-btn"
        onClick={() => setOpen(!open)}
        aria-label="Menú"
      >
        ☰
      </button>

      {/* LINKS */}
      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li><Link to="/inicio" onClick={() => setOpen(false)}>Inicio</Link></li>
        <li><a href="#autos" onClick={() => setOpen(false)}>Autos</a></li>
        <li><a href="#marcas" onClick={() => setOpen(false)}>Marcas</a></li>
        <li><Link to="/linea-de-tiempo" onClick={() => setOpen(false)}>Línea del tiempo</Link></li>
      </ul>
    </nav>
  );
}