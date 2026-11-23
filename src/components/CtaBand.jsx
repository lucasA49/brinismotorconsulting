import { ArrowRight } from 'lucide-react'
import { Container, ButtonLink } from './ui.jsx'

export default function CtaBand() {
  return (
    <section className="pb-20 sm:pb-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-brand/30 bg-gradient-to-br from-brand/25 via-surface-2 to-surface px-6 py-14 text-center sm:px-12">
          <h2 className="text-3xl font-bold italic tracking-tight sm:text-4xl">Un projet auto ou moto ?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-chrome">
            Parlons-en. Le premier échange est gratuit et sans engagement.
          </p>
          <ButtonLink to="/contact" className="mt-8">
            Prendre contact <ArrowRight className="size-4" aria-hidden="true" />
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}
