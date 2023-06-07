import { ProductfullComponent } from './productfull/productfull.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { MyaccountComponent } from './myaccount/myaccount.component';

const routes: Routes = [
     {path:'', component: HomeComponent},
     {path:'myaccount', component: MyaccountComponent},
     {path: 'marketplace', component: MarketplaceComponent},    
     {path:'contact', component: ContactusComponent},
     {path:'products/:lab', component: ProductfullComponent}
  ];
  

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
