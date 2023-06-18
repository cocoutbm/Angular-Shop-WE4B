import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';


@Injectable({
  providedIn: 'root'
})
export class BrandService {
  list_length!: number
  constructor(private http: HttpClient) { }

  getData() : Observable<Brand[]> {
  return this.http.get<Brand[]>('http://localhost:3000/brand')
  }

  getDataLength() {
    this.http.get<Brand[]>('http://localhost:3000/brand').subscribe( data=>{
    this.list_length= (data).length
    })
  }

  addBrand(brand: Brand): Observable<Brand>{
    return this.http.post<Brand>('http://localhost:3000/brand', brand)
  }
}
