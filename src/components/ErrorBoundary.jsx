import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error) {
    console.error('Error de la aplicación:', error)
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="container-page grid min-h-[70vh] place-items-center py-20">
          <div className="card max-w-xl p-8 text-center">
            <p className="section-kicker">Error controlado</p>
            <h1 className="mt-3 text-3xl font-black text-slate-900">No fue posible mostrar esta sección</h1>
            <p className="mt-4 leading-7 text-slate-600">Recarga la página. Si el problema continúa, regresa al inicio desde el menú principal.</p>
          </div>
        </main>
      )
    }

    return this.props.children
  }
}
