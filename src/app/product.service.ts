import { Product } from 'src/classes/Product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

 ProductArray: Product[] = []
 Product !: Product


  constructor(private http: HttpClient) {

  }

  getProducts():Product[] {

    this.http.get<Product[]>('http://localhost:3000/products').subscribe(
      rep => {
        console.log(rep)
        this.ProductArray = rep
      }
    )


    return this.ProductArray;
  }

  getPrdByIndex(idx: number): Product {

    this.http.get<Product>('http://localhost:3000/products/' + idx).subscribe(
      data => {
        console.log(data)
        this.Product = data
      }
    )
    return this.Product
  }

updateproduct(product : Product) : Observable<Product>{
  console.log('Service Update')
  console.log(product)
  return this.http.put<Product>('http://localhost:3000/products/' + product.id, product)
}

}
