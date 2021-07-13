import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Produit } from '../shared/produits';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  apiURL: string = 'http://ecomapi.tdigitale.com/api/v1/produits';
  produit!: Produit[];

  constructor(private http: HttpClient) { }
  listeProduit(): Observable<Produit[]>{
    return this.http.get<Produit[]>(this.apiURL);
    console.log(this.http.get<Produit[]>(this.apiURL));
  }
}
