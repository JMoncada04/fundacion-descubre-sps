import { imagePath } from '../data/siteData'

export default function PageHero({ kicker, title, description, image = 'panorama-sps.webp', children }) {
  return (
    <section className="relative isolate overflow-hidden bg-sps-950 text-white">
      <img className="hero-image" src={imagePath(image)} alt="" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="container-page relative py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-amber-300">{kicker}</p>
          <h1 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] sm:text-6xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">{description}</p>
          {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
        </div>
      </div>
    </section>
  )
}
