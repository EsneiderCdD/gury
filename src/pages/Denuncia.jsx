import React from 'react'
import FormularioDenuncia from '../components/FormularioDenuncia'
import Footer from '../components/Footer'

function Denuncia() {
  return (
    <>
      <section className="py-4 text-center">
        <div className="container">
          <h1 className="display-6 fw-bold text-white">Denuncia Ciudadana</h1>
          <p className="text-white-50 mx-auto" style={{ maxWidth: '720px' }}>
            Reporta una situación de tu barrio para activar seguimiento y priorizar soluciones. Los datos se usan solo para contacto.
          </p>
        </div>
      </section>
      <FormularioDenuncia />
      <Footer />
    </>
  )
}

export default Denuncia