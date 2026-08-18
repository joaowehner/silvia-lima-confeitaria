import styles from './LocationSection.module.css'
import { buildWhatsAppUrl } from '../../data/business'

export function LocationSection() {
  const whatsappUrl = buildWhatsAppUrl(
    'Olá! Gostaria de saber mais sobre as criações em Campo Grande.'
  )

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <svg
            className={styles.icon}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>

          <h2 className={styles.title}>Localização</h2>
          <p className={styles.city}>Campo Grande — MS</p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Fale conosco pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
