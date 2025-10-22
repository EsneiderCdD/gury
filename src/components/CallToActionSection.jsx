function CallToActionSection() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            <h2 className="display-4 fw-bold text-white mb-4">
              Medellín necesita líderes con ideas claras. ¡Súmate y hagamos equipo!
            </h2>
            
            <div className="d-flex flex-column flex-md-row gap-3 justify-content-center mt-5">
              <a href="#formulario" className="btn btn-primary btn-lg px-5 py-3">
                Únete como voluntario
              </a>
              <a href="https://wa.me/" className="btn btn-outline-light btn-lg px-5 py-3">
                Contáctame por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToActionSection;

