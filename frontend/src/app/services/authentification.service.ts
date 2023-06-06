import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, switchMap } from 'rxjs';
import { User } from '../models/user';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private apiUrl = 'http://localhost:3000/user';
  private users: User[] = []; // Stocke les utilisateurs chargés depuis le fichier JSON

  constructor(private http: HttpClient) {
    this.loadUsers(); // Charge les utilisateurs lors de l'initialisation du service
  }

  private loadUsers(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => response.user)
    );
  }

  login(email: string, password: string): Observable<boolean> {
    return this.loadUsers().pipe(
      switchMap(users => {
        this.users = users;
        const foundUser = this.users.find(user => user.email === email && user.password === password);
        if (foundUser) {
          localStorage.setItem('currentUser', JSON.stringify(foundUser));
          return of(true);
        }
        return of(false);
      })
    );
  }
  

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }
}
