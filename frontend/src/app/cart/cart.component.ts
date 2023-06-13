import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cartItems: Product[] = [];

  constructor(private productService: ProductService, private user: UserService) {
      console.log(localStorage.getItem('currentUser'))  
  }

  isLoggedIn(): boolean {
    
    return localStorage.getItem('currentUser') !== null;
  }

  ngOnInit() {
    var currentUserString = localStorage.getItem('currentUser');
    
  
    if (currentUserString !== null) {
      var currentUser: User = JSON.parse(currentUserString);

      this.cartItems = this.productService.getProductByUserId(currentUser.id)
    }
  }

  clearCart(): void {
    this.cartItems = [];
  }
}
