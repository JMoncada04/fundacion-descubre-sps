import { useState } from 'react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import FormField from '../components/FormField'
import Icon from '../components/Icon'
import { programs } from '../data/siteData'

const presetAmounts = [100, 250, 500, 1000]
const initialForm = { name: '', email: '', amount: '250', customAmount: '', frequency: 'unica', program: programs[0]?.id ?? '', message: '' }

function validate(form) {
  const errors = {}
  if (form.name.trim().length < 2) errors.name = 'Escribe un nombre de al menos 2 caracteres.'
  if (!/^\S+@\S+\.\S+$/.test(form.email)) errors.email = 'Escribe un correo electrónico válido.'
  if (form.amount === 'otro') {
    const value = Number(form.customAmount)
    if (!value || value <= 0) errors.customAmount = 'Escribe un monto válido mayor a cero.'
  }
  if (!form.program) errors.program = 'Selecciona un área de apoyo.'
  return errors
}

export default function DonationsPage() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  function updateField(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setSent(false)
  }

  function selectAmount(amount) {
    setForm((current) => ({ ...current, amount: String(amount) }))
    setSent(false)
  }

  function handleSubmit(event) {
    event.preventDefault()
    try {
      const nextErrors = validate(form)
      setErrors(nextErrors)
      if (Object.keys(nextErrors).length > 0) throw new Error('Revisa los campos marcados antes de continuar.')
      setSent(true)
      setForm(initialForm)
    } catch (error) {
      setSent(false)
      console.error('Validación de donaciones:', error)
    }
  }

  return (
    <>
      <PageHero kicker="Donaciones" title="Formulario demostrativo de apoyo" description="Simulación académica para practicar el flujo de una donación. No se procesan pagos reales ni se solicitan datos bancarios." image="panorama-sps.webp" />

      <section className="container-page py-20">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <SectionHeading kicker="Impacto" title="Áreas que recibirían el apoyo" description="Cada aporte simulado se asigna a uno de los tres programas de la organización." />
            <div className="mt-8 grid gap-4">
              {programs.map((program) => (
                <article className="card flex gap-4 p-5" key={program.id}>
                  <span className="grid h-11 w-11 flex-none place-items-center rounded-2xl bg-sps-100 text-2xl" aria-hidden="true">{program.icon}</span>
                  <div>
                    <h2 className="font-black text-slate-900">{program.title}</h2>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{program.summary}</p>
                  </div>
                </article>
              ))}
              <article className="alert-info">Proyecto académico: este formulario no está conectado a una pasarela de pago real y no almacena información financiera.</article>
            </div>
          </div>

          <form className="card grid gap-6 p-7" onSubmit={handleSubmit} noValidate>
            <div>
              <p className="field-label">Frecuencia</p>
              <div className="grid grid-cols-2 gap-3">
                <button type="button" className={`rounded-2xl border px-4 py-3 text-sm font-bold transition-colors duration-150 ease-in-out ${form.frequency === 'unica' ? 'border-transparent bg-sps-900 text-white' : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'}`} onClick={() => setForm((current) => ({ ...current, frequency: 'unica' }))} aria-pressed={form.frequency === 'unica'}>Donación única</button>
                <button type="button" className={`rounded-2xl border px-4 py-3 text-sm font-bold transition-colors duration-150 ease-in-out ${form.frequency === 'mensual' ? 'border-transparent bg-sps-900 text-white' : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'}`} onClick={() => setForm((current) => ({ ...current, frequency: 'mensual' }))} aria-pressed={form.frequency === 'mensual'}>Donación mensual</button>
              </div>
            </div>

            <div>
              <p className="field-label">Monto (Lempiras)</p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {presetAmounts.map((amount) => (
                  <button key={amount} type="button" className={`rounded-2xl border px-3 py-3 text-sm font-bold transition-colors duration-150 ease-in-out ${form.amount === String(amount) ? 'border-transparent bg-sps-900 text-white' : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'}`} onClick={() => selectAmount(amount)} aria-pressed={form.amount === String(amount)}>L{amount}</button>
                ))}
              </div>
              <div className="mt-3">
                <button type="button" className={`w-full rounded-2xl border px-4 py-3 text-sm font-bold transition-colors duration-150 ease-in-out ${form.amount === 'otro' ? 'border-transparent bg-sps-900 text-white' : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'}`} onClick={() => setForm((current) => ({ ...current, amount: 'otro' }))} aria-pressed={form.amount === 'otro'}>Otro monto</button>
                {form.amount === 'otro' ? (
                  <div className="mt-3">
                    <FormField label="Monto personalizado" name="customAmount" error={errors.customAmount}>
                      <input className="field-control" id="customAmount" name="customAmount" type="number" min="1" value={form.customAmount} onChange={updateField} />
                    </FormField>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <FormField label="Nombre" name="name" error={errors.name}>
                <input className="field-control" id="name" name="name" type="text" value={form.name} onChange={updateField} autoComplete="name" />
              </FormField>
              <FormField label="Correo electrónico" name="email" error={errors.email}>
                <input className="field-control" id="email" name="email" type="email" value={form.email} onChange={updateField} autoComplete="email" />
              </FormField>
            </div>

            <FormField label="Área de apoyo" name="program" error={errors.program}>
              <select className="field-control" id="program" name="program" value={form.program} onChange={updateField}>
                {programs.map((program) => <option key={program.id} value={program.id}>{program.title}</option>)}
              </select>
            </FormField>

            <FormField label="Mensaje (opcional)" name="message">
              <textarea className="field-control min-h-24 resize-y" id="message" name="message" value={form.message} onChange={updateField} />
            </FormField>

            {sent ? <div className="alert-success" role="status">Simulación registrada correctamente. En esta demostración no se procesó ningún pago real.</div> : null}
            <button className="btn-primary" type="submit">
              <Icon className="h-4 w-4" name="heart" /> Confirmar donación demostrativa
            </button>
          </form>
        </div>
      </section>
    </>
  )
}