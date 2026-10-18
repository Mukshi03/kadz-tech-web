import { Link } from 'react-router'
import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { brand, whatsappLink } from '../config'
import Logo from './Logo'

const columns = [
  ['Company', [['About Us', '/about'], ['Careers', '/careers'], ['Blog and News', '/blog']]],
  ['Services', [['Find a Warehouse', '/find-warehouse'], ['Warehousing', '/warehousing'], ['Transportation', '/transportation']]],
  ['Products', [['Warehouse Management System (WMS)', '/warehouse-management-system']]],
  ['Helpful Links', [['Help Center', '/help'], ['Logistics Dictionary', '/dictionary'], ['Terms and Conditions', '/terms-conditions'], ['Privacy Policy', '/privacy-policy']]],
]

const socials = [
  ['X', brand.social.x, 'M18.9 2H22l-7.6 8.7L23 22h-6.8l-5.3-6.9L4.8 22H1.7l8.1-9.3L1.5 2h7l4.8 6.3zm-1.2 18h1.7L7.4 3.9H5.6z'],
  ['LinkedIn', brand.social.linkedin, 'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M3 9h4v12H3zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21h-4z'],
  ['Instagram', brand.social.instagram, 'M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10m0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4M17.3 5.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2m0 1.8A3.7 3.7 0 0 0 3.8 7.5v9a3.7 3.7 0 0 0 3.7 3.7h9a3.7 3.7 0 0 0 3.7-3.7v-9a3.7 3.7 0 0 0-3.7-3.7z'],
  ['TikTok', brand.social.tiktok, 'M16.6 2c.4 2.6 2 4.3 4.6 4.5v3.2c-1.6.1-3-.4-4.5-1.3v6.1c0 7.7-8.4 10.1-11.8 4.6-2.2-3.6-.9-9.8 6.1-10v3.4c-.5.1-1.1.2-1.6.4-1.6.5-2.5 1.5-2.2 3.3.5 3.4 6.7 4.4 6.2-2.2V2z'],
]

function StoreBadge({ href, store, sub }) {
  return (
    <a href={href || '#'} className="flex items-center gap-2 rounded-xl bg-accent px-4 py-2 text-accent-ink hover:bg-accent-hover">
      <svg viewBox="0 0 24 24" className="size-6 fill-current" aria-hidden>
        {store === 'App Store'
          ? <path d="M16.4 12.6c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.9-1.7 0-3.3 1-4.2 2.6-1.8 3.1-.5 7.7 1.3 10.2.8 1.2 1.8 2.6 3.1 2.5 1.3 0 1.7-.8 3.3-.8s1.9.8 3.3.8c1.4 0 2.2-1.2 3-2.5 1-1.4 1.4-2.8 1.4-2.8s-2.4-1-2.4-4.1M13.9 4.9c.7-.8 1.2-2 1-3.1-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3 1.1.1 2.2-.6 2.9-1.4" />
          : <path d="M3.6 2.3 13.4 12l-9.8 9.7c-.4-.2-.6-.6-.6-1.1V3.4c0-.5.2-.9.6-1.1m11 10.9 2.6 2.6-11.3 6.4zm3.8-3.8 2.7 1.5c.8.5.8 1.7 0 2.2l-2.7 1.5-2.9-2.6zM5.9 1.8l11.3 6.4-2.6 2.6z" />}
      </svg>
      <span className="leading-tight">
        <span className="block text-[10px] opacity-80">{sub}</span>
        <span className="block text-sm font-semibold">{store}</span>
      </span>
    </a>
  )
}

function Footer() {
  const [chatOpen, setChatOpen] = useState(true)

  return (
    <>
      <footer className="border-t-4 border-accent bg-band pt-16 text-band-ink/70">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-3 lg:grid-cols-6">
          <div className="md:col-span-3 lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm">{brand.tagline}. Storage and transportation for businesses across Saudi Arabia.</p>
            <div className="mt-5 flex gap-2">
              {socials.map(([label, href, d]) => (
                <a key={label} href={href || '#'} aria-label={label} className="grid size-9 place-items-center rounded-md border border-band-ink/20 hover:border-accent hover:text-accent">
                  <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden><path d={d} /></svg>
                </a>
              ))}
            </div>
          </div>
          {columns.map(([title, links]) => (
            <div key={title}>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">{title}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {links.map(([label, href]) => (
                  <li key={label}><Link to={href} className="hover:text-band-ink">{label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 flex max-w-7xl flex-col items-start justify-between gap-4 px-4 sm:px-6 md:flex-row md:items-center">
          <p className="font-display text-2xl font-extrabold uppercase text-band-ink">Get the {brand.name} Merchants app</p>
          <div className="flex gap-3">
            <StoreBadge href={brand.appStoreUrl} store="App Store" sub="Download on" />
            <StoreBadge href={brand.playStoreUrl} store="Google Play" sub="Download on" />
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-band-ink/10 px-4 py-6 font-mono text-xs uppercase tracking-widest sm:px-6">
          © {brand.name} {new Date().getFullYear()}. All Rights Reserved.
        </div>
      </footer>

      <div className="fixed bottom-5 right-5 z-50 flex items-end gap-3">
        {chatOpen && (
          <div className="relative hidden rounded-md border-l-4 border-accent bg-band px-4 py-3 text-sm font-medium text-band-ink shadow-xl sm:block">
            Have any questions? 👋
            <button onClick={() => setChatOpen(false)} aria-label="Dismiss" className="absolute -right-2 -top-2 grid size-5 place-items-center rounded-full bg-line text-muted"><X size={12} /></button>
          </div>
        )}
        <a
          href={whatsappLink}
          target={brand.whatsapp ? '_blank' : undefined}
          rel="noreferrer"
          aria-label="Chat with us"
          className="grid size-14 place-items-center rounded-md bg-accent text-accent-ink transition hover:scale-105"
        >
          <MessageCircle size={26} />
        </a>
      </div>
    </>
  )
}

export default Footer
