import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ARTICLES, bySlug } from '@/lib/articles'
import { SITE, WAQTAZAN } from '@/lib/site'

import Zawaya from '@/content/zawaya-al-fajr-wal-isha.mdx'
import Turuq from '@/content/turuq-hisab-mawaqit-as-salah.mdx'
import Asr from '@/content/waqt-al-asr-al-awwal-wal-thani.mdx'
import Nahy from '@/content/awqat-an-nahy-an-as-salah.mdx'
import Nihaya from '@/content/mata-yantahi-waqt-kull-salah.mdx'

const BODIES: Record<string, React.ComponentType> = {
  'zawaya-al-fajr-wal-isha': Zawaya,
  'turuq-hisab-mawaqit-as-salah': Turuq,
  'waqt-al-asr-al-awwal-wal-thani': Asr,
  'awqat-an-nahy-an-as-salah': Nahy,
  'mata-yantahi-waqt-kull-salah': Nihaya,
}

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = bySlug(slug)
  if (!article) return {}

  const url = `${SITE.origin}/maqalat/${article.slug}`
  return {
    title: article.title,
    description: article.desc,
    keywords: article.keywords,
    alternates: { canonical: `/maqalat/${article.slug}` },
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.desc,
      url,
      locale: 'ar_AR',
      publishedTime: article.published,
      modifiedTime: article.updated,
    },
    twitter: {
      card: 'summary',
      title: article.title,
      description: article.desc,
    },
  }
}

const arabicDate = (iso: string) =>
  new Intl.DateTimeFormat('ar', { year: 'numeric', month: 'long', day: 'numeric' })
    .format(new Date(`${iso}T00:00:00Z`))
    // Intl emits bidi control chars that leak into the HTML as mojibake.
    .replace(/[‎‏؜]/g, '')

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = bySlug(slug)
  const Body = BODIES[slug]
  if (!article || !Body) notFound()

  const url = `${SITE.origin}/maqalat/${article.slug}`
  const others = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.desc,
    inLanguage: 'ar',
    datePublished: article.published,
    dateModified: article.updated,
    mainEntityOfPage: url,
    author: { '@type': 'Organization', name: 'وقت أذان', url: WAQTAZAN.home },
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE.origin },
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: SITE.name, item: SITE.origin },
      { '@type': 'ListItem', position: 2, name: article.title, item: url },
    ],
  }

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([jsonLd, breadcrumb]).replace(/</g, '\\u003c'),
        }}
      />

      <h1>{article.title}</h1>
      <p className="meta">
        نُشر في {arabicDate(article.published)} · قراءة {article.readingMinutes} دقائق
      </p>

      <Body />

      <hr className="rule" />

      <h2>مقالات أخرى</h2>
      {others.map((a) => (
        <a className="card" key={a.slug} href={`/maqalat/${a.slug}`}>
          <h2>{a.title}</h2>
          <p>{a.excerpt}</p>
        </a>
      ))}
    </article>
  )
}
