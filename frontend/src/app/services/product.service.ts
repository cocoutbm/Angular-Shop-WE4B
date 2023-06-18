import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Product } from '../models/product';
import { Cart } from '../models/cart';
import { Brand } from '../models/brand';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/product'; // URL de l'API pour les produits
  private productIds!: number[];
  private products: Product[] = [];
  list_length! : number
  cart_length! : number
  cart_id! : number

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

  getIdByUserId(user_id:number, productId:number) {
    return this.http.get<Cart>('http://localhost:3000/cart?userId='+user_id +'&productId='+productId).subscribe(data=>{this.cart_id=data.id})
  }
  
  addToCart(cart: Cart): Observable<Cart> {
    return this.http.post<Cart>('http://localhost:3000/cart', cart)
  }

  getDataLength(){
    this.http.get<Product[]>('http://localhost:3000/product').subscribe( data => {
      this.list_length = (data).length
    })
  }

  addProduct(product : Product): Observable<Product>{
    return this.http.post<Product>('http://localhost:3000/product', product)
  }

  getCartDataLength(){
    this.http.get<Product[]>('http://localhost:3000/cart').subscribe( data => {
      this.cart_length = (data).length
    })
  }

  getDatabyFilter(brand: Brand,category : Category) {
    if(category.name !='ALL'){
      if(brand.name!='ALL'){
        return this.http.get<Product[]>('http://localhost:3000/product?brand='+ brand.name+'&category='+category.name)
      } else {
        return this.http.get<Product[]>('http://localhost:3000/product?category='+category.name)
      }
    } else {
      if(brand.name!='ALL'){
        return this.http.get<Product[]>('http://localhost:3000/product?brand='+ brand.name)
      } else {
        return this.http.get<Product[]>('http://localhost:3000/product')
      }
    }
  }
}
