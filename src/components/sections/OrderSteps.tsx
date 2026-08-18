import { motion, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { business, buildWhatsAppUrl } from '../../data/business'
import styles from './OrderSteps.module.css'

const steps = [
  {
    title: 'Conte o que está imaginando',
    description:
      'Descreva o tipo de bolo ou doce, a ocasião e o estilo que deseja.',
  },
  {
    title: 'Informe data e quantidade',
    description:
      'Precisamos saber quando será o evento e a quantidade estimada.',
  },
  {
    title: 'Alinhe os detalhes',
    description:
      'Pelo WhatsApp, alinhamos estilo, cores, acabamento e orçamento.',
  },
  {
    title: 'Sua encomenda ganha forma',
    description: 'Preparamos tudo com cuidado para o seu momento especial.',
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
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

export function OrderSteps() {
  const shouldReduceMotion = useReducedMotion()
  const whatsappUrl = buildWhatsAppUrl(
    `Olá, Silvia! Vim pelo site da ${business.name} e gostaria de solicitar um orçamento.`
  )

  return (
    <section id="encomendar" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
          className={styles.header}
        >
          <h2 className={styles.title}>Como Solicitar Orçamento</h2>
        </motion.div>

        <motion.div
          className={styles.stepsContainer}
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={styles.step}
              variants={itemVariants}
            >
              <div className={styles.numberWrapper}>
                <span className={styles.number}>
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                {index < steps.length - 1 && (
                  <div className={styles.connector} aria-hidden="true" />
                )}
              </div>
              <div className={styles.content}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.ctaWrapper}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            Fazer orçamento no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
