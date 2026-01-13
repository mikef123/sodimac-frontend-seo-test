export type Article = {
  id: number
  title: string
  slug: string
  description: string
  content: string
}

export const articles: Article[] = [
  {
    id: 1,
    title: 'SEO en Next.js: Guía práctica',
    slug: 'seo-en-nextjs',
    description: 'Cómo mejorar el SEO usando Next.js y rendering en servidor.',
    content:
      'Next.js permite mejorar el SEO gracias a su capacidad de renderizar contenido en el servidor usando SSG y SSR.',
  },
  {
    id: 2,
    title: 'SSG vs SSR: ¿Cuál elegir?',
    slug: 'ssg-vs-ssr',
    description:
      'Diferencias clave entre Static Site Generation y Server Side Rendering.',
    content:
      'SSG genera HTML en build time mientras que SSR lo hace en cada request. La elección depende del tipo de contenido.',
  },
  {
    id: 3,
    title: 'Metadata dinámica para SEO',
    slug: 'metadata-dinamica-seo',
    description: 'Cómo usar metadata dinámica para mejorar el posicionamiento.',
    content:
      'La metadata dinámica permite personalizar títulos y descripciones por página, mejorando la indexación.',
  },
  {
    id: 4,
    title: 'Optimización de performance en Next.js',
    slug: 'performance-nextjs',
    description: 'Buenas prácticas para mejorar Core Web Vitals en Next.js.',
    content:
      'Next.js optimiza imágenes, divide el código automáticamente y mejora el rendimiento inicial.',
  },
  {
    id: 5,
    title: 'Accesibilidad y SEO',
    slug: 'accesibilidad-y-seo',
    description: 'Cómo la accesibilidad impacta positivamente el SEO.',
    content:
      'El uso de HTML semántico y atributos alt mejora tanto la accesibilidad como el SEO.',
  },
]

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug)
}
