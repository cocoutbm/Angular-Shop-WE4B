import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];

  constructor() {
    this.initializeUsers();
  }
  private initializeUsers() {
    const user1 = new User(1, 'password1', 'user1@example.com', 'John', 'Doe');
    const user2 = new User(2, 'password2', 'user2@example.com', 'Jane', 'Smith');
    const user3 = new User(3, 'password3', 'user3@example.com', 'Alice', 'Johnson');
    const user4 = new User(4, 'password4', 'user4@example.com', 'Bob', 'Williams');
    const user5 = new User(5, 'password5', 'user5@example.com', 'Emily', 'Brown');
    
    this.users.push(user1, user2, user3, user4, user5);
  }

  getUsers(): User[] {
    return this.users;
  }

  createUser(user: User) {
    this.users.push(user);
  }
}
