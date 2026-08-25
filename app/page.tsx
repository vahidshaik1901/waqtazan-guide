import type { Metadata } from 'next'
import { ARTICLES } from '@/lib/articles'
import { SITE, WAQTAZAN } from '@/lib/site'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: SITE.name,
    description: SITE.tagline,
    url: SITE.origin,
    inLanguage: 'ar',
    hasPart: ARTICLES.map((a) => ({
      '@type': 'Article',
      headline: a.title,
      description: a.desc,
      url: `${SITE.origin}/maqalat/${a.slug}`,
      datePublished: a.published,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />

      <h1>{SITE.name}</h1>
      <p className="lede">
        مواقيت الصلاة ليست جدولًا محفوظًا، بل حساب فلكي يعتمد على موقع المدينة وتاريخ اليوم وزوايا
        متفق عليها بين أهل الاختصاص. هذه المقالات تشرح تلك التفاصيل التي نادرًا ما تجد لها جوابًا
        واضحًا بالعربية: لماذا تختلف زاوية الفجر، ولماذا يتأخر أذان العصر ساعة في بلد دون آخر، ومتى
        ينتهي وقت كل صلاة.
      </p>
      <p>
        ولعرض مواقيت اليوم محسوبة لمدينتك بحسب التقويم المعتمد في بلدك، زر{' '}
        <a href={WAQTAZAN.home}>وقت أذان</a>.
      </p>

      <hr className="rule" />

      {ARTICLES.map((a) => (
        <a className="card" key={a.slug} href={`/maqalat/${a.slug}`}>
          <h2>{a.title}</h2>
          <p>{a.excerpt}</p>
          <span className="card-meta">قراءة {a.readingMinutes} دقائق ←</span>
        </a>
      ))}
    </>
  )
}
