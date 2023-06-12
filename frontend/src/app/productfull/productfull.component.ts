import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-productfull',
  templateUrl: './productfull.component.html',
  styleUrls: ['./productfull.component.css']
})
export class ProductfullComponent implements OnInit{
    product! : Product
    product_id! : number
    productSubscription! : Subscription

    constructor(private activatedroute : ActivatedRoute, private service: ProductService){
      this.product_id = parseInt(this.activatedroute.snapshot.paramMap.get('id') || '0')
    }

    ngOnInit(): void {
      this.productSubscription = this.service.getProductById(this.product_id).subscribe(data => {
        this.product = data;
      });
    }
}
