/**
 * Couche d'accès au contenu.
 * Aujourd'hui : données locales (src/data/content.ts).
 * Demain : requêtes GROQ vers Sanity — seules ces fonctions changent, les composants restent identiques.
 *
 * Exemple futur :
 *   import { sanityClient } from './sanity';
 *   export const getPraticiens = () =>
 *     sanityClient.fetch(`*[_type == "praticien" && actif] | order(ordre asc){ name, role, rdv, "photo": photo.asset->url }`);
 */
import * as d from '../data/content';
import type { Entry } from '../data/content';

export type EntryType = 'specialites' | 'traitements' | 'technologies';

export const getSettings = async () => d.settings;
export const getStats = async () => d.stats;
export const getPraticiens = async () => d.praticiens;
export const getEquipe = async () => d.equipe;
export const getSpecialites = async () => d.specialites;
export const getTraitements = async () => d.traitements;
export const getTechnologies = async () => d.technologies;
export const getConseils = async () => d.conseils;
export const getValeurs = async () => d.valeurs;

export async function getEntries(type: EntryType): Promise<Entry[]> {
  if (type === 'specialites') return d.specialites;
  if (type === 'traitements') return d.traitements;
  return d.technologies;
}
