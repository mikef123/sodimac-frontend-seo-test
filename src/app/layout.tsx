import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-gray-50 text-gray-900">
        <header className="bg-blue-600 text-white">
          <div className="max-w-5xl mx-auto px-4 py-4">
            <h1 className="text-xl font-semibold">Blog SEO – Next.js</h1>
            <p className="text-sm text-blue-100">
              Contenido optimizado para buscadores
            </p>
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-4 py-8">{children}</main>

        <footer className="border-t mt-12">
          <div className="max-w-5xl mx-auto px-4 py-4 text-sm text-gray-500">
            © 2026 – Prueba técnica Frontend
          </div>
        </footer>
      </body>
    </html>
  )
}
