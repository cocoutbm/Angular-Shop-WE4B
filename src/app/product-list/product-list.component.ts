import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/classes/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  ProductArray : Product[] = []

  constructor(private service : ProductService) { 
    this.ProductArray = this.service.getProducts()
  }

  ngOnInit(): void {

  }

 

}
