import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <section className="py-5 bg-dark text-white position-relative">
      <div className="container position-relative">
        {/* Título y descripción */}
        <div className="text-center mb-5">
    
          <h2 className="display-5 fw-bold mb-3">Mapa del Barrio</h2>
          <p className="text-white-50 mx-auto" style={{ maxWidth: "650px" }}>
            Visualiza en tiempo real las denuncias, reportes y soluciones
            ciudadanas. Tu voz importa y cada reporte cuenta para construir un
            mejor Medellín.
          </p>
        </div>

        {/* Bloque principal: texto + mapa */}
        <div className="row g-4 align-items-center mb-5">
          {/* Columna izquierda - Información */}
          <div className="col-lg-5">
            <h3 className="h4 fw-bold mb-4">
              ¿Cómo funciona el Mapa del Barrio?
            </h3>

            <div className="mb-4">
              {[
                {
                  paso: "1",
                  titulo: "Reporta situaciones",
                  texto: "Los ciudadanos reportan problemas en su barrio",
                },
                {
                  paso: "2",
                  titulo: "Seguimiento activo",
                  texto: "Damos seguimiento y gestionamos soluciones",
                },
                {
                  paso: "3",
                  titulo: "Resultados visibles",
                  texto: "Marcamos los casos resueltos en el mapa",
                },
              ].map((item, i) => (
                <div className="d-flex align-items-start mb-3" key={i}>
                  <span
                    className="badge bg-primary rounded-circle me-3"
                    style={{
                      width: "35px",
                      height: "35px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {item.paso}
                  </span>
                  <div>
                    <h6 className="text-white mb-1">{item.titulo}</h6>
                    <p className="text-white-50 small mb-0">{item.texto}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="btn btn-primary btn-lg w-100 shadow-sm">
              Reportar un problema
            </button>
          </div>

          {/* Columna derecha - Mapa */}
          <div className="col-lg-7">
            <div className="position-relative">
              <div
                className="position-absolute rounded"
                style={{
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(135deg, rgba(13, 110, 253, 0.15), rgba(13, 110, 253, 0.25))",
                  top: "15px",
                  left: "15px",
                  zIndex: 0,
                  transform: "rotate(-1deg)",
                  borderRadius: "1rem",
                }}
              ></div>

              <div
                className="ratio ratio-16x9 rounded shadow-lg overflow-hidden position-relative"
                style={{
                  minHeight: "350px",
                  zIndex: 1,
                  borderRadius: "1rem",
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
          </div>
        </div>

        {/* 🔹 Tarjetas de estadísticas (reubicadas debajo del mapa) */}
        <div className="row g-3 mb-5 justify-content-center">
          {reportes.map((reporte, index) => (
            <div key={index} className="col-lg-2 col-md-3 col-sm-6 text-center">
              <div className="d-flex flex-column align-items-center">
                <div
                  className="bg-light bg-opacity-10 rounded-circle d-flex justify-content-center align-items-center mb-3"
                  style={{
                    width: "70px",
                    height: "70px",
                    boxShadow: "0 0 10px rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <img
                    src={reporte.icon}
                    alt={reporte.tipo}
                    style={{ width: "40px", height: "40px", objectFit: "contain" }}
                  />
                </div>
                <h4 className={`fw-bold text-${reporte.color} mb-1 fs-5`}>
                  {reporte.cantidad}
                </h4>
                <h6 className="text-white fw-semibold mb-1 small">{reporte.tipo}</h6>
                <p className="text-white-50 mb-0" style={{ fontSize: "0.75rem" }}>{reporte.descripcion}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Texto final centrado */}
        <div className="row mt-5">
          <div className="col-lg-8 mx-auto text-center">
            <p className="text-white-50 mb-4">
              Cada punto en el mapa representa una historia, una necesidad, una
              solución. Juntos estamos construyendo una Medellín más transparente
              donde cada voz cuenta y cada problema tiene seguimiento.
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <button className="btn btn-outline-light btn-lg px-4">
                Ver historial completo
              </button>
              <button className="btn btn-primary btn-lg px-4">
                Súmate como veedor
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MapaDelBarrio;
