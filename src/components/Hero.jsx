import { Link } from 'react-router'
import {
  ArrowDownToLine, ArrowUpFromLine, BarChart3, Boxes, CircleHelp, FolderTree, LayoutDashboard, MapPinned, 
  Plus, Settings, Truck, Users, Warehouse,
} from 'lucide-react'
import { brand } from '../config'
import { Dock } from './page/blocks'

const sidebar = [
  [LayoutDashboard, 'Overview'],
  [Warehouse, 'Warehouses'],
  [ArrowDownToLine, 'Inbounds'],
  [ArrowUpFromLine, 'Outbounds'],
  [Truck, 'Transportations'],
  [Boxes, 'SKUs'],
  [FolderTree, 'SKU Groups'],
  [MapPinned, 'Addresses'],
  [Users, 'Suppliers'],
  [BarChart3, 'Reports'],
  [Settings, 'Settings'],
]

// Dashboard preview data. Blank until real data is connected. [month, sqm, pallets]
const utilization = [
  ['Jan', 0, 0], ['Feb', 0, 0], ['Mar', 0, 0], ['Apr', 0, 0], ['May', 0, 0], ['Jun', 0, 0],
]

const blank = '—'

// { id, date, status, tone }
const inbounds = []

const temps = [['Dry', 'bg-dry'], ['Ambient', 'bg-ambient'], ['Chilled', 'bg-chilled'], ['Frozen', 'bg-frozen']]

function Card({ title, children, className = '' }) {
  return (
    <div className={`rounded-md border border-line bg-surface p-4 ${className}`}>
      <p className="label !text-[10px]">{title}</p>
      {children}
    </div>
  )
}

function Row({ label, value }) {
  return <p className="flex justify-between text-xs text-muted"><span>{label}</span><b className="text-ink">{value}</b></p>
}

function DashboardMockup() {
  return (
    <div className="overflow-hidden rounded-md border border-line bg-surface text-left text-ink">
      <div className="flex">
        <aside className="hidden w-52 shrink-0 flex-col bg-band p-4 text-band-ink md:flex">
          <p className="mb-4 font-display text-lg font-extrabold uppercase tracking-wide">{brand.name}</p>
          {sidebar.map(([Icon, label], i) => (
            <div key={label} className={`mb-0.5 flex items-center gap-2 px-2 py-1.5 text-xs ${i === 0 ? 'bg-accent font-semibold text-accent-ink' : 'text-band-ink/60'}`}>
              <Icon size={14} /> {label}
            </div>
          ))}
          <div className="mt-auto flex items-center gap-2 px-2 pt-4 text-xs text-band-ink/60"><CircleHelp size={14} /> Help</div>
        </aside>

        <div className="min-w-0 flex-1 bg-bg p-4 sm:p-6">
          <div className="mb-4 flex items-center justify-between gap-2">
            <p className="font-display text-2xl font-extrabold uppercase">Overview</p>
            <div className="flex items-center gap-2">
              <span className="hidden text-xs text-muted sm:inline">English</span>
              <span className="grid size-7 place-items-center bg-accent text-[10px] font-bold text-accent-ink"></span>
            </div>
          </div>

          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <div className="inline-flex border border-line bg-surface p-1 text-xs">
              <span className="bg-band px-3 py-1 font-medium text-band-ink">Wholesale</span>
            </div>
            <div className="flex gap-2 text-xs">
              <span className="rounded-md border border-line bg-surface px-3 py-1.5 font-medium">Add Item</span>
              <span className="flex items-center gap-1 rounded-md bg-accent px-3 py-1.5 font-semibold text-accent-ink"><Plus size={12} /> Request</span>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <Card title="Total Movements">
              <p className="mt-1 font-display text-4xl font-extrabold">{blank}</p>
              <div className="mt-2 space-y-0.5"><Row label="Total Inbounds" value={blank} /><Row label="Total Outbounds" value={blank} /></div>
            </Card>
            <Card title="Pending Orders">
              <p className="mt-1 font-display text-4xl font-extrabold">{blank}</p>
              <div className="mt-2 space-y-0.5"><Row label="Inbounds" value={blank} /><Row label="Outbounds" value={blank} /></div>
            </Card>
            <Card title="Storage Overview">
              <p className="mt-1 font-display text-4xl font-extrabold">{blank} <span className="font-sans text-sm font-medium text-muted">Items</span></p>
              <div className="mt-2"><Row label="Total Warehouses" value={blank} /></div>
            </Card>
          </div>

          <div className="mt-3 grid gap-3 lg:grid-cols-5">
            <Card title="Space Utilization" className="lg:col-span-3">
              <div className="mt-2 flex gap-3 text-[10px] text-muted">
                <span className="flex items-center gap-1"><i className="size-2 bg-accent" /> Pallets</span>
                <span className="flex items-center gap-1"><i className="size-2 bg-chilled" /> SqM</span>
              </div>
              <div className="mt-3 flex h-28 items-end gap-3 border-b border-line">
                {utilization.map(([m, sqm, pallets]) => (
                  <div key={m} className="flex flex-1 flex-col items-center gap-1">
                    <div className="flex h-24 w-full items-end justify-center gap-0.5">
                      <div className="w-1/3 bg-accent" style={{ height: `${(pallets / 1200) * 100}%` }} />
                      <div className="w-1/3 bg-chilled" style={{ height: `${(sqm / 1200) * 100}%` }} />
                    </div>
                    <span className="font-mono text-[10px] text-muted">{m}</span>
                  </div>
                ))}
              </div>
            </Card>
            <div className="grid gap-3 lg:col-span-2">
              <Card title="Total Space Rented">
                <p className="mt-1 text-sm"><b className="font-display text-2xl">{blank}</b> Pallets · <b className="font-display text-2xl">{blank}</b> SqM</p>
              </Card>
              <Card title="Current Space Used">
                <p className="mt-1 text-sm"><b className="font-display text-2xl">{blank}</b> Pallets · <b className="font-display text-2xl">{blank}</b> SqM</p>
                <div className="mt-2 h-1.5 bg-line"><div className="h-full w-0 bg-accent" /></div>
              </Card>
            </div>
          </div>

          <div className="mt-3 rounded-md border border-line bg-surface p-4">
            <div className="mb-1 flex items-center justify-between">
              <p className="label !text-[10px]">Inbounds</p>
              <span className="text-xs font-semibold text-accent-text">View All</span>
            </div>
            {inbounds.length === 0 && <p className="border-t border-line py-4 text-center text-xs text-muted">No inbounds yet</p>}
            {inbounds.map((row) => (
              <div key={row.id} className="flex items-center justify-between gap-2 border-t border-line py-2 text-xs">
                <span className="truncate font-mono">{row.id}</span>
                <span className="hidden text-muted sm:inline">{row.date}</span>
                <span className={`shrink-0 px-2 py-0.5 font-semibold ${row.tone}`}>{row.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section id="top" className="border-b border-line">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 sm:pt-20">
        <Dock n={1}>B2B logistics platform</Dock>
        <h1 className="mt-5 max-w-4xl text-[clamp(2.8rem,7vw,5.2rem)]">
          Everything you need for <span className="text-accent-text">logistics</span>
        </h1>
        <p className="mt-6 max-w-[52ch] text-xl text-muted">
          One connected system for storage and transportation, so your supply chain runs efficiently from end to end.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/find-warehouse" className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-accent px-6 py-3 font-semibold text-accent-ink transition hover:-translate-y-px hover:bg-accent-hover">
            Discover Warehouses
          </Link>
          <Link to="/contact" className="inline-flex items-center justify-center rounded-md border-2 border-current px-6 py-3 font-semibold transition hover:-translate-y-px hover:text-accent-text">
            Contact Us
          </Link>
        </div>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
          {temps.map(([name, color]) => (
            <span key={name} className="inline-flex items-center gap-2 font-mono text-xs text-muted"><i className={`size-2.5 ${color}`} /> {name}</span>
          ))}
        </div>

        <div className="mt-14">
          <DashboardMockup />
        </div>
      </div>
    </section>
  )
}

export default Hero
