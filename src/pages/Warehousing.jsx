import { Boxes, Network } from 'lucide-react'
import { brand } from '../config'
import { Button, FaqList, FeatureRows, PageHero, Section, Sectors, SpecTable } from '../components/page/blocks'
import ExpertCta from '../components/ExpertCta'

const name = brand.name

const features = [
  { icon: Boxes, title: 'On-demand warehousing', text: 'Rent the space you need, for as long as you need it.' },
  { icon: Network, title: 'Connected warehousing network', text: 'Manage stock across several warehouses from one dashboard.' },
]

// [question, answer]. Answers are blank until written.
const faqs = [
  [`What temperature ranges does ${name} offer?`, ''],
  ['Can I store a few pallets instead of renting a whole warehouse?', ''],
  [`What goods can ${name} store?`, ''],
  ['How quickly can I start storing?', ''],
  ['Where in Saudi Arabia are the warehouses?', ''],
]

function Warehousing() {
  return (
    <>
      <PageHero
        eyebrow="Warehousing"
        title={`${name}'s Warehousing`}
        text="Warehouse space for your business."
        actions={[['Get a quote', '/#services'], ['Contact Us', '/contact']]}
      />
      <Section><FeatureRows items={features} /></Section>

      <Section band>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)]">Looking for a full warehouse to operate yourself?</h2>
            <p className="mt-2 text-band-ink/70">Browse whole warehouses available to lease.</p>
          </div>
          <Button to="/find-warehouse">Go to Marketplace</Button>
        </div>
      </Section>

      <Section dock="Specs" n={2} title="Storage types, sizes, and terms">
        <div className="grid gap-8 lg:grid-cols-2">
          <SpecTable caption="Temperature ranges" columns={['Storage type', 'Temperature']} rows={[['Dry'], ['Ambient'], ['Chilled'], ['Frozen']]} />
          <SpecTable caption="Space you can book" columns={['Area', 'Roughly']} rows={[['Small'], ['Medium'], ['Large'], ['Extra large']]} />
        </div>
      </Section>

      <Section tinted dock="FAQ" n={3} title="Warehousing questions, answered" narrow><FaqList items={faqs} /></Section>
      <Section dock="Sectors" n={4} title="The sectors we serve"><Sectors /></Section>
      <ExpertCta />
    </>
  )
}

export default Warehousing
