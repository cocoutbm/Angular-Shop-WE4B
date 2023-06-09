import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, of, switchMap } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/product'; // URL de l'API pour les produits
  private productIds!: number[];
  private products!: Product[];
  private product!: Product;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProductByUserId(userId: number): Product[] {
    this.http.get<number[]>('http://localhost:3000/cart?userId=' + userId).subscribe(productids => {
      productids.forEach(element => {
        console.log(element)
        this.http.get<Product>('http://localhost:3000/product?productID=' + element).subscribe(product => {
          console.log(product)
          this.products.push(product)
        });
      })
    }
  )

    // console.log("la liste d'id : " + this.productIds)
    // this.productIds.forEach(productId => {
    //   this.http.get<Product>('http://localhost:3000/product?productID=' + productId).subscribe(product => {
    //     this.products.push(product)
    //   })
    // })
    return this.products

  }

  getProductById(id: number): Product {
    this.http.get<Product>('http://localhost:3000/product/' + id).subscribe(data => {
      this.product = data
    })
    return this.product
  }
}
