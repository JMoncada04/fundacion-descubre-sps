export default function SectionHeading({ kicker, title, description, center = false }) {
  return (
    <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="section-kicker">{kicker}</p>
      <h2 className="section-title">{title}</h2>
      {description ? <p className={`section-copy ${center ? 'mx-auto' : ''}`}>{description}</p> : null}
    </div>
  )
}
