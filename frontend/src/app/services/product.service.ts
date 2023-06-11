import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Product } from '../models/product';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/product'; // URL de l'API pour les produits
  private productIds!: number[];
  private products: Product[] = [];

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProductByUserId(userId: number): Product[] {

    this.products = []; 
    this.http.get<Cart[]>('http://localhost:3000/cart?userId=' + userId).subscribe(productids => {
      productids.forEach(element => {
        this.http.get<Product>('http://localhost:3000/product/' + element.productId).subscribe(prd => {
          this.products.push(prd)
        });
      })
    }
  ) 
    return this.products
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>('http://localhost:3000/product/' + id);
  }
  addToCart(productId: number, userId: number): Observable<Cart> {
    const cartItem: Cart = {
      productId: productId,
      userId: userId
    };
    return this.http.post<Cart>('http://localhost:3000/cart', cartItem);
  }
  
  
}
