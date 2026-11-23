import Seo from '../components/Seo.jsx'
import { Container, ButtonLink } from '../components/ui.jsx'

export default function NotFound() {
  return (
    <>
      <Seo title="Page introuvable" noindex />
      <Container className="py-28 text-center">
        <p className="font-display text-7xl font-extrabold italic text-brand/40">404</p>
        <h1 className="mt-4 text-3xl font-bold italic">Cette page n’existe pas</h1>
        <p className="mt-3 text-muted">Elle a peut-être été déplacée ou supprimée.</p>
        <ButtonLink to="/" className="mt-8">Retour à l’accueil</ButtonLink>
      </Container>
    </>
  )
}
