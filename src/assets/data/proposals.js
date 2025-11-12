export const proposals = [
  {
    slug: 'seguridad-inteligente',
    title: 'Seguridad inteligente',
    description:
      'Tecnología, cámaras y colaboración ciudadana para reducir la criminalidad y garantizar tranquilidad en cada barrio.',
    image: 'https://i.pinimg.com/1200x/aa/96/a9/aa96a9de603060c5ce985c1a1bca911b.jpg',
    category: 'Seguridad',
  },
  {
    slug: 'movilidad-eficiente',
    title: 'Movilidad eficiente',
    description:
      'Un sistema de transporte integrado, accesible y sostenible que conecta a todos los medellinenses.',
    image: 'https://i.pinimg.com/736x/e4/0d/6c/e40d6c129b0c583edb9c2368f2dfc747.jpg',
    category: 'Movilidad',
  },
  {
    slug: 'obras-con-impacto',
    title: 'Obras con impacto',
    description:
      'Infraestructura moderna que impulsa el desarrollo urbano y mejora la calidad de vida de las comunidades.',
    image: 'https://i.pinimg.com/736x/fe/3f/ed/fe3fed849eb80f5c3be4b1687b2a7aa3.jpg',
    category: 'Infraestructura',
  },
  {
    slug: 'justicia-social',
    title: 'Justicia social',
    description:
      'Una ciudad más equitativa donde las oportunidades lleguen a todos, sin distinción ni privilegios.',
    image: 'https://i.pinimg.com/736x/31/5a/b9/315ab96da03cea7aacd84f8644de903d.jpg',
    category: 'Equidad',
  },
]

export function getProposalBySlug(slug) {
  return proposals.find((p) => p.slug === slug)
}