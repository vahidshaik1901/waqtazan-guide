import type { MetadataRoute } from 'next'
import { ARTICLES } from '@/lib/articles'
import { SITE } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE.origin, lastModified: new Date('2026-08-25'), priority: 1 },
    ...ARTICLES.map((a) => ({
      url: `${SITE.origin}/maqalat/${a.slug}`,
      lastModified: new Date(`${a.updated}T00:00:00Z`),
      priority: 0.8,
    })),
  ]
}
