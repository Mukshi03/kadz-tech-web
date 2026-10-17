import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import EmptyState from '../components/EmptyState'

const categories = ['All', 'Engineering', 'Operations', 'Product', 'Company']
const sorts = ['Newest', 'Most liked', 'Quickest read']

// Posts, e.g. { title: '', excerpt: '', category: 'Company', author: '', date: '', minutes: 3, likes: 0, featured: false }
const posts = []

function Blog() {
  const [category, setCategory] = useState('All')
  const [sort, setSort] = useState('Newest')
  const [subscribed, setSubscribed] = useState(false)

  const featured = posts.find((p) => p.featured)
  const list = posts
    .filter((p) => category === 'All' || p.category === category)
    .sort((a, b) => sort === 'Most liked' ? b.likes - a.likes : sort === 'Quickest read' ? a.minutes - b.minutes : 0)

  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-4 pb-12 pt-16 sm:px-6 sm:pt-20">
          <p className="dock mb-5"><b>Dock 01</b>Blog and news</p>
          <h1 className="max-w-3xl text-[clamp(2.6rem,7vw,4.8rem)]">We write about everything related to logistics.</h1>
          {featured && (
            <article className="mt-10 rounded-3xl bg-surface p-8">
              <p className="text-sm font-semibold text-accent-text">Featured · {featured.category} · {featured.minutes} min</p>
              <h2 className="mt-2 text-2xl font-bold">{featured.title}</h2>
            </article>
          )}
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button key={c} onClick={() => setCategory(c)} className={`rounded-md px-4 py-1.5 text-sm font-medium ${category === c ? 'bg-accent text-accent-ink' : 'border border-line text-muted hover:border-accent'}`}>{c}</button>
              ))}
            </div>
            <div className="flex gap-1 rounded-xl bg-accent/15 p-1">
              {sorts.map((s) => (
                <button key={s} onClick={() => setSort(s)} className={`rounded-lg px-3 py-1.5 text-sm font-medium ${sort === s ? 'bg-surface text-accent-text' : 'text-muted'}`}>{s}</button>
              ))}
            </div>
          </div>

          {list.length === 0 ? (
            <EmptyState className="mt-8" title="No articles yet" hint="Blog posts will appear here once published." />
          ) : (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((p) => (
                <article key={p.title} className="rounded-2xl border border-line bg-surface p-6">
                  <p className="text-sm font-semibold text-accent-text">{p.category} · {p.minutes} min</p>
                  <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted">{p.excerpt}</p>
                  <p className="mt-4 text-xs text-muted">{p.author} · {p.date}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-3xl rounded-3xl bg-accent/15 p-8 text-center">
          <h3 className="text-2xl font-bold">Get our next piece in your inbox.</h3>
          {subscribed ? (
            <p className="mt-4 flex items-center justify-center gap-2 font-medium text-accent-text"><CheckCircle2 size={18} /> You're subscribed.</p>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubscribed(true) /* TODO: connect newsletter service */ }} className="mx-auto mt-6 flex max-w-md flex-col gap-2 sm:flex-row">
              <input type="email" required placeholder="Your email" className="h-12 flex-1 rounded-xl border border-white bg-surface px-4 outline-none focus:border-accent" />
              <button className="h-12 rounded-xl bg-accent px-6 font-semibold text-accent-ink hover:bg-accent-hover">Subscribe</button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}

export default Blog
