import { useMemo, useState } from 'react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import FormField from '../components/FormField'
import Icon from '../components/Icon'
import { mapLocations, programs, routePlans } from '../data/siteData'

function createGoogleMapsUrl(places) {
  const locations = places.map((place) => mapLocations[place] ?? `${place}, San Pedro Sula, Cortés, Honduras`)
  if (locations.length === 1) return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locations[0])}`
  const origin = encodeURIComponent(locations[0])
  const destination = encodeURIComponent(locations.at(-1))
  const waypoints = locations.slice(1, -1).map(encodeURIComponent).join('%7C')
  const waypointParameter = waypoints ? `&waypoints=${waypoints}` : ''
  return `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=driving${waypointParameter}`
}

export default function ProgramsPage() {
  const [interest, setInterest] = useState('')
  const [hours, setHours] = useState('')
  const [plan, setPlan] = useState(null)
  const [error, setError] = useState('')

  const mapsUrl = useMemo(() => plan ? createGoogleMapsUrl(plan) : '', [plan])

  function handleSubmit(event) {
    event.preventDefault()
    setError('')
    try {
      if (!interest || !hours) throw new Error('Selecciona un interés y el tiempo disponible.')
      const selected = routePlans[interest]?.[hours]
      if (!selected) throw new Error('No existe una ruta para esta combinación.')
      setPlan(selected)
    } catch (formError) {
      setPlan(null)
      setError(formError instanceof Error ? formError.message : 'No fue posible generar la ruta.')
    }
  }

  return (
    <>
      <PageHero kicker="Nuestros programas" title="Educación, rutas y conservación" description="Tres programas conectan la información turística con acciones responsables y herramientas digitales fáciles de presentar." image="vista-merendon.webp" />

      <section className="container-page py-20">
        <SectionHeading kicker="Líneas de trabajo" title="Programas activos del proyecto" />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {programs.map((program) => (
            <article className="card card-hover p-7" key={program.id}>
              <span className="text-4xl" aria-hidden="true">{program.icon}</span>
              <h2 className="mt-5 text-2xl font-black text-slate-900">{program.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{program.summary}</p>
              <ul className="mt-5 grid gap-3">
                {program.activities.map((activity) => <li className="flex gap-2 text-sm font-bold text-slate-700" key={activity}><Icon className="mt-0.5 h-4 w-4 flex-none text-sps-600" name="check" />{activity}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-100 py-20" id="planificador">
        <div className="container-page grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <SectionHeading kicker="Herramienta interactiva" title="Personaliza una ruta" description="Selecciona el tipo de visita y el tiempo. La recomendación se mostrará en pantalla y podrá abrirse con sus paradas en Google Maps." />
            <form className="card mt-8 grid gap-5 p-6" onSubmit={handleSubmit} noValidate>
              <FormField label="Interés principal" name="interest">
                <select className="field-control" id="interest" value={interest} onChange={(event) => setInterest(event.target.value)}>
                  <option value="">Seleccionar</option>
                  <option value="cultura">Cultura e historia</option>
                  <option value="naturaleza">Naturaleza y vistas</option>
                  <option value="mixto">Un poco de todo</option>
                </select>
              </FormField>
              <FormField label="Tiempo disponible" name="hours">
                <select className="field-control" id="hours" value={hours} onChange={(event) => setHours(event.target.value)}>
                  <option value="">Seleccionar</option>
                  <option value="3">3 horas</option>
                  <option value="6">6 horas</option>
                  <option value="9">9 horas</option>
                </select>
              </FormField>
              {error ? <div className="alert-error" role="alert">{error}</div> : null}
              <button className="btn-primary" type="submit"><Icon name="map" />Generar recomendación</button>
            </form>
          </div>

          <div className="card min-h-[420px] p-6 sm:p-8" aria-live="polite">
            {plan ? (
              <div>
                <span className="inline-flex rounded-full bg-sps-100 px-3 py-1 text-xs font-black uppercase tracking-wider text-sps-700">Ruta generada</span>
                <h2 className="mt-4 text-3xl font-black text-slate-900">Recorrido de {hours} horas</h2>
                <ol className="mt-6 grid gap-3">
                  {plan.map((place, index) => (
                    <li className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4" key={place}>
                      <span className="grid h-9 w-9 flex-none place-items-center rounded-full bg-sps-600 text-sm font-black text-white">{index + 1}</span>
                      <span className="font-black text-slate-800">{place}</span>
                    </li>
                  ))}
                </ol>
                <a className="btn-primary mt-6" href={mapsUrl} target="_blank" rel="noopener noreferrer">Abrir ruta marcada en Google Maps <Icon className="h-4 w-4" name="external" /></a>
                <p className="mt-4 text-sm leading-6 text-slate-500">Google Maps usa el primer lugar como origen, el último como destino y los demás como paradas intermedias.</p>
              </div>
            ) : (
              <div className="grid min-h-[350px] place-items-center text-center">
                <div><span className="mx-auto grid h-16 w-16 place-items-center rounded-3xl bg-sps-100 text-3xl" aria-hidden="true">🧭</span><h2 className="mt-5 text-2xl font-black text-slate-900">Tu ruta aparecerá aquí</h2><p className="mx-auto mt-3 max-w-sm leading-7 text-slate-600">Completa las dos opciones y presiona Generar recomendación.</p></div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ['Antes de salir', 'Verifica horarios, clima y condiciones de acceso.'],
            ['Durante la visita', 'Respeta señalización, espacios públicos y rutas autorizadas.'],
            ['Al finalizar', 'Retira tus residuos y comparte información responsable.']
          ].map(([title, text]) => <article className="card p-6" key={title}><h2 className="text-xl font-black text-slate-900">{title}</h2><p className="mt-3 leading-7 text-slate-600">{text}</p></article>)}
        </div>
      </section>
    </>
  )
}
