import Link from "next/link"
import styles from "./EcommerceHeroSection.module.css"
import { featuredProducts } from "@/data/products"
import ProductCard from "@/components/reusable/ProductCard/ProductCard"
import SectionHeader from "@/components/reusable/SectionHeader/SectionHeader"

export default function EcommerceHeroSection() {
  return (
    <section>
      <SectionHeader
        tag="Tienda oficial"
        title="Lleva el bate puesto"
        accent="bate"
        subtitle="Cada compra sostiene la difusión del manifiesto. Envíos a toda Colombia."
      />

      <div className={styles.products}>
        <div className={styles.container}>
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
      </div>
    </section>
  )
}
