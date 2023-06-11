import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cartItems: Product[] = [];

  constructor(private productService: ProductService, private user: UserService) {
    
      this.cartItems = this.productService.getProductByUserId(user.user_id)
  
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }

  ngOnInit() {
      
  }

  clearCart(): void {
    this.cartItems = [];
  }
}
