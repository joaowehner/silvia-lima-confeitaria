export type CreationClassification =
  | 'produto_referenciado'       // Produto com referência pública em post/diretório
  | 'estilo_editorial'           // Tag/classificação visual editorial para navegação
  | 'categoria_servico'          // Categoria ampla de serviço

export type EvidenceConfidence =
  | 'confirmed_url'              // URL pública direta verificada
  | 'probable_mention'           // Menção em rede pública (Facebook/agregador local)
  | 'pending_owner_confirmation' // Fornecido no briefing, pendente de URL pública ou validação da proprietária
  | 'editorial_style'            // Classificação visual neutra da equipe de design

export type Creation = {
  id: string
  name: string
  category: string
  description?: string
  classification: CreationClassification
  sourceUrl?: string
  evidenceNote: string
  confidence: EvidenceConfidence
  image: string
  instagramUrl?: string
  featured?: boolean
  tags?: string[]
  verified: boolean
}
