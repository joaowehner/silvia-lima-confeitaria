import { motion, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import styles from './BrandStatement.module.css'

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
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
            Cada criação carrega o cuidado de um trabalho feito à mão. Do
            formato ao acabamento, cada detalhe é pensado para fazer parte de
            momentos especiais.
          </p>
          <div className={styles.decorativeLine} aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  )
}
