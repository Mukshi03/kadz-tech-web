import { MapPin } from 'lucide-react'
import { Link } from 'react-router'
import { brand } from '../config'
import { PageHero, Section } from '../components/page/blocks'
import EmptyState from '../components/EmptyState'

// Open roles, e.g. { title: '', team: '', location: '', type: 'Full-time' }
const jobs = []

function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={`Build the future of logistics with ${brand.name}`}
        text="We're looking for people who want to make moving goods simpler for every business in the Kingdom."
      />
      <Section title="Open positions" narrow>
        {jobs.length === 0 ? (
          <EmptyState title="No open positions right now" hint="Check back soon, or send us your CV through the contact page." />
        ) : (
          <ul className="space-y-3">
            {jobs.map((j) => (
              <li key={j.title} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-line bg-surface p-5">
                <div>
                  <p className="font-semibold">{j.title}</p>
                  <p className="flex items-center gap-1 text-sm text-muted">{j.team} · <MapPin size={13} /> {j.location} · {j.type}</p>
                </div>
                <Link to="/contact" className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-ink">Apply</Link>
              </li>
            ))}
          </ul>
        )}
      </Section>
    </>
  )
}

export default Careers
