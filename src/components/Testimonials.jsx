import { useRef } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import EmptyState from './EmptyState'
import { Dock } from './page/blocks'

// Add customer testimonials here, e.g. { quote: '', name: '', company: '' }
const testimonials = []

function Testimonials() {
  const track = useRef(null)
  const scroll = (dir) => track.current?.scrollBy({ left: dir * track.current.clientWidth * 0.8, behavior: 'smooth' })

  return (
    <section id="testimonials" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="grid max-w-3xl gap-4">
            <Dock n={4}>Customers</Dock>
            <h2 className="text-[clamp(2rem,4.5vw,3.2rem)]">Customer experience</h2>
            <p className="text-lg text-muted">
              Hear from businesses across different sectors about how we've helped them reach their goals.
            </p>
          </div>
          {testimonials.length > 0 && (
            <div className="flex gap-2">
              <button onClick={() => scroll(-1)} aria-label="Previous" className="grid size-11 place-items-center rounded-full border border-line hover:border-accent hover:text-accent-text"><ChevronLeft /></button>
              <button onClick={() => scroll(1)} aria-label="Next" className="grid size-11 place-items-center rounded-full bg-accent text-accent-ink hover:bg-accent-hover"><ChevronRight /></button>
            </div>
          )}
        </div>

        {testimonials.length === 0 ? (
          <EmptyState className="mt-10" title="No testimonials yet" hint="Customer quotes will appear here once added." />
        ) : (
          <div ref={track} className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none]">
            {testimonials.map((t, i) => (
              <figure key={i} className="flex w-[85%] shrink-0 snap-start flex-col rounded-2xl border border-line bg-accent/15 p-6 sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                <Quote className="text-accent-text" size={28} />
                <blockquote className="mt-4 flex-1 text-lg text-ink">“{t.quote}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-4">
                  <span className="grid size-10 place-items-center rounded-full bg-accent/15 font-semibold text-accent-text">{t.company?.[0]}</span>
                  <span>
                    <span className="block font-semibold">{t.name}</span>
                    <span className="block text-sm text-muted">{t.company}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Testimonials
