import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import wordmark from '../assets/img/wordmark.png'
import { site } from '../config/site.js'
import { Container } from './ui.jsx'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="glow-line" aria-hidden="true" />
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <img src={wordmark} alt={site.name} width="640" height="108" loading="lazy" className="h-10 w-auto" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">{site.description}</p>
        </div>

        <nav aria-label="Liens du pied de page">
          <h2 className="font-sans text-sm font-semibold uppercase tracking-wider text-white">Navigation</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link to="/" className="text-muted hover:text-white">Accueil</Link></li>
            <li><Link to="/services" className="text-muted hover:text-white">Services</Link></li>
            <li><Link to="/contact" className="text-muted hover:text-white">Contact</Link></li>
            <li><Link to="/mentions-legales" className="text-muted hover:text-white">Mentions légales</Link></li>
          </ul>
        </nav>

        <div>
          <h2 className="font-sans text-sm font-semibold uppercase tracking-wider text-white">Contact</h2>
          <address className="mt-4 space-y-3 text-sm not-italic">
            <a href={`tel:${site.phoneHref}`} className="flex items-center gap-3 text-muted hover:text-white">
              <Phone className="size-4 shrink-0 text-brand-light" aria-hidden="true" /> {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 break-all text-muted hover:text-white">
              <Mail className="size-4 shrink-0 text-brand-light" aria-hidden="true" /> {site.email}
            </a>
            <p className="flex items-center gap-3 text-muted">
              <MapPin className="size-4 shrink-0 text-brand-light" aria-hidden="true" /> {site.area}
            </p>
          </address>
        </div>
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-col gap-2 py-6 text-xs text-muted sm:flex-row sm:justify-between">
          <p>© {year} {site.name}. Tous droits réservés.</p>
          <p>{site.tagline}</p>
        </Container>
      </div>
    </footer>
  )
}
