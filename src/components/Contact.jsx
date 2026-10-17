import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { brand, whatsappLink } from '../config'
import QuoteForm from './QuoteForm'
import { Dock } from './page/blocks'

function Contact({ asPage = false }) {
  const Heading = asPage ? 'h1' : 'h2'
  const details = [
    [Phone, brand.phone, brand.phone && `tel:${brand.phone.replace(/\s/g, '')}`],
    [MessageCircle, brand.whatsapp && 'Chat on WhatsApp', brand.whatsapp && whatsappLink],
    [Mail, brand.email, brand.email && `mailto:${brand.email}`],
    [MapPin, brand.address, null],
  ].filter(([, label]) => label)

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <Dock n={asPage ? null : 6}>Contact</Dock>
          <Heading className="mt-4 text-[clamp(2.4rem,5vw,3.6rem)]">Contact us</Heading>
          <p className="mt-4 text-lg text-muted">
            Tell us what you need to store or move and we'll get back to you with options and pricing.
          </p>
          {details.length > 0 && (
            <div className="mt-8 space-y-4">
              {details.map(([Icon, label, href]) => (
                href
                  ? <a key={label} href={href} className="flex items-center gap-3 hover:text-accent-text"><Icon size={20} className="text-accent-text" /> {label}</a>
                  : <p key={label} className="flex items-center gap-3"><Icon size={20} className="text-accent-text" /> {label}</p>
              ))}
            </div>
          )}
        </div>
        <QuoteForm showServiceFields={false} />
      </div>
    </section>
  )
}

export default Contact
