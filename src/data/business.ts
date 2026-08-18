/**
 * Centralized business data for Silvia Lima Confeitaria.
 * 
 * MATRIZ DE RASTREABILIDADE DE FONTES EXTERNAS:
 * - Nome e Cidade: Confirmados via diretórios locais de Campo Grande MS
 *   (DirectMap: http://directmap.info, Maptons: https://maptons.com) e postagens com #silvialimaconfeitaria
 * - Instagram: https://www.instagram.com/silvialimaconfeitaria/ (Perfil direto na plataforma)
 * - WhatsApp (67) 99223-8387: STATUS = pending_owner_confirmation
 *   (Não indexado em buscadores abertos; mantido funcional para preview de conversão)
 * - Slogan "Adoçando sua vida na medida certa": STATUS = pending_owner_confirmation
 *   (Fornecido no briefing de marca; pendente de validação direta)
 * - Endereço completo: Oculto da produção (aguardando confirmação da proprietária)
 */

export const business = {
  name: 'Silvia Lima Confeitaria',
  shortName: 'Silvia Lima',
  instagramHandle: '@silvialimaconfeitaria',
  instagramUrl: 'https://www.instagram.com/silvialimaconfeitaria/',
  city: 'Campo Grande',
  state: 'MS',
  stateFullName: 'Mato Grosso do Sul',
  
  // WhatsApp: mantido no preview com status 'pending_owner_confirmation'
  whatsapp: '5567992238387',
  whatsappFormatted: '(67) 99223-8387',
  whatsappStatus: 'pending_owner_confirmation' as const,

  // Slogan: status 'pending_owner_confirmation'
  slogan: 'Adoçando sua vida na medida certa',
  sloganStatus: 'pending_owner_confirmation' as const,
} as const

export const whatsappBaseUrl = `https://wa.me/${business.whatsapp}`

export function buildWhatsAppUrl(message: string): string {
  return `${whatsappBaseUrl}?text=${encodeURIComponent(message)}`
}

export function buildOrderMessage(fields: Record<string, string>): string {
  const lines = [
    `Olá, Silvia! Vim pelo site da ${business.name} e gostaria de solicitar um orçamento.`,
    '',
  ]

  const fieldLabels: Record<string, string> = {
    type: 'Tipo de encomenda',
    date: 'Data do evento',
    guests: 'Quantidade aproximada',
    theme: 'Tema/estilo',
    colors: 'Cores',
    reference: 'Referência',
    notes: 'Observações',
  }

  for (const [key, value] of Object.entries(fields)) {
    if (value.trim()) {
      const label = fieldLabels[key] || key
      lines.push(`${label}: ${value}`)
    }
  }

  return lines.join('\n')
}

export function buildCreationMessage(creationName: string): string {
  return [
    `Olá, Silvia! Vim pelo site da ${business.name} e gostei desta criação: ${creationName}.`,
    '',
    'Gostaria de pedir um orçamento para algo inspirado nela.',
  ].join('\n')
}
