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
  {
    slug: 'empleo-para-el-barrio',
    title: 'Empleo para el barrio',
    description:
      'Programas de empleo local que activen la economía y generen oportunidades reales cerca de casa.',
    image: 'https://i.pinimg.com/1200x/ca/2b/a6/ca2ba6cf30e66f241e4ead794822127b.jpg',
    category: 'Empleo',
  },
  {
    slug: 'educacion-conectada',
    title: 'Educación conectada',
    description:
      'Conectividad, formación digital y apoyo escolar para que nadie se quede atrás.',
    image: 'https://i.pinimg.com/736x/5e/43/08/5e4308c27acca7f682f8f4a8c5053ce9.jpg',
    category: 'Educación',
  },
  {
    slug: 'salud-preventiva',
    title: 'Salud preventiva',
    description:
      'Brigadas de salud, prevención y atención primaria en todos los barrios.',
    image: 'https://i.pinimg.com/1200x/28/10/fb/2810fb49f2e2c5685e4bb023b0818bc8.jpg',
    category: 'Salud',
  },
  {
    slug: 'medio-ambiente-vivo',
    title: 'Medio ambiente vivo',
    description:
      'Espacios verdes, reciclaje y cultura ambiental para una ciudad sostenible.',
    image: 'https://i.pinimg.com/736x/03/14/2b/03142b0032304db6885ea105a63b5f4e.jpg',
    category: 'Ambiente',
  },
]

export function getProposalBySlug(slug) {
  return proposals.find((p) => p.slug === slug)
}