import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import gury from "../assets/images/gury.jpg";
import "./MovimientoDelBate.css";
import gury2 from "../assets/images/gury2.png";
import gury3 from "../assets/images/gury3.png";
import gury4 from "../assets/images/gury4.png";



function MovimientoDelBate() {
  const slides = [
    {
      image: gury,
      title: "Construyendo la Medellín que Soñamos",
      badges: ["Transformación", "Participación", "Activismo", "Acción"],
      description:
        "Comprometidos con la transformación de Medellín a través de la participación ciudadana y la defensa de los derechos de todos los habitantes.",
      manifest:
        "¡Construyamos, soñemos y levantemos el país juntos! ",
      actions: [
        { label: "Únete al Movimiento", href: "#sumate", variant: "primary" },
       
      ],
    },
    {
      image: gury2,
      title: "Medellín participa",
      badges: ["Participación"],
      description:
        "Fortalecemos juntas y juntas los mecanismos de participación para que la voz del barrio llegue a decisiones reales.",
      manifest: "Juntos decidimos, juntos construimos.",
      actions: [
      
      ],
    },
    {
      image: gury3,
      title: "Barrios con futuro",
      description:
        "Impulsamos proyectos de desarrollo comunitario con infraestructura y cultura que abran oportunidades.",
      manifest: "El futuro se construye desde la cuadra.",
      actions: [],
    },
    {
      image: gury4,
      title: "Red de apoyo ciudadano",
      badges: ["Acción"],
      description:
        "Conectamos personas, organizaciones y recursos para que la ayuda llegue donde más se necesita.",
      actions: [
        { label: "Únete al Movimiento", href: "#sumate", variant: "primary" },
      ],
    },
  ];
  const images = slides.map((s) => s.image);
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  // Posiciones y rotaciones fijas para efecto "collage"
  const placements = [
    { x: -30, y: -10, rotate: -6, scale: 0.92 },
    { x: 20, y: -5, rotate: 5, scale: 0.9 },
    { x: -10, y: 18, rotate: -3, scale: 0.88 },
    { x: 28, y: 14, rotate: 8, scale: 0.86 },
  ];

  return (
    <section className="py-5 mov-bate-section">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Columna Izquierda: Texto */}
          <div className="col-12 col-md-6">
            <h1 className="display-5 fw-bold text-white lh-sm mov-bate-title">
              {slides[current].title}
            </h1>
            
            {slides[current].badges && slides[current].badges.length > 0 && (
              <div className="d-flex flex-wrap gap-2 mov-bate-badges">
                {slides[current].badges.map((b, i) => (
                  <span
                    key={i}
                    className="badge fw-semibold px-3 py-2 rounded-pill mov-bate-badge"
                    style={{ backgroundColor: i % 2 === 0 ? "#1e3a8a" : "#38bdf8", color: i % 2 === 0 ? "#fff" : "#111" }}
                  >
                    {b}
                  </span>
                ))}
              </div>
            )}
            <p className="text-white-50 fs-5 mov-bate-desc">
              {slides[current].description}
            </p>
            {slides[current].manifest && (
              <p className="text-white fw-semibold fs-5 mov-bate-manifest">
                {slides[current].manifest}
              </p>
            )}

            {slides[current].actions && slides[current].actions.length > 0 && (
              <div className="d-flex flex-column flex-sm-row gap-3 mov-bate-actions">
                {slides[current].actions.map((a, i) => (
                  <a
                    key={i}
                    href={a.href}
                    className={`btn ${a.variant === "primary" ? "btn-primary" : "btn-outline-light"} btn-lg px-4 shadow-sm`}
                  >
                    {a.label}
                  </a>
                ))}
              </div>
            )}
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
                  const place = placements[i % placements.length];
                  const active = i === current;
                  const zIndex = active ? 100 : 10 + i; // activa al frente sin mover
                  return (
                    <img
                      key={i}
                      src={src}
                      alt={`Movimiento ${i + 1}`}
                      className={`stack-img ${active ? "active" : ""}`}
                      style={{
                        transform: `translate(-50%, 0) translate(${place.x}px, ${place.y}px) rotate(${place.rotate}deg) scale(${place.scale})`,
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