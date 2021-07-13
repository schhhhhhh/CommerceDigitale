import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../shared/produits';
import { CategoryService } from '../services/category.service';
import { Category } from '../model/category';
import { SousCategorie } from '../model/sous-categorie';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, OnDestroy {

  //@Input() produits: Produit[];
  produits!: Produit[];
  produitSub: Subscription;
  
  categories: Category[];
  sous_categorie: SousCategorie;
  categorySub: Subscription;

  constructor(private route: ActivatedRoute,
              private produitService: ProduitService,
              private categoryService : CategoryService,
              private cartService: CartService) { }

  ngOnInit(): void {
    //const id: Observable<string> = this.route.params.pipe(map(p => p.id));
    this.route.params.subscribe(
      (request)=>{// "request" est la route sélectionnée
        console.log(request.id);
        this.produitSub = this.produitService.listeProduit().subscribe(
          (data: Produit[])=>{
            const prod = data.filter(produit =>{
              return produit.categorie_id == +request.id; // L'opérateur + va forcer "request.id" à être de type number
            });
            console.log(prod);
            this.produits = prod;
          }
        );
      }
    );

    // AFFICHAGE DES CATEGORIES
    this.categorySub = this.categoryService.categorySubject.subscribe(
      (data: Category[])=>{
        this.categories = data;
      }
    );
    this.categoryService.emitCategories();
  }

  ngOnDestroy(): void{
    this.produitSub.unsubscribe();
  }

  // AJOUT AU PANIER
  addTocart(produit: Produit): void{
    this.cartService.addProductToCard(produit);
    //let onclick = 'window.location.reload(false)';
    //console.log(this.cart);
  }

}
