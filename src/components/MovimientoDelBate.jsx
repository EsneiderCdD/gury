import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import gury from "../assets/images/gury.jpg";
import "./MovimientoDelBate.css";

function MovimientoDelBate() {
  const images = [
    gury,
    "https://i.pinimg.com/736x/03/14/2b/03142b0032304db6885ea105a63b5f4e.jpg",
    "https://i.pinimg.com/736x/fe/3f/ed/fe3fed849eb80f5c3be4b1687b2a7aa3.jpg",
    "https://i.pinimg.com/736x/e4/0d/6c/e40d6c129b0c583edb9c2368f2dfc747.jpg",
  ];
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <section className="py-5 mov-bate-section">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Columna Izquierda: Texto */}
          <div className="col-12 col-md-6">
            <h1 className="display-5 fw-bold text-white lh-sm mov-bate-title">
              Construyendo la Medellín que Soñamos
            </h1>
            
            <div className="d-flex flex-wrap gap-2 mov-bate-badges">
              <span className="badge text-white fw-semibold px-3 py-2 rounded-pill mov-bate-badge" style={{ backgroundColor: "#1e3a8a" }}>
              Transformación
              </span>
              <span className="badge text-dark fw-semibold px-3 py-2 rounded-pill mov-bate-badge" style={{ backgroundColor: "#38bdf8" }}>
                Participación
              </span>
              <span className="badge text-dark fw-semibold px-3 py-2 rounded-pill mov-bate-badge" style={{ backgroundColor: "#fbbf24" }}>
                Activismo
              </span>
              <span className="badge text-white fw-semibold px-3 py-2 rounded-pill mov-bate-badge" style={{ backgroundColor: "#dc2626" }}>
                Acción
              </span>
            </div>
            <p className="text-white-50 fs-5 mov-bate-desc">
              Comprometidos con la transformación de Medellín a través de la
              participación ciudadana y la defensa de los derechos de todos los
              habitantes.
            </p>
            <p className="text-white fw-semibold fs-5 mov-bate-manifest">
              ¡Construyamos, soñemos y levantemos el país juntos! 
            </p>

            <div className="d-flex flex-column flex-sm-row gap-3 mov-bate-actions">
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

          {/* Columna Derecha: Stack de imágenes con controles */}
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <div className="image-stack-wrapper position-relative">
              <button
                type="button"
                className="btn btn-outline-light stack-nav-btn stack-nav-btn-left"
                onClick={prev}
                aria-label="Imagen anterior"
              >
                &#x2039;
              </button>
              <div className="image-stack">
                {images.map((src, i) => {
                  const offset = i - current;
                  const rotation = offset * 4; // leve rotación por posición
                  const translateY = offset * 12; // efecto de profundidad
                  const scale = 1 - Math.min(Math.abs(offset) * 0.06, 0.18);
                  const zIndex = images.length - Math.abs(offset);
                  const active = i === current;
                  return (
                    <img
                      key={i}
                      src={src}
                      alt={`Movimiento ${i + 1}`}
                      className={`stack-img ${active ? "active" : ""}`}
                      style={{
                        transform: `translateX(-50%) translateY(${translateY}px) rotate(${rotation}deg) scale(${scale})`,
                        zIndex,
                      }}
                    />
                  );
                })}
              </div>
              <button
                type="button"
                className="btn btn-outline-light stack-nav-btn stack-nav-btn-right"
                onClick={next}
                aria-label="Imagen siguiente"
              >
                &#x203A;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MovimientoDelBate;