import type { Metadata } from "next"
import styles from "./page.module.css"
import { products } from "@/data/products"
import ProductCard from "@/components/reusable/ProductCard/ProductCard"

export const metadata: Metadata = {
  title: "Tienda | Movimiento del Bate",
  description: "Tienda oficial del Movimiento del Bate. Camisetas, gorras, hoodies y más. Envíos a toda Colombia.",
}

export default function TiendaPage() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.label}>
              <span className={styles.line} />
              <span className={styles.labelText}>Tienda oficial</span>
            </div>
            <h1 className={styles.title}>
              Lleva el <span className={styles.accent}>bate</span> puesto
            </h1>
            <p className={styles.subtitle}>
              Cada compra sostiene la difusión del manifiesto. Envíos a toda Colombia.
            </p>
          </div>
          <div className={styles.grid}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
