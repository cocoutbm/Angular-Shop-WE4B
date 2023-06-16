import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'; 
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ProductService } from './services/product.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProfilComponent } from './profil/profil.component';
import { ProductComponent } from './product/product.component';
import { ProductfullComponent } from './productfull/productfull.component';
import { VendreComponent } from './vendre/vendre.component';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CartComponent,
    NavbarComponent,
    LoginPageComponent,
    SignupPageComponent,
    HomeComponent,
    HeaderComponent,
    ProfilComponent,
    ProductComponent,
    ProductfullComponent,
    VendreComponent,
    FilterPipe,
  ],
  imports: [BrowserModule, RouterModule, AppRoutingModule, FormsModule,HttpClientModule],
  providers: [
    ProductService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
