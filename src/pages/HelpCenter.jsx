import { useState } from 'react'
import { CreditCard, Rocket, Search, Settings, Truck, Warehouse } from 'lucide-react'
import { Link } from 'react-router'
import { IconBox, Section } from '../components/page/blocks'
import EmptyState from '../components/EmptyState'

const categories = [
  [Rocket, 'Getting started'],
  [Warehouse, 'Warehousing'],
  [Truck, 'Transportation'],
  [CreditCard, 'Billing & payments'],
  [Settings, 'Account & settings'],
]

// Help articles, e.g. { title: '', category: 'Getting started', body: '' }
const articles = []

function HelpCenter() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState(null)
  const results = articles.filter((a) =>
    (!category || a.category === category) && a.title.toLowerCase().includes(query.toLowerCase()))

  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="dock mb-5"><b>Dock 01</b>Help center</p>
          <h1 className="text-[clamp(2.6rem,7vw,4.8rem)]">How can we help?</h1>
          <div className="relative mt-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={20} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for articles…"
              className="h-14 w-full rounded-2xl border border-line bg-surface pl-12 pr-4 outline-none focus:border-accent"
            />
          </div>
        </div>
      </section>

      <Section title="Browse by topic">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(([icon, label]) => (
            <button
              key={label}
              onClick={() => setCategory(category === label ? null : label)}
              className={`flex items-center gap-4 rounded-2xl border-2 bg-surface p-5 text-left transition ${category === label ? 'border-accent' : 'border-line hover:border-muted'}`}
            >
              <IconBox icon={icon} />
              <span>
                <span className="block font-semibold">{label}</span>
                <span className="block text-sm text-muted">{articles.filter((a) => a.category === label).length} articles</span>
              </span>
            </button>
          ))}
        </div>

        <div className="mt-10">
          {results.length === 0 ? (
            <EmptyState title="No articles yet" hint="Help articles will appear here once added." />
          ) : (
            <ul className="divide-y divide-line rounded-2xl border border-line bg-surface">
              {results.map((a) => <li key={a.title} className="p-5 font-medium">{a.title}</li>)}
            </ul>
          )}
        </div>

        <p className="mt-10 text-center text-muted">
          Can't find what you're looking for? <Link to="/contact" className="font-semibold text-accent-text hover:underline">Contact us</Link>
        </p>
      </Section>
    </>
  )
}

export default HelpCenter
