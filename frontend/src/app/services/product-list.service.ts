import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable()
export class ProductListService {
  getProducts(): Product[] {
    return [
      new Product(1, 'Smartphone', '../assets/images-produits/iphone-14.png', 'iPhone 14', 'Dernier modèle de smartphone Apple', 'Apple', 999,1099),
      new Product(2, 'Ordinateur portable', '../assets/images-produits/macbook-pro.png', 'MacBook Pro', 'Ordinateur portable haut de gamme d’Apple', 'Apple', 1299,1999),
      new Product(3, 'Tablette', '../assets/images-produits/ipad-pro.png', 'iPad Pro', 'Tablette professionnelle d’Apple', 'Apple', 799,529),
    ];
  }
}
