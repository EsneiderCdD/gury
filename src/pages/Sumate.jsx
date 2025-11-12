import React from 'react'
import FormularioSumate from '../components/FormularioSumate'
import Footer from '../components/Footer'

function Sumate() {
  return (
    <>
      <section className="py-4 text-center">
        <div className="container">
          <h1 className="display-6 fw-bold text-white">Súmate al Movimiento</h1>
          <p className="text-white-50 mx-auto" style={{ maxWidth: '720px' }}>
            Completa el formulario para unirte y apoyar las acciones ciudadanas. Nos pondremos en contacto contigo.
          </p>
        </div>
      </section>

      <FormularioSumate />
      <Footer />
    </>
  )
}

export default Sumate