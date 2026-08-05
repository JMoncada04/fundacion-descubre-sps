import { useState } from 'react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import FormField from '../components/FormField'
import Icon from '../components/Icon'

const initialForm = { name: '', email: '', subject: '', message: '' }

function validate(form) {
  const errors = {}
  if (form.name.trim().length < 2) errors.name = 'Escribe un nombre de al menos 2 caracteres.'
  if (!/^\S+@\S+\.\S+$/.test(form.email)) errors.email = 'Escribe un correo electrónico válido.'
  if (!form.subject) errors.subject = 'Selecciona un asunto.'
  if (form.message.trim().length < 15) errors.message = 'El mensaje debe tener al menos 15 caracteres.'
  if (form.message.length > 600) errors.message = 'El mensaje no puede superar 600 caracteres.'
  return errors
}

export default function ContactPage() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  function updateField(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
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
      console.error('Validación de contacto:', error)
    }
  }

  return (
    <>
      <PageHero kicker="Contáctenos" title="Conversemos sobre el proyecto" description="Información general y formulario demostrativo para consultas relacionadas con programas, actividades y colaboración." image="panorama-sps.webp" />

      <section className="container-page py-20">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <SectionHeading kicker="Información" title="Canales generales" description="El sitio evita publicar direcciones personales, teléfonos privados o datos de integrantes." />
            <div className="mt-8 grid gap-4">
              <article className="card flex gap-4 p-5"><span className="grid h-11 w-11 flex-none place-items-center rounded-2xl bg-sps-100 text-sps-700"><Icon name="mail" /></span><div><h2 className="font-black text-slate-900">Correo institucional de ejemplo</h2><p className="mt-1 text-sm text-slate-600">contacto@descubresps.example</p></div></article>
              <article className="card flex gap-4 p-5"><span className="grid h-11 w-11 flex-none place-items-center rounded-2xl bg-sps-100 text-sps-700"><Icon name="map" /></span><div><h2 className="font-black text-slate-900">Área de trabajo</h2><p className="mt-1 text-sm text-slate-600">San Pedro Sula, Cortés, Honduras</p></div></article>
              <article className="alert-info">Proyecto académico: el formulario no está conectado a una bandeja real y no almacena la información ingresada.</article>
            </div>
          </div>

          <form className="card grid gap-5 p-7" onSubmit={handleSubmit} noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <FormField label="Nombre" name="name" error={errors.name}>
                <input className="field-control" id="name" name="name" type="text" value={form.name} onChange={updateField} autoComplete="name" />
              </FormField>
              <FormField label="Correo electrónico" name="email" error={errors.email}>
                <input className="field-control" id="email" name="email" type="email" value={form.email} onChange={updateField} autoComplete="email" />
              </FormField>
            </div>
            <FormField label="Asunto" name="subject" error={errors.subject}>
              <select className="field-control" id="subject" name="subject" value={form.subject} onChange={updateField}>
                <option value="">Seleccionar</option>
                <option value="programas">Información sobre programas</option>
                <option value="eventos">Consulta sobre eventos</option>
                <option value="voluntariado">Voluntariado</option>
                <option value="sitio">Comentario sobre el sitio</option>
              </select>
            </FormField>
            <FormField label="Mensaje" name="message" error={errors.message} hint={`${form.message.length}/600 caracteres`}>
              <textarea className="field-control min-h-40 resize-y" id="message" name="message" maxLength="600" value={form.message} onChange={updateField} />
            </FormField>
            {sent ? <div className="alert-success" role="status">Formulario validado correctamente. En esta demostración no se enviaron ni almacenaron datos.</div> : null}
            <button className="btn-primary" type="submit">Validar y enviar demostración</button>
          </form>
        </div>
      </section>
    </>
  )
}
