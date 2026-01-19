export default function HistoriaCard({ historia }) {
  return (
    // Contenedor principal de la tarjeta de historia
    <div className="historia-card">

      {/* Sección del año del evento histórico */}
      <div className="year">
        <span className="year-text">
          {historia.year} {/* Año del acontecimiento */}
        </span>
      </div>

      {/* Contenido principal de la historia */}
      <div className="historia-content">

        {/* Título corto o encabezado de la historia */}
        <span className="historia-title">
          {historia.titulo}
        </span>

        {/* Nombre principal del evento o personaje */}
        <h2 className="historia-title">
          {historia.nombre}
        </h2>

        {/* Contenedor de la imagen y la descripción */}
        <div className="historia-image">

          {/* Imagen representativa del evento histórico */}
          <img
            className="historia-img"
            data-alt="Drawing of the first steam powered vehicle by Cugnot"
            src={historia.imagen} // Ruta de la imagen
          />

          {/* Sección descriptiva debajo o sobre la imagen */}
          <div className="historia-description">

            {/* Contenedor de la categoría */}
            <div className="historia-desc-content">
              <span className="historia-desc-span">
                {historia.categoria} {/* Categoría de la historia */}
              </span>
            </div>

            {/* Texto descriptivo del evento */}
            <p className="historia-text">
              {historia.descripcion}
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}
