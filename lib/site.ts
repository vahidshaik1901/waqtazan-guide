export const SITE = {
  origin: 'https://waqtazan-guide.vercel.app',
  name: 'دليل مواقيت الصلاة',
  tagline: 'مقالات مرجعية عن حساب أوقات الصلاة وطرقها المعتمدة',
  locale: 'ar',
} as const

/**
 * Outbound targets on waqtazan.com. Every path here was verified to return 200
 * before it shipped — a dead link on a companion site is worse than no link.
 */
export const WAQTAZAN = {
  home: 'https://waqtazan.com/',
  blogCalc: 'https://waqtazan.com/ar/blog/how-prayer-times-are-calculated',
  about: 'https://waqtazan.com/ar/about',
  api: 'https://waqtazan.com/api/v1/timings/saudi-arabia/riyadh',
  riyadh: 'https://waqtazan.com/ar/prayer-times/saudi-arabia/riyadh',
  jeddah: 'https://waqtazan.com/ar/prayer-times/saudi-arabia/jeddah',
  makkah: 'https://waqtazan.com/ar/prayer-times/saudi-arabia/makkah',
  cairo: 'https://waqtazan.com/ar/prayer-times/egypt/cairo',
  saudiHub: 'https://waqtazan.com/ar/prayer-times/saudi-arabia',
  egyptHub: 'https://waqtazan.com/ar/prayer-times/egypt',
} as const
