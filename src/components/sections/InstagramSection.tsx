import styles from './InstagramSection.module.css'
import { business } from '../../data/business'

const baseUrl = import.meta.env.BASE_URL

const instagramPosts = [
  {
    image: `${baseUrl}images/social/instagram-01.webp`,
    alt: 'Bolo com textura e flores - Silvia Lima Confeitaria',
    url: 'https://www.instagram.com/silvialimaconfeitaria/p/C6rQPxGOrHt/',
  },
  {
    image: `${baseUrl}images/social/instagram-02.webp`,
    alt: 'Wave Cake branco com morangos - Silvia Lima Confeitaria',
    url: 'https://www.instagram.com/silvialimaconfeitaria/p/Dac8Daau3CP/',
  },
  {
    image: `${baseUrl}images/social/instagram-03.webp`,
    alt: 'Mini Pães de Mel e Mini Brownies - Silvia Lima Confeitaria',
    url: 'https://www.instagram.com/silvialimaconfeitaria/p/DboDd4djrmN/',
  },
  {
    image: `${baseUrl}images/social/instagram-04.webp`,
    alt: 'Bolo temático personalizado - Silvia Lima Confeitaria',
    url: 'https://www.instagram.com/silvialimaconfeitaria/p/Db5-ArfOqoY/',
  },
  {
    image: `${baseUrl}images/social/instagram-05.webp`,
    alt: 'Bolo com mini rosetas amarelas - Silvia Lima Confeitaria',
    url: 'https://www.instagram.com/silvialimaconfeitaria/p/DcBTxxIJBbO/',
  },
  {
    image: `${baseUrl}images/social/instagram-06.webp`,
    alt: 'Docinhos de festa tradicionais - Silvia Lima Confeitaria',
    url: 'https://www.instagram.com/silvialimaconfeitaria/p/DboDd4djrmN/',
  },
]

export function InstagramSection() {
  return (
    <section id="instagram" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Acompanhe Nossas Criações</h2>
          <p className={styles.handle}>{business.instagramHandle}</p>
          <a
            href={business.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            Seguir no Instagram
          </a>
          <p className={styles.note}>
            Siga nosso perfil para ver as novidades mais recentes
          </p>
        </div>

        <div className={styles.grid}>
          {instagramPosts.map((post, i) => (
            <a
              key={i}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.postCard}
            >
              <img
                src={post.image}
                alt={post.alt}
                className={styles.postImage}
              />
              <div className={styles.postOverlay}>
                <span className={styles.instagramIcon}>Ver no Instagram</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
