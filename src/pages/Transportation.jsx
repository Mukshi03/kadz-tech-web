import { CreditCard, LayoutGrid, MapPin, Timer, Truck, Warehouse } from 'lucide-react'
import { brand } from '../config'
import { FaqList, FeatureGrid, FeatureRows, PageHero, Section, Sectors, SpecTable } from '../components/page/blocks'
import ExpertCta from '../components/ExpertCta'

const name = brand.name

const rows = [
  { icon: Warehouse, title: 'Integrated transportation & warehousing', text: 'Move goods between ports, warehouses and stores, booked from the same dashboard as your inventory.' },
  { icon: Truck, title: 'Our fleet & capabilities', text: 'Vehicles for trips within a city or across the Kingdom.' },
]

const apart = [
  { icon: Timer, title: 'Instant booking', text: 'Book trucks when you need them.' },
  { icon: CreditCard, title: 'Upfront pricing', text: 'See the cost before you book.' },
  { icon: LayoutGrid, title: 'One platform', text: 'Transport and storage managed together.' },
  { icon: MapPin, title: 'Live tracking', text: 'Follow every shipment while it moves.' },
]

// [question, answer]. Answers are blank until written.
const faqs = [
  ['How long does a truck take from Riyadh to Jeddah?', ''],
  [`Which cities does ${name} cover?`, ''],
  [`Can ${name} move chilled and frozen goods?`, ''],
  ['Can I book a truck for the same day?', ''],
  ['Do I see the cost before I book?', ''],
  ['Can I track a shipment while it is moving?', ''],
]

function Transportation() {
  return (
    <>
      <PageHero
        eyebrow="Transportation"
        title={`${name}'s Transportation`}
        text="Transport for your goods, within a city or between cities."
        actions={[['Get a Quote', '/find-transport'], ['Contact Us', '/contact']]}
      />
      <Section><FeatureRows items={rows} /></Section>
      <Section band dock="Why us" n={2} title="What sets us apart?"><FeatureGrid items={apart} cols={4} /></Section>
      <Section dock="Sectors" n={3} title="Industries we serve"><Sectors /></Section>
      <Section tinted dock="Network" n={4} title="Lanes, cities, and transit times">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <SpecTable caption="Popular lanes" columns={['Lane', 'Distance and transit']} rows={[['Riyadh ↔ Jeddah'], ['Riyadh ↔ Dammam'], ['Jeddah ↔ Dammam'], ['Jeddah ↔ Madinah']]} />
          <SpecTable caption="Cities on the network" columns={['Region', 'Cities']} rows={[['Central'], ['Western'], ['Eastern'], ['Northern'], ['Southern']]} />
        </div>
      </Section>
      <Section dock="FAQ" n={5} title="Transportation questions, answered" narrow><FaqList items={faqs} /></Section>
      <ExpertCta />
    </>
  )
}

export default Transportation
