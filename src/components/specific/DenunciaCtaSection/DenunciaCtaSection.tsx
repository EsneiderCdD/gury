import Link from "next/link"
import styles from "./DenunciaCtaSection.module.css"

export default function DenunciaCtaSection() {
  return (
    <section className={styles.section}>
      <div className={styles.overlay} />
      <div className={styles.container}>
        <span className={styles.tag}>Denuncia Ciudadana</span>
        <h2 className={styles.title}>
          ¿Fuiste testigo de un acto de <span className={styles.accent}>vandalismo</span>?
        </h2>
        <p className={styles.subtitle}>
          Tu testimonio es clave para construir el mapa de la verdad en nuestra
          comunidad. Cada denuncia nos ayuda a visibilizar lo que muchos callan.
        </p>
        <Link href="/denuncia" className={styles.ctaBtn}>
          Presentar denuncia
        </Link>
      </div>
    </section>
  )
}