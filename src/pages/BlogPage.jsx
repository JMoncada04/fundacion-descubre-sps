import { useState } from 'react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { blogPosts } from '../data/siteData'

export default function BlogPage() {
  const [openPost, setOpenPost] = useState(null)

  return (
    <>
      <PageHero kicker="Blog" title="Ideas para conocer y cuidar la ciudad" description="Artículos breves sobre rutas, accesibilidad, cultura, tecnología y naturaleza, creados para una lectura sencilla." image="centro-sps.webp" />

      <section className="container-page py-20">
        <SectionHeading kicker="Publicaciones" title="Artículos recientes" description="Cada tarjeta amplía su contenido sin abandonar la página" />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => {
            const isOpen = openPost === post.id
            return (
              <article className="card flex flex-col p-7" key={post.id}>
                <div className="flex items-center justify-between gap-3 text-xs font-black uppercase tracking-wider"><span className="text-sps-700">{post.category}</span><span className="text-slate-500">{post.date}</span></div>
                <h2 className="mt-4 text-2xl font-black leading-tight text-slate-900">{post.title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{post.excerpt}</p>
                {isOpen ? <p className="mt-4 rounded-2xl bg-slate-100 p-4 text-sm leading-7 text-slate-700">{post.content}</p> : null}
                <button className="mt-6 self-start font-black text-sps-700 hover:text-sps-500" type="button" onClick={() => setOpenPost(isOpen ? null : post.id)} aria-expanded={isOpen}>{isOpen ? 'Cerrar artículo' : 'Leer artículo'}</button>
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}
