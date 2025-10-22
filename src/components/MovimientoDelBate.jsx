function MovimientoDelBate() {
  const tarjetas = [
    {
      icon: "⚖️",
      title: "Juego limpio",
      description: "Reglas claras, licitaciones abiertas, cero trampa."
    },
    {
      icon: "🏙️",
      title: "Medellín primero",
      description: "El defensor de Medellín"
    },
    {
      icon: "📢",
      title: "Verdad sin filtro",
      description: "Denuncias con pruebas, sin tibieza."
    }
  ];

  return (
    <section className="py-5">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3">
            Movimiento del Bate — Juego limpio, ciudad firme
          </h2>
          <p className="lead text-secondary mx-auto" style={{ maxWidth: '800px' }}>
            Bateamos las protestas con violencia y defendemos nuestra ciudad con carácter.
          </p>

          <div className="d-flex flex-column flex-md-row gap-3 justify-content-center mt-4">
            <a href="#sumate" className="btn btn-primary btn-lg px-5 py-3">
              Súmate
            </a>
            <a href="#denuncia" className="btn btn-outline-light btn-lg px-5 py-3">
              Denuncia con evidencias
            </a>
          </div>
        </div>

        <div className="row g-4 mt-5">
          {tarjetas.map((tarjeta, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="text-center h-100 p-4 bg-light rounded">
                <div className="fs-1 mb-3">{tarjeta.icon}</div>
                <h3 className="h4 mb-3">{tarjeta.title}</h3>
                <p className="text-secondary">{tarjeta.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MovimientoDelBate;

