import { useMemo, useState } from 'react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Icon from '../components/Icon'
import { events } from '../data/siteData'

export default function EventsPage() {
  const categories = useMemo(() => ['Todos', ...new Set(events.map((event) => event.category))], [])
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filteredEvents = activeCategory === 'Todos' ? events : events.filter((event) => event.category === activeCategory)
  const upcoming = filteredEvents.filter((event) => event.status === 'Próximo')
  const past = filteredEvents.filter((event) => event.status === 'Finalizado')

  return (
    <>
      <PageHero kicker="Eventos" title="Agenda demostrativa de actividades" description="Recorridos, talleres y charlas de ejemplo pensados para practicar la organización de un calendario comunitario." image="cusuco.webp" />

      <section className="container-page py-20">
        <SectionHeading kicker="Calendario" title="Próximas y anteriores actividades" description="Filtra la agenda por categoría para revisar las actividades próximas y el historial de eventos ya realizados." />

        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filtrar eventos por categoría">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`rounded-full border px-4 py-2 text-sm font-bold transition-colors duration-150 ease-in-out ${activeCategory === category ? 'border-transparent bg-sps-900 text-white' : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'}`}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-xs font-black uppercase tracking-[0.18em] text-sps-700">Próximos eventos</h2>
          {upcoming.length > 0 ? (
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {upcoming.map((event) => (
                <article className="card card-hover flex flex-col gap-4 p-6 sm:flex-row" key={event.title}>
                  <div className="flex-none rounded-2xl bg-sps-900 px-4 py-3 text-center font-black text-white sm:w-28">{event.date}</div>
                  <div className="flex-1">
                    <span className="inline-flex rounded-full bg-sps-100 px-3 py-1 text-xs font-black uppercase tracking-wider text-sps-700">{event.category}</span>
                    <h3 className="mt-3 text-xl font-black text-slate-900">{event.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{event.description}</p>
                    <div className="mt-4 grid gap-1.5 text-sm text-slate-600">
                      <span className="flex items-center gap-2"><Icon className="h-4 w-4 text-sps-700" name="calendar" /> {event.time}</span>
                      <span className="flex items-center gap-2"><Icon className="h-4 w-4 text-sps-700" name="map" /> {event.place}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="mt-5 text-slate-600">No hay eventos próximos en esta categoría.</p>
          )}
        </div>

        <div className="mt-14">
          <h2 className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">Eventos finalizados</h2>
          {past.length > 0 ? (
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {past.map((event) => (
                <article className="card flex flex-col gap-4 p-6 opacity-80 sm:flex-row" key={event.title}>
                  <div className="flex-none rounded-2xl bg-slate-200 px-4 py-3 text-center font-black text-slate-600 sm:w-28">{event.date}</div>
                  <div className="flex-1">
                    <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-black uppercase tracking-wider text-slate-600">{event.category}</span>
                    <h3 className="mt-3 text-xl font-black text-slate-900">{event.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{event.description}</p>
                    <div className="mt-4 grid gap-1.5 text-sm text-slate-600">
                      <span className="flex items-center gap-2"><Icon className="h-4 w-4" name="calendar" /> {event.time}</span>
                      <span className="flex items-center gap-2"><Icon className="h-4 w-4" name="map" /> {event.place}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="mt-5 text-slate-600">No hay eventos finalizados en esta categoría.</p>
          )}
        </div>

        <div className="alert-info mt-14">Proyecto académico: esta agenda es demostrativa y no representa actividades reales confirmadas.</div>
      </section>
    </>
  )
}
