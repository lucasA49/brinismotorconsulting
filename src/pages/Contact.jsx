import { useId, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import Seo from '../components/Seo.jsx'
import { Container, SectionHeading, Button } from '../components/ui.jsx'
import { site } from '../config/site.js'

const initial = { name: '', email: '', phone: '', profile: '', vehicle: '', message: '', consent: false, website: '' }

function validate(v) {
  const e = {}
  if (!v.name.trim()) e.name = 'Veuillez indiquer votre nom.'
  if (!v.email.trim()) e.email = 'Veuillez indiquer votre adresse e-mail.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Adresse e-mail invalide (ex. : nom@domaine.fr).'
  if (v.phone && !/^[+\d][\d\s.-]{8,}$/.test(v.phone.trim())) e.phone = 'Numéro de téléphone invalide.'
  if (!v.profile) e.profile = 'Veuillez préciser votre projet.'
  if (v.message.trim().length < 10) e.message = 'Votre message doit contenir au moins 10 caractères.'
  if (!v.consent) e.consent = 'Votre accord est nécessaire pour traiter votre demande.'
  return e
}

const fieldOrder = ['name', 'email', 'phone', 'profile', 'vehicle', 'message', 'consent']

function ErrorMsg({ id, message }) {
  if (!message) return null
  return (
    <p id={id} className="mt-2 flex items-center gap-1.5 text-sm text-red-300">
      <AlertCircle className="size-4 shrink-0" aria-hidden="true" /> {message}
    </p>
  )
}

export default function Contact() {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const formRef = useRef(null)
  const uid = useId()
  const id = (name) => `${uid}-${name}`

  const update = (e) => {
    const { name, value, type, checked } = e.target
    setValues((v) => ({ ...v, [name]: type === 'checkbox' ? checked : value }))
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (values.website) return // piège anti-spam

    const found = validate(values)
    setErrors(found)
    const first = fieldOrder.find((f) => found[f])
    if (first) {
      formRef.current?.querySelector(`[name="${first}"]`)?.focus()
      return
    }

    const profileLabel = { achat: 'Achat', vente: 'Vente', conseil: 'Conseil' }[values.profile]
    const vehicleLabel = { auto: 'Automobile', moto: 'Moto' }[values.vehicle] || 'Non précisé'

    if (!site.formEndpoint) {
      // Sans service de formulaire : ouverture de la messagerie du visiteur
      const body = `Nom : ${values.name}\nE-mail : ${values.email}\nTéléphone : ${values.phone || '—'}\nProjet : ${profileLabel}\nVéhicule : ${vehicleLabel}\n\n${values.message}`
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Demande de contact — ${profileLabel}`)}&body=${encodeURIComponent(body)}`
      setStatus('success')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(site.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          nom: values.name,
          email: values.email,
          telephone: values.phone,
          projet: profileLabel,
          vehicule: vehicleLabel,
          message: values.message,
        }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setValues(initial)
    } catch {
      setStatus('error')
    }
  }

  const input =
    'mt-2 block w-full rounded-lg border bg-ink px-4 py-3 text-white placeholder:text-muted/70 transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40'
  const border = (n) => (errors[n] ? 'border-red-400' : 'border-line')

  const aria = (n, extra) => ({
    'aria-invalid': errors[n] ? true : undefined,
    'aria-describedby': [errors[n] && id(`${n}-err`), extra].filter(Boolean).join(' ') || undefined,
  })

  return (
    <>
      <Seo
        title="Contact"
        description="Contactez Brinis Motor Consulting pour votre projet d'achat ou de vente de voiture ou de moto. Premier échange gratuit et sans engagement."
      />

      <section className="relative overflow-hidden border-b border-line">
        <div aria-hidden="true" className="pointer-events-none absolute -top-32 left-0 h-96 w-[40rem] rounded-full bg-brand/15 blur-3xl" />
        <Container className="relative py-16 sm:py-24">
          <SectionHeading
            as="h1"
            eyebrow="Contact"
            title="Parlons de votre projet"
            intro="Remplissez le formulaire ou appelez-nous directement. Nous vous répondons rapidement, sans engagement."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_22rem]">
          {/* ── Formulaire ── */}
          <div className="rounded-2xl border border-line bg-surface p-6 sm:p-10">
            {status === 'success' ? (
              <div role="status" className="py-10 text-center">
                <CheckCircle2 className="mx-auto size-14 text-brand-light" aria-hidden="true" />
                <h2 className="mt-5 text-2xl font-bold italic">Merci pour votre message !</h2>
                <p className="mx-auto mt-3 max-w-md text-muted">
                  {site.formEndpoint
                    ? 'Votre demande a bien été envoyée. Nous revenons vers vous très vite.'
                    : 'Votre messagerie s’est ouverte avec votre demande pré-remplie : il ne vous reste plus qu’à l’envoyer.'}
                </p>
                <Button variant="secondary" className="mt-8" onClick={() => setStatus('idle')}>
                  Envoyer un autre message
                </Button>
              </div>
            ) : (
              <form ref={formRef} noValidate onSubmit={onSubmit} aria-labelledby={id('form-title')}>
                <h2 id={id('form-title')} className="text-2xl font-bold italic">Formulaire de contact</h2>
                <p className="mt-2 text-sm text-muted">
                  Les champs marqués d’un <span className="text-brand-light" aria-hidden="true">*</span>
                  <span className="sr-only">astérisque</span> sont obligatoires.
                </p>

                {Object.keys(errors).some((k) => errors[k]) && (
                  <p role="alert" className="mt-6 rounded-lg border border-red-400/40 bg-red-500/10 p-4 text-sm text-red-200">
                    Le formulaire contient des erreurs. Merci de les corriger.
                  </p>
                )}

                {/* Anti-spam : champ invisible pour les humains */}
                <div className="hidden" aria-hidden="true">
                  <label>Ne pas remplir<input type="text" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={update} /></label>
                </div>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor={id('name')} className="text-sm font-medium text-white">
                      Nom et prénom <span className="text-brand-light" aria-hidden="true">*</span>
                    </label>
                    <input id={id('name')} name="name" type="text" autoComplete="name" required value={values.name} onChange={update} className={`${input} ${border('name')}`} {...aria('name')} />
                    <ErrorMsg id={id('name-err')} message={errors.name} />
                  </div>

                  <div>
                    <label htmlFor={id('email')} className="text-sm font-medium text-white">
                      E-mail <span className="text-brand-light" aria-hidden="true">*</span>
                    </label>
                    <input id={id('email')} name="email" type="email" autoComplete="email" inputMode="email" required placeholder="nom@domaine.fr" value={values.email} onChange={update} className={`${input} ${border('email')}`} {...aria('email')} />
                    <ErrorMsg id={id('email-err')} message={errors.email} />
                  </div>

                  <div>
                    <label htmlFor={id('phone')} className="text-sm font-medium text-white">
                      Téléphone <span className="font-normal text-muted">(facultatif)</span>
                    </label>
                    <input id={id('phone')} name="phone" type="tel" autoComplete="tel" inputMode="tel" value={values.phone} onChange={update} className={`${input} ${border('phone')}`} {...aria('phone')} />
                    <ErrorMsg id={id('phone-err')} message={errors.phone} />
                  </div>

                  <div>
                    <label htmlFor={id('vehicle')} className="text-sm font-medium text-white">
                      Type de véhicule
                    </label>
                    <select id={id('vehicle')} name="vehicle" value={values.vehicle} onChange={update} className={`${input} ${border('vehicle')}`}>
                      <option value="">Non précisé</option>
                      <option value="auto">Automobile</option>
                      <option value="moto">Moto</option>
                    </select>
                  </div>
                </div>

                <fieldset className="mt-6" aria-describedby={errors.profile ? id('profile-err') : undefined}>
                  <legend className="text-sm font-medium text-white">
                    Votre projet <span className="text-brand-light" aria-hidden="true">*</span>
                  </legend>
                  <div className="mt-3 grid gap-3 sm:grid-cols-3">
                    {[
                      ['achat', 'Je souhaite acheter'],
                      ['vente', 'Je souhaite vendre'],
                      ['conseil', 'J’ai besoin d’un conseil'],
                    ].map(([val, label]) => (
                      <label
                        key={val}
                        className={`flex cursor-pointer items-center gap-3 rounded-lg border bg-ink px-4 py-3 text-sm transition-colors has-[:checked]:border-brand has-[:checked]:bg-brand/10 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand-light ${border('profile')}`}
                      >
                        <input type="radio" name="profile" value={val} checked={values.profile === val} onChange={update} className="size-4 accent-brand" />
                        <span className="text-chrome">{label}</span>
                      </label>
                    ))}
                  </div>
                  <ErrorMsg id={id('profile-err')} message={errors.profile} />
                </fieldset>

                <div className="mt-6">
                  <label htmlFor={id('message')} className="text-sm font-medium text-white">
                    Votre message <span className="text-brand-light" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id={id('message')}
                    name="message"
                    rows={6}
                    required
                    placeholder="Décrivez votre projet : modèle recherché, budget, véhicule à vendre…"
                    value={values.message}
                    onChange={update}
                    className={`${input} ${border('message')} resize-y`}
                    {...aria('message')}
                  />
                  <ErrorMsg id={id('message-err')} message={errors.message} />
                </div>

                <div className="mt-6">
                  <label className="flex cursor-pointer gap-3 text-sm leading-relaxed text-muted">
                    <input type="checkbox" name="consent" checked={values.consent} onChange={update} className="mt-1 size-4 shrink-0 accent-brand" {...aria('consent')} />
                    <span>
                      J’accepte que mes données soient utilisées pour traiter ma demande, conformément à la{' '}
                      <Link to="/mentions-legales#donnees" className="text-brand-light underline underline-offset-2 hover:text-white">
                        politique de confidentialité
                      </Link>
                      . <span className="text-brand-light" aria-hidden="true">*</span>
                    </span>
                  </label>
                  <ErrorMsg id={id('consent-err')} message={errors.consent} />
                </div>

                {status === 'error' && (
                  <p role="alert" className="mt-6 rounded-lg border border-red-400/40 bg-red-500/10 p-4 text-sm text-red-200">
                    L’envoi a échoué. Réessayez ou contactez-nous directement au {site.phone}.
                  </p>
                )}

                <Button type="submit" className="mt-8 w-full sm:w-auto" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Envoi en cours…' : (<>Envoyer ma demande <Send className="size-4" aria-hidden="true" /></>)}
                </Button>
              </form>
            )}
          </div>

          {/* ── Coordonnées ── */}
          <aside aria-labelledby={id('coords')} className="space-y-6">
            <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
              <h2 id={id('coords')} className="text-xl font-bold italic">Nos coordonnées</h2>
              <ul className="mt-6 space-y-5">
                <li>
                  <a href={`tel:${site.phoneHref}`} className="group flex gap-4">
                    <Phone className="mt-0.5 size-5 shrink-0 text-brand-light" aria-hidden="true" />
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-muted">Téléphone</span>
                      <span className="text-white group-hover:text-brand-light">{site.phone}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.email}`} className="group flex gap-4">
                    <Mail className="mt-0.5 size-5 shrink-0 text-brand-light" aria-hidden="true" />
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-wider text-muted">E-mail</span>
                      <span className="break-all text-white group-hover:text-brand-light">{site.email}</span>
                    </span>
                  </a>
                </li>
                <li className="flex gap-4">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-brand-light" aria-hidden="true" />
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-muted">Zone d’intervention</span>
                    <span className="text-white">{site.area}</span>
                  </span>
                </li>
                <li className="flex gap-4">
                  <Clock className="mt-0.5 size-5 shrink-0 text-brand-light" aria-hidden="true" />
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-muted">Disponibilités</span>
                    <span className="text-white">{site.hours}</span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-brand/30 bg-gradient-to-br from-brand/20 to-surface p-6 sm:p-8">
              <h2 className="text-lg font-bold italic">Premier échange offert</h2>
              <p className="mt-2 text-sm leading-relaxed text-chrome">
                Présentez-nous votre projet : nous vous disons honnêtement comment nous pouvons vous aider.
              </p>
            </div>
          </aside>
        </Container>
      </section>
    </>
  )
}
