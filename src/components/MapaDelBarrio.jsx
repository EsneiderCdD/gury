import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MapaDelBarrio.css";

function MapaDelBarrio() {
  const reportes = [
    {
      tipo: "Denuncias Activas",
      cantidad: 12,
      color: "danger",
      icon: "https://cdn-icons-png.flaticon.com/512/564/564619.png",
      descripcion: "Casos reportados por la comunidad",
    },
    {
      tipo: "En Seguimiento",
      cantidad: 8,
      color: "warning",
      icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
      descripcion: "Situaciones bajo revisión",
    },
    {
      tipo: "Resueltos",
      cantidad: 5,
      color: "success",
      icon: "https://cdn-icons-png.flaticon.com/512/845/845646.png",
      descripcion: "Problemas solucionados",
    },
  ];

  return (
    <section className="py-4 mapa-del-barrio-section text-white position-relative">
      {/* Título centrado fuera del contenedor */}
      {/* Título dentro del contenedor, columna izquierda */}

      <div className="container position-relative">
        {/* Escenario integrado: panel + mapa */}
        <div className="mapa-stage">
          {/* Panel tipo glass */}
          <div className="mapa-panel">
            <h2 className="display-5 fw-bold mb-3">Mapa del Barrio</h2>

            <h3 className="h5 fw-bold mb-3">¿Cómo funciona el Mapa del Barrio?</h3>
            <div className="mapa-steps">
              {[
                { paso: "1", titulo: "Reporta situaciones", texto: "Los ciudadanos reportan problemas en su barrio" },
                { paso: "2", titulo: "Seguimiento activo", texto: "Damos seguimiento y gestionamos soluciones" },
                { paso: "3", titulo: "Resultados visibles", texto: "Marcamos los casos resueltos en el mapa" },
              ].map((item, i) => (
                <div className="mapa-step" key={i}>
                  <span className="mapa-step-badge">{item.paso}</span>
                  <div>
                    <h6 className="text-white mb-1">{item.titulo}</h6>
                    <p className="text-white-50 small mb-0">{item.texto}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <a href="/denuncia" className="btn btn-primary btn-lg shadow-sm mapa-cta">Reportar un problema</a>
            </div>
          </div>

          {/* Mapa destacado con sombra decorativa */}
          <div className="mapa-visual">
            <div className="mapa-shadow" />
            <div className="ratio ratio-16x9 rounded shadow-lg overflow-hidden position-relative mapa-frame">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127287.0419537!2d-75.6062!3d6.2476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428dfb80fad05%3A0x42137cfcc7b53b56!2sMedell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1234567890"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Medellín"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Chips de estadísticas */}
        <div className="mapa-chips">
          {reportes.map((reporte, index) => (
            <div key={index} className="mapa-chip">
              <div className="mapa-chip-icon">
                <img src={reporte.icon} alt={reporte.tipo} />
              </div>
              <div className="mapa-chip-content">
                <strong className={`text-${reporte.color}`}>{reporte.cantidad}</strong>
                <span className="text-white-50">{reporte.tipo}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer textual removido según solicitud */}
      </div>
    </section>
  );
}

export default MapaDelBarrio;
