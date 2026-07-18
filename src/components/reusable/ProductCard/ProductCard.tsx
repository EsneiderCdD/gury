import type { Product } from "@/data/products"
import { formatPrice } from "@/data/products"
import styles from "./ProductCard.module.css"

type Props = {
  product: Product
}

const bgPatterns: Record<string, string> = {
  ropa: 'repeating-linear-gradient(45deg, #0C1A33 0px, #0C1A33 14px, #102146 14px, #102146 28px)',
  accesorio: 'repeating-linear-gradient(45deg, #EBE6D9 0px, #EBE6D9 12px, #E3DDCD 12px, #E3DDCD 24px)',
  coleccionable: 'repeating-linear-gradient(45deg, #1a0c0c 0px, #1a0c0c 14px, #2a1414 14px, #2a1414 28px)',
}

export default function ProductCard({ product }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.image} style={{ backgroundImage: bgPatterns[product.category] }}>
        <span className={styles.tag}>{product.tag}</span>
      </div>
      <div className={styles.body}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.desc}>{product.description}</p>
        <div className={styles.footer}>
          <span className={styles.price}>{formatPrice(product.price)}</span>
          <button className={styles.btn}>Agregar</button>
        </div>
      </div>
    </div>
  )
}
