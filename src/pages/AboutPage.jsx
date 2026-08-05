import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'

const values = [
  ['Responsabilidad', 'Planificamos actividades que respetan los espacios y orientan al visitante.'],
  ['Educación', 'Convertimos información compleja en recursos breves y comprensibles.'],
  ['Accesibilidad', 'Diseñamos contenido adaptable, navegable y acompañado de textos alternativos.'],
  ['Colaboración', 'Promovemos la participación por áreas sin publicar datos personales del equipo.']
]

const areas = [
  ['Coordinación de programas', 'Organiza rutas, talleres y contenidos educativos.'],
  ['Comunicación digital', 'Administra la galería, el blog y las publicaciones del sitio.'],
  ['Conservación y comunidad', 'Propone acciones de sensibilización y cuidado del entorno.'],
  ['Soporte tecnológico', 'Mantiene la plataforma, la accesibilidad y el despliegue web.']
]

export default function AboutPage() {
  return (
    <>
      <PageHero kicker="Acerca de nosotros" title="Una iniciativa académica con propósito local" description="Fundación Descubre SPS representa una organización sin fines de lucro dedicada a comunicar el valor cultural, urbano y natural de San Pedro Sula." image="centro-sps.webp" />

      <section className="container-page py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="prose-simple">
            <p className="section-kicker">Nuestra historia</p>
            <h2 className="section-title">De una guía turística a una plataforma comunitaria</h2>
            <p>El proyecto comenzó como una página sencilla sobre turismo en San Pedro Sula. Para responder a los requisitos académicos, evolucionó a una SPA con diez rutas y una organización simulada enfocada en educación, participación y conservación.</p>
            <p>La plataforma conserva las imágenes reales, el planificador de rutas y el enfoque visual original, pero agrega programas, eventos, blog, formularios y páginas informativas conectadas mediante componentes de React.</p>
          </div>
          <img className="card aspect-[4/3] w-full object-cover" src={`${import.meta.env.BASE_URL}images/panorama-sps.webp`} alt="Panorámica real de San Pedro Sula y las montañas que rodean el Valle de Sula" />
        </div>
      </section>

      <section className="bg-slate-100 py-20">
        <div className="container-page grid gap-6 md:grid-cols-3">
          <article className="card p-7"><p className="section-kicker">Misión</p><h2 className="mt-3 text-2xl font-black text-slate-900">Promover visitas responsables</h2><p className="mt-3 leading-7 text-slate-600">Facilitar recursos educativos y digitales para conocer San Pedro Sula respetando su cultura y su entorno.</p></article>
          <article className="card p-7"><p className="section-kicker">Visión</p><h2 className="mt-3 text-2xl font-black text-slate-900">Una comunidad informada</h2><p className="mt-3 leading-7 text-slate-600">Ser una referencia académica de comunicación accesible sobre turismo local y participación comunitaria.</p></article>
          <article className="card p-7"><p className="section-kicker">Objetivo</p><h2 className="mt-3 text-2xl font-black text-slate-900">Conectar información y acción</h2><p className="mt-3 leading-7 text-slate-600">Integrar rutas, artículos, eventos y opciones de apoyo en una experiencia web consistente.</p></article>
        </div>
      </section>

      <section className="container-page py-20">
        <SectionHeading kicker="Nuestros valores" title="Principios que orientan el proyecto" />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {values.map(([title, text], index) => (
            <article className="card flex gap-5 p-6" key={title}>
              <span className="grid h-11 w-11 flex-none place-items-center rounded-2xl bg-sps-100 font-black text-sps-700">{String(index + 1).padStart(2, '0')}</span>
              <div><h3 className="text-lg font-black text-slate-900">{title}</h3><p className="mt-2 leading-7 text-slate-600">{text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-sps-950 py-20 text-white">
        <div className="container-page">
          <div className="max-w-3xl"><p className="text-sm font-black uppercase tracking-[0.18em] text-amber-300">Nuestro equipo</p><h2 className="mt-3 text-4xl font-black">Organizado por áreas, sin perfiles personales</h2><p className="mt-4 max-w-2xl leading-8 text-slate-300">Para respetar la indicación de no utilizar datos ni fotografías de personas, el equipo se presenta mediante funciones institucionales.</p></div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {areas.map(([title, text]) => <article className="rounded-3xl border border-white/15 bg-white/5 p-6" key={title}><h3 className="text-xl font-black">{title}</h3><p className="mt-2 leading-7 text-slate-300">{text}</p></article>)}
          </div>
        </div>
      </section>
    </>
  )
}
