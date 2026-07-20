import SectionHeader from "@/components/reusable/SectionHeader/SectionHeader"

export default function DenunciaCtaSection() {
  return (
    <SectionHeader
      tag="Denuncia Ciudadana"
      title="¿Fuiste testigo de un acto de vandalismo?"
      accent="vandalismo"
      subtitle="Tu testimonio es clave para construir el mapa de la verdad en nuestra comunidad. Cada denuncia nos ayuda a visibilizar lo que muchos callan."
      ctaText="Presentar denuncia"
      ctaHref="#denuncia-form"
    />
  )
}
