import { Link } from 'react-router'
import { Brain, Briefcase, Rocket, Target, TrendingUp } from 'lucide-react'
import { brand } from '../config'
import { FaqList, FeatureGrid, PageHero, Section, Steps } from '../components/page/blocks'
import EmptyState from '../components/EmptyState'
import ExpertCta from '../components/ExpertCta'

const name = brand.name

const why = [
  { icon: Target, title: 'Real ownership', text: 'Own real projects from day one.' },
  { icon: TrendingUp, title: 'Actual impact', text: 'Ship work that customers use.' },
  { icon: Rocket, title: 'Career launchpad', text: 'Build skills and a network that last.' },
]

const teams = [
  { icon: Briefcase, title: 'Business Development', text: '' },
  { icon: Brain, title: 'AI', text: '' },
]

// [label, date]. Dates are blank until the next cohort is announced.
const timeline = [
  ['Applications Open', ''],
  ['Application Deadline', ''],
  ['Interviews and Cases', ''],
  ['Offers and Confirmations', ''],
  ['Final Deadline', ''],
  ['Program Starts', ''],
  ['Program Ends', ''],
]

const process = [
  { title: 'Screening' },
  { title: 'Case Study' },
  { title: 'Technical Presentation' },
  { title: 'Offer' },
]

// Quotes from past participants, e.g. { quote: '', name: '', team: '' }
const stories = []
// [question, answer]
const faqs = []

function HackersProgram() {
  return (
    <>
      <PageHero
        eyebrow="Hackers Program"
        title={`Build. Ship. Learn. Join the ${name} Hackers Program.`}
        actions={[['Apply Now', '/contact']]}
      />

      <Section dock="About the program" n={2} title="Not your typical internship."><FeatureGrid items={why} /></Section>
      <Section band dock="Teams" n={3} title="Two teams. One cohort."><FeatureGrid items={teams} cols={2} /></Section>

      <Section dock="Timeline" n={4} title="From application to Day 1" narrow>
        <ol className="relative space-y-7 border-l-4 border-accent pl-7">
          {timeline.map(([label, date]) => (
            <li key={label} className="relative">
              <span className="absolute -left-[38px] top-1 size-4 bg-accent ring-4 ring-bg" />
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{date || 'Date to be announced'}</p>
              <p className="mt-1 font-display text-2xl font-extrabold uppercase">{label}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tinted dock="How to apply" n={5} title="Four steps. No surprises.">
        <Steps items={process} />
        <Link to="/contact" className="mt-8 inline-flex rounded-md bg-accent px-6 py-3 font-semibold text-accent-ink transition hover:-translate-y-px hover:bg-accent-hover">Apply Now</Link>
      </Section>

      <Section dock="Past participants" n={6} title="Don't take our word for it.">
        {stories.length ? null : <EmptyState title="No stories yet" />}
      </Section>
      <Section tinted dock="FAQ" n={7} title="Frequently asked questions" narrow><FaqList items={faqs} /></Section>
      <ExpertCta />
    </>
  )
}

export default HackersProgram
