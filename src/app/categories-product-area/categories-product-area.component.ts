import { Component, Input, OnInit } from '@angular/core';
import { Produit } from '../shared/produits';
import { ProduitService } from '../services/produit.service';
import { CartService } from '../services/cart.service';
import { Cart } from '../model/cart';
import { CategoryService } from '../services/category.service';
import { Category } from '../model/category';
import { Subscription } from 'rxjs';
import {Directive, HostListener} from '@angular/core';
import { SousCategorie } from '../model/sous-categorie';

@Component({
  selector: 'app-categories-product-area',
  templateUrl: './categories-product-area.component.html',
  styleUrls: ['./categories-product-area.component.scss']
})

export class CategoriesProductAreaComponent implements OnInit {
  @Input() produits!: Produit[];
  cart: Cart[] = [];
  cartData;
  categories: Category[];
  sous_categorie: SousCategorie;
  categorySub: Subscription;

  constructor(private produitService: ProduitService,
    private cartService : CartService,
    private categoryService : CategoryService ) { }

  ngOnInit(): void {
    this.produitService.listeProduit().subscribe(produitsReponseServeur => {
      console.log(produitsReponseServeur);
      //let Data = produitReponseServeur.data[0];
      //const {data} = produitsReponseServeur;
      this.produits = produitsReponseServeur;
    });

    this.cart = this.cartService.cart;
    this.cartData = this.cartService.cartData;

    this.categorySub = this.categoryService.categorySubject.subscribe(
      (data: Category[])=>{
        this.categories = data;
      }
    );
    this.categoryService.emitCategories();
  }

  addTocart(produit: Produit): void{
    this.cartService.addProductToCard(produit);
    //let onclick = 'window.location.reload(false)';
    console.log(this.cart);
  }

  deleteFromcart(produit: Produit): void{
    this.cartService.deleteFromCart(produit);
  }

}
