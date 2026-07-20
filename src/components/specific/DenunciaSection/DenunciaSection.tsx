"use client"

import { useState, FormEvent } from "react"
import styles from "./DenunciaSection.module.css"
import Modal from "@/components/reusable/Modal/Modal"

type RespuestaAPI = {
  status: "success" | "error"
  message: string
  denuncia_id?: number
}

export default function DenunciaSection() {
  const [nombre, setNombre] = useState("")
  const [cedula, setCedula] = useState("")
  const [correo, setCorreo] = useState("")
  const [celular, setCelular] = useState("")
  const [direccion, setDireccion] = useState("")
  const [relato, setRelato] = useState("")
  const [evidencias, setEvidencias] = useState("")
  const [foto, setFoto] = useState("")
  const [cargando, setCargando] = useState(false)
  const [respuesta, setRespuesta] = useState<RespuestaAPI | null>(null)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setCargando(true)
    setRespuesta(null)

    try {
      const res = await fetch("/api/denuncias", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre_completo: nombre,
          cedula,
          correo,
          celular,
          direccion_lugar: direccion,
          relato,
          evidencias_enlaces: evidencias,
          foto_enlace: foto,
        }),
      })

      const data: RespuestaAPI = await res.json()
      setRespuesta(data)

      if (data.status === "success") {
        setNombre("")
        setCedula("")
        setCorreo("")
        setCelular("")
        setDireccion("")
        setRelato("")
        setEvidencias("")
        setFoto("")
      }
    } catch {
      setRespuesta({ status: "error", message: "Error de red. Intenta de nuevo." })
    } finally {
      setCargando(false)
    }
  }

  return (
    <section id="denuncia-form" className={styles.section}>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>Información personal</h2>
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="nombre">Nombre completo</label>
                <input
                  id="nombre"
                  type="text"
                  placeholder="Ej: Juan Pérez"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="cedula">Cédula</label>
                <input
                  id="cedula"
                  type="text"
                  placeholder="Ej: 1.234.567"
                  value={cedula}
                  onChange={(e) => setCedula(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="correo">Correo electrónico</label>
                <input
                  id="correo"
                  type="email"
                  placeholder="Ej: juan@correo.com"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="celular">Celular</label>
                <input
                  id="celular"
                  type="tel"
                  placeholder="Ej: 300 123 4567"
                  value={celular}
                  onChange={(e) => setCelular(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>Evidencia y relato</h2>
            <div className={styles.field}>
              <label htmlFor="lugar">Lugar de los hechos (dirección)</label>
              <input
                id="lugar"
                type="text"
                placeholder="Ej: Cra 43 # 10-25, El Poblado, Medellín"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="escrito">Relato de los hechos</label>
              <textarea
                id="escrito"
                rows={5}
                placeholder="Describe de forma clara y detallada lo que ocurrió: fecha, hora, personas involucradas, secuencia de los eventos..."
                value={relato}
                onChange={(e) => setRelato(e.target.value)}
                required
              />
            </div>
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="evidencias">Evidencias (enlaces)</label>
                <input
                  id="evidencias"
                  type="text"
                  placeholder="Ej: enlace a video, noticia, testimonio"
                  value={evidencias}
                  onChange={(e) => setEvidencias(e.target.value)}
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="foto">Foto (enlace)</label>
                <input
                  id="foto"
                  type="text"
                  placeholder="Ej: enlace a imagen"
                  value={foto}
                  onChange={(e) => setFoto(e.target.value)}
                />
              </div>
            </div>
          </div>

          <button type="submit" className={styles.submitBtn} disabled={cargando}>
            {cargando ? "Enviando..." : "Presentar denuncia"}
          </button>
        </form>
      </div>

      <Modal
        abierto={respuesta !== null}
        tipo={respuesta?.status ?? "error"}
        titulo={respuesta?.status === "success" ? "Denuncia recibida" : "Error"}
        mensaje={respuesta?.message ?? ""}
        onCerrar={() => setRespuesta(null)}
        boton={respuesta?.status === "success" ? "Aceptar" : "Cerrar"}
      />
    </section>
  )
}
