import React from "react";
import "./AboutSection.css";

function AboutSection() {
  const puntos = [
    {
      icon: "https://cdn-icons-png.flaticon.com/128/10562/10562868.png", // 🏛️ concejo/gobierno
      texto: "Experiencia en el Concejo de Medellín.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/128/7152/7152226.png", // 📣 vocero/megáfono
      texto: "Vocero de causas ciudadanas sin filtro.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/814/814513.png", // 💡 visión de futuro
      texto: "Líder joven con visión de futuro.",
    },
  ];

  return (
    <section className="py-5 about-section">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Columna izquierda - Imagen */}
          <div className="col-lg-6">
            <div className="position-relative"></div>
          </div>

          {/* Columna derecha - Texto + iconos */}
          <div className="col-lg-6 text-center text-lg-start">
            <h2 className="display-5 fw-bold text-white mb-4 about-section-title">El Gury</h2>
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
                    <div className="bg-light bg-opacity-10 rounded-circle d-flex justify-content-center align-items-center mb-3 about-section-icons-circle">
                      <img src={punto.icon} alt="icono" className="about-section-icon-img" />
                      </div>
                    <p className="text-white small mb-0">{punto.texto}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
              <button className="btn btn-primary btn-lg">Conoce mi historia</button>
              <a href="/calendario" className="btn btn-outline-light btn-lg">Eventos/Calendario</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
