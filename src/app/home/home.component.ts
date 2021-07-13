import { Component, OnInit } from '@angular/core';

import { CategoryService } from '../services/category.service';
import { Category } from '../model/category';
import { Subscription } from 'rxjs';
import { SousCategorie } from '../model/sous-categorie';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories: Category[];
  sous_categorie: SousCategorie;
  categorySub: Subscription;

  constructor(private produitService: ProduitService,
    private categoryService : CategoryService ) { }

  ngOnInit(): void {
    this.categorySub = this.categoryService.categorySubject.subscribe(
      (data: Category[])=>{
        this.categories = data;
      }
    );
    this.categoryService.emitCategories();
  }

}
