import { Check } from 'lucide-react'
import Seo from '../components/Seo.jsx'
import { Container, SectionHeading } from '../components/ui.jsx'
import { services, vehicles, steps } from '../data/services.js'
import CtaBand from '../components/CtaBand.jsx'

export default function Services() {
  return (
    <>
      <Seo
        title="Nos services"
        description="Mise en relation, conseils personnalisés, accompagnement à l'achat et à la vente de voitures et de motos."
      />

      <section className="relative overflow-hidden border-b border-line">
        <div aria-hidden="true" className="pointer-events-none absolute -top-32 right-0 h-96 w-[40rem] rounded-full bg-brand/15 blur-3xl" />
        <Container className="relative py-16 sm:py-24">
          <SectionHeading
            as="h1"
            eyebrow="Services"
            title="Des services pensés pour acheter et vendre sereinement"
            intro="Chaque projet est unique. Nous adaptons notre accompagnement à votre situation, que vous soyez acheteur, vendeur, en automobile ou en moto."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="space-y-6">
          {services.map(({ id, icon: Icon, title, summary, points }) => (
            <article
              key={id}
              id={id}
              className="scroll-mt-28 grid gap-8 rounded-2xl border border-line bg-surface p-6 sm:p-10 md:grid-cols-[auto_1fr_1fr]"
            >
              <div className="flex size-16 items-center justify-center rounded-xl bg-brand/10 text-brand-light">
                <Icon className="size-8" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-2xl font-bold italic">{title}</h2>
                <p className="mt-3 leading-relaxed text-muted">{summary}</p>
              </div>
              <ul className="space-y-3">
                {points.map((p) => (
                  <li key={p} className="flex gap-3 text-chrome">
                    <Check className="mt-0.5 size-5 shrink-0 text-brand-light" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </Container>
      </section>

      <section className="border-y border-line bg-surface py-16 sm:py-24">
        <Container>
          <SectionHeading center eyebrow="Spécialités" title="Deux univers, une même exigence" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {vehicles.map(({ id, icon: Icon, title, text }) => (
              <div key={id} className="rounded-2xl border border-line bg-ink/60 p-8">
                <Icon className="size-10 text-brand-light" aria-hidden="true" />
                <h3 className="mt-5 text-2xl font-bold italic">{title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading center eyebrow="Déroulement" title="Comment ça se passe ?" />
          <ol className="mx-auto mt-12 max-w-3xl space-y-4">
            {steps.map((s, i) => (
              <li key={s.title} className="flex gap-5 rounded-2xl border border-line bg-surface p-6">
                <span
                  className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand font-display font-bold text-white"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold italic">
                    <span className="sr-only">Étape {i + 1} : </span>
                    {s.title}
                  </h3>
                  <p className="mt-1 leading-relaxed text-muted">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <CtaBand />
    </>
  )
}
