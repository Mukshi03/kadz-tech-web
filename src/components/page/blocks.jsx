import { Link } from 'react-router'
import { Car, ChevronDown, Cpu, Factory, Package, Pill, ShoppingBag, UtensilsCrossed } from 'lucide-react'
import EmptyState from '../EmptyState'

// Shared building blocks for the inner pages.

export function Button({ to, children, variant = 'primary', className = '' }) {
  const styles = variant === 'primary'
    ? 'border-transparent bg-accent text-accent-ink hover:bg-accent-hover'
    : 'border-current bg-transparent hover:text-accent-text'
  return (
    <Link to={to} className={`inline-flex items-center justify-center rounded-md border-2 px-6 py-3 font-semibold transition hover:-translate-y-px ${styles} ${className}`}>
      {children}
    </Link>
  )
}

// "DOCK 01  SERVICES" label used above section headings.
export function Dock({ n, children, className = '' }) {
  return (
    <p className={`dock ${className}`}>
      {n && <b>Dock {String(n).padStart(2, '0')}</b>}
      {children}
    </p>
  )
}

export function PageHero({ eyebrow, title, text, actions = [], children }) {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 sm:pt-20">
        {eyebrow && <Dock n={1} className="mb-5">{eyebrow}</Dock>}
        <h1 className="max-w-4xl text-[clamp(2.6rem,7vw,4.8rem)]">{title}</h1>
        {text && <p className="mt-6 max-w-[60ch] text-lg text-muted">{text}</p>}
        {actions.length > 0 && (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {actions.map(([label, to], i) => <Button key={label} to={to} variant={i ? 'secondary' : 'primary'}>{label}</Button>)}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

// band: dark industrial band like the kadz-tech site; tinted: plain surface.
export function Section({ dock, n, title, text, tinted = false, band = false, narrow = false, children, id }) {
  const bg = band ? 'bg-band text-band-ink' : tinted ? 'bg-surface' : ''
  return (
    <section id={id} className={`py-20 ${bg}`}>
      <div className={`mx-auto px-4 sm:px-6 ${narrow ? 'max-w-3xl' : 'max-w-7xl'}`}>
        {title && (
          <div className="mb-10 grid max-w-3xl gap-4">
            {dock && <Dock n={n}>{dock}</Dock>}
            <h2 className="text-[clamp(2rem,4.5vw,3.2rem)]">{title}</h2>
            {text && <p className={`text-lg ${band ? 'text-band-ink/70' : 'text-muted'}`}>{text}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

export function IconBox({ icon: Icon, size = 22, className = '' }) {
  return <span className={`grid size-11 shrink-0 place-items-center rounded-md bg-accent text-accent-ink ${className}`}><Icon size={size} /></span>
}

export function FeatureGrid({ items, cols = 3 }) {
  const grid = { 2: 'sm:grid-cols-2', 3: 'sm:grid-cols-2 lg:grid-cols-3', 4: 'sm:grid-cols-2 lg:grid-cols-4' }[cols]
  return (
    <div className={`grid gap-4 ${grid}`}>
      {items.map(({ icon, title, text }) => (
        <div key={title} className="rounded-md border border-line border-t-4 border-t-accent bg-surface p-6 text-ink">
          {icon && <IconBox icon={icon} />}
          <h3 className={`text-2xl ${icon ? 'mt-5' : ''}`}>{title}</h3>
          {text && <p className="mt-2 text-muted">{text}</p>}
        </div>
      ))}
    </div>
  )
}

// Bullet list where each point can be "Label: detail" via [label, detail].
export function Points({ items, className = '' }) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((p) => {
        const [label, detail] = Array.isArray(p) ? p : [null, p]
        return (
          <li key={label ?? detail} className="flex items-start gap-3">
            <span className="mt-2 size-2 shrink-0 bg-accent" />
            <span>{label && <b className="font-semibold">{label}: </b>}<span className="text-muted">{detail}</span></span>
          </li>
        )
      })}
    </ul>
  )
}

// Alternating text + illustration rows, used for long feature lists.
export function FeatureRows({ items }) {
  return (
    <div className="space-y-16">
      {items.map(({ icon: Icon, title, text, points = [] }, i) => (
        <div key={title} className="grid items-center gap-10 lg:grid-cols-2">
          <div className={i % 2 ? 'lg:order-2' : ''}>
            <p className="label">{String(i + 1).padStart(2, '0')}</p>
            <h2 className="mt-2 text-[clamp(1.8rem,3.5vw,2.6rem)]">{title}</h2>
            {text && <p className="mt-4 text-lg text-muted">{text}</p>}
            {points.length > 0 && <Points items={points} className="mt-6" />}
          </div>
          <div className={`relative grid aspect-[4/3] place-items-center overflow-hidden rounded-md bg-band ${i % 2 ? 'lg:order-1' : ''}`}>
            <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(var(--band-ink)_1px,transparent_1px),linear-gradient(90deg,var(--band-ink)_1px,transparent_1px)] [background-size:40px_40px]" />
            <span className="relative grid size-24 place-items-center bg-accent text-accent-ink"><Icon size={44} /></span>
          </div>
        </div>
      ))}
    </div>
  )
}

export function Steps({ items }) {
  return (
    <ol className={`grid gap-4 sm:grid-cols-2 ${items.length > 3 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
      {items.map(({ title, text, points }, i) => (
        <li key={title} className="rounded-md border border-line bg-surface p-6 text-ink">
          <span className="font-display text-5xl font-black text-accent-text">{String(i + 1).padStart(2, '0')}</span>
          <h3 className="mt-3 text-2xl">{title}</h3>
          {text && <p className="mt-2 text-muted">{text}</p>}
          {points && <Points items={points} className="mt-4 text-sm" />}
        </li>
      ))}
    </ol>
  )
}

const sectors = [
  [ShoppingBag, 'Retail & E-commerce'],
  [UtensilsCrossed, 'Food & Beverage'],
  [Factory, 'Manufacturing & Industrial'],
  [Pill, 'Pharmaceuticals'],
  [Cpu, 'Electronics & Technology'],
  [Car, 'Automotive'],
  [Package, 'Others'],
]

export function Sectors() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {sectors.map(([Icon, label]) => (
        <div key={label} className="rounded-md border border-line bg-surface p-5 text-ink">
          <IconBox icon={Icon} />
          <p className="mt-4 font-display text-xl font-extrabold uppercase">{label}</p>
        </div>
      ))}
    </div>
  )
}

// Simple data table. rows: [[label, ...values]]
export function SpecTable({ columns, rows, caption, note }) {
  return (
    <div>
      {caption && <p className="label mb-3">{caption}</p>}
      <div className="overflow-x-auto rounded-md border border-line bg-surface text-ink">
        <table className="w-full min-w-[480px] text-left text-sm">
          <thead className="bg-band text-band-ink">
            <tr>{columns.map((c) => <th key={c} className="px-5 py-3 font-mono text-xs font-semibold uppercase tracking-widest">{c}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map(([label, ...values]) => (
              <tr key={label} className="border-t border-line">
                <td className="px-5 py-3.5 font-semibold">{label}</td>
                {columns.slice(1).map((c, i) => <td key={c} className="px-5 py-3.5 text-muted">{values[i] || '—'}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && <p className="mt-3 text-sm text-muted">{note}</p>}
    </div>
  )
}

export function FaqList({ items }) {
  if (!items.length) return <EmptyState title="No questions added yet" />
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map(([q, a]) => (
        <details key={q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold">
            {q}
            <ChevronDown size={20} className="shrink-0 text-accent-text transition-transform group-open:rotate-180" />
          </summary>
          <p className={`mt-3 ${a ? 'text-muted' : 'italic text-muted'}`}>{a || 'Answer coming soon.'}</p>
        </details>
      ))}
    </div>
  )
}

// Numbered document sections (terms, privacy). Bodies are blank until written.
export function LegalSections({ sections }) {
  return (
    <div className="space-y-10">
      {sections.map(([title, body], i) => (
        <section key={title}>
          <h2 className="text-3xl">{i + 1}. {title}</h2>
          <p className={`mt-3 leading-relaxed ${body ? 'text-muted' : 'italic text-muted'}`}>{body || 'Content coming soon.'}</p>
        </section>
      ))}
    </div>
  )
}
