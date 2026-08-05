export default function FormField({ label, name, error, children, hint }) {
  return (
    <div>
      <label className="field-label" htmlFor={name}>{label}</label>
      {children}
      {hint ? <p className="mt-2 text-xs leading-5 text-slate-500">{hint}</p> : null}
      {error ? <p className="field-error" role="alert">{error}</p> : null}
    </div>
  )
}
