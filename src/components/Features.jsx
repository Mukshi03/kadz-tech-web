import { Link } from 'react-router'
import { ArrowRight, Check, MapPin, ShieldCheck, Star, Truck, Warehouse } from 'lucide-react'
import { brand } from '../config'
import { Dock } from './page/blocks'

// Illustrative cards that sit on the dark panels.
const card = 'w-full max-w-sm rounded-md border-t-4 border-accent bg-surface p-5 text-ink shadow-xl'

function WarehouseVisual() {
  return (
    <div className={card}>
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-md bg-accent text-accent-ink"><Warehouse size={22} /></span>
          <div>
            <p className="font-semibold">Warehouse name</p>
            <p className="text-sm text-muted">City · Type</p>
          </div>
        </div>
        <span className="flex items-center gap-1 text-sm font-semibold"><Star size={14} className="text-accent" /> —</span>
      </div>
      <div className="mt-5 flex justify-between text-sm"><span className="label">Capacity</span><b>—</b></div>
      <div className="mt-2 h-2 bg-line"><div className="h-full w-0 bg-accent" /></div>
      <div className="mt-5 flex gap-2 text-xs font-semibold">
        <span className="flex items-center gap-1 bg-bg px-2.5 py-1 text-muted"><ShieldCheck size={12} /> Licence</span>
        <span className="bg-bg px-2.5 py-1 text-muted">Term</span>
      </div>
    </div>
  )
}

function TransportVisual() {
  return (
    <div className={card}>
      <div className="flex items-center justify-between">
        <div>
          <p className="label">From</p>
          <p className="font-display text-2xl font-extrabold uppercase">—</p>
        </div>
        <div className="relative mx-4 flex-1 border-t-2 border-dashed border-line">
          <span className="absolute -top-4 left-1/2 grid size-8 -translate-x-1/2 place-items-center bg-accent text-accent-ink"><Truck size={16} /></span>
        </div>
        <div className="text-right">
          <p className="label">To</p>
          <p className="font-display text-2xl font-extrabold uppercase">—</p>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between bg-bg p-3 text-sm">
        <span className="flex items-center gap-2 text-muted"><MapPin size={14} /> ETA</span>
        <b>—</b>
      </div>
    </div>
  )
}

function FulfillmentVisual() {
  const steps = ['Picked', 'Packed', 'Shipped']
  return (
    <div className={card}>
      <p className="font-semibold">Order #—</p>
      <p className="text-sm text-muted">Store · Platform</p>
      <div className="mt-6 flex items-center">
        {steps.map((s, i) => (
          <div key={s} className="flex flex-1 items-center last:flex-none">
            <div className="flex flex-col items-center gap-1">
              <span className="grid size-8 place-items-center border-2 border-line text-muted"><Check size={16} /></span>
              <span className="font-mono text-[11px] uppercase">{s}</span>
            </div>
            {i < steps.length - 1 && <div className="mx-2 mb-5 h-0.5 flex-1 bg-line" />}
          </div>
        ))}
      </div>
    </div>
  )
}

const features = [
  {
    title: 'Warehousing & Fulfillment',
    text: 'Store your goods and track your inventory from one dashboard.',
    Visual: WarehouseVisual,
    to: '/warehousing',
  },
  {
    title: 'Transportation within and between cities',
    text: 'Move goods between warehouses, stores and customers.',
    Visual: TransportVisual,
    to: '/transportation',
  },
  {
    title: 'E-commerce Fulfillment',
    text: 'Your online orders picked, packed and shipped for you.',
    Visual: FulfillmentVisual,
    to: '/fulfillment',
  },
]

function Features() {
  return (
    <section id="platform" className="bg-band py-20 text-band-ink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid max-w-3xl gap-4">
          <Dock n={3}>How it works</Dock>
          <h2 className="text-[clamp(2rem,4.5vw,3.2rem)]">More about our services at {brand.name}</h2>
          <p className="text-lg text-band-ink/70">
            Storage, transport and e-commerce fulfillment in one place.
          </p>
        </div>

        <div className="mt-14 space-y-16">
          {features.map(({ title, text, Visual, to }, i) => (
            <div key={title} className="grid items-center gap-10 lg:grid-cols-2">
              <div className={i % 2 ? 'lg:order-2' : ''}>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-2 text-[clamp(1.8rem,3.5vw,2.6rem)]">{title}</h3>
                <p className="mt-4 text-lg text-band-ink/70">{text}</p>
                <Link to={to} className="mt-6 inline-flex items-center gap-1 font-semibold text-accent hover:gap-2 hover:transition-all">
                  How It Works <ArrowRight size={16} />
                </Link>
              </div>
              <div className={`relative grid aspect-[4/3] place-items-center overflow-hidden rounded-md border border-band-ink/10 p-6 ${i % 2 ? 'lg:order-1' : ''}`}>
                <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(var(--band-ink)_1px,transparent_1px),linear-gradient(90deg,var(--band-ink)_1px,transparent_1px)] [background-size:40px_40px]" />
                <div className="relative w-full max-w-sm"><Visual /></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
