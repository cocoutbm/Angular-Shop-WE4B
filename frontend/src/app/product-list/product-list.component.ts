import { Component } from '@angular/core';
import { ProductListService } from '../services/product-list.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductListService] // service ProductListService au composant
})
export class ProductListComponent {
  products!: Product[];

  constructor(private productListService: ProductListService) {}

  ngOnInit() {
    this.products = this.productListService.getProducts();
  }

  addToCart(product: Product) {
    //test
    console.log('Produit ajouté au panier :', product);
  }
  
}
