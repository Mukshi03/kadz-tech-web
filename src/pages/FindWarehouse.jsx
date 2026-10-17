import { useState } from 'react'
import { MapPin, Ruler, Thermometer } from 'lucide-react'
import { Link } from 'react-router'
import EmptyState from '../components/EmptyState'

const storageTypes = [
  ['Dry', ''],
  ['Ambient', ''],
  ['Chilled', ''],
  ['Frozen', ''],
]
const cities = ['All cities', 'Riyadh', 'Jeddah', 'Dammam']
const types = ['All types', 'Dry', 'Ambient', 'Chilled', 'Frozen']

// Add listings here, e.g. { name: '', city: 'Jeddah', type: 'Dry', size: '', price: '' }
const warehouses = []

function Pill({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-md px-4 py-1.5 text-sm font-medium transition ${active ? 'bg-accent text-accent-ink' : 'border border-line bg-surface text-muted hover:border-accent'}`}
    >
      {children}
    </button>
  )
}

function FindWarehouse() {
  const [picked, setPicked] = useState(null)
  const [city, setCity] = useState(cities[0])
  const [type, setType] = useState(types[0])

  const list = warehouses.filter((w) =>
    (city === cities[0] || w.city === city) && (type === types[0] || w.type === type))

  const showAll = (storage) => {
    setType(storage ?? types[0])
    document.getElementById('all-warehouses').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="dock mb-5"><b>Dock 01</b>Find a warehouse</p>
          <h1 className="text-[clamp(2.6rem,7vw,4.8rem)]">
            Tell us what you need to store.
            <span className="block text-accent-text">We'll match you to the right warehouse.</span>
          </h1>

          <div className="mt-10 rounded-3xl border border-line bg-surface p-6 text-left">
            <h2 className="text-lg font-semibold">What are you storing?</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {storageTypes.map(([name, temp]) => (
                <button
                  key={name}
                  onClick={() => setPicked(name)}
                  className={`flex items-center gap-3 rounded-2xl border-2 p-4 text-left transition ${picked === name ? 'border-accent bg-accent/15' : 'border-line hover:border-muted'}`}
                >
                  <Thermometer className="text-accent-text" />
                  <span>
                    <span className="block font-semibold">{name}</span>
                    {temp && <span className="block text-sm text-muted">{temp}</span>}
                  </span>
                </button>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between gap-3">
              <button onClick={() => showAll()} className="text-sm font-medium text-muted hover:text-accent-text">Skip, browse all</button>
              <button
                disabled={!picked}
                onClick={() => showAll(picked)}
                className="rounded-xl bg-accent px-6 py-2.5 font-semibold text-accent-ink hover:bg-accent-hover disabled:opacity-50"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="all-warehouses" className="bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold">All warehouses</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {cities.map((c) => <Pill key={c} active={city === c} onClick={() => setCity(c)}>{c}</Pill>)}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {types.map((t) => <Pill key={t} active={type === t} onClick={() => setType(t)}>{t}</Pill>)}
          </div>

          {list.length === 0 ? (
            <EmptyState className="mt-8" title="No warehouses listed yet" hint="Listings will appear here once added." />
          ) : (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((w, i) => (
                <div key={i} className="overflow-hidden rounded-2xl border border-line bg-surface">
                  <div className="h-36 bg-band" />
                  <div className="p-5">
                    <h3 className="text-lg font-semibold">{w.name}</h3>
                    <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted">
                      <span className="flex items-center gap-1"><MapPin size={14} /> {w.city}</span>
                      <span className="flex items-center gap-1"><Thermometer size={14} /> {w.type}</span>
                      <span className="flex items-center gap-1"><Ruler size={14} /> {w.size}</span>
                    </div>
                    <p className="mt-3 font-semibold text-accent-text">{w.price}</p>
                    <div className="mt-4 flex gap-2">
                      <Link to="/contact" className="flex-1 rounded-lg bg-accent py-2 text-center text-sm font-semibold text-accent-ink">Request a quote</Link>
                      <button className="rounded-lg border border-line px-4 text-sm font-semibold">Details</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default FindWarehouse
