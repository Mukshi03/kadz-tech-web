import { brand } from '../config'
import { FaqList, PageHero, Section, SpecTable, Steps } from '../components/page/blocks'
import ExpertCta from '../components/ExpertCta'

const name = brand.name

const steps = [
  { title: 'Link your store', text: 'Connect your online store to the platform.' },
  { title: 'Send us your inventory', text: 'Ship your stock to our fulfillment center.' },
  { title: 'We pick and pack every order', text: 'Orders come in automatically and are packed for you.' },
  { title: 'Your customer gets it fast', text: 'Orders are handed to carriers for delivery.' },
]

// [question, answer]. Answers are blank until written.
const faqs = [
  [`Which e-commerce platforms does ${name} integrate with?`, ''],
  ['How long does it take to go live?', ''],
  ['How fast do orders reach customers?', ''],
  ['Do you support cash on delivery?', ''],
  [`How do I get my inventory to ${name}?`, ''],
  ['Do stock levels stay in sync with my store?', ''],
]

function Fulfillment() {
  return (
    <>
      <PageHero
        eyebrow="Fulfillment"
        title="Your store's orders, picked, packed, and delivered."
        text="Fulfillment for your online store."
        actions={[['Get a quote', '/#services'], ['Contact Us', '/contact']]}
      />
      <Section dock="Process" n={2} title="From store to doorstep in four steps"><Steps items={steps} /></Section>
      <Section band dock="Specs" n={3} title="Integrations, timings, and what's supported">
        <div className="grid gap-8 lg:grid-cols-2">
          <SpecTable caption="How long each step takes" columns={['Step', 'Time']} rows={[['Connect your store'], ['Inventory received'], ['Live end to end'], ['Delivery within a city'], ['Delivery nationwide']]} />
          <SpecTable caption="What's supported" columns={['Area', 'Supported']} rows={[['Store platforms'], ['Payment methods'], ['Order statuses'], ['Inventory intake'], ['Stock counts']]} />
        </div>
      </Section>
      <Section dock="FAQ" n={4} title="Fulfillment questions, answered" narrow><FaqList items={faqs} /></Section>
      <ExpertCta />
    </>
  )
}

export default Fulfillment
