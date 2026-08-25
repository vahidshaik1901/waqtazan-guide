# waqtazan-guide

**دليل مواقيت الصلاة** — a small Arabic reference site about how Islamic prayer
times are calculated. Companion property to [waqtazan.com](https://waqtazan.com).

Live: <https://waqtazan-guide.vercel.app>

## Articles

| Slug | Topic |
| --- | --- |
| `zawaya-al-fajr-wal-isha` | Fajr/Isha twilight angles and why authorities differ |
| `turuq-hisab-mawaqit-as-salah` | Reference table of official calculation methods |
| `waqt-al-asr-al-awwal-wal-thani` | Asr: first vs second shadow length |
| `awqat-an-nahy-an-as-salah` | The three prohibited-prayer windows |
| `mata-yantahi-waqt-kull-salah` | When each prayer's window ends |

## Stack

Next.js 15 (App Router) · TypeScript · MDX · fully static. No database, no
client-side fetching.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Editorial rules

These are inherited from waqtazan.com and are not stylistic preferences:

1. **Accuracy outranks everything.** Calculation angles in these articles are
   taken from the production engine, not from memory. Quranic text and tafsir
   are quoted from canonical sources with attribution — never reconstructed.
2. **No scripture or hadith from memory.** If a verse or commentary is added,
   it must be sourced and attributed inline.
3. **RTL via logical CSS properties only** (`margin-inline`, `text-align: start`).
   Physical `left`/`right` properties are defects.
4. **Degree readings need an LTR isolate** — `<span className="ltr">18°</span>`.
   Bare `18°` in an RTL run reorders to `°18`. This also rules degree signs out
   of plain-text metadata (titles, descriptions), where no isolate can be applied.
5. **No geometric star constructions** in any visual. Overlapping squares or
   triangles can read as a hexagram, which is culturally unacceptable here. The
   approved motif vocabulary is crescents, pointed arches, and single diamonds.
6. **Evergreen phrasing** — never hardcode "X countries" or "Y cities" counts.
7. **Articles must not target city-transactional keywords**
   (`مواقيت الصلاة في {city}`, `اذان {city}`). Those belong to waqtazan.com; an
   article here that outranks a city page for a city term is a defect, not a win.

## Content sourcing

Quranic text: King Fahd Complex (Madinah) mushaf, via the quran.com corpus.
Tafsir: التفسير الميسر (مجمع الملك فهد) and القرطبي — الجامع لأحكام القرآن,
attributed inline where quoted. Calculation angles: verified against the
`adhan` engine and the official-source anchors used in the waqtazan.com harness.

The fiqh content is a general explanation of well-known scholarly positions,
not a fatwa, and every article says so.
