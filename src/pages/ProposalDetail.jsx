import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProposalBySlug } from '../assets/data/proposals'
import '../components/ProposalSection.css'

function ProposalDetail() {
  const { slug } = useParams()
  const proposal = getProposalBySlug(slug)

  if (!proposal) {
    return (
      <section className="py-5 text-white w-100 proposals-section">
        <div className="container text-center">
          <h2 className="display-6 fw-bold proposals-section-title">Propuesta no encontrada</h2>
          <Link to="/propuestas" className="btn btn-outline-light mt-3">
            Volver al listado
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="py-5 text-white w-100 proposals-section">
      <div className="container">
        <div className="row g-4 align-items-stretch">
          <div className="col-lg-6">
            <div className="card h-100 border-0 shadow-lg text-white position-relative overflow-hidden proposal-card">
              <img
                src={proposal.image}
                className="card-img h-100 object-fit-cover proposal-card-img"
                alt={proposal.title}
              />
              <div className="card-img-overlay d-flex flex-column justify-content-end p-4 proposal-card-overlay">
                <h1 className="display-6 fw-bold mb-2 proposals-section-title">{proposal.title}</h1>
                <span className="badge text-bg-light bg-opacity-25 align-self-start">{proposal.category}</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex">
            <div className="bg-transparent border-0 text-white w-100 d-flex flex-column">
              <p className="fs-6 lh-lg text-white-50 proposal-card-text" style={{ textAlign: 'justify' }}>
                {proposal.description}
              </p>
              <p className="fs-6 lh-lg text-white-50" style={{ textAlign: 'justify' }}>
                Aquí se muestra el texto completo de la propuesta. Mantiene las medidas y el estilo del proyecto, en un único viewport para facilitar la lectura y conservar el branding.
              </p>
              <div className="mt-3">
                <Link to="/propuestas" className="btn btn-outline-light">
                  Volver al listado
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProposalDetail