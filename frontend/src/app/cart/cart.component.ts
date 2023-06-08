import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cartItems: Product[] = [];
  private productIDs!: Number[];

  constructor(private productService: ProductService) {
    
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }

  ngOnInit() {
    if (this.isLoggedIn()) {
      this.productService.getProductIdByUserId(5).subscribe(productIds => {
        console.log(productIds) 
      });
    }
  }
}