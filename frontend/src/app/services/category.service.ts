import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Product } from '../models/product';
import { Category } from '../models/category';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  list_length!: number
  constructor(private http: HttpClient) { }

  getData() : Observable<Category[]> {
  return this.http.get<Category[]>('http://localhost:3000/category')
  }

  getDataLength() {
    this.http.get<Category[]>('http://localhost:3000/category').subscribe( data=>{
    this.list_length= (data).length
    })
  }

  addCategory(category: Category): Observable<Category>{
    return this.http.post<Category>('http://localhost:3000/category', category)
  }
}
