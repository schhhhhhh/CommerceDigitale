import { Component, OnInit } from '@angular/core';
import { Produit } from '../shared/produits';
import { CartService } from '../services/cart.service';
import { Cart } from '../model/cart';

@Component({
  selector: 'app-menu-area',
  templateUrl: './menu-area.component.html',
  styleUrls: ['./menu-area.component.scss']
})
export class MenuAreaComponent implements OnInit {
  cart: Cart[] = [];
  cartData;

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.cart;
    this.cartData = this.cartService.cartData;
  }
  addTocart(produit: Produit): void{
    this.cartService.addProductToCard(produit);
  }

  deleteFromcart(produit: Produit): void{
    this.cartService.deleteFromCart(produit);
  }

}
