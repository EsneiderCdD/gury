function HeroHome() {
    return (
      <div 
        className="position-relative d-flex align-items-center justify-content-center text-white"
        style={{
          minHeight: '500px',
          backgroundImage: 'url(https://images.unsplash.com/photo-1568632234157-ce7aecd03d0d?q=80&w=2070)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Máscara oscura */}
        <div 
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(1px)'
          }}
        ></div>
  
        {/* Contenido */}
        <div className="container position-relative z-1 text-center py-5">
          <h1 className="display-3 fw-bold mb-3">Medellín Hermosa</h1>
          <p className="lead mb-4">La ciudad de la eterna primavera te espera</p>
          {/* <div className="d-flex gap-3 justify-content-center flex-wrap">
            <button className="btn btn-primary btn-lg px-4">Explorar</button>
            <button className="btn btn-outline-light btn-lg px-4">Conocer más</button>
          </div> */}
        </div>
      </div>
    );
  }
  
  export default HeroHome;