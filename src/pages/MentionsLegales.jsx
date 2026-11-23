import Seo from '../components/Seo.jsx'
import { Container, SectionHeading } from '../components/ui.jsx'
import { site } from '../config/site.js'

function Block({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-xl font-bold italic">{title}</h2>
      <div className="mt-3 space-y-3 leading-relaxed text-muted">{children}</div>
    </section>
  )
}

export default function MentionsLegales() {
  const { legal } = site
  return (
    <>
      <Seo title="Mentions légales" description={`Mentions légales et politique de confidentialité de ${site.name}.`} />
      <Container className="py-16 sm:py-24">
        <SectionHeading as="h1" eyebrow="Informations légales" title="Mentions légales & confidentialité" />

        <div className="mt-12 max-w-3xl space-y-10">
          <Block title="Éditeur du site">
            <p>
              {site.name} — {legal.owner}<br />
              {legal.status} — SIRET : {legal.siret}<br />
              {legal.address}<br />
              E-mail : <a href={`mailto:${site.email}`} className="text-brand-light underline underline-offset-2">{site.email}</a> — Tél. : {site.phone}
            </p>
            <p>Directeur de la publication : {legal.publicationDirector}</p>
          </Block>

          <Block title="Hébergement">
            <p>{legal.host}</p>
          </Block>

          <Block title="Propriété intellectuelle">
            <p>
              L’ensemble des contenus de ce site (textes, logo, visuels) est la propriété de {site.name}.
              Toute reproduction sans autorisation préalable est interdite.
            </p>
          </Block>

          <Block id="donnees" title="Protection des données personnelles (RGPD)">
            <p>
              Les informations transmises via le formulaire de contact (nom, e-mail, téléphone, message) sont
              utilisées uniquement pour répondre à votre demande. Elles ne sont ni vendues ni cédées à des tiers.
            </p>
            <p>
              Base légale : votre consentement. Durée de conservation : 3 ans maximum à compter du dernier contact.
            </p>
            <p>
              Conformément au RGPD, vous disposez d’un droit d’accès, de rectification, d’effacement, de
              limitation et d’opposition. Pour l’exercer, écrivez à{' '}
              <a href={`mailto:${site.email}`} className="text-brand-light underline underline-offset-2">{site.email}</a>.
              Vous pouvez également introduire une réclamation auprès de la CNIL (cnil.fr).
            </p>
          </Block>

          <Block title="Cookies">
            <p>
              Ce site n’utilise aucun cookie publicitaire ni outil de mesure d’audience. Les polices sont
              hébergées localement : aucune donnée n’est transmise à des services tiers lors de votre visite.
            </p>
          </Block>
        </div>
      </Container>
    </>
  )
}
