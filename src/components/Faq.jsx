import { Dock, FaqList } from './page/blocks'

// Add questions here as [question, answer] pairs.
const faqs = []

function Faq() {
  return (
    <section id="faq" className="bg-surface py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.6fr]">
        <div className="grid content-start gap-4">
          <Dock n={5}>FAQ</Dock>
          <h2 className="text-[clamp(2rem,4.5vw,3.2rem)]">Frequently asked questions</h2>
          <p className="text-lg text-muted">Having trouble with a service or the platform? You'll likely find the answer here.</p>
        </div>
        <FaqList items={faqs} />
      </div>
    </section>
  )
}

export default Faq
