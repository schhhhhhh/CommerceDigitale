import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Category } from '../model/category';
import { Result } from '../model/result';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  //categories: Category[]; // Tableau categories de type Category
  categories;
  categorySubject = new Subject<Category[]>() // Observable categorySubject qui reçoit des tableaux de category
  constructor(private http: HttpClient) {
    this.getCategoryFromServer()
  }

  // Cette Méthode prend le tableau des catégories et le met dans notre observable
  emitCategories(): void{
    this.categorySubject.next(this.categories);
  }

  // La fonction qui va récupérer les données depuis notre backend
  getCategoryFromServer(): void{
    const url = 'http://ecomapi.tdigitale.com/api/v1/categories';
    this.http.get(url).subscribe(
      (response: Category)=>{// response:Category
        console.log(response);
        if(response){//response.status
          //this.categories = response.result;
          this.categories = response;
          console.log(this.categories);
          this.emitCategories();
        }else{
          console.log("response.message");
        }
      }
    )
  }
}
