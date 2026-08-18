import { Suspense, lazy } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import styles from './Hero.module.css'
import CakeFallback from '../three/CakeFallback'
import { business, buildWhatsAppUrl } from '../../data/business'

const CakeScene = lazy(() => import('../three/CakeScene'))

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
  },
}

export function Hero() {
  const shouldReduceMotion = useReducedMotion()

  const whatsappUrl = buildWhatsAppUrl(
    `Olá, Silvia! Vim pelo site da ${business.name} e gostaria de solicitar um orçamento.`
  )

  const handleScrollToCreations = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    document.getElementById('criacoes')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Brand Text Header */}
        <div className={styles.textContent}>
          <motion.div
            className={styles.brand}
            initial="hidden"
            animate="visible"
            variants={shouldReduceMotion ? undefined : fadeUp}
          >
            <span className={styles.cityTag}>Campo Grande — MS</span>
            <h1 className={styles.title}>Silvia Lima</h1>
            <p className={styles.subtitle}>Confeitaria Artesanal</p>
            <p className={styles.slogan}>
              <em>“{business.slogan}”</em>
            </p>
          </motion.div>

          {/* Desktop CTAs placed inside text container */}
          <motion.div
            className={styles.desktopCtas}
            initial="hidden"
            animate="visible"
            variants={shouldReduceMotion ? undefined : fadeIn}
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryCta}
            >
              Pedir Orçamento
            </a>
            <a
              href="#criacoes"
              onClick={handleScrollToCreations}
              className={styles.secondaryCta}
            >
              Ver Criações
            </a>
          </motion.div>
        </div>

        {/* 3D Cake Centerpiece */}
        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Suspense fallback={<CakeFallback />}>
            <CakeScene />
          </Suspense>
          <span className={styles.interactiveHint} aria-hidden="true">
            Toque e gire o bolo
          </span>
        </motion.div>

        {/* Mobile CTAs placed below 3D Cake for first-screen conversion */}
        <motion.div
          className={styles.mobileCtas}
          initial="hidden"
          animate="visible"
          variants={shouldReduceMotion ? undefined : fadeIn}
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryCta}
          >
            Pedir Orçamento
          </a>
          <a
            href="#criacoes"
            onClick={handleScrollToCreations}
            className={styles.secondaryCta}
          >
            Ver Criações
          </a>
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        aria-hidden="true"
      >
        <div className={styles.scrollLine} />
      </motion.div>
    </section>
  )
}
