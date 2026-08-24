import { ExpertiseItem } from '../types';

export const expertisesData: ExpertiseItem[] = [
  {
    id: 'entreprises-en-difficulte',
    number: '01',
    title: 'Entreprises en difficulté',
    description: "Accompagnement des entreprises, dirigeants, associés et créanciers dans l’anticipation et le traitement des difficultés financières.",
    subdomains: [
      'Mandat ad hoc',
      'Conciliation',
      'Sauvegarde',
      'Redressement judiciaire',
      'Liquidation judiciaire',
      'Plans de continuation',
      'Négociation avec les créanciers'
    ]
  },
  {
    id: 'restructuring-dette',
    number: '02',
    title: 'Restructuring & dette',
    description: "Définition et mise en œuvre de stratégies permettant de préserver l’activité, restructurer les engagements financiers et sécuriser les intérêts des différentes parties.",
    subdomains: [
      'Restructuration de dette',
      'Négociation avec les créanciers',
      'Protocoles de conciliation',
      'Analyse de situations financières',
      'Plans de restructuration',
      'Stratégies de sortie de crise'
    ]
  },
  {
    id: 'contentieux-des-affaires',
    number: '03',
    title: 'Contentieux des affaires',
    description: "Conseil et représentation des entreprises et associés dans les litiges commerciaux et civils, de la phase précontentieuse jusqu’à la résolution du différend.",
    subdomains: [
      'Contentieux commercial',
      'Contentieux civil',
      'Contentieux entre associés',
      'Procédures d’exécution',
      'Précontentieux',
      'Assignations',
      'Conclusions',
      'Plaidoiries'
    ]
  }
];
