import React from 'react'
import { Link } from 'react-router-dom'
import { proposals } from '../assets/data/proposals'
import '../components/ProposalSection.css'
import Footer from '../components/Footer'

function ProposalsDashboard() {
  const categories = Array.from(new Set(proposals.map((p) => p.category)))

  return (
    <>
      <section className="py-5 text-white w-100 proposals-section">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="display-5 fw-bold mb-2 proposals-section-title">Propuestas</h2>
            <p className="text-white-50 mx-auto" style={{ maxWidth: '700px' }}>
              Explora las categorías y consulta cada propuesta en detalle.
            </p>
          </div>

          <div className="mb-4 d-flex flex-wrap gap-2 justify-content-center">
            {categories.map((cat) => (
              <span key={cat} className="badge text-bg-light bg-opacity-25">
                {cat}
              </span>
            ))}
          </div>

          <div className="row g-4">
            {proposals.map((proposal) => (
              <div key={proposal.slug} className="col-lg-3 col-md-6">
                <div className="card h-100 border-0 shadow-lg text-white position-relative overflow-hidden proposal-card">
                  <img
                    src={proposal.image}
                    className="card-img h-100 object-fit-cover proposal-card-img"
                    alt={proposal.title}
                  />
                  <div className="card-img-overlay d-flex flex-column justify-content-end p-4 proposal-card-overlay">
                    <h5 className="card-title fw-bold proposal-card-title">{proposal.title}</h5>
                    <p className="card-text small text-white-50 mb-3 proposal-card-text">
                      {proposal.description}
                    </p>
                    <Link to={`/propuestas/${proposal.slug}`} className="btn btn-outline-light btn-sm align-self-start">
                      Leer más
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default ProposalsDashboard