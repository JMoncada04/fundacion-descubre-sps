import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import Icon from './Icon'
import { navigation, pageMeta } from '../data/siteData'

const mainLinks = navigation.slice(0, 5)
const extraLinks = navigation.slice(5)

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
    setMoreOpen(false)
  }, [location.pathname])

  const linkClass = ({ isActive }) => `nav-link ${isActive ? 'active' : ''}`

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 text-white shadow-lg backdrop-blur">
      <div className="container-page flex min-h-[72px] items-center justify-between gap-4 py-3">
        <Link className="flex min-w-0 items-center gap-3" to="/" aria-label="Ir al inicio de Fundación Descubre SPS">
          <span className="grid h-11 w-11 flex-none place-items-center rounded-2xl bg-sps-600 text-sm font-black shadow-lg">SPS</span>
          <span className="hidden leading-tight sm:block">
            <strong className="block text-sm">Fundación Descubre SPS</strong>
            <span className="text-xs text-slate-400">Turismo responsable</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegación principal">
          {mainLinks.map((item) => <NavLink key={item.to} className={linkClass} to={item.to}>{item.label}</NavLink>)}
          <div className="relative">
            <button className="nav-link flex items-center gap-1" type="button" onClick={() => setMoreOpen((value) => !value)} aria-expanded={moreOpen}>
              Más <Icon className={`h-4 w-4 transition ${moreOpen ? 'rotate-90' : ''}`} name="arrow" />
            </button>
            {moreOpen ? (
              <div className="absolute right-0 mt-3 w-56 rounded-2xl border border-slate-700 bg-slate-900 p-2 shadow-2xl">
                {extraLinks.map((item) => <NavLink key={item.to} className="block rounded-xl px-4 py-3 text-sm font-bold text-slate-200 hover:bg-white/10 hover:text-white" to={item.to}>{item.label}</NavLink>)}
              </div>
            ) : null}
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <Link className="hidden rounded-full bg-amber-300 px-4 py-2 text-sm font-black text-slate-950 transition hover:bg-amber-200 sm:inline-flex" to="/donaciones">Apoyar</Link>
          <button className="rounded-xl p-2.5 text-white hover:bg-white/10 lg:hidden" type="button" onClick={() => setMobileOpen((value) => !value)} aria-expanded={mobileOpen} aria-controls="mobile-navigation" aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}>
            <Icon name={mobileOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <nav id="mobile-navigation" className="border-t border-white/10 bg-slate-950 lg:hidden" aria-label="Navegación móvil">
          <div className="container-page grid grid-cols-2 gap-2 py-4 sm:grid-cols-3">
            {navigation.map((item) => <NavLink key={item.to} className={linkClass} to={item.to}>{item.label}</NavLink>)}
          </div>
        </nav>
      ) : null}
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="container-page grid gap-10 py-12 md:grid-cols-3">
        <div>
          <h2 className="text-lg font-black text-white">Fundación Descubre SPS</h2>
          <p className="mt-3 text-sm leading-6">Organización simulada para un proyecto académico sobre turismo responsable, cultura y conservación.</p>
        </div>
        <div>
          <h2 className="font-black text-white">Enlaces internos</h2>
          <ul className="mt-3 grid gap-2 text-sm">
            <li><Link className="hover:text-white" to="/programas">Nuestros programas</Link></li>
            <li><Link className="hover:text-white" to="/eventos">Agenda de eventos</Link></li>
            <li><Link className="hover:text-white" to="/contacto">Contáctenos</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="font-black text-white">Recursos externos</h2>
          <ul className="mt-3 grid gap-2 text-sm">
            <li><a className="inline-flex items-center gap-1 hover:text-white" href="https://www.sanpedrosula.hn/teleturismo" target="_blank" rel="noopener noreferrer">Turismo municipal <Icon className="h-4 w-4" name="external" /></a></li>
            <li><a className="inline-flex items-center gap-1 hover:text-white" href="https://commons.wikimedia.org/wiki/Category:San_Pedro_Sula" target="_blank" rel="noopener noreferrer">Wikimedia Commons <Icon className="h-4 w-4" name="external" /></a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-500">© {new Date().getFullYear()} Fundación Descubre SPS · Proyecto académico demostrativo</div>
    </footer>
  )
}

export default function Layout({ children }) {
  const location = useLocation()

  useEffect(() => {
    const meta = pageMeta[location.pathname] ?? pageMeta['/']
    document.title = meta.title
    const description = document.querySelector('meta[name="description"]')
    if (description) description.setAttribute('content', meta.description)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname])

  return (
    <div className="page-shell">
      <a className="skip-link" href="#contenido-principal">Saltar al contenido principal</a>
      <Header />
      <main id="contenido-principal" className="page-main">{children}</main>
      <Footer />
    </div>
  )
}
