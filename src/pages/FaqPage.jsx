import { useState } from 'react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Icon from '../components/Icon'
import { faqItems } from '../data/siteData'

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <>
      <PageHero kicker="Preguntas frecuentes" title="Respuestas claras sobre el proyecto" description="En esta seccion se responderan las preguntas mas frecuentes sobre el proyecto" image="panorama-sps.webp" />

      <section className="container-page py-20">
        <SectionHeading kicker="FAQ" title="Dudas comunes" description="Selecciona una pregunta para mostrar u ocultar su respuesta." />
        <div className="mt-10 grid gap-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <article className="card overflow-hidden" key={item.question}>
                <button className="flex w-full items-center justify-between gap-5 p-6 text-left" type="button" onClick={() => setOpenIndex(isOpen ? -1 : index)} aria-expanded={isOpen}>
                  <span className="text-lg font-black text-slate-900">{item.question}</span>
                  <span className="grid h-9 w-9 flex-none place-items-center rounded-full bg-sps-100 text-sps-700"><Icon className="h-4 w-4" name={isOpen ? 'minus' : 'plus'} /></span>
                </button>
                {isOpen ? <div className="border-t border-slate-200 px-6 py-5"><p className="max-w-4xl leading-8 text-slate-600">{item.answer}</p></div> : null}
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}
