import {
  Handshake,
  ShieldCheck,
  Search,
  Tag,
  Car,
  Bike,
} from 'lucide-react'

export const services = [
  {
    id: 'mise-en-relation',
    icon: Handshake,
    title: 'Mise en relation',
    summary:
      'Nous connectons acheteurs et vendeurs sérieux pour des transactions rapides et sereines.',
    points: [
      'Analyse de votre besoin ou de votre véhicule',
      'Sélection de contacts qualifiés',
      'Organisation des rendez-vous et essais',
    ],
  },
  {
    id: 'conseils',
    icon: ShieldCheck,
    title: 'Conseils personnalisés',
    summary:
      'Un accompagnement sur mesure pour faire les bons choix, selon votre budget et votre usage.',
    points: [
      'Définition du budget et du modèle adapté',
      'Avis objectif sur les annonces',
      'Réponses à toutes vos questions, sans jargon',
    ],
  },
  {
    id: 'achat',
    icon: Search,
    title: "Accompagnement à l'achat",
    summary:
      'Achetez en confiance : nous vérifions le véhicule et vous aidons à négocier au juste prix.',
    points: [
      "Vérification de l'historique et des documents",
      'Contrôle de l’état général du véhicule',
      'Aide à la négociation et aux démarches',
    ],
  },
  {
    id: 'vente',
    icon: Tag,
    title: 'Accompagnement à la vente',
    summary:
      'Vendez au bon prix, sans perte de temps ni mauvaises surprises.',
    points: [
      'Estimation réaliste de votre véhicule',
      'Conseils pour une annonce qui se démarque',
      'Filtrage des acheteurs et sécurisation du paiement',
    ],
  },
]

export const vehicles = [
  {
    id: 'automobile',
    icon: Car,
    title: 'Automobile',
    text: 'Citadines, berlines, SUV, utilitaires : neufs ou d’occasion, nous vous accompagnons sur tous les segments.',
  },
  {
    id: 'moto',
    icon: Bike,
    title: 'Moto',
    text: 'Roadsters, sportives, trails ou scooters : un regard de passionné pour acheter ou vendre votre deux-roues.',
  },
]

export const steps = [
  {
    title: 'Premier échange',
    text: 'Vous nous présentez votre projet d’achat ou de vente. Gratuit et sans engagement.',
  },
  {
    title: 'Analyse & conseils',
    text: 'Nous étudions votre besoin et vous proposons une stratégie claire et adaptée.',
  },
  {
    title: 'Mise en relation',
    text: 'Nous vous connectons avec les bons interlocuteurs et vous accompagnons sur le terrain.',
  },
  {
    title: 'Transaction sécurisée',
    text: 'Négociation, documents, paiement : nous veillons à ce que tout se passe bien.',
  },
]
