import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cartItems!: Product[];

  constructor(private productService: ProductService) {
    
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }

  ngOnInit() {
    
  }
}
// export class CartComponent implements OnInit {
//   public cartItems: Product[] = [];
//   private productIDs!: Number[];

//   constructor(private productService: ProductService) {
    
//   }

//   isLoggedIn(): boolean {
//     return localStorage.getItem('currentUser') !== null;
//   }

//   ngOnInit() {
//     if (this.isLoggedIn()) {
//       this.cartItems = this.productService.getProductByUserId(1)
//       console.log(this.cartItems)
//     }
//   }
// }