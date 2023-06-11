import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProfilComponent } from './profil/profil.component';
import { ProductfullComponent } from './productfull/productfull.component';
import { VendreComponent } from './vendre/vendre.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'profil', component: ProfilComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'product/:id', component: ProductfullComponent},
  { path:  'vendre',component: VendreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
