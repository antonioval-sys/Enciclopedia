export default function AutoList({ list }) {
  return (
    <div className="cont-carac">
      {/* Imagen y nombre */}
      <div className="img-carac">
        <img src={list.imagen} alt={list.nombre} />
      </div>
      <h2>{list.nombre}</h2>

      {/* Detalles: recorremos cada categoría */}
      {list.detalles.map((detalle, index) => (
        <div key={index} className="detalle-categoria">
          <h3>{detalle.categoria}</h3>
          <ul>
            {detalle.items.map((item, idx) => {
              // Cada item es un objeto con una sola propiedad
              const key = Object.keys(item)[0];
              const value = item[key];
              return <li key={idx}><strong>{key.replaceAll("_", " ")}:</strong> {value}</li>;
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}