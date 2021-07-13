import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './cart/cart.component';
import { CategoriesProductAreaComponent } from './categories-product-area/categories-product-area.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EmptyCartComponent } from './empty-cart/empty-cart.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/auth.guard';
import { NewRegisterComponent } from './new-register/new-register.component';
import { NewLoginComponent } from './new-login/new-login.component';
import { NewConnectComponent } from './new-connect/new-connect.component';
import { CarouselPauseComponent } from './carousel-pause/carousel-pause.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'produit', component: CategoriesProductAreaComponent },
  { path: 'produit/category/:id', component: CategoryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'notFound', component: NotFoundComponent },
  { path: 'emptyCart', component: EmptyCartComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'newregister', component: NewRegisterComponent },
  { path: 'newlogin', component: NewLoginComponent },
  { path: 'newloginn', component: NewConnectComponent },
  { path: 'checkout', canActivate:[AuthGuard] ,component: CheckoutComponent },
  { path: 'carousel', component: CarouselPauseComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/NotFound', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
