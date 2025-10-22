function MapaDelBarrio() {
  const reportes = [
    { tipo: "Denuncia", cantidad: 12, color: "danger" },
    { tipo: "Reportes", cantidad: 8, color: "warning" },
    { tipo: "Resueltos", cantidad: 5, color: "success" }
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-white mb-3">Mapa del Barrio</h2>
          <p className="text-white-50 mx-auto" style={{ maxWidth: '700px' }}>
            Visualiza denuncias y reportes de tu sector en tiempo real.
          </p>
        </div>

        <div className="row mb-4">
          {reportes.map((reporte, index) => (
            <div key={index} className="col-md-4 mb-3">
              <div className={`bg-${reporte.color} bg-opacity-25 border border-${reporte.color} rounded p-3 text-center`}>
                <h3 className="h1 text-white mb-2">{reporte.cantidad}</h3>
                <p className={`text-${reporte.color} mb-0 fw-bold`}>{reporte.tipo}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="ratio ratio-16x9 rounded overflow-hidden" style={{ maxHeight: '500px' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127287.0419537!2d-75.6062!3d6.2476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428dfb80fad05%3A0x42137cfcc7b53b56!2sMedell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1234567890"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de Medellín"
          ></iframe>
        </div>

        <div className="text-center mt-4">
          <button className="btn btn-primary btn-lg">Ver todos los reportes</button>
        </div>
      </div>
    </section>
  );
}

export default MapaDelBarrio;

