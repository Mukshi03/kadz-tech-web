import { Eye, FileCheck2, Truck, Warehouse } from 'lucide-react'
import { brand } from '../config'
import { Button, FeatureGrid, PageHero, Section } from '../components/page/blocks'
import EmptyState from '../components/EmptyState'
import ExpertCta from '../components/ExpertCta'
import { LogoMark } from '../components/Logo'

const name = brand.name

const infrastructure = [
  { icon: Warehouse, title: 'Storage', text: '' },
  { icon: Truck, title: 'Transportation', text: '' },
  { icon: Eye, title: 'Inventory visibility', text: '' },
  { icon: FileCheck2, title: 'Customs clearance', text: '' },
]

// Reasons customers choose you, e.g. { title: '', text: '' }
const advantages = []

function About() {
  return (
    <>
      <PageHero eyebrow="About us" title="We simplify commerce & logistics through technology, so you can focus on growing your business." />

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="label">About us</p>
            <h2 className="mt-2 text-[clamp(2rem,4.5vw,3.2rem)]">About {name}</h2>
            <p className="mt-5 italic text-muted">Company story coming soon.</p>
            <Button to="/contact" className="mt-8">See a demo →</Button>
          </div>
          <div className="relative grid aspect-[4/3] place-items-center overflow-hidden rounded-md bg-band">
            <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(var(--band-ink)_1px,transparent_1px),linear-gradient(90deg,var(--band-ink)_1px,transparent_1px)] [background-size:40px_40px]" />
            <LogoMark className="relative size-32" />
          </div>
        </div>
      </Section>

      <Section band dock="Infrastructure" n={2} title="Our infrastructure"><FeatureGrid items={infrastructure} cols={4} /></Section>

      <Section dock="The advantage" n={3} title={`The ${name} advantage`}>
        {advantages.length ? <FeatureGrid items={advantages} /> : <EmptyState title="Nothing added yet" />}
      </Section>
      <ExpertCta />
    </>
  )
}

export default About
