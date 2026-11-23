// ─────────────────────────────────────────────────────────────
// Informations de l'entreprise — À COMPLÉTER
// Toutes les coordonnées affichées sur le site viennent d'ici.
// ─────────────────────────────────────────────────────────────
export const site = {
  name: 'Brinis Motor Consulting',
  tagline: 'Acheteur • Vendeur — Connectés',
  description:
    "Brinis Motor Consulting met en relation acheteurs et vendeurs d'automobiles et de motos, avec des conseils personnalisés à chaque étape de votre projet.",
  url: 'https://www.exemple.fr', // TODO : nom de domaine final

  // TODO : remplacer par les vraies coordonnées
  email: 'contact@exemple.fr',
  phone: '06 00 00 00 00',
  phoneHref: '+33600000000',
  area: 'France', // ex. « Lyon et sa région »
  hours: 'Du lundi au samedi, 9h – 19h',

  // TODO : informations légales (obligatoires — loi LCEN)
  legal: {
    owner: 'Nom Prénom / Raison sociale',
    status: 'Entrepreneur individuel',
    siret: '000 000 000 00000',
    address: 'Adresse du siège',
    publicationDirector: 'Nom Prénom',
    host: 'Hébergeur (ex. Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA)',
  },

  // Facultatif : URL d'un service de formulaire (ex. Formspree).
  // Si vide, le formulaire ouvre la messagerie du visiteur.
  formEndpoint: import.meta.env.VITE_FORM_ENDPOINT || '',
}
