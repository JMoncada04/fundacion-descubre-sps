import { Link } from 'react-router'

export default function NotFoundPage() {
  return (
    <section className="container-page grid min-h-[65vh] place-items-center py-20 text-center">
      <div className="max-w-xl"><p className="section-kicker">Error 404</p><h1 className="mt-3 text-5xl font-black text-slate-900">Página no encontrada</h1><p className="mt-4 leading-8 text-slate-600">La ruta solicitada no existe dentro de Fundación Descubre SPS.</p><Link className="btn-primary mt-7" to="/">Regresar al inicio</Link></div>
    </section>
  )
}
