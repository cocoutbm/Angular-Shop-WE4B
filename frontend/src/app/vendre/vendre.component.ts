import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-vendre',
  templateUrl: './vendre.component.html',
  styleUrls: ['./vendre.component.css']
})
export class VendreComponent implements OnInit{
  product !: Product

  constructor(private productService: ProductService) {
    this.product = new Product(this.productService.list_length + 1, "", "", "", "", "", 0, 0)
  }

  ngOnInit(): void {
      this.productService.getDataLength()
  }

  addProduct(): void{
    this.productService.addProduct(this.product).subscribe(data => {
      this.product = data
    })
  }
  
}
