import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default function Layout() {
  const { pathname, hash } = useLocation()
  const mainRef = useRef(null)
  const firstRender = useRef(true)

  // Au changement de page : retour en haut + focus sur le contenu (lecteurs d'écran)
  // Ancre (#section) : défilement vers la section ciblée
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      if (!hash) return
    }
    if (hash) {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({ block: 'start' })
    } else {
      window.scrollTo(0, 0)
    }
    mainRef.current?.focus({ preventScroll: true })
  }, [pathname, hash])

  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-3 focus:text-white"
      >
        Aller au contenu
      </a>
      <Header />
      <main id="contenu" ref={mainRef} tabIndex={-1} className="flex-1 outline-none">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
