import { useState } from 'react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import FormField from '../components/FormField'

const options = [
  ['Voluntariado digital', 'Apoyar la revisión de textos, accesibilidad y organización de contenidos.'],
  ['Actividades educativas', 'Colaborar en talleres, guías y materiales sobre turismo responsable.'],
  ['Difusión', 'Compartir los recursos del proyecto y promover mensajes de cuidado del entorno.'],
  ['Apoyo a programas', 'Seleccionar un programa para una contribución demostrativa desde la página Donaciones.']
]

export default function HelpPage() {
  const [form, setForm] = useState({ area: '', availability: '', message: '' })
  const [status, setStatus] = useState('')

  function updateField(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setStatus('')
    try {
      if (!form.area || !form.availability) throw new Error('Selecciona un área y una disponibilidad.')
      if (form.message.length > 300) throw new Error('El mensaje no puede superar 300 caracteres.')
      setStatus('Tu selección fue registrada localmente como demostración. No se enviaron datos a ningún servidor.')
      setForm({ area: '', availability: '', message: '' })
    } catch (error) {
      setStatus(error instanceof Error ? `Error: ${error.message}` : 'Error: no fue posible registrar la selección.')
    }
  }

  const isError = status.startsWith('Error:')

  return (
    <>
      <PageHero kicker="Cómo ayudar" title="Participar también es compartir y educar" description="Las personas visitantes pueden contribuir mediante voluntariado, difusión, colaboración en actividades o apoyo demostrativo a los programas." image="cusuco.webp" />

      <section className="container-page py-20">
        <SectionHeading kicker="Formas de contribuir" title="Elige una opción según tus posibilidades" />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {options.map(([title, text], index) => (
            <article className="card card-hover flex gap-5 p-7" key={title}>
              <span className="grid h-12 w-12 flex-none place-items-center rounded-2xl bg-sps-100 text-lg font-black text-sps-700">{index + 1}</span>
              <div><h2 className="text-xl font-black text-slate-900">{title}</h2><p className="mt-2 leading-7 text-slate-600">{text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-100 py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <SectionHeading kicker="Participación" title="Formulario de interés" description="Este formulario demuestra validación de entradas y manejo de errores. No transmite ni almacena información personal." />
          </div>
          <form className="card grid gap-5 p-7" onSubmit={handleSubmit} noValidate>
            <FormField label="Área de interés" name="area">
              <select className="field-control" id="area" name="area" value={form.area} onChange={updateField}>
                <option value="">Seleccionar</option>
                <option value="digital">Voluntariado digital</option>
                <option value="educacion">Actividades educativas</option>
                <option value="difusion">Difusión</option>
                <option value="programas">Apoyo a programas</option>
              </select>
            </FormField>
            <FormField label="Disponibilidad aproximada" name="availability">
              <select className="field-control" id="availability" name="availability" value={form.availability} onChange={updateField}>
                <option value="">Seleccionar</option>
                <option value="ocasional">Participación ocasional</option>
                <option value="mensual">Una vez al mes</option>
                <option value="semanal">Una vez por semana</option>
              </select>
            </FormField>
            <FormField label="Comentario opcional" name="message" hint={`${form.message.length}/300 caracteres`}>
              <textarea className="field-control min-h-32 resize-y" id="message" name="message" maxLength="300" value={form.message} onChange={updateField} placeholder="Describe brevemente cómo te gustaría colaborar" />
            </FormField>
            {status ? <div className={isError ? 'alert-error' : 'alert-success'} role="status">{status}</div> : null}
            <button className="btn-primary" type="submit">Registrar interés</button>
          </form>
        </div>
      </section>
    </>
  )
}
