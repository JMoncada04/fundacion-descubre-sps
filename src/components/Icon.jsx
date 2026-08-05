export default function Icon({ name, className = 'h-5 w-5' }) {
  const paths = {
    menu: <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />,
    close: <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />,
    arrow: <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />,
    external: <path strokeLinecap="round" strokeLinejoin="round" d="M13 5h6v6m0-6-9 9M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />,
    check: <path strokeLinecap="round" strokeLinejoin="round" d="m5 12 4 4L19 6" />,
    map: <><path strokeLinecap="round" strokeLinejoin="round" d="m9 18-6 3V6l6-3 6 3 6-3v15l-6 3-6-3Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 3v15M15 6v15" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path strokeLinecap="round" strokeLinejoin="round" d="m3 7 9 6 9-6" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path strokeLinecap="round" strokeLinejoin="round" d="M16 3v4M8 3v4M3 10h18" /></>,
    heart: <path strokeLinecap="round" strokeLinejoin="round" d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />,
    plus: <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />,
    minus: <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
  }

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      {paths[name] ?? paths.arrow}
    </svg>
  )
}
