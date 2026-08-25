import type { Metadata } from 'next'
import { Readex_Pro } from 'next/font/google'
import { SITE, WAQTAZAN } from '@/lib/site'
import './globals.css'

const readex = Readex_Pro({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '600', '700'],
  display: 'swap',
  variable: '--font-readex',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.origin),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description:
    'مقالات مرجعية عن حساب مواقيت الصلاة: زوايا الفجر والعشاء، وطرق الحساب الرسمية، ووقت العصر، وأوقات النهي، وأوقات انتهاء الصلوات.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'ar_AR',
    siteName: SITE.name,
  },
  robots: { index: true, follow: true },
}

/** Pointed ogee arch — the motif reserved for prayer times on waqtazan.com. */
function ArchMark() {
  return (
    <svg
      className="brand-mark"
      width="18"
      height="22"
      viewBox="0 0 18 22"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1 21V9.5C1 5 4.6 1 9 1s8 4 8 8.5V21"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M0 21h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={readex.variable}>
      <body>
        <header className="site-header">
          <div className="wrap">
            <a className="brand" href="/">
              <ArchMark />
              {SITE.name}
            </a>
            <nav>
              <a href="/">المقالات</a>
              <a href={WAQTAZAN.home}>مواقيت الصلاة اليوم</a>
            </nav>
          </div>
        </header>

        <main>
          <div className="wrap">{children}</div>
        </main>

        <footer className="site-footer">
          <div className="wrap">
            <p>
              {SITE.name} — مقالات مرجعية عن حساب أوقات الصلاة. لعرض مواقيت اليوم في مدينتك زر{' '}
              <a href={WAQTAZAN.home}>وقت أذان</a>.
            </p>
            <p>
              المحتوى هنا شرح عام لطرق الحساب، وليس فتوى. والمعتمد عند الاختلاف هو التقويم الرسمي في
              بلدك.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
