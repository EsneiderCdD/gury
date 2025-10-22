function FormularioSumate() {
  return (
    <section className="py-5" id="sumate">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold text-white mb-3">Súmate al Movimiento</h2>
              <p className="text-white-50 mx-auto" style={{ maxWidth: '600px' }}>
                Únete a nuestra causa y ayuda a construir la Medellín que todos soñamos. 
                Juntos somos más fuertes.
              </p>
            </div>

            <div className="bg-dark bg-opacity-25 rounded p-4 p-md-5">
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="nombre" className="form-label text-white">Nombre completo</label>
                    <input 
                      type="text" 
                      className="form-control form-control-lg" 
                      id="nombre" 
                      placeholder="Tu nombre"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="whatsapp" className="form-label text-white">WhatsApp</label>
                    <input 
                      type="tel" 
                      className="form-control form-control-lg" 
                      id="whatsapp" 
                      placeholder="300 123 4567"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="barrio" className="form-label text-white">Barrio</label>
                    <input 
                      type="text" 
                      className="form-control form-control-lg" 
                      id="barrio" 
                      placeholder="Tu barrio"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="rol" className="form-label text-white">¿Cómo quieres apoyar?</label>
                    <select className="form-select form-select-lg" id="rol" required>
                      <option value="">Selecciona una opción</option>
                      <option value="voluntario">Voluntario en marchas</option>
                      <option value="difusion">Difusión en redes</option>
                      <option value="logistica">Apoyo logístico</option>
                      <option value="denuncias">Reportar denuncias</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label htmlFor="mensaje" className="form-label text-white">Mensaje (opcional)</label>
                    <textarea 
                      className="form-control" 
                      id="mensaje" 
                      rows="3" 
                      placeholder="Cuéntanos por qué quieres sumarte..."
                    ></textarea>
                  </div>

                  <div className="col-12 mt-4">
                    <div className="d-grid gap-3">
                      <button type="submit" className="btn btn-primary btn-lg">
                        Enviar
                      </button>
                      <a 
                        href="https://wa.me/573001234567?text=Hola,%20quiero%20sumarme%20al%20Movimiento%20del%20Bate" 
                        className="btn btn-success btn-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="me-2">💬</span>
                        Escríbenos al WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormularioSumate;

