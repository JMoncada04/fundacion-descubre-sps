import { Route, Routes } from 'react-router'
import ErrorBoundary from './components/ErrorBoundary'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'

function App() {

  return (
     <ErrorBoundary>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/programas" element={<ProgramsPage />} />
          <Route path="/como-ayudar" element={<HelpPage />} />
          <Route path="/galeria" element={<GalleryPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/eventos" element={<EventsPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/donaciones" element={<DonationsPage />} />
          <Route path="/preguntas-frecuentes" element={<FaqPage />} />
          <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </Layout>
    </ErrorBoundary>
  )
}

export default App
