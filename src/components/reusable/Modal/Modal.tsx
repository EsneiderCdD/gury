"use client"

import { useEffect } from "react"
import styles from "./Modal.module.css"

type ModalProps = {
  abierto: boolean
  tipo: "success" | "error"
  titulo: string
  mensaje: string
  onCerrar: () => void
  boton?: string
}

export default function Modal({ abierto, tipo, titulo, mensaje, onCerrar, boton = "Cerrar" }: ModalProps) {
  useEffect(() => {
    if (!abierto) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCerrar()
    }
    document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [abierto, onCerrar])

  if (!abierto) return null

  return (
    <div className={styles.overlay} onClick={onCerrar}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={`${styles.icon} ${tipo === "success" ? styles.iconSuccess : styles.iconError}`}>
          {tipo === "success" ? "✓" : "✕"}
        </div>
        <h2 className={styles.title}>{titulo}</h2>
        <p className={styles.message}>{mensaje}</p>
        <button className={styles.btn} onClick={onCerrar}>
          {boton}
        </button>
      </div>
    </div>
  )
}
