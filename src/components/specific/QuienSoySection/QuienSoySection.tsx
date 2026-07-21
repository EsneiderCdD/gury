import SectionHeader from "@/components/reusable/SectionHeader/SectionHeader"
import styles from "./QuienSoySection.module.css"

export default function QuienSoySection() {
  return (
    <div id="quien-soy">
      {/* <SectionHeader
        tag="Candidato al Concejo"
        title="Defiendo lo que es nuestro"
        accent="es nuestro"
        subtitle="La seguridad en las calles, el derecho al trabajo y la dignidad de Antioquia. Esa es mi bandera."
      /> */}
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
              Andrés Felipe
              <span className={styles.accent}> Rodríguez</span>
            </h1>
            <p className={styles.role}>Concejal · Movimiento del Bate</p>
            <div className={styles.bio}>
              <p>
                Mi trabajo en el concejo nace de una convicción: la política
                debe estar al servicio de la gente que madruga. Cada decisión
                busca devolverle la tranquilidad a nuestras calles y la
                esperanza a nuestras familias.
              </p>
              <p>
                No creo en los discursos vacíos ni en las promesas de
                escritorio. Creo en el trabajo que se ve, en la presencia en el
                territorio y en la defensa firme de lo que es nuestro.
              </p>
              <p>
                Antioquia merece representantes que no le teman a la verdad.
                Ese es mi compromiso: decir lo que pienso, hacer lo que digo y
                defender a los que nadie defiende.
              </p>
            </div>
            <div className={styles.contact}>
              <span className={styles.contactLabel}>Contacto</span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.instagramLink}
                aria-label="Instagram"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
