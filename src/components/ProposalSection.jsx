import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ProposalsSection() {
  const proposals = [

    
    
    {
      image: "https://i.pinimg.com/1200x/aa/96/a9/aa96a9de603060c5ce985c1a1bca911b.jpg",       
      title: "Seguridad inteligente",
      description:
        "Tecnología, cámaras y colaboración ciudadana para reducir la criminalidad y garantizar tranquilidad en cada barrio.",
    },
    {
      image: "https://i.pinimg.com/736x/e4/0d/6c/e40d6c129b0c583edb9c2368f2dfc747.jpg",       
      title: "Movilidad eficiente",
      description:
        "Un sistema de transporte integrado, accesible y sostenible que conecta a todos los medellinenses.",
    },
    {
      image: "https://i.pinimg.com/736x/fe/3f/ed/fe3fed849eb80f5c3be4b1687b2a7aa3.jpg",           // ← reemplaza aquí
      title: "Obras con impacto",
      description:
        "Infraestructura moderna que impulsa el desarrollo urbano y mejora la calidad de vida de las comunidades.",
    },
    {
      image: "https://i.pinimg.com/736x/31/5a/b9/315ab96da03cea7aacd84f8644de903d.jpg",        // ← reemplaza aquí
      title: "Justicia social",
      description:
        "Una ciudad más equitativa donde las oportunidades lleguen a todos, sin distinción ni privilegios.",
    },
  ];

  return (
    <section className="py-5 text-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Propuestas para Medellín</h2>
          <p className="text-white-50 mx-auto" style={{ maxWidth: "700px" }}>
            Trabajamos en soluciones reales que transforman nuestra ciudad. Estas son algunas de las propuestas que impulsan el desarrollo y bienestar de todos los ciudadanos.
          </p>
        </div>

        <div className="row g-4">
          {proposals.map((proposal, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="card h-100 border-0 shadow-lg text-white position-relative overflow-hidden">
                <img
                  src={proposal.image}
                  className="card-img h-100 object-fit-cover"
                  alt={proposal.title}
                  style={{ minHeight: "350px", filter: "brightness(60%)" }}
                />
                <div className="card-img-overlay d-flex flex-column justify-content-end p-4" style={{ background: "rgba(0,0,0,0.3)" }}>
                  <h5 className="card-title fw-bold">{proposal.title}</h5>
                  <p className="card-text small text-white-50 mb-3">{proposal.description}</p>
                  <a href="#" className="btn btn-outline-light btn-sm align-self-start">
                    Leer más
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <button className="btn btn-primary btn-lg shadow">
            Lee todas mis propuestas
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProposalsSection;
