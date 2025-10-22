function CallToActionSection() {
  return (
    <section 
      className="position-relative d-flex align-items-center text-white py-5" 
      style={{ 
        minHeight: '350px',
        backgroundImage: 'url(https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=2071)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Máscara oscura */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(1px)'
        }}
      ></div>

      {/* Contenido */}
      <div className="container position-relative z-1">
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

