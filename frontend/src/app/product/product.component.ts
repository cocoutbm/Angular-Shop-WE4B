import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit{

  @Input() product! : Product

  constructor (private routeur: Router, private service: ProductService){}

  ngOnInit(): void {
      
  }

  addToCart(product : Product){}

  readMore(){
    this.routeur.navigate(['/', 'product', this.product.id])
  }
}
