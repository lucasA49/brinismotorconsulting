import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Clock, Eye, UserCheck } from 'lucide-react'
import logo from '../assets/img/logo-brinis.jpg'
import Seo from '../components/Seo.jsx'
import { Container, ButtonLink, SectionHeading } from '../components/ui.jsx'
import { services, vehicles, steps } from '../data/services.js'
import CtaBand from '../components/CtaBand.jsx'

const values = [
  { icon: UserCheck, title: 'Un interlocuteur unique', text: 'Un conseiller dédié vous suit du premier appel à la remise des clés.' },
  { icon: Eye, title: 'Transparence totale', text: 'Des avis honnêtes et argumentés, même quand la réponse est « non ».' },
  { icon: Clock, title: 'Gain de temps', text: 'Fini les annonces douteuses et les rendez-vous inutiles : on filtre pour vous.' },
]

export default function Home() {
  return (
    <>
      <Seo />

      {/* ── Hero ───────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-brand/15 blur-3xl"
        />
        <Container className="relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-4 py-1.5 text-xs font-medium text-chrome">
              <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
              Automobile & Moto
            </p>
            <h1 className="text-4xl font-extrabold italic leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-gradient-chrome">Acheteur & vendeur,</span>
              <br />
              <span className="text-brand-light">enfin connectés.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Brinis Motor Consulting vous accompagne pour acheter ou vendre votre voiture ou
              votre moto en toute confiance : mise en relation, conseils personnalisés et
              transaction sécurisée.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/contact">
                Parler de mon projet <ArrowRight className="size-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink to="/services" variant="secondary">
                Découvrir nos services
              </ButtonLink>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted">
              {['Premier échange gratuit', 'Sans engagement', 'Conseils sur mesure'].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-brand-light" aria-hidden="true" /> {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <img
              src={logo}
              alt="Logo Brinis Motor Consulting — acheteur et vendeur connectés, automobile et moto"
              width="1400"
              height="933"
              fetchPriority="high"
              className="w-full rounded-2xl [mask-image:radial-gradient(ellipse_at_center,black_65%,transparent_100%)]"
            />
          </div>
        </Container>
      </section>

      {/* ── Auto / Moto ────────────────────────── */}
      <section aria-labelledby="vehicules-titre" className="border-y border-line bg-surface">
        <Container className="py-16">
          <h2 id="vehicules-titre" className="sr-only">Véhicules accompagnés</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {vehicles.map(({ id, icon: Icon, title, text }) => (
              <div key={id} className="flex gap-5 rounded-2xl border border-line bg-ink/60 p-6">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand-light">
                  <Icon className="size-7" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-bold italic">{title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Services ───────────────────────────── */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Nos services"
              title="Un accompagnement complet, de A à Z"
              intro="Que vous achetiez ou que vous vendiez, nous mettons notre expertise à votre service."
            />
            <Link to="/services" className="inline-flex items-center gap-2 font-semibold text-brand-light hover:text-white">
              Tous les services <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ id, icon: Icon, title, summary }) => (
              <li key={id}>
                <Link
                  to={`/services#${id}`}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-brand/60 hover:bg-surface-2"
                >
                  <Icon className="size-8 text-brand-light" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-bold italic">{title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{summary}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-light">
                    En savoir plus
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── Méthode ────────────────────────────── */}
      <section className="border-y border-line bg-surface py-20 sm:py-28">
        <Container>
          <SectionHeading center eyebrow="Notre méthode" title="Simple, clair, efficace" />
          <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="relative">
                <span className="font-display text-5xl font-extrabold italic text-brand/30" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 text-lg font-bold italic">
                  <span className="sr-only">Étape {i + 1} : </span>
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* ── Pourquoi nous ──────────────────────── */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading center eyebrow="Pourquoi nous choisir" title="La confiance avant tout" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-line bg-surface p-8 text-center">
                <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-brand/10 text-brand-light">
                  <Icon className="size-7" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-bold italic">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  )
}
