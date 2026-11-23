import { useLocation } from 'react-router-dom'
import { site } from '../config/site.js'

/**
 * Balises SEO par page. React 19 place automatiquement
 * <title>, <meta> et <link> dans le <head>.
 */
export default function Seo({ title, description = site.description, noindex = false }) {
  const { pathname } = useLocation()
  const fullTitle = title ? `${title} | ${site.name}` : `${site.name} — Achat & vente auto / moto`
  const canonical = `${site.url}${pathname === '/' ? '' : pathname}`

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      {noindex && <meta name="robots" content="noindex" />}
    </>
  )
}
