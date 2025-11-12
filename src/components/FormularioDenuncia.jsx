import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function FormularioDenuncia() {
  return (
    <section className="py-5" id="denuncia">
      <div className="container">
        <div
          className="row g-0 shadow-lg overflow-hidden rounded-4"
          style={{ minHeight: "550px", backgroundColor: "rgba(30, 30, 30, 0.7)" }}
        >
          {/* Columna izquierda - Formulario */}
          <div className="col-lg-6 p-5 d-flex flex-column justify-content-center">
            <div className="mb-4">
              <h2 className="fw-bold text-white mb-3">Denuncia Ciudadana</h2>
              <p className="text-white-50" style={{ maxWidth: "550px" }}>
                Reporta una situación en tu barrio para activar seguimiento y gestión ciudadana.
                Tu reporte ayuda a priorizar y resolver problemas locales.
              </p>
            </div>

            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="nombre" className="form-label text-white-50">Nombre completo</label>
                  <input type="text" className="form-control form-control-lg" id="nombre" placeholder="Tu nombre" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="contacto" className="form-label text-white-50">Contacto (WhatsApp o email)</label>
                  <input type="text" className="form-control form-control-lg" id="contacto" placeholder="300 123 4567 / correo@dominio" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="lugar" className="form-label text-white-50">Lugar del reporte</label>
                  <input type="text" className="form-control form-control-lg" id="lugar" placeholder="Barrio, calle, referencia" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="tipo" className="form-label text-white-50">Tipo de situación</label>
                  <select className="form-select form-select-lg" id="tipo" required>
                    <option value="">Selecciona una opción</option>
                    <option value="seguridad">Seguridad</option>
                    <option value="infraestructura">Infraestructura</option>
                    <option value="servicios">Servicios públicos</option>
                    <option value="ambiente">Ambiente</option>
                    <option value="otra">Otra</option>
                  </select>
                </div>
                <div className="col-12">
                  <label htmlFor="descripcion" className="form-label text-white-50">Descripción</label>
                  <textarea className="form-control" id="descripcion" rows="3" placeholder="Describe brevemente la situación" required></textarea>
                </div>
                <div className="col-12">
                  <label htmlFor="evidencia" className="form-label text-white-50">Enlace a evidencia (opcional)</label>
                  <input type="url" className="form-control" id="evidencia" placeholder="URL a fotos o videos" />
                </div>
                <div className="col-12 mt-4">
                  <div className="d-grid gap-3">
                    <button type="submit" className="btn btn-primary btn-lg">Enviar reporte</button>
                    <a href="/" className="btn btn-outline-light btn-lg">Volver al mapa</a>
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Columna derecha - Imagen + texto */}
          <div className="col-lg-6 position-relative">
            <div className="h-100 w-100" style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1920&auto=format&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}></div>
            <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "rgba(0, 0, 0, 0.55)" }}></div>
            <div className="position-absolute text-white px-4 px-md-5" style={{ bottom: "40px", left: 0, right: 0 }}>
              <h4 className="fw-bold mb-2">Tu reporte activa soluciones</h4>
              <p className="text-white-50 mb-0">
                Informar una situación es el primer paso para gestionarla. Con tu denuncia, el barrio gana visibilidad
                y juntos podemos exigir respuestas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormularioDenuncia;