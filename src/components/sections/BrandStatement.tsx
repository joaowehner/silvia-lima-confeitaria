import { motion, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import styles from './BrandStatement.module.css'

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

export function BrandStatement() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={revealVariants}
        >
          <div className={styles.decorativeLine} aria-hidden="true" />
          <p className={styles.statement}>
            Cada criação carrega o cuidado de quem faz à mão, com ingredientes
            escolhidos e atenção a cada detalhe. Da massa ao acabamento, o sabor
            e a beleza caminham juntos.
          </p>
          <div className={styles.decorativeLine} aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  )
}
