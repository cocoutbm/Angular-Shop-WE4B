import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  email!: string;
  password!: string;

  constructor(private auth: AuthentificationService, private router: Router) {}

  login(): void {
    if (this.auth.login(this.email, this.password)) {
      // Redirection vers la page d'accueil
      this.router.navigate(['/']);
    } else {
      // Afficher un message d'erreur ou effectuer une autre action en cas d'échec de la connexion
    }
  }
}

