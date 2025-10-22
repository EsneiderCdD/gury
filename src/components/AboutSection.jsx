function AboutSection() {
    return (
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-4">
            {/* Columna izquierda - Imagen */}
            <div className="col-lg-6">
              <div className="position-relative">
                <img 
                  src="/src/assets/images/Hero.png" 
                  alt="Gury" 
                  className="img-fluid rounded"
                  style={{
                    filter: 'brightness(0.9)',
                    width: '100%',
                    height: 'auto'
                  }}
                />
              </div>
            </div>
  
            {/* Columna derecha - Texto */}
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold text-white mb-4">¿Quién soy?</h2>
              <p className="text-white-50 mb-4">
                Soy un líder comprometido con Medellín, dedicado a representar las voces 
                que necesitan ser escuchadas. Mi trabajo se basa en la transparencia, 
                el diálogo directo con la ciudadanía y la búsqueda constante de soluciones 
                reales para nuestra ciudad.
              </p>
  
              {/* Lista de puntos destacados */}
              <ul className="list-unstyled mb-4">
                <li className="d-flex align-items-start mb-3">
                  <span className="text-success me-2 fs-5">✔️</span>
                  <span className="text-white">Experiencia en el Concejo de Medellín.</span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <span className="text-success me-2 fs-5">✔️</span>
                  <span className="text-white">Vocero de causas ciudadanas sin filtro.</span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <span className="text-success me-2 fs-5">✔️</span>
                  <span className="text-white">Líder joven con visión de futuro.</span>
                </li>
              </ul>
  
              <button className="btn btn-primary btn-lg">Conoce mi historia</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default AboutSection;