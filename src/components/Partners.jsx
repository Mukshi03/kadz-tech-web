// Add partner/customer names or logo image paths here.
const partners = []

function Partners() {
  return (
    <section className="border-y border-line py-10">
      <p className="label mb-6 text-center">Trusted by our partners and customers</p>
      {partners.length ? (
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee gap-14">
            {[...partners, ...partners].map((name, i) => (
              <span key={i} className="whitespace-nowrap text-xl font-display font-extrabold uppercase text-muted">{name}</span>
            ))}
          </div>
        </div>
      ) : (
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-4 px-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-12 w-32 rounded-xl border-2 border-dashed border-line" aria-hidden />
          ))}
        </div>
      )}
    </section>
  )
}

export default Partners
