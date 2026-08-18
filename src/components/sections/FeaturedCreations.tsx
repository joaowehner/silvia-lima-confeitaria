import { motion, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { getFeaturedCreations } from '../../data/gallery'
import { buildCreationMessage, buildWhatsAppUrl } from '../../data/business'
import styles from './FeaturedCreations.module.css'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

export function FeaturedCreations() {
  const creations = getFeaturedCreations()
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="criacoes" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
        >
          <h2 className={styles.title}>Criações em Destaque</h2>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {creations.map((creation, index) => {
            const whatsappUrl = buildWhatsAppUrl(
              buildCreationMessage(creation.name)
            )
            return (
              <motion.article
                key={creation.id}
                className={`${styles.card} ${index === 0 ? styles.featured : ''}`}
                variants={itemVariants}
              >
                <div className={styles.imageContainer}>
                  {creation.image && creation.verified ? (
                    <img
                      src={creation.image}
                      alt={creation.name}
                      loading="lazy"
                      className={styles.image}
                    />
                  ) : (
                    <div className={styles.placeholderImage}>
                      <span className={styles.placeholderIcon}>✨</span>
                      <span className={styles.placeholderText}>
                        {creation.name}
                      </span>
                    </div>
                  )}
                  <div className={styles.overlay}>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.cta}
                    >
                      Quero algo assim
                    </a>
                  </div>
                </div>
                <div className={styles.info}>
                  <span className={styles.category}>{creation.category}</span>
                  <h3 className={styles.name}>{creation.name}</h3>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
