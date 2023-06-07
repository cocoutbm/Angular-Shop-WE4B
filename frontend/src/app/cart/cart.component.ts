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

  constructor(private productService: ProductService) {
    console.log("tssest")
    console.log(this.productService)
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }

  ngOnInit() {
    if (this.isLoggedIn()) {
      console.log("test");
      this.productService.getProductsByUserId(5).subscribe(
        (products: Product[]) => {
          this.cartItems = products;
        },
        (error) => {
          console.error('Failed to retrieve products:', error);
        }
      );
    }
  }
  
}