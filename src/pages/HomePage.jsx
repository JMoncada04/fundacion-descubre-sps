import { Link } from 'react-router'
import Icon from '../components/Icon'
import SectionHeading from '../components/SectionHeading'
import { imagePath, news, programs, events } from '../data/siteData'

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-sps-950 text-white">
        <img className="hero-image" src={imagePath('vista-merendon.webp')} alt="Vista real de San Pedro Sula desde la zona montañosa de El Merendón" fetchPriority="high" />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="container-page relative grid min-h-[650px] items-center gap-10 py-20 lg:grid-cols-[1.2fr_.8fr]">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur">Organización sin fines de lucro simulada · San Pedro Sula</p>
            <h1 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-7xl">Conocer, valorar y cuidar San Pedro Sula.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">Promovemos el turismo responsable, la educación cultural y la conservación mediante recursos digitales sencillos y actividades comunitarias demostrativas.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="btn-primary bg-amber-300 text-slate-950 hover:bg-amber-200" to="/programas">Explorar programas <Icon className="h-4 w-4" name="arrow" /></Link>
              <Link className="btn-light" to="/como-ayudar">Cómo ayudar</Link>
            </div>
          </div>
          <aside className="card border-white/20 bg-white/10 p-6 text-white backdrop-blur-xl" aria-label="Resumen de la organización">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-300">Nuestra misión</p>
            <p className="mt-4 text-2xl font-black leading-tight">Acercar la cultura y la naturaleza de San Pedro Sula a través de experiencias responsables.</p>
            <dl className="mt-7 grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
              <div><dt className="text-3xl font-black">3</dt><dd className="text-sm text-slate-200">áreas de trabajo</dd></div>
              <div><dt className="text-3xl font-black">10</dt><dd className="text-sm text-slate-200">páginas informativas</dd></div>
              <div><dt className="text-3xl font-black">0</dt><dd className="text-sm text-slate-200">pagos reales procesados</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-9">
        <div className="container-page grid gap-6 sm:grid-cols-3">
          {[
            ['01', 'Educación clara', 'Contenido breve, accesible y fácil de explicar.'],
            ['02', 'Imágenes reales', 'Paisajes de San Pedro Sula y su entorno.'],
            ['03', 'Acciones responsables', 'Rutas, voluntariado y conservación.']
          ].map(([number, title, text]) => (
            <article className="flex items-start gap-4" key={number}>
              <span className="grid h-11 w-11 flex-none place-items-center rounded-2xl bg-sps-100 font-black text-sps-700">{number}</span>
              <div><h2 className="font-black text-slate-900">{title}</h2><p className="mt-1 text-sm leading-6 text-slate-600">{text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-page py-20">
        <SectionHeading kicker="Qué hacemos" title="Tres programas, una misma meta" description="Cada programa utiliza información sencilla, componentes reutilizables y actividades que pueden presentarse con claridad." />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {programs.map((program) => (
            <article className="card card-hover p-7" key={program.id}>
              <span className="text-4xl" aria-hidden="true">{program.icon}</span>
              <h3 className="mt-5 text-2xl font-black text-slate-900">{program.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{program.summary}</p>
            </article>
          ))}
        </div>
        <Link className="btn-secondary mt-8" to="/programas">Ver todos los programas <Icon className="h-4 w-4" name="arrow" /></Link>
      </section>

      <section className="bg-slate-100 py-20">
        <div className="container-page">
          <SectionHeading kicker="Noticias" title="Actualizaciones recientes" description="Contenido demostrativo creado para mostrar cómo una organización puede comunicar novedades y actividades." />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {news.map((item) => (
              <article className="card p-7" key={item.title}>
                <div className="flex items-center justify-between gap-3 text-xs font-black uppercase tracking-wider text-sps-700"><span>{item.type}</span><span className="text-slate-500">{item.date}</span></div>
                <h3 className="mt-4 text-xl font-black text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <SectionHeading kicker="Próximamente" title="Agenda de actividades" description="Fechas de ejemplo para demostrar el calendario de eventos futuros y pasados solicitado en el proyecto." />
          <div className="grid gap-4">
            {events.filter((event) => event.status === 'Próximo').slice(0, 3).map((event) => (
              <article className="card flex flex-col gap-4 p-5 sm:flex-row sm:items-center" key={event.title}>
                <div className="rounded-2xl bg-sps-900 px-4 py-3 text-center font-black text-white sm:w-28">{event.date}</div>
                <div className="flex-1"><p className="text-xs font-black uppercase tracking-wider text-sps-700">{event.category}</p><h3 className="mt-1 font-black text-slate-900">{event.title}</h3><p className="mt-1 text-sm text-slate-600">{event.time} · {event.place}</p></div>
              </article>
            ))}
            <Link className="btn-primary justify-self-start" to="/eventos">Ver calendario completo</Link>
          </div>
        </div>
      </section>

      <section className="bg-sps-900 py-16 text-white">
        <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div><p className="text-sm font-black uppercase tracking-[0.18em] text-amber-300">Participa</p><h2 className="mt-2 text-3xl font-black">Contribuye con tiempo, ideas o difusión.</h2></div>
          <div className="flex flex-wrap gap-3"><Link className="btn-light" to="/como-ayudar">Opciones para ayudar</Link><Link className="btn-primary bg-amber-300 text-slate-950 hover:bg-amber-200" to="/contacto">Contáctenos</Link></div>
        </div>
      </section>
    </>
  )
}
