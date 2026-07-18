import type { Metadata } from "next"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: "Quién Soy | Movimiento del Bate",
  description: "Conoce a Esneider Cadavid David, concejal del Movimiento del Bate. Defensa legítima, Antioquia de pie.",
}

export default function QuienSoyPage() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.imageCol}>
            <div className={styles.imagePlaceholder}>
              <span className={styles.imageLabel}>[ foto ]</span>
            </div>
          </div>
          <div className={styles.textCol}>
            <div className={styles.label}>
              <span className={styles.line} />
              <span className={styles.labelText}>Quién soy</span>
            </div>
            <h1 className={styles.title}>
              Esneider Cadavid
              <span className={styles.accent}> David</span>
            </h1>
            <p className={styles.role}>Concejal · Movimiento del Bate</p>
            <div className={styles.bio}>
              <p>
                Hijo del arriero antioqueño. Crecí viendo a mi padre cargar la
                mula antes de que saliera el sol, y entendí que el trabajo digno
                no se negocia ni se rinde.
              </p>
              <p>
                Hoy sirvo a mi comunidad desde el concejo, convencido de que la
                verdadera política nace en la calle, en el barrio, en el
                comerciante que abre su local cada madrugada y en la familia que
                quiere vivir tranquila.
              </p>
              <p>
                No vine a hacer política de escritorio. Vine a defender lo que
                es nuestro: la seguridad de nuestras calles, el derecho al
                trabajo y la dignidad de Antioquia.
              </p>
            </div>
            <div className={styles.contact}>
              <span className={styles.contactLabel}>Contacto</span>
              <a href="mailto:contacto@movimientodelbate.com" className={styles.contactLink}>
                contacto@movimientodelbate.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
