import type { Metadata } from "next"
import DenunciaSection from "@/components/specific/DenunciaSection/DenunciaSection"

export const metadata: Metadata = {
  title: "Denuncia Ciudadana | Movimiento del Bate",
  description: "Canal de denuncia ciudadana para reportar actos de vandalismo, intimidación o violencia en tu comunidad.",
}

export default function DenunciaPage() {
  return (
    <main>
      <DenunciaSection />
    </main>
  )
}