import React from "react";

function CalendarioBateYBarrio() {
  const eventos = [
    {
      fecha: "15 NOV",
      titulo: "Marcha por la Transparencia",
      descripcion:
        "Recorrido por el centro de Medellín exigiendo licitaciones limpias y gobierno transparente.",
      hora: "9:00 AM",
      lugar: "Parque de las Luces",
      imagen:
        "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSBSWeRYdl9NUxcRLQZRQgW1cegCBvMJz6_Oh2uHZp0juuyOoVWlaFWROpyDsMbn4YTYy-_sk_RK7Jneme8rl1j9KisDDnJunoMhc3qYA", // Ejemplo: marcha
    },
    {
      fecha: "22 NOV",
      titulo: "Bateada Comunitaria - Comuna 8",
      descripcion:
        "Jornada de limpieza y activación deportiva en barrios de la comuna.",
      hora: "2:00 PM",
      lugar: "Villa Hermosa",
      imagen:
        "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSBSWeRYdl9NUxcRLQZRQgW1cegCBvMJz6_Oh2uHZp0juuyOoVWlaFWROpyDsMbn4YTYy-_sk_RK7Jneme8rl1j9KisDDnJunoMhc3qYA", // Ejemplo: comunidad
    },
    {
      fecha: "28 NOV",
      titulo: "Cabildo Abierto: Seguridad",
      descripcion:
        "Conversatorio con la comunidad sobre propuestas de seguridad inteligente para Medellín.",
      hora: "6:00 PM",
      lugar: "Auditorio Virtual",
      imagen:
        "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSBSWeRYdl9NUxcRLQZRQgW1cegCBvMJz6_Oh2uHZp0juuyOoVWlaFWROpyDsMbn4YTYy-_sk_RK7Jneme8rl1j9KisDDnJunoMhc3qYA", // Ejemplo: foro
    },
    {
      fecha: "05 DIC",
      titulo: "Gran Marcha Movimiento del Bate",
      descripcion:
        "Movilización ciudadana por una ciudad justa, transparente y con oportunidades para todos.",
      hora: "10:00 AM",
      lugar: "Plaza Mayor",
      imagen:
        "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSBSWeRYdl9NUxcRLQZRQgW1cegCBvMJz6_Oh2uHZp0juuyOoVWlaFWROpyDsMbn4YTYy-_sk_RK7Jneme8rl1j9KisDDnJunoMhc3qYA", // Ejemplo: evento masivo
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

        {/* Tarjetas estilo horizontal */}
        <div className="row g-4">
          {eventos.map((evento, index) => (
            <div key={index} className="col-lg-6">
              <div
                className="card border-0 shadow-lg overflow-hidden h-100"
                style={{
                  borderRadius: "1.2rem",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(6px)",
                }}
              >
                <div className="row g-0">
                  {/* Imagen izquierda */}
                  <div className="col-4">
                    <div className="position-relative h-100">
                      <img
                        src={evento.imagen}
                        alt={evento.titulo}
                        className="img-fluid h-100 w-100"
                        style={{
                          objectFit: "cover",
                          borderRadius: "1.2rem 0 0 1.2rem",
                        }}
                      />
                      <div
                        className="position-absolute top-0 start-0 bg-dark text-white px-3 py-2 small rounded-end"
                        style={{
                          opacity: 0.9,
                          fontWeight: "600",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {evento.fecha}
                      </div>
                    </div>
                  </div>

                  {/* Texto derecha */}
                  <div className="col-8">
                    <div className="card-body d-flex flex-column justify-content-between h-100">
                      <div>
                        <h5 className="fw-bold text-white mb-2">
                          {evento.titulo}
                        </h5>
                        <p className="text-white-50 small mb-3">
                          {evento.descripcion}
                        </p>
                        <div className="d-flex flex-column small text-white-50">
                          <span className="mb-1">
                            <i className="bi bi-clock me-2"></i>
                            {evento.hora}
                          </span>
                          <span>
                            <i className="bi bi-geo-alt me-2"></i>
                            {evento.lugar}
                          </span>
                        </div>
                      </div>
                      <div className="mt-3">
                        <button className="btn btn-outline-light btn-sm w-100">
                          Asistir
                        </button>
                      </div>
                    </div>
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
