import styles from "./DenunciaSection.module.css"

export default function DenunciaSection() {
  return (
    <section className={styles.section}>
      <div className={styles.overlay} />
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>Denuncia Ciudadana</span>
          <h1 className={styles.title}>
            Tu voz <span className={styles.accent}>es la herramienta</span>
          </h1>
          <p className={styles.subtitle}>
            Si fuiste testigo o víctima de un acto de vandalismo, intimidación o
            violencia en tu comunidad, este es el canal para reportarlo. Tu
            denuncia nos ayuda a construir el mapa de la verdad.
          </p>
        </div>

        <form className={styles.form}>
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>Información personal</h2>
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="nombre">Nombre completo</label>
                <input id="nombre" type="text" placeholder="Ej: Juan Pérez" />
              </div>
              <div className={styles.field}>
                <label htmlFor="cedula">Cédula</label>
                <input id="cedula" type="text" placeholder="Ej: 1.234.567" />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="correo">Correo electrónico</label>
                <input id="correo" type="email" placeholder="Ej: juan@correo.com" />
              </div>
              <div className={styles.field}>
                <label htmlFor="celular">Celular</label>
                <input id="celular" type="tel" placeholder="Ej: 300 123 4567" />
              </div>
            </div>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>Evidencia y relato</h2>
            <div className={styles.field}>
              <label htmlFor="lugar">Lugar de los hechos (dirección)</label>
              <input id="lugar" type="text" placeholder="Ej: Cra 43 # 10-25, El Poblado, Medellín" />
            </div>
            <div className={styles.field}>
              <label htmlFor="escrito">Relato de los hechos</label>
              <textarea id="escrito" rows={5} placeholder="Describe de forma clara y detallada lo que ocurrió: fecha, hora, personas involucradas, secuencia de los eventos..." />
            </div>
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="evidencias">Evidencias (enlaces)</label>
                <input id="evidencias" type="text" placeholder="Ej: enlace a video, noticia, testimonio" />
              </div>
              <div className={styles.field}>
                <label htmlFor="foto">Foto (enlace)</label>
                <input id="foto" type="text" placeholder="Ej: enlace a imagen" />
              </div>
            </div>
          </div>

          <button type="submit" className={styles.submitBtn}>
            Enviar denuncia
          </button>
        </form>
      </div>
    </section>
  )
}
