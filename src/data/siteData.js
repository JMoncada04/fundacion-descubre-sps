export const imagePath = (fileName) => `${import.meta.env.BASE_URL}images/${fileName}`


export const navigation = [
  { to: '/', label: 'Inicio' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/programas', label: 'Programas' },
  { to: '/como-ayudar', label: 'Cómo ayudar' },
  { to: '/galeria', label: 'Galería' },
  { to: '/blog', label: 'Blog' },
  { to: '/eventos', label: 'Eventos' },
  { to: '/contacto', label: 'Contacto' },
  { to: '/donaciones', label: 'Donaciones' },
  { to: '/preguntas-frecuentes', label: 'FAQ' }
]

export const pageMeta = {
  '/': {
    title: 'Inicio | Fundación Descubre SPS',
    description: 'Conoce la misión, noticias y actividades de Fundación Descubre SPS.'
  },
  '/nosotros': {
    title: 'Acerca de nosotros | Fundación Descubre SPS',
    description: 'Historia, misión, visión, valores y áreas de trabajo de la organización.'
  },
  '/programas': {
    title: 'Nuestros programas | Fundación Descubre SPS',
    description: 'Programas de turismo responsable, educación cultural y conservación ambiental.'
  },
  '/como-ayudar': {
    title: 'Cómo ayudar | Fundación Descubre SPS',
    description: 'Opciones de voluntariado, difusión, colaboración y apoyo a la organización.'
  },
  '/galeria': {
    title: 'Galería | Fundación Descubre SPS',
    description: 'Galería de paisajes y espacios representativos de San Pedro Sula y su entorno.'
  },
  '/blog': {
    title: 'Blog | Fundación Descubre SPS',
    description: 'Artículos educativos sobre cultura, turismo responsable y naturaleza.'
  },
  '/eventos': {
    title: 'Eventos | Fundación Descubre SPS',
    description: 'Agenda demostrativa de recorridos, talleres y actividades comunitarias.'
  },
  '/contacto': {
    title: 'Contacto | Fundación Descubre SPS',
    description: 'Formulario e información general para comunicarse con la organización.'
  },
  '/donaciones': {
    title: 'Donaciones | Fundación Descubre SPS',
    description: 'Formulario demostrativo de apoyo a programas culturales y ambientales.'
  },
  '/preguntas-frecuentes': {
    title: 'Preguntas frecuentes | Fundación Descubre SPS',
    description: 'Respuestas sobre actividades, voluntariado, donaciones y uso del sitio.'
  }
}
export const news = [
  {
    type: 'Noticia',
    date: 'Agosto 2026',
    title: 'Nueva guía digital para recorridos cortos',
    text: 'La plataforma incorpora un planificador que organiza lugares y abre la ruta directamente en Google Maps.'
  },
  {
    type: 'Actualización',
    date: 'Agosto 2026',
    title: 'Galería optimizada para dispositivos móviles',
    text: 'Las imágenes reales de San Pedro Sula se muestran en un diseño adaptable y con textos alternativos descriptivos.'
  },
  {
    type: 'Comunidad',
    date: 'Septiembre 2026',
    title: 'Taller demostrativo de turismo responsable',
    text: 'Actividad educativa de ejemplo sobre planificación, respeto al entorno y uso responsable de espacios públicos.'
  }
]

export const programs = [
  {
    id: 'rutas',
    icon: '🧭',
    title: 'Rutas responsables',
    summary: 'Recorridos sencillos que conectan cultura, espacios urbanos y naturaleza sin solicitar datos personales.',
    activities: ['Planificador de rutas', 'Recomendaciones de visita', 'Buenas prácticas para visitantes']
  },
  {
    id: 'educacion',
    icon: '📚',
    title: 'Educación cultural',
    summary: 'Material breve para comprender el valor del patrimonio, la identidad local y el cuidado de los espacios públicos.',
    activities: ['Talleres educativos', 'Guías digitales', 'Charlas comunitarias']
  },
  {
    id: 'conservacion',
    icon: '🌿',
    title: 'Conservación del entorno',
    summary: 'Acciones informativas para promover visitas responsables a El Merendón, Cusuco y otras áreas naturales.',
    activities: ['Jornadas de sensibilización', 'Campañas de limpieza', 'Orientación para senderistas']
  }
]
export const events = [
  {
    status: 'Próximo',
    date: '12 SEP 2026',
    title: 'Taller: visita responsable a espacios urbanos',
    time: '9:00 a. m. – 11:00 a. m.',
    place: 'Modalidad virtual',
    category: 'Educación',
    description: 'Sesión demostrativa para preparar recorridos claros, seguros y respetuosos con el entorno.'
  },
  {
    status: 'Próximo',
    date: '26 SEP 2026',
    title: 'Recorrido interpretativo del centro',
    time: '8:30 a. m. – 10:30 a. m.',
    place: 'San Pedro Sula',
    category: 'Cultura',
    description: 'Actividad académica simulada para identificar puntos de interés y practicar orientación urbana.'
  },
  {
    status: 'Próximo',
    date: '10 OCT 2026',
    title: 'Charla: naturaleza y turismo responsable',
    time: '3:00 p. m. – 4:30 p. m.',
    place: 'Modalidad virtual',
    category: 'Naturaleza',
    description: 'Introducción al cuidado de senderos, residuos y planificación antes de visitar zonas naturales.'
  },
  {
    status: 'Finalizado',
    date: '18 JUL 2026',
    title: 'Presentación de la guía Descubre SPS',
    time: '10:00 a. m. – 11:00 a. m.',
    place: 'Modalidad virtual',
    category: 'Proyecto',
    description: 'Demostración inicial del sitio, sus imágenes, filtros y recursos de navegación.'
  },
  {
    status: 'Finalizado',
    date: '20 JUN 2026',
    title: 'Conversatorio sobre patrimonio local',
    time: '2:00 p. m. – 3:00 p. m.',
    place: 'Modalidad virtual',
    category: 'Cultura',
    description: 'Actividad académica de ejemplo enfocada en el valor de conservar y comunicar el patrimonio.'
  }
]
