/**
 * Contenu provisoire de la maquette.
 * Ces données seront remplacées par Sanity : voir src/lib/content.ts (seul fichier à modifier).
 * Les textes marqués "provisoire" sont à faire valider / réécrire par le cabinet.
 */

export type GlassKind = 'tooth' | 'incisor' | 'implant' | 'gum' | 'sparkle' | 'aligner' | 'kid';

export interface Entry {
  slug: string;
  title: string;
  kind: GlassKind;
  short: string;
  intro: string;
  points: string[];
  faq?: { q: string; a: string }[];
}

export const settings = {
  name: 'SuperDent',
  tagline: 'Cabinet dentaire à Marseille',
  phone: '04 00 00 00 00',
  phoneHref: 'tel:+33400000000',
  rdvUrl: '/#contact',
  address: { street: '48 boulevard Baille', zip: '13005', city: 'Marseille' },
  hours: [
    { days: 'Lundi – vendredi', time: '9h30 – 19h00' },
    { days: 'Samedi', time: '9h30 – 13h00' },
  ],
  transport: [
    'Métro 1 — station Baille',
    'Bus 54 — arrêt Baille Lodi',
    'Tram T3 — arrêt Baille',
  ],
  access: ['Cabinet au rez-de-chaussée', 'Accès handicapé', 'Parking gratuit'],
  /** Bandeau d'information éditable (ex. fermeture exceptionnelle). null = masqué. */
  banner: null as string | null,
  gardeUrl: 'https://ordre-chirurgiens-dentistes-13.com/gardes-dentistes/',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=48+boulevard+Baille+13005+Marseille',
};

/** Chiffres clés — dérivés de l'effectif actuel (7 praticiens + 8 assistants/secrétariat). À valider. */
export const stats = [
  { value: 7, label: 'praticiens' },
  { value: 6, label: 'spécialités' },
  { value: 15, label: 'personnes à votre service' },
  { value: 6, label: "jours d'ouverture par semaine" },
];

export const praticiens = [
  { name: 'Dr Antoine Morel', role: 'Implantologie · Aligneurs', rdv: '/#contact' },
  { name: 'Dr Camille Rouvier', role: 'Chirurgien-dentiste · Orthodontie', rdv: '/#contact' },
  { name: 'Dr Nicolas Barthe', role: 'Chirurgien-dentiste', rdv: '/#contact' },
  { name: 'Dr Léa Fontaine', role: 'Chirurgien-dentiste', rdv: '/#contact' },
  { name: 'Dr Hugo Castel', role: 'Chirurgien-dentiste', rdv: '/#contact' },
  { name: 'Dr Inès Delorme', role: 'Chirurgien-dentiste', rdv: '/#contact' },
  { name: 'Dr Maxime Arnaud', role: 'Chirurgien-dentiste', rdv: '/#contact' },
];

export const equipe = [
  { name: 'Claire', role: 'Coordinatrice' },
  { name: 'Manon', role: 'Secrétaire' },
  { name: 'Yasmine', role: 'Assistante dentaire qualifiée' },
  { name: 'Laura', role: 'Assistante dentaire qualifiée' },
  { name: 'Chloé', role: 'Assistante dentaire qualifiée' },
  { name: 'Sarah', role: 'Assistante dentaire qualifiée' },
  { name: 'Nadia', role: 'Assistante dentaire' },
  { name: 'Lucie', role: 'Assistante dentaire en formation' },
];

export const specialites: Entry[] = [
  {
    slug: 'omnipratique',
    title: 'Omnipratique',
    kind: 'tooth',
    short: 'Soins courants, prévention et suivi global de votre santé bucco-dentaire.',
    intro:
      "L'omnipratique couvre l'ensemble des soins du quotidien. C'est le point de départ de votre suivi : bilan, prévention, soins, et orientation vers un spécialiste si nécessaire.",
    points: ['Bilan et contrôles réguliers', 'Soins conservateurs et détartrage', 'Suivi personnalisé de votre dentition'],
    faq: [
      {
        q: 'À quelle fréquence consulter ?',
        a: 'En général une fois par an, parfois plus souvent selon votre situation. Votre praticien vous indique le rythme adapté.',
      },
    ],
  },
  {
    slug: 'implantologie',
    title: 'Implantologie',
    kind: 'implant',
    short: 'Remplacer une ou plusieurs dents avec un bilan complet et une planification précise.',
    intro:
      "L'implantologie permet de remplacer des dents absentes grâce à des racines artificielles posées dans l'os. Chaque projet démarre par un bilan complet et une planification sur mesure. Les implants sont fabriqués en France et leur traçabilité est fournie au patient.",
    points: ['Bilan et imagerie 3D', 'Planification personnalisée', 'Traçabilité des implants fournie au patient'],
    faq: [
      {
        q: 'La pose est-elle douloureuse ?',
        a: "Elle se fait sous anesthésie locale. Votre praticien vous explique le déroulé et les suites à prévoir lors de la consultation.",
      },
      {
        q: "Et si l'os est insuffisant ?",
        a: "Selon le volume osseux, une préparation (greffe) peut être nécessaire. C'est évalué lors du bilan.",
      },
    ],
  },
  {
    slug: 'parodontologie',
    title: 'Parodontologie',
    kind: 'gum',
    short: 'Gencives et tissus de soutien : saignements, déchaussement, suivi régulier.',
    intro:
      "La parodontologie s'intéresse aux gencives et à l'os qui soutiennent vos dents. Une consultation est recommandée en cas de saignements, de douleurs ou de déchaussement.",
    points: ['Diagnostic des maladies parodontales', 'Soins et suivi adaptés', "Conseils d'hygiène personnalisés"],
    faq: [
      {
        q: 'Mes gencives saignent, est-ce grave ?',
        a: "Un saignement répété mérite toujours un avis. Un examen permet de faire le point et de proposer une prise en charge.",
      },
    ],
  },
  {
    slug: 'esthetique',
    title: 'Esthétique',
    kind: 'sparkle',
    short: 'Harmoniser l\'apparence de votre sourire, avec discrétion.',
    intro:
      "L'esthétique dentaire vise un sourire naturel et harmonieux : facettes, blanchiment, restaurations discrètes. Chaque projet est défini avec vous, après examen.",
    points: ['Facettes et restaurations discrètes', 'Blanchiment dentaire', 'Projet défini avec vous'],
    faq: [
      {
        q: 'Les résultats sont-ils garantis ?',
        a: "Chaque situation est différente : votre praticien vous présente ce qui est réaliste lors de la consultation.",
      },
    ],
  },
  {
    slug: 'orthodontie',
    title: 'Orthodontie',
    kind: 'aligner',
    short: 'Aligner les dents, pour les enfants comme pour les adultes.',
    intro:
      "L'orthodontie consiste à déplacer les dents pour retrouver un alignement harmonieux et améliorer les fonctions orales. Le traitement varie selon l'âge du patient.",
    points: ['Bilan orthodontique', "Traitements adaptés à l'âge", 'Suivi régulier'],
    faq: [
      {
        q: "Y a-t-il un âge pour commencer ?",
        a: "Le traitement varie selon l'âge. Un premier avis permet de déterminer le bon moment.",
      },
    ],
  },
  {
    slug: 'soins-dentaires-enfants',
    title: 'Pédodontie',
    kind: 'kid',
    short: 'Des soins adaptés aux enfants, dans un cadre rassurant.',
    intro:
      "La pédodontie accompagne les plus jeunes avec une approche douce et pédagogique, pour que les soins se passent dans de bonnes conditions et que la visite chez le dentiste reste un bon souvenir.",
    points: ['Approche douce et pédagogique', 'Prévention dès le plus jeune âge', 'Cadre rassurant'],
    faq: [
      {
        q: 'À quel âge la première visite ?',
        a: "Votre praticien vous conseillera selon l'âge et la situation de votre enfant.",
      },
    ],
  },
];

export const traitements: Entry[] = [
  {
    slug: 'full-arch-all-on-4-6-8',
    title: 'Full Arch — All-on-4 / 6 / 8',
    kind: 'implant',
    short: "Restaurer une arcade complète sur 4, 6 ou 8 implants.",
    intro:
      "Le Full Arch consiste à restaurer une arcade dentaire complète en s'appuyant sur 4, 6 ou 8 implants. La solution la plus adaptée est déterminée lors d'un bilan complet, avec imagerie 3D.",
    points: ['Bilan complet et imagerie 3D', 'Nombre d\'implants défini selon votre situation', 'Prothèses élaborées en laboratoires locaux'],
    faq: [
      {
        q: 'Combien de temps dure le traitement ?',
        a: 'La durée dépend de chaque situation. Elle vous est présentée lors de la consultation, avec le plan de traitement.',
      },
    ],
  },
  {
    slug: 'soins-des-gencives',
    title: 'Soins des gencives',
    kind: 'gum',
    short: 'Saignements, douleurs, déchaussement : consulter un spécialiste.',
    intro:
      "Il faut consulter un spécialiste en cas de saignement des gencives, de douleurs ou de déchaussement dentaire, appelés maladies parodontales.",
    points: ['Examen et diagnostic', 'Soins adaptés', 'Suivi dans le temps'],
  },
  {
    slug: 'orthodontie',
    title: 'Orthodontie',
    kind: 'aligner',
    short: 'Retrouver un alignement harmonieux, à tout âge.',
    intro:
      "L'orthodontie déplace les dents pour retrouver un alignement harmonieux et améliorer les fonctions orales. Elle s'adresse aux enfants comme aux adultes.",
    points: ['Bilan orthodontique', 'Aligneurs invisibles selon les cas', 'Suivi régulier'],
  },
  {
    slug: 'les-facette-dentaires',
    title: 'Facettes dentaires',
    kind: 'incisor',
    short: 'Une fine pellicule de céramique pour corriger des imperfections esthétiques.',
    intro:
      "Une facette dentaire est une pellicule de céramique très fine posée sur le devant de la dent. Elle permet de corriger de nombreuses imperfections esthétiques.",
    points: ['Examen et projet défini avec vous', 'Céramique', 'Résultat naturel recherché'],
  },
  {
    slug: 'le-blanchiment-dentaire',
    title: 'Blanchiment dentaire',
    kind: 'sparkle',
    short: 'Éclaircir la teinte des dents.',
    intro: "Le blanchiment dentaire permet d'éclaircir la teinte des dents. Un examen préalable permet de s'assurer qu'il est adapté à votre situation.",
    points: ['Examen préalable', 'Protocole encadré par votre praticien', 'Conseils pour entretenir le résultat'],
  },
];

export const technologies: Entry[] = [
  {
    slug: 'radio-panoramique-3d',
    title: 'Radio panoramique 3D',
    kind: 'tooth',
    short: 'Une imagerie précise pour poser un diagnostic et planifier les soins.',
    intro: "La radio panoramique 3D offre une vision détaillée de la mâchoire et des dents. Elle aide au diagnostic et à la planification, notamment en implantologie.",
    points: ['Vue d\'ensemble en un seul examen', 'Planification précise des soins', 'Aide au diagnostic'],
  },
  {
    slug: 'scanner-3d',
    title: 'Bloc opératoire',
    kind: 'implant',
    short: 'Un espace dédié aux actes chirurgicaux.',
    intro: "Le cabinet dispose d'un bloc opératoire pour réaliser les actes chirurgicaux dans de bonnes conditions d'hygiène et de confort.",
    points: ['Conditions chirurgicales adaptées', 'Hygiène rigoureuse', 'Confort du patient'],
  },
  {
    slug: 'empreinte-optique',
    title: 'Empreinte optique',
    kind: 'incisor',
    short: 'Une empreinte numérique, sans pâte.',
    intro: "L'empreinte optique remplace l'empreinte classique par une prise de mesure numérique, plus confortable pour le patient.",
    points: ['Plus de confort', 'Précision numérique', 'Transmission rapide au laboratoire'],
  },
  {
    slug: 'meopa',
    title: 'MEOPA',
    kind: 'kid',
    short: 'Pour aider à se détendre pendant certains soins.',
    intro: "Le MEOPA est un mélange gazeux qui aide les patients à se détendre pendant certains soins. Votre praticien vous indique s'il est adapté.",
    points: ['Aide à la détente', 'Utilisation encadrée', 'Adapté selon les situations'],
  },
  {
    slug: 'sterilisation',
    title: 'Stérilisation',
    kind: 'sparkle',
    short: 'Un protocole rigoureux pour chaque instrument.',
    intro: "La stérilisation des instruments suit un protocole rigoureux pour garantir la sécurité de chaque patient.",
    points: ['Protocole rigoureux', 'Matériel dédié', 'Sécurité des patients'],
  },
];

export const conseils = [
  {
    title: 'Avant une intervention chirurgicale dentaire',
    excerpt: "La bonne préparation d'une intervention permet d'en obtenir les meilleurs résultats avec un minimum de désagréments.",
    href: '#conseils',
  },
  {
    title: 'Après une intervention chirurgicale dentaire',
    excerpt: 'Les interventions sont souvent suivies d\'une gêne passagère. Des règles simples permettent de gérer au mieux les suites.',
    href: '#conseils',
  },
  {
    title: 'Les dents de sagesse',
    excerpt: 'Normalement au nombre de 4, elles apparaissent entre 18 et 25 ans. Il est possible d\'en avoir moins, ou pas du tout.',
    href: '#conseils',
  },
  {
    title: 'Les greffes osseuses pré-implantaires',
    excerpt: 'Les implants doivent être posés dans un volume osseux suffisant pour garantir un bon ancrage de la prothèse.',
    href: '#conseils',
  },
];

export const valeurs = [
  { title: 'Écoute', text: 'Votre histoire, vos attentes et vos questions passent en premier.' },
  { title: 'Compétence', text: 'Une équipe de praticiens formés, aux spécialités complémentaires.' },
  { title: 'Confiance', text: 'Des explications claires, des devis transparents, une traçabilité fournie.' },
  { title: 'Accompagnement', text: 'Un suivi complet et personnalisé, de la première visite au long cours.' },
];
