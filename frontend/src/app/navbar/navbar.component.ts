import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  loggedIn: boolean = false;

  constructor(private auth: AuthentificationService) {
    this.loggedIn = this.auth.isLoggedIn(); // Vérifie l'état de connexion lors de l'initialisation du composant
  }

  isLoggedIn(): boolean {
    return this.auth.isLoggedIn();
  }

  logout(): void {
    this.auth.logout(); // Appeler la méthode de déconnexion de votre service d'authentification
  }
}