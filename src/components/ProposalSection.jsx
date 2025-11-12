import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProposalSection.css";
import { Link } from "react-router-dom";
import { proposals } from "../assets/data/proposals";

function ProposalsSection() {

  return (
    <section className="py-5 text-white w-100" style={{ backgroundColor: "rgba(20, 20, 20, 0.6)" }}>
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
              <div className="card h-100 border-0 shadow-lg text-white position-relative overflow-hidden proposal-card">
                <img
                  src={proposal.image}
                  className="card-img h-100 object-fit-cover proposal-card-img"
                  alt={proposal.title}
                  style={{ minHeight: "350px", filter: "brightness(60%)" }}
                />
                <div className="card-img-overlay d-flex flex-column justify-content-end p-4" style={{ background: "rgba(0,0,0,0.3)" }}>
                  <h5 className="card-title fw-bold proposal-card-title">{proposal.title}</h5>
                  <p className="card-text small text-white-50 mb-3 proposal-card-text">{proposal.description}</p>
                  <Link to={`/propuestas/${proposal.slug}`} className="btn btn-outline-light btn-sm align-self-start">
                    Leer
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4 mb-0 proposals-section-cta">
          <Link to="/propuestas" className="btn btn-outline-light btn-lg proposals-section-cta-btn">
            Conocer todas las propuestas
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProposalsSection;
