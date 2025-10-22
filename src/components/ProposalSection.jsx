function ProposalsSection() {
    const proposals = [
      {
        icon: "🛡️",
        title: "Seguridad inteligente",
        description: "Tecnología y fuerza pública unidas contra la macrocriminalidad."
      },
      {
        icon: "🚇",
        title: "Movilidad eficiente",
        description: "Transporte integrado y sostenible para todos los ciudadanos."
      },
      {
        icon: "🏗️",
        title: "Obras con impacto",
        description: "Infraestructura que transforma comunidades y genera oportunidades."
      },
      {
        icon: "⚖️",
        title: "Justicia social",
        description: "Equidad y transparencia en cada decisión para construir una ciudad justa."
      }
    ];
  
    return (
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-white mb-3">Propuestas para Medellín</h2>
            <p className="text-white-50 mx-auto" style={{ maxWidth: '700px' }}>
              Trabajamos en soluciones concretas que transforman nuestra ciudad. 
              Estas son algunas de las propuestas que impulsan el desarrollo y 
              bienestar de todos los ciudadanos.
            </p>
          </div>
  
          <div className="row g-4 mb-5">
            {proposals.map((proposal, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="text-center h-100 p-4 bg-dark bg-opacity-25 rounded">
                  <div className="fs-1 mb-3">{proposal.icon}</div>
                  <h3 className="h5 text-white mb-3">{proposal.title}</h3>
                  <p className="text-white-50 small">{proposal.description}</p>
                </div>
              </div>
            ))}
          </div>
  
          <div className="text-center">
            <button className="btn btn-primary btn-lg">Lee todas mis propuestas</button>
          </div>
        </div>
      </section>
    );
  }
  
  export default ProposalsSection;