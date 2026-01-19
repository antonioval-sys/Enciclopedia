import { useParams } from "react-router-dom";
import AutoList from "../components/AutoList";
import autos from "../data/autos.json";

export default function Caracteristicas() {
  const { slug } = useParams(); /* Obtener el parámetro slug de la URL */

  const autoSeleccionado = autos.find( /* Encontrar el auto por slug */
    auto =>
      auto.nombre.toLowerCase().replaceAll(" ", "-") === slug /* Encontrar el auto por slug */
  );

  if (!autoSeleccionado) { /* Manejar caso donde no se encuentra el auto */
    return <h2>Auto no encontrado</h2>;
  }

  return <AutoList list={autoSeleccionado} />; /* Usar AutoList para mostrar detalles del auto seleccionado */
}
