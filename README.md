# Prueba Técnica – Frontend SEO con Next.js

Este proyecto es una solución a la prueba técnica de Frontend con enfoque en SEO, utilizando **Next.js (App Router)** y priorizando pre-renderizado, metadata dinámica y HTML semántico.

---

## Tecnologías utilizadas

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

---

##  Cómo ejecutar el proyecto

```bash
npm install
npm run dev

## Estructura del proyecto

Home: listado de artículos con URLs semánticas

Detalle de artículo: página dinámica basada en slug

404 personalizado

Datos mockeados desde un archivo local

## Estrategia de Rendering

Home (/)
Utiliza Static Site Generation (SSG) para garantizar que el listado de artículos sea completamente indexable por motores de búsqueda y tenga un excelente performance inicial.

Detalle de artículo (/articulos/[slug])
También utiliza SSG, generando las rutas dinámicas en build time mediante generateStaticParams.
Esto permite servir HTML pre-renderizado para cada artículo, ideal para sitios orientados a SEO.

## Decisiones de SEO

HTML completamente pre-renderizado

URLs amigables y semánticas

Uso correcto de etiquetas semánticas (main, article, header, section)

Metadata dinámica por página (title y description)

Manejo de página 404 personalizada

Enlaces accesibles y crawlables

## Performance

Server Components por defecto (sin client-only rendering innecesario)

Uso de next/image para optimización de imágenes

Estructura simple y ligera enfocada en Core Web Vitals

## Accesibilidad

Uso de HTML semántico

Imágenes con atributo alt

Enlaces claros y accesibles

Navegación sin dependencias de JavaScript del lado del cliente
