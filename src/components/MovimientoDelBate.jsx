import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function MovimientoDelBate() {
  const tarjetas = [
    {
      icon: "⚖️",
      title: "Juego limpio",
      description: "Reglas claras, licitaciones abiertas, cero trampa.",
    },
    {
      icon: "🏙️",
      title: "Medellín primero",
      description: "El defensor de Medellín.",
    },
    {
      icon: "📢",
      title: "Verdad sin filtro",
      description: "Denuncias con pruebas, sin tibieza.",
    },
  ];

  return (
    <section
      className="py-5 text-white position-relative"
      style={{
        backgroundImage:
          "url('https://upload.wikimedia.org/wikipedia/commons/a/a5/Metrocablemed.jpg')", // Fondo urbano de Medellín
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background:
            "linear-gradient(to bottom right, rgba(0,0,0,0.75), rgba(0,0,0,0.55))",
          backdropFilter: "blur(2px)",
        }}
      ></div>

      <div className="container position-relative py-5">
        {/* Título y subtítulo */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-uppercase mb-3">
            Movimiento del Bate — <span className="text-primary">Juego limpio, ciudad firme</span>
          </h2>
          <p
            className="lead text-white-50 mx-auto"
            style={{ maxWidth: "800px" }}
          >
            Bateamos las protestas con violencia y defendemos nuestra ciudad con carácter.
          </p>

          {/* Botones CTA */}
          <div className="d-flex flex-column flex-md-row gap-3 justify-content-center mt-4">
            <a href="#sumate" className="btn btn-primary btn-lg px-5 py-3 shadow">
              Súmate
            </a>
            <a
              href="#denuncia"
              className="btn btn-outline-light btn-lg px-5 py-3 shadow"
            >
              Denuncia con evidencias
            </a>
          </div>
        </div>

        {/* Tarjetas */}
        <div className="row g-4 mt-5">
          {tarjetas.map((tarjeta, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div
                className="card h-100 text-center border-0 text-white shadow-lg bg-transparent"
                style={{
                  backdropFilter: "blur(8px)",
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: "1.5rem",
                  transition: "all 0.3s ease",
                }}
              >
                <div className="card-body p-5">
                  <div
                    className="fs-1 mb-3"
                    style={{ textShadow: "0 0 8px rgba(255,255,255,0.3)" }}
                  >
                    {tarjeta.icon}
                  </div>
                  <h3 className="h4 fw-bold mb-3">{tarjeta.title}</h3>
                  <p className="text-white-50 mb-0">{tarjeta.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MovimientoDelBate;
