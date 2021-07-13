import { Produit } from '../shared/produits';
export interface Cart {
  number: number; // Le nombre de fois ou il y aura un produit dans le panier
  produit: Produit;
}
