import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

const regions = ['Riyadh', 'Makkah', 'Madinah', 'Eastern Province', 'Qassim', 'Asir', 'Tabuk', 'Hail', 'Northern Borders', 'Jazan', 'Najran', 'Al-Bahah', 'Al-Jawf']

// The two service-specific questions asked before the contact fields.
const quoteFields = {
  warehousing: [
    { name: 'when', label: 'When do you need warehousing?', placeholder: 'Select an option', options: ['Within a week', 'Within a month', 'Within 2-3 months', 'Not sure yet'] },
    { name: 'size', label: 'How much do you need?', placeholder: 'Select an option', options: ['Under 50 m² or pallets', '50 – 200 m² or pallets', '200 – 500 m² or pallets', 'Over 500 m² or pallets'] },
  ],
  transportation: [
    { name: 'from', label: 'From', placeholder: 'Select a region', options: regions },
    { name: 'to', label: 'To', placeholder: 'Select a region', options: regions },
  ],
  fulfillment: [
    { name: 'orders', label: 'How many orders a month?', placeholder: 'Select an option', options: ['Up to 100', '100 to 500', '500 to 2,000', '2,000 to 10,000', '10,000+'] },
    { name: 'platform', label: 'Which store platform?', placeholder: 'Select an option', options: ['Salla', 'Zid', 'Shopify', 'Jahez', 'Other', 'No online store'] },
  ],
}

const input = 'h-11 w-full rounded-md border border-line bg-bg px-4 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/30'

function QuoteForm({ service = 'warehousing', showServiceFields = true }) {
  const [values, setValues] = useState({})
  const [sent, setSent] = useState(false)
  const fields = showServiceFields ? quoteFields[service] : []

  const set = (e) => setValues({ ...values, [e.target.name]: e.target.value })
  const ready = fields.every((f) => values[f.name]) && values.phone?.trim() && values.name?.trim()

  const onSubmit = (e) => {
    e.preventDefault()
    // TODO: send { service, ...values } to your backend, CRM or email service.
    setSent(true)
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-md border border-line border-t-4 border-t-accent bg-surface p-8 text-center text-ink">
        <CheckCircle2 className="text-accent-text" size={44} />
        <p className="text-lg font-semibold">Thanks! We got your request.</p>
        <p className="text-sm text-muted">A logistics expert will reach out shortly.</p>
        <button onClick={() => { setSent(false); setValues({}) }} className="mt-2 text-sm font-medium text-accent-text hover:underline">Send another request</button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="rounded-md border border-line border-t-4 border-t-accent bg-surface p-6 text-ink">
      {fields.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2">
          {fields.map((f) => (
            <label key={f.name} className="text-sm font-medium">
              {f.label}
              <select name={f.name} value={values[f.name] ?? ''} onChange={set} className={`${input} mt-1.5 ${values[f.name] ? '' : 'text-muted'}`}>
                <option value="" disabled>{f.placeholder}</option>
                {f.options.map((o) => <option key={o} className="text-ink">{o}</option>)}
              </select>
            </label>
          ))}
        </div>
      )}
      <div className={`grid gap-4 sm:grid-cols-2 ${fields.length ? 'mt-4 border-t border-line pt-4' : ''}`}>
        <input name="phone" type="tel" onChange={set} placeholder="Phone / WhatsApp" aria-label="Phone / WhatsApp" className={input} />
        <input name="name" onChange={set} placeholder="Full name" aria-label="Full name" className={input} />
        <input name="email" type="email" onChange={set} placeholder="Email (optional)" aria-label="Email (optional)" className={input} />
        <input name="company" onChange={set} placeholder="Company (optional)" aria-label="Company (optional)" className={input} />
      </div>
      <button
        disabled={!ready}
        className="mt-6 h-12 w-full rounded-md bg-accent font-semibold text-accent-ink transition hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-50"
      >
        Get a quote
      </button>
    </form>
  )
}

export default QuoteForm
