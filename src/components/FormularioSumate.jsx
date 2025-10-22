import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function FormularioSumate() {
  return (
    <section className="py-5 bg-light" id="sumate">
      <div className="container">
        {/* 🔹 Caja unificada con sombra y bordes redondeados */}
        <div
          className="row g-0 shadow-lg overflow-hidden rounded-4 bg-white"
          style={{
            minHeight: "550px",
          }}
        >
          {/* Columna izquierda - Formulario */}
          <div className="col-lg-6 p-5 d-flex flex-column justify-content-center">
            <div className="mb-4">
              <h2 className="fw-bold text-dark mb-3">Súmate al Movimiento</h2>
              <p className="text-secondary" style={{ maxWidth: "550px" }}>
                Únete a nuestra causa y ayuda a construir la Medellín que todos soñamos. 
                Juntos somos más fuertes.
              </p>
            </div>

            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="nombre" className="form-label text-muted">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="nombre"
                    placeholder="Tu nombre"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="whatsapp" className="form-label text-muted">
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    className="form-control form-control-lg"
                    id="whatsapp"
                    placeholder="300 123 4567"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="barrio" className="form-label text-muted">
                    Barrio
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="barrio"
                    placeholder="Tu barrio"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="rol" className="form-label text-muted">
                    ¿Cómo quieres apoyar?
                  </label>
                  <select
                    className="form-select form-select-lg"
                    id="rol"
                    required
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="voluntario">Voluntario en marchas</option>
                    <option value="difusion">Difusión en redes</option>
                    <option value="logistica">Apoyo logístico</option>
                    <option value="denuncias">Reportar denuncias</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div className="col-12">
                  <label htmlFor="mensaje" className="form-label text-muted">
                    Mensaje (opcional)
                  </label>
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
                      <i className="bi bi-whatsapp me-2"></i>
                      Escríbenos al WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Columna derecha - Imagen + texto */}
          <div className="col-lg-6 position-relative">
            {/* Imagen de fondo */}
            <div
              className="h-100 w-100"
              style={{
                backgroundImage:
                  "url('https://i.pinimg.com/736x/71/c7/38/71c73885a553b88daaa55a3b307ca28a.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            {/* Capa oscura encima de la imagen */}
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                background: "rgba(0, 0, 0, 0.55)",
              }}
            ></div>

            {/* Texto sobre la imagen */}
            <div
              className="position-absolute text-white px-4 px-md-5"
              style={{
                bottom: "40px",
                left: "0",
                right: "0",
              }}
            >
              <h4 className="fw-bold mb-2">Tu voz transforma Medellín</h4>
              <p className="text-white-50 mb-0">
                Llenar este formulario no es solo una solicitud — es un paso para ser parte
                de un movimiento que escucha, propone y actúa. Haz que tu barrio, tu historia
                y tus ideas cuenten.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormularioSumate;
