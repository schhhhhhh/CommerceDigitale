import { Injectable } from '@angular/core';
//import { element } from 'protractor';
import { Cart } from '../model/cart';
import { Produit } from '../shared/produits';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Cart[]; // Définition du panier(cart) de type tableau
  cartData = {len: 0, cost: 0};

  constructor() { this.initCart();}

  // Méthode d'initialisation des données concernant le panier
  initCart():void{
    if(typeof(localStorage) !== "undefined"){// On vérifie d'abord si le navigateur du client supporte "localStorage"
      // Les données contenu dans la variable "cart" sont de type "chaine de caractère" donc on utilise  "JSON.parse" afin de recevoir un tableau
      // Récupération des données
      const cart = JSON.parse(localStorage.getItem('cart'));
      const cartData = JSON.parse(localStorage.getItem('cartData'));
      // Initialisation des données
      this.cart = cart ? cart: []; // On vérifie si "cart" exite , si "cart" existe "?" on le sauvegarde, sinon ":" si "cart" n'existe pas on met un tableau vide
      this.cartData = cartData ? cartData: {len: 0, cost: 0};
    }
    else{
      this.cart = [];
      this.cartData = {len: 0, cost: 0};
    }
  }

  // Méthode de mise à jour des données du panier
  updateDataCart(){
    let len = 0;
    let cost = 0;
    this.cart.forEach( element => {
      len += element.number;
      cost += element.produit.prix * element.number;
    });
    this.cartData.len = len;
    this.cartData.cost = cost;
    // stockage des données du panier sur le navigateur de l'uitilisateur
    if(typeof(localStorage) !== "undefined"){// On vérifie d'abord si le navigateur du client supporte "localStorage"
      // localstorage supporte des données de type "chaine de caractere" d'ou l'utilisation "JSON.stringify" pour convertir le tableau "cart" en chaine de caractere
      localStorage.setItem('cart', JSON.stringify(this.cart));
      localStorage.setItem('cartData', JSON.stringify(this.cartData));
    }

  }

  // Méthode d'ajout au panier
  addProductToCard(newProduit: Produit): void {
    const verifierProduitExiste = this.cart.find(element => element.produit == newProduit); // On vérifie si le produit à ajouter au panier existait dans le panier

    if(verifierProduitExiste){
      verifierProduitExiste.number++;
    }
    else{
      const newProduitToAdd = {
        number: 1,
        produit: newProduit
      };
      this.cart.push(newProduitToAdd); // insertion du newProduitToAdd dans le panier
    }
    this.updateDataCart(); // Mise à jour des données du panier
  }

  // Méthode de suppression d'un produit du panier
  deleteFromCart(produitToDelete: Produit): void{
    const indexProduit = this.cart.findIndex(element => element.produit == produitToDelete);

    if(indexProduit !== -1){
      // Si le produit à supprimer existe plus d'une fois dans le panier alors on décrémente ce nombre de fois
      if(this.cart[indexProduit].number > 1){
        this.cart[indexProduit].number--;
      }
      // Si le produit à supprimer existe une seule fois dans le panier alors on supprime le produit du panier
      else{
        this.cart.splice(indexProduit, 1); // Pour la méthode 'splice' il faut préciser le nombre de fois qu'on supprime un élément à un index du tableau
      }
    }
    this.updateDataCart();
  }

  removeElementOfCart(index: number): void{
    this.cart.splice(index, 1);
    this.updateDataCart();
  }

}
