import styles from './FinalCTA.module.css'
import { business, buildWhatsAppUrl } from '../../data/business'

export function FinalCTA() {
  const whatsappUrl = buildWhatsAppUrl(
    `Olá, Silvia! Vim pelo site da ${business.name} e gostaria de pedir um orçamento personalizado.`
  )

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Vamos criar algo juntos?</h2>
        <p className={styles.subtitle}>
          Conte sua ideia e receba um orçamento personalizado
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          Pedir Orçamento pelo WhatsApp
        </a>
      </div>
    </section>
  )
}
