import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function MapaDelBarrio() {
  const reportes = [
    { tipo: "Denuncias", cantidad: 12, color: "danger", icon: "⚠️" },
    { tipo: "Reportes", cantidad: 8, color: "warning", icon: "📍" },
    { tipo: "Resueltos", cantidad: 5, color: "success", icon: "✅" },
  ];

  return (
    <section className="py-5 text-white">
      <div className="container">
        {/* Título y descripción */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3 text-uppercase">
            Mapa del Barrio
          </h2>
          <p className="text-white-50 mx-auto" style={{ maxWidth: "750px" }}>
            Visualiza denuncias, reportes y soluciones ciudadanas en tu sector.
            Esta herramienta permite conocer el pulso de la comunidad y
            fortalecer la participación ciudadana.
          </p>
        </div>

        {/* Contenedor principal: mapa + panel lateral */}
        <div className="row g-4 align-items-stretch justify-content-center px-lg-5">
          {/* Columna del mapa */}
          <div className="col-lg-8 col-md-8">
            <div
              className="ratio ratio-16x9 rounded shadow overflow-hidden"
              style={{
                height: "100%",
                minHeight: "400px",
              }}
            >
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

          {/* Columna lateral con indicadores */}
          <div className="col-lg-4 col-md-4">
            <div className="d-flex flex-column h-100 justify-content-between">
              {reportes.map((reporte, index) => (
                <div
                  key={index}
                  className="card border-0 text-center mb-4 shadow-sm bg-transparent"
                  style={{
                    borderRadius: "1rem",
                    border: `1px solid rgba(255,255,255,0.1)`,
                  }}
                >
                  <div className="card-body py-4">
                    <div
                      className="fs-1 mb-2"
                      style={{
                        textShadow: "0 0 8px rgba(255,255,255,0.2)",
                      }}
                    >
                      {reporte.icon}
                    </div>
                    <h3
                      className={`fw-bold mb-1 text-${reporte.color}`}
                      style={{ fontSize: "2rem" }}
                    >
                      {reporte.cantidad}
                    </h3>
                    <p className="text-white-50 fw-semibold mb-0">
                      {reporte.tipo}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Texto final y botón */}
        <div className="row mt-5 justify-content-center">
          <div className="col-lg-8 text-center">
            <p className="text-white-50 mb-4">
              Los puntos del mapa representan denuncias ciudadanas, reportes de
              obras y casos resueltos en los diferentes barrios de Medellín.
              Próximamente podrás filtrar por comuna, tipo de incidente o fecha
              para seguir el progreso de tu comunidad.
            </p>
            <button className="btn btn-primary btn-lg px-5 shadow-sm">
              Ver todos los reportes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MapaDelBarrio;
