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

  @Input() product! : Product
  @Input() prd_idx! : number
  cart! : Cart

  constructor (private routeur: Router, private productService: ProductService,private userService: UserService){
  }

  ngOnInit(): void {
      this.productService.getCartDataLength()
      this.cart = new Cart(this.productService.cart_length, this.userService.user_id, this.product.id)
  }

  addToCart() {
      this.productService.addToCart(this.cart).subscribe(data => {
        this.cart = data
      })

  }
  
  readMore(){
    this.routeur.navigate(['/', 'product', this.product.id])
  }

}
