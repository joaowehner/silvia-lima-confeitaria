import { useState } from 'react'
import styles from './OrderBuilder.module.css'
import { buildWhatsAppUrl, buildOrderMessage } from '../../data/business'

export function OrderBuilder() {
  const [formData, setFormData] = useState({
    type: '',
    date: '',
    guests: '',
    theme: '',
    colors: '',
    notes: '',
  })

  const getTomorrow = () => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow.toISOString().split('T')[0]
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = buildOrderMessage(formData)
    const url = buildWhatsAppUrl(message)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className={styles.section} id="encomendas">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Monte Seu Pedido</h2>
          <p className={styles.subtitle}>
            Preencha os detalhes e envie direto pelo WhatsApp
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.fieldGroup}>
            <div className={styles.field}>
              <label htmlFor="type">Tipo de encomenda</label>
              <select
                name="type"
                id="type"
                value={formData.type}
                onChange={handleChange}
              >
                <option value="">Selecione...</option>
                <option value="Bolo Decorado">Bolo Decorado</option>
                <option value="Bolo Personalizado">Bolo Personalizado</option>
                <option value="Bolo Temático">Bolo Temático</option>
                <option value="Docinhos para Festa">Docinhos para Festa</option>
                <option value="Outro">Outro</option>
              </select>
            </div>

            <div className={styles.field}>
              <label htmlFor="date">Data do evento</label>
              <input
                type="date"
                name="date"
                id="date"
                value={formData.date}
                onChange={handleChange}
                min={getTomorrow()}
              />
            </div>
          </div>

          <div className={styles.fieldGroup}>
            <div className={styles.field}>
              <label htmlFor="guests">
                Quantidade aproximada de pessoas
              </label>
              <input
                type="number"
                name="guests"
                id="guests"
                placeholder="30"
                value={formData.guests}
                onChange={handleChange}
                min="1"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="theme">Tema ou estilo</label>
              <input
                type="text"
                name="theme"
                id="theme"
                placeholder="Ex: Floral, Colorido, Minimalista..."
                value={formData.theme}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="colors">Cores preferidas</label>
            <input
              type="text"
              name="colors"
              id="colors"
              placeholder="Ex: Rosa e dourado"
              value={formData.colors}
              onChange={handleChange}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="notes">Observações</label>
            <textarea
              name="notes"
              id="notes"
              placeholder="Conte mais sobre o que imagina..."
              value={formData.notes}
              onChange={handleChange}
              rows={4}
            />
          </div>

          <button type="submit" className={styles.submitBtn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Enviar pelo WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
}
