# Silvia Lima Confeitaria — Site Oficial

Site premium mobile-first para a Silvia Lima Confeitaria, confeitaria artesanal em Campo Grande, MS.

![Silvia Lima Confeitaria](public/favicon.svg)

## ✨ Características

- **Mobile-first**: Desenhado para smartphones, responsivo para desktop
- **3D interativo**: Bolo 3D artístico com Three.js/React Three Fiber
- **Conversão por WhatsApp**: Formulário inteligente que gera mensagem pré-preenchida
- **Zero custo**: Hospedável gratuitamente no Cloudflare Pages
- **Performance**: Lazy loading, code splitting, otimização de assets
- **Acessibilidade**: WCAG 2.2 AA, semântica HTML, navegação por teclado
- **SEO local**: Metadata, Schema.org (Bakery), Open Graph

## 🛠 Stack

- **React 19** + **TypeScript**
- **Vite** (bundler)
- **Three.js** + **React Three Fiber** + **drei** (3D)
- **Framer Motion** (animações DOM)
- **CSS Modules** (estilização)

## 📦 Instalação

```bash
npm install
```

## 🚀 Comandos

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# TypeScript check
npx tsc --noEmit
```

## 📁 Estrutura de Pastas

```
src/
├── components/
│   ├── layout/       # Header, Footer
│   ├── sections/     # Hero, BrandStatement, FeaturedCreations, etc.
│   ├── three/        # CakeScene (3D), CakeFallback
│   └── ui/           # WhatsAppFab
├── data/             # business.ts, gallery.ts, navigation.ts
├── hooks/            # useReducedMotion, useScrolled, useInView
├── styles/           # global.css (design system)
└── types/            # creation.ts
public/
├── images/           # Fotografias (placeholders atualmente)
├── favicon.svg
└── manifest.json
```

## 🖼 Como Trocar Fotos

1. Coloque as fotos reais em `/public/images/creations/`
2. Use formato `.webp` (máx 1200px de largura)
3. Edite `src/data/gallery.ts` para atualizar os caminhos
4. Marque `verified: true` em cada item com foto real
5. Consulte `MEDIA-MANIFEST.md` para detalhes de cada imagem

## 📱 Como Trocar WhatsApp

Edite `src/data/business.ts`:

```ts
whatsapp: '5567992238387', // formato internacional sem + ou espaços
whatsappFormatted: '(67) 99223-8387', // exibição formatada
```

## 🎨 Como Alterar Paleta

Edite as variáveis CSS em `src/styles/global.css`:

```css
:root {
  --color-bg: #faf8f5;
  --color-primary: #c4956a;
  --color-text: #3b2f2a;
  /* ... demais tokens */
}
```

## ➕ Como Adicionar Criações

Edite `src/data/gallery.ts` e adicione um novo item ao array `creations`:

```ts
{
  id: 'nova-criacao',
  name: 'Nome da Criação',
  category: 'Bolos Decorados',
  description: 'Descrição curta',
  tags: ['floral', 'delicado'],
  image: '/images/creations/nova-criacao.webp',
  featured: false,
  verified: true, // true se usar foto real
}
```

## 📝 Como Editar Dados Comerciais

Todos os dados da empresa estão centralizados em `src/data/business.ts`.

## 🚀 Deploy (Cloudflare Pages — Gratuito)

### Opção 1: Deploy manual (mais simples)

1. Execute `npm run build`
2. Acesse [Cloudflare Pages](https://pages.cloudflare.com/)
3. Crie um novo projeto
4. Arraste a pasta `dist/` para o upload
5. O site estará em `seu-projeto.pages.dev`

### Opção 2: Deploy via Git

1. Envie o repositório para o GitHub
2. No Cloudflare Pages, conecte o repositório
3. Configure:
   - **Build command**: `npm run build`
   - **Build output**: `dist`
4. Deploy automático a cada push

### Subdomínio sugerido

```
silvialimaconfeitaria.pages.dev
```

## ⚠️ Dados a Confirmar

| Dado | Status | Ação |
|---|---|---|
| WhatsApp (67) 99223-8387 | Provável | Confirmar com a proprietária |
| Endereço completo | Não confirmado | Publicar apenas "Campo Grande — MS" |
| Slogan | Provável | Confirmar com a proprietária |
| Horário de funcionamento | Não confirmado | Não publicado |
| Preços | Não confirmado | Não publicado |
| Formas de pagamento | Não confirmado | Não publicado |

## 📄 Licença

Este projeto foi criado sob medida para Silvia Lima Confeitaria.
