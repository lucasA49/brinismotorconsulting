import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import wordmark from '../assets/img/wordmark.png'
import { site } from '../config/site.js'
import { Container, ButtonLink } from './ui.jsx'

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

const linkClass = ({ isActive }) =>
  `relative py-2 text-sm font-medium transition-colors ${
    isActive ? 'text-white after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded after:bg-brand' : 'text-muted hover:text-white'
  }`

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  // Touche Échap + blocage du scroll quand le menu est ouvert
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-ink/85 backdrop-blur-md">
      <Container className="flex h-18 items-center justify-between gap-6">
        <Link to="/" onClick={close} className="shrink-0" aria-label={`${site.name} — retour à l'accueil`}>
          <img src={wordmark} alt="" width="640" height="108" className="h-9 w-auto sm:h-10" />
        </Link>

        <nav aria-label="Navigation principale" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} end className={linkClass}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a href={`tel:${site.phoneHref}`} className="flex items-center gap-2 text-sm text-muted hover:text-white">
            <Phone className="size-4 text-brand-light" aria-hidden="true" />
            {site.phone}
          </a>
          <ButtonLink to="/contact" className="!min-h-10 !px-4 !py-2">
            Demander un conseil
          </ButtonLink>
        </div>

        <button
          type="button"
          className="-mr-2 inline-flex size-12 items-center justify-center rounded-lg text-white md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </Container>

      {open && (
        <nav
          id="menu-mobile"
          aria-label="Navigation mobile"
          className="h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-line bg-ink md:hidden"
        >
          <Container className="flex flex-col gap-2 py-6">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end
                onClick={close}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-4 text-lg font-medium ${isActive ? 'bg-surface-2 text-white' : 'text-chrome hover:bg-surface'}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a href={`tel:${site.phoneHref}`} onClick={close} className="mt-4 flex items-center gap-3 px-4 py-3 text-chrome">
              <Phone className="size-5 text-brand-light" aria-hidden="true" />
              {site.phone}
            </a>
            <ButtonLink to="/contact" onClick={close} className="mt-2">
              Demander un conseil
            </ButtonLink>
          </Container>
        </nav>
      )}
    </header>
  )
}
