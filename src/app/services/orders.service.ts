import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '../model/cart';
import { Result } from '../model/result';
import { Users } from '../model/users';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient, private cartService: CartService ) { }

  createOrders(users: Users, cart: Cart[]){
    return new Promise(
      (resolve, reject)=>{
        cart.forEach((data)=>{
          const price = data.number * data.produit.prix
          const url = ''+ '&idProduit=' + data.produit.id +'&quantity=' + data.number +'&price=' +price ;// url de commande

          this.http.get(url).subscribe(
            (response: Result)=>{
              if(response){// response.status == 200
                this.cartService.removeElementOfCart(0);
                if(cart.length == 0){
                  resolve(true);
                }
              }else{
                reject(false);
              }
            },
            (error)=>{
              reject("Error: " + error);
            }
          )
        });// Fin forEach
      }
    );
  }
}
