import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user!: User
  users_length!: number

  constructor(private http: HttpClient) {}

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
}
