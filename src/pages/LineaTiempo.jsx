import { Link } from 'react-router-dom';  // Importa Link de react-router-dom
import HistoriaCard from '../components/HistoriaCard.jsx';
import  data  from '../data/AutoHistoria.json';


export default function LineaTiempo() {

    return(
     <>
    <div className="section-historia">
  <div className="header-historia">
    <h2>Historia del Automóvil</h2>
  </div>
 <div className="timeline-line"></div>
  <div className="historia-container">
    {data.AutoHistoria.map((historia, index) => (
      <HistoriaCard key={index} historia={historia} />
    ))}
  </div>
</div></>
    );
}