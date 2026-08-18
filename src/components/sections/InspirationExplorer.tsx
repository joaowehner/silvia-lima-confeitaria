import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { inspirationTags, getCreationsByTag } from '../../data/gallery'
import { buildCreationMessage, buildWhatsAppUrl } from '../../data/business'
import type { Creation } from '../../types/creation'
import styles from './InspirationExplorer.module.css'

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.2 },
  },
}

export function InspirationExplorer() {
  const [selectedTag, setSelectedTag] = useState<string>('Todos')
  const shouldReduceMotion = useReducedMotion()
  const filteredCreations = getCreationsByTag(selectedTag)

  return (
    <section id="inspiracoes" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.caption}>Estilos & Criações</p>
          <h2 className={styles.title}>Encontre sua Inspiração</h2>
          <p className={styles.subtitle}>
            Explore referências visuais de portfólio para inspirar o seu momento especial.
          </p>
        </div>

        {/* Filter Chips */}
        <div className={styles.filterContainer} role="tablist" aria-label="Filtros de inspiração">
          {inspirationTags.map((tag) => {
            const isActive = selectedTag === tag
            return (
              <button
                key={tag}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`${styles.filterChip} ${isActive ? styles.activeChip : ''}`}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </button>
            )
          })}
        </div>

        {/* Dynamic Grid of Creations */}
        <motion.div
          className={styles.grid}
          layout={!shouldReduceMotion}
        >
          <AnimatePresence mode="popLayout">
            {filteredCreations.map((creation: Creation) => {
              const whatsappUrl = buildWhatsAppUrl(
                buildCreationMessage(creation.name)
              )
              return (
                <motion.article
                  key={creation.id}
                  className={styles.card}
                  layout={!shouldReduceMotion}
                  variants={shouldReduceMotion ? undefined : cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <div className={styles.cardVisual}>
                    {creation.image && creation.verified ? (
                      <img
                        src={creation.image}
                        alt={creation.name}
                        loading="lazy"
                        className={styles.cardImage}
                      />
                    ) : (
                      <div className={styles.placeholderPattern}>
                        <div className={styles.placeholderIcon}>🎂</div>
                        <span className={styles.placeholderName}>{creation.name}</span>
                        <span className={styles.placeholderTag}>
                          {creation.tags?.[0] ? `#${creation.tags[0]}` : '#artesanal'}
                        </span>
                      </div>
                    )}

                    <div className={styles.overlay}>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.ctaButton}
                      >
                        Quero algo inspirado
                      </a>
                    </div>
                  </div>

                  <div className={styles.cardInfo}>
                    <div className={styles.categoryBadge}>{creation.category}</div>
                    <h3 className={styles.cardName}>{creation.name}</h3>
                    {creation.description && (
                      <p className={styles.cardDescription}>{creation.description}</p>
                    )}
                  </div>
                </motion.article>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
