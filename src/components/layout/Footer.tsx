import styles from './Footer.module.css'
import { business, buildWhatsAppUrl } from '../../data/business'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const whatsappUrl = buildWhatsAppUrl(
    `Olá! Vim pelo site da ${business.name}.`
  )

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brandInfo}>
            <h3 className={styles.brandName}>{business.name}</h3>
            <p className={styles.slogan}>{business.slogan}</p>
            <p className={styles.location}>Campo Grande — MS</p>
          </div>

          <div className={styles.links}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              WhatsApp: {business.whatsappFormatted}
            </a>
            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Instagram: {business.instagramHandle}
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} {business.name}
          </p>
        </div>
      </div>
    </footer>
  )
}
