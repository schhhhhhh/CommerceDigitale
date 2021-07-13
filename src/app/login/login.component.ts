import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from '../model/users';
import { CartService } from '../services/cart.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage;

  constructor(private userService: UsersService,
              private router: Router,
              private fb: FormBuilder,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.initFormLogin();
  }

  //  Méthode d'Initialisation du formulaire
  initFormLogin(){
    this.loginForm = this.fb.group({
      email: this.fb.control('', Validators.email),
      password: this.fb.control('', Validators.maxLength(6))
    });
  }

  onSubmit(): void{
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    const newUser: Users = {email: email, password: password};
    this.userService.authentifier(newUser).then(
      (data)=>{
        const cart = this.cartService.cart;
        if(cart.length){
          this.router.navigate(['/checkout']);
        }else{
          this.router.navigate(['/produit']);
        }
      }
    ).catch((error)=>{
      this.errorMessage = error;
      //console.log(error);
    })
    //console.log({email: email, password: password});

  }

}
