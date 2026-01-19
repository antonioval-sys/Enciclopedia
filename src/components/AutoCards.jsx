import { Link } from "react-router-dom";

//* Componente AutoCard.jsx */
export default function AutoCard({ auto }) {
  const prestaciones = auto.detalles.find(
    (detalle) => detalle.categoria === "Prestaciones"
  ); /* Encontrar la categoría de prestaciones */

  const potenciaObj = prestaciones?.items.find(
    (item) => item.potencia_total
  ); /* Encontrar el objeto que contiene la potencia total */

  const potencia = potenciaObj?.potencia_total || "N/A";

  const slug = auto.nombre
    .toLowerCase()
    .replaceAll(" ", "-"); /*Crear slug a partir del nombre del auto*/

  return (
    <Link to={`/caracteristicas/${slug}`} className="card-link">
      <div className="cont-card">
        <div className="img-card">
          <img src={auto.imagen} alt={auto.nombre} />
        </div>

        <h2>{auto.nombre}</h2>

        <p>
          <strong>Potencia:</strong> {potencia}
        </p>
      </div>
    </Link> /* Cierre de Link */
  );
}

