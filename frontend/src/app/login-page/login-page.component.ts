import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private auth: AuthentificationService, private router: Router) {}

  login(): void {
    this.auth.login(this.email, this.password).subscribe(
      success => {
        if (success) {
          this.router.navigate(['/']);
          this.error = '';
        } else {
          this.error = 'Identifiants invalides';
        }
        console.log('Message d\'erreur :', this.error);
      },
      error => {
        this.error = 'Une erreur s\'est produite lors de la connexion';
        console.error('Erreur de connexion :', error);
      }
    );
  }
}
