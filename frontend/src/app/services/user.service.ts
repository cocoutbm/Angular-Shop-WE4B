import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { CartComponent } from '../cart/cart.component';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user!: User
  users_length!: number
  user_id!: number
 
  constructor(private http: HttpClient) {}

  

  setSessionId(id : number) {
    this.user_id = id
  }

  getUsersLength() {
    this.http.get<User[]>('http://localhost:3000/user').subscribe(data => {
      this.users_length = (data).length
    })
  }

  getUsersByIndex(user_id: number) {
    this.http.get<User>('http://localhost:3000/user' + user_id).subscribe(data => {
      this.user = data
    })
    return this.user
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:3000/user', user);
  }

  getPasswordByEmail(email: String, process: (user: User) => any) {
    this.http.get<User[]>('http://localhost:3000/user?email=' + email).subscribe(data => {
      this.user = data[0]
      process(this.user)
    })
  }
  getuserid(){
    return this.user_id
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }
  
}
