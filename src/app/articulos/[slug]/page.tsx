import { notFound } from 'next/navigation'
import { articles, getArticleBySlug } from '@/data/articles'
import Link from 'next/link'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    return {
      title: 'Artículo no encontrado',
      description: 'El artículo solicitado no existe',
    }
  }

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
    },
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  return (
    <>
      <Link
        href="/"
        className="inline-block mb-6 text-blue-600 hover:underline"
      >
        ← Volver al listado
      </Link>
      <article className="bg-white rounded-lg border p-8">
        <header className="mb-6">
          <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
          <p className="text-gray-500 text-sm">{article.description}</p>
        </header>

        <section>
          <p className="text-gray-700 leading-relaxed">{article.content}</p>
        </section>
      </article>
    </>
  )
}
