import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import gury from "../assets/images/gury.jpg";

function MovimientoDelBate() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Columna Izquierda: Texto */}
          <div className="col-12 col-md-6">
            <span className="badge bg-primary text-white fw-semibold mb-3 px-3 py-2">
              Activismo Real, Cambio Verdadero
            </span>
            <h1 className="display-5 fw-bold text-white mb-4 lh-sm">
              Construyendo la Medellín que Soñamos
            </h1>
            <p className="text-white-50 mb-4 fs-5">
              Comprometidos con la transformación de Medellín a través de la
              participación ciudadana y la defensa de los derechos de todos los
              habitantes.
            </p>

            <div className="d-flex flex-column flex-sm-row gap-3">
              <a href="#sumate" className="btn btn-primary btn-lg px-4 shadow-sm">
                Únete al Movimiento
              </a>
              
                <a href="#voluntariado"
                className="btn btn-outline-light btn-lg px-4 shadow-sm"
              >
                Voluntariado
              </a>
            </div>
          </div>

          {/* Columna Derecha: Imagen */}
          <div className="col-12 col-md-6 text-center">
            <div className="position-relative d-inline-block">
              {/* Capa decorativa de fondo */}
              <div
                className="position-absolute rounded"
                style={{
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(135deg, rgba(13, 110, 253, 0.15), rgba(13, 110, 253, 0.25))",
                  top: "15px",
                  left: "15px",
                  zIndex: 0,
                  transform: "rotate(-2deg)",
                  borderRadius: "0.5rem"
                }}
              ></div>

              <img
                src={gury}
                alt="Líder comunitario"
                className="img-fluid rounded shadow-lg position-relative"
                style={{
                  maxHeight: "480px",
                  objectFit: "cover",
                  zIndex: 1,
                  filter: "brightness(0.9)"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MovimientoDelBate;