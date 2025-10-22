import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="py-5 mt-5" style={{ backgroundColor: "#1b1f24" }}>
      <div className="container text-white-50">
        <div className="row gy-4">
          {/* Columna 1: Descripción */}
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold text-white mb-3">Movimiento Bate</h5>
            <p>
              Un movimiento ciudadano comprometido con la transformación social
              y política de Medellín.
            </p>
            <p className="small mb-0">
              Activismo real. Propuestas concretas. Resultados visibles.
            </p>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div className="col-lg-4 col-md-3">
            <h6 className="fw-bold text-white mb-3">Enlaces Rápidos</h6>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#inicio" className="text-white-50 text-decoration-none">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#sobremi" className="text-white-50 text-decoration-none">
                  Sobre Mí
                </a>
              </li>
              <li>
                <a href="#propuestas" className="text-white-50 text-decoration-none">
                  Propuestas
                </a>
              </li>
              <li>
                <a href="#necesidades" className="text-white-50 text-decoration-none">
                  ¿Qué Necesita Medellín?
                </a>
              </li>
              <li>
                <a href="#blog" className="text-white-50 text-decoration-none">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Redes sociales */}
          <div className="col-lg-4 col-md-3">
            <h6 className="fw-bold text-white mb-3">Síguenos</h6>
            <p>Mantente conectado y actualizado sobre nuestras actividades</p>

            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-white-50 fs-5">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white-50 fs-5">
                <FaInstagram />
              </a>
              <a href="#" className="text-white-50 fs-5">
                <FaTwitter />
              </a>
              <a href="#" className="text-white-50 fs-5">
                <FaYoutube />
              </a>
              <a href="#" className="text-white-50 fs-5">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <hr className="border-secondary my-4" />

        {/* Créditos */}
        <div className="text-center small text-white-50">
          <p className="mb-1">
            © 2025 Movimiento Bate. Todos los derechos reservados.
          </p>
          <p className="mb-0">
            Hecho con dedicación para el pueblo de Medellín.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
