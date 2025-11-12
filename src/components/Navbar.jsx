import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: 'rgba(20, 20, 20, 0.6)' }}>
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">Movimiento Bate</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/propuestas">Propuestas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sumate">Súmate</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/denuncia">Denuncia Ciudadana</Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/calendario">Calendario</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar