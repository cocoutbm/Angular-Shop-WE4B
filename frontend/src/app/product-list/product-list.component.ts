import { Component } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService] // service ProductListService au composant
})
export class ProductListComponent {
  products!: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  addToCart(product: Product) {
    //test
    console.log('Produit ajouté au panier :', product);
  }
  
}
