import { useState } from 'react'
import { Search } from 'lucide-react'
import { PageHero, Section } from '../components/page/blocks'
import EmptyState from '../components/EmptyState'
import ExpertCta from '../components/ExpertCta'

// Add terms to each group as [term, definition] pairs.
const groups = [
  ['Warehousing and storage', []],
  ['Fulfillment and e-commerce', []],
  ['Transportation and freight', []],
  ['Trade, customs, and systems', []],
]

function Dictionary() {
  const [query, setQuery] = useState('')
  const q = query.toLowerCase()

  return (
    <>
      <PageHero eyebrow="Resources" title="Logistics Dictionary" text="Plain-language definitions of logistics terms.">
        <div className="relative mt-8 max-w-xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={20} />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search terms…" className="h-12 w-full rounded-md border border-line bg-surface pl-12 pr-4 outline-none focus:border-accent" />
        </div>
      </PageHero>

      <Section narrow>
        <div className="space-y-14">
          {groups.map(([title, terms], gi) => {
            const shown = terms.filter(([t, d]) => `${t} ${d}`.toLowerCase().includes(q))
            if (q && !shown.length) return null
            return (
              <div key={title}>
                <p className="dock"><b>{String(gi + 1).padStart(2, '0')}</b>{terms.length} terms</p>
                <h2 className="mt-3 text-4xl">{title}</h2>
                {shown.length === 0 ? (
                  <EmptyState className="mt-4" title="No terms added yet" />
                ) : (
                  <dl className="mt-4 divide-y divide-line border-y border-line">
                    {shown.map(([t, d]) => (
                      <div key={t} className="grid gap-1 py-4 sm:grid-cols-[14rem_1fr] sm:gap-6">
                        <dt className="font-semibold">{t}</dt>
                        <dd className="text-muted">{d}</dd>
                      </div>
                    ))}
                  </dl>
                )}
              </div>
            )
          })}
          {q && groups.every(([, terms]) => !terms.some(([t, d]) => `${t} ${d}`.toLowerCase().includes(q))) && (
            <EmptyState title={`No terms match "${query}"`} />
          )}
        </div>
      </Section>
      <ExpertCta />
    </>
  )
}

export default Dictionary
