import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-new-connect',
  templateUrl: './new-connect.component.html',
  styleUrls: ['./new-connect.component.scss']
})
export class NewConnectComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage: String;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private userService: UsersService,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
  }

  onSubmit(){
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    this.userService.signin(email, password)
    .then(
      (data)=>{
        const cart = this.cartService.cart;
        if(cart.length){
          this.router.navigate(['/checkout']);
          /*
          this.router.navigateByUrl("/checkout").then(r => {
            console.log("Page suivante");
          });
          */
        }else{
          this.router.navigate(['/produit']);
          /*
          this.router.navigateByUrl("/produit").then(r => {
            console.log("Page suivante");
          });
          */
        }
      }
    )
    .catch(
      (error)=>{
        this.errorMessage = error.message;
      }
    )
  }

}
