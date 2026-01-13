import Link from 'next/link'
import { articles } from '@/data/articles'
import Image from 'next/image'

export const metadata = {
  title: 'Artículos de SEO',
  description: 'Listado de artículos optimizados para SEO con Next.js',
}

export default function HomePage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-8">Artículos de SEO</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/articulos/${article.slug}`}
            className="block"
          >
            <Image
              src="/article-placeholder.png"
              alt={`Imagen ilustrativa del artículo ${article.title}`}
              width={800}
              height={400}
              className="rounded mb-6"
            />
            <article>
              <h2 className="text-xl font-semibold mb-2 text-blue-600">
                {article.title}
              </h2>

              <p className="text-gray-600 text-sm">{article.description}</p>
            </article>
          </Link>
        ))}
      </div>
    </section>
  )
}
