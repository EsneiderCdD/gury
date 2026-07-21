"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import styles from "./EcommerceHeroSection.module.css"
import { featuredProducts } from "@/data/products"
import ProductCard from "@/components/reusable/ProductCard/ProductCard"
import SectionHeader from "@/components/reusable/SectionHeader/SectionHeader"

const DELAY = 4000

export default function EcommerceHeroSection() {
  const gridRef = useRef<HTMLDivElement>(null)

  function scroll(dir: "left" | "right") {
    if (!gridRef.current) return
    const card = gridRef.current.children[0] as HTMLElement | undefined
    if (!card) return
    gridRef.current.scrollBy({
      left: dir === "left" ? -card.offsetWidth : card.offsetWidth,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return
    if (grid.scrollWidth <= grid.clientWidth) return

    const id = setInterval(() => {
      const card = grid.children[0] as HTMLElement | undefined
      if (!card) return

      const maxScroll = grid.scrollWidth - grid.clientWidth

      if (grid.scrollLeft >= maxScroll - 10) {
        grid.scrollTo({ left: 0, behavior: "smooth" })
      } else {
        grid.scrollBy({ left: card.offsetWidth, behavior: "smooth" })
      }
    }, DELAY)

    return () => clearInterval(id)
  }, [])

  return (
    <section>
      <SectionHeader
        tag="Tienda oficial"
        title="Lleva el bate puesto"
        accent="bate"
        subtitle="Envíos a toda Colombia."
      />

      <div className={styles.products}>
        <div className={styles.container}>
          <div className={styles.carousel}>
            <div className={styles.grid} ref={gridRef}>
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <button
              className={`${styles.arrow} ${styles.arrowLeft}`}
              onClick={() => scroll("left")}
              aria-label="Anterior"
            >
              ‹
            </button>
            <button
              className={`${styles.arrow} ${styles.arrowRight}`}
              onClick={() => scroll("right")}
              aria-label="Siguiente"
            >
              ›
            </button>
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
