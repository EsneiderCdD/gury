import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function MovimientoDelBate() {
  return (
    <section className="container py-5">
      <div className="row align-items-center g-5">
        {/* Columna Izquierda: Texto */}
        <div className="col-12 col-md-6">
          <span className="badge bg-warning text-dark fw-semibold mb-3">
            Activismo Real, Cambio Verdadero
          </span>
          <h1 className="display-4 fw-bold mb-4 lh-sm">
            Construyendo la Medellín que Soñamos
          </h1>
          <p className="text-secondary mb-4 fs-5">
            Comprometidos con la transformación de Medellín a través de la
            participación ciudadana y la defensa de los derechos de todos los
            habitantes.
          </p>

          <div className="d-flex flex-column flex-sm-row gap-3">
            <a href="#sumate" className="btn btn-dark btn-lg px-4 shadow-sm">
              Únete al Movimiento
            </a>
            <a
              href="#voluntariado"
              className="btn btn-outline-dark btn-lg px-4 shadow-sm"
            >
              Voluntariado
            </a>
          </div>
        </div>

        {/* Columna Derecha: Imagen */}
        <div className="col-12 col-md-6 text-center">
          <div className="position-relative d-inline-block">
            <div
              className="position-absolute top-0 start-0 translate-middle rounded-4"
              style={{
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(135deg, rgba(255, 192, 203, 0.3), rgba(147,112,219,0.2))",
                zIndex: 0,
                borderRadius: "2rem",
              }}
            ></div>

            <img
              src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
              alt="Líder comunitario"
              className="img-fluid rounded-4 shadow-lg position-relative"
              style={{
                maxHeight: "480px",
                objectFit: "cover",
                zIndex: 1,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MovimientoDelBate;
