import { Link } from 'react-router'
import { useEffect, useRef, useState } from 'react'
import {
  ArrowRight, Building2, ChevronDown, Globe, LifeBuoy, Menu, Newspaper,
  Search, Truck, Warehouse, X,
} from 'lucide-react'
import { brand } from '../config'
import Logo from './Logo'

const menus = [
  {
    label: 'Services',
    items: [
      [Warehouse, 'Warehousing', 'Storage for every type of goods', '/warehousing'],
      [Search, 'Find a Warehouse', 'Browse available space', '/find-warehouse'],
      [Truck, 'Transportation', 'Trips within and between cities', '/transportation'],
      [Search, 'Find Transport', 'Book a truck for your shipment', '/find-transport'],
    ],
  },
  {
    label: 'Software',
    items: [
      [Building2, 'Warehouse Management System (WMS)', 'Run your own warehouse operations', '/warehouse-management-system'],
    ],
  },
  {
    label: 'Resources',
    items: [
      [LifeBuoy, 'Help Center', 'Guides and answers', '/help'],
      [Newspaper, 'Blog and News', 'Updates from the team', '/blog'],
    ],
  },
  // A menu with `to` and no items is a direct link instead of a dropdown.
  { label: 'About Us', to: '/about' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const [section, setSection] = useState(null)
  const [panelTop, setPanelTop] = useState(0)
  const headerRef = useRef(null)

  // Lock page scroll while the mobile menu covers the screen.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const toggle = () => {
    setPanelTop(headerRef.current.getBoundingClientRect().bottom)
    setSection(null)
    setOpen(!open)
  }
  const close = () => setOpen(false)

  return (
    <header ref={headerRef} className="sticky top-0 z-50 border-b-4 border-accent bg-band text-band-ink">
      {brand.announcement && (
      <Link to="/contact" className="block bg-accent px-4 py-2 text-center text-sm font-semibold text-accent-ink hover:bg-accent-hover">
        {brand.announcement}
        <ArrowRight size={14} className="ml-1 inline" />
      </Link>
      )}

      <nav>
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <Logo />

          <div className="hidden items-center gap-1 lg:flex">
            {menus.map((menu) => menu.to ? (
              <Link key={menu.label} to={menu.to} className="rounded-md px-3 py-2 text-sm font-medium text-band-ink/80 hover:text-accent">
                {menu.label}
              </Link>
            ) : (
              <div key={menu.label} className="group relative">
                <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-band-ink/80 hover:text-accent">
                  {menu.label}
                  <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                </button>
                <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100">
                  <div className="w-80 border border-line border-t-4 border-t-accent bg-surface p-2 text-ink shadow-xl">
                    {menu.items.map(([Icon, label, hint, href]) => (
                      <Link key={label} to={href} className="flex gap-3 rounded-xl p-3 hover:bg-accent/15">
                        <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-accent/15 text-accent-text"><Icon size={18} /></span>
                        <span>
                          <span className="block text-sm font-semibold text-ink">{label}</span>
                          <span className="block text-xs text-muted">{hint}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <button className="grid size-9 place-items-center rounded-md border-2 border-band-ink/30 text-sm font-semibold hover:border-accent hover:text-accent" aria-label="العربية">
              ع
            </button>
            <Link to={brand.signUpUrl} className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-ink hover:bg-accent-hover">
              Sign Up
            </Link>
          </div>

          <button className="rounded-md p-2 hover:bg-band-ink/10 lg:hidden" onClick={toggle} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          style={{ top: panelTop }}
          className="fixed inset-x-0 bottom-0 flex flex-col overflow-y-auto bg-band px-5 pb-6 pt-4 text-band-ink lg:hidden"
        >
          <div className="mx-auto mt-2 w-full max-w-sm">
            <nav className="flex flex-col">
              {menus.map((menu) => {
                if (menu.to) {
                  return (
                    <Link key={menu.label} to={menu.to} onClick={close} className="flex w-full items-center border-b border-band-ink/10 px-1 py-5">
                      <span className="flex-1 font-display text-2xl font-extrabold uppercase">{menu.label}</span>
                      <ArrowRight size={18} className="text-band-ink/60" />
                    </Link>
                  )
                }
                const expanded = section === menu.label
                return (
                  <div key={menu.label}>
                    <button
                      type="button"
                      aria-expanded={expanded}
                      onClick={() => setSection(expanded ? null : menu.label)}
                      className="flex w-full items-center border-b border-band-ink/10 px-1 py-5 text-left"
                    >
                      <span className="flex-1 font-display text-2xl font-extrabold uppercase">{menu.label}</span>
                      <ChevronDown size={18} className={`text-band-ink/60 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`grid transition-[grid-template-rows] duration-300 ${expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                      <div className="overflow-hidden">
                        {menu.items.map(([Icon, label, , href]) => (
                          <Link key={label} to={href} onClick={close} className="flex items-center gap-3 border-b border-band-ink/10 px-1 py-4">
                            <span className="grid size-9 flex-none place-items-center rounded-md bg-accent text-accent-ink"><Icon size={18} /></span>
                            <span className="flex-1 text-[17px] font-medium">{label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </nav>

            <div className="mt-6 flex justify-center">
              <button type="button" aria-label="Switch to العربية" className="inline-flex h-10 items-center gap-1.5 rounded-md px-3.5 text-sm font-semibold hover:bg-band-ink/10">
                <Globe size={16} /> ع
              </button>
            </div>
            <Link to={brand.signUpUrl} onClick={close} className="mt-4 block rounded-md bg-accent py-3 text-center font-semibold text-accent-ink hover:bg-accent-hover">
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
