import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-colors min-h-12 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60'

const variants = {
  primary: 'bg-brand text-white shadow-lg shadow-brand/25 hover:bg-brand-hover',
  secondary: 'border border-line bg-surface-2/60 text-white hover:border-brand-light hover:text-white',
}

export function ButtonLink({ to, variant = 'primary', className = '', children, ...props }) {
  return (
    <Link to={to} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Link>
  )
}

export function Button({ variant = 'primary', className = '', children, ...props }) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

export function Eyebrow({ children }) {
  return (
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-light">
      {children}
    </p>
  )
}

export function SectionHeading({ eyebrow, title, intro, center = false, as: Tag = 'h2' }) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Tag className="text-3xl font-bold italic tracking-tight sm:text-4xl">{title}</Tag>
      {intro && <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>}
    </div>
  )
}

export function Container({ className = '', children }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
}
