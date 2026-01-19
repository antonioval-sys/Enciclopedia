import { useEffect } from 'react';  // Importar useEffect
import { Link } from 'react-router-dom';  // Importa Link de react-router-dom
import AutoCard from '../components/AutoCards.jsx';
import  autos  from '../data/autos.json';


export default function Home() {

    return(
     <>
       <div className="header-section">
      <p>Modelos populares</p>
      <p>Descubre las especificaciones de los autos más impresionantes</p>
    </div>
   <div className="cards-container">
      {autos.map((auto, index) => (
        <AutoCard key={index} auto={auto} />
      ))}
    </div></>
    );
}