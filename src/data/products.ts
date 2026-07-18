export type Product = {
  id: string
  name: string
  tag: string
  description: string
  price: number
  category: 'ropa' | 'accesorio' | 'coleccionable'
}

export const products: Product[] = [
  {
    id: 'cam',
    name: 'Camiseta "Defensa Legítima"',
    tag: 'Camiseta',
    description: 'Algodón pesado 220 g/m², estampado del emblema al frente. Disponible en tallas S-XXL.',
    price: 59900,
    category: 'ropa',
  },
  {
    id: 'gor',
    name: 'Gorra del Bate',
    tag: 'Gorra',
    description: 'Bordado del escudo en alto relieve, cierre ajustable con correa. Una talla.',
    price: 49900,
    category: 'accesorio',
  },
  {
    id: 'bat',
    name: 'Bate de Madera — Coleccionable',
    tag: 'Bate',
    description: 'Madera maciza de cedro, edición numerada y grabada con el lema del movimiento.',
    price: 189900,
    category: 'coleccionable',
  },
  {
    id: 'ban',
    name: 'Bandera del Movimiento',
    tag: 'Bandera',
    description: '150 × 90 cm, doble costura, alta resistencia. Ideal para exteriores.',
    price: 39900,
    category: 'accesorio',
  },
  {
    id: 'hoo',
    name: 'Hoodie "Antioquia de Pie"',
    tag: 'Hoodie',
    description: 'Buzo con capucha, interior afelpado, bolsillo canguro frontal y estampado serigráfico.',
    price: 129900,
    category: 'ropa',
  },
  {
    id: 'mug',
    name: 'Mug "El que no cuida lo suyo"',
    tag: 'Taza',
    description: 'Cerámica 330 ml con frase grabada en alto relieve. Apto para microondas y lavavajillas.',
    price: 34900,
    category: 'accesorio',
  },
  {
    id: 'lla',
    name: 'Llavero del Bate',
    tag: 'Llavero',
    description: 'Bate de béisbol en metal fundido, con el emblema grabado en relieve.',
    price: 19900,
    category: 'accesorio',
  },
  {
    id: 'pon',
    name: 'Poncho Arriero',
    tag: 'Poncho',
    description: 'Tejido tradicional antioqueño, abrigado y resistente. Hecho por artesanos locales.',
    price: 89900,
    category: 'ropa',
  },
]

export const featuredProducts = products.slice(0, 3)

export function formatPrice(price: number): string {
  return '$' + Math.round(price).toLocaleString('es-CO')
}
