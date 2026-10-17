import { LegalSections, PageHero, Section } from '../components/page/blocks'
import ExpertCta from '../components/ExpertCta'

// Section bodies are blank: have your legal team write them before launch.
const documents = {
  terms: {
    title: 'Terms & Conditions',
    sections: [
      ['Acceptance of Terms', ''],
      ['Use of Services', ''],
      ['User Accounts', ''],
      ['Pricing & Payment', ''],
      ['Intellectual Property', ''],
      ['Limitation of Liability', ''],
      ['Termination', ''],
      ['Amendments', ''],
      ['Governing Law', ''],
      ['Contact Information', ''],
    ],
  },
  privacy: {
    title: 'Privacy Policy',
    sections: [
      ['Information We Collect', ''],
      ['How We Use Your Information', ''],
      ['Data Sharing & Security', ''],
      ['Your Rights & Choices', ''],
      ['Cookies & Tracking', ''],
      ['Changes to This Privacy Policy', ''],
      ['Contact Us', ''],
    ],
  },
}

function Legal({ doc }) {
  const { title, sections } = documents[doc]
  return (
    <>
      <PageHero eyebrow="Legal" title={title} text="Last updated: —" />
      <Section narrow><LegalSections sections={sections} /></Section>
      <ExpertCta />
    </>
  )
}

export default Legal
