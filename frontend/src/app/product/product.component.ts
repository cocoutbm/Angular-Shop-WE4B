import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { Router } from '@angular/router';
import { identifierName } from '@angular/compiler';
import { UserService } from '../services/user.service';
import { Cart } from '../models/cart';
import { User } from '../models/user';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit{
  userId : number

  @Input() product! : Product

  constructor (private routeur: Router, private service: ProductService,private user: UserService){
     this.userId = this.user.user_id;
  }

  ngOnInit(): void {
      
  }

  addToCart() {
    const userId = 1; // ID de l'utilisateur à utiliser pour le test
    const productId = 5; // Assurez-vous d'avoir défini correctement this.product.id
  
    if (userId) {
      this.service.addToCart(productId, userId).subscribe(() => {
        console.log('Produit ajouté au panier avec succès !');
      }, error => {
        console.error('Erreur lors de l\'ajout du produit au panier :', error);
      });
    } else {
      console.error('ID utilisateur introuvable.');
    }
  }
  
  

  readMore(){
    this.routeur.navigate(['/', 'product', this.product.id])
  }

}
