import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from '../model/users';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-new-register',
  templateUrl: './new-register.component.html',
  styleUrls: ['./new-register.component.scss']
})
export class NewRegisterComponent implements OnInit {

  registerForm: FormGroup;
  errorMessage;

  constructor(private fb: FormBuilder,
              private userService: UsersService,
              private router: Router) { }

  ngOnInit(): void {
    //initialisation du formulaire
    this.initRegisterForm();
  }

  // Méthode d'initialisation du formulaire
  initRegisterForm(){
    this.registerForm = this.fb.group({
      nom_complet: this.fb.control('', [Validators.required]),
      username: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.maxLength(6)]),
      telephone: this.fb.control('', [Validators.required]),
      ville: this.fb.control('', [Validators.required]),
      pays: this.fb.control('', [Validators.required]),
      adresse: this.fb.control('', [Validators.email]),
    });
  }

  onSubmit():void{
    const nom_complet_User = this.registerForm.get('nom_complet').value;
    const username_User = this.registerForm.get('username').value;
    const email_User = this.registerForm.get('email').value;
    const password_User = this.registerForm.get('password').value;
    const telephone_User = this.registerForm.get('telephone').value;
    const ville_User = this.registerForm.get('ville').value;
    const pays_User = this.registerForm.get('pays').value;
    const adresse_User = this.registerForm.get('adresse').value;
    const newUser: Users = { nom_complet: nom_complet_User,
                             username: username_User,
                             email: email_User,
                             password: password_User,
                             telephone: telephone_User,
                             ville: ville_User,
                             pays: pays_User,
                             adresse: adresse_User
                           };
  this.userService.signup(newUser.username, newUser.password)//renvoie une promise
  .then(()=>{
    this.router.navigate(['/produit']);
  })
  .catch((error)=>{
    this.errorMessage = error;
    console.log(error);
  });
  }

}
