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

export const faqItems = [
  {
    question: '¿La Fundación Descubre SPS es una organización real?',
    answer: 'Este sitio representa una organización simulada creada para un proyecto académico. Sus formularios y actividades son demostrativos.'
  },
  {
    question: '¿El planificador guarda mi ubicación?',
    answer: 'No. El planificador solo usa las opciones seleccionadas en el navegador y genera un enlace hacia Google Maps.'
  },
  {
    question: '¿Las fotografías son reales?',
    answer: 'Sí. El proyecto utiliza imágenes reales de San Pedro Sula y su entorno, conservadas desde la versión original del sitio.'
  },
  {
    question: '¿Puedo realizar una donación real?',
    answer: 'No. El formulario de donaciones es una simulación académica y no solicita datos bancarios ni procesa pagos.'
  },
  {
    question: '¿Cómo puedo participar como voluntario?',
    answer: 'La página Cómo ayudar muestra opciones de participación y un formulario demostrativo para elegir un área de interés.'
  },
  {
    question: '¿El sitio funciona en teléfonos?',
    answer: 'Sí. La navegación, tarjetas, galería, formularios y planificador se adaptan a pantallas móviles.'
  },
  {
    question: '¿Por qué se utiliza una SPA?',
    answer: 'La aplicación usa React, Tailwind CSS y Vite. Cada sección tiene su propia ruta y comparte componentes reutilizables.'
  },
  {
    question: '¿Dónde se publicará el proyecto?',
    answer: 'El repositorio incluye un flujo de GitHub Actions preparado para construir el sitio y publicarlo en GitHub Pages.'
  }
]

export const routePlans = {
  cultura: {
    3: ['Parque Central', 'Catedral de San Pedro Apóstol'],
    6: ['Museo de Antropología e Historia', 'Parque Central', 'Catedral de San Pedro Apóstol'],
    9: ['Museo de Antropología e Historia', 'Parque Central', 'Catedral de San Pedro Apóstol', 'Mercado Guamilito']
  },
  naturaleza: {
    3: ['Vista desde El Merendón'],
    6: ['Sendero Bella Vista', 'Vista desde El Merendón'],
    9: ['Parque Nacional Cusuco', 'Vista desde El Merendón']
  },
  mixto: {
    3: ['Parque Central', 'Mercado Guamilito'],
    6: ['Parque Central', 'Mercado Guamilito', 'Vista desde El Merendón'],
    9: ['Museo de Antropología e Historia', 'Parque Central', 'Mercado Guamilito', 'Vista desde El Merendón']
  }
}

export const mapLocations = {
  'Parque Central': 'Parque Central de San Pedro Sula, Cortés, Honduras',
  'Catedral de San Pedro Apóstol': 'Catedral San Pedro Apóstol, San Pedro Sula, Cortés, Honduras',
  'Museo de Antropología e Historia': 'Museo de Antropología e Historia, San Pedro Sula, Cortés, Honduras',
  'Mercado Guamilito': 'Mercado Guamilito, San Pedro Sula, Cortés, Honduras',
  'Vista desde El Merendón': 'El Merendón, San Pedro Sula, Cortés, Honduras',
  'Sendero Bella Vista': 'Sendero Bella Vista, San Pedro Sula, Cortés, Honduras',
  'Parque Nacional Cusuco': 'Parque Nacional Cusuco, Cortés, Honduras'
}

export const galleryItems = [
  {
    id: 1,
    category: 'ciudad',
    image: 'panorama-sps.webp',
    title: 'Panorámica de San Pedro Sula',
    alt: 'Panorámica real de San Pedro Sula rodeada por las montañas del Valle de Sula'
  },
  {
    id: 2,
    category: 'naturaleza',
    image: 'vista-merendon.webp',
    title: 'Vista desde El Merendón',
    alt: 'Vista real de San Pedro Sula desde la zona montañosa de El Merendón'
  },
  {
    id: 3,
    category: 'cultura',
    image: 'centro-sps.webp',
    title: 'Entorno urbano del centro',
    alt: 'Vista real del centro de San Pedro Sula con edificios urbanos y montañas al fondo'
  },
  {
    id: 4,
    category: 'naturaleza',
    image: 'cusuco.webp',
    title: 'Bosque del Parque Nacional Cusuco',
    alt: 'Bosque real con pinos y helechos en el Parque Nacional Cusuco, Honduras'
  },
  {
    id: 5,
    category: 'paisaje',
    image: 'vista-merendon.webp',
    title: 'Ciudad y montaña',
    alt: 'Paisaje real donde se observa San Pedro Sula y las montañas de su entorno'
  },
  {
    id: 6,
    category: 'ciudad',
    image: 'panorama-sps.webp',
    title: 'Valle de Sula',
    alt: 'Vista panorámica real del área urbana de San Pedro Sula en el Valle de Sula'
  },
  {
    id: 7,
    category: 'naturaleza',
    image: 'cusuco.webp',
    title: 'Vegetación de montaña',
    alt: 'Vegetación real del bosque montañoso del Parque Nacional Cusuco'
  },
  {
    id: 8,
    category: 'cultura',
    image: 'centro-sps.webp',
    title: 'Paisaje urbano sampedrano',
    alt: 'Paisaje urbano real de San Pedro Sula con las montañas al fondo'
  }
]

