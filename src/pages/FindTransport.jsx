import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import EmptyState from '../components/EmptyState'

const regions = ['Riyadh', 'Makkah', 'Madinah', 'Eastern Province', 'Qassim', 'Asir', 'Tabuk', 'Hail', 'Northern Borders', 'Jazan', 'Najran', 'Al-Bahah', 'Al-Jawf']
const temps = ['Dry', 'Chilled', 'Frozen']
const trucks = ['Any', 'Closed dyna', 'Open dyna', 'Cargo van', 'Trailer', 'Flatbed', 'Curtain side', 'Closed lorry', 'Open lorry', 'Winch', 'LTL']

// Loads posted by shippers, e.g. { from: '', to: '', temp: 'Dry', truck: 'Trailer', date: '', price: '' }
const loads = []

const select = 'h-11 w-full rounded-lg border border-line bg-surface px-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/30'

function Chips({ options, value, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => onChange(o)}
          className={`rounded-md px-3.5 py-1.5 text-sm font-medium ${value === o ? 'bg-accent text-accent-ink' : 'border border-line bg-surface text-muted hover:border-accent'}`}
        >
          {o}
        </button>
      ))}
    </div>
  )
}

function FindTransport() {
  const [form, setForm] = useState({ from: '', to: '', temp: '', truck: 'Any', details: '', contact: 'direct' })
  const [sent, setSent] = useState(false)
  const [filter, setFilter] = useState({ from: '', to: '', temp: 'All', truck: 'Any', priced: false })
  const set = (k) => (v) => setForm({ ...form, [k]: v?.target ? v.target.value : v })

  const board = loads.filter((l) =>
    (!filter.from || l.from === filter.from) && (!filter.to || l.to === filter.to) &&
    (filter.temp === 'All' || l.temp === filter.temp) && (filter.truck === 'Any' || l.truck === filter.truck) &&
    (!filter.priced || l.price))

  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="dock mb-5"><b>Dock 01</b>Find transport</p>
          <h1 className="text-[clamp(2.6rem,7vw,4.8rem)]">Ship anything, anywhere in Saudi</h1>

          {sent ? (
            <div className="mt-10 flex flex-col items-center gap-3 rounded-3xl bg-surface p-10 text-center">
              <CheckCircle2 className="text-accent-text" size={44} />
              <p className="text-lg font-semibold">Request received</p>
              <p className="text-sm text-muted">Carriers will send you prices shortly.</p>
              <button onClick={() => setSent(false)} className="text-sm font-medium text-accent-text hover:underline">Post another load</button>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true) /* TODO: send form to your backend */ }}
              className="mt-10 space-y-5 rounded-3xl border border-line bg-surface p-6"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-medium">From
                  <select value={form.from} onChange={set('from')} className={`${select} mt-1.5`}>
                    <option value="" disabled>From city…</option>
                    {regions.map((r) => <option key={r}>{r}</option>)}
                  </select>
                </label>
                <label className="text-sm font-medium">To
                  <select value={form.to} onChange={set('to')} className={`${select} mt-1.5`}>
                    <option value="" disabled>To city…</option>
                    {regions.map((r) => <option key={r}>{r}</option>)}
                  </select>
                </label>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium">Choose a truck type</p>
                <Chips options={temps} value={form.temp} onChange={set('temp')} />
                <select value={form.truck} onChange={set('truck')} className={`${select} mt-3`}>
                  {trucks.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
              <label className="block text-sm font-medium">Add details (optional)
                <textarea value={form.details} onChange={set('details')} rows={3} className="mt-1.5 w-full rounded-lg border border-line p-3 text-sm outline-none focus:border-accent" />
              </label>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ['direct', 'Contact me directly', 'Carriers see your number after they send a price'],
                  ['platform', 'Through Kadz Tech only', 'Your number stays hidden, we coordinate for you'],
                ].map(([key, title, hint]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => set('contact')(key)}
                    className={`rounded-2xl border-2 p-4 text-left ${form.contact === key ? 'border-accent bg-accent/15' : 'border-line'}`}
                  >
                    <span className="block font-semibold">{title}</span>
                    <span className="block text-xs text-muted">{hint}</span>
                  </button>
                ))}
              </div>
              <button
                disabled={!form.from || !form.to || !form.temp}
                className="h-12 w-full rounded-md bg-accent font-semibold text-accent-ink hover:bg-accent-hover disabled:opacity-50"
              >
                Find me a truck
              </button>
            </form>
          )}
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-accent-text">Board</p>
              <h2 className="text-3xl font-bold">Available loads</h2>
            </div>
            <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }} className="rounded-xl bg-accent px-5 py-2.5 font-semibold text-accent-ink">Post a load</a>
          </div>

          <div className="mt-6 grid gap-3 rounded-2xl bg-surface p-4 sm:grid-cols-2 lg:grid-cols-4">
            <select value={filter.from} onChange={(e) => setFilter({ ...filter, from: e.target.value })} className={select}>
              <option value="">From: All cities</option>
              {regions.map((r) => <option key={r}>{r}</option>)}
            </select>
            <select value={filter.to} onChange={(e) => setFilter({ ...filter, to: e.target.value })} className={select}>
              <option value="">To: All cities</option>
              {regions.map((r) => <option key={r}>{r}</option>)}
            </select>
            <select value={filter.truck} onChange={(e) => setFilter({ ...filter, truck: e.target.value })} className={select}>
              {trucks.map((t) => <option key={t}>{t}</option>)}
            </select>
            <label className="flex items-center gap-2 text-sm font-medium">
              <input type="checkbox" checked={filter.priced} onChange={(e) => setFilter({ ...filter, priced: e.target.checked })} className="size-4 accent-amber-500" />
              Priced only
            </label>
            <div className="sm:col-span-2 lg:col-span-4">
              <Chips options={['All', ...temps]} value={filter.temp} onChange={(t) => setFilter({ ...filter, temp: t })} />
            </div>
          </div>

          {board.length === 0 ? (
            <EmptyState className="mt-8" title="No loads posted yet" hint="Posted loads will appear here." />
          ) : (
            <div className="mt-8 space-y-3">
              {board.map((l, i) => (
                <div key={i} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-surface p-5">
                  <p className="font-semibold">{l.from} → {l.to}</p>
                  <p className="text-sm text-muted">{l.temp} · {l.truck} · {l.date}</p>
                  <p className="font-semibold text-accent-text">{l.price}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default FindTransport
