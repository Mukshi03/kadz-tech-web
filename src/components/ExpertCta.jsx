import { Link } from 'react-router'
import { brand } from '../config'

function ExpertCta() {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-md border-l-8 border-accent bg-band px-6 py-14 text-band-ink sm:px-12">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 opacity-30 [background:repeating-linear-gradient(-45deg,var(--accent)_0_14px,transparent_14px_28px)] md:block" />
        <div className="relative max-w-2xl">
          <p className="dock"><b>Talk to us</b></p>
          <h2 className="mt-4 text-[clamp(2rem,4.5vw,3.2rem)]">Speak with a {brand.name} expert today</h2>
          <p className="mt-4 text-lg text-band-ink/70">
            Need the right storage and logistics setup? Talk to one of our experts and see how our network can make your operations run smoother.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to={brand.signUpUrl} className="inline-flex justify-center rounded-md bg-accent px-6 py-3 font-semibold text-accent-ink transition hover:-translate-y-px hover:bg-accent-hover">Get Started</Link>
            <Link to="/contact" className="inline-flex justify-center rounded-md border-2 border-band-ink px-6 py-3 font-semibold transition hover:-translate-y-px hover:border-accent hover:text-accent">Contact Us</Link>
          </div>
          <Link to="/contact" className="mt-6 inline-block font-mono text-xs uppercase tracking-[0.14em] text-accent underline underline-offset-4">
            Join the {brand.name} network →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ExpertCta
