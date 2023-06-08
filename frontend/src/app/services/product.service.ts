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

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProductIdByUserId(userId: number): Observable<number[]> {
    return this.http.get<any[]>('http://localhost:3000/cart?userID=' + userId).pipe(
      map(response => response.map(item => item.productID))
    );
  }

  updateProduct(product: Product): Observable<Product> {
    const url = this.apiUrl + '/' + product.productID;
    return this.http.put<Product>(url, product);
  }

  getProductsByIds(productIds: number[]): Observable<Product[]> {
    const requests: Observable<Product>[] = productIds.map(productId => {
      return this.http.get<Product>('http://localhost:3000/product?productID=' + productId);
    });
  
    return forkJoin(requests);}
}
