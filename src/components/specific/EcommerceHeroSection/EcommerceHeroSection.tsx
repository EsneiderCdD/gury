import Link from "next/link"
import styles from "./EcommerceHeroSection.module.css"
import { featuredProducts } from "@/data/products"
import ProductCard from "@/components/reusable/ProductCard/ProductCard"

export default function EcommerceHeroSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.label}>
            <span className={styles.line} />
            <span className={styles.labelText}>Tienda oficial</span>
          </div>
          <h2 className={styles.title}>
            Lleva el <span className={styles.accent}>bate</span> puesto
          </h2>
          <p className={styles.subtitle}>
            Cada compra sostiene la difusión del manifiesto. Envíos a toda Colombia.
          </p>
        </div>

        <div className={styles.grid}>
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className={styles.footer}>
          <Link href="/tienda" className={styles.btn}>
            Ver todo en la tienda
          </Link>
        </div>
      </div>
    </section>
  )
}
