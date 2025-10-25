import React from "react";
import elgury from "../assets/images/elgury.webp";

function AboutSection() {
  const puntos = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", // 👔 experiencia
      texto: "Experiencia en el Concejo de Medellín.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // 🎤 vocero
      texto: "Vocero de causas ciudadanas sin filtro.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135789.png", // 🚀 líder joven
      texto: "Líder joven con visión de futuro.",
    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Columna izquierda - Imagen */}
          <div className="col-lg-6">
            <div className="position-relative">
              <img
                src={elgury}
                alt="Gury"
                className="img-fluid rounded shadow mx-auto d-block"
                style={{
                  filter: "brightness(0.9)",
                  width: "65%",
                  height: "auto",
                }}
              />

            </div>
          </div>

          {/* Columna derecha - Texto + iconos */}
          <div className="col-lg-6 text-center text-lg-start">
            <h2 className="display-5 fw-bold text-white mb-4">¿Quién soy?</h2>
            <p className="text-white-50 mb-5">
              Soy un líder comprometido con Medellín, dedicado a representar las voces
              que necesitan ser escuchadas. Mi trabajo se basa en la transparencia,
              el diálogo directo con la ciudadanía y la búsqueda constante de soluciones
              reales para nuestra ciudad.
            </p>

            {/* 🔹 Nueva fila de íconos con texto */}
            <div className="row justify-content-center justify-content-lg-start g-4 mb-4">
              {puntos.map((punto, index) => (
                <div
                  key={index}
                  className="col-12 col-md-4 text-center text-lg-start"
                >
                  <div className="d-flex flex-column align-items-center align-items-lg-start">
                    <div
                      className="bg-light bg-opacity-10 rounded-circle d-flex justify-content-center align-items-center mb-3"
                      style={{
                        width: "70px",
                        height: "70px",
                        boxShadow: "0 0 10px rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      <img
                        src={punto.icon}
                        alt="icono"
                        style={{ width: "40px", height: "40px" }}
                      />
                    </div>
                    <p className="text-white small mb-0">{punto.texto}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="btn btn-primary btn-lg">Conoce mi historia</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
