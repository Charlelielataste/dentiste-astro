# SuperDent — maquette Astro + Tailwind

Maquette de démonstration d'un site de cabinet dentaire (marque fictive « SuperDent », Marseille).
Toutes les coordonnées, noms de praticiens et membres de l'équipe sont **fictifs** (n° de téléphone factice : 04 00 00 00 00).
Habillage « verre / 3D bleu » inspiré de Celestia Smiles.

## Lancer

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # site statique dans dist/
```

## Stack

- Astro (rendu statique) + Tailwind CSS v4 (tokens dans `src/styles/global.css`, bloc `@theme`)
- GSAP + ScrollTrigger + Lenis pour les animations (`src/scripts/motion.ts`)
- Animations désactivées automatiquement si `prefers-reduced-motion`

## Structure

```
src/
  data/content.ts      contenus provisoires (praticiens, soins, horaires…)
  lib/content.ts       couche d'accès au contenu  ← seul fichier à changer pour brancher Sanity
  components/          sections de l'accueil + Glass.astro (visuels 3D en SVG)
  pages/               index + /specialites/[slug], /traitements/[slug], /technologies/[slug]
  layouts/Base.astro   head, SEO, JSON-LD
```

## Brancher Sanity (plus tard)

Remplacer le contenu de `src/lib/content.ts` par des requêtes GROQ. Les composants n'ont pas à changer.
Schémas à créer : `reglages` (singleton), `praticien`, `membreEquipe`, `specialite`, `traitement`,
`technologie`, `conseil`, `chiffreCle`, `valeur`.

## À faire / à valider avec le client

- **Visuels 3D** : `Glass.astro` dessine des placeholders en SVG. À remplacer par de vrais rendus (WebP/AVIF, fond transparent).
- **Photos** praticiens, équipe et cabinet (emplacements « Photo à venir »).
- **Chiffres clés** (7 praticiens, 15 personnes…) fictifs : à remplacer par ceux du client.
- **Textes provisoires** des pages spécialités / traitements / technologies : à faire relire par le cabinet (déontologie : pas de promesse de résultat).
- **Conseils** : liens factices (`#conseils`), à remplacer par de vraies pages.
- **RDV en ligne** : liens factices vers `/#contact`, à brancher sur l'outil du client.
- **Formulaire de contact** : non branché (démo) ; texte RGPD à rédiger.
- **Mentions légales** : page à créer.
- `<meta name="robots" content="noindex">` est présent dans `Base.astro` : à retirer à la mise en ligne.
