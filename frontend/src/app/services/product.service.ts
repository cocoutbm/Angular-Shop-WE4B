import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, of, switchMap } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/product'; // URL de l'API pour les produits

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProductsByUserId(userId: number): Observable<Product[]> {
    return this.http.get<any[]>('http://localhost:3000/cart')
      .pipe(
        switchMap((cartItems) => {
          const productIds = cartItems
            .filter((item) => item.userID === userId)
            .map((item) => item.productID);
  
          if (productIds.length === 0) {
            return of([]);
          }
  
          const requests = productIds.map((productId) =>
            this.http.get<Product>(`http://localhost:3000/product/${productId}`)
          );
  
          return forkJoin(requests);
        })
      );
  }
  

  updateProduct(product: Product): Observable<Product> {
    const url = this.apiUrl + '/' + product.productID;
    return this.http.put<Product>(url, product);
  }

  getPrdByIndex(idx: number): Observable<Product> {
    const url = this.apiUrl + '/' + idx;
    return this.http.get<Product>(url);
  }
}
