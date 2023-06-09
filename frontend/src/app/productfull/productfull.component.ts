import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-productfull',
  templateUrl: './productfull.component.html',
  styleUrls: ['./productfull.component.css']
})
export class ProductfullComponent implements OnInit{
    product! : Product
    product_id! : number

    constructor(private activatedroute : ActivatedRoute, service: ProductService){
      this.product_id = parseInt(this.activatedroute.snapshot.paramMap.get('id') || '0')
      this.product = service.getProductById(this.product_id)
    }

    ngOnInit(): void {
        
    }
}
