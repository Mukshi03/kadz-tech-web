import { BarChart3, Boxes, ClipboardList, Network, Receipt, Truck, UserCog } from 'lucide-react'
import { brand } from '../config'
import { FeatureRows, PageHero, Section } from '../components/page/blocks'
import ExpertCta from '../components/ExpertCta'

const name = brand.name

const features = [
  { icon: ClipboardList, title: 'Seamless order processing', text: 'Receive, pick, pack and dispatch orders with guided workflows.' },
  { icon: Boxes, title: 'Precision warehouse modeling', text: 'Map zones, racks and bins so every item has an exact location.' },
  { icon: Receipt, title: '3PL client management & custom billing', text: 'Run several clients from one warehouse with their own rates and invoices.' },
  { icon: UserCog, title: 'Integrated user & access management', text: 'Control who can see and do what with role-based permissions.' },
  { icon: Network, title: `Connect to the ${name} network`, text: 'List spare capacity and receive storage requests.' },
  { icon: Truck, title: `Access to ${name}'s carrier network`, text: 'Book transportation for inbound and outbound shipments.' },
  { icon: BarChart3, title: 'Advanced reporting & analytics', text: 'Track throughput, accuracy and space utilization.' },
]

function Wms() {
  return (
    <>
      <PageHero
        eyebrow="Software"
        title={`${name}'s Warehouse Management System`}
        text="Software to run your warehouse operations, from receiving to dispatch."
        actions={[['Request a demo', '/contact'], ['Contact us', '/contact']]}
      />
      <Section><FeatureRows items={features} /></Section>
      <ExpertCta />
    </>
  )
}

export default Wms
