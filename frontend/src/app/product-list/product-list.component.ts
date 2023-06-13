import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService] // Service ProductService dans le composant
})
export class ProductListComponent implements OnInit {
  searchText:any;
  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(data => {
      this.products = data
    })
  }

  ngOnInit() {}

  addToCart(product: Product) {
    console.log('Produit ajouté au panier :', product);
  }
}
