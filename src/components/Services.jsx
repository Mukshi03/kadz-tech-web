import { useState } from 'react'
import { PackageOpen, Truck, Warehouse } from 'lucide-react'
import QuoteForm from './QuoteForm'
import { Dock } from './page/blocks'

const services = [
  {
    key: 'warehousing',
    label: 'Warehousing',
    icon: Warehouse,
    text: 'Storage space for your goods, booked when you need it.',
  },
  {
    key: 'transportation',
    label: 'Transportation',
    icon: Truck,
    text: 'Trucks for moving goods within and between cities.',
  },
  {
    key: 'fulfillment',
    label: 'Fulfillment',
    icon: PackageOpen,
    text: 'We pick, pack and ship your online orders.',
  },
]

function Services() {
  const [active, setActive] = useState(services[0].key)
  const current = services.find((s) => s.key === active)

  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid max-w-3xl gap-4">
          <Dock n={2}>Services</Dock>
          <h2 className="text-[clamp(2rem,4.5vw,3.2rem)]">Store it, pack it, move it</h2>
          <p className="text-lg text-muted">Our core services, built to make every part of your logistics simpler.</p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <div className="grid content-start gap-3">
            {services.map(({ key, label, icon: Icon, text }) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`flex items-start gap-4 rounded-md border-2 p-5 text-left transition ${active === key ? 'border-accent bg-surface' : 'border-line hover:border-muted'}`}
              >
                <span className={`grid size-11 shrink-0 place-items-center rounded-md ${active === key ? 'bg-accent text-accent-ink' : 'bg-surface text-muted'}`}><Icon size={22} /></span>
                <span>
                  <span className="block font-display text-2xl font-extrabold uppercase">{label}</span>
                  {active === key && <span className="mt-1 block text-sm text-muted">{text}</span>}
                </span>
              </button>
            ))}
          </div>

          <div>
            <p className="label mb-3">Get a quote · {current.label}</p>
            <QuoteForm key={active} service={active} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
