import {SousCategorie} from './sous-categorie';

export interface Category {
  categorie_id: number;
  id: number;
  categorie: string;
  image: string;
  sous_categories: SousCategorie [];
}