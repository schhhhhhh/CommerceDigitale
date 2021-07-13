import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewUserService } from '../services/new-user.service';

@Component({
  selector: 'app-new-login',
  templateUrl: './new-login.component.html',
  styleUrls: ['./new-login.component.scss']
})
export class NewLoginComponent implements OnInit {

  username: String;
  password: String;
  hasClick: boolean = false;
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private newUseService : NewUserService,
              private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      "email": ["", [Validators.required, Validators.minLength(3)]],
      "password": ["", [Validators.required, Validators.minLength(8)]],
    });
  }

  connect() {
    
      this.newUseService.login(this.username, this.password).subscribe(value => {
        this.router.navigateByUrl("/produit").then(r => {
          console.log("Page suivante");
        });
      });
    } 

}
