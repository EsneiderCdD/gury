function CalendarioBateYBarrio() {
  const eventos = [
    {
      fecha: "15",
      mes: "NOV",
      titulo: "Marcha por la Transparencia",
      descripcion:
        "Recorrido por el centro de Medellín exigiendo licitaciones limpias y gobierno transparente.",
      hora: "9:00 AM",
      lugar: "Parque de las Luces",
    },
    {
      fecha: "22",
      mes: "NOV",
      titulo: "Bateada Comunitaria - Comuna 8",
      descripcion:
        "Jornada de limpieza y activación deportiva en barrios de la comuna.",
      hora: "2:00 PM",
      lugar: "Villa Hermosa",
    },
    {
      fecha: "28",
      mes: "NOV",
      titulo: "Cabildo Abierto: Seguridad",
      descripcion:
        "Conversatorio con la comunidad sobre propuestas de seguridad inteligente para Medellín.",
      hora: "6:00 PM",
      lugar: "Auditorio Virtual",
    },
    {
      fecha: "05",
      mes: "DIC",
      titulo: "Gran Marcha Movimiento del Bate",
      descripcion:
        "Movilización ciudadana por una ciudad justa, transparente y con oportunidades para todos.",
      hora: "10:00 AM",
      lugar: "Plaza Mayor",
    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        {/* Título */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-white mb-3">
            Calendario "Bate y Barrio"
          </h2>
          <p className="text-white-50 mx-auto" style={{ maxWidth: "700px" }}>
            Únete a nuestras próximas actividades. Juntos construimos la
            Medellín que queremos.
          </p>
        </div>

        {/* Tarjetas de eventos */}
        <div className="row g-4">
          {eventos.map((evento, index) => (
            <div key={index} className="col-lg-6">
              <div className="card bg-dark bg-opacity-25 border-0 h-100 overflow-hidden">
                <div className="card-body p-0 d-flex">
                  {/* Fecha lateral */}
                  <div
                    className="bg-primary text-white text-center d-flex flex-column justify-content-center align-items-center"
                    style={{
                      minWidth: "110px",
                      padding: "1.5rem 0",
                      letterSpacing: "1px",
                    }}
                  >
                    <div
                      className="fw-bold mb-0"
                      style={{
                        fontSize: "3rem",
                        lineHeight: "1",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {evento.fecha}
                    </div>
                    <div
                      className="text-uppercase small mt-1"
                      style={{ letterSpacing: "1px" }}
                    >
                      {evento.mes}
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="p-4 flex-grow-1">
                    <h3 className="h5 text-white mb-3">{evento.titulo}</h3>
                    <p className="text-white-50 small mb-3">
                      {evento.descripcion}
                    </p>

                    <div className="d-flex flex-column gap-2 mb-3">
                      <div className="text-white-50 small">
                        <span className="me-2">🕐</span>
                        {evento.hora}
                      </div>
                      <div className="text-white-50 small">
                        <span className="me-2">📍</span>
                        {evento.lugar}
                      </div>
                    </div>

                    <button className="btn btn-sm btn-outline-light">
                      Asistir
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botón inferior */}
        <div className="text-center mt-5">
          <button className="btn btn-primary btn-lg px-5">
            Ver todos los eventos
          </button>
        </div>
      </div>
    </section>
  );
}

export default CalendarioBateYBarrio;
