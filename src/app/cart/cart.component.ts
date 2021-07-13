import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../model/cart';
import { Produit } from '../shared/produits';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart: Cart[] = [];
  cartData;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.cart;
    this.cartData = this.cartService.cartData;
  }

  addProduit(produit: Produit): void{
    this.cartService.addProductToCard(produit);
  }

  deleteProduit(produit: Produit): void{
    this.cartService.deleteFromCart(produit);
  }

}
