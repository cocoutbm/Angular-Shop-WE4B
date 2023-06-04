import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private loggedIn = false;

  

  login(email: string, password: string): boolean {
    // Vérifiez les informations d'identification auprès de votre backend
    if (email === 'email@example.com' && password === 'password') {
      this.loggedIn = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedIn = false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
