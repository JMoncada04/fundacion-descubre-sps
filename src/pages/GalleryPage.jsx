import { useState } from 'react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { galleryItems, imagePath } from '../data/siteData'

const filters = [
  ['todos', 'Todas'],
  ['ciudad', 'Ciudad'],
  ['cultura', 'Cultura'],
  ['naturaleza', 'Naturaleza'],
  ['paisaje', 'Paisaje']
]

export default function GalleryPage() {
  const [filter, setFilter] = useState('todos')
  const [selected, setSelected] = useState(null)
  const visibleItems = filter === 'todos' ? galleryItems : galleryItems.filter((item) => item.category === filter)

  return (
    <>
      <PageHero kicker="Galería de fotos" title="Paisajes reales de San Pedro Sula" description="Una colección visual sin retratos ni información personal, organizada por categorías y optimizada para diferentes pantallas." image="panorama-sps.webp" />

      <section className="container-page py-20">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading kicker="Explorar" title="Ciudad, cultura y naturaleza" description="Selecciona una categoría y abre cualquier imagen para verla con mayor tamaño." />
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtros de galería">
            {filters.map(([value, label]) => (
              <button className={`rounded-full border px-4 py-2 text-sm font-black transition ${filter === value ? 'border-sps-600 bg-sps-600 text-white' : 'border-slate-300 bg-white text-slate-700 hover:border-sps-500'}`} type="button" key={value} onClick={() => setFilter(value)} aria-pressed={filter === value}>{label}</button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
          {visibleItems.map((item) => (
            <button className="card card-hover overflow-hidden text-left" type="button" key={item.id} onClick={() => setSelected(item)}>
              <img className="aspect-[4/3] w-full object-cover" src={imagePath(item.image)} alt={item.alt} loading="lazy" />
              <div className="p-5"><p className="text-xs font-black uppercase tracking-wider text-sps-700">{item.category}</p><h2 className="mt-2 text-lg font-black text-slate-900">{item.title}</h2></div>
            </button>
          ))}
        </div>
      </section>

      {selected ? (
        <div className="fixed inset-0 z-[70] grid place-items-center bg-slate-950/90 p-4" role="dialog" aria-modal="true" aria-label={selected.title} onClick={() => setSelected(null)}>
          <div className="w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <img className="max-h-[72vh] w-full object-contain bg-slate-950" src={imagePath(selected.image)} alt={selected.alt} />
            <div className="flex items-center justify-between gap-4 p-5"><div><p className="text-xs font-black uppercase tracking-wider text-sps-700">{selected.category}</p><h2 className="mt-1 text-xl font-black text-slate-900">{selected.title}</h2></div><button className="btn-secondary" type="button" onClick={() => setSelected(null)}>Cerrar</button></div>
          </div>
        </div>
      ) : null}
    </>
  )
}
