import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuAreaComponent } from './menu-area/menu-area.component';
import { CategoriesBannerAreaComponent } from './categories-banner-area/categories-banner-area.component';
import { CategoriesProductAreaComponent } from './categories-product-area/categories-product-area.component';
import { FooterAreaComponent } from './footer-area/footer-area.component';
import { FooterComponent } from './footer/footer.component';

import { ProduitService } from './services/produit.service';
import { CartService } from './services/cart.service';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { EmptyCartComponent } from './empty-cart/empty-cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckoutComponent } from './checkout/checkout.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { ButtonPaypalComponent } from './button-paypal/button-paypal.component';
import { NgxPaypalComponent, NgxPayPalModule } from 'ngx-paypal';
import { NewRegisterComponent } from './new-register/new-register.component';
import { NewLoginComponent } from './new-login/new-login.component';
import { NewConnectComponent } from './new-connect/new-connect.component';
import { ClickStopPropagationDirective } from './directives/click-stop-propagation.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselPauseComponent } from './carousel-pause/carousel-pause.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuAreaComponent,
    CategoriesBannerAreaComponent,
    CategoriesProductAreaComponent,
    FooterAreaComponent,
    FooterComponent,
    CartComponent,
    ContactComponent,
    EmptyCartComponent,
    NotFoundComponent,
    RegisterComponent,
    LoginComponent,
    CheckoutComponent,
    CategoryComponent,
    HomeComponent,
    ButtonPaypalComponent,
    NewRegisterComponent,
    NewLoginComponent,
    NewConnectComponent,
    ClickStopPropagationDirective,
    CarouselPauseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPayPalModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    FormsModule,
  ],
  providers: [
    ProduitService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
