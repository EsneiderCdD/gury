import Link from "next/link"
import styles from "./HeroSection.module.css"

export default function HeroSection() {
  return (
    <section className={styles.section}>
      <div className={styles.bg} />
      <div className={styles.gradient} />
      <div className={styles.content}>
        <div className={styles.label}>
          <span className={styles.line} />
          <span className={styles.labelText}>Movimiento del Bate</span>
        </div>
        <h1 className={styles.title}>
          Esneider Cadavid
          <span className={styles.accent}> David</span>
        </h1>
        <p className={styles.role}>Concejal — Defensa Legítima</p>
        <p className={styles.subtitle}>
          Hijo del arriero antioqueño. Trabajo, verdad y protección para nuestra
          gente. Este es mi compromiso con la comunidad.
        </p>
        <div className={styles.actions}>
          <Link href="#quien-soy" className={styles.btnPrimary}>
            Conóceme
          </Link>
          <Link href="/propuestas" className={styles.btnSecondary}>
            Propuestas
          </Link>
        </div>
      </div>
      <div className={styles.scroll}>
        <span className={styles.scrollDot} />
      </div>
    </section>
  )
}
